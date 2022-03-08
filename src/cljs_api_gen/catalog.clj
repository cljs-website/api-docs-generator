(ns cljs-api-gen.catalog
  (:require
    [fipp.edn :refer [pprint]]
    [clojure.edn :as edn]
    [clansi.core :refer [style]]
    [clojure.string :refer [join]]
    [me.raynes.fs :refer [exists?]]
    [cljs-api-gen.docfile :refer [build-docfiles
                                  lint-docfiles!
                                  create-docfile-stubs!]]
    [cljs-api-gen.config :refer [cache-dir
                                 edn-parsed-file
                                 edn-result-file]]
    [cljs-api-gen.parse :refer [parse-all]]
    [cljs-api-gen.repo-cljs :refer [cljs-version->tag
                                    published-cljs-tags
                                    with-version!
                                    checkout-repos!
                                    *cljs-tag*
                                    *cljs-date*
                                    *clj-tag*
                                    master?
                                    get-master-tag]]
    [cljs-api-gen.result :refer [cached-result
                                 annotate-result]]
    [cljs-api-gen.state :refer [*result* *docfiles*]]))


(defn print-summary*
  [parsed]
  (let [ns-groups (group-by :ns parsed)
        pairs (sort-by first ns-groups)]
    (doseq [[ns- symbols] pairs]
      (printf "    %-24s %4s = %s\n"
        ns-
        (count symbols)
        (let [type-groups (group-by :type symbols)
              pairs (sort-by first type-groups)]
          (join " + "
            (for [[type- symbols] pairs]
              (let [total (count symbols)]
                (str total " " (cond-> type- (> total 1) (str "s")))))))))))

(defn print-summary
  [parsed]
  (println " Syntax API:")
  (print-summary* (:syntax parsed))
  (println " Options API:")
  (print-summary* (:options parsed))
  (println " Library API:")
  (print-summary* (:library parsed))
  (println " Compiler API:")
  (print-summary* (:compiler parsed)))

(defn create-catalog!
  [{:as options
    :keys [version skip-parse?]
    :or {version :latest, skip-parse? true}}]

  (println (style "\nCreating api catalog...\n" :cyan))

  (let [
        ;; This holds the "result" data for the most recently parsed cljs version.
        ;; Sometimes this is cached, so there is some ceremony here to prevent pulling
        ;; the value from its cache until its actually needed.  We use an expression
        ;; wrapped in a `delay` to do this.  Since not every value is cached, we just
        ;; use the `get-prev-result` to not worry about it.
        prev-result (atom nil)
        get-prev-result #(if (delay? @prev-result)
                           @@prev-result
                           @prev-result)

        ;; normalize the given version to a tag if needed
        version (or (and (string? version)
                         (cljs-version->tag version))
                    version)

        ;; Add a plus sign to the last tag so we can signal that we're parsing
        ;; features not yet published.
        last-tag (last @published-cljs-tags)
        master-tag (get-master-tag "clojurescript")

        tags (case version
               :latest @published-cljs-tags
                       ;; I used to parse unpublished commits on master when cljs was slower to publish recent changes, but I’m removing this now:
                       ;;  (cond-> @published-cljs-tags
                       ;;   (not= last-tag master-tag) (concat [master-tag]))
               (if-not ((set @published-cljs-tags) version)
                 (do
                   (println (style "Unrecognized version tag" :red) version)
                   (System/exit 1))
                 (concat (take-while (partial not= version) @published-cljs-tags) [version])))

        skipped-previous? (atom false)
        last-tag (last tags)]

    (println "Outputting to " (style cache-dir :cyan))

    ;; parse symbol history
    (println (style "\nParsing symbol history...\n" :magenta))
    (reset! skipped-previous? false)
    (doseq [tag tags]

      ;; check if skip-parse? and if this tag's edn-parsed-file already exists
      (let [parsed-file (str cache-dir "/" (edn-parsed-file tag))
            skip? (and skip-parse?             ;; do we want to skip?
                       (exists? parsed-file))] ;; can we skip?

        (if skip?

          (do
            (when-not @skipped-previous?
              (println (style "\nUsing cache instead of parsing:" :yellow)))
            (print (str " " tag))
            (reset! skipped-previous? true)
            (reset! prev-result (delay (edn/read-string (slurp parsed-file)))))

          ;; parse
          (with-version! tag
            (checkout-repos!)
            (reset! skipped-previous? false)

            (println "\n\n=========================================================")
            (println "\nChecked out ClojureScript "
              (style
                (cond-> *cljs-tag* (master? *cljs-tag*) (str " (master)"))
                :yellow))
            (println "with Clojure:" (style *clj-tag* :yellow))
            (println "published on" (style *cljs-date* :yellow))

            (println "\nParsing...")
            (let [parsed (parse-all)]
              (print-summary parsed)

              (println "\nWriting parsed data to" (style parsed-file :cyan))
              (let [result (cached-result parsed (get-prev-result))]
                (spit parsed-file (with-out-str (pprint result)))
                (reset! prev-result result)))

            (println "\nDone.")))))

    (println)
    (binding [*result* (get-prev-result)]

      ;; create docfile stubs for symbols that don't have them
      ;; (allowing easier PRs for those wanting to populate them)
      (create-docfile-stubs! (-> *result* :symbols keys set))
      (create-docfile-stubs! (-> *result* :namespaces keys set))

      ;; compile docfile files (manual docs)
      (binding [*docfiles* (build-docfiles)]

        ;; lint the docfiles
        (lint-docfiles!)

        ;; create final result
        (println (style "\nMerging annotations into final result...\n" :magenta))
        (let [final-result (with-version! last-tag (annotate-result))
              final-file (edn-result-file last-tag)]
            (spit final-file (with-out-str (pprint final-result)))
            (println (style " Success! " :bg-green))
            (println "Wrote to" final-file))))))
