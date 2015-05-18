(ns cljs-api-gen.repo-cljs
  (:require
    [clojure.java.shell :refer [sh]]
    [me.raynes.fs :refer [exists? mkdir base-name]]
    [clojure.string :refer [trim split split-lines]]
    [cljs-api-gen.config :refer [repos-dir]]
    ))

(def ^:dynamic *cljs-version* "ClojureScript version string   (e.g. \"0.0-3211\")" nil)
(def ^:dynamic *cljs-num*     "ClojureScript version number   (e.g. 3211)" nil)
(def ^:dynamic *cljs-tag*     "ClojureScript version git tag  (e.g. \"r3211\")" nil)
(def ^:dynamic *cljs-date*    "ClojureScript version date     (e.g. \"2015-03-09\")" nil)
(def ^:dynamic *clj-version*  "Clojure version string         (e.g. \"1.7.0-beta1\")" nil)
(def ^:dynamic *clj-tag*      "Clojure version git tag        (e.g. \"clojure-1.7.0-beta1\"" nil)

(defn clone-or-pull!
  [repo-url]
  (let [repo-name (base-name repo-url)
        repo-dir (str repos-dir "/" repo-name)]
    (when-not (exists? repo-dir)
      (sh "git" "clone" repo-url :dir repos-dir))
    (sh "git" "checkout" "master" :dir repo-dir)
    (sh "git" "pull" :dir repo-dir)))

(defn clone-or-fetch-repos!
  []
  (when-not (exists? repos-dir)
    (mkdir repos-dir))
  (clone-or-pull! "https://github.com/clojure/clojurescript")
  (clone-or-pull! "https://github.com/clojure/clojure"))

(defn get-current-repo-tag
  [repo]
  (trim (:out (sh "git" "describe" "--tags" :dir (str repos-dir "/" repo)))))

(defn get-latest-repo-tag
  [repo]
  (trim (:out (sh "git" "describe" "--abbrev=0" "--tags" "master" :dir (str repos-dir "/" repo)))))

(defn clj-tag->version
  [tag]
  (when-let [[_ v] (re-find #"clojure-(.*)" tag)]
    v))

(defn cljs-tag->version
  [tag]
  (when-let [[_ number] (re-find #"r(.*)" tag)]
    (str "0.0-" number)))

(defn cljs-tag->num
  [tag]
  (when-let [[_ number] (re-find #"r(.*)" tag)]
    (Integer/parseInt number)))

(defn repo-tag-date
  [repo tag]
  (-> (sh "git" "log" "-1" "--format=%ai" tag :dir (str repos-dir "/" repo))
      :out
      trim
      (split #"\s+")
      first))

(defn get-cljs-version-tags
  []
  (let [sh-return (sh "git" "tag" :dir (str repos-dir "/clojurescript"))
        tags (split-lines (:out sh-return))]
    (->> tags
         (filter #(re-find #"^r" %))
         (sort-by cljs-tag->num))))

(defn get-cljs-tags-to-parse*
  [latest]
  (let [tags (get-cljs-version-tags)]
    (if-not latest
      [nil tags]
      (let [latest-num (cljs-tag->num latest)]
        (split-with #(<= (cljs-tag->num %) latest-num) tags)))))

(defn get-cljs-tags-to-parse
  ([latest-tag] (get-cljs-tags-to-parse latest-tag :all))
  ([latest-tag n-or-all]
   (let [[_past-tags tags-left] (get-cljs-tags-to-parse* latest-tag)]
     (if (= :all n-or-all)
       tags-left
       (try (take n-or-all tags-left)
            (catch Exception e tags-left))))))

(defn cljs-tag->clj-tag
  [cljs-tag]
  (let [bootstrap (:out (sh "git" "show" (str cljs-tag ":script/bootstrap")
                            :dir (str repos-dir "/clojurescript")))
        [_ m1] (re-find #"(?m)^CLOJURE_RELEASE=\"(.*)\"" bootstrap)
        [_ m2] (re-find #"(?m)^unzip .*clojure-(.*)\.zip" bootstrap)
        version (or m1 m2)]
    (when version
      (str "clojure-" version))))

(defn checkout-cljs-tag!
  [cljs-tag]
  (let [clj-tag (cljs-tag->clj-tag cljs-tag)]
    (sh "git" "checkout" cljs-tag :dir (str repos-dir "/clojurescript"))
    (sh "git" "checkout" clj-tag  :dir (str repos-dir "/clojure"))
    [(get-current-repo-tag "clojurescript")
     (get-current-repo-tag "clojure")]))

(defn get-github-file-link
  ([repo path] (get-github-file-link repo path nil))
  ([repo path [start-line end-line]]
   (let [strip-path (subs path (inc (count repo)))
         tag (case repo
               "clojure" *clj-tag*
               "clojurescript" *cljs-tag*
               nil)]
     (cond-> (str "https://github.com/clojure/" repo "/blob/" tag "/" strip-path)
       start-line (str "#L" start-line)
       (and start-line end-line) (str "-L" end-line)))))

(defmacro with-versions
  [cljs-tag clj-tag & body]
  `(binding [*cljs-tag*     ~cljs-tag
             *clj-tag*      ~clj-tag

             *cljs-date*    (repo-tag-date "clojurescript" ~cljs-tag)
             *cljs-version* (cljs-tag->version ~cljs-tag)
             *cljs-num*     (cljs-tag->num     ~cljs-tag)
             *clj-version*  (clj-tag->version  ~clj-tag)
             ]
     ~@body))

(defmacro with-checkout!
  [cljs-tag & body]
  `(let [[cljs-tag# clj-tag#] (checkout-cljs-tag! ~cljs-tag)]
     (with-versions cljs-tag# clj-tag#
       ~@body)))

(comment

  ;; TESTS

  (def repos-dir "repos")
  (require '[clojure.java.shell :refer [sh]])
  (require '[me.raynes.fs :refer [exists? mkdir base-name]])
  (require '[clojure.string :refer [trim split-lines]])

  (clone-or-fetch-repos!)

  (get-cljs-version-tags)

  (cljs-tag->clj-tag "r927")
  (cljs-tag->clj-tag "r1885")
  (cljs-tag->clj-tag "r3211")

  (checkout-cljs-tag! "r927")
  (checkout-cljs-tag! "r1885")
  (checkout-cljs-tag! "r3211")

  )

