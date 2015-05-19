(ns cljs-api-gen.write
  (:refer-clojure :exclude [replace])
  (:require
    [clojure.edn :as edn]
    [clojure.set :refer [rename-keys]]
    [clojure.string :refer [join replace split trim]]
    [fipp.edn :refer [pprint]]
    [cljs-api-gen.repo-cljs :refer [cljs-tag->version]]
    [cljs-api-gen.config :refer [*output-dir*
                                 refs-dir
                                 edn-result-file]]
    [cljs-api-gen.util :refer [symbol->filename mapmap]]
    [me.raynes.fs :refer [exists? mkdir]]
    [stencil.core :as stencil]
    ))

(defn item-filename
  [item]
  (str *output-dir* "/" refs-dir "/" (:ns item) "_" (symbol->filename (:name item))))

(defn history-change
  [[change version]]
  (let [change ({"+" "Added", "-" "Removed"} change)]
    {:change change
     :version version}))

(defn sig-args
  [text]
  (let [[_ args] (re-find #"^\[(.*)\]$" text)]
    args))

(defn source-link
  [filename item]
  (str "<ins>[" filename ":" (join "-" (:source-lines item)) "](" (:source-link item) ")</ins>"))

(defn source-path
  [item]
  ;; clojurescript/
  ;; └── src/
  ;;     └── cljs/
  ;;         └── cljs/
  ;;             └── <ins>[core.cljs:2109-2114](https://github.com/clojure/clojurescript/blob/r3211/src/cljs/cljs/core.cljs#L2109-L2114)</ins>
  (let [crumbs (split (:source-filename item) #"/")
        last-i (dec (count crumbs))
        branch "└── "
        space  "    "]
    (join "\n"
      (map-indexed
        (fn [i crumb]
          (if (zero? i)
            crumb
            (str (join (repeat (dec i) space))
                 branch
                 (if (= i last-i)
                   (source-link crumb item)
                   crumb))))
        crumbs))))

(defn md-escape
  [sym]
  (-> sym
      (replace "*" "\\*")))

(defn ref-file-data
  [item]
  (-> item
      (assoc
        :display-name (md-escape (:full-name item))
        :data (with-out-str (pprint item))
        :history (map history-change (:history item))
        :signature (map #(hash-map :name (:name item)
                                   :args (sig-args %))
                        (:signature item))
        :source-path (source-path item))
      (update-in [:docstring]
        #(if (or (nil? %) (= "" (trim %)))
           "(no docstring)"
           %))))

(defn dump-ref-file!
  [item]
  (let [filename (item-filename item)]
    (spit (str filename ".md")
      (stencil/render-string
        (slurp "templates/ref.md")
        (ref-file-data item)))))

(defn get-edn-path []
  (str *output-dir* "/" edn-result-file))

(defn get-last-written-result []
  (let [path (get-edn-path)]
    (when (exists? path)
      (edn/read-string (slurp path)))))

(defn readme-library-changes
  [result]
  ;; name-link tuples
  (let [api (:library-api result)
        changes (last (:changes api))
        symbols (:symbols api)
        make (fn [full-name change]
               (let [item (get symbols full-name)
                     text (md-escape full-name)]
                 {:text (if (= change :added)
                          text
                          (str "~~" text "~~"))
                  :change ({:added "new" :removed ""} change)
                  :name (:name item)
                  :ns (:ns item)
                  :link (str refs-dir "/" (:full-name-encode item) ".md")
                  }))
        added (map #(make % :added) (:added changes))
        removed (map #(make % :removed) (:removed changes))
        sort-key (fn [item] [(:ns item) (:name item)])
        all (sort-by sort-key (concat added removed))]
    all))

(defn readme-library-symbols
  [result]
  ;; clj-name-type-history tuples
  )

(defn readme-file-data
  [result]
  {:changes (readme-library-changes result)
   :cljs-version (-> result :release :cljs)
   :clj-version  (-> result :release :clj)
   :cljs-date  (-> result :release :cljs-date)})

(defn dump-readme! [result]
  (spit (str *output-dir* "/README.md")
        (stencil/render-string
          (slurp "templates/readme.md")
          (readme-file-data result)
          )))

(defn dump-edn-file! [result]
  (spit (get-edn-path) (with-out-str (pprint result))))

(defn dump-result! [result]
  (mkdir *output-dir*)
  (mkdir (str *output-dir* "/" refs-dir))

  (doseq [item (vals (:symbols (:library-api result)))]
    (dump-ref-file! item))

  (dump-readme! result)
  (dump-edn-file! result))

