---
name: syntax/earmuffs
display as: "*earmuffs*"
clojure doc: http://dev.clojure.org/display/community/Library+Coding+Standards
see also:
  - cljs.core/binding
---

## Summary

A naming convention for dynamic vars (unenforced).

- `(def ^:dynamic *foo* 1)`

## Details

Dynamic vars are global vars that you intend to temporarily rebind with
[doc:cljs.core/binding].

NOTE: Sometimes, the core library uses the earmuffs convention for non-dynamic
special global vars (e.g. [doc:cljs.core/*clojurescript-version*],
[doc:cljs.core/*main-cli-fn*]).

## Examples

```clj
(def ^:dynamic *foo* 1)

(defn print-foo []
  (println *foo*))

(print-foo)
;; 1

(binding [*foo* 2]
  (print-foo))
;; 2

(print-foo)
;; 1
```

<!-- AUTO-GENERATED docfile links for github -->
[doc:cljs.core/binding]:https://github.com/cljs/api/blob/master/docfiles/cljs.core/binding.md
[doc:cljs.core/*main-cli-fn*]:https://github.com/cljs/api/blob/master/docfiles/cljs.core/STARmain-cli-fnSTAR.md
[doc:cljs.core/*clojurescript-version*]:https://github.com/cljs/api/blob/master/docfiles/cljs.core/STARclojurescript-versionSTAR.md
