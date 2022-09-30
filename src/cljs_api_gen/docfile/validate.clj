(ns cljs-api-gen.docfile.validate
  (:import
    [java.util.regex Pattern])
  (:require
    [cljs-api-gen.docfile.doclink :refer [docname?]]
    [cljs-api-gen.config :refer [docfile-dir docfile-ext]]
    [cljs-api-gen.read :refer [read-forms-from-str]]
    [cljs-api-gen.encode :refer [encode-fullname
                                 fullname->ns-name]]
    [cljs-api-gen.repo-cljs :refer [published-cljs-tag?
                                    published-cljs-tags
                                    cljs-version->tag]]
    [cljs-api-gen.state :refer [*result*]]

    [me.raynes.fs :refer [exists?]]
    [clojure.string :refer [split split-lines join starts-with?]]
    [clansi.core :refer [style]]
    [fuzzy-matcher.core :as fuzzy]))

;;--------------------------------------------------------------------------------
;; Required Sections
;;--------------------------------------------------------------------------------

(def required-sections
  ["name"])

(defn required-section-error-msg
  "Returns error message if section name is not present in doc."
  [name- doc]
  (when-not (some #{name-} (:sections doc))
    (str "'" (name name-) "' is a required section.")))

(defn required-sections-error-msg
  "Returns error messages if required sections are not present in doc."
  [doc]
  (let [msgs (keep #(required-section-error-msg % doc) required-sections)]
    (when (seq msgs)
      (join "\n" msgs))))

;;--------------------------------------------------------------------------------
;; Recognized Sections
;;--------------------------------------------------------------------------------

(def recognized-sections
  ["name"
   "known as"
   "display as"
   "tags"
   "summary"
   "summary for compiler"
   "details"
   "details for compiler"
   "examples"
   "see also"
   "search terms"
   "todo"
   "notes"
   "clojure doc"
   "edn doc"
   "since"])

(defn section-match?
  [name- known]
  (if (instance? Pattern known)
    (re-find known name-)
    (= known name-)))

(defn similar-section
  [name-]
  (let [knowns (filter string? recognized-sections)
        candidates (fuzzy/search name- knowns)]
    (first candidates)))

(defn recognized-section?
  [name-]
  (some #(section-match? name- %) recognized-sections))

(defn unrecognized-section-error-msg
  [name-]
  (when-not (recognized-section? name-)
    (let [similar (similar-section name-)]
      (cond-> (str "'" name- "' is not a recognized section")
        similar (str ", did you mean '" similar "'?")))))

(defn unrecognized-sections-error-msg
  [doc]
  (let [msgs (keep unrecognized-section-error-msg (:sections doc))]
    (when (seq msgs)
      (join "\n" msgs))))

;;--------------------------------------------------------------------------------
;; Validate Filename
;;--------------------------------------------------------------------------------

(defn filename-error-msg
  "If filename is not valid, return error message."
  [{:keys [full-name filename parentdir] :as doc}]
  (when full-name
    (let [[ns- name-] (fullname->ns-name full-name)
          actual (cond->> filename
                     name- (str parentdir "/"))
          expected (str (encode-fullname full-name) docfile-ext)]
      (when (not= actual expected)
        (str full-name " should be in " expected ", not " actual)))))

;;--------------------------------------------------------------------------------
;; Validate Symbol
;;--------------------------------------------------------------------------------

(defn symbol-check-pass?
  "Determines if we should pass the symbol check."
  [full-name]
  (or (nil? *result*)               ;; ignore if no known symbols supplied
      (get-in *result* [:symbols full-name])
      (get-in *result* [:namespaces full-name])))

(defn doclink-check-pass?
  "Determines if we should pass the doclink check.
  (very similar to `symbol-check-pass?`, please see `cljs-api-gen.docfile.doclink` for details)"
  [full-name]
  (or (nil? *result*)               ;; ignore if no known symbols supplied
      (docname? full-name)))

(defn symbol-unknown-error-msg
  [{:keys [full-name] :as doc}]
  (when-not (symbol-check-pass? full-name)
    (str "This file is for an unknown symbol '" full-name "'.")))

;;--------------------------------------------------------------------------------
;; Validate 'See Also' Symbols
;;--------------------------------------------------------------------------------

(defn see-also-missing-error-msg*
  [full-name]
  (when-not (doclink-check-pass? full-name)
    (str "'See Also' symbol '" full-name "' is an unknown symbol.")))

(defn see-also-missing-error-msg
  [{:keys [see-also] :as doc}]
  (let [msgs (keep see-also-missing-error-msg* see-also)]
    (when (seq msgs)
      (join "\n" msgs))))

;;--------------------------------------------------------------------------------
;; Validate Doclinks
;;--------------------------------------------------------------------------------

(defn doclink-error
  [docname]
  (when-not (doclink-check-pass? docname)
    (str "Unknown doclink reference: " docname)))

(defn doclink-missing-error-msg*
  "Gather missing doclinks from given markdown body text."
  [{:keys [body biblio]}]
  (let [msgs (keep doclink-error biblio)]
    (when (seq msgs)
      (join "\n" msgs))))

(defn doclink-missing-error-msg
  "Gather missing doclinks from markdown description and examples."
  [{:keys [description examples] :as doc}]
  (let [md-bodies (keep identity [cons description examples])
        msgs (keep doclink-missing-error-msg* md-bodies)]
    (when (seq msgs)
      (join "\n" msgs))))

;;--------------------------------------------------------------------------------
;; Syntax Equiv docs
;;--------------------------------------------------------------------------------

(defn syntax-equiv-error-msg*
  [key doc]
  (when (get doc key)
    (str key " is currently only allowed for syntax entries, since it is autodetermined elsewhere.")))

(defn syntax-equiv-error-msg
  "Allow only clj-doc and edn-doc for syntax entries."
  [{:keys [full-name] :as doc}]
  (when-not (starts-with? full-name "syntax/")
    (let [msgs (keep #(syntax-equiv-error-msg* % doc) [:clj-doc :edn-doc])]
      (when (seq msgs)
        (join "\n" msgs)))))

;;--------------------------------------------------------------------------------
;; Validate Since Version
;;--------------------------------------------------------------------------------

(defn since-version-error-msg
  [{:keys [since] :as doc}]
  (when since
    (when-not (@published-cljs-tag? (cljs-version->tag since))
      (str "The version " since " does not seem valid as it does not correspond to a published tag."))))

;;--------------------------------------------------------------------------------
;; Validate All
;;--------------------------------------------------------------------------------

(def error-detectors
  "All error detectors, each producing error messages if problem found."
  [required-sections-error-msg
   unrecognized-sections-error-msg
   symbol-unknown-error-msg
   see-also-missing-error-msg
   doclink-missing-error-msg
   filename-error-msg
   syntax-equiv-error-msg
   since-version-error-msg])

(defn valid-doc? [doc]
  (let [errors (seq (keep #(% doc) error-detectors))
        valid? (not errors)]
    (when-not valid?
      (binding [*out* *err*]
        (println)
        (println (style (:filename doc) :cyan))
        (println (style "  ERRORS" :red))
        (doseq [msg errors]
          (println "    " msg))))
    valid?))
