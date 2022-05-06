// NOTE: THIS IS AN OUTDATED FORMAT NOW, but I’ll keep it here for record.
//
// Source: https://google.github.io/closure-library/api/types.js
// (used by search box in Google Closure Library API site)
//
// we may want to incorporate this data into our search
var TYPES = {
	"types": [{
		"name": "goog",
		"href": "namespace_goog.html",
		"namespace": true,
		"interface": false,
		"statics": ["DEBUG", "DEPENDENCIES_ENABLED", "DISALLOW_TEST_ONLY_CODE", "ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", "ENABLE_DEBUG_LOADER", "LOAD_MODULE_USING_EVAL", "LOCALE", "NATIVE_ARRAY_PROTOTYPES", "SEAL_MODULE_EXPORTS", "STRICT_MODE_COMPATIBLE", "TRUSTED_SITE", "abstractMethod", "addDependency", "addSingletonGetter", "base", "basePath", "bind", "cloneObject", "define", "defineClass", "exportProperty", "exportSymbol", "forwardDeclare", "getCssName", "getHashCode", "getMsg", "getMsgWithFallback", "getObjectByName", "getUid", "global", "globalEval", "globalize", "hasUid", "inherits", "isArray", "isArrayLike", "isBoolean", "isDateLike", "isDef", "isDefAndNotNull", "isFunction", "isNull", "isNumber", "isObject", "isString", "loadModule", "mixin", "now", "nullFunction", "partial", "provide", "removeHashCode", "removeUid", "require", "scope", "setCssNameMapping", "setTestOnly", "tagUnsealableClass", "typeOf"]
	}, {
		"name": "goog.Delay",
		"href": "class_goog_Delay.html",
		"namespace": false,
		"interface": false,
		"members": ["disposeInternal", "fire", "fireIfActive", "isActive", "start", "startIfNotActive", "stop"]
	}, {
		"name": "goog.Disposable",
		"href": "class_goog_Disposable.html",
		"namespace": false,
		"interface": false,
		"statics": ["Disposable.INCLUDE_STACK_ON_CREATION", "Disposable.MONITORING_MODE", "Disposable.clearUndisposedObjects", "Disposable.getUndisposedObjects", "Disposable.isDisposed"],
		"members": ["addOnDisposeCallback", "creationStack", "dispose", "disposeInternal", "getDisposed", "isDisposed", "registerDisposable"]
	}, {
		"name": "goog.Disposable.MonitoringMode",
		"href": "enum_goog_Disposable_MonitoringMode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.History",
		"href": "class_goog_History.html",
		"namespace": false,
		"interface": false,
		"statics": ["History.HASH_ALWAYS_REQUIRED", "History.LEGACY_IE", "History.isOnHashChangeSupported"],
		"members": ["documentLoaded", "getToken", "onDocumentLoaded", "replaceToken", "setEnabled", "setToken"]
	}, {
		"name": "goog.History.Event",
		"href": "class_goog_History_Event.html",
		"namespace": false,
		"interface": false,
		"members": ["isNavigation", "token"]
	}, {
		"name": "goog.History.EventType",
		"href": "enum_goog_History_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.History.PollingType",
		"href": "enum_goog_History_PollingType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.Promise",
		"href": "class_goog_Promise.html",
		"namespace": false,
		"interface": false,
		"statics": ["Promise.DEFAULT_MAX_UNUSED", "Promise.LONG_STACK_TRACES", "Promise.UNHANDLED_REJECTION_DELAY", "Promise.all", "Promise.allSettled", "Promise.firstFulfilled", "Promise.race", "Promise.reject", "Promise.resolve", "Promise.setUnhandledRejectionHandler", "Promise.withResolver"],
		"members": ["cancel", "then", "thenAlways", "thenCatch", "thenVoid"]
	}, {
		"name": "goog.Promise.CallbackEntry_",
		"href": "class_goog_Promise_CallbackEntry_.html",
		"namespace": false,
		"interface": false,
		"members": ["always", "child", "context", "next", "onFulfilled", "onRejected", "reset"]
	}, {
		"name": "goog.Promise.CancellationError",
		"href": "class_goog_Promise_CancellationError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.Promise.Resolver_",
		"href": "class_goog_Promise_Resolver_.html",
		"namespace": false,
		"interface": false,
		"members": ["promise", "reject", "resolve"]
	}, {
		"name": "goog.Promise.State_",
		"href": "enum_goog_Promise_State_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.Thenable",
		"href": "interface_goog_Thenable.html",
		"namespace": true,
		"interface": true,
		"statics": ["Thenable.IMPLEMENTED_BY_PROP", "Thenable.addImplementation", "Thenable.isImplementedBy"],
		"members": ["then"]
	}, {
		"name": "goog.Throttle",
		"href": "class_goog_Throttle.html",
		"namespace": false,
		"interface": false,
		"members": ["fire", "pause", "resume", "stop"]
	}, {
		"name": "goog.Timer",
		"href": "class_goog_Timer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Timer.TICK", "Timer.callOnce", "Timer.clear", "Timer.defaultTimerObject", "Timer.intervalScale", "Timer.promise"],
		"members": ["dispatchTick", "enabled", "getInterval", "setInterval", "start", "stop"]
	}, {
		"name": "goog.Uri",
		"href": "class_goog_Uri.html",
		"namespace": false,
		"interface": false,
		"statics": ["Uri.RANDOM_PARAM", "Uri.create", "Uri.haveSameDomain", "Uri.parse", "Uri.preserveParameterTypesCompatibilityFlag", "Uri.removeDotSegments", "Uri.resolve"],
		"members": ["clone", "enforceReadOnly", "getDecodedQuery", "getDomain", "getEncodedQuery", "getFragment", "getIgnoreCase", "getParameterValue", "getParameterValues", "getPath", "getPort", "getQuery", "getQueryData", "getScheme", "getUserInfo", "hasDomain", "hasFragment", "hasPath", "hasPort", "hasQuery", "hasSameDomainAs", "hasScheme", "hasUserInfo", "isReadOnly", "makeUnique", "removeParameter", "resolve", "setDomain", "setFragment", "setIgnoreCase", "setParameterValue", "setParameterValues", "setPath", "setPort", "setQuery", "setQueryData", "setReadOnly", "setScheme", "setUserInfo", "toString"]
	}, {
		"name": "goog.Uri.QueryData",
		"href": "class_goog_Uri_QueryData.html",
		"namespace": false,
		"interface": false,
		"statics": ["QueryData.createFromKeysValues", "QueryData.createFromMap"],
		"members": ["add", "clear", "clone", "containsKey", "containsValue", "extend", "filterKeys", "get", "getCount", "getKeys", "getValues", "isEmpty", "remove", "set", "setIgnoreCase", "setValues", "toDecodedString", "toString"]
	}, {
		"name": "goog.a11y.aria",
		"href": "namespace_goog_a11y_aria.html",
		"namespace": true,
		"interface": false,
		"statics": ["DefaultStateValueMap_", "assertRoleIsSetInternalUtil", "getActiveDescendant", "getLabel", "getRole", "getState", "getStateBoolean", "getStateNumber", "getStateString", "getStringArrayStateInternalUtil", "hasState", "isContainerRole", "removeRole", "removeState", "setActiveDescendant", "setLabel", "setRole", "setState", "toggleState"]
	}, {
		"name": "goog.a11y.aria.Announcer",
		"href": "class_goog_a11y_aria_Announcer.html",
		"namespace": false,
		"interface": false,
		"members": ["say"]
	}, {
		"name": "goog.a11y.aria.AutoCompleteValues",
		"href": "enum_goog_a11y_aria_AutoCompleteValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.CheckedValues",
		"href": "enum_goog_a11y_aria_CheckedValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.DropEffectValues",
		"href": "enum_goog_a11y_aria_DropEffectValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.ExpandedValues",
		"href": "enum_goog_a11y_aria_ExpandedValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.GrabbedValues",
		"href": "enum_goog_a11y_aria_GrabbedValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.InvalidValues",
		"href": "enum_goog_a11y_aria_InvalidValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.LivePriority",
		"href": "enum_goog_a11y_aria_LivePriority.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.OrientationValues",
		"href": "enum_goog_a11y_aria_OrientationValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.PressedValues",
		"href": "enum_goog_a11y_aria_PressedValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.RelevantValues",
		"href": "enum_goog_a11y_aria_RelevantValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.Role",
		"href": "enum_goog_a11y_aria_Role.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.SelectedValues",
		"href": "enum_goog_a11y_aria_SelectedValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.SortValues",
		"href": "enum_goog_a11y_aria_SortValues.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.State",
		"href": "enum_goog_a11y_aria_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.a11y.aria.datatables",
		"href": "namespace_goog_a11y_aria_datatables.html",
		"namespace": true,
		"interface": false,
		"statics": ["getDefaultValuesMap"]
	}, {
		"name": "goog.array",
		"href": "namespace_goog_array.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_NATIVE_FUNCTIONS", "binaryInsert", "binaryRemove", "binarySearch", "binarySelect", "bucket", "clear", "clone", "compare3", "concat", "contains", "copyByIndex", "count", "defaultCompare", "defaultCompareEquality", "equals", "every", "extend", "filter", "find", "findIndex", "findIndexRight", "findRight", "flatten", "forEach", "forEachRight", "indexOf", "insert", "insertArrayAt", "insertAt", "insertBefore", "inverseDefaultCompare", "isEmpty", "isSorted", "join", "last", "lastIndexOf", "map", "moveItem", "peek", "range", "reduce", "reduceRight", "remove", "removeAllIf", "removeAt", "removeDuplicates", "removeIf", "repeat", "rotate", "shuffle", "slice", "some", "sort", "sortByKey", "sortObjectsByKey", "splice", "stableSort", "toArray", "toObject", "zip"]
	}, {
		"name": "goog.array.ArrayLike",
		"href": "namespace_goog_array.html#array.ArrayLike"
	}, {
		"name": "goog.asserts",
		"href": "namespace_goog_asserts.html",
		"namespace": true,
		"interface": false,
		"statics": ["DEFAULT_ERROR_HANDLER", "ENABLE_ASSERTS", "assert", "assertArray", "assertBoolean", "assertElement", "assertFunction", "assertInstanceof", "assertNumber", "assertObject", "assertObjectPrototypeIsIntact", "assertString", "fail", "setErrorHandler"]
	}, {
		"name": "goog.asserts.AssertionError",
		"href": "class_goog_asserts_AssertionError.html",
		"namespace": false,
		"interface": false,
		"members": ["messagePattern"]
	}, {
		"name": "goog.async",
		"href": "namespace_goog_async.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.async.AnimationDelay",
		"href": "class_goog_async_AnimationDelay.html",
		"namespace": false,
		"interface": false,
		"statics": ["AnimationDelay.TIMEOUT"],
		"members": ["fire", "fireIfActive", "isActive", "start", "stop"]
	}, {
		"name": "goog.async.ConditionalDelay",
		"href": "class_goog_async_ConditionalDelay.html",
		"namespace": false,
		"interface": false,
		"members": ["isActive", "isDone", "onFailure", "onSuccess", "start", "stop"]
	}, {
		"name": "goog.async.Debouncer",
		"href": "class_goog_async_Debouncer.html",
		"namespace": false,
		"interface": false,
		"members": ["fire", "pause", "resume", "stop"]
	}, {
		"name": "goog.async.Deferred",
		"href": "class_goog_async_Deferred.html",
		"namespace": false,
		"interface": false,
		"statics": ["Deferred.LONG_STACK_TRACES", "Deferred.STRICT_ERRORS", "Deferred.assertNoErrors", "Deferred.canceled", "Deferred.fail", "Deferred.fromPromise", "Deferred.succeed", "Deferred.when"],
		"members": ["addBoth", "addCallback", "addCallbacks", "addErrback", "addFinally", "awaitDeferred", "branch", "callback", "cancel", "chainDeferred", "errback", "hasFired", "isError", "then"]
	}, {
		"name": "goog.async.Deferred.AlreadyCalledError",
		"href": "class_goog_async_Deferred_AlreadyCalledError.html",
		"namespace": false,
		"interface": false,
		"members": ["deferred"]
	}, {
		"name": "goog.async.Deferred.CanceledError",
		"href": "class_goog_async_Deferred_CanceledError.html",
		"namespace": false,
		"interface": false,
		"members": ["deferred"]
	}, {
		"name": "goog.async.Deferred.Error_",
		"href": "class_goog_async_Deferred_Error_.html",
		"namespace": false,
		"interface": false,
		"members": ["resetTimer", "throwError"]
	}, {
		"name": "goog.async.DeferredList",
		"href": "class_goog_async_DeferredList.html",
		"namespace": false,
		"interface": false,
		"statics": ["DeferredList.gatherResults"]
	}, {
		"name": "goog.async.Delay",
		"href": "class_goog_async_Delay.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.async.FreeList",
		"href": "class_goog_async_FreeList.html",
		"namespace": false,
		"interface": false,
		"members": ["create_", "get", "head_", "limit_", "occupants", "occupants_", "put", "reset_"]
	}, {
		"name": "goog.async.Throttle",
		"href": "class_goog_async_Throttle.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.async.WorkItem",
		"href": "class_goog_async_WorkItem.html",
		"namespace": false,
		"interface": false,
		"members": ["fn", "next", "reset", "scope", "set"]
	}, {
		"name": "goog.async.WorkQueue",
		"href": "class_goog_async_WorkQueue.html",
		"namespace": false,
		"interface": false,
		"statics": ["WorkQueue.DEFAULT_MAX_UNUSED"],
		"members": ["add", "remove", "returnUnused", "workHead_", "workTail_"]
	}, {
		"name": "goog.async.nextTick",
		"href": "namespace_goog_async_nextTick.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.async.run",
		"href": "namespace_goog_async_run.html",
		"namespace": true,
		"interface": false,
		"statics": ["forceNextTick", "processWorkQueue"]
	}, {
		"name": "goog.color",
		"href": "namespace_goog_color.html",
		"namespace": true,
		"interface": false,
		"statics": ["blend", "darken", "hexToHsl", "hexToHsv", "hexToRgb", "hexToRgbStyle", "highContrast", "hslArrayToHex", "hslArrayToRgb", "hslDistance", "hslToHex", "hslToRgb", "hsvArrayToHex", "hsvArrayToRgb", "hsvToHex", "hsvToRgb", "isValidColor", "lighten", "names", "normalizeHex", "parse", "parseRgb", "prependHashIfNecessaryHelper", "prependZeroIfNecessaryHelper", "rgbArrayToHex", "rgbArrayToHsl", "rgbArrayToHsv", "rgbToHex", "rgbToHsl", "rgbToHsv"]
	}, {
		"name": "goog.color.Hsl",
		"href": "namespace_goog_color.html#color.Hsl"
	}, {
		"name": "goog.color.Hsv",
		"href": "namespace_goog_color.html#color.Hsv"
	}, {
		"name": "goog.color.Rgb",
		"href": "namespace_goog_color.html#color.Rgb"
	}, {
		"name": "goog.color.alpha",
		"href": "namespace_goog_color_alpha.html",
		"namespace": true,
		"interface": false,
		"statics": ["extractAlpha", "extractHexColor", "hexToRgba", "hexToRgbaStyle", "hslaArrayToHex", "hslaArrayToRgbaStyle", "hslaToHex", "hslaToRgba", "hslaToRgbaStyle", "hsvaArrayToHex", "hsvaToHex", "parse", "rgbaArrayToHex", "rgbaArrayToHsla", "rgbaArrayToRgbaStyle", "rgbaToHex", "rgbaToHsla", "rgbaToRgbaStyle"]
	}, {
		"name": "goog.crypt",
		"href": "namespace_goog_crypt.html",
		"namespace": true,
		"interface": false,
		"statics": ["byteArrayToHex", "byteArrayToString", "hexToByteArray", "stringToByteArray", "stringToUtf8ByteArray", "utf8ByteArrayToString", "xorByteArray"]
	}, {
		"name": "goog.crypt.Aes",
		"href": "class_goog_crypt_Aes.html",
		"namespace": false,
		"interface": false,
		"statics": ["Aes.ENABLE_TEST_MODE"],
		"members": ["decrypt", "encrypt"]
	}, {
		"name": "goog.crypt.Arc4",
		"href": "class_goog_crypt_Arc4.html",
		"namespace": false,
		"interface": false,
		"members": ["crypt", "discard", "setKey"]
	}, {
		"name": "goog.crypt.BlobHasher",
		"href": "class_goog_crypt_BlobHasher.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getBytesProcessed", "getHash", "hash", "setHashingLimit"]
	}, {
		"name": "goog.crypt.BlobHasher.EventType",
		"href": "enum_goog_crypt_BlobHasher_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.BlockCipher",
		"href": "interface_goog_crypt_BlockCipher.html",
		"namespace": true,
		"interface": true,
		"members": ["decrypt", "encrypt"]
	}, {
		"name": "goog.crypt.Cbc",
		"href": "class_goog_crypt_Cbc.html",
		"namespace": false,
		"interface": false,
		"members": ["decrypt", "encrypt"]
	}, {
		"name": "goog.crypt.Hash",
		"href": "class_goog_crypt_Hash.html",
		"namespace": false,
		"interface": false,
		"members": ["blockSize", "digest", "reset", "update"]
	}, {
		"name": "goog.crypt.Hmac",
		"href": "class_goog_crypt_Hmac.html",
		"namespace": false,
		"interface": false,
		"members": ["getHmac"]
	}, {
		"name": "goog.crypt.JpegEncoder",
		"href": "class_goog_crypt_JpegEncoder.html",
		"namespace": false,
		"interface": false,
		"members": ["encode"]
	}, {
		"name": "goog.crypt.Md5",
		"href": "class_goog_crypt_Md5.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha1",
		"href": "class_goog_crypt_Sha1.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha2",
		"href": "class_goog_crypt_Sha2.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha224",
		"href": "class_goog_crypt_Sha224.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha256",
		"href": "class_goog_crypt_Sha256.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha2_64bit",
		"href": "class_goog_crypt_Sha2_64bit.html",
		"namespace": false,
		"interface": false,
		"members": ["blockSize", "reset"]
	}, {
		"name": "goog.crypt.Sha384",
		"href": "class_goog_crypt_Sha384.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha512",
		"href": "class_goog_crypt_Sha512.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.Sha512_256",
		"href": "class_goog_crypt_Sha512_256.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.crypt.base64",
		"href": "namespace_goog_crypt_base64.html",
		"namespace": true,
		"interface": false,
		"statics": ["ENCODED_VALS", "ENCODED_VALS_BASE", "ENCODED_VALS_WEBSAFE", "HAS_NATIVE_SUPPORT", "decodeString", "decodeStringToByteArray", "encodeByteArray", "encodeString"]
	}, {
		"name": "goog.crypt.baseN",
		"href": "namespace_goog_crypt_baseN.html",
		"namespace": true,
		"interface": false,
		"statics": ["BASE_64", "BASE_64_URL_SAFE", "BASE_BINARY", "BASE_DECIMAL", "BASE_LOWERCASE_HEXADECIMAL", "BASE_OCTAL", "BASE_UPPERCASE_HEXADECIMAL", "recodeString"]
	}, {
		"name": "goog.crypt.hash32",
		"href": "namespace_goog_crypt_hash32.html",
		"namespace": true,
		"interface": false,
		"statics": ["CONSTANT32", "SEED32", "encodeByteArray", "encodeInteger", "encodeString", "encodeStringUtf8"]
	}, {
		"name": "goog.crypt.hashTester",
		"href": "namespace_goog_crypt_hashTester.html",
		"namespace": true,
		"interface": false,
		"statics": ["runBasicTests", "runBlockTests", "runPerfTests"]
	}, {
		"name": "goog.crypt.pbkdf2",
		"href": "namespace_goog_crypt_pbkdf2.html",
		"namespace": true,
		"interface": false,
		"statics": ["deriveKeySha1"]
	}, {
		"name": "goog.cssom",
		"href": "namespace_goog_cssom.html",
		"namespace": true,
		"interface": false,
		"statics": ["addCssRule", "addCssText", "getAllCssStyleRules", "getAllCssStyleSheets", "getAllCssText", "getCssRuleIndexInParentStyleSheet", "getCssRulesFromStyleSheet", "getCssTextFromCssRule", "getFileNameFromStyleSheet", "getParentStyleSheet", "removeCssRule", "replaceCssRule"]
	}, {
		"name": "goog.cssom.CssRuleType",
		"href": "enum_goog_cssom_CssRuleType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.cssom.iframe.style",
		"href": "namespace_goog_cssom_iframe_style.html",
		"namespace": true,
		"interface": false,
		"statics": ["getBackgroundContext", "getElementContext", "resetDomCache"]
	}, {
		"name": "goog.cssom.iframe.style.CssRuleSet_",
		"href": "class_goog_cssom_iframe_style_CssRuleSet_.html",
		"namespace": false,
		"interface": false,
		"members": ["clone", "declarationText", "initializeFromCssRule", "selectors", "setDeclarationTextFromObject", "setSelectorsFromString", "writeToArray"]
	}, {
		"name": "goog.cssom.iframe.style.CssSelectorPart_",
		"href": "class_goog_cssom_iframe_style_CssSelectorPart_.html",
		"namespace": false,
		"interface": false,
		"members": ["inputString_", "matchProperties_", "testElement", "testedElements_"]
	}, {
		"name": "goog.cssom.iframe.style.CssSelector_",
		"href": "class_goog_cssom_iframe_style_CssSelector_.html",
		"namespace": false,
		"interface": false,
		"members": ["matchElementAncestry"]
	}, {
		"name": "goog.cssom.iframe.style.NodeAncestry_",
		"href": "class_goog_cssom_iframe_style_NodeAncestry_.html",
		"namespace": false,
		"interface": false,
		"members": ["nodes", "uid"]
	}, {
		"name": "goog.date",
		"href": "namespace_goog_date.html",
		"namespace": true,
		"interface": false,
		"statics": ["MS_PER_DAY", "formatMonthAndYear", "fromIsoString", "getNumberOfDaysInMonth", "getWeekNumber", "isLeapYear", "isLongIsoYear", "isSameDay", "isSameMonth", "isSameYear", "max", "min", "setIso8601DateTime"]
	}, {
		"name": "goog.date.DateLike",
		"href": "namespace_goog_date.html#date.DateLike"
	}, {
		"name": "goog.date.Date",
		"href": "class_goog_date_Date.html",
		"namespace": false,
		"interface": false,
		"statics": ["Date.compare"],
		"members": ["add", "clone", "date", "equals", "getDate", "getDay", "getDayOfYear", "getFirstDayOfWeek", "getFirstWeekCutOffDay", "getFullYear", "getIsoWeekday", "getMonth", "getNumberOfDaysInMonth", "getTime", "getTimezoneOffset", "getTimezoneOffsetString", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCIsoWeekday", "getUTCMinutes", "getUTCMonth", "getUTCWeekday", "getWeekNumber", "getWeekday", "getYear", "set", "setDate", "setFirstDayOfWeek", "setFirstWeekCutOffDay", "setFullYear", "setMonth", "setTime", "setUTCDate", "setUTCFullYear", "setUTCMonth", "setYear", "toIsoString", "toString", "toUTCIsoString", "valueOf"]
	}, {
		"name": "goog.date.DateRange",
		"href": "class_goog_date_DateRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["DateRange.MAXIMUM_DATE", "DateRange.MINIMUM_DATE", "DateRange.allTime", "DateRange.equals", "DateRange.last7Days", "DateRange.lastBusinessWeek", "DateRange.lastMonth", "DateRange.lastWeek", "DateRange.standardDateRange", "DateRange.thisMonth", "DateRange.thisWeek", "DateRange.today", "DateRange.yesterday"],
		"members": ["contains", "getEndDate", "getStartDate", "iterator"]
	}, {
		"name": "goog.date.DateRange.Iterator",
		"href": "class_goog_date_DateRange_Iterator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.date.DateRange.StandardDateRangeKeys",
		"href": "enum_goog_date_DateRange_StandardDateRangeKeys.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.date.DateTime",
		"href": "class_goog_date_DateTime.html",
		"namespace": false,
		"interface": false,
		"statics": ["DateTime.fromRfc822String", "DateTime.fromTimestamp"],
		"members": ["add", "equals", "getHours", "getMilliseconds", "getMinutes", "getSeconds", "getUTCDay", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCSeconds", "isMidnight", "setHours", "setMilliseconds", "setMinutes", "setSeconds", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCSeconds", "toIsoString", "toIsoTimeString", "toString", "toUTCIsoString", "toUsTimeString", "toXmlDateTime"]
	}, {
		"name": "goog.date.Interval",
		"href": "class_goog_date_Interval.html",
		"namespace": false,
		"interface": false,
		"statics": ["Interval.DAYS", "Interval.HOURS", "Interval.MINUTES", "Interval.MONTHS", "Interval.SECONDS", "Interval.YEARS", "Interval.fromIsoString"],
		"members": ["add", "clone", "days", "equals", "getInverse", "getTotalSeconds", "hours", "isZero", "minutes", "months", "seconds", "times", "toIsoString", "years"]
	}, {
		"name": "goog.date.UtcDateTime",
		"href": "class_goog_date_UtcDateTime.html",
		"namespace": false,
		"interface": false,
		"statics": ["UtcDateTime.fromIsoString", "UtcDateTime.fromTimestamp"],
		"members": ["clone"]
	}, {
		"name": "goog.date.duration",
		"href": "namespace_goog_date_duration.html",
		"namespace": true,
		"interface": false,
		"statics": ["format"]
	}, {
		"name": "goog.date.month",
		"href": "enum_goog_date_month.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.date.relative",
		"href": "namespace_goog_date_relative.html",
		"namespace": true,
		"interface": false,
		"statics": ["format", "formatDay", "formatPast", "getDateString", "getPastDateString", "setTimeDeltaFormatter"]
	}, {
		"name": "goog.date.relative.TimeDeltaFormatter",
		"href": "namespace_goog_date_relative.html#relative.TimeDeltaFormatter"
	}, {
		"name": "goog.date.relative.Unit",
		"href": "enum_goog_date_relative_Unit.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.date.relativeWithPlurals",
		"href": "namespace_goog_date_relativeWithPlurals.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.date.weekDay",
		"href": "enum_goog_date_weekDay.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db",
		"href": "namespace_goog_db.html",
		"namespace": true,
		"interface": false,
		"statics": ["deleteDatabase", "openDatabase"]
	}, {
		"name": "goog.db.BlockedCallback",
		"href": "namespace_goog_db.html#db.BlockedCallback"
	}, {
		"name": "goog.db.UpgradeNeededCallback",
		"href": "namespace_goog_db.html#db.UpgradeNeededCallback"
	}, {
		"name": "goog.db.Cursor",
		"href": "class_goog_db_Cursor.html",
		"namespace": false,
		"interface": false,
		"statics": ["Cursor.openCursor"],
		"members": ["getKey", "getValue", "next", "remove", "update"]
	}, {
		"name": "goog.db.Cursor.Direction",
		"href": "enum_goog_db_Cursor_Direction.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Cursor.EventType",
		"href": "enum_goog_db_Cursor_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Error",
		"href": "class_goog_db_Error.html",
		"namespace": false,
		"interface": false,
		"statics": ["Error.fromException", "Error.fromRequest", "Error.getCode", "Error.getMessage", "Error.getName"],
		"members": ["code", "getName"]
	}, {
		"name": "goog.db.Error.DatabaseErrorCode_",
		"href": "enum_goog_db_Error_DatabaseErrorCode_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Error.ErrorCode",
		"href": "enum_goog_db_Error_ErrorCode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Error.ErrorName",
		"href": "enum_goog_db_Error_ErrorName.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Error.VersionChangeBlockedError",
		"href": "class_goog_db_Error_VersionChangeBlockedError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Index",
		"href": "class_goog_db_Index.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "getAll", "getAllKeys", "getKey", "getKeyPath", "getName", "isUnique", "openCursor"]
	}, {
		"name": "goog.db.IndexedDb",
		"href": "class_goog_db_IndexedDb.html",
		"namespace": false,
		"interface": false,
		"members": ["close", "createObjectStore", "createTransaction", "deleteObjectStore", "getName", "getObjectStoreNames", "getVersion", "isOpen"]
	}, {
		"name": "goog.db.IndexedDb.EventType",
		"href": "enum_goog_db_IndexedDb_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.IndexedDb.VersionChangeEvent",
		"href": "class_goog_db_IndexedDb_VersionChangeEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["newVersion", "oldVersion"]
	}, {
		"name": "goog.db.KeyRange",
		"href": "class_goog_db_KeyRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["KeyRange.bound", "KeyRange.lowerBound", "KeyRange.only", "KeyRange.upperBound"],
		"members": ["range"]
	}, {
		"name": "goog.db.ObjectStore",
		"href": "class_goog_db_ObjectStore.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "clear", "count", "createIndex", "deleteIndex", "get", "getAll", "getIndex", "getName", "openCursor", "put", "remove"]
	}, {
		"name": "goog.db.Transaction",
		"href": "class_goog_db_Transaction.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getDatabase", "getMode", "objectStore", "wait"]
	}, {
		"name": "goog.db.Transaction.EventTypes",
		"href": "enum_goog_db_Transaction_EventTypes.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.db.Transaction.TransactionMode",
		"href": "enum_goog_db_Transaction_TransactionMode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.debug",
		"href": "namespace_goog_debug.html",
		"namespace": true,
		"interface": false,
		"statics": ["GcDiagnostics", "LOGGING_ENABLED", "MAX_STACK_DEPTH", "Trace", "catchErrors", "deepExpose", "enhanceError", "errorHandlerWeakDep", "expose", "exposeArray", "exposeException", "exposeExceptionAsHtml", "getFunctionName", "getStacktrace", "getStacktraceSimple", "makeWhitespaceVisible", "normalizeErrorObject", "runtimeType", "setFunctionResolver"]
	}, {
		"name": "goog.debug.Loggable",
		"href": "namespace_goog_debug.html#debug.Loggable"
	}, {
		"name": "goog.debug.Console",
		"href": "class_goog_debug_Console.html",
		"namespace": false,
		"interface": false,
		"statics": ["Console.autoInstall", "Console.instance", "Console.setConsole", "Console.show"],
		"members": ["addFilter", "addLogRecord", "getFormatter", "isCapturing_", "logBuffer_", "publishHandler_", "removeFilter", "setCapturing"]
	}, {
		"name": "goog.debug.DebugWindow",
		"href": "class_goog_debug_DebugWindow.html",
		"namespace": false,
		"interface": false,
		"statics": ["DebugWindow.COOKIE_TIME", "DebugWindow.MAX_SAVED", "DebugWindow.isEnabled"],
		"members": ["addFilter", "addLogRecord", "addSeparator", "clear", "getFormatter", "getStyleRules", "hasActiveWindow", "identifier", "init", "isCapturing", "isEnabled", "lastCall", "outputBuffer", "removeFilter", "resetBufferWithNewSize", "setCapturing", "setEnabled", "setForceEnableOnSevere", "setFormatter", "setWelcomeMessage", "welcomeMessage", "win", "writeBufferToLog", "writeInitialDocument", "writeSavedMessages"]
	}, {
		"name": "goog.debug.DevCss",
		"href": "class_goog_debug_DevCss.html",
		"namespace": false,
		"interface": false,
		"members": ["activateBrowserSpecificCssRules"]
	}, {
		"name": "goog.debug.DevCss.CssToken_",
		"href": "enum_goog_debug_DevCss_CssToken_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.debug.DevCss.UserAgent",
		"href": "enum_goog_debug_DevCss_UserAgent.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.debug.DivConsole",
		"href": "class_goog_debug_DivConsole.html",
		"namespace": false,
		"interface": false,
		"members": ["addLogRecord", "addSeparator", "clear", "elementOwnerDocument_", "element_", "formatter_", "getFormatter", "installStyles", "isCapturing_", "publishHandler_", "setCapturing", "setFormatter"]
	}, {
		"name": "goog.debug.EntryPointMonitor",
		"href": "interface_goog_debug_EntryPointMonitor.html",
		"namespace": true,
		"interface": true,
		"members": ["unwrap", "wrap"]
	}, {
		"name": "goog.debug.Error",
		"href": "class_goog_debug_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["reportErrorToServer"]
	}, {
		"name": "goog.debug.ErrorHandler",
		"href": "class_goog_debug_ErrorHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["getProtectedFunction", "protectEntryPoint", "protectWindowRequestAnimationFrame", "protectWindowSetInterval", "protectWindowSetTimeout", "setAddTracersToProtectedFunctions", "setPrefixErrorMessages", "setWrapErrors", "unwrap", "wrap"]
	}, {
		"name": "goog.debug.ErrorHandler.ProtectedFunctionError",
		"href": "class_goog_debug_ErrorHandler_ProtectedFunctionError.html",
		"namespace": false,
		"interface": false,
		"statics": ["ProtectedFunctionError.MESSAGE_PREFIX"],
		"members": ["cause"]
	}, {
		"name": "goog.debug.ErrorReporter",
		"href": "class_goog_debug_ErrorReporter.html",
		"namespace": false,
		"interface": false,
		"statics": ["ErrorReporter.ALLOW_AUTO_PROTECT", "ErrorReporter.defaultXhrSender", "ErrorReporter.install"],
		"members": ["handleException", "protectAdditionalEntryPoint", "sendErrorReport", "setAdditionalArguments", "setContextPrefix", "setLoggingHeaders", "setTruncationLimit", "setXhrSender"]
	}, {
		"name": "goog.debug.ErrorReporter.ExceptionEvent",
		"href": "class_goog_debug_ErrorReporter_ExceptionEvent.html",
		"namespace": false,
		"interface": false,
		"statics": ["ExceptionEvent.TYPE"],
		"members": ["context", "error"]
	}, {
		"name": "goog.debug.FancyWindow",
		"href": "class_goog_debug_FancyWindow.html",
		"namespace": false,
		"interface": false,
		"statics": ["FancyWindow.HAS_LOCAL_STORE", "FancyWindow.LOCAL_STORE_PREFIX"]
	}, {
		"name": "goog.debug.Formatter",
		"href": "class_goog_debug_Formatter.html",
		"namespace": false,
		"interface": false,
		"members": ["appendNewline", "formatRecord", "formatRecordAsHtml", "getStartTimeProvider", "prefix_", "resetRelativeTimeStart", "setStartTimeProvider", "showAbsoluteTime", "showExceptionText", "showLoggerName", "showRelativeTime", "showSeverityLevel"]
	}, {
		"name": "goog.debug.FpsDisplay",
		"href": "class_goog_debug_FpsDisplay.html",
		"namespace": false,
		"interface": false,
		"statics": ["FpsDisplay.CSS", "FpsDisplay.SAMPLES"],
		"members": ["getFps"]
	}, {
		"name": "goog.debug.FpsDisplay.FpsAnimation_",
		"href": "class_goog_debug_FpsDisplay_FpsAnimation_.html",
		"namespace": false,
		"interface": false,
		"members": ["onAnimationFrame"]
	}, {
		"name": "goog.debug.GcDiagnostics_",
		"href": "class_goog_debug_GcDiagnostics_.html",
		"namespace": false,
		"interface": false,
		"members": ["install", "start", "stop"]
	}, {
		"name": "goog.debug.HtmlFormatter",
		"href": "class_goog_debug_HtmlFormatter.html",
		"namespace": false,
		"interface": false,
		"members": ["formatRecord", "formatRecordAsHtml", "showExceptionText"]
	}, {
		"name": "goog.debug.LogBuffer",
		"href": "class_goog_debug_LogBuffer.html",
		"namespace": false,
		"interface": false,
		"statics": ["LogBuffer.CAPACITY", "LogBuffer.getInstance", "LogBuffer.isBufferingEnabled"],
		"members": ["addRecord", "clear", "forEachRecord"]
	}, {
		"name": "goog.debug.LogManager",
		"href": "namespace_goog_debug_LogManager.html",
		"namespace": true,
		"interface": false,
		"statics": ["createFunctionForCatchErrors", "getLogger", "getLoggers", "getRoot", "initialize"]
	}, {
		"name": "goog.debug.LogRecord",
		"href": "class_goog_debug_LogRecord.html",
		"namespace": false,
		"interface": false,
		"statics": ["LogRecord.ENABLE_SEQUENCE_NUMBERS"],
		"members": ["getException", "getLevel", "getLoggerName", "getMessage", "getMillis", "getSequenceNumber", "reset", "setException", "setLevel", "setLoggerName", "setMessage", "setMillis"]
	}, {
		"name": "goog.debug.Logger",
		"href": "class_goog_debug_Logger.html",
		"namespace": false,
		"interface": false,
		"statics": ["Logger.ENABLE_HIERARCHY", "Logger.ROOT_LOGGER_NAME", "Logger.getLogger", "Logger.logToProfilers"],
		"members": ["addHandler", "config", "fine", "finer", "finest", "getChildren", "getEffectiveLevel", "getLevel", "getLogRecord", "getName", "getParent", "info", "isLoggable", "log", "logRecord", "removeHandler", "setLevel", "severe", "shout", "warning"]
	}, {
		"name": "goog.debug.Logger.Level",
		"href": "class_goog_debug_Logger_Level.html",
		"namespace": false,
		"interface": false,
		"statics": ["Level.ALL", "Level.CONFIG", "Level.FINE", "Level.FINER", "Level.FINEST", "Level.INFO", "Level.OFF", "Level.PREDEFINED_LEVELS", "Level.SEVERE", "Level.SHOUT", "Level.WARNING", "Level.getPredefinedLevel", "Level.getPredefinedLevelByValue"],
		"members": ["name", "toString", "value"]
	}, {
		"name": "goog.debug.RelativeTimeProvider",
		"href": "class_goog_debug_RelativeTimeProvider.html",
		"namespace": false,
		"interface": false,
		"statics": ["RelativeTimeProvider.getDefaultInstance"],
		"members": ["get", "reset", "set"]
	}, {
		"name": "goog.debug.TextFormatter",
		"href": "class_goog_debug_TextFormatter.html",
		"namespace": false,
		"interface": false,
		"members": ["formatRecord", "formatRecordAsHtml"]
	}, {
		"name": "goog.debug.Trace_",
		"href": "class_goog_debug_Trace_.html",
		"namespace": false,
		"interface": false,
		"statics": ["Trace_.now"],
		"members": ["MAX_TRACE_SIZE", "addComment", "clearCurrentTrace", "getFormattedTrace", "getTotalVarAlloc", "initCurrentTrace", "reset", "setGcTracer", "setStartTime", "startTracer", "stopTracer", "toString"]
	}, {
		"name": "goog.debug.Trace_.EventType",
		"href": "enum_goog_debug_Trace__EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.debug.Trace_.Event_",
		"href": "class_goog_debug_Trace__Event_.html",
		"namespace": false,
		"interface": false,
		"members": ["toString", "toTraceString", "type"]
	}, {
		"name": "goog.debug.Trace_.Stat_",
		"href": "class_goog_debug_Trace__Stat_.html",
		"namespace": false,
		"interface": false,
		"members": ["count", "time", "toString", "type", "varAlloc"]
	}, {
		"name": "goog.debug.entryPointRegistry",
		"href": "namespace_goog_debug_entryPointRegistry.html",
		"namespace": true,
		"interface": false,
		"statics": ["monitorAll", "register", "unmonitorAllIfPossible"]
	}, {
		"name": "goog.debug.logRecordSerializer",
		"href": "namespace_goog_debug_logRecordSerializer.html",
		"namespace": true,
		"interface": false,
		"statics": ["parse", "serialize", "unsafeParse"]
	}, {
		"name": "goog.debug.logRecordSerializer.Param_",
		"href": "enum_goog_debug_logRecordSerializer_Param_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.disposable",
		"href": "namespace_goog_disposable.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.disposable.IDisposable",
		"href": "interface_goog_disposable_IDisposable.html",
		"namespace": true,
		"interface": true,
		"members": ["dispose", "isDisposed"]
	}, {
		"name": "goog.dom",
		"href": "namespace_goog_dom.html",
		"namespace": true,
		"interface": false,
		"statics": ["$", "$$", "$F", "$dom", "ASSUME_QUIRKS_MODE", "ASSUME_STANDARDS_MODE", "append", "appendChild", "canHaveChildren", "compareNodeOrder", "contains", "createDom", "createElement", "createTable", "createTextNode", "findCommonAncestor", "findNode", "findNodes", "flattenElement", "getActiveElement", "getAncestor", "getAncestorByClass", "getAncestorByTagNameAndClass", "getChildren", "getDocument", "getDocumentHeight", "getDocumentScroll", "getDocumentScrollElement", "getDomHelper", "getElement", "getElementByClass", "getElementsByClass", "getElementsByTagNameAndClass", "getFirstElementChild", "getFrameContentDocument", "getFrameContentWindow", "getLastElementChild", "getNextElementSibling", "getNextNode", "getNodeAtOffset", "getNodeTextLength", "getNodeTextOffset", "getOuterHtml", "getOwnerDocument", "getPageScroll", "getParentElement", "getPixelRatio", "getPreviousElementSibling", "getPreviousNode", "getRawTextContent", "getRequiredElement", "getRequiredElementByClass", "getTextContent", "getViewportSize", "getWindow", "htmlToDocumentFragment", "insertChildAt", "insertSiblingAfter", "insertSiblingBefore", "isCss1CompatMode", "isElement", "isFocusable", "isFocusableTabIndex", "isNodeLike", "isNodeList", "isWindow", "removeChildren", "removeNode", "replaceNode", "safeHtmlToNode", "setFocusableTabIndex", "setProperties", "setTextContent"]
	}, {
		"name": "goog.dom.Appendable",
		"href": "namespace_goog_dom.html#dom.Appendable"
	}, {
		"name": "goog.dom.AbstractMultiRange",
		"href": "class_goog_dom_AbstractMultiRange.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.AbstractRange",
		"href": "class_goog_dom_AbstractRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["AbstractRange.getBrowserSelectionForWindow", "AbstractRange.isNativeControlRange"],
		"members": ["__iterator__", "clone", "collapse", "containsNode", "containsRange", "getAnchorNode", "getAnchorOffset", "getBrowserRangeObject", "getContainer", "getContainerElement", "getDocument", "getEndNode", "getEndOffset", "getEndPosition", "getFocusNode", "getFocusOffset", "getHtmlFragment", "getPastableHtml", "getStartNode", "getStartOffset", "getStartPosition", "getText", "getTextRange", "getTextRangeCount", "getTextRanges", "getType", "getValidHtml", "getWindow", "insertNode", "isCollapsed", "isRangeInDocument", "isReversed", "removeContents", "replaceContentsWithNode", "saveUsingCarets", "saveUsingDom", "select", "setBrowserRangeObject", "surroundWithNodes"]
	}, {
		"name": "goog.dom.BrowserFeature",
		"href": "enum_goog_dom_BrowserFeature.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.BufferedViewportSizeMonitor",
		"href": "class_goog_dom_BufferedViewportSizeMonitor.html",
		"namespace": false,
		"interface": false,
		"members": ["getSize"]
	}, {
		"name": "goog.dom.BufferedViewportSizeMonitor.EventType",
		"href": "enum_goog_dom_BufferedViewportSizeMonitor_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.ControlRange",
		"href": "class_goog_dom_ControlRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["ControlRange.createFromBrowserRange", "ControlRange.createFromElements"],
		"members": ["getElements", "getSortedElements"]
	}, {
		"name": "goog.dom.ControlRangeIterator",
		"href": "class_goog_dom_ControlRangeIterator.html",
		"namespace": false,
		"interface": false,
		"members": ["next"]
	}, {
		"name": "goog.dom.DomHelper",
		"href": "class_goog_dom_DomHelper.html",
		"namespace": false,
		"interface": false,
		"members": ["$", "$$", "$dom", "append", "appendChild", "canHaveChildren", "compareNodeOrder", "contains", "createDom", "createElement", "createTable", "createTextNode", "findCommonAncestor", "findNode", "findNodes", "flattenElement", "getActiveElement", "getAncestor", "getAncestorByClass", "getAncestorByTagNameAndClass", "getChildren", "getDocument", "getDocumentHeight", "getDocumentScroll", "getDocumentScrollElement", "getDomHelper", "getElement", "getElementByClass", "getElementsByClass", "getElementsByTagNameAndClass", "getFirstElementChild", "getFrameContentDocument", "getFrameContentWindow", "getLastElementChild", "getNextElementSibling", "getNextNode", "getNodeAtOffset", "getNodeTextLength", "getNodeTextOffset", "getOuterHtml", "getOwnerDocument", "getParentElement", "getPreviousElementSibling", "getPreviousNode", "getRequiredElement", "getRequiredElementByClass", "getTextContent", "getViewportSize", "getWindow", "htmlToDocumentFragment", "insertChildAt", "insertSiblingAfter", "insertSiblingBefore", "isCss1CompatMode", "isElement", "isFocusable", "isFocusableTabIndex", "isNodeLike", "isNodeList", "isWindow", "removeChildren", "removeNode", "replaceNode", "safeHtmlToNode", "setDocument", "setFocusableTabIndex", "setProperties", "setTextContent"]
	}, {
		"name": "goog.dom.DomSavedControlRange_",
		"href": "class_goog_dom_DomSavedControlRange_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.DomSavedMultiRange_",
		"href": "class_goog_dom_DomSavedMultiRange_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.DomSavedTextRange_",
		"href": "class_goog_dom_DomSavedTextRange_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.FontSizeMonitor",
		"href": "class_goog_dom_FontSizeMonitor.html",
		"namespace": false,
		"interface": false,
		"statics": ["FontSizeMonitor.CHANGE_EVENT"],
		"members": ["resizeTarget_"]
	}, {
		"name": "goog.dom.FontSizeMonitor.EventType",
		"href": "enum_goog_dom_FontSizeMonitor_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.InputType",
		"href": "enum_goog_dom_InputType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.MultiRange",
		"href": "class_goog_dom_MultiRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["MultiRange.createFromBrowserRanges", "MultiRange.createFromBrowserSelection", "MultiRange.createFromTextRanges"],
		"members": ["collapse", "getSortedRanges"]
	}, {
		"name": "goog.dom.MultiRangeIterator",
		"href": "class_goog_dom_MultiRangeIterator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.NodeIterator",
		"href": "class_goog_dom_NodeIterator.html",
		"namespace": false,
		"interface": false,
		"members": ["next"]
	}, {
		"name": "goog.dom.NodeOffset",
		"href": "class_goog_dom_NodeOffset.html",
		"namespace": false,
		"interface": false,
		"members": ["findTargetNode", "toString"]
	}, {
		"name": "goog.dom.NodeType",
		"href": "enum_goog_dom_NodeType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.Range",
		"href": "namespace_goog_dom_Range.html",
		"namespace": true,
		"interface": false,
		"statics": ["clearSelection", "createCaret", "createFromBrowserRange", "createFromBrowserSelection", "createFromNodeContents", "createFromNodes", "createFromWindow", "hasSelection", "isReversed"]
	}, {
		"name": "goog.dom.RangeEndpoint",
		"href": "enum_goog_dom_RangeEndpoint.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.RangeIterator",
		"href": "class_goog_dom_RangeIterator.html",
		"namespace": false,
		"interface": false,
		"members": ["getEndNode", "getEndTextOffset", "getStartNode", "getStartTextOffset", "isLast"]
	}, {
		"name": "goog.dom.RangeType",
		"href": "enum_goog_dom_RangeType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.SavedCaretRange",
		"href": "class_goog_dom_SavedCaretRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["SavedCaretRange.CARET_REGEX", "SavedCaretRange.htmlEqual"],
		"members": ["disposeInternal", "getCaret", "removeCarets", "restoreInternal", "setRestorationDocument", "toAbstractRange"]
	}, {
		"name": "goog.dom.SavedRange",
		"href": "class_goog_dom_SavedRange.html",
		"namespace": false,
		"interface": false,
		"members": ["restore", "restoreInternal"]
	}, {
		"name": "goog.dom.TagIterator",
		"href": "class_goog_dom_TagIterator.html",
		"namespace": false,
		"interface": false,
		"members": ["clone", "constrained", "copyFrom", "depth", "equals", "isEndTag", "isNonElement", "isStartTag", "isStarted", "next", "node", "restartTag", "reversed", "setPosition", "skipTag", "splice", "tagType"]
	}, {
		"name": "goog.dom.TagName",
		"href": "enum_goog_dom_TagName.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.TagWalkType",
		"href": "enum_goog_dom_TagWalkType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.TextRange",
		"href": "class_goog_dom_TextRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["TextRange.createFromBrowserRange", "TextRange.createFromNodeContents", "TextRange.createFromNodes", "TextRange.isAttachedNode"],
		"members": ["__iterator__", "moveToNodes", "surroundContents"]
	}, {
		"name": "goog.dom.TextRangeIterator",
		"href": "class_goog_dom_TextRangeIterator.html",
		"namespace": false,
		"interface": false,
		"members": ["next", "setEndNode", "setStartNode"]
	}, {
		"name": "goog.dom.ViewportSizeMonitor",
		"href": "class_goog_dom_ViewportSizeMonitor.html",
		"namespace": false,
		"interface": false,
		"statics": ["ViewportSizeMonitor.getInstanceForWindow", "ViewportSizeMonitor.removeInstanceForWindow"],
		"members": ["getSize"]
	}, {
		"name": "goog.dom.animationFrame",
		"href": "namespace_goog_dom_animationFrame.html",
		"namespace": true,
		"interface": false,
		"statics": ["createTask", "isRunning"]
	}, {
		"name": "goog.dom.animationFrame.Spec",
		"href": "namespace_goog_dom_animationFrame.html#animationFrame.Spec"
	}, {
		"name": "goog.dom.animationFrame.TaskSet_",
		"href": "namespace_goog_dom_animationFrame.html#animationFrame.TaskSet_"
	}, {
		"name": "goog.dom.animationFrame.Task_",
		"href": "namespace_goog_dom_animationFrame.html#animationFrame.Task_"
	}, {
		"name": "goog.dom.animationFrame.State",
		"href": "class_goog_dom_animationFrame_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.animationFrame.polyfill",
		"href": "namespace_goog_dom_animationFrame_polyfill.html",
		"namespace": true,
		"interface": false,
		"statics": ["ENABLED", "install"]
	}, {
		"name": "goog.dom.annotate",
		"href": "namespace_goog_dom_annotate.html",
		"namespace": true,
		"interface": false,
		"statics": ["annotateTerms", "annotateText"]
	}, {
		"name": "goog.dom.annotate.AnnotateFn",
		"href": "namespace_goog_dom_annotate.html#annotate.AnnotateFn"
	}, {
		"name": "goog.dom.browserrange",
		"href": "namespace_goog_dom_browserrange.html",
		"namespace": true,
		"interface": false,
		"statics": ["canContainRangeEndpoint", "createRange", "createRangeFromNodeContents", "createRangeFromNodes"]
	}, {
		"name": "goog.dom.browserrange.AbstractRange",
		"href": "class_goog_dom_browserrange_AbstractRange.html",
		"namespace": false,
		"interface": false,
		"members": ["__iterator__", "clone", "collapse", "compareBrowserRangeEndpoints", "containsNode", "containsRange", "getBrowserRange", "getContainer", "getEndNode", "getEndOffset", "getEndPosition", "getHtmlFragment", "getStartNode", "getStartOffset", "getStartPosition", "getText", "getValidHtml", "insertNode", "isCollapsed", "removeContents", "select", "surroundContents", "surroundWithNodes"]
	}, {
		"name": "goog.dom.browserrange.Error",
		"href": "enum_goog_dom_browserrange_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.browserrange.GeckoRange",
		"href": "class_goog_dom_browserrange_GeckoRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["GeckoRange.createFromNodeContents", "GeckoRange.createFromNodes"]
	}, {
		"name": "goog.dom.browserrange.IeRange",
		"href": "class_goog_dom_browserrange_IeRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["IeRange.createFromNodeContents", "IeRange.createFromNodes"],
		"members": ["isRangeInDocument"]
	}, {
		"name": "goog.dom.browserrange.OperaRange",
		"href": "class_goog_dom_browserrange_OperaRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["OperaRange.createFromNodeContents", "OperaRange.createFromNodes"]
	}, {
		"name": "goog.dom.browserrange.W3cRange",
		"href": "class_goog_dom_browserrange_W3cRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["W3cRange.createFromNodeContents", "W3cRange.createFromNodes", "W3cRange.getBrowserRangeForNode", "W3cRange.getBrowserRangeForNodes"],
		"members": ["range_", "selectInternal"]
	}, {
		"name": "goog.dom.browserrange.WebKitRange",
		"href": "class_goog_dom_browserrange_WebKitRange.html",
		"namespace": false,
		"interface": false,
		"statics": ["WebKitRange.createFromNodeContents", "WebKitRange.createFromNodes"]
	}, {
		"name": "goog.dom.classes",
		"href": "namespace_goog_dom_classes.html",
		"namespace": true,
		"interface": false,
		"statics": ["add", "addRemove", "enable", "get", "has", "remove", "set", "swap", "toggle"]
	}, {
		"name": "goog.dom.classlist",
		"href": "namespace_goog_dom_classlist.html",
		"namespace": true,
		"interface": false,
		"statics": ["ALWAYS_USE_DOM_TOKEN_LIST", "add", "addAll", "addRemove", "contains", "enable", "enableAll", "get", "remove", "removeAll", "set", "swap", "toggle"]
	}, {
		"name": "goog.dom.dataset",
		"href": "namespace_goog_dom_dataset.html",
		"namespace": true,
		"interface": false,
		"statics": ["get", "getAll", "has", "remove", "set"]
	}, {
		"name": "goog.dom.forms",
		"href": "namespace_goog_dom_forms.html",
		"namespace": true,
		"interface": false,
		"statics": ["focusAndSelect", "getFormDataMap", "getFormDataString", "getValue", "getValueByName", "hasFileInput", "hasValue", "hasValueByName", "setDisabled", "setValue"]
	}, {
		"name": "goog.dom.fullscreen",
		"href": "namespace_goog_dom_fullscreen.html",
		"namespace": true,
		"interface": false,
		"statics": ["exitFullScreen", "getFullScreenElement", "isFullScreen", "isSupported", "requestFullScreen", "requestFullScreenWithKeys"]
	}, {
		"name": "goog.dom.fullscreen.EventType",
		"href": "enum_goog_dom_fullscreen_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.iframe",
		"href": "namespace_goog_dom_iframe.html",
		"namespace": true,
		"interface": false,
		"statics": ["BLANK_SOURCE", "BLANK_SOURCE_NEW_FRAME", "createBlank", "createWithContent", "writeContent", "writeSafeContent"]
	}, {
		"name": "goog.dom.iter",
		"href": "namespace_goog_dom_iter.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.dom.iter.AncestorIterator",
		"href": "class_goog_dom_iter_AncestorIterator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.iter.ChildIterator",
		"href": "class_goog_dom_iter_ChildIterator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.iter.SiblingIterator",
		"href": "class_goog_dom_iter_SiblingIterator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.pattern",
		"href": "namespace_goog_dom_pattern.html",
		"namespace": true,
		"interface": false,
		"statics": ["BREAKING_TEXTNODE_RE", "matchStringOrRegex", "matchStringOrRegexMap"]
	}, {
		"name": "goog.dom.pattern.AbstractPattern",
		"href": "class_goog_dom_pattern_AbstractPattern.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken", "matchedNode", "reset"]
	}, {
		"name": "goog.dom.pattern.AllChildren",
		"href": "class_goog_dom_pattern_AllChildren.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken", "reset"]
	}, {
		"name": "goog.dom.pattern.ChildMatches",
		"href": "class_goog_dom_pattern_ChildMatches.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken", "matches", "reset"]
	}, {
		"name": "goog.dom.pattern.EndTag",
		"href": "class_goog_dom_pattern_EndTag.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.pattern.FullTag",
		"href": "class_goog_dom_pattern_FullTag.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken"]
	}, {
		"name": "goog.dom.pattern.MatchType",
		"href": "enum_goog_dom_pattern_MatchType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.pattern.Matcher",
		"href": "class_goog_dom_pattern_Matcher.html",
		"namespace": false,
		"interface": false,
		"members": ["addPattern", "match"]
	}, {
		"name": "goog.dom.pattern.NodeType",
		"href": "class_goog_dom_pattern_NodeType.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken"]
	}, {
		"name": "goog.dom.pattern.Repeat",
		"href": "class_goog_dom_pattern_Repeat.html",
		"namespace": false,
		"interface": false,
		"members": ["count", "matchToken", "matches", "reset"]
	}, {
		"name": "goog.dom.pattern.Sequence",
		"href": "class_goog_dom_pattern_Sequence.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken", "patterns", "reset"]
	}, {
		"name": "goog.dom.pattern.StartTag",
		"href": "class_goog_dom_pattern_StartTag.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.pattern.Tag",
		"href": "class_goog_dom_pattern_Tag.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken"]
	}, {
		"name": "goog.dom.pattern.Text",
		"href": "class_goog_dom_pattern_Text.html",
		"namespace": false,
		"interface": false,
		"members": ["matchToken"]
	}, {
		"name": "goog.dom.pattern.callback",
		"href": "namespace_goog_dom_pattern_callback.html",
		"namespace": true,
		"interface": false,
		"statics": ["flattenElement", "removeNode"]
	}, {
		"name": "goog.dom.pattern.callback.Counter",
		"href": "class_goog_dom_pattern_callback_Counter.html",
		"namespace": false,
		"interface": false,
		"members": ["count", "getCallback", "reset"]
	}, {
		"name": "goog.dom.pattern.callback.Test",
		"href": "class_goog_dom_pattern_callback_Test.html",
		"namespace": false,
		"interface": false,
		"members": ["getCallback", "matched", "reset"]
	}, {
		"name": "goog.dom.safe",
		"href": "namespace_goog_dom_safe.html",
		"namespace": true,
		"interface": false,
		"statics": ["documentWrite", "insertAdjacentHtml", "openInWindow", "setAnchorHref", "setEmbedSrc", "setFrameSrc", "setIframeSrc", "setInnerHtml", "setLinkHrefAndRel", "setLocationHref", "setObjectData", "setOuterHtml", "setScriptSrc"]
	}, {
		"name": "goog.dom.safe.InsertAdjacentHtmlPosition",
		"href": "enum_goog_dom_safe_InsertAdjacentHtmlPosition.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.dom.selection",
		"href": "namespace_goog_dom_selection.html",
		"namespace": true,
		"interface": false,
		"statics": ["getEnd", "getEndPoints", "getStart", "getText", "setCursorPosition", "setEnd", "setStart", "setText"]
	}, {
		"name": "goog.dom.tags",
		"href": "namespace_goog_dom_tags.html",
		"namespace": true,
		"interface": false,
		"statics": ["isVoidTag"]
	}, {
		"name": "goog.dom.vendor",
		"href": "namespace_goog_dom_vendor.html",
		"namespace": true,
		"interface": false,
		"statics": ["getPrefixedEventType", "getPrefixedPropertyName", "getVendorJsPrefix", "getVendorPrefix"]
	}, {
		"name": "goog.dom.xml",
		"href": "namespace_goog_dom_xml.html",
		"namespace": true,
		"interface": false,
		"statics": ["MAX_ELEMENT_DEPTH", "MAX_XML_SIZE_KB", "createDocument", "loadXml", "selectNodes", "selectSingleNode", "serialize", "setAttributes"]
	}, {
		"name": "goog.ds",
		"href": "namespace_goog_ds.html",
		"namespace": true,
		"interface": false,
		"statics": ["STR_ALL_CHILDREN_SELECTOR", "STR_ARRAY_START", "STR_ATTRIBUTE_START", "STR_PATH_SEPARATOR", "STR_WILDCARD", "logger"]
	}, {
		"name": "goog.ds.AbstractFastDataNode",
		"href": "class_goog_ds_AbstractFastDataNode.html",
		"namespace": false,
		"interface": false,
		"members": ["getDataName", "getDataPath", "setDataName"]
	}, {
		"name": "goog.ds.BaseDataNode",
		"href": "class_goog_ds_BaseDataNode.html",
		"namespace": false,
		"interface": false,
		"members": ["getChildNode", "getChildNodeValue", "getChildNodes", "getDataName", "getDataPath", "getLoadState", "getParent", "load", "set"]
	}, {
		"name": "goog.ds.BasicNodeList",
		"href": "class_goog_ds_BasicNodeList.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "get", "getByIndex", "getCount", "indexMap_", "indexOf", "list_", "map_", "removeNode", "setNode"]
	}, {
		"name": "goog.ds.DataManager",
		"href": "class_goog_ds_DataManager.html",
		"namespace": false,
		"interface": false,
		"statics": ["DataManager.clearInstance", "DataManager.getInstance"],
		"members": ["addDataSource", "addIndexedListener", "addListener", "aliasDataSource", "aliases_", "autoloads_", "dataSources_", "eventCount_", "fireDataChange", "get", "getChildNode", "getDataName", "getDataPath", "getDataSource", "getEventCount", "getListenerCount", "getLoadState", "indexedListenersByFunction_", "isList", "listenerMap_", "listenersByFunction_", "load", "removeIndexedListeners", "removeListeners", "runWithoutFiringDataChanges"]
	}, {
		"name": "goog.ds.DataNode",
		"href": "class_goog_ds_DataNode.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "getChildNode", "getChildNodeValue", "getChildNodes", "getDataName", "getDataPath", "getLoadState", "isList", "load", "set", "setChildNode", "setDataName"]
	}, {
		"name": "goog.ds.DataNodeList",
		"href": "class_goog_ds_DataNodeList.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "get", "getByIndex", "getCount", "removeNode", "setNode"]
	}, {
		"name": "goog.ds.EmptyNodeList",
		"href": "class_goog_ds_EmptyNodeList.html",
		"namespace": false,
		"interface": false,
		"members": ["add"]
	}, {
		"name": "goog.ds.Expr",
		"href": "class_goog_ds_Expr.html",
		"namespace": false,
		"interface": false,
		"statics": ["Expr.ALL_ATTRIBUTES", "Expr.ALL_CHILD_NODES", "Expr.ALL_ELEMENTS", "Expr.COUNT", "Expr.CURRENT", "Expr.NAME", "Expr.POSITION", "Expr.create"],
		"members": ["getLast", "getNext", "getNode", "getNodes", "getParent", "getSource", "getValue"]
	}, {
		"name": "goog.ds.Expr.String_",
		"href": "enum_goog_ds_Expr_String_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ds.FastDataNode",
		"href": "class_goog_ds_FastDataNode.html",
		"namespace": false,
		"interface": false,
		"statics": ["FastDataNode.fromJs"],
		"members": ["add", "clone", "extendWith", "get", "getByIndex", "getChildNode", "getChildNodeValue", "getCount", "getJsObject", "isList", "removeNode", "set", "setChildNode", "setNode"]
	}, {
		"name": "goog.ds.FastListNode",
		"href": "class_goog_ds_FastListNode.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "get", "getByIndex", "getChildNode", "getChildNodeValue", "getChildNodes", "getCount", "getJsObject", "indexOf", "isList", "map_", "removeNode", "set", "setChildNode", "setNode", "values_"]
	}, {
		"name": "goog.ds.JsDataSource",
		"href": "class_goog_ds_JsDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["dataName_", "getChildNode", "getChildNodeValue", "getChildNodes", "getDataName", "getDataPath", "getLoadState", "isList", "load", "parent_", "root_", "set", "setChildNode", "setDataName", "setRoot"]
	}, {
		"name": "goog.ds.JsPropertyDataSource",
		"href": "class_goog_ds_JsPropertyDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["dataName_", "get", "getDataName", "parentDataNode_", "parent_", "set"]
	}, {
		"name": "goog.ds.JsXmlHttpDataSource",
		"href": "class_goog_ds_JsXmlHttpDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["getLoadState", "load", "setQueryData", "uri_", "usePost_", "xhr_"]
	}, {
		"name": "goog.ds.JsonDataSource",
		"href": "class_goog_ds_JsonDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["getLoadState", "load", "loadState_", "receiveData", "uri_"]
	}, {
		"name": "goog.ds.LoadState",
		"href": "enum_goog_ds_LoadState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ds.PrimitiveFastDataNode",
		"href": "class_goog_ds_PrimitiveFastDataNode.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "getChildNode", "getChildNodeValue", "getChildNodes", "getJsObject", "isList", "set", "setChildNode", "value_"]
	}, {
		"name": "goog.ds.SortedNodeList",
		"href": "class_goog_ds_SortedNodeList.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "append", "compareFn_", "setNode"]
	}, {
		"name": "goog.ds.Util",
		"href": "namespace_goog_ds_Util.html",
		"namespace": true,
		"interface": false,
		"statics": ["makeReferenceNode"]
	}, {
		"name": "goog.ds.XmlDataSource",
		"href": "class_goog_ds_XmlDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["dataName_", "get", "getChildNode", "getChildNodeValue", "getDataName", "getDataPath", "getLoadState", "load", "parent_", "set", "setDataName"]
	}, {
		"name": "goog.ds.XmlHttpDataSource",
		"href": "class_goog_ds_XmlHttpDataSource.html",
		"namespace": false,
		"interface": false,
		"members": ["getLoadState", "load", "loadState_", "uri_"]
	}, {
		"name": "goog.editor",
		"href": "namespace_goog_editor.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.editor.BrowserFeature",
		"href": "namespace_goog_editor_BrowserFeature.html",
		"namespace": true,
		"interface": false,
		"statics": ["ADDS_NBSPS_IN_REMOVE_FORMAT", "CAN_LISTIFY_BR", "CAN_SELECT_EMPTY_ELEMENT", "CARET_INSIDE_SELECTION", "CLEARS_SELECTION_WHEN_FOCUS_LEAVES", "COLLAPSES_EMPTY_NODES", "COLLAPSES_SELECTION_ONMOUSEDOWN", "CONVERT_TO_B_AND_I_TAGS", "CREATES_MULTIPLE_BLOCKQUOTES", "DOESNT_OVERRIDE_FONT_SIZE_IN_STYLE_ATTR", "EATS_EMPTY_BACKGROUND_COLOR", "FOCUSES_EDITABLE_BODY_ON_HTML_CLICK", "FOLLOWS_EDITABLE_LINKS", "FORGETS_FORMATTING_WHEN_LISTIFYING", "FORMAT_BLOCK_WORKS_FOR_BLOCKQUOTES", "GETS_STUCK_IN_LINKS", "HAS_ACTIVE_ELEMENT", "HAS_CONTENT_EDITABLE", "HAS_DOCUMENT_INDEPENDENT_NODES", "HAS_DOM_SUBTREE_MODIFIED_EVENT", "HAS_IE_RANGES", "HAS_SET_CAPTURE", "HAS_STYLE_WITH_CSS", "HAS_UNSELECTABLE_STYLE", "HAS_W3C_RANGES", "LEAVES_P_WHEN_REMOVING_LISTS", "MOVES_STYLE_TO_HEAD", "NEEDS_99_WIDTH_IN_STANDARDS_MODE", "NESTS_SUBSCRIPT_SUPERSCRIPT", "NORMALIZE_CORRUPTS_ALL_TEXT_NODES", "NORMALIZE_CORRUPTS_EMPTY_TEXT_NODES", "PREFERS_READY_STATE_CHANGE_EVENT", "PUTS_CURSOR_BEFORE_FIRST_BLOCK_ELEMENT_ON_FOCUS", "SELECTS_IMAGES_ON_CLICK", "SHOWS_CUSTOM_ATTRS_IN_INNER_HTML", "SUPPORTS_FILE_PASTING", "SUPPORTS_FOCUSIN", "SUPPORTS_HTML5_FILE_DRAGGING", "SUPPORTS_OPERA_DEFAULTBLOCK_COMMAND", "TABS_THROUGH_IMAGES", "TAB_FIRES_KEYPRESS", "UNESCAPES_URLS_WITHOUT_ASKING", "USES_KEYDOWN", "USE_DOCUMENT_FOR_KEY_EVENTS", "USE_MUTATION_EVENTS", "WRAPS_BLOCKQUOTE_IN_DIVS"]
	}, {
		"name": "goog.editor.ClickToEditWrapper",
		"href": "class_goog_editor_ClickToEditWrapper.html",
		"namespace": false,
		"interface": false,
		"members": ["enterDocument", "exitDocument", "focusOnFieldObj", "getElement", "getFieldObject", "getOriginalDomHelper", "makeFieldEditable"]
	}, {
		"name": "goog.editor.Command",
		"href": "enum_goog_editor_Command.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.ContentEditableField",
		"href": "class_goog_editor_ContentEditableField.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.Field",
		"href": "class_goog_editor_Field.html",
		"namespace": false,
		"interface": false,
		"statics": ["Field.CHANGE_FREQUENCY", "Field.DELAYED_CHANGE_FREQUENCY", "Field.MUTATION_EVENTS_GECKO", "Field.SELECTION_CHANGE_KEYCODES", "Field.getActiveFieldId", "Field.setActiveFieldId"],
		"members": ["addListener", "attachIframe", "attachWrapper", "changeTimerGecko_", "clearDelayedChange", "clearListeners", "cssStyles", "debounceEvent", "debouncedEvents_", "delayedChangeTimer_", "dispatchBeforeChange", "dispatchBlur", "dispatchChange", "dispatchCommandValueChange", "dispatchSelectionChangeEvent", "editableDomHelper", "eventRegister", "execCommand", "field", "focus", "focusAndPlaceCursorAtStart", "getAppWindow", "getBaseZindex", "getCleanContents", "getEditableDomHelper", "getEditableIframe", "getElement", "getFieldCopy", "getFieldFormatInfo", "getHashCode", "getIframeAttributes", "getInjectableContents", "getOriginalElement", "getPluginByClassId", "getRange", "handleChange", "handleDomAttrChange", "handleFieldLoad", "id", "iframeFieldLoadHandler", "inModalMode", "injectContents", "installStyles", "isEventStopped", "isEverModified_", "isFixedHeight", "isLoaded", "isLoading", "isModified", "isModified_", "isSelectionEditable", "isUneditable", "loadState_", "logger", "makeEditable", "makeEditableInternal", "makeUneditable", "manipulateDom", "originalDomHelper", "originalElement", "placeCursorAtEnd", "placeCursorAtStart", "queryCommandValue", "registerPlugin", "removeAllWrappers", "resetOriginalElemProperties", "restoreDom", "restoreSavedRange", "setAppWindow", "setBaseZindex", "setFollowLinkInNewWindow", "setHtml", "setInitialStyle", "setModalMode", "setUseWindowMouseUp", "setupFieldObject", "setupMutationEventHandlersGecko", "shouldLoadAsynchronously", "shouldRefocusOnInputMobileSafari", "startChangeEvents", "startEvent", "stopChangeEvents", "stopEvent", "stoppedEvents_", "turnOnDesignModeGecko", "unregisterPlugin", "usesIframe", "wrappers_", "writeIframeContent"]
	}, {
		"name": "goog.editor.Field.EventType",
		"href": "enum_goog_editor_Field_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.Field.LoadState_",
		"href": "enum_goog_editor_Field_LoadState_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.Link",
		"href": "class_goog_editor_Link.html",
		"namespace": false,
		"interface": false,
		"statics": ["Link.createNewLink", "Link.createNewLinkFromText", "Link.isLikelyEmailAddress", "Link.isLikelyUrl", "Link.isMailto"],
		"members": ["finishLinkCreation", "getAnchor", "getCurrentText", "getExtraAnchors", "getValidLinkFromText", "initializeUrl", "isNew", "placeCursorRightOf", "removeLink", "setTextAndUrl"]
	}, {
		"name": "goog.editor.Plugin",
		"href": "class_goog_editor_Plugin.html",
		"namespace": false,
		"interface": false,
		"statics": ["Plugin.IRREPRESSIBLE_OPS", "Plugin.OPCODE"],
		"members": ["activeOnUneditableFields", "cleanContentsDom", "cleanContentsHtml", "disable", "enable", "execCommand", "execCommandInternal", "fieldObject", "getFieldDomHelper", "getFieldObject", "getTrogClassId", "handleKeyDown", "handleKeyPress", "handleKeyUp", "handleKeyboardShortcut", "handleSelectionChange", "isAutoDispose", "isEnabled", "isSilentCommand", "isSupportedCommand", "logger", "prepareContentsHtml", "queryCommandValue", "registerFieldObject", "setAutoDispose", "setFieldObject", "unregisterFieldObject"]
	}, {
		"name": "goog.editor.Plugin.Op",
		"href": "enum_goog_editor_Plugin_Op.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.SeamlessField",
		"href": "class_goog_editor_SeamlessField.html",
		"namespace": false,
		"interface": false,
		"statics": ["SeamlessField.scrollbarWidth_"],
		"members": ["doFieldSizingGecko", "getIframeableCss", "inheritBlendedCSS", "overrideFixedHeight", "setIframeableCss", "setMinHeight"]
	}, {
		"name": "goog.editor.Table",
		"href": "class_goog_editor_Table.html",
		"namespace": false,
		"interface": false,
		"statics": ["Table.DEFAULT_BORDER_COLOR", "Table.OPTIMUM_EMPTY_CELL_WIDTH", "Table.OPTIMUM_MAX_NEW_TABLE_WIDTH", "Table.createDomTable", "Table.getChildCellElements"],
		"members": ["createEmptyTd", "dom_", "element", "insertCellElement", "insertColumn", "insertRow", "mergeCells", "refresh", "removeColumn", "removeRow", "splitCell"]
	}, {
		"name": "goog.editor.TableCell",
		"href": "class_goog_editor_TableCell.html",
		"namespace": false,
		"interface": false,
		"members": ["colSpan", "element", "rowSpan", "setColSpan", "setRowSpan", "startCol", "startRow"]
	}, {
		"name": "goog.editor.TableRow",
		"href": "class_goog_editor_TableRow.html",
		"namespace": false,
		"interface": false,
		"members": ["columns", "element", "index"]
	}, {
		"name": "goog.editor.defines",
		"href": "namespace_goog_editor_defines.html",
		"namespace": true,
		"interface": false,
		"statics": ["USE_CONTENTEDITABLE_IN_FIREFOX_3"]
	}, {
		"name": "goog.editor.focus",
		"href": "namespace_goog_editor_focus.html",
		"namespace": true,
		"interface": false,
		"statics": ["focusInputField"]
	}, {
		"name": "goog.editor.icontent",
		"href": "namespace_goog_editor_icontent.html",
		"namespace": true,
		"interface": false,
		"statics": ["forceStandardsModeIframes", "writeHttpsInitialIframe", "writeNormalInitialBlendedIframe", "writeNormalInitialIframe"]
	}, {
		"name": "goog.editor.icontent.FieldFormatInfo",
		"href": "class_goog_editor_icontent_FieldFormatInfo.html",
		"namespace": false,
		"interface": false,
		"members": ["blended_", "extraStyles_", "fieldId_", "fixedHeight_", "standards_"]
	}, {
		"name": "goog.editor.icontent.FieldStyleInfo",
		"href": "class_goog_editor_icontent_FieldStyleInfo.html",
		"namespace": false,
		"interface": false,
		"members": ["css_", "wrapper_"]
	}, {
		"name": "goog.editor.node",
		"href": "namespace_goog_editor_node.html",
		"namespace": true,
		"interface": false,
		"statics": ["findHighestMatchingAncestor", "findInChildren", "findTopMostEditableAncestor", "getFirstChild", "getLastChild", "getLeftMostLeaf", "getLength", "getNextSibling", "getPreviousSibling", "getRightMostLeaf", "isAllNonNbspWhiteSpace", "isBlockTag", "isEditable", "isEditableContainer", "isEmpty", "isImportant", "isStandardsMode", "replaceInnerHtml", "skipEmptyTextNodes", "splitDomTreeAt", "transferChildren"]
	}, {
		"name": "goog.editor.plugins",
		"href": "namespace_goog_editor_plugins.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.editor.plugins.AbstractBubblePlugin",
		"href": "class_goog_editor_plugins_AbstractBubblePlugin.html",
		"namespace": false,
		"interface": false,
		"statics": ["AbstractBubblePlugin.DASH_NBSP_STRING", "AbstractBubblePlugin.setBubbleFactory"],
		"members": ["cleanOnBubbleClose", "closeBubble", "createBubble", "createBubbleContents", "createLink", "createLinkHelper", "createLinkOption", "enableKeyboardNavigation", "eventRegister", "getBubbleDom", "getBubbleMap", "getBubbleTargetFromSelection", "getBubbleTitle", "getBubbleType", "getTargetElement", "handleKeyDown", "handleSelectionChange", "handleSelectionChangeInternal", "isVisible", "onShow", "registerActionHandler", "registerClickHandler", "reposition", "setBubbleFactory", "setBubbleParent", "setTabbable", "setupLink", "shouldPreferBubbleAboveElement"]
	}, {
		"name": "goog.editor.plugins.AbstractDialogPlugin",
		"href": "class_goog_editor_plugins_AbstractDialogPlugin.html",
		"namespace": false,
		"interface": false,
		"members": ["createDialog", "disposeOriginalSelection", "execCommand", "execCommandInternal", "getDialog", "handleAfterHide", "restoreOriginalSelection", "setReuseDialog"]
	}, {
		"name": "goog.editor.plugins.AbstractDialogPlugin.EventType",
		"href": "enum_goog_editor_plugins_AbstractDialogPlugin_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.AbstractTabHandler",
		"href": "class_goog_editor_plugins_AbstractTabHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["handleTabKey"]
	}, {
		"name": "goog.editor.plugins.BasicTextFormatter",
		"href": "class_goog_editor_plugins_BasicTextFormatter.html",
		"namespace": false,
		"interface": false,
		"members": ["execCommandInternal", "isSilentCommand", "isSupportedCommand", "logger", "queryCommandValue"]
	}, {
		"name": "goog.editor.plugins.BasicTextFormatter.COMMAND",
		"href": "enum_goog_editor_plugins_BasicTextFormatter_COMMAND.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.Blockquote",
		"href": "class_goog_editor_plugins_Blockquote.html",
		"namespace": false,
		"interface": false,
		"statics": ["Blockquote.CLASS_ID", "Blockquote.SPLIT_COMMAND"],
		"members": ["execCommandInternal", "getBlockquoteClassName", "isSetupBlockquote", "isSplittableBlockquote", "isUnsetupBlockquote", "logger"]
	}, {
		"name": "goog.editor.plugins.Emoticons",
		"href": "class_goog_editor_plugins_Emoticons.html",
		"namespace": false,
		"interface": false,
		"statics": ["Emoticons.COMMAND"],
		"members": ["execCommandInternal"]
	}, {
		"name": "goog.editor.plugins.EnterHandler",
		"href": "class_goog_editor_plugins_EnterHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["EnterHandler.isBrElem", "EnterHandler.isDirectlyInBlockquote"],
		"members": ["deleteBrGecko", "ensureBlockIeOpera", "getNonCollapsingBlankHtml", "handleBackspaceInternal", "handleDeleteGecko", "handleEnterAtCursorGeckoInternal", "handleEnterWebkitInternal", "handleKeyUpInternal", "prepareContentsHtml", "processParagraphTagsInternal", "tag"]
	}, {
		"name": "goog.editor.plugins.FirstStrong",
		"href": "class_goog_editor_plugins_FirstStrong.html",
		"namespace": false,
		"interface": false,
		"statics": ["FirstStrong.INPUT_ATTRIBUTE"],
		"members": ["handleKeyUp"]
	}, {
		"name": "goog.editor.plugins.HeaderFormatter",
		"href": "class_goog_editor_plugins_HeaderFormatter.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.HeaderFormatter.HEADER_COMMAND",
		"href": "enum_goog_editor_plugins_HeaderFormatter_HEADER_COMMAND.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.LinkBubble",
		"href": "class_goog_editor_plugins_LinkBubble.html",
		"namespace": false,
		"interface": false,
		"statics": ["LinkBubble.MSG_INVALID_URL_LINK_BUBBLE", "LinkBubble.MSG_LINK_BUBBLE_CHANGE", "LinkBubble.MSG_LINK_BUBBLE_REMOVE", "LinkBubble.MSG_LINK_BUBBLE_TEST_LINK"],
		"members": ["getTargetUrl", "getTestLinkMessage", "isInvalidUrl", "onShow", "setBlockOpeningUnsafeSchemes", "setSafeToOpenSchemes", "setTestLinkUrlFn", "shouldOpenUrl", "stopReferrerLeaks", "testLink"]
	}, {
		"name": "goog.editor.plugins.LinkBubble.Action",
		"href": "class_goog_editor_plugins_LinkBubble_Action.html",
		"namespace": false,
		"interface": false,
		"members": ["actionFn_", "linkId_", "message_", "spanId_", "toShowFn_"]
	}, {
		"name": "goog.editor.plugins.LinkDialogPlugin",
		"href": "class_goog_editor_plugins_LinkDialogPlugin.html",
		"namespace": false,
		"interface": false,
		"members": ["createDialog", "currentLink_", "execCommandInternal", "getCurrentLink", "getEventHandler", "getOpenLinkInNewWindowCheckedState", "handleAfterHide", "handleBeforeTestLink", "handleOk", "setBlockOpeningUnsafeSchemes", "setEmailWarning", "setSafeToOpenSchemes", "shouldOpenUrl", "showOpenLinkInNewWindow", "showRelNoFollow", "stopReferrerLeaks"]
	}, {
		"name": "goog.editor.plugins.LinkShortcutPlugin",
		"href": "class_goog_editor_plugins_LinkShortcutPlugin.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.ListTabHandler",
		"href": "class_goog_editor_plugins_ListTabHandler.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.LoremIpsum",
		"href": "class_goog_editor_plugins_LoremIpsum.html",
		"namespace": false,
		"interface": false,
		"members": ["execCommand", "queryCommandValue"]
	}, {
		"name": "goog.editor.plugins.RemoveFormatting",
		"href": "class_goog_editor_plugins_RemoveFormatting.html",
		"namespace": false,
		"interface": false,
		"statics": ["RemoveFormatting.REMOVE_FORMATTING_COMMAND"],
		"members": ["getValueForNode", "setRemoveFormattingFunc"]
	}, {
		"name": "goog.editor.plugins.SpacesTabHandler",
		"href": "class_goog_editor_plugins_SpacesTabHandler.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.TableEditor",
		"href": "class_goog_editor_plugins_TableEditor.html",
		"namespace": false,
		"interface": false,
		"members": ["addIsTableEditableFunction", "isSupportedCommand", "queryCommandValue"]
	}, {
		"name": "goog.editor.plugins.TableEditor.COMMAND",
		"href": "enum_goog_editor_plugins_TableEditor_COMMAND.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.TableEditor.CellSelection_",
		"href": "class_goog_editor_plugins_TableEditor_CellSelection_.html",
		"namespace": false,
		"interface": false,
		"members": ["cells_", "containsSingleCell", "firstColIndex_", "firstRowIndex_", "getCells", "getFirstColumnIndex", "getFirstRowIndex", "getLastColumnIndex", "getLastRowIndex", "getTable", "isRectangle", "lastColIndex_", "lastRowIndex_", "parentTable_"]
	}, {
		"name": "goog.editor.plugins.TagOnEnterHandler",
		"href": "class_goog_editor_plugins_TagOnEnterHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["activeOnUneditableFields"]
	}, {
		"name": "goog.editor.plugins.UndoRedo",
		"href": "class_goog_editor_plugins_UndoRedo.html",
		"namespace": false,
		"interface": false,
		"members": ["clearHistory", "currentStates_", "eventHandlers_", "getCurrentEventTarget", "getCurrentFieldObject", "getFieldObjectForHash", "isSupportedCommand", "logger", "refreshCurrentState", "restoreState", "setMaxUndoDepth", "setUndoRedoManager", "unregisterFieldObject"]
	}, {
		"name": "goog.editor.plugins.UndoRedo.COMMAND",
		"href": "enum_goog_editor_plugins_UndoRedo_COMMAND.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.UndoRedo.CursorPosition_",
		"href": "class_goog_editor_plugins_UndoRedo_CursorPosition_.html",
		"namespace": false,
		"interface": false,
		"members": ["field_", "isValid", "select", "toString"]
	}, {
		"name": "goog.editor.plugins.UndoRedo.UndoState_",
		"href": "class_goog_editor_plugins_UndoRedo_UndoState_.html",
		"namespace": false,
		"interface": false,
		"members": ["equals", "fieldHashCode", "redo", "setRedoState", "setUndoState", "undo"]
	}, {
		"name": "goog.editor.plugins.UndoRedoManager",
		"href": "class_goog_editor_plugins_UndoRedoManager.html",
		"namespace": false,
		"interface": false,
		"members": ["addState", "clearHistory", "hasRedoState", "hasUndoState", "redo", "redoPeek", "setMaxUndoDepth", "undo", "undoPeek"]
	}, {
		"name": "goog.editor.plugins.UndoRedoManager.EventType",
		"href": "enum_goog_editor_plugins_UndoRedoManager_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.editor.plugins.UndoRedoState",
		"href": "class_goog_editor_plugins_UndoRedoState.html",
		"namespace": false,
		"interface": false,
		"statics": ["UndoRedoState.ACTION_COMPLETED"],
		"members": ["equals", "isAsynchronous", "redo", "undo"]
	}, {
		"name": "goog.editor.range",
		"href": "namespace_goog_editor_range.html",
		"namespace": true,
		"interface": false,
		"statics": ["expand", "getDeepEndPoint", "intersectsTag", "isEditable", "narrow", "normalize", "normalizeNode", "placeCursorNextTo", "rangePreservingNormalize", "saveUsingNormalizedCarets", "selectNodeStart", "selectionPreservingNormalize"]
	}, {
		"name": "goog.editor.range.NormalizedCaretRange_",
		"href": "class_goog_editor_range_NormalizedCaretRange_.html",
		"namespace": false,
		"interface": false,
		"members": ["removeCarets"]
	}, {
		"name": "goog.editor.range.Point",
		"href": "class_goog_editor_range_Point.html",
		"namespace": false,
		"interface": false,
		"statics": ["Point.createDeepestPoint", "Point.getPointAtEndOfNode"],
		"members": ["getParentPoint", "node", "offset"]
	}, {
		"name": "goog.editor.style",
		"href": "namespace_goog_editor_style.html",
		"namespace": true,
		"interface": false,
		"statics": ["getContainer", "isContainer", "isDisplayBlock", "makeSelectable", "makeUnselectable"]
	}, {
		"name": "goog.events",
		"href": "namespace_goog_events.html",
		"namespace": true,
		"interface": false,
		"statics": ["CAPTURE_SIMULATION_MODE", "actionEventWrapper", "dispatchEvent", "expose", "fireListener", "fireListeners", "getListener", "getListeners", "getProxy", "getTotalListenerCount", "getUniqueId", "hasListener", "listen", "listenOnce", "listenWithWrapper", "protectBrowserEventEntryPoint", "removeAll", "unlisten", "unlistenByKey", "unlistenWithWrapper", "wrapListener"]
	}, {
		"name": "goog.events.EventLike",
		"href": "namespace_goog_events.html#events.EventLike"
	}, {
		"name": "goog.events.Key",
		"href": "namespace_goog_events.html#events.Key"
	}, {
		"name": "goog.events.ListenableType",
		"href": "namespace_goog_events.html#events.ListenableType"
	}, {
		"name": "goog.events.ActionEvent",
		"href": "class_goog_events_ActionEvent.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.ActionEventWrapper_",
		"href": "class_goog_events_ActionEventWrapper_.html",
		"namespace": false,
		"interface": false,
		"members": ["listen", "unlisten"]
	}, {
		"name": "goog.events.ActionHandler",
		"href": "class_goog_events_ActionHandler.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.ActionHandler.EventType",
		"href": "enum_goog_events_ActionHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.BeforeActionEvent",
		"href": "class_goog_events_BeforeActionEvent.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.BrowserEvent",
		"href": "class_goog_events_BrowserEvent.html",
		"namespace": false,
		"interface": false,
		"statics": ["BrowserEvent.IEButtonMap"],
		"members": ["altKey", "button", "charCode", "clientX", "clientY", "ctrlKey", "currentTarget", "getBrowserEvent", "init", "isButton", "isMouseActionButton", "keyCode", "metaKey", "offsetX", "offsetY", "platformModifierKey", "relatedTarget", "screenX", "screenY", "shiftKey", "state", "target"]
	}, {
		"name": "goog.events.BrowserEvent.MouseButton",
		"href": "enum_goog_events_BrowserEvent_MouseButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.BrowserFeature",
		"href": "enum_goog_events_BrowserFeature.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.CaptureSimulationMode",
		"href": "enum_goog_events_CaptureSimulationMode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.Event",
		"href": "class_goog_events_Event.html",
		"namespace": false,
		"interface": false,
		"statics": ["Event.preventDefault", "Event.stopPropagation"],
		"members": ["currentTarget", "defaultPrevented", "preventDefault", "propagationStopped_", "returnValue_", "row", "rowNode", "stopPropagation", "target", "type"]
	}, {
		"name": "goog.events.EventHandler",
		"href": "class_goog_events_EventHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["disposeInternal", "getListenerCount", "handleEvent", "handler_", "listen", "listenOnce", "listenOnceWithScope", "listenWithScope", "listenWithWrapper", "listenWithWrapperAndScope", "removeAll", "unlisten", "unlistenWithWrapper"]
	}, {
		"name": "goog.events.EventId",
		"href": "class_goog_events_EventId.html",
		"namespace": false,
		"interface": false,
		"members": ["id", "toString"]
	}, {
		"name": "goog.events.EventTarget",
		"href": "class_goog_events_EventTarget.html",
		"namespace": false,
		"interface": false,
		"members": ["addEventListener", "dispatchEvent", "disposeInternal", "fireListeners", "getListener", "getListeners", "getParentEventTarget", "hasListener", "listen", "listenOnce", "removeAllListeners", "removeEventListener", "setParentEventTarget", "setTargetForTesting", "unlisten", "unlistenByKey"]
	}, {
		"name": "goog.events.EventType",
		"href": "enum_goog_events_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.EventWrapper",
		"href": "interface_goog_events_EventWrapper.html",
		"namespace": true,
		"interface": true,
		"members": ["listen", "unlisten"]
	}, {
		"name": "goog.events.FileDropHandler",
		"href": "class_goog_events_FileDropHandler.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.FileDropHandler.EventType",
		"href": "enum_goog_events_FileDropHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.FocusHandler",
		"href": "class_goog_events_FocusHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["handleEvent"]
	}, {
		"name": "goog.events.FocusHandler.EventType",
		"href": "enum_goog_events_FocusHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.ImeHandler",
		"href": "class_goog_events_ImeHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["ImeHandler.USES_COMPOSITION_EVENTS"],
		"members": ["isImeMode"]
	}, {
		"name": "goog.events.ImeHandler.Event",
		"href": "class_goog_events_ImeHandler_Event.html",
		"namespace": false,
		"interface": false,
		"members": ["reason"]
	}, {
		"name": "goog.events.ImeHandler.EventType",
		"href": "enum_goog_events_ImeHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.InputHandler",
		"href": "class_goog_events_InputHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["handleEvent"]
	}, {
		"name": "goog.events.InputHandler.EventType",
		"href": "enum_goog_events_InputHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.KeyCodes",
		"href": "enum_goog_events_KeyCodes.html",
		"namespace": false,
		"interface": false,
		"statics": ["KeyCodes.firesKeyPressEvent", "KeyCodes.isCharacterKey", "KeyCodes.isTextModifyingKeyEvent", "KeyCodes.normalizeGeckoKeyCode", "KeyCodes.normalizeKeyCode", "KeyCodes.normalizeMacWebKitKeyCode"]
	}, {
		"name": "goog.events.KeyEvent",
		"href": "class_goog_events_KeyEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["charCode", "keyCode", "repeat"]
	}, {
		"name": "goog.events.KeyHandler",
		"href": "class_goog_events_KeyHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["attach", "detach", "getElement", "handleEvent", "resetState"]
	}, {
		"name": "goog.events.KeyHandler.EventType",
		"href": "enum_goog_events_KeyHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.KeyNames",
		"href": "enum_goog_events_KeyNames.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.Listenable",
		"href": "interface_goog_events_Listenable.html",
		"namespace": true,
		"interface": true,
		"statics": ["Listenable.IMPLEMENTED_BY_PROP", "Listenable.addImplementation", "Listenable.isImplementedBy"],
		"members": ["dispatchEvent", "fireListeners", "getListener", "getListeners", "getParentEventTarget", "hasListener", "listen", "listenOnce", "removeAllListeners", "unlisten", "unlistenByKey"]
	}, {
		"name": "goog.events.ListenableKey",
		"href": "interface_goog_events_ListenableKey.html",
		"namespace": true,
		"interface": true,
		"statics": ["ListenableKey.reserveKey"],
		"members": ["capture", "handler", "key", "listener", "src", "type"]
	}, {
		"name": "goog.events.Listener",
		"href": "class_goog_events_Listener.html",
		"namespace": false,
		"interface": false,
		"statics": ["Listener.ENABLE_MONITORING"],
		"members": ["callOnce", "capture", "creationStack", "handler", "key", "listener", "markAsRemoved", "proxy", "removed", "src", "type"]
	}, {
		"name": "goog.events.ListenerMap",
		"href": "class_goog_events_ListenerMap.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "getListener", "getListenerCount", "getListeners", "getTypeCount", "hasListener", "listeners", "remove", "removeAll", "removeByKey", "src"]
	}, {
		"name": "goog.events.MouseWheelEvent",
		"href": "class_goog_events_MouseWheelEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["deltaX", "deltaY", "detail"]
	}, {
		"name": "goog.events.MouseWheelHandler",
		"href": "class_goog_events_MouseWheelHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["handleEvent", "setMaxDeltaX", "setMaxDeltaY"]
	}, {
		"name": "goog.events.MouseWheelHandler.EventType",
		"href": "enum_goog_events_MouseWheelHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.OnlineHandler",
		"href": "class_goog_events_OnlineHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["isOnline"]
	}, {
		"name": "goog.events.OnlineHandler.EventType",
		"href": "enum_goog_events_OnlineHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.PasteHandler",
		"href": "class_goog_events_PasteHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["PasteHandler.MANDATORY_MS_BETWEEN_INPUT_EVENTS_TIE_BREAKER"],
		"members": ["getEventHandler", "getState"]
	}, {
		"name": "goog.events.PasteHandler.EventType",
		"href": "enum_goog_events_PasteHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.PasteHandler.State",
		"href": "enum_goog_events_PasteHandler_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.WheelEvent",
		"href": "class_goog_events_WheelEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["deltaMode", "deltaX", "deltaY", "deltaZ", "pixelDeltaX", "pixelDeltaY", "pixelDeltaZ"]
	}, {
		"name": "goog.events.WheelEvent.DeltaMode",
		"href": "enum_goog_events_WheelEvent_DeltaMode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.WheelEvent.EventType",
		"href": "enum_goog_events_WheelEvent_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.events.WheelHandler",
		"href": "class_goog_events_WheelHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["WheelHandler.getDomEventType"],
		"members": ["handleEvent"]
	}, {
		"name": "goog.format",
		"href": "namespace_goog_format.html",
		"namespace": true,
		"interface": false,
		"statics": ["WORD_BREAK_HTML", "fileSize", "insertWordBreaks", "insertWordBreaksBasic", "isConvertableScaledNumber", "numBytesToString", "numericValueToString", "stringToNumBytes", "stringToNumericValue"]
	}, {
		"name": "goog.format.EmailAddress",
		"href": "class_goog_format_EmailAddress.html",
		"namespace": false,
		"interface": false,
		"statics": ["EmailAddress.SPECIAL_CHARS", "EmailAddress.isAddressSeparator", "EmailAddress.isValidAddrSpec", "EmailAddress.isValidAddress", "EmailAddress.isValidDomainPartSpec", "EmailAddress.isValidLocalPartSpec", "EmailAddress.parse", "EmailAddress.parseInternal", "EmailAddress.parseList", "EmailAddress.parseListInternal"],
		"members": ["address", "getAddress", "getName", "isValid", "setAddress", "setName", "toString", "toStringInternal"]
	}, {
		"name": "goog.format.HtmlPrettyPrinter",
		"href": "class_goog_format_HtmlPrettyPrinter.html",
		"namespace": false,
		"interface": false,
		"statics": ["HtmlPrettyPrinter.format"],
		"members": ["format"]
	}, {
		"name": "goog.format.HtmlPrettyPrinter.Buffer",
		"href": "class_goog_format_HtmlPrettyPrinter_Buffer.html",
		"namespace": false,
		"interface": false,
		"members": ["breakCount", "lineBreak", "pushToken", "toString"]
	}, {
		"name": "goog.format.InternationalizedEmailAddress",
		"href": "class_goog_format_InternationalizedEmailAddress.html",
		"namespace": false,
		"interface": false,
		"statics": ["InternationalizedEmailAddress.isAddressSeparator", "InternationalizedEmailAddress.isValidAddrSpec", "InternationalizedEmailAddress.isValidAddress", "InternationalizedEmailAddress.isValidDomainPartSpec", "InternationalizedEmailAddress.isValidLocalPartSpec", "InternationalizedEmailAddress.parse", "InternationalizedEmailAddress.parseList"],
		"members": ["toString"]
	}, {
		"name": "goog.format.JsonPrettyPrinter",
		"href": "class_goog_format_JsonPrettyPrinter.html",
		"namespace": false,
		"interface": false,
		"members": ["format"]
	}, {
		"name": "goog.format.JsonPrettyPrinter.HtmlDelimiters",
		"href": "class_goog_format_JsonPrettyPrinter_HtmlDelimiters.html",
		"namespace": false,
		"interface": false,
		"members": ["postName", "postValue", "preName", "preValue"]
	}, {
		"name": "goog.format.JsonPrettyPrinter.TextDelimiters",
		"href": "class_goog_format_JsonPrettyPrinter_TextDelimiters.html",
		"namespace": false,
		"interface": false,
		"members": ["arrayEnd", "arrayStart", "indent", "lineBreak", "nameValueSeparator", "objectEnd", "objectStart", "postName", "postValue", "preName", "preValue", "propertySeparator", "space"]
	}, {
		"name": "goog.format.WbrToken_",
		"href": "enum_goog_format_WbrToken_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs",
		"href": "namespace_goog_fs.html",
		"namespace": true,
		"interface": false,
		"statics": ["blobToString", "browserSupportsObjectUrls", "createObjectUrl", "getBlob", "getBlobWithProperties", "getPersistent", "getTemporary", "revokeObjectUrl", "sliceBlob"]
	}, {
		"name": "goog.fs.DirectoryEntry",
		"href": "interface_goog_fs_DirectoryEntry.html",
		"namespace": true,
		"interface": true,
		"members": ["createPath", "getDirectory", "getFile", "listDirectory", "removeRecursively"]
	}, {
		"name": "goog.fs.DirectoryEntry.Behavior",
		"href": "enum_goog_fs_DirectoryEntry_Behavior.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.DirectoryEntryImpl",
		"href": "class_goog_fs_DirectoryEntryImpl.html",
		"namespace": false,
		"interface": false,
		"members": ["createPath", "getDirectory", "getFile", "listDirectory", "removeRecursively"]
	}, {
		"name": "goog.fs.Entry",
		"href": "interface_goog_fs_Entry.html",
		"namespace": true,
		"interface": true,
		"members": ["copyTo", "getFileSystem", "getFullPath", "getLastModified", "getMetadata", "getName", "getParent", "isDirectory", "isFile", "moveTo", "remove", "toUri", "toUrl", "wrapEntry"]
	}, {
		"name": "goog.fs.EntryImpl",
		"href": "class_goog_fs_EntryImpl.html",
		"namespace": false,
		"interface": false,
		"members": ["copyTo", "getFileSystem", "getFullPath", "getLastModified", "getMetadata", "getName", "getParent", "isDirectory", "isFile", "moveTo", "remove", "toUri", "toUrl", "wrapEntry"]
	}, {
		"name": "goog.fs.Error",
		"href": "class_goog_fs_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["code"]
	}, {
		"name": "goog.fs.Error.ErrorCode",
		"href": "enum_goog_fs_Error_ErrorCode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.Error.ErrorName",
		"href": "enum_goog_fs_Error_ErrorName.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileEntry",
		"href": "interface_goog_fs_FileEntry.html",
		"namespace": true,
		"interface": true,
		"members": ["createWriter", "file"]
	}, {
		"name": "goog.fs.FileEntryImpl",
		"href": "class_goog_fs_FileEntryImpl.html",
		"namespace": false,
		"interface": false,
		"members": ["createWriter", "file"]
	}, {
		"name": "goog.fs.FileReader",
		"href": "class_goog_fs_FileReader.html",
		"namespace": false,
		"interface": false,
		"statics": ["FileReader.readAsArrayBuffer", "FileReader.readAsBinaryString", "FileReader.readAsDataUrl", "FileReader.readAsText"],
		"members": ["abort", "getError", "getReadyState", "getResult", "readAsArrayBuffer", "readAsBinaryString", "readAsDataUrl", "readAsText"]
	}, {
		"name": "goog.fs.FileReader.EventType",
		"href": "enum_goog_fs_FileReader_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileReader.ReadyState",
		"href": "enum_goog_fs_FileReader_ReadyState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileSaver",
		"href": "class_goog_fs_FileSaver.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getError", "getReadyState"]
	}, {
		"name": "goog.fs.FileSaver.EventType",
		"href": "enum_goog_fs_FileSaver_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileSaver.ReadyState",
		"href": "enum_goog_fs_FileSaver_ReadyState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileSystem",
		"href": "interface_goog_fs_FileSystem.html",
		"namespace": true,
		"interface": true,
		"members": ["getName", "getRoot"]
	}, {
		"name": "goog.fs.FileSystemImpl",
		"href": "class_goog_fs_FileSystemImpl.html",
		"namespace": false,
		"interface": false,
		"members": ["getBrowserFileSystem", "getName", "getRoot"]
	}, {
		"name": "goog.fs.FileSystemType_",
		"href": "enum_goog_fs_FileSystemType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fs.FileWriter",
		"href": "class_goog_fs_FileWriter.html",
		"namespace": false,
		"interface": false,
		"members": ["getLength", "getPosition", "seek", "truncate", "write"]
	}, {
		"name": "goog.fs.ProgressEvent",
		"href": "class_goog_fs_ProgressEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["getLoaded", "getTotal", "isLengthComputable"]
	}, {
		"name": "goog.fs.url",
		"href": "namespace_goog_fs_url.html",
		"namespace": true,
		"interface": false,
		"statics": ["browserSupportsObjectUrls", "createObjectUrl", "revokeObjectUrl"]
	}, {
		"name": "goog.fs.url.UrlObject_",
		"href": "namespace_goog_fs_url.html#url.UrlObject_"
	}, {
		"name": "goog.functions",
		"href": "namespace_goog_functions.html",
		"namespace": true,
		"interface": false,
		"statics": ["CACHE_RETURN_VALUE", "FALSE", "NULL", "TRUE", "and", "cacheReturnValue", "compose", "constant", "create", "debounce", "equalTo", "error", "fail", "identity", "lock", "not", "nth", "once", "or", "sequence", "throttle", "withReturnValue"]
	}, {
		"name": "goog.fx",
		"href": "namespace_goog_fx.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.fx.AbstractDragDrop",
		"href": "class_goog_fx_AbstractDragDrop.html",
		"namespace": false,
		"interface": false,
		"statics": ["AbstractDragDrop.initDragDistanceThreshold"],
		"members": ["addItem", "addScrollableContainer", "addTarget", "afterEndDrag", "createDragElement", "createDragElementInternal", "createDraggerFor", "disposeDrag", "disposeItem", "endDrag", "getDragElementPosition", "getDragger", "getElementBox", "getEventPosition", "getScrollPos", "init", "initItem", "isInitialized", "isInside", "items_", "maybeStartDrag", "recalculateDragTargets", "recalculateScrollableContainers", "removeAllScrollableContainers", "removeItems", "setDragClass", "setScrollTarget", "setSourceClass", "setSubtargetFunction", "setTargetClass", "startDrag"]
	}, {
		"name": "goog.fx.AbstractDragDrop.EventType",
		"href": "namespace_goog_fx_AbstractDragDrop_EventType.html",
		"namespace": true,
		"interface": false,
		"statics": ["DRAG", "DRAGEND", "DRAGOUT", "DRAGOVER", "DRAGSTART", "DROP"]
	}, {
		"name": "goog.fx.ActiveDropTarget_",
		"href": "class_goog_fx_ActiveDropTarget_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.Animation",
		"href": "class_goog_fx_Animation.html",
		"namespace": false,
		"interface": false,
		"statics": ["Animation.TIMEOUT", "Animation.setAnimationWindow"],
		"members": ["coords", "cycle", "destroy", "disposeInternal", "duration", "enableRightPositioningForRtl", "endPoint", "getProgress", "isRightPositioningForRtlEnabled", "lastFrame", "onAnimate", "onAnimationFrame", "onDestroy", "pause", "play", "progress", "setProgress", "startPoint", "stop"]
	}, {
		"name": "goog.fx.Animation.EventType",
		"href": "enum_goog_fx_Animation_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.Animation.State",
		"href": "enum_goog_fx_Animation_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.AnimationEvent",
		"href": "class_goog_fx_AnimationEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["anim", "coords", "coordsAsInts", "duration", "fps", "progress", "state", "x", "y", "z"]
	}, {
		"name": "goog.fx.AnimationParallelQueue",
		"href": "class_goog_fx_AnimationParallelQueue.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.AnimationQueue",
		"href": "class_goog_fx_AnimationQueue.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "disposeInternal", "onAnimationFinish", "queue", "remove"]
	}, {
		"name": "goog.fx.AnimationSerialQueue",
		"href": "class_goog_fx_AnimationSerialQueue.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.CssSpriteAnimation",
		"href": "class_goog_fx_CssSpriteAnimation.html",
		"namespace": false,
		"interface": false,
		"members": ["clearSpritePosition"]
	}, {
		"name": "goog.fx.DragDrop",
		"href": "class_goog_fx_DragDrop.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.DragDropEvent",
		"href": "class_goog_fx_DragDropEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["clientX", "clientY", "dragSource", "dragSourceItem", "dropTarget", "dropTargetElement", "dropTargetItem", "subtarget", "viewportX", "viewportY"]
	}, {
		"name": "goog.fx.DragDropGroup",
		"href": "class_goog_fx_DragDropGroup.html",
		"namespace": false,
		"interface": false,
		"members": ["addDragDropItem", "addItem", "removeItem", "setSelection"]
	}, {
		"name": "goog.fx.DragDropItem",
		"href": "class_goog_fx_DragDropItem.html",
		"namespace": false,
		"interface": false,
		"members": ["data", "element", "getCurrentDragElement", "getData", "getDraggableElement", "getDraggableElements", "setParent"]
	}, {
		"name": "goog.fx.DragEvent",
		"href": "class_goog_fx_DragEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["browserEvent", "clientX", "clientY", "dragCanceled", "dragger", "left", "top"]
	}, {
		"name": "goog.fx.DragListDirection",
		"href": "enum_goog_fx_DragListDirection.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.DragListGroup",
		"href": "class_goog_fx_DragListGroup.html",
		"namespace": false,
		"interface": false,
		"members": ["addDragList", "addItemToDragList", "createDragElementInternal", "getHysteresis", "init", "insertCurrHoverItem", "listenForDragEvents", "setCurrDragItemClass", "setDragItemHandleHoverClass", "setDragItemHoverClass", "setDraggerElClass", "setFunctionToGetHandleForDragItem", "setHysteresis", "setIsCurrDragItemAlwaysDisplayed", "setNoUpdateWhileDragging", "updateCurrHoverItem"]
	}, {
		"name": "goog.fx.DragListGroup.EventType",
		"href": "namespace_goog_fx_DragListGroup_EventType.html",
		"namespace": true,
		"interface": false,
		"statics": ["BEFOREDRAGEND", "BEFOREDRAGMOVE", "BEFOREDRAGSTART", "DRAGEND", "DRAGMOVE", "DRAGSTART"]
	}, {
		"name": "goog.fx.DragListGroupEvent",
		"href": "class_goog_fx_DragListGroupEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["currDragItem", "dragListGroup", "dragger", "draggerEl", "draggerElCenter", "event", "hoverList", "hoverNextItem"]
	}, {
		"name": "goog.fx.DragScrollSupport",
		"href": "class_goog_fx_DragScrollSupport.html",
		"namespace": false,
		"interface": false,
		"statics": ["DragScrollSupport.MARGIN"],
		"members": ["calculateScrollDelta", "onMouseMove", "setConstrainScroll", "setHorizontalScrolling"]
	}, {
		"name": "goog.fx.Dragger",
		"href": "class_goog_fx_Dragger.html",
		"namespace": false,
		"interface": false,
		"statics": ["Dragger.cloneNode"],
		"members": ["clientX", "clientY", "computeInitialPosition", "defaultAction", "deltaX", "deltaY", "doDrag", "enableRightPositioningForRtl", "endDrag", "endDragCancel", "getEnabled", "getHandler", "getHysteresis", "handle", "isDragging", "limitX", "limitY", "limits", "pageScroll", "screenX", "screenY", "setCancelIeDragStart", "setEnabled", "setHysteresis", "setLimits", "setPreventMouseDown", "setScrollTarget", "setupDragHandlers", "startDrag", "startX", "startY", "target"]
	}, {
		"name": "goog.fx.Dragger.EventType",
		"href": "enum_goog_fx_Dragger_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.ScrollableContainer_",
		"href": "class_goog_fx_ScrollableContainer_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.Transition",
		"href": "interface_goog_fx_Transition.html",
		"namespace": true,
		"interface": true,
		"members": ["play", "stop"]
	}, {
		"name": "goog.fx.Transition.EventType",
		"href": "enum_goog_fx_Transition_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.TransitionBase",
		"href": "class_goog_fx_TransitionBase.html",
		"namespace": false,
		"interface": false,
		"members": ["dispatchAnimationEvent", "endTime", "getStateInternal", "isPaused", "isPlaying", "isStopped", "onBegin", "onEnd", "onFinish", "onPause", "onPlay", "onResume", "onStop", "pause", "play", "setStatePaused", "setStatePlaying", "setStateStopped", "startTime", "stop"]
	}, {
		"name": "goog.fx.TransitionBase.State",
		"href": "enum_goog_fx_TransitionBase_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.anim",
		"href": "namespace_goog_fx_anim.html",
		"namespace": true,
		"interface": false,
		"statics": ["TIMEOUT", "registerAnimation", "setAnimationWindow", "tearDown", "unregisterAnimation"]
	}, {
		"name": "goog.fx.anim.Animated",
		"href": "interface_goog_fx_anim_Animated.html",
		"namespace": true,
		"interface": true,
		"members": ["onAnimationFrame"]
	}, {
		"name": "goog.fx.css3",
		"href": "namespace_goog_fx_css3.html",
		"namespace": true,
		"interface": false,
		"statics": ["fade", "fadeIn", "fadeOut"]
	}, {
		"name": "goog.fx.css3.Transition",
		"href": "class_goog_fx_css3_Transition.html",
		"namespace": false,
		"interface": false,
		"members": ["pause"]
	}, {
		"name": "goog.fx.dom",
		"href": "namespace_goog_fx_dom.html",
		"namespace": true,
		"interface": false,
		"statics": ["bgColorFadeIn"]
	}, {
		"name": "goog.fx.dom.BgColorTransform",
		"href": "class_goog_fx_dom_BgColorTransform.html",
		"namespace": false,
		"interface": false,
		"members": ["setColor"]
	}, {
		"name": "goog.fx.dom.ColorTransform",
		"href": "class_goog_fx_dom_ColorTransform.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.dom.Fade",
		"href": "class_goog_fx_dom_Fade.html",
		"namespace": false,
		"interface": false,
		"members": ["hide", "show", "updateStyle"]
	}, {
		"name": "goog.fx.dom.FadeIn",
		"href": "class_goog_fx_dom_FadeIn.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.FadeInAndShow",
		"href": "class_goog_fx_dom_FadeInAndShow.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.FadeOut",
		"href": "class_goog_fx_dom_FadeOut.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.FadeOutAndHide",
		"href": "class_goog_fx_dom_FadeOutAndHide.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.PredefinedEffect",
		"href": "class_goog_fx_dom_PredefinedEffect.html",
		"namespace": false,
		"interface": false,
		"members": ["element", "isRightToLeft", "updateStyle"]
	}, {
		"name": "goog.fx.dom.Resize",
		"href": "class_goog_fx_dom_Resize.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.dom.ResizeHeight",
		"href": "class_goog_fx_dom_ResizeHeight.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.dom.ResizeWidth",
		"href": "class_goog_fx_dom_ResizeWidth.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.dom.Scroll",
		"href": "class_goog_fx_dom_Scroll.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.dom.Slide",
		"href": "class_goog_fx_dom_Slide.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.SlideFrom",
		"href": "class_goog_fx_dom_SlideFrom.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.fx.dom.Swipe",
		"href": "class_goog_fx_dom_Swipe.html",
		"namespace": false,
		"interface": false,
		"members": ["updateStyle"]
	}, {
		"name": "goog.fx.easing",
		"href": "namespace_goog_fx_easing.html",
		"namespace": true,
		"interface": false,
		"statics": ["easeIn", "easeOut", "easeOutLong", "inAndOut"]
	}, {
		"name": "goog.graphics",
		"href": "namespace_goog_graphics.html",
		"namespace": true,
		"interface": false,
		"statics": ["createGraphics", "createSimpleGraphics", "isBrowserSupported"]
	}, {
		"name": "goog.graphics.AbstractGraphics",
		"href": "class_goog_graphics_AbstractGraphics.html",
		"namespace": false,
		"interface": false,
		"members": ["canvasElement", "clear", "coordHeight", "coordLeft", "coordTop", "coordWidth", "createGroup", "createPath", "drawCircle", "drawEllipse", "drawPath", "drawRect", "drawText", "drawTextOnLine", "getCanvasElement", "getCoordOrigin", "getCoordSize", "getPixelScaleX", "getPixelScaleY", "getPixelSize", "getSize", "getTextWidth", "height", "isDomClonable", "removeElement", "resume", "setCoordOrigin", "setCoordSize", "setElementAffineTransform", "setElementFill", "setElementStroke", "setElementTransform", "setSize", "suspend", "width"]
	}, {
		"name": "goog.graphics.AffineTransform",
		"href": "class_goog_graphics_AffineTransform.html",
		"namespace": false,
		"interface": false,
		"statics": ["AffineTransform.getRotateInstance", "AffineTransform.getScaleInstance", "AffineTransform.getShearInstance", "AffineTransform.getTranslateInstance"],
		"members": ["clone", "concatenate", "copyFrom", "createInverse", "equals", "getDeterminant", "getScaleX", "getScaleY", "getShearX", "getShearY", "getTranslateX", "getTranslateY", "isIdentity", "isInvertible", "m00_", "m01_", "m02_", "m10_", "m11_", "m12_", "preConcatenate", "preRotate", "preScale", "preShear", "preTranslate", "rotate", "scale", "setToRotation", "setToScale", "setToShear", "setToTranslation", "setTransform", "shear", "toString", "transform", "translate"]
	}, {
		"name": "goog.graphics.CanvasEllipseElement",
		"href": "class_goog_graphics_CanvasEllipseElement.html",
		"namespace": false,
		"interface": false,
		"members": ["draw", "setCenter", "setRadius"]
	}, {
		"name": "goog.graphics.CanvasGraphics",
		"href": "class_goog_graphics_CanvasGraphics.html",
		"namespace": false,
		"interface": false,
		"members": ["append", "canvasElement", "clear", "createDom", "createGroup", "disposeInternal", "drawElement", "drawEllipse", "drawImage", "drawPath", "drawRect", "drawTextOnLine", "getContext", "getTextWidth", "isDrawable", "isRedrawRequired", "popElementTransform", "pushElementTransform", "redraw", "reset", "resume", "setCoordOrigin", "setCoordSize", "setElementAffineTransform", "setElementFill", "setElementStroke", "setElementTransform", "setSize", "suspend", "updateSize"]
	}, {
		"name": "goog.graphics.CanvasGroupElement",
		"href": "class_goog_graphics_CanvasGroupElement.html",
		"namespace": false,
		"interface": false,
		"members": ["appendChild", "clear", "draw", "setSize"]
	}, {
		"name": "goog.graphics.CanvasImageElement",
		"href": "class_goog_graphics_CanvasImageElement.html",
		"namespace": false,
		"interface": false,
		"members": ["draw", "setPosition", "setSize", "setSource"]
	}, {
		"name": "goog.graphics.CanvasPathElement",
		"href": "class_goog_graphics_CanvasPathElement.html",
		"namespace": false,
		"interface": false,
		"members": ["draw", "setPath"]
	}, {
		"name": "goog.graphics.CanvasRectElement",
		"href": "class_goog_graphics_CanvasRectElement.html",
		"namespace": false,
		"interface": false,
		"members": ["draw", "setPosition", "setSize"]
	}, {
		"name": "goog.graphics.CanvasTextElement",
		"href": "class_goog_graphics_CanvasTextElement.html",
		"namespace": false,
		"interface": false,
		"members": ["draw", "setFill", "setStroke", "setText"]
	}, {
		"name": "goog.graphics.Element",
		"href": "class_goog_graphics_Element.html",
		"namespace": false,
		"interface": false,
		"members": ["getElement", "getGraphics", "getTransform", "setTransform", "setTransformation"]
	}, {
		"name": "goog.graphics.EllipseElement",
		"href": "class_goog_graphics_EllipseElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setCenter", "setRadius"]
	}, {
		"name": "goog.graphics.Fill",
		"href": "class_goog_graphics_Fill.html",
		"namespace": false,
		"interface": false,
		"members": ["getColor1", "getColor2"]
	}, {
		"name": "goog.graphics.Font",
		"href": "class_goog_graphics_Font.html",
		"namespace": false,
		"interface": false,
		"members": ["bold", "family", "italic", "size"]
	}, {
		"name": "goog.graphics.GroupElement",
		"href": "class_goog_graphics_GroupElement.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "setSize"]
	}, {
		"name": "goog.graphics.ImageElement",
		"href": "class_goog_graphics_ImageElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPosition", "setSize", "setSource"]
	}, {
		"name": "goog.graphics.LinearGradient",
		"href": "class_goog_graphics_LinearGradient.html",
		"namespace": false,
		"interface": false,
		"members": ["getOpacity1", "getOpacity2", "getX1", "getX2", "getY1", "getY2"]
	}, {
		"name": "goog.graphics.Path",
		"href": "class_goog_graphics_Path.html",
		"namespace": false,
		"interface": false,
		"statics": ["Path.createSimplifiedPath", "Path.getSegmentCount"],
		"members": ["appendPath", "arc", "arcTo", "arcToAsCurves", "clear", "clone", "close", "createTransformedPath", "curveTo", "forEachSegment", "getCurrentPoint", "isEmpty", "isSimple", "lineTo", "moveTo", "transform"]
	}, {
		"name": "goog.graphics.Path.Segment",
		"href": "enum_goog_graphics_Path_Segment.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.graphics.PathElement",
		"href": "class_goog_graphics_PathElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPath"]
	}, {
		"name": "goog.graphics.RectElement",
		"href": "class_goog_graphics_RectElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPosition", "setSize"]
	}, {
		"name": "goog.graphics.SolidFill",
		"href": "class_goog_graphics_SolidFill.html",
		"namespace": false,
		"interface": false,
		"members": ["getColor", "getOpacity"]
	}, {
		"name": "goog.graphics.Stroke",
		"href": "class_goog_graphics_Stroke.html",
		"namespace": false,
		"interface": false,
		"members": ["getColor", "getOpacity", "getWidth"]
	}, {
		"name": "goog.graphics.StrokeAndFillElement",
		"href": "class_goog_graphics_StrokeAndFillElement.html",
		"namespace": false,
		"interface": false,
		"members": ["fill", "getFill", "getStroke", "reapplyStroke", "setFill", "setStroke"]
	}, {
		"name": "goog.graphics.SvgEllipseElement",
		"href": "class_goog_graphics_SvgEllipseElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setCenter", "setRadius"]
	}, {
		"name": "goog.graphics.SvgGraphics",
		"href": "class_goog_graphics_SvgGraphics.html",
		"namespace": false,
		"interface": false,
		"statics": ["SvgGraphics.getSvgPath"],
		"members": ["addDef", "clear", "createDom", "createGroup", "disposeInternal", "drawEllipse", "drawImage", "drawPath", "drawRect", "drawTextOnLine", "getDef", "getTextWidth", "removeDef", "setCoordOrigin", "setCoordSize", "setElementAffineTransform", "setElementAttributes", "setElementFill", "setElementStroke", "setElementTransform", "setSize"]
	}, {
		"name": "goog.graphics.SvgGroupElement",
		"href": "class_goog_graphics_SvgGroupElement.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "setSize"]
	}, {
		"name": "goog.graphics.SvgImageElement",
		"href": "class_goog_graphics_SvgImageElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPosition", "setSize", "setSource"]
	}, {
		"name": "goog.graphics.SvgPathElement",
		"href": "class_goog_graphics_SvgPathElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPath"]
	}, {
		"name": "goog.graphics.SvgRectElement",
		"href": "class_goog_graphics_SvgRectElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setPosition", "setSize"]
	}, {
		"name": "goog.graphics.SvgTextElement",
		"href": "class_goog_graphics_SvgTextElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setText"]
	}, {
		"name": "goog.graphics.TextElement",
		"href": "class_goog_graphics_TextElement.html",
		"namespace": false,
		"interface": false,
		"members": ["setText"]
	}, {
		"name": "goog.graphics.VmlEllipseElement",
		"href": "class_goog_graphics_VmlEllipseElement.html",
		"namespace": false,
		"interface": false,
		"members": ["cx", "cy", "id_", "rx", "ry", "setCenter", "setRadius"]
	}, {
		"name": "goog.graphics.VmlGraphics",
		"href": "class_goog_graphics_VmlGraphics.html",
		"namespace": false,
		"interface": false,
		"statics": ["VmlGraphics.COORD_MULTIPLIER", "VmlGraphics.getVmlPath", "VmlGraphics.setAttribute", "VmlGraphics.setPositionAndSize", "VmlGraphics.toCssSize", "VmlGraphics.toPosCoord", "VmlGraphics.toPosPx", "VmlGraphics.toSizeCoord", "VmlGraphics.toSizePx"],
		"members": ["clear", "createDom", "createGroup", "createVmlElement", "disposeInternal", "drawEllipse", "drawImage", "drawPath", "drawRect", "drawTextOnLine", "getTextWidth", "getVmlElement", "setCoordOrigin", "setCoordSize", "setElementAffineTransform", "setElementFill", "setElementStroke", "setElementTransform", "setSize"]
	}, {
		"name": "goog.graphics.VmlGroupElement",
		"href": "class_goog_graphics_VmlGroupElement.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "id_", "setSize"]
	}, {
		"name": "goog.graphics.VmlImageElement",
		"href": "class_goog_graphics_VmlImageElement.html",
		"namespace": false,
		"interface": false,
		"members": ["id_", "setPosition", "setSize", "setSource"]
	}, {
		"name": "goog.graphics.VmlPathElement",
		"href": "class_goog_graphics_VmlPathElement.html",
		"namespace": false,
		"interface": false,
		"members": ["id_", "setPath"]
	}, {
		"name": "goog.graphics.VmlRectElement",
		"href": "class_goog_graphics_VmlRectElement.html",
		"namespace": false,
		"interface": false,
		"members": ["id_", "setPosition", "setSize"]
	}, {
		"name": "goog.graphics.VmlTextElement",
		"href": "class_goog_graphics_VmlTextElement.html",
		"namespace": false,
		"interface": false,
		"members": ["id_", "setText"]
	}, {
		"name": "goog.graphics.ext",
		"href": "namespace_goog_graphics_ext.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.graphics.ext.Element",
		"href": "class_goog_graphics_ext_Element.html",
		"namespace": false,
		"interface": false,
		"members": ["checkParentDependent", "getBottom", "getCenter", "getGraphics", "getGraphicsImplementation", "getHeight", "getLeft", "getMaxX", "getMaxY", "getMiddle", "getMinHeight", "getMinWidth", "getParent", "getPixelScaleX", "getPixelScaleY", "getRight", "getRotation", "getTop", "getWidth", "getWrapper", "isParentDependent", "isPendingTransform", "parentTransform", "redraw", "reset", "setBottom", "setBounds", "setCenter", "setHeight", "setLeft", "setMiddle", "setMinHeight", "setMinWidth", "setPosition", "setRight", "setRotation", "setSize", "setTop", "setWidth", "transform"]
	}, {
		"name": "goog.graphics.ext.Element.PositionType_",
		"href": "enum_goog_graphics_ext_Element_PositionType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.graphics.ext.Element.Position_",
		"href": "class_goog_graphics_ext_Element_Position_.html",
		"namespace": false,
		"interface": false,
		"members": ["element_", "getEnd", "getMaxPosition", "getMiddle", "getMinSize", "getSize", "getStart", "horizontal_", "isParentDependent", "resetCache", "setMinSize", "setPosition", "setSize"]
	}, {
		"name": "goog.graphics.ext.Ellipse",
		"href": "class_goog_graphics_ext_Ellipse.html",
		"namespace": false,
		"interface": false,
		"members": ["redraw"]
	}, {
		"name": "goog.graphics.ext.Graphics",
		"href": "class_goog_graphics_ext_Graphics.html",
		"namespace": false,
		"interface": false,
		"members": ["getCoordOrigin", "getCoordSize", "getElement", "getImplementation", "getPixelSize", "redraw", "render", "setCoordOrigin", "setCoordSize", "setPixelSize"]
	}, {
		"name": "goog.graphics.ext.Group",
		"href": "class_goog_graphics_ext_Group.html",
		"namespace": false,
		"interface": false,
		"members": ["addChild", "clear", "forEachChild", "getCoordinateHeight", "getCoordinateWidth", "redraw", "removeChild", "reset", "transformChildren", "updateChildren"]
	}, {
		"name": "goog.graphics.ext.Image",
		"href": "class_goog_graphics_ext_Image.html",
		"namespace": false,
		"interface": false,
		"members": ["redraw", "setSource"]
	}, {
		"name": "goog.graphics.ext.Path",
		"href": "class_goog_graphics_ext_Path.html",
		"namespace": false,
		"interface": false,
		"members": ["clone", "getBoundingBox", "modifyBounds", "transform", "useBoundingBox"]
	}, {
		"name": "goog.graphics.ext.Rectangle",
		"href": "class_goog_graphics_ext_Rectangle.html",
		"namespace": false,
		"interface": false,
		"members": ["redraw"]
	}, {
		"name": "goog.graphics.ext.Shape",
		"href": "class_goog_graphics_ext_Shape.html",
		"namespace": false,
		"interface": false,
		"members": ["getPath", "redraw", "setPath"]
	}, {
		"name": "goog.graphics.ext.StrokeAndFillElement",
		"href": "class_goog_graphics_ext_StrokeAndFillElement.html",
		"namespace": false,
		"interface": false,
		"members": ["redraw", "setFill", "setStroke"]
	}, {
		"name": "goog.graphics.ext.coordinates",
		"href": "namespace_goog_graphics_ext_coordinates.html",
		"namespace": true,
		"interface": false,
		"statics": ["computeValue", "getValue", "isSpecial"]
	}, {
		"name": "goog.graphics.paths",
		"href": "namespace_goog_graphics_paths.html",
		"namespace": true,
		"interface": false,
		"statics": ["createArrow", "createRegularNGon"]
	}, {
		"name": "goog.history",
		"href": "namespace_goog_history.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.history.Event",
		"href": "class_goog_history_Event.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.history.EventType",
		"href": "enum_goog_history_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.history.Html5History",
		"href": "class_goog_history_Html5History.html",
		"namespace": false,
		"interface": false,
		"statics": ["Html5History.isSupported"],
		"members": ["getPathPrefix", "getToken", "replaceToken", "setEnabled", "setPathPrefix", "setToken", "setUseFragment"]
	}, {
		"name": "goog.history.Html5History.TokenTransformer",
		"href": "interface_goog_history_Html5History_TokenTransformer.html",
		"namespace": true,
		"interface": true,
		"members": ["createUrl", "retrieveToken"]
	}, {
		"name": "goog.html",
		"href": "namespace_goog_html.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.html.SafeHtml",
		"href": "class_goog_html_SafeHtml.html",
		"namespace": false,
		"interface": false,
		"statics": ["SafeHtml.DOCTYPE_HTML", "SafeHtml.EMPTY", "SafeHtml.combineAttributes", "SafeHtml.concat", "SafeHtml.concatWithDir", "SafeHtml.create", "SafeHtml.createIframe", "SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse", "SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse", "SafeHtml.createStyle", "SafeHtml.createWithDir", "SafeHtml.from", "SafeHtml.htmlEscape", "SafeHtml.htmlEscapePreservingNewlines", "SafeHtml.htmlEscapePreservingNewlinesAndSpaces", "SafeHtml.unwrap"],
		"members": ["getDirection", "getTypedStringValue", "implementsGoogI18nBidiDirectionalString", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.SafeHtml.AttributeValue_",
		"href": "class_goog_html_SafeHtml.html#SafeHtml.AttributeValue_"
	}, {
		"name": "goog.html.SafeHtml.TextOrHtml_",
		"href": "class_goog_html_SafeHtml.html#SafeHtml.TextOrHtml_"
	}, {
		"name": "goog.html.SafeScript",
		"href": "class_goog_html_SafeScript.html",
		"namespace": false,
		"interface": false,
		"statics": ["SafeScript.EMPTY", "SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse", "SafeScript.fromConstant", "SafeScript.unwrap"],
		"members": ["getTypedStringValue", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.SafeStyle",
		"href": "class_goog_html_SafeStyle.html",
		"namespace": false,
		"interface": false,
		"statics": ["SafeStyle.EMPTY", "SafeStyle.INNOCUOUS_STRING", "SafeStyle.concat", "SafeStyle.create", "SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse", "SafeStyle.fromConstant", "SafeStyle.unwrap"],
		"members": ["getTypedStringValue", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.SafeStyle.PropertyMap",
		"href": "class_goog_html_SafeStyle.html#SafeStyle.PropertyMap"
	}, {
		"name": "goog.html.SafeStyleSheet",
		"href": "class_goog_html_SafeStyleSheet.html",
		"namespace": false,
		"interface": false,
		"statics": ["SafeStyleSheet.EMPTY", "SafeStyleSheet.concat", "SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse", "SafeStyleSheet.fromConstant", "SafeStyleSheet.unwrap"],
		"members": ["getTypedStringValue", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.SafeUrl",
		"href": "class_goog_html_SafeUrl.html",
		"namespace": false,
		"interface": false,
		"statics": ["SafeUrl.INNOCUOUS_STRING", "SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse", "SafeUrl.fromBlob", "SafeUrl.fromConstant", "SafeUrl.fromDataUrl", "SafeUrl.sanitize", "SafeUrl.unwrap"],
		"members": ["getDirection", "getTypedStringValue", "implementsGoogI18nBidiDirectionalString", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.TrustedResourceUrl",
		"href": "class_goog_html_TrustedResourceUrl.html",
		"namespace": false,
		"interface": false,
		"statics": ["TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse", "TrustedResourceUrl.fromConstant", "TrustedResourceUrl.unwrap"],
		"members": ["getDirection", "getTypedStringValue", "implementsGoogI18nBidiDirectionalString", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.html.flash",
		"href": "namespace_goog_html_flash.html",
		"namespace": true,
		"interface": false,
		"statics": ["combineParams", "createEmbed", "createObject", "createObjectForOldIe", "verifyKeysNotInMaps"]
	}, {
		"name": "goog.html.legacyconversions",
		"href": "namespace_goog_html_legacyconversions.html",
		"namespace": true,
		"interface": false,
		"statics": ["ALLOW_LEGACY_CONVERSIONS", "safeHtmlFromString", "safeStyleFromString", "safeUrlFromString", "setReportCallback", "throwIfConversionsDisallowed", "trustedResourceUrlFromString"]
	}, {
		"name": "goog.html.silverlight",
		"href": "namespace_goog_html_silverlight.html",
		"namespace": true,
		"interface": false,
		"statics": ["createObject"]
	}, {
		"name": "goog.html.testing",
		"href": "namespace_goog_html_testing.html",
		"namespace": true,
		"interface": false,
		"statics": ["newSafeHtmlForTest", "newSafeScriptForTest", "newSafeStyleForTest", "newSafeStyleSheetForTest", "newSafeUrlForTest", "newTrustedResourceUrlForTest"]
	}, {
		"name": "goog.html.uncheckedconversions",
		"href": "namespace_goog_html_uncheckedconversions.html",
		"namespace": true,
		"interface": false,
		"statics": ["safeHtmlFromStringKnownToSatisfyTypeContract", "safeScriptFromStringKnownToSatisfyTypeContract", "safeStyleFromStringKnownToSatisfyTypeContract", "safeStyleSheetFromStringKnownToSatisfyTypeContract", "safeUrlFromStringKnownToSatisfyTypeContract", "trustedResourceUrlFromStringKnownToSatisfyTypeContract"]
	}, {
		"name": "goog.html.utils",
		"href": "namespace_goog_html_utils.html",
		"namespace": true,
		"interface": false,
		"statics": ["stripHtmlTags"]
	}, {
		"name": "goog.i18n",
		"href": "namespace_goog_i18n.html",
		"namespace": true,
		"interface": false,
		"statics": ["CompactNumberFormatSymbols", "DateTimePatterns", "DateTimeSymbols", "NumberFormatSymbols", "currencyCodeMap", "currencyCodeMapTier2"]
	}, {
		"name": "goog.i18n.BidiFormatter",
		"href": "class_goog_i18n_BidiFormatter.html",
		"namespace": false,
		"interface": false,
		"members": ["dirAttr", "dirAttrValue", "endEdge", "estimateDirection", "getAlwaysSpan", "getContextDir", "knownDirAttr", "knownDirAttrValue", "mark", "markAfter", "markAfterKnownDir", "setAlwaysSpan", "setContextDir", "spanWrap", "spanWrapSafeHtml", "spanWrapSafeHtmlWithKnownDir", "spanWrapWithKnownDir", "startEdge", "unicodeWrap", "unicodeWrapWithKnownDir"]
	}, {
		"name": "goog.i18n.CharListDecompressor",
		"href": "class_goog_i18n_CharListDecompressor.html",
		"namespace": false,
		"interface": false,
		"members": ["toCharList"]
	}, {
		"name": "goog.i18n.CharPickerData",
		"href": "class_goog_i18n_CharPickerData.html",
		"namespace": false,
		"interface": false,
		"statics": ["CharPickerData.CHARLIST_OF_AFRICAN_SCRIPTS", "CharPickerData.CHARLIST_OF_AMERICAN_SCRIPTS", "CharPickerData.CHARLIST_OF_EMOJI", "CharPickerData.CHARLIST_OF_FORMAT_WHITESPACE", "CharPickerData.CHARLIST_OF_HANGUL", "CharPickerData.CHARLIST_OF_HAN_10_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_11_17_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_1_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_2_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_3_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_4_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_5_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_6_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_7_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_8_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_9_STROKE_RADICALS", "CharPickerData.CHARLIST_OF_HAN_OTHER", "CharPickerData.CHARLIST_OF_LATIN", "CharPickerData.CHARLIST_OF_MIDDLE_EASTERN_SCRIPTS", "CharPickerData.CHARLIST_OF_MODIFIER", "CharPickerData.CHARLIST_OF_NUMBER", "CharPickerData.CHARLIST_OF_OTHER_EAST_ASIAN_SCRIPTS", "CharPickerData.CHARLIST_OF_OTHER_EUROPEAN_SCRIPTS", "CharPickerData.CHARLIST_OF_PUNCTUATION", "CharPickerData.CHARLIST_OF_SOUTHEAST_ASIAN_SCRIPTS", "CharPickerData.CHARLIST_OF_SOUTH_ASIAN_SCRIPTS", "CharPickerData.CHARLIST_OF_SYMBOL", "CharPickerData.MSG_CP_AFRICAN_SCRIPTS", "CharPickerData.MSG_CP_AMERICAN_SCRIPTS", "CharPickerData.MSG_CP_ANIMALS_PLANTS_AND_FOOD", "CharPickerData.MSG_CP_ARABIC", "CharPickerData.MSG_CP_ARMENIAN", "CharPickerData.MSG_CP_ARROWS", "CharPickerData.MSG_CP_ASCII_BASED", "CharPickerData.MSG_CP_AVESTAN", "CharPickerData.MSG_CP_BALINESE", "CharPickerData.MSG_CP_BAMUM", "CharPickerData.MSG_CP_BATAK", "CharPickerData.MSG_CP_BENGALI", "CharPickerData.MSG_CP_BOPOMOFO", "CharPickerData.MSG_CP_BRAHMI", "CharPickerData.MSG_CP_BRAILLE", "CharPickerData.MSG_CP_BUGINESE", "CharPickerData.MSG_CP_BUHID", "CharPickerData.MSG_CP_CANADIAN_ABORIGINAL", "CharPickerData.MSG_CP_CARIAN", "CharPickerData.MSG_CP_CHAKMA", "CharPickerData.MSG_CP_CHAM", "CharPickerData.MSG_CP_CHEROKEE", "CharPickerData.MSG_CP_CJK_STROKES", "CharPickerData.MSG_CP_COMMON", "CharPickerData.MSG_CP_COMPATIBILITY", "CharPickerData.MSG_CP_CONTROL_PICTURES", "CharPickerData.MSG_CP_COPTIC", "CharPickerData.MSG_CP_CUNEIFORM", "CharPickerData.MSG_CP_CURRENCY", "CharPickerData.MSG_CP_CYPRIOT", "CharPickerData.MSG_CP_CYRILLIC", "CharPickerData.MSG_CP_DASH_CONNECTOR", "CharPickerData.MSG_CP_DECIMAL", "CharPickerData.MSG_CP_DESERET", "CharPickerData.MSG_CP_DEVANAGARI", "CharPickerData.MSG_CP_EGYPTIAN_HIEROGLYPHS", "CharPickerData.MSG_CP_EMOJI", "CharPickerData.MSG_CP_EMOTICONS", "CharPickerData.MSG_CP_ENCLOSED", "CharPickerData.MSG_CP_ENCLOSED_DOTTED", "CharPickerData.MSG_CP_ENCLOSING", "CharPickerData.MSG_CP_ETHIOPIC", "CharPickerData.MSG_CP_FLIPPED_MIRRORED", "CharPickerData.MSG_CP_FORMAT", "CharPickerData.MSG_CP_FORMAT_WHITESPACE", "CharPickerData.MSG_CP_FRACTIONS_RELATED", "CharPickerData.MSG_CP_GAME_PIECES", "CharPickerData.MSG_CP_GENDER_AND_GENEALOGICAL", "CharPickerData.MSG_CP_GEOMETRIC_SHAPES", "CharPickerData.MSG_CP_GEORGIAN", "CharPickerData.MSG_CP_GLAGOLITIC", "CharPickerData.MSG_CP_GOTHIC", "CharPickerData.MSG_CP_GREEK", "CharPickerData.MSG_CP_GUJARATI", "CharPickerData.MSG_CP_GURMUKHI", "CharPickerData.MSG_CP_HANGUL", "CharPickerData.MSG_CP_HANUNOO", "CharPickerData.MSG_CP_HAN_10_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_11_17_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_1_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_2_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_3_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_4_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_5_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_6_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_7_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_8_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_9_STROKE_RADICALS", "CharPickerData.MSG_CP_HAN_OTHER", "CharPickerData.MSG_CP_HEBREW", "CharPickerData.MSG_CP_HIRAGANA", "CharPickerData.MSG_CP_HISTORIC", "CharPickerData.MSG_CP_IDEOGRAPHIC_DESCRIPTION", "CharPickerData.MSG_CP_IMPERIAL_ARAMAIC", "CharPickerData.MSG_CP_INSCRIPTIONAL_PAHLAVI", "CharPickerData.MSG_CP_INSCRIPTIONAL_PARTHIAN", "CharPickerData.MSG_CP_JAVANESE", "CharPickerData.MSG_CP_KAITHI", "CharPickerData.MSG_CP_KANNADA", "CharPickerData.MSG_CP_KATAKANA", "CharPickerData.MSG_CP_KAYAH_LI", "CharPickerData.MSG_CP_KEYBOARD_AND_UI", "CharPickerData.MSG_CP_KHAROSHTHI", "CharPickerData.MSG_CP_KHMER", "CharPickerData.MSG_CP_LAO", "CharPickerData.MSG_CP_LATIN", "CharPickerData.MSG_CP_LATIN_1_SUPPLEMENT", "CharPickerData.MSG_CP_LEPCHA", "CharPickerData.MSG_CP_LESS_COMMON", "CharPickerData.MSG_CP_LIMBU", "CharPickerData.MSG_CP_LINEAR_B", "CharPickerData.MSG_CP_LISU", "CharPickerData.MSG_CP_LYCIAN", "CharPickerData.MSG_CP_LYDIAN", "CharPickerData.MSG_CP_MALAYALAM", "CharPickerData.MSG_CP_MANDAIC", "CharPickerData.MSG_CP_MARKS", "CharPickerData.MSG_CP_MATH", "CharPickerData.MSG_CP_MATH_ALPHANUMERIC", "CharPickerData.MSG_CP_MEETEI_MAYEK", "CharPickerData.MSG_CP_MEROITIC_CURSIVE", "CharPickerData.MSG_CP_MEROITIC_HIEROGLYPHS", "CharPickerData.MSG_CP_MIAO", "CharPickerData.MSG_CP_MIDDLE_EASTERN_SCRIPTS", "CharPickerData.MSG_CP_MISCELLANEOUS", "CharPickerData.MSG_CP_MODIFIER", "CharPickerData.MSG_CP_MONGOLIAN", "CharPickerData.MSG_CP_MUSICAL", "CharPickerData.MSG_CP_MYANMAR", "CharPickerData.MSG_CP_NEW_TAI_LUE", "CharPickerData.MSG_CP_NKO", "CharPickerData.MSG_CP_NONSPACING", "CharPickerData.MSG_CP_NUMBER", "CharPickerData.MSG_CP_OBJECTS", "CharPickerData.MSG_CP_OGHAM", "CharPickerData.MSG_CP_OLD_ITALIC", "CharPickerData.MSG_CP_OLD_PERSIAN", "CharPickerData.MSG_CP_OLD_SOUTH_ARABIAN", "CharPickerData.MSG_CP_OLD_TURKIC", "CharPickerData.MSG_CP_OL_CHIKI", "CharPickerData.MSG_CP_ORIYA", "CharPickerData.MSG_CP_OSMANYA", "CharPickerData.MSG_CP_OTHER", "CharPickerData.MSG_CP_OTHER_EAST_ASIAN_SCRIPTS", "CharPickerData.MSG_CP_OTHER_EUROPEAN_SCRIPTS", "CharPickerData.MSG_CP_PAIRED", "CharPickerData.MSG_CP_PEOPLE_AND_EMOTIONS", "CharPickerData.MSG_CP_PHAGS_PA", "CharPickerData.MSG_CP_PHOENICIAN", "CharPickerData.MSG_CP_PHONETICS_IPA", "CharPickerData.MSG_CP_PHONETICS_X_IPA", "CharPickerData.MSG_CP_PUNCTUATION", "CharPickerData.MSG_CP_REJANG", "CharPickerData.MSG_CP_RUNIC", "CharPickerData.MSG_CP_SAMARITAN", "CharPickerData.MSG_CP_SAURASHTRA", "CharPickerData.MSG_CP_SHARADA", "CharPickerData.MSG_CP_SHAVIAN", "CharPickerData.MSG_CP_SINHALA", "CharPickerData.MSG_CP_SORA_SOMPENG", "CharPickerData.MSG_CP_SOUTHEAST_ASIAN_SCRIPTS", "CharPickerData.MSG_CP_SOUTH_ASIAN_SCRIPTS", "CharPickerData.MSG_CP_SPACING", "CharPickerData.MSG_CP_SPORTS_CELEBRATIONS_AND_ACTIVITIES", "CharPickerData.MSG_CP_STARS_ASTERISKS", "CharPickerData.MSG_CP_SUBSCRIPT", "CharPickerData.MSG_CP_SUNDANESE", "CharPickerData.MSG_CP_SUPERSCRIPT", "CharPickerData.MSG_CP_SYLOTI_NAGRI", "CharPickerData.MSG_CP_SYMBOL", "CharPickerData.MSG_CP_SYMBOLS", "CharPickerData.MSG_CP_SYRIAC", "CharPickerData.MSG_CP_TAGALOG", "CharPickerData.MSG_CP_TAGBANWA", "CharPickerData.MSG_CP_TAI_LE", "CharPickerData.MSG_CP_TAI_THAM", "CharPickerData.MSG_CP_TAI_VIET", "CharPickerData.MSG_CP_TAKRI", "CharPickerData.MSG_CP_TAMIL", "CharPickerData.MSG_CP_TECHNICAL", "CharPickerData.MSG_CP_TELUGU", "CharPickerData.MSG_CP_THAANA", "CharPickerData.MSG_CP_THAI", "CharPickerData.MSG_CP_TIBETAN", "CharPickerData.MSG_CP_TIFINAGH", "CharPickerData.MSG_CP_TRANSPORT_AND_MAP", "CharPickerData.MSG_CP_TRANSPORT_MAPS_AND_SIGNAGE", "CharPickerData.MSG_CP_UGARITIC", "CharPickerData.MSG_CP_VAI", "CharPickerData.MSG_CP_VARIATION_SELECTOR", "CharPickerData.MSG_CP_WEATHER_AND_ASTROLOGICAL", "CharPickerData.MSG_CP_WEATHER_SCENES_AND_ZODIAC_SIGNS", "CharPickerData.MSG_CP_WHITESPACE", "CharPickerData.MSG_CP_YI", "CharPickerData.MSG_CP_YIJING_TAI_XUAN_JING", "CharPickerData.SUBCATEGORY_NAMES_OF_AFRICAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_AMERICAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_EMOJI", "CharPickerData.SUBCATEGORY_NAMES_OF_FORMAT_WHITESPACE", "CharPickerData.SUBCATEGORY_NAMES_OF_HANGUL", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_10_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_11_17_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_1_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_2_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_3_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_4_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_5_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_6_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_7_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_8_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_9_STROKE_RADICALS", "CharPickerData.SUBCATEGORY_NAMES_OF_HAN_OTHER", "CharPickerData.SUBCATEGORY_NAMES_OF_LATIN", "CharPickerData.SUBCATEGORY_NAMES_OF_MIDDLE_EASTERN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_MODIFIER", "CharPickerData.SUBCATEGORY_NAMES_OF_NUMBER", "CharPickerData.SUBCATEGORY_NAMES_OF_OTHER_EAST_ASIAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_OTHER_EUROPEAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_PUNCTUATION", "CharPickerData.SUBCATEGORY_NAMES_OF_SOUTHEAST_ASIAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_SOUTH_ASIAN_SCRIPTS", "CharPickerData.SUBCATEGORY_NAMES_OF_SYMBOL"],
		"members": ["categories", "charList", "subcategories"]
	}, {
		"name": "goog.i18n.DateTimeFormat",
		"href": "class_goog_i18n_DateTimeFormat.html",
		"namespace": false,
		"interface": false,
		"statics": ["DateTimeFormat.isEnforceAsciiDigits", "DateTimeFormat.localizeNumbers", "DateTimeFormat.setEnforceAsciiDigits"],
		"members": ["format", "patternParts_"]
	}, {
		"name": "goog.i18n.DateTimeFormat.Format",
		"href": "enum_goog_i18n_DateTimeFormat_Format.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.DateTimeFormat.PartTypes_",
		"href": "enum_goog_i18n_DateTimeFormat_PartTypes_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.DateTimeParse",
		"href": "class_goog_i18n_DateTimeParse.html",
		"namespace": false,
		"interface": false,
		"statics": ["DateTimeParse.ambiguousYearCenturyStart"],
		"members": ["parse", "patternParts_", "strictParse"]
	}, {
		"name": "goog.i18n.DateTimeParse.MyDate_",
		"href": "class_goog_i18n_DateTimeParse_MyDate_.html",
		"namespace": false,
		"interface": false,
		"members": ["ampm", "day", "dayOfWeek", "era", "hours", "milliseconds", "minutes", "month", "seconds", "tzOffset", "year"]
	}, {
		"name": "goog.i18n.GraphemeBreak",
		"href": "namespace_goog_i18n_GraphemeBreak.html",
		"namespace": true,
		"interface": false,
		"statics": ["hasGraphemeBreak"]
	}, {
		"name": "goog.i18n.GraphemeBreak.property",
		"href": "enum_goog_i18n_GraphemeBreak_property.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.MessageFormat",
		"href": "class_goog_i18n_MessageFormat.html",
		"namespace": false,
		"interface": false,
		"members": ["format", "formatIgnoringPound"]
	}, {
		"name": "goog.i18n.MessageFormat.TypeVal_",
		"href": "class_goog_i18n_MessageFormat.html#MessageFormat.TypeVal_"
	}, {
		"name": "goog.i18n.MessageFormat.BlockType_",
		"href": "enum_goog_i18n_MessageFormat_BlockType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.MessageFormat.Element_",
		"href": "enum_goog_i18n_MessageFormat_Element_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.NumberFormat",
		"href": "class_goog_i18n_NumberFormat.html",
		"namespace": false,
		"interface": false,
		"statics": ["NumberFormat.isEnforceAsciiDigits", "NumberFormat.setEnforceAsciiDigits"],
		"members": ["format", "getBaseFormatting", "getSignificantDigits", "isCurrencyCodeBeforeValue", "parse", "setBaseFormatting", "setMaximumFractionDigits", "setMinimumFractionDigits", "setShowTrailingZeros", "setSignificantDigits"]
	}, {
		"name": "goog.i18n.NumberFormat.CompactNumberUnit",
		"href": "class_goog_i18n_NumberFormat.html#NumberFormat.CompactNumberUnit"
	}, {
		"name": "goog.i18n.NumberFormat.CompactStyle",
		"href": "enum_goog_i18n_NumberFormat_CompactStyle.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.NumberFormat.CurrencyStyle",
		"href": "enum_goog_i18n_NumberFormat_CurrencyStyle.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.NumberFormat.Format",
		"href": "enum_goog_i18n_NumberFormat_Format.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.TimeZone",
		"href": "class_goog_i18n_TimeZone.html",
		"namespace": false,
		"interface": false,
		"statics": ["TimeZone.createTimeZone"],
		"members": ["getDaylightAdjustment", "getGMTString", "getGenericLocation", "getLongName", "getLongNameGMT", "getOffset", "getRFCTimeZoneString", "getShortName", "getTimeZoneData", "getTimeZoneId", "isDaylightTime"]
	}, {
		"name": "goog.i18n.TimeZone.NameType",
		"href": "enum_goog_i18n_TimeZone_NameType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.bidi",
		"href": "namespace_goog_i18n_bidi.html",
		"namespace": true,
		"interface": false,
		"statics": ["FORCE_RTL", "I18N_LEFT", "I18N_RIGHT", "IS_RTL", "LEFT", "RIGHT", "detectRtlDirectionality", "endsWithLtr", "endsWithRtl", "enforceLtrInHtml", "enforceLtrInText", "enforceRtlInHtml", "enforceRtlInText", "estimateDirection", "guardBracketInHtml", "guardBracketInText", "hasAnyLtr", "hasAnyRtl", "hasRtlChar", "isLtrChar", "isLtrExitText", "isLtrText", "isNeutralChar", "isNeutralText", "isRtlChar", "isRtlExitText", "isRtlLanguage", "isRtlText", "mirrorCSS", "normalizeHebrewQuote", "setElementDirAndAlign", "setElementDirByTextDirectionality", "startsWithLtr", "startsWithRtl", "toDir"]
	}, {
		"name": "goog.i18n.bidi.Dir",
		"href": "enum_goog_i18n_bidi_Dir.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.bidi.DirectionalString",
		"href": "interface_goog_i18n_bidi_DirectionalString.html",
		"namespace": true,
		"interface": true,
		"members": ["getDirection", "implementsGoogI18nBidiDirectionalString"]
	}, {
		"name": "goog.i18n.bidi.Format",
		"href": "enum_goog_i18n_bidi_Format.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.collation",
		"href": "namespace_goog_i18n_collation.html",
		"namespace": true,
		"interface": false,
		"statics": ["createComparator", "hasNativeComparator"]
	}, {
		"name": "goog.i18n.currency",
		"href": "namespace_goog_i18n_currency.html",
		"namespace": true,
		"interface": false,
		"statics": ["CurrencyInfo", "CurrencyInfoTier2", "addTier2Support", "adjustPrecision", "getGlobalCurrencyPattern", "getGlobalCurrencySign", "getLocalCurrencyPattern", "getLocalCurrencySign", "getPortableCurrencyPattern", "getPortableCurrencySign", "isPrefixSignPosition"]
	}, {
		"name": "goog.i18n.mime",
		"href": "namespace_goog_i18n_mime.html",
		"namespace": true,
		"interface": false,
		"statics": ["getHexCharArray"]
	}, {
		"name": "goog.i18n.ordinalRules",
		"href": "namespace_goog_i18n_ordinalRules.html",
		"namespace": true,
		"interface": false,
		"statics": ["select"]
	}, {
		"name": "goog.i18n.ordinalRules.Keyword",
		"href": "enum_goog_i18n_ordinalRules_Keyword.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.pluralRules",
		"href": "namespace_goog_i18n_pluralRules.html",
		"namespace": true,
		"interface": false,
		"statics": ["select"]
	}, {
		"name": "goog.i18n.pluralRules.Keyword",
		"href": "enum_goog_i18n_pluralRules_Keyword.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.uChar",
		"href": "namespace_goog_i18n_uChar.html",
		"namespace": true,
		"interface": false,
		"statics": ["buildSupplementaryCodePoint", "charCount", "fromCharCode", "getCodePointAround", "isLeadSurrogateCodePoint", "isSupplementaryCodePoint", "isTrailSurrogateCodePoint", "toCharCode", "toHexString"]
	}, {
		"name": "goog.i18n.uChar.LocalNameFetcher",
		"href": "class_goog_i18n_uChar_LocalNameFetcher.html",
		"namespace": false,
		"interface": false,
		"members": ["getName", "isNameAvailable", "prefetch"]
	}, {
		"name": "goog.i18n.uChar.NameFetcher",
		"href": "interface_goog_i18n_uChar_NameFetcher.html",
		"namespace": true,
		"interface": true,
		"members": ["getName", "isNameAvailable", "prefetch"]
	}, {
		"name": "goog.i18n.uChar.RemoteNameFetcher",
		"href": "class_goog_i18n_uChar_RemoteNameFetcher.html",
		"namespace": false,
		"interface": false,
		"members": ["getName", "isNameAvailable", "prefetch"]
	}, {
		"name": "goog.i18n.uChar.RemoteNameFetcher.RequestType_",
		"href": "enum_goog_i18n_uChar_RemoteNameFetcher_RequestType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.i18n.uCharNames",
		"href": "namespace_goog_i18n_uCharNames.html",
		"namespace": true,
		"interface": false,
		"statics": ["createCharData", "toName"]
	}, {
		"name": "goog.iter",
		"href": "namespace_goog_iter.html",
		"namespace": true,
		"interface": false,
		"statics": ["StopIteration", "accumulate", "chain", "chainFromIterable", "combinations", "combinationsWithReplacement", "compress", "consume", "count", "cycle", "dropWhile", "enumerate", "equals", "every", "filter", "filterFalse", "forEach", "groupBy", "join", "limit", "map", "nextOrValue", "permutations", "product", "range", "reduce", "repeat", "slice", "some", "starMap", "takeWhile", "tee", "toArray", "toIterator", "zip", "zipLongest"]
	}, {
		"name": "goog.iter.Iterable",
		"href": "namespace_goog_iter.html#iter.Iterable"
	}, {
		"name": "goog.iter.GroupByIterator_",
		"href": "class_goog_iter_GroupByIterator_.html",
		"namespace": false,
		"interface": false,
		"members": ["currentKey", "currentValue", "iterator", "keyFunc", "targetKey"]
	}, {
		"name": "goog.iter.Iterator",
		"href": "class_goog_iter_Iterator.html",
		"namespace": false,
		"interface": false,
		"members": ["__iterator__", "next"]
	}, {
		"name": "goog.json",
		"href": "namespace_goog_json.html",
		"namespace": true,
		"interface": false,
		"statics": ["USE_NATIVE_JSON", "isValid", "parse", "serialize", "unsafeParse"]
	}, {
		"name": "goog.json.Replacer",
		"href": "namespace_goog_json.html#json.Replacer"
	}, {
		"name": "goog.json.Reviver",
		"href": "namespace_goog_json.html#json.Reviver"
	}, {
		"name": "goog.json.EvalJsonProcessor",
		"href": "class_goog_json_EvalJsonProcessor.html",
		"namespace": false,
		"interface": false,
		"members": ["parse", "stringify"]
	}, {
		"name": "goog.json.HybridJsonProcessor",
		"href": "class_goog_json_HybridJsonProcessor.html",
		"namespace": false,
		"interface": false,
		"members": ["parse", "stringify"]
	}, {
		"name": "goog.json.NativeJsonProcessor",
		"href": "class_goog_json_NativeJsonProcessor.html",
		"namespace": false,
		"interface": false,
		"members": ["parse", "stringify"]
	}, {
		"name": "goog.json.Processor",
		"href": "interface_goog_json_Processor.html",
		"namespace": true,
		"interface": true
	}, {
		"name": "goog.json.Serializer",
		"href": "class_goog_json_Serializer.html",
		"namespace": false,
		"interface": false,
		"members": ["serialize", "serializeArray", "serializeInternal"]
	}, {
		"name": "goog.json.hybrid",
		"href": "namespace_goog_json_hybrid.html",
		"namespace": true,
		"interface": false,
		"statics": ["parse", "stringify", "unsafeParse"]
	}, {
		"name": "goog.labs.dom",
		"href": "namespace_goog_labs_dom.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.dom.PageVisibilityEvent",
		"href": "class_goog_labs_dom_PageVisibilityEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["hidden", "visibilityState"]
	}, {
		"name": "goog.labs.dom.PageVisibilityMonitor",
		"href": "class_goog_labs_dom_PageVisibilityMonitor.html",
		"namespace": false,
		"interface": false,
		"members": ["getVisibilityState", "isHidden", "isSupported"]
	}, {
		"name": "goog.labs.dom.PageVisibilityState",
		"href": "enum_goog_labs_dom_PageVisibilityState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.events",
		"href": "namespace_goog_labs_events.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.events.NonDisposableEventTarget",
		"href": "class_goog_labs_events_NonDisposableEventTarget.html",
		"namespace": false,
		"interface": false,
		"members": ["dispatchEvent", "fireListeners", "getListener", "getListeners", "getParentEventTarget", "hasListener", "listen", "listenOnce", "removeAllListeners", "setParentEventTarget", "unlisten", "unlistenByKey"]
	}, {
		"name": "goog.labs.events.touch",
		"href": "namespace_goog_labs_events_touch.html",
		"namespace": true,
		"interface": false,
		"statics": ["getTouchData"]
	}, {
		"name": "goog.labs.events.touch.TouchData",
		"href": "namespace_goog_labs_events_touch.html#touch.TouchData"
	}, {
		"name": "goog.labs.format.csv",
		"href": "namespace_goog_labs_format_csv.html",
		"namespace": true,
		"interface": false,
		"statics": ["ENABLE_VERBOSE_DEBUGGING", "parse"]
	}, {
		"name": "goog.labs.format.csv.Token",
		"href": "namespace_goog_labs_format_csv.html#csv.Token"
	}, {
		"name": "goog.labs.format.csv.ParseError",
		"href": "class_goog_labs_format_csv_ParseError.html",
		"namespace": false,
		"interface": false,
		"members": ["position"]
	}, {
		"name": "goog.labs.format.csv.Sentinels_",
		"href": "enum_goog_labs_format_csv_Sentinels_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.html",
		"href": "namespace_goog_labs_html.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.html.AttributeRewriter",
		"href": "namespace_goog_labs_html.html#html.AttributeRewriter"
	}, {
		"name": "goog.labs.html.AttributeValue",
		"href": "namespace_goog_labs_html.html#html.AttributeValue"
	}, {
		"name": "goog.labs.html.Sanitizer",
		"href": "class_goog_labs_html_Sanitizer.html",
		"namespace": false,
		"interface": false,
		"members": ["allowAttributes", "allowElements", "sanitize"]
	}, {
		"name": "goog.labs.html.scrubber",
		"href": "namespace_goog_labs_html_scrubber.html",
		"namespace": true,
		"interface": false,
		"statics": ["CC_BANG_", "CC_LT_", "CC_QMARK_", "CC_SLASH_", "balance", "scrub"]
	}, {
		"name": "goog.labs.html.scrubber.Group_",
		"href": "enum_goog_labs_html_scrubber_Group_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.html.scrubber.Scope_",
		"href": "enum_goog_labs_html_scrubber_Scope_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.i18n",
		"href": "namespace_goog_labs_i18n.html",
		"namespace": true,
		"interface": false,
		"statics": ["ListFormatSymbols"]
	}, {
		"name": "goog.labs.i18n.GenderInfo",
		"href": "class_goog_labs_i18n_GenderInfo.html",
		"namespace": false,
		"interface": false,
		"members": ["getListGender"]
	}, {
		"name": "goog.labs.i18n.GenderInfo.Gender",
		"href": "enum_goog_labs_i18n_GenderInfo_Gender.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.i18n.GenderInfo.ListGenderStyle_",
		"href": "enum_goog_labs_i18n_GenderInfo_ListGenderStyle_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.i18n.ListFormat",
		"href": "class_goog_labs_i18n_ListFormat.html",
		"namespace": false,
		"interface": false,
		"members": ["format"]
	}, {
		"name": "goog.labs.iterable",
		"href": "namespace_goog_labs_iterable.html",
		"namespace": true,
		"interface": false,
		"statics": ["forEach", "getIterator", "map"]
	}, {
		"name": "goog.labs.mock",
		"href": "namespace_goog_labs_mock.html",
		"namespace": true,
		"interface": false,
		"statics": ["getUid", "mock", "mockFunction", "spy", "verify", "when"]
	}, {
		"name": "goog.labs.mock.MethodBinding_",
		"href": "class_goog_labs_mock_MethodBinding_.html",
		"namespace": false,
		"interface": false,
		"members": ["getMethodName", "getStub", "matches", "toString"]
	}, {
		"name": "goog.labs.mock.MockFunctionManager_",
		"href": "class_goog_labs_mock_MockFunctionManager_.html",
		"namespace": false,
		"interface": false,
		"members": ["func_"]
	}, {
		"name": "goog.labs.mock.MockManager_",
		"href": "class_goog_labs_mock_MockManager_.html",
		"namespace": false,
		"interface": false,
		"members": ["$stubBinder", "addBinding", "executeStub", "getExecutor", "getMockedItem", "getNextBinding", "methodBindings", "mockedItem", "mockee", "verifyInvocation"]
	}, {
		"name": "goog.labs.mock.MockObjectManager_",
		"href": "class_goog_labs_mock_MockObjectManager_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.mock.MockSpyManager_",
		"href": "class_goog_labs_mock_MockSpyManager_.html",
		"namespace": false,
		"interface": false,
		"members": ["getNextBinding"]
	}, {
		"name": "goog.labs.mock.StubBinder_",
		"href": "class_goog_labs_mock_StubBinder_.html",
		"namespace": false,
		"interface": false,
		"members": ["then", "thenReturn"]
	}, {
		"name": "goog.labs.mock.VerificationError",
		"href": "class_goog_labs_mock_VerificationError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.image",
		"href": "namespace_goog_labs_net_image.html",
		"namespace": true,
		"interface": false,
		"statics": ["load"]
	}, {
		"name": "goog.labs.net.webChannel",
		"href": "namespace_goog_labs_net_webChannel.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.BaseTestChannel",
		"href": "class_goog_labs_net_webChannel_BaseTestChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "connect", "correctHostPrefix", "createDataUri", "createXhrIo", "getBackChannelUri", "getClientProtocol", "getConnectionState", "getForwardChannelUri", "getLastStatusCode", "isActive", "isClosed", "onRequestComplete", "onRequestData", "setExtraHeaders", "shouldUseSecondaryDomains", "testConnectionFailure", "testConnectionFinished"]
	}, {
		"name": "goog.labs.net.webChannel.BaseTestChannel.State_",
		"href": "enum_goog_labs_net_webChannel_BaseTestChannel_State_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.Channel",
		"href": "interface_goog_labs_net_webChannel_Channel.html",
		"namespace": true,
		"interface": true,
		"members": ["correctHostPrefix", "createDataUri", "createXhrIo", "getBackChannelUri", "getConnectionState", "getForwardChannelUri", "isActive", "isClosed", "onRequestComplete", "onRequestData", "shouldUseSecondaryDomains", "testConnectionFailure", "testConnectionFinished"]
	}, {
		"name": "goog.labs.net.webChannel.ChannelRequest",
		"href": "class_goog_labs_net_webChannel_ChannelRequest.html",
		"namespace": false,
		"interface": false,
		"statics": ["ChannelRequest.createChannelRequest", "ChannelRequest.errorStringFromCode", "ChannelRequest.supportsXhrStreaming"],
		"members": ["cancel", "getLastError", "getLastStatusCode", "getPostData", "getRequestId", "getRequestStartTime", "getSessionId", "getSuccess", "getXhr", "sendCloseRequest", "setExtraHeaders", "setReadyStateChangeThrottle", "setTimeout", "xmlHttpGet", "xmlHttpPost"]
	}, {
		"name": "goog.labs.net.webChannel.ChannelRequest.Error",
		"href": "enum_goog_labs_net_webChannel_ChannelRequest_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.ChannelRequest.Type_",
		"href": "enum_goog_labs_net_webChannel_ChannelRequest_Type_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.ConnectionState",
		"href": "class_goog_labs_net_webChannel_ConnectionState.html",
		"namespace": false,
		"interface": false,
		"members": ["bufferingProxyResult", "handshakeResult"]
	}, {
		"name": "goog.labs.net.webChannel.ForwardChannelRequestPool",
		"href": "class_goog_labs_net_webChannel_ForwardChannelRequestPool.html",
		"namespace": false,
		"interface": false,
		"members": ["addRequest", "applyClientProtocol", "cancel", "forceComplete", "getMaxSize", "getRequestCount", "hasPendingRequest", "hasRequest", "isFull", "removeRequest"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBase",
		"href": "class_goog_labs_net_webChannel_WebChannelBase.html",
		"namespace": false,
		"interface": false,
		"statics": ["WebChannelBase.BACK_CHANNEL_MAX_RETRIES", "WebChannelBase.FORWARD_CHANNEL_RETRY_TIMEOUT", "WebChannelBase.INACTIVE_CHANNEL_RETRY_FACTOR", "WebChannelBase.LogSaver", "WebChannelBase.OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF", "WebChannelBase.RTT_ESTIMATE"],
		"members": ["connect", "correctHostPrefix", "createDataUri", "createXhrIo", "disconnect", "getAllowChunkedMode", "getAllowHostPrefix", "getBackChannelMaxRetries", "getBackChannelUri", "getChannelDebug", "getConnectionState", "getExtraHeaders", "getForwardChannelMaxRetries", "getForwardChannelRequestPool", "getForwardChannelUri", "getHandler", "getLastArrayId", "getLastStatusCode", "getSessionId", "getState", "getWireCodec", "hasOutstandingRequests", "isActive", "isBuffered", "isClosed", "onRequestComplete", "onRequestData", "sendMap", "setAllowChunkedMode", "setAllowHostPrefix", "setChannelDebug", "setExtraHeaders", "setFailFast", "setForwardChannelMaxRetries", "setForwardChannelRequestTimeout", "setHandler", "setReadyStateChangeThrottle", "setRetryDelay", "setSupportsCrossDomainXhrs", "shouldUseSecondaryDomains", "testConnectionFailure", "testConnectionFinished"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBase.ChannelType_",
		"href": "enum_goog_labs_net_webChannel_WebChannelBase_ChannelType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBase.Error",
		"href": "enum_goog_labs_net_webChannel_WebChannelBase_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBase.Handler",
		"href": "class_goog_labs_net_webChannel_WebChannelBase_Handler.html",
		"namespace": false,
		"interface": false,
		"members": ["badMapError", "channelClosed", "channelError", "channelHandleArray", "channelHandleMultipleArrays", "channelOpened", "channelSuccess", "correctHostPrefix", "getAdditionalParams", "getNetworkTestImageUri", "isActive", "okToMakeRequest"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBase.State",
		"href": "enum_goog_labs_net_webChannel_WebChannelBase_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport.html",
		"namespace": false,
		"interface": false,
		"members": ["createWebChannel"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport.Channel",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport_Channel.html",
		"namespace": false,
		"interface": false,
		"members": ["close", "getRuntimeProperties", "open", "send"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport.Channel.ErrorEvent",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport_Channel_ErrorEvent.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport.Channel.Handler_",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport_Channel_Handler_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport.Channel.MessageEvent",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport_Channel_MessageEvent.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.WebChannelBaseTransport.ChannelProperties",
		"href": "class_goog_labs_net_webChannel_WebChannelBaseTransport_ChannelProperties.html",
		"namespace": false,
		"interface": false,
		"members": ["getConcurrentRequestLimit", "getLastStatusCode", "getNonAckedMessageCount", "isSpdyEnabled", "setServerFlowControl"]
	}, {
		"name": "goog.labs.net.webChannel.WebChannelDebug",
		"href": "class_goog_labs_net_webChannel_WebChannelDebug.html",
		"namespace": false,
		"interface": false,
		"members": ["browserOfflineResponse", "debug", "dumpException", "getLogger", "info", "severe", "timeoutResponse", "warning", "xmlHttpChannelRequest", "xmlHttpChannelResponseMetaData", "xmlHttpChannelResponseText"]
	}, {
		"name": "goog.labs.net.webChannel.Wire",
		"href": "interface_goog_labs_net_webChannel_Wire.html",
		"namespace": true,
		"interface": true,
		"statics": ["Wire.LATEST_CHANNEL_VERSION"]
	}, {
		"name": "goog.labs.net.webChannel.Wire.QueuedMap",
		"href": "class_goog_labs_net_webChannel_Wire_QueuedMap.html",
		"namespace": false,
		"interface": false,
		"members": ["context", "map", "mapId"]
	}, {
		"name": "goog.labs.net.webChannel.WireV8",
		"href": "class_goog_labs_net_webChannel_WireV8.html",
		"namespace": false,
		"interface": false,
		"members": ["decodeMessage", "encodeMessage", "encodeMessageQueue"]
	}, {
		"name": "goog.labs.net.webChannel.netUtils",
		"href": "namespace_goog_labs_net_webChannel_netUtils.html",
		"namespace": true,
		"interface": false,
		"statics": ["NETWORK_TIMEOUT", "testLoadImage", "testLoadImageWithRetries", "testNetwork"]
	}, {
		"name": "goog.labs.net.webChannel.requestStats",
		"href": "namespace_goog_labs_net_webChannel_requestStats.html",
		"namespace": true,
		"interface": false,
		"statics": ["getStatEventTarget", "notifyServerReachabilityEvent", "notifyStatEvent", "notifyTimingEvent", "onEndExecution", "onStartExecution", "setEndThreadExecutionHook", "setStartThreadExecutionHook", "setTimeout"]
	}, {
		"name": "goog.labs.net.webChannel.requestStats.Event",
		"href": "namespace_goog_labs_net_webChannel_requestStats_Event.html",
		"namespace": true,
		"interface": false,
		"statics": ["SERVER_REACHABILITY_EVENT", "STAT_EVENT", "TIMING_EVENT"]
	}, {
		"name": "goog.labs.net.webChannel.requestStats.ServerReachability",
		"href": "enum_goog_labs_net_webChannel_requestStats_ServerReachability.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.requestStats.ServerReachabilityEvent",
		"href": "class_goog_labs_net_webChannel_requestStats_ServerReachabilityEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["reachabilityType"]
	}, {
		"name": "goog.labs.net.webChannel.requestStats.Stat",
		"href": "enum_goog_labs_net_webChannel_requestStats_Stat.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.webChannel.requestStats.StatEvent",
		"href": "class_goog_labs_net_webChannel_requestStats_StatEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["stat"]
	}, {
		"name": "goog.labs.net.webChannel.requestStats.TimingEvent",
		"href": "class_goog_labs_net_webChannel_requestStats_TimingEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["retries", "rtt", "size"]
	}, {
		"name": "goog.labs.net.xhr",
		"href": "namespace_goog_labs_net_xhr.html",
		"namespace": true,
		"interface": false,
		"statics": ["CONTENT_TYPE_HEADER", "FORM_CONTENT_TYPE", "get", "getBytes", "getJson", "post", "postJson", "send"]
	}, {
		"name": "goog.labs.net.xhr.Options",
		"href": "namespace_goog_labs_net_xhr.html#xhr.Options"
	}, {
		"name": "goog.labs.net.xhr.PostData",
		"href": "namespace_goog_labs_net_xhr.html#xhr.PostData"
	}, {
		"name": "goog.labs.net.xhr.Error",
		"href": "class_goog_labs_net_xhr_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["url", "xhr"]
	}, {
		"name": "goog.labs.net.xhr.HttpError",
		"href": "class_goog_labs_net_xhr_HttpError.html",
		"namespace": false,
		"interface": false,
		"members": ["status"]
	}, {
		"name": "goog.labs.net.xhr.ResponseType",
		"href": "enum_goog_labs_net_xhr_ResponseType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.net.xhr.TimeoutError",
		"href": "class_goog_labs_net_xhr_TimeoutError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.object",
		"href": "namespace_goog_labs_object.html",
		"namespace": true,
		"interface": false,
		"statics": ["is"]
	}, {
		"name": "goog.labs.pubsub",
		"href": "namespace_goog_labs_pubsub.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.pubsub.BroadcastPubSub",
		"href": "class_goog_labs_pubsub_BroadcastPubSub.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "getCount", "publish", "subscribe", "subscribeOnce", "unsubscribe", "unsubscribeByKey"]
	}, {
		"name": "goog.labs.pubsub.BroadcastPubSub.Ie8Event_",
		"href": "class_goog_labs_pubsub_BroadcastPubSub.html#BroadcastPubSub.Ie8Event_"
	}, {
		"name": "goog.labs.storage",
		"href": "namespace_goog_labs_storage.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.storage.BoundedCollectableStorage",
		"href": "class_goog_labs_storage_BoundedCollectableStorage.html",
		"namespace": false,
		"interface": false,
		"members": ["collect", "collectOversize", "remove", "set"]
	}, {
		"name": "goog.labs.structs",
		"href": "namespace_goog_labs_structs.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.structs.Map",
		"href": "class_goog_labs_structs_Map.html",
		"namespace": false,
		"interface": false,
		"members": ["addAll", "clear", "clone", "containsKey", "containsValue", "get", "getCount", "getEntries", "getKeys", "getValues", "isEmpty", "remove", "set"]
	}, {
		"name": "goog.labs.structs.Map.BrowserFeature",
		"href": "enum_goog_labs_structs_Map_BrowserFeature.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.structs.Multimap",
		"href": "class_goog_labs_structs_Multimap.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "addAllFromMultimap", "addAllValues", "clear", "clone", "containsEntry", "containsKey", "containsValue", "get", "getCount", "getEntries", "getKeys", "getValues", "isEmpty", "remove", "removeAll", "replaceValues"]
	}, {
		"name": "goog.labs.style",
		"href": "namespace_goog_labs_style.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.style.PixelDensityMonitor",
		"href": "class_goog_labs_style_PixelDensityMonitor.html",
		"namespace": false,
		"interface": false,
		"members": ["getDensity", "start"]
	}, {
		"name": "goog.labs.style.PixelDensityMonitor.Density",
		"href": "enum_goog_labs_style_PixelDensityMonitor_Density.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.style.PixelDensityMonitor.EventType",
		"href": "enum_goog_labs_style_PixelDensityMonitor_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.testing",
		"href": "namespace_goog_labs_testing.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.labs.testing.AllOfMatcher",
		"href": "class_goog_labs_testing_AllOfMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.AnyOfMatcher",
		"href": "class_goog_labs_testing_AnyOfMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.AnythingMatcher",
		"href": "class_goog_labs_testing_AnythingMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.CloseToMatcher",
		"href": "class_goog_labs_testing_CloseToMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.ContainsStringMatcher",
		"href": "class_goog_labs_testing_ContainsStringMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.EndsWithMatcher",
		"href": "class_goog_labs_testing_EndsWithMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.Environment",
		"href": "class_goog_labs_testing_Environment.html",
		"namespace": false,
		"interface": false,
		"statics": ["Environment.getTestCaseIfActive"],
		"members": ["console", "mock", "mockClock", "mockControl", "setUp", "setUpPage", "tearDown", "tearDownPage", "withMockClock", "withMockControl"]
	}, {
		"name": "goog.labs.testing.EnvironmentTestCase_",
		"href": "class_goog_labs_testing_EnvironmentTestCase_.html",
		"namespace": false,
		"interface": false,
		"statics": ["EnvironmentTestCase_.getInstance"],
		"members": ["autoDiscoverLifecycle"]
	}, {
		"name": "goog.labs.testing.EqualToIgnoringWhitespaceMatcher",
		"href": "class_goog_labs_testing_EqualToIgnoringWhitespaceMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.EqualToMatcher",
		"href": "class_goog_labs_testing_EqualToMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.EqualsMatcher",
		"href": "class_goog_labs_testing_EqualsMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.GreaterThanEqualToMatcher",
		"href": "class_goog_labs_testing_GreaterThanEqualToMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.GreaterThanMatcher",
		"href": "class_goog_labs_testing_GreaterThanMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.HasEntriesMatcher",
		"href": "class_goog_labs_testing_HasEntriesMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.HasEntryMatcher",
		"href": "class_goog_labs_testing_HasEntryMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.HasKeyMatcher",
		"href": "class_goog_labs_testing_HasKeyMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.HasPropertyMatcher",
		"href": "class_goog_labs_testing_HasPropertyMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.HasValueMatcher",
		"href": "class_goog_labs_testing_HasValueMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.InstanceOfMatcher",
		"href": "class_goog_labs_testing_InstanceOfMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.IsNotMatcher",
		"href": "class_goog_labs_testing_IsNotMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.IsNullMatcher",
		"href": "class_goog_labs_testing_IsNullMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.IsNullOrUndefinedMatcher",
		"href": "class_goog_labs_testing_IsNullOrUndefinedMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.IsUndefinedMatcher",
		"href": "class_goog_labs_testing_IsUndefinedMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.LessThanEqualToMatcher",
		"href": "class_goog_labs_testing_LessThanEqualToMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.LessThanMatcher",
		"href": "class_goog_labs_testing_LessThanMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.Matcher",
		"href": "interface_goog_labs_testing_Matcher.html",
		"namespace": true,
		"interface": true,
		"statics": ["Matcher.makeMatcher"],
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.MatcherError",
		"href": "class_goog_labs_testing_MatcherError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.labs.testing.ObjectEqualsMatcher",
		"href": "class_goog_labs_testing_ObjectEqualsMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.RegexMatcher",
		"href": "class_goog_labs_testing_RegexMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.StartsWithMatcher",
		"href": "class_goog_labs_testing_StartsWithMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.testing.StringContainsInOrderMatcher",
		"href": "class_goog_labs_testing_StringContainsInOrderMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["describe", "matches"]
	}, {
		"name": "goog.labs.userAgent.browser",
		"href": "namespace_goog_labs_userAgent_browser.html",
		"namespace": true,
		"interface": false,
		"statics": ["getVersion", "isAndroidBrowser", "isChrome", "isCoast", "isEdge", "isFirefox", "isIE", "isIosWebview", "isOpera", "isSafari", "isSilk", "isVersionOrHigher"]
	}, {
		"name": "goog.labs.userAgent.device",
		"href": "namespace_goog_labs_userAgent_device.html",
		"namespace": true,
		"interface": false,
		"statics": ["isDesktop", "isMobile", "isTablet"]
	}, {
		"name": "goog.labs.userAgent.engine",
		"href": "namespace_goog_labs_userAgent_engine.html",
		"namespace": true,
		"interface": false,
		"statics": ["getVersion", "isEdge", "isGecko", "isPresto", "isTrident", "isVersionOrHigher", "isWebKit"]
	}, {
		"name": "goog.labs.userAgent.platform",
		"href": "namespace_goog_labs_userAgent_platform.html",
		"namespace": true,
		"interface": false,
		"statics": ["getVersion", "isAndroid", "isChromeOS", "isIos", "isIpad", "isIphone", "isIpod", "isLinux", "isMacintosh", "isVersionOrHigher", "isWindows"]
	}, {
		"name": "goog.labs.userAgent.testAgents",
		"href": "namespace_goog_labs_userAgent_testAgents.html",
		"namespace": true,
		"interface": false,
		"statics": ["ANDROID_BROWSER_221", "ANDROID_BROWSER_233", "ANDROID_BROWSER_235", "ANDROID_BROWSER_403", "ANDROID_BROWSER_403_ALT", "ANDROID_BROWSER_4_4", "ANDROID_WEB_VIEW_4_1_1", "ANDROID_WEB_VIEW_4_4", "CHROME_25", "CHROME_ANDROID", "CHROME_ANDROID_PHONE_4_4", "CHROME_ANDROID_TABLET", "CHROME_ANDROID_TABLET_4_4", "CHROME_IPHONE", "CHROME_LINUX", "CHROME_LINUX_APPVERVERSION", "CHROME_MAC", "CHROME_OS", "CHROME_OS_910", "COAST", "EDGE_12_0", "EDGE_12_9600", "FIREFOX_19", "FIREFOX_ANDROID_TABLET", "FIREFOX_LINUX", "FIREFOX_MAC", "FIREFOX_WINDOWS", "IE_10", "IE_10_COMPATIBILITY", "IE_10_MOBILE", "IE_11", "IE_11_COMPATIBILITY_MSIE_7", "IE_11_COMPATIBILITY_MSIE_9", "IE_6", "IE_7", "IE_8", "IE_8_COMPATIBILITY", "IE_9", "IE_9_COMPATIBILITY", "IPAD_4", "IPAD_5", "IPAD_6", "KINDLE_FIRE", "OPERA_10", "OPERA_15", "OPERA_LINUX", "OPERA_MAC", "SAFARI_6", "SAFARI_IPHONE_32", "SAFARI_IPHONE_421", "SAFARI_IPHONE_431", "SAFARI_IPHONE_6", "SAFARI_IPOD", "SAFARI_MAC", "SAFARI_WINDOWS", "WEBVIEW_IPAD", "WEBVIEW_IPHONE"]
	}, {
		"name": "goog.labs.userAgent.util",
		"href": "namespace_goog_labs_userAgent_util.html",
		"namespace": true,
		"interface": false,
		"statics": ["extractVersionTuples", "getUserAgent", "matchUserAgent", "matchUserAgentIgnoreCase", "setUserAgent"]
	}, {
		"name": "goog.locale",
		"href": "namespace_goog_locale.html",
		"namespace": true,
		"interface": false,
		"statics": ["activeLocale_", "countries", "genericFontNamesData", "getLanguageSubTag", "getLocale", "getLocalizedCountryName", "getLocalizedLanguageName", "getNativeCountryName", "getNativeLanguageName", "getRegionSubTag", "getResource", "getResourceWithFallback", "getScriptSubTag", "getTimeZoneAllLongNames", "getTimeZoneSelectedLongNames", "getTimeZoneSelectedShortNames", "getVariantSubTag", "isResourceRegistered", "nativeNameConstants", "registerLocaleNameConstants", "registerResource", "registerTimeZoneAllLongNames", "registerTimeZoneConstants", "registerTimeZoneSelectedIds", "registerTimeZoneSelectedLongNames", "registerTimeZoneSelectedShortNames", "scriptToLanguages", "setLocale"]
	}, {
		"name": "goog.locale.Resource",
		"href": "enum_goog_locale_Resource.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.locale.TimeZoneFingerprint",
		"href": "enum_goog_locale_TimeZoneFingerprint.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.locale.defaultLocaleNameConstants",
		"href": "namespace_goog_locale_defaultLocaleNameConstants.html",
		"namespace": true,
		"interface": false,
		"statics": ["COUNTRY", "LANGUAGE"]
	}, {
		"name": "goog.locale.genericFontNames",
		"href": "namespace_goog_locale_genericFontNames.html",
		"namespace": true,
		"interface": false,
		"statics": ["getList"]
	}, {
		"name": "goog.locale.timeZoneDetection",
		"href": "namespace_goog_locale_timeZoneDetection.html",
		"namespace": true,
		"interface": false,
		"statics": ["detectTimeZone", "getFingerprint", "getTimeZoneList"]
	}, {
		"name": "goog.log",
		"href": "namespace_goog_log.html",
		"namespace": true,
		"interface": false,
		"statics": ["ENABLED", "ROOT_LOGGER_NAME", "addHandler", "error", "fine", "getLogger", "info", "log", "removeHandler", "warning"]
	}, {
		"name": "goog.log.Level",
		"href": "class_goog_log_Level.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.log.LogRecord",
		"href": "class_goog_log_LogRecord.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.log.Logger",
		"href": "class_goog_log_Logger.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.math",
		"href": "namespace_goog_math.html",
		"namespace": true,
		"interface": false,
		"statics": ["angle", "angleDifference", "angleDx", "angleDy", "average", "clamp", "isFiniteNumber", "isInt", "isNegativeZero", "lerp", "log10Floor", "longestCommonSubsequence", "modulo", "nearlyEquals", "randomInt", "safeCeil", "safeFloor", "sampleVariance", "sign", "standardAngle", "standardAngleInRadians", "standardDeviation", "sum", "toDegrees", "toRadians", "uniformRandom"]
	}, {
		"name": "goog.math.AffineTransform",
		"href": "class_goog_math_AffineTransform.html",
		"namespace": false,
		"interface": false,
		"statics": ["AffineTransform.getRotateInstance", "AffineTransform.getScaleInstance", "AffineTransform.getShearInstance", "AffineTransform.getTranslateInstance"],
		"members": ["clone", "concatenate", "copyFrom", "createInverse", "equals", "getDeterminant", "getScaleX", "getScaleY", "getShearX", "getShearY", "getTranslateX", "getTranslateY", "isIdentity", "isInvertible", "m00_", "m01_", "m02_", "m10_", "m11_", "m12_", "preConcatenate", "preRotate", "preScale", "preShear", "preTranslate", "rotate", "scale", "setToRotation", "setToScale", "setToShear", "setToTranslation", "setTransform", "shear", "toString", "transform", "translate"]
	}, {
		"name": "goog.math.Bezier",
		"href": "class_goog_math_Bezier.html",
		"namespace": false,
		"interface": false,
		"statics": ["Bezier.KAPPA"],
		"members": ["clone", "equals", "flip", "getPoint", "getPointX", "getPointY", "solvePositionFromXValue", "solveYValueFromXValue", "subdivide", "subdivideLeft", "subdivideRight", "x0", "x1", "x2", "x3", "y0", "y1", "y2", "y3"]
	}, {
		"name": "goog.math.Box",
		"href": "class_goog_math_Box.html",
		"namespace": false,
		"interface": false,
		"statics": ["Box.boundingBox", "Box.contains", "Box.distance", "Box.equals", "Box.intersects", "Box.intersectsWithPadding", "Box.relativePositionX", "Box.relativePositionY"],
		"members": ["bottom", "ceil", "clone", "contains", "expand", "expandToInclude", "expandToIncludeCoordinate", "floor", "getHeight", "getWidth", "left", "right", "round", "scale", "toString", "top", "translate"]
	}, {
		"name": "goog.math.Coordinate",
		"href": "class_goog_math_Coordinate.html",
		"namespace": false,
		"interface": false,
		"statics": ["Coordinate.azimuth", "Coordinate.difference", "Coordinate.distance", "Coordinate.equals", "Coordinate.magnitude", "Coordinate.squaredDistance", "Coordinate.sum"],
		"members": ["ceil", "clone", "floor", "rotateDegrees", "rotateRadians", "round", "scale", "toString", "translate", "x", "y"]
	}, {
		"name": "goog.math.Coordinate3",
		"href": "class_goog_math_Coordinate3.html",
		"namespace": false,
		"interface": false,
		"statics": ["Coordinate3.difference", "Coordinate3.distance", "Coordinate3.equals", "Coordinate3.fromArray", "Coordinate3.squaredDistance"],
		"members": ["clone", "toArray", "toString", "x", "y", "z"]
	}, {
		"name": "goog.math.ExponentialBackoff",
		"href": "class_goog_math_ExponentialBackoff.html",
		"namespace": false,
		"interface": false,
		"members": ["backoff", "getBackoffCount", "getValue", "reset"]
	}, {
		"name": "goog.math.Integer",
		"href": "class_goog_math_Integer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Integer.ONE", "Integer.ZERO", "Integer.fromBits", "Integer.fromInt", "Integer.fromNumber", "Integer.fromString"],
		"members": ["add", "and", "compare", "divide", "equals", "getBits", "getBitsUnsigned", "getSign", "greaterThan", "greaterThanOrEqual", "isNegative", "isOdd", "isZero", "lessThan", "lessThanOrEqual", "modulo", "multiply", "negate", "not", "notEquals", "or", "shiftLeft", "shiftRight", "shorten", "subtract", "toInt", "toNumber", "toString", "xor"]
	}, {
		"name": "goog.math.Line",
		"href": "class_goog_math_Line.html",
		"namespace": false,
		"interface": false,
		"members": ["clone", "equals", "getClosestPoint", "getClosestSegmentPoint", "getInterpolatedPoint", "getSegmentLength", "getSegmentLengthSquared", "x0", "x1", "y0", "y1"]
	}, {
		"name": "goog.math.Long",
		"href": "class_goog_math_Long.html",
		"namespace": false,
		"interface": false,
		"statics": ["Long.fromBits", "Long.fromInt", "Long.fromNumber", "Long.fromString", "Long.getMaxValue", "Long.getMinValue", "Long.getNegOne", "Long.getOne", "Long.getTwoPwr24", "Long.getZero"],
		"members": ["add", "and", "compare", "div", "equals", "getHighBits", "getLowBits", "getLowBitsUnsigned", "getNumBitsAbs", "greaterThan", "greaterThanOrEqual", "isNegative", "isOdd", "isZero", "lessThan", "lessThanOrEqual", "modulo", "multiply", "negate", "not", "notEquals", "or", "shiftLeft", "shiftRight", "shiftRightUnsigned", "subtract", "toInt", "toNumber", "toString", "xor"]
	}, {
		"name": "goog.math.Matrix",
		"href": "class_goog_math_Matrix.html",
		"namespace": false,
		"interface": false,
		"statics": ["Matrix.createIdentityMatrix", "Matrix.forEach", "Matrix.isValidArray", "Matrix.map"],
		"members": ["add", "appendColumns", "appendRows", "equals", "getDeterminant", "getInverse", "getReducedRowEchelonForm", "getSize", "getTranspose", "getValueAt", "isSquare", "multiply", "setValueAt", "subtract", "toArray", "toString"]
	}, {
		"name": "goog.math.Path",
		"href": "class_goog_math_Path.html",
		"namespace": false,
		"interface": false,
		"statics": ["Path.createSimplifiedPath", "Path.getSegmentCount"],
		"members": ["appendPath", "arc", "arcTo", "arcToAsCurves", "clear", "clone", "close", "createTransformedPath", "curveTo", "curveToFromArray", "forEachSegment", "getCurrentPoint", "getSegmentArgs", "getSegmentCounts", "getSegmentTypes", "isEmpty", "isSimple", "lineTo", "lineToFromArray", "moveTo", "transform"]
	}, {
		"name": "goog.math.Path.Segment",
		"href": "enum_goog_math_Path_Segment.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.math.Range",
		"href": "class_goog_math_Range.html",
		"namespace": false,
		"interface": false,
		"statics": ["Range.boundingRange", "Range.contains", "Range.containsPoint", "Range.equals", "Range.fromPair", "Range.hasIntersection", "Range.intersection"],
		"members": ["clone", "end", "getLength", "includePoint", "includeRange", "start", "toString"]
	}, {
		"name": "goog.math.RangeSet",
		"href": "class_goog_math_RangeSet.html",
		"namespace": false,
		"interface": false,
		"statics": ["RangeSet.equals"],
		"members": ["__iterator__", "add", "clear", "clone", "contains", "containsValue", "coveredLength", "difference", "getBounds", "intersection", "inverse", "isEmpty", "remove", "slice", "toString", "union"]
	}, {
		"name": "goog.math.Rect",
		"href": "class_goog_math_Rect.html",
		"namespace": false,
		"interface": false,
		"statics": ["Rect.boundingRect", "Rect.createFromBox", "Rect.createFromPositionAndSize", "Rect.difference", "Rect.equals", "Rect.intersection", "Rect.intersects"],
		"members": ["boundingRect", "ceil", "clone", "contains", "difference", "distance", "floor", "getBottomRight", "getCenter", "getSize", "getTopLeft", "height", "intersection", "intersects", "left", "round", "scale", "squaredDistance", "toBox", "toString", "top", "translate", "width"]
	}, {
		"name": "goog.math.Size",
		"href": "class_goog_math_Size.html",
		"namespace": false,
		"interface": false,
		"statics": ["Size.equals"],
		"members": ["area", "aspectRatio", "ceil", "clone", "fitsInside", "floor", "getLongest", "getShortest", "height", "isEmpty", "perimeter", "round", "scale", "scaleToCover", "scaleToFit", "toString", "width"]
	}, {
		"name": "goog.math.Vec2",
		"href": "class_goog_math_Vec2.html",
		"namespace": false,
		"interface": false,
		"statics": ["Vec2.determinant", "Vec2.difference", "Vec2.distance", "Vec2.dot", "Vec2.equals", "Vec2.fromCoordinate", "Vec2.lerp", "Vec2.random", "Vec2.randomUnit", "Vec2.rotateAroundPoint", "Vec2.squaredDistance", "Vec2.sum"],
		"members": ["add", "equals", "invert", "magnitude", "normalize", "rotate", "squaredMagnitude", "subtract", "x", "y"]
	}, {
		"name": "goog.math.Vec3",
		"href": "class_goog_math_Vec3.html",
		"namespace": false,
		"interface": false,
		"statics": ["Vec3.cross", "Vec3.difference", "Vec3.distance", "Vec3.dot", "Vec3.equals", "Vec3.fromCoordinate3", "Vec3.lerp", "Vec3.random", "Vec3.randomUnit", "Vec3.squaredDistance", "Vec3.sum"],
		"members": ["add", "clone", "equals", "invert", "magnitude", "normalize", "scale", "squaredMagnitude", "subtract", "x", "y", "z"]
	}, {
		"name": "goog.math.interpolator",
		"href": "namespace_goog_math_interpolator.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.math.interpolator.Interpolator1",
		"href": "interface_goog_math_interpolator_Interpolator1.html",
		"namespace": true,
		"interface": true,
		"members": ["getInverse", "interpolate", "setData"]
	}, {
		"name": "goog.math.interpolator.Linear1",
		"href": "class_goog_math_interpolator_Linear1.html",
		"namespace": false,
		"interface": false,
		"members": ["getInverse", "interpolate", "setData"]
	}, {
		"name": "goog.math.interpolator.Pchip1",
		"href": "class_goog_math_interpolator_Pchip1.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.math.interpolator.Spline1",
		"href": "class_goog_math_interpolator_Spline1.html",
		"namespace": false,
		"interface": false,
		"members": ["computeDerivatives", "getInverse", "interpolate", "setData"]
	}, {
		"name": "goog.math.paths",
		"href": "namespace_goog_math_paths.html",
		"namespace": true,
		"interface": false,
		"statics": ["createArrow", "createRegularNGon"]
	}, {
		"name": "goog.math.tdma",
		"href": "namespace_goog_math_tdma.html",
		"namespace": true,
		"interface": false,
		"statics": ["solve"]
	}, {
		"name": "goog.memoize",
		"href": "namespace_goog_memoize.html",
		"namespace": true,
		"interface": false,
		"statics": ["ENABLE_MEMOIZE", "clearCache", "simpleSerializer"]
	}, {
		"name": "goog.messaging",
		"href": "namespace_goog_messaging.html",
		"namespace": true,
		"interface": false,
		"statics": ["pipe"]
	}, {
		"name": "goog.messaging.AbstractChannel",
		"href": "class_goog_messaging_AbstractChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "decodePayload", "deliver", "getService", "isConnected", "logger", "registerDefaultService", "registerService", "send"]
	}, {
		"name": "goog.messaging.BufferedChannel",
		"href": "class_goog_messaging_BufferedChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "isConnected", "isPeerReady", "registerDefaultService", "registerService", "send"]
	}, {
		"name": "goog.messaging.DeferredChannel",
		"href": "class_goog_messaging_DeferredChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["cancel", "connect", "deferred_", "isConnected", "registerDefaultService", "registerService", "send"]
	}, {
		"name": "goog.messaging.LoggerClient",
		"href": "class_goog_messaging_LoggerClient.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.messaging.LoggerServer",
		"href": "class_goog_messaging_LoggerServer.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.messaging.MessageChannel",
		"href": "interface_goog_messaging_MessageChannel.html",
		"namespace": true,
		"interface": true,
		"members": ["connect", "isConnected", "registerDefaultService", "registerService", "send"]
	}, {
		"name": "goog.messaging.MultiChannel",
		"href": "class_goog_messaging_MultiChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["createVirtualChannel"]
	}, {
		"name": "goog.messaging.MultiChannel.VirtualChannel",
		"href": "class_goog_messaging_MultiChannel_VirtualChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "isConnected", "registerDefaultService", "registerService", "send"]
	}, {
		"name": "goog.messaging.PortCaller",
		"href": "class_goog_messaging_PortCaller.html",
		"namespace": false,
		"interface": false,
		"members": ["dial"]
	}, {
		"name": "goog.messaging.PortChannel",
		"href": "class_goog_messaging_PortChannel.html",
		"namespace": false,
		"interface": false,
		"statics": ["PortChannel.FLAG", "PortChannel.forEmbeddedWindow", "PortChannel.forGlobalWindow"],
		"members": ["logger", "send"]
	}, {
		"name": "goog.messaging.PortNetwork",
		"href": "interface_goog_messaging_PortNetwork.html",
		"namespace": true,
		"interface": true,
		"statics": ["PortNetwork.GRANT_CONNECTION_SERVICE", "PortNetwork.REQUEST_CONNECTION_SERVICE"],
		"members": ["dial"]
	}, {
		"name": "goog.messaging.PortOperator",
		"href": "class_goog_messaging_PortOperator.html",
		"namespace": false,
		"interface": false,
		"members": ["addPort", "dial"]
	}, {
		"name": "goog.messaging.RespondingChannel",
		"href": "class_goog_messaging_RespondingChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["registerService", "send"]
	}, {
		"name": "goog.module",
		"href": "namespace_goog_module.html",
		"namespace": true,
		"interface": false,
		"statics": ["declareLegacyNamespace", "get"]
	}, {
		"name": "goog.module.AbstractModuleLoader",
		"href": "interface_goog_module_AbstractModuleLoader.html",
		"namespace": true,
		"interface": true,
		"members": ["loadModules", "prefetchModule"]
	}, {
		"name": "goog.module.BaseModule",
		"href": "class_goog_module_BaseModule.html",
		"namespace": false,
		"interface": false,
		"members": ["initialize"]
	}, {
		"name": "goog.module.Loader",
		"href": "class_goog_module_Loader.html",
		"namespace": false,
		"interface": false,
		"statics": ["Loader.LOAD_CALLBACK", "Loader.getInstance", "Loader.init", "Loader.loaderCall", "Loader.provide", "Loader.require"],
		"members": ["init", "provide", "require"]
	}, {
		"name": "goog.module.ModuleInfo",
		"href": "class_goog_module_ModuleInfo.html",
		"namespace": false,
		"interface": false,
		"members": ["getDependencies", "getId", "getModule", "getUris", "isLoaded", "onError", "onLoad", "registerCallback", "registerEarlyCallback", "registerErrback", "setModuleConstructor", "setUris"]
	}, {
		"name": "goog.module.ModuleLoadCallback",
		"href": "class_goog_module_ModuleLoadCallback.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "execute"]
	}, {
		"name": "goog.module.ModuleLoader",
		"href": "class_goog_module_ModuleLoader.html",
		"namespace": false,
		"interface": false,
		"statics": ["ModuleLoader.EventType", "ModuleLoader.supportsSourceUrlDebugger", "ModuleLoader.supportsSourceUrlStackTraces"],
		"members": ["getDebugMode", "loadModules", "logger", "prefetchModule", "setDebugMode", "setSourceUrlInjection"]
	}, {
		"name": "goog.module.ModuleLoader.EvaluateCodeEvent",
		"href": "class_goog_module_ModuleLoader_EvaluateCodeEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["moduleIds"]
	}, {
		"name": "goog.module.ModuleLoader.LoadStatus",
		"href": "class_goog_module_ModuleLoader_LoadStatus.html",
		"namespace": false,
		"interface": false,
		"members": ["errorFn", "loadRequested", "requestUris", "responseTexts", "successFn"]
	}, {
		"name": "goog.module.ModuleLoader.RequestErrorEvent",
		"href": "class_goog_module_ModuleLoader_RequestErrorEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["error", "moduleIds"]
	}, {
		"name": "goog.module.ModuleLoader.RequestSuccessEvent",
		"href": "class_goog_module_ModuleLoader_RequestSuccessEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["moduleIds"]
	}, {
		"name": "goog.module.ModuleManager",
		"href": "class_goog_module_ModuleManager.html",
		"namespace": false,
		"interface": false,
		"statics": ["ModuleManager.CORRUPT_RESPONSE_STATUS_CODE", "ModuleManager.getInstance"],
		"members": ["afterLoadModuleCode", "beforeLoadModuleCode", "execOnLoad", "getLoader", "getModuleContext", "getModuleInfo", "isActive", "isModuleLoading", "isUserActive", "load", "loadMultiple", "prefetchModule", "preloadModule", "registerCallback", "registerInitializationCallback", "registerLateInitializationCallback", "setAllModuleInfo", "setAllModuleInfoString", "setBatchModeEnabled", "setConcurrentLoadingEnabled", "setLoaded", "setLoader", "setModuleConstructor", "setModuleContext", "setModuleUris"]
	}, {
		"name": "goog.module.ModuleManager.CallbackType",
		"href": "enum_goog_module_ModuleManager_CallbackType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.module.ModuleManager.FailureType",
		"href": "enum_goog_module_ModuleManager_FailureType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net",
		"href": "namespace_goog_net.html",
		"namespace": true,
		"interface": false,
		"statics": ["cookies"]
	}, {
		"name": "goog.net.BrowserChannel",
		"href": "class_goog_net_BrowserChannel.html",
		"namespace": false,
		"interface": false,
		"statics": ["BrowserChannel.BACK_CHANNEL_MAX_RETRIES", "BrowserChannel.FORWARD_CHANNEL_RETRY_TIMEOUT", "BrowserChannel.INACTIVE_CHANNEL_RETRY_FACTOR", "BrowserChannel.LATEST_CHANNEL_VERSION", "BrowserChannel.MAGIC_RESPONSE_COOKIE", "BrowserChannel.OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF", "BrowserChannel.RTT_ESTIMATE", "BrowserChannel.createChannelRequest", "BrowserChannel.getStatEventTarget", "BrowserChannel.notifyStatEvent", "BrowserChannel.notifyTimingEvent", "BrowserChannel.onEndExecution", "BrowserChannel.onStartExecution", "BrowserChannel.setEndThreadExecutionHook", "BrowserChannel.setStartThreadExecutionHook", "BrowserChannel.setTimeout"],
		"members": ["allowChunkedMode_", "allowHostPrefix_", "connect", "correctHostPrefix", "createDataUri", "createXhrIo", "disconnect", "getAllowChunkedMode", "getAllowHostPrefix", "getBackChannelMaxRetries", "getBackChannelUri", "getChannelDebug", "getExtraHeaders", "getFirstTestResults", "getForwardChannelMaxRetries", "getForwardChannelUri", "getHandler", "getLastArrayId", "getLastStatusCode", "getSecondTestResults", "getSessionId", "getState", "hasOutstandingRequests", "isActive", "isBuffered", "isClosed", "notifyServerReachabilityEvent", "onRequestComplete", "onRequestData", "sendMap", "setAllowChunkedMode", "setAllowHostPrefix", "setChannelDebug", "setExtraHeaders", "setFailFast", "setForwardChannelMaxRetries", "setForwardChannelRequestTimeout", "setHandler", "setParser", "setReadyStateChangeThrottle", "setRetryDelay", "setSupportsCrossDomainXhrs", "shouldUseSecondaryDomains", "testConnectionBlocked", "testConnectionFailure", "testConnectionFinished"]
	}, {
		"name": "goog.net.BrowserChannel.ChannelType_",
		"href": "enum_goog_net_BrowserChannel_ChannelType_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BrowserChannel.Error",
		"href": "enum_goog_net_BrowserChannel_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BrowserChannel.Event",
		"href": "namespace_goog_net_BrowserChannel_Event.html",
		"namespace": true,
		"interface": false,
		"statics": ["SERVER_REACHABILITY_EVENT", "STAT_EVENT", "TIMING_EVENT"]
	}, {
		"name": "goog.net.BrowserChannel.Handler",
		"href": "class_goog_net_BrowserChannel_Handler.html",
		"namespace": false,
		"interface": false,
		"members": ["badMapError", "channelClosed", "channelError", "channelHandleArray", "channelHandleMultipleArrays", "channelOpened", "channelSuccess", "correctHostPrefix", "getAdditionalParams", "getNetworkTestImageUri", "isActive", "okToMakeRequest"]
	}, {
		"name": "goog.net.BrowserChannel.LogSaver",
		"href": "namespace_goog_net_BrowserChannel_LogSaver.html",
		"namespace": true,
		"interface": false,
		"statics": ["addLogRecord", "clearBuffer", "getBuffer", "isEnabled", "setEnabled"]
	}, {
		"name": "goog.net.BrowserChannel.QueuedMap",
		"href": "class_goog_net_BrowserChannel_QueuedMap.html",
		"namespace": false,
		"interface": false,
		"members": ["context", "map", "mapId"]
	}, {
		"name": "goog.net.BrowserChannel.ServerReachability",
		"href": "enum_goog_net_BrowserChannel_ServerReachability.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BrowserChannel.ServerReachabilityEvent",
		"href": "class_goog_net_BrowserChannel_ServerReachabilityEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["reachabilityType"]
	}, {
		"name": "goog.net.BrowserChannel.Stat",
		"href": "enum_goog_net_BrowserChannel_Stat.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BrowserChannel.StatEvent",
		"href": "class_goog_net_BrowserChannel_StatEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["stat"]
	}, {
		"name": "goog.net.BrowserChannel.State",
		"href": "enum_goog_net_BrowserChannel_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BrowserChannel.TimingEvent",
		"href": "class_goog_net_BrowserChannel_TimingEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["retries", "rtt", "size"]
	}, {
		"name": "goog.net.BrowserTestChannel",
		"href": "class_goog_net_BrowserTestChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "connect", "createXhrIo", "getLastStatusCode", "isActive", "isClosed", "notifyServerReachabilityEvent", "onRequestComplete", "onRequestData", "setExtraHeaders", "setParser", "shouldUseSecondaryDomains"]
	}, {
		"name": "goog.net.BrowserTestChannel.State_",
		"href": "enum_goog_net_BrowserTestChannel_State_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.BulkLoader",
		"href": "class_goog_net_BulkLoader.html",
		"namespace": false,
		"interface": false,
		"members": ["getRequestUris", "getResponseTexts", "load"]
	}, {
		"name": "goog.net.BulkLoaderHelper",
		"href": "class_goog_net_BulkLoaderHelper.html",
		"namespace": false,
		"interface": false,
		"members": ["getResponseTexts", "getUri", "getUris", "isLoadComplete", "setResponseText"]
	}, {
		"name": "goog.net.ChannelDebug",
		"href": "class_goog_net_ChannelDebug.html",
		"namespace": false,
		"interface": false,
		"members": ["browserOfflineResponse", "debug", "dumpException", "getLogger", "info", "severe", "timeoutResponse", "tridentChannelRequest", "tridentChannelResponseDone", "tridentChannelResponseText", "warning", "xmlHttpChannelRequest", "xmlHttpChannelResponseMetaData", "xmlHttpChannelResponseText"]
	}, {
		"name": "goog.net.ChannelRequest",
		"href": "class_goog_net_ChannelRequest.html",
		"namespace": false,
		"interface": false,
		"statics": ["ChannelRequest.POLLING_INTERVAL_MS", "ChannelRequest.TIMEOUT_MS", "ChannelRequest.errorStringFromCode", "ChannelRequest.supportsXhrStreaming"],
		"members": ["cancel", "getLastError", "getLastStatusCode", "getPostData", "getRequestId", "getRequestStartTime", "getSessionId", "getSuccess", "sendUsingImgTag", "setExtraHeaders", "setReadyStateChangeThrottle", "setTimeout", "tridentGet", "xmlHttpGet", "xmlHttpPost"]
	}, {
		"name": "goog.net.ChannelRequest.Error",
		"href": "enum_goog_net_ChannelRequest_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.ChannelRequest.Type_",
		"href": "enum_goog_net_ChannelRequest_Type_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.Cookies",
		"href": "class_goog_net_Cookies.html",
		"namespace": false,
		"interface": false,
		"statics": ["Cookies.MAX_COOKIE_LENGTH"],
		"members": ["clear", "containsKey", "containsValue", "get", "getCount", "getKeys", "getValues", "isEmpty", "isEnabled", "isValidName", "isValidValue", "remove", "set"]
	}, {
		"name": "goog.net.CorsXmlHttpFactory",
		"href": "class_goog_net_CorsXmlHttpFactory.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.CrossDomainRpc",
		"href": "class_goog_net_CrossDomainRpc.html",
		"namespace": false,
		"interface": false,
		"statics": ["CrossDomainRpc.HEADER", "CrossDomainRpc.PARAM", "CrossDomainRpc.PARAM_ECHO", "CrossDomainRpc.PARAM_ECHO_DUMMY_URI", "CrossDomainRpc.PARAM_ECHO_REQUEST_ID", "CrossDomainRpc.debugMode_", "CrossDomainRpc.dummyResourceUri_", "CrossDomainRpc.send", "CrossDomainRpc.sendResponse", "CrossDomainRpc.setDebugMode", "CrossDomainRpc.setDummyResourceUri", "CrossDomainRpc.setUseFallBackDummyResource"],
		"members": ["getResponseHeader", "getResponseJson", "isSuccess", "reset", "responseHeaders", "responseText", "sendRequest", "status", "timeWaitedAfterResponseReady_"]
	}, {
		"name": "goog.net.DefaultXmlHttpFactory",
		"href": "class_goog_net_DefaultXmlHttpFactory.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.ErrorCode",
		"href": "enum_goog_net_ErrorCode.html",
		"namespace": false,
		"interface": false,
		"statics": ["ErrorCode.getDebugMessage"]
	}, {
		"name": "goog.net.EventType",
		"href": "enum_goog_net_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.FetchXmlHttp",
		"href": "class_goog_net_FetchXmlHttp.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getAllResponseHeaders", "getResponseHeader", "onreadystatechange", "open", "readyState", "responseText", "responseXML", "send", "setCacheMode", "setCredentialsMode", "setRequestHeader", "status", "statusText"]
	}, {
		"name": "goog.net.FetchXmlHttp.RequestState",
		"href": "enum_goog_net_FetchXmlHttp_RequestState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.FetchXmlHttpFactory",
		"href": "class_goog_net_FetchXmlHttpFactory.html",
		"namespace": false,
		"interface": false,
		"members": ["setCacheMode", "setCredentialsMode"]
	}, {
		"name": "goog.net.FileDownloader",
		"href": "class_goog_net_FileDownloader.html",
		"namespace": false,
		"interface": false,
		"members": ["download", "getDownloadedBlob", "getLocalUrl", "isDownloaded", "isDownloading", "remove", "setBlob", "waitForDownload"]
	}, {
		"name": "goog.net.FileDownloader.Download_",
		"href": "class_goog_net_FileDownloader_Download_.html",
		"namespace": false,
		"interface": false,
		"members": ["blob", "cancelled", "deferred", "file", "name", "url", "writer", "xhr"]
	}, {
		"name": "goog.net.FileDownloader.Error",
		"href": "class_goog_net_FileDownloader_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["fileError", "url", "xhrErrorCode", "xhrStatus"]
	}, {
		"name": "goog.net.HttpStatus",
		"href": "enum_goog_net_HttpStatus.html",
		"namespace": false,
		"interface": false,
		"statics": ["HttpStatus.isSuccess"]
	}, {
		"name": "goog.net.IeCorsXhrAdapter",
		"href": "class_goog_net_IeCorsXhrAdapter.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getAllResponseHeaders", "getResponseHeader", "onreadystatechange", "open", "readyState", "responseText", "responseXML", "send", "setRequestHeader", "status", "statusText"]
	}, {
		"name": "goog.net.IframeIo",
		"href": "class_goog_net_IframeIo.html",
		"namespace": false,
		"interface": false,
		"statics": ["IframeIo.FRAME_NAME_PREFIX", "IframeIo.IFRAME_DISPOSE_DELAY_MS", "IframeIo.INNER_FRAME_SUFFIX", "IframeIo.getIframeByName", "IframeIo.getInstanceByName", "IframeIo.handleIncrementalData", "IframeIo.send"],
		"members": ["abort", "getErrorChecker", "getLastCustomError", "getLastError", "getLastErrorCode", "getLastUri", "getRequestIframe", "getResponseHtml", "getResponseJson", "getResponseText", "getResponseXml", "isActive", "isComplete", "isIgnoringResponse", "isSuccess", "send", "sendFromForm", "setErrorChecker", "setIgnoreResponse"]
	}, {
		"name": "goog.net.IframeIo.IncrementalDataEvent",
		"href": "class_goog_net_IframeIo_IncrementalDataEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["data"]
	}, {
		"name": "goog.net.IframeLoadMonitor",
		"href": "class_goog_net_IframeLoadMonitor.html",
		"namespace": false,
		"interface": false,
		"statics": ["IframeLoadMonitor.LOAD_EVENT"],
		"members": ["getIframe", "intervalId_", "isLoaded"]
	}, {
		"name": "goog.net.ImageLoader",
		"href": "class_goog_net_ImageLoader.html",
		"namespace": false,
		"interface": false,
		"members": ["addImage", "removeImage", "start"]
	}, {
		"name": "goog.net.ImageLoader.ImageRequest_",
		"href": "class_goog_net_ImageLoader.html#ImageLoader.ImageRequest_"
	}, {
		"name": "goog.net.ImageLoader.CorsRequestType",
		"href": "enum_goog_net_ImageLoader_CorsRequestType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.IpAddress",
		"href": "class_goog_net_IpAddress.html",
		"namespace": false,
		"interface": false,
		"statics": ["IpAddress.fromString", "IpAddress.fromUriString"],
		"members": ["equals", "getVersion", "toInteger", "toString", "toUriString"]
	}, {
		"name": "goog.net.Ipv4Address",
		"href": "class_goog_net_Ipv4Address.html",
		"namespace": false,
		"interface": false,
		"statics": ["Ipv4Address.MAX_NETMASK_LENGTH"]
	}, {
		"name": "goog.net.Ipv6Address",
		"href": "class_goog_net_Ipv6Address.html",
		"namespace": false,
		"interface": false,
		"statics": ["Ipv6Address.MAX_NETMASK_LENGTH"],
		"members": ["getMappedIpv4Address", "isMappedIpv4Address"]
	}, {
		"name": "goog.net.Jsonp",
		"href": "class_goog_net_Jsonp.html",
		"namespace": false,
		"interface": false,
		"statics": ["Jsonp.CALLBACKS"],
		"members": ["cancel", "getRequestTimeout", "send", "setRequestTimeout"]
	}, {
		"name": "goog.net.MockIFrameIo",
		"href": "class_goog_net_MockIFrameIo.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getErrorChecker", "getLastCustomError", "getLastError", "getLastErrorCode", "getLastUri", "getResponseJson", "getResponseText", "isActive", "isComplete", "isSuccess", "send", "sendFromForm", "setErrorChecker", "simulateDone", "simulateIncrementalData", "simulateReady"]
	}, {
		"name": "goog.net.MultiIframeLoadMonitor",
		"href": "class_goog_net_MultiIframeLoadMonitor.html",
		"namespace": false,
		"interface": false,
		"members": ["handleEvent", "stopMonitoring"]
	}, {
		"name": "goog.net.NetworkStatusMonitor",
		"href": "interface_goog_net_NetworkStatusMonitor.html",
		"namespace": true,
		"interface": true,
		"members": ["isOnline"]
	}, {
		"name": "goog.net.NetworkStatusMonitor.EventType",
		"href": "enum_goog_net_NetworkStatusMonitor_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.NetworkTester",
		"href": "class_goog_net_NetworkTester.html",
		"namespace": false,
		"interface": false,
		"statics": ["NetworkTester.DEFAULT_TIMEOUT_MS"],
		"members": ["getAttemptCount", "getNumRetries", "getPauseBetweenRetries", "getTimeout", "getUri", "isRunning", "onResult", "setNumRetries", "setPauseBetweenRetries", "setTimeout", "setUri", "start", "stop"]
	}, {
		"name": "goog.net.WebChannel",
		"href": "interface_goog_net_WebChannel.html",
		"namespace": true,
		"interface": true,
		"statics": ["WebChannel.X_CLIENT_PROTOCOL", "WebChannel.X_CLIENT_PROTOCOL_WEB_CHANNEL"],
		"members": ["close", "getRuntimeProperties", "open", "send"]
	}, {
		"name": "goog.net.WebChannel.MessageData",
		"href": "interface_goog_net_WebChannel.html#WebChannel.MessageData"
	}, {
		"name": "goog.net.WebChannel.Options",
		"href": "interface_goog_net_WebChannel.html#WebChannel.Options"
	}, {
		"name": "goog.net.WebChannel.ErrorEvent",
		"href": "class_goog_net_WebChannel_ErrorEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["status"]
	}, {
		"name": "goog.net.WebChannel.ErrorStatus",
		"href": "enum_goog_net_WebChannel_ErrorStatus.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.WebChannel.EventType",
		"href": "enum_goog_net_WebChannel_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.WebChannel.MessageEvent",
		"href": "class_goog_net_WebChannel_MessageEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["data"]
	}, {
		"name": "goog.net.WebChannel.RuntimeProperties",
		"href": "interface_goog_net_WebChannel_RuntimeProperties.html",
		"namespace": true,
		"interface": true,
		"members": ["getConcurrentRequestLimit", "getLastStatusCode", "getNonAckedMessageCount", "isSpdyEnabled", "setServerFlowControl"]
	}, {
		"name": "goog.net.WebChannelTransport",
		"href": "interface_goog_net_WebChannelTransport.html",
		"namespace": true,
		"interface": true,
		"members": ["createWebChannel"]
	}, {
		"name": "goog.net.WebSocket",
		"href": "class_goog_net_WebSocket.html",
		"namespace": false,
		"interface": false,
		"statics": ["WebSocket.protectEntryPoints"],
		"members": ["close", "getBufferedAmount", "isOpen", "open", "send"]
	}, {
		"name": "goog.net.WebSocket.ErrorEvent",
		"href": "class_goog_net_WebSocket_ErrorEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["data"]
	}, {
		"name": "goog.net.WebSocket.EventType",
		"href": "enum_goog_net_WebSocket_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.WebSocket.MessageEvent",
		"href": "class_goog_net_WebSocket_MessageEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["message"]
	}, {
		"name": "goog.net.WebSocket.ReadyState_",
		"href": "enum_goog_net_WebSocket_ReadyState_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.WrapperXmlHttpFactory",
		"href": "class_goog_net_WrapperXmlHttpFactory.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.XhrIo",
		"href": "class_goog_net_XhrIo.html",
		"namespace": false,
		"interface": false,
		"statics": ["XhrIo.CONTENT_TYPE_HEADER", "XhrIo.FORM_CONTENT_TYPE", "XhrIo.HTTP_SCHEME_PATTERN", "XhrIo.METHODS_WITH_FORM_DATA", "XhrIo.cleanup", "XhrIo.protectEntryPoints", "XhrIo.send"],
		"members": ["abort", "createXhr", "disposeInternal", "getAllResponseHeaders", "getLastError", "getLastErrorCode", "getLastUri", "getProgressEventsEnabled", "getReadyState", "getResponse", "getResponseBody", "getResponseHeader", "getResponseHeaders", "getResponseJson", "getResponseText", "getResponseType", "getResponseXml", "getStatus", "getStatusText", "getTimeoutInterval", "getWithCredentials", "headers", "isActive", "isComplete", "isSuccess", "send", "setProgressEventsEnabled", "setResponseType", "setTimeoutInterval", "setWithCredentials"]
	}, {
		"name": "goog.net.XhrIo.ResponseType",
		"href": "enum_goog_net_XhrIo_ResponseType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.XhrIoPool",
		"href": "class_goog_net_XhrIoPool.html",
		"namespace": false,
		"interface": false,
		"members": ["createObject", "objectCanBeReused"]
	}, {
		"name": "goog.net.XhrLike",
		"href": "interface_goog_net_XhrLike.html",
		"namespace": true,
		"interface": true,
		"members": ["abort", "getAllResponseHeaders", "getResponseHeader", "onreadystatechange", "open", "readyState", "responseText", "responseXML", "send", "setRequestHeader", "status", "statusText"]
	}, {
		"name": "goog.net.XhrLike.OrNative",
		"href": "interface_goog_net_XhrLike.html#XhrLike.OrNative"
	}, {
		"name": "goog.net.XhrManager",
		"href": "class_goog_net_XhrManager.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getOutstandingCount", "getOutstandingRequestIds", "send", "setTimeoutInterval"]
	}, {
		"name": "goog.net.XhrManager.Event",
		"href": "class_goog_net_XhrManager_Event.html",
		"namespace": false,
		"interface": false,
		"members": ["id", "xhrIo"]
	}, {
		"name": "goog.net.XhrManager.Request",
		"href": "class_goog_net_XhrManager_Request.html",
		"namespace": false,
		"interface": false,
		"members": ["getAborted", "getAttemptCount", "getCompleteCallback", "getCompleted", "getContent", "getHeaders", "getMaxRetries", "getMethod", "getResponseType", "getUrl", "getXhrEventCallback", "hasReachedMaxRetries", "increaseAttemptCount", "setAborted", "setCompleted", "xhrIo"]
	}, {
		"name": "goog.net.XmlHttp",
		"href": "namespace_goog_net_XmlHttp.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_NATIVE_XHR", "getOptions", "setFactory", "setGlobalFactory"]
	}, {
		"name": "goog.net.XmlHttp.OptionType",
		"href": "enum_goog_net_XmlHttp_OptionType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.XmlHttp.ReadyState",
		"href": "enum_goog_net_XmlHttp_ReadyState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.XmlHttpDefines",
		"href": "namespace_goog_net_XmlHttpDefines.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_NATIVE_XHR"]
	}, {
		"name": "goog.net.XmlHttpFactory",
		"href": "class_goog_net_XmlHttpFactory.html",
		"namespace": false,
		"interface": false,
		"members": ["createInstance", "getOptions", "internalGetOptions"]
	}, {
		"name": "goog.net.jsloader",
		"href": "namespace_goog_net_jsloader.html",
		"namespace": true,
		"interface": false,
		"statics": ["DEFAULT_TIMEOUT", "load", "loadAndVerify", "loadMany"]
	}, {
		"name": "goog.net.jsloader.Options",
		"href": "namespace_goog_net_jsloader.html#jsloader.Options"
	}, {
		"name": "goog.net.jsloader.Error",
		"href": "class_goog_net_jsloader_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["code"]
	}, {
		"name": "goog.net.jsloader.ErrorCode",
		"href": "enum_goog_net_jsloader_ErrorCode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.tmpnetwork",
		"href": "namespace_goog_net_tmpnetwork.html",
		"namespace": true,
		"interface": false,
		"statics": ["GOOGLECOM_TIMEOUT", "testGoogleCom", "testLoadImage", "testLoadImageWithRetries"]
	}, {
		"name": "goog.net.xpc",
		"href": "namespace_goog_net_xpc.html",
		"namespace": true,
		"interface": false,
		"statics": ["SETUP", "SETUP_ACK_", "SETUP_ACK_NTPV2", "SETUP_NTPV2", "TRANSPORT_SERVICE_", "TransportNames", "UriCfgFields", "channels", "getRandomString", "logger"]
	}, {
		"name": "goog.net.xpc.CfgFields",
		"href": "namespace_goog_net_xpc_CfgFields.html",
		"namespace": true,
		"interface": false,
		"statics": ["AUTH_TOKEN", "CHANNEL_NAME", "DIRECT_TRANSPORT_SYNC_MODE", "IFRAME_ID", "LOCAL_POLL_URI", "LOCAL_RELAY_URI", "NATIVE_TRANSPORT_PROTOCOL_VERSION", "ONE_SIDED_HANDSHAKE", "PEER_HOSTNAME", "PEER_POLL_URI", "PEER_RELAY_URI", "PEER_URI", "REMOTE_AUTH_TOKEN", "ROLE", "TRANSPORT"]
	}, {
		"name": "goog.net.xpc.ChannelStates",
		"href": "enum_goog_net_xpc_ChannelStates.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.xpc.CrossPageChannel",
		"href": "class_goog_net_xpc_CrossPageChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["close", "connect", "createPeerIframe", "getConfig", "getIframeElement", "getPeerConfiguration", "getPeerUri", "getPeerWindowObject", "getRole", "getTransportName", "getTransportType", "isPeerAvailable", "name", "notifyConnected", "notifyTransportError", "setPeerWindowObject", "updateChannelNameAndCatalog", "xpcDeliver"]
	}, {
		"name": "goog.net.xpc.CrossPageChannelRole",
		"href": "enum_goog_net_xpc_CrossPageChannelRole.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.net.xpc.DirectTransport",
		"href": "class_goog_net_xpc_DirectTransport.html",
		"namespace": false,
		"interface": false,
		"statics": ["DirectTransport.isSupported"],
		"members": ["send", "transportServiceHandler", "transportType"]
	}, {
		"name": "goog.net.xpc.DirectTransport.Message_",
		"href": "class_goog_net_xpc_DirectTransport_Message_.html",
		"namespace": false,
		"interface": false,
		"statics": ["Message_.fromLiteral"],
		"members": ["channelName", "payload", "service", "toLiteral"]
	}, {
		"name": "goog.net.xpc.FrameElementMethodTransport",
		"href": "class_goog_net_xpc_FrameElementMethodTransport.html",
		"namespace": false,
		"interface": false,
		"members": ["attemptSetupCb_", "connect", "iframeElm_", "outgoing_", "send", "transportServiceHandler", "transportType"]
	}, {
		"name": "goog.net.xpc.IframePollingTransport",
		"href": "class_goog_net_xpc_IframePollingTransport.html",
		"namespace": false,
		"interface": false,
		"statics": ["IframePollingTransport.IFRAME_PREFIX", "IframePollingTransport.lastActivity_", "IframePollingTransport.rcvTimer_"],
		"members": ["ackIframeElm_", "ackWinObj_", "checkLocalFramesPresentCb_", "connect", "deliveryQueue_", "isChannelAvailable", "msgIframeElm_", "msgReceiver_", "msgSender_", "msgWinObj_", "parts_", "processIncomingAck", "processIncomingMsg", "rcvdConnectionSetupAck_", "send", "sentConnectionSetupAck_", "transportType"]
	}, {
		"name": "goog.net.xpc.IframePollingTransport.Receiver",
		"href": "class_goog_net_xpc_IframePollingTransport_Receiver.html",
		"namespace": false,
		"interface": false,
		"members": ["cb_", "currentLoc_", "rcvFrame_", "receive"]
	}, {
		"name": "goog.net.xpc.IframePollingTransport.Sender",
		"href": "class_goog_net_xpc_IframePollingTransport_Sender.html",
		"namespace": false,
		"interface": false,
		"members": ["send"]
	}, {
		"name": "goog.net.xpc.IframeRelayTransport",
		"href": "class_goog_net_xpc_IframeRelayTransport.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "send", "transportServiceHandler", "transportType"]
	}, {
		"name": "goog.net.xpc.IframeRelayTransport.FragmentInfo",
		"href": "class_goog_net_xpc_IframeRelayTransport.html#IframeRelayTransport.FragmentInfo"
	}, {
		"name": "goog.net.xpc.NativeMessagingTransport",
		"href": "class_goog_net_xpc_NativeMessagingTransport.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "send", "transportServiceHandler", "transportType"]
	}, {
		"name": "goog.net.xpc.NixTransport",
		"href": "class_goog_net_xpc_NixTransport.html",
		"namespace": false,
		"interface": false,
		"statics": ["NixTransport.NIX_CREATE_CHANNEL", "NixTransport.NIX_GET_WRAPPER", "NixTransport.NIX_HANDLE_MESSAGE", "NixTransport.NIX_ID_FIELD", "NixTransport.NIX_WRAPPER", "NixTransport.isNixSupported"],
		"members": ["connect", "send", "transportType"]
	}, {
		"name": "goog.net.xpc.Transport",
		"href": "class_goog_net_xpc_Transport.html",
		"namespace": false,
		"interface": false,
		"members": ["connect", "getName", "getType", "getWindow", "send", "transportServiceHandler", "transportType"]
	}, {
		"name": "goog.net.xpc.TransportTypes",
		"href": "enum_goog_net_xpc_TransportTypes.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.object",
		"href": "namespace_goog_object.html",
		"namespace": true,
		"interface": false,
		"statics": ["add", "clear", "clone", "contains", "containsKey", "containsValue", "create", "createImmutableView", "createSet", "equals", "every", "extend", "filter", "findKey", "findValue", "forEach", "get", "getAnyKey", "getAnyValue", "getCount", "getKeys", "getValueByKeys", "getValues", "isEmpty", "isImmutableView", "map", "remove", "set", "setIfUndefined", "setWithReturnValueIfNotSet", "some", "transpose", "unsafeClone"]
	}, {
		"name": "goog.osapi",
		"href": "namespace_goog_osapi.html",
		"namespace": true,
		"interface": false,
		"statics": ["handleGadgetRpcMethod", "init"]
	}, {
		"name": "goog.positioning",
		"href": "namespace_goog_positioning.html",
		"namespace": true,
		"interface": false,
		"statics": ["flipCorner", "flipCornerHorizontal", "flipCornerVertical", "getEffectiveCorner", "getOffsetParentPageOffset", "getPositionAtCoordinate", "positionAtAnchor", "positionAtCoordinate"]
	}, {
		"name": "goog.positioning.AbsolutePosition",
		"href": "class_goog_positioning_AbsolutePosition.html",
		"namespace": false,
		"interface": false,
		"members": ["coordinate", "reposition"]
	}, {
		"name": "goog.positioning.AbstractPosition",
		"href": "class_goog_positioning_AbstractPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["reposition"]
	}, {
		"name": "goog.positioning.AnchoredPosition",
		"href": "class_goog_positioning_AnchoredPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["corner", "element", "reposition"]
	}, {
		"name": "goog.positioning.AnchoredViewportPosition",
		"href": "class_goog_positioning_AnchoredViewportPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["adjustCorner", "getLastResortOverflow", "getOverflowConstraint", "reposition", "setLastResortOverflow", "setOverflowConstraint"]
	}, {
		"name": "goog.positioning.ClientPosition",
		"href": "class_goog_positioning_ClientPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["coordinate", "reposition"]
	}, {
		"name": "goog.positioning.Corner",
		"href": "enum_goog_positioning_Corner.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.positioning.CornerBit",
		"href": "enum_goog_positioning_CornerBit.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.positioning.MenuAnchoredPosition",
		"href": "class_goog_positioning_MenuAnchoredPosition.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.positioning.Overflow",
		"href": "enum_goog_positioning_Overflow.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.positioning.OverflowStatus",
		"href": "enum_goog_positioning_OverflowStatus.html",
		"namespace": false,
		"interface": false,
		"statics": ["OverflowStatus.FAILED", "OverflowStatus.FAILED_HORIZONTAL", "OverflowStatus.FAILED_VERTICAL"]
	}, {
		"name": "goog.positioning.ViewportClientPosition",
		"href": "class_goog_positioning_ViewportClientPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["reposition", "setLastResortOverflow"]
	}, {
		"name": "goog.positioning.ViewportPosition",
		"href": "class_goog_positioning_ViewportPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["coordinate", "reposition"]
	}, {
		"name": "goog.promise",
		"href": "namespace_goog_promise.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.promise.Resolver",
		"href": "interface_goog_promise_Resolver.html",
		"namespace": true,
		"interface": true,
		"members": ["promise", "reject", "resolve"]
	}, {
		"name": "goog.promise.testSuiteAdapter",
		"href": "namespace_goog_promise_testSuiteAdapter.html",
		"namespace": true,
		"interface": false,
		"statics": ["deferred", "rejected", "resolved"]
	}, {
		"name": "goog.proto",
		"href": "namespace_goog_proto.html",
		"namespace": true,
		"interface": false,
		"statics": ["serialize"]
	}, {
		"name": "goog.proto.Serializer",
		"href": "class_goog_proto_Serializer.html",
		"namespace": false,
		"interface": false,
		"members": ["serializeArray"]
	}, {
		"name": "goog.proto2",
		"href": "namespace_goog_proto2.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.proto2.Metadata",
		"href": "namespace_goog_proto2.html#proto2.Metadata"
	}, {
		"name": "goog.proto2.Descriptor",
		"href": "class_goog_proto2_Descriptor.html",
		"namespace": false,
		"interface": false,
		"members": ["createMessageInstance", "findFieldByName", "findFieldByTag", "getContainingType", "getFields", "getFieldsMap", "getFullName", "getName"]
	}, {
		"name": "goog.proto2.FieldDescriptor",
		"href": "class_goog_proto2_FieldDescriptor.html",
		"namespace": false,
		"interface": false,
		"members": ["deserializationConversionPermitted", "getContainingType", "getDefaultValue", "getFieldMessageType", "getFieldType", "getName", "getNativeType", "getTag", "isCompositeType", "isOptional", "isPacked", "isRepeated", "isRequired"]
	}, {
		"name": "goog.proto2.FieldDescriptor.FieldType",
		"href": "enum_goog_proto2_FieldDescriptor_FieldType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.proto2.LazyDeserializer",
		"href": "class_goog_proto2_LazyDeserializer.html",
		"namespace": false,
		"interface": false,
		"members": ["deserializeField"]
	}, {
		"name": "goog.proto2.Message",
		"href": "class_goog_proto2_Message.html",
		"namespace": false,
		"interface": false,
		"statics": ["Message.createDescriptor"],
		"members": ["add", "add$Value", "array$Values", "arrayOf", "clear", "clear$Field", "clone", "copyFrom", "count$Values", "countOf", "equals", "forEachUnknown", "get", "get$Value", "get$ValueOrDefault", "getDescriptor", "getOrDefault", "has", "has$Value", "initDefaults", "initializeForLazyDeserializer", "mergeFrom", "set", "set$Value", "setUnknown"]
	}, {
		"name": "goog.proto2.Message.FieldType",
		"href": "enum_goog_proto2_Message_FieldType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.proto2.ObjectSerializer",
		"href": "class_goog_proto2_ObjectSerializer.html",
		"namespace": false,
		"interface": false,
		"members": ["deserializeTo", "keyOption_", "serialize"]
	}, {
		"name": "goog.proto2.ObjectSerializer.KeyOption",
		"href": "enum_goog_proto2_ObjectSerializer_KeyOption.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.proto2.PbLiteSerializer",
		"href": "class_goog_proto2_PbLiteSerializer.html",
		"namespace": false,
		"interface": false,
		"members": ["serialize", "setZeroIndexed"]
	}, {
		"name": "goog.proto2.Serializer",
		"href": "class_goog_proto2_Serializer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Serializer.DECODE_SYMBOLIC_ENUMS"],
		"members": ["deserialize", "deserializeTo", "getDeserializedValue", "getSerializedValue", "serialize"]
	}, {
		"name": "goog.proto2.TextFormatSerializer",
		"href": "class_goog_proto2_TextFormatSerializer.html",
		"namespace": false,
		"interface": false,
		"members": ["deserializeTo", "serialize"]
	}, {
		"name": "goog.proto2.TextFormatSerializer.Parser",
		"href": "class_goog_proto2_TextFormatSerializer_Parser.html",
		"namespace": false,
		"interface": false,
		"members": ["getError", "parse"]
	}, {
		"name": "goog.proto2.TextFormatSerializer.Printer_",
		"href": "class_goog_proto2_TextFormatSerializer_Printer_.html",
		"namespace": false,
		"interface": false,
		"members": ["append", "appendLine", "dedent", "indent", "toString"]
	}, {
		"name": "goog.proto2.TextFormatSerializer.Tokenizer_",
		"href": "class_goog_proto2_TextFormatSerializer_Tokenizer_.html",
		"namespace": false,
		"interface": false,
		"members": ["getCurrent", "next"]
	}, {
		"name": "goog.proto2.TextFormatSerializer.Tokenizer_.Token",
		"href": "class_goog_proto2_TextFormatSerializer_Tokenizer_.html#Tokenizer_.Token"
	}, {
		"name": "goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes",
		"href": "enum_goog_proto2_TextFormatSerializer_Tokenizer__TokenTypes.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.proto2.Util",
		"href": "namespace_goog_proto2_Util.html",
		"namespace": true,
		"interface": false,
		"statics": ["PBCHECK", "assert", "conductChecks"]
	}, {
		"name": "goog.pubsub",
		"href": "namespace_goog_pubsub.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.pubsub.PubSub",
		"href": "class_goog_pubsub_PubSub.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "getCount", "publish", "subscribe", "subscribeOnce", "unsubscribe", "unsubscribeByKey"]
	}, {
		"name": "goog.pubsub.TopicId",
		"href": "class_goog_pubsub_TopicId.html",
		"namespace": false,
		"interface": false,
		"members": ["toString"]
	}, {
		"name": "goog.pubsub.TypedPubSub",
		"href": "class_goog_pubsub_TypedPubSub.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "getCount", "pubSub_", "publish", "subscribe", "subscribeOnce", "unsubscribe", "unsubscribeByKey"]
	}, {
		"name": "goog.reflect",
		"href": "namespace_goog_reflect.html",
		"namespace": true,
		"interface": false,
		"statics": ["canAccessProperty", "object", "sinkValue"]
	}, {
		"name": "goog.result",
		"href": "namespace_goog_result.html",
		"namespace": true,
		"interface": false,
		"statics": ["cancelParentResults", "canceledResult", "chain", "combine", "combineOnSuccess", "failedResult", "successfulResult", "transform", "wait", "waitOnError", "waitOnSuccess"]
	}, {
		"name": "goog.result.DeferredAdaptor",
		"href": "class_goog_result_DeferredAdaptor.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.result.DependentResult",
		"href": "interface_goog_result_DependentResult.html",
		"namespace": true,
		"interface": true,
		"members": ["getParentResults"]
	}, {
		"name": "goog.result.DependentResultImpl_",
		"href": "class_goog_result_DependentResultImpl_.html",
		"namespace": false,
		"interface": false,
		"members": ["addParentResult", "getParentResults"]
	}, {
		"name": "goog.result.Result",
		"href": "interface_goog_result_Result.html",
		"namespace": true,
		"interface": true,
		"members": ["cancel", "getError", "getState", "getValue", "isCanceled", "wait"]
	}, {
		"name": "goog.result.Result.CancelError",
		"href": "class_goog_result_Result_CancelError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.result.Result.State",
		"href": "enum_goog_result_Result_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.result.SimpleResult",
		"href": "class_goog_result_SimpleResult.html",
		"namespace": false,
		"interface": false,
		"statics": ["SimpleResult.fromPromise"],
		"members": ["cancel", "getError", "getState", "getValue", "isCanceled", "setError", "setValue", "then", "wait"]
	}, {
		"name": "goog.result.SimpleResult.HandlerEntry_",
		"href": "class_goog_result_SimpleResult.html#SimpleResult.HandlerEntry_"
	}, {
		"name": "goog.result.SimpleResult.StateError",
		"href": "class_goog_result_SimpleResult_StateError.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.soy",
		"href": "namespace_goog_soy.html",
		"namespace": true,
		"interface": false,
		"statics": ["REQUIRE_STRICT_AUTOESCAPE", "convertToElement", "renderAsElement", "renderAsFragment", "renderElement", "renderHtml"]
	}, {
		"name": "goog.soy.InjectedDataSupplier",
		"href": "interface_goog_soy_InjectedDataSupplier.html",
		"namespace": true,
		"interface": true,
		"members": ["getData"]
	}, {
		"name": "goog.soy.Renderer",
		"href": "class_goog_soy_Renderer.html",
		"namespace": false,
		"interface": false,
		"members": ["getSavedTemplateRenders", "handleRender", "render", "renderAsElement", "renderAsFragment", "renderElement", "renderSafeHtml", "renderStrict", "renderText"]
	}, {
		"name": "goog.soy.Renderer.SavedTemplateRender",
		"href": "class_goog_soy_Renderer.html#Renderer.SavedTemplateRender"
	}, {
		"name": "goog.soy.data",
		"href": "namespace_goog_soy_data.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.soy.data.SanitizedContent",
		"href": "class_goog_soy_data_SanitizedContent.html",
		"namespace": false,
		"interface": false,
		"members": ["content", "contentDir", "contentKind", "getContent", "toSafeHtml", "toString"]
	}, {
		"name": "goog.soy.data.SanitizedContentKind",
		"href": "enum_goog_soy_data_SanitizedContentKind.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.spell",
		"href": "namespace_goog_spell.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.spell.SpellCheck",
		"href": "class_goog_spell_SpellCheck.html",
		"namespace": false,
		"interface": false,
		"statics": ["SpellCheck.SPLIT_REGEX", "SpellCheck.WORD_BOUNDARY_CHARS", "SpellCheck.WORD_BOUNDARY_REGEX"],
		"members": ["checkBlock", "checkWord", "getLanguage", "getSuggestions", "processPending", "setLanguage", "setLookupFunction", "setWordStatus"]
	}, {
		"name": "goog.spell.SpellCheck.CacheIndex",
		"href": "enum_goog_spell_SpellCheck_CacheIndex.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.spell.SpellCheck.EventType",
		"href": "enum_goog_spell_SpellCheck_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.spell.SpellCheck.WordChangedEvent",
		"href": "class_goog_spell_SpellCheck_WordChangedEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["status", "word"]
	}, {
		"name": "goog.spell.SpellCheck.WordStatus",
		"href": "enum_goog_spell_SpellCheck_WordStatus.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.stats",
		"href": "namespace_goog_stats.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.stats.BasicStat",
		"href": "class_goog_stats_BasicStat.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "getInterval", "getMax", "getMin", "incBy"]
	}, {
		"name": "goog.stats.BasicStat.Slot_",
		"href": "class_goog_stats_BasicStat_Slot_.html",
		"namespace": false,
		"interface": false,
		"members": ["count", "end", "max", "min"]
	}, {
		"name": "goog.storage",
		"href": "namespace_goog_storage.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.storage.CollectableStorage",
		"href": "class_goog_storage_CollectableStorage.html",
		"namespace": false,
		"interface": false,
		"members": ["collect", "collectInternal"]
	}, {
		"name": "goog.storage.EncryptedStorage",
		"href": "class_goog_storage_EncryptedStorage.html",
		"namespace": false,
		"interface": false,
		"statics": ["EncryptedStorage.SALT_KEY"]
	}, {
		"name": "goog.storage.ErrorCode",
		"href": "enum_goog_storage_ErrorCode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.ExpiringStorage",
		"href": "class_goog_storage_ExpiringStorage.html",
		"namespace": false,
		"interface": false,
		"statics": ["ExpiringStorage.CREATION_TIME_KEY", "ExpiringStorage.EXPIRATION_TIME_KEY", "ExpiringStorage.getCreationTime", "ExpiringStorage.getExpirationTime", "ExpiringStorage.isExpired"],
		"members": ["getWrapper", "set"]
	}, {
		"name": "goog.storage.RichStorage",
		"href": "class_goog_storage_RichStorage.html",
		"namespace": false,
		"interface": false,
		"statics": ["RichStorage.DATA_KEY"],
		"members": ["getWrapper"]
	}, {
		"name": "goog.storage.RichStorage.Wrapper",
		"href": "class_goog_storage_RichStorage_Wrapper.html",
		"namespace": false,
		"interface": false,
		"statics": ["Wrapper.unwrap", "Wrapper.unwrapIfPossible", "Wrapper.wrapIfNecessary"]
	}, {
		"name": "goog.storage.Storage",
		"href": "class_goog_storage_Storage.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "mechanism", "remove", "set"]
	}, {
		"name": "goog.storage.collectableStorageTester",
		"href": "namespace_goog_storage_collectableStorageTester.html",
		"namespace": true,
		"interface": false,
		"statics": ["runBasicTests"]
	}, {
		"name": "goog.storage.mechanism",
		"href": "namespace_goog_storage_mechanism.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.ErrorCode",
		"href": "enum_goog_storage_mechanism_ErrorCode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.ErrorHandlingMechanism",
		"href": "class_goog_storage_mechanism_ErrorHandlingMechanism.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler",
		"href": "class_goog_storage_mechanism_ErrorHandlingMechanism.html#ErrorHandlingMechanism.ErrorHandler"
	}, {
		"name": "goog.storage.mechanism.ErrorHandlingMechanism.Operation",
		"href": "enum_goog_storage_mechanism_ErrorHandlingMechanism_Operation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.HTML5LocalStorage",
		"href": "class_goog_storage_mechanism_HTML5LocalStorage.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.HTML5SessionStorage",
		"href": "class_goog_storage_mechanism_HTML5SessionStorage.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.HTML5WebStorage",
		"href": "class_goog_storage_mechanism_HTML5WebStorage.html",
		"namespace": false,
		"interface": false,
		"members": ["isAvailable", "key"]
	}, {
		"name": "goog.storage.mechanism.IEUserData",
		"href": "class_goog_storage_mechanism_IEUserData.html",
		"namespace": false,
		"interface": false,
		"statics": ["IEUserData.ENCODE_MAP"],
		"members": ["isAvailable"]
	}, {
		"name": "goog.storage.mechanism.IterableMechanism",
		"href": "class_goog_storage_mechanism_IterableMechanism.html",
		"namespace": false,
		"interface": false,
		"members": ["__iterator__", "clear", "getCount"]
	}, {
		"name": "goog.storage.mechanism.Mechanism",
		"href": "class_goog_storage_mechanism_Mechanism.html",
		"namespace": false,
		"interface": false,
		"members": ["get", "remove", "set"]
	}, {
		"name": "goog.storage.mechanism.PrefixedMechanism",
		"href": "class_goog_storage_mechanism_PrefixedMechanism.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.storage.mechanism.mechanismfactory",
		"href": "namespace_goog_storage_mechanism_mechanismfactory.html",
		"namespace": true,
		"interface": false,
		"statics": ["USER_DATA_SHARED_KEY", "create", "createHTML5LocalStorage", "createHTML5SessionStorage", "createIEUserData"]
	}, {
		"name": "goog.string",
		"href": "namespace_goog_string.html",
		"namespace": true,
		"interface": false,
		"statics": ["DETECT_DOUBLE_ESCAPING", "FORCE_NON_DOM_HTML_UNESCAPING", "buildString", "canonicalizeNewlines", "capitalize", "caseInsensitiveCompare", "caseInsensitiveContains", "caseInsensitiveEndsWith", "caseInsensitiveEquals", "caseInsensitiveStartsWith", "collapseBreakingSpaces", "collapseWhitespace", "compareVersions", "contains", "countOf", "createUniqueString", "editDistance", "endsWith", "escapeChar", "escapeString", "getRandomString", "hashCode", "htmlEscape", "isAlpha", "isAlphaNumeric", "isBreakingWhitespace", "isEmpty", "isEmptyOrWhitespace", "isEmptyOrWhitespaceSafe", "isEmptySafe", "isEmptyString", "isLowerCamelCase", "isNumeric", "isSpace", "isUnicodeChar", "isUpperCamelCase", "makeSafe", "newLineToBr", "normalizeSpaces", "normalizeWhitespace", "numerateCompare", "padNumber", "parseInt", "preserveSpaces", "quote", "regExpEscape", "remove", "removeAll", "removeAt", "repeat", "splitLimit", "startsWith", "stripNewlines", "stripQuotes", "subs", "toCamelCase", "toNumber", "toSelectorCase", "toTitleCase", "trim", "trimLeft", "trimRight", "truncate", "truncateMiddle", "unescapeEntities", "unescapeEntitiesWithDocument", "urlDecode", "urlEncode", "whitespaceEscape"]
	}, {
		"name": "goog.string.Const",
		"href": "class_goog_string_Const.html",
		"namespace": false,
		"interface": false,
		"statics": ["Const.from", "Const.unwrap"],
		"members": ["getTypedStringValue", "implementsGoogStringTypedString", "toString"]
	}, {
		"name": "goog.string.Parser",
		"href": "interface_goog_string_Parser.html",
		"namespace": true,
		"interface": true,
		"members": ["parse"]
	}, {
		"name": "goog.string.StringBuffer",
		"href": "class_goog_string_StringBuffer.html",
		"namespace": false,
		"interface": false,
		"members": ["append", "clear", "getLength", "set", "toString"]
	}, {
		"name": "goog.string.Stringifier",
		"href": "interface_goog_string_Stringifier.html",
		"namespace": true,
		"interface": true,
		"members": ["stringify"]
	}, {
		"name": "goog.string.TypedString",
		"href": "interface_goog_string_TypedString.html",
		"namespace": true,
		"interface": true,
		"members": ["getTypedStringValue", "implementsGoogStringTypedString"]
	}, {
		"name": "goog.string.Unicode",
		"href": "enum_goog_string_Unicode.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.string.format",
		"href": "namespace_goog_string_format.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.string.html",
		"href": "namespace_goog_string_html.html",
		"namespace": true,
		"interface": false,
		"statics": ["toLowerCase"]
	}, {
		"name": "goog.string.html.HtmlParser",
		"href": "class_goog_string_html_HtmlParser.html",
		"namespace": false,
		"interface": false,
		"statics": ["HtmlParser.AMP_RE", "HtmlParser.EQUALS_RE", "HtmlParser.Elements", "HtmlParser.Entities", "HtmlParser.GT_RE", "HtmlParser.LT_RE", "HtmlParser.QUOTE_RE"],
		"members": ["parse"]
	}, {
		"name": "goog.string.html.HtmlParser.EFlags",
		"href": "enum_goog_string_html_HtmlParser_EFlags.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.string.html.HtmlSanitizer",
		"href": "class_goog_string_html_HtmlSanitizer.html",
		"namespace": false,
		"interface": false,
		"members": ["cdata", "endDoc", "endTag", "pcdata", "rcdata", "startDoc", "startTag"]
	}, {
		"name": "goog.string.html.HtmlSanitizer.AttributeType",
		"href": "enum_goog_string_html_HtmlSanitizer_AttributeType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.string.html.HtmlSanitizer.Attributes",
		"href": "enum_goog_string_html_HtmlSanitizer_Attributes.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.string.html.HtmlSaxHandler",
		"href": "interface_goog_string_html_HtmlSaxHandler.html",
		"namespace": true,
		"interface": true,
		"members": ["cdata", "endDoc", "endTag", "pcdata", "rcdata", "startDoc", "startTag"]
	}, {
		"name": "goog.string.linkify",
		"href": "namespace_goog_string_linkify.html",
		"namespace": true,
		"interface": false,
		"statics": ["findFirstEmail", "findFirstUrl", "linkifyPlainText"]
	}, {
		"name": "goog.string.newlines",
		"href": "namespace_goog_string_newlines.html",
		"namespace": true,
		"interface": false,
		"statics": ["getLines", "splitLines"]
	}, {
		"name": "goog.string.newlines.Line",
		"href": "class_goog_string_newlines_Line.html",
		"namespace": false,
		"interface": false,
		"members": ["endContentIndex", "endLineIndex", "getContent", "getFullLine", "getNewline", "startLineIndex", "string"]
	}, {
		"name": "goog.string.path",
		"href": "namespace_goog_string_path.html",
		"namespace": true,
		"interface": false,
		"statics": ["baseName", "basename", "dirname", "extension", "join", "normalizePath", "split"]
	}, {
		"name": "goog.structs",
		"href": "namespace_goog_structs.html",
		"namespace": true,
		"interface": false,
		"statics": ["clear", "contains", "every", "filter", "forEach", "getCount", "getKeys", "getValues", "isEmpty", "map", "some"]
	}, {
		"name": "goog.structs.AvlTree",
		"href": "class_goog_structs_AvlTree.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "clear", "contains", "getCount", "getHeight", "getKthValue", "getMaximum", "getMinimum", "getValues", "inOrderTraverse", "indexOf", "remove", "reverseOrderTraverse"]
	}, {
		"name": "goog.structs.AvlTree.Node",
		"href": "class_goog_structs_AvlTree_Node.html",
		"namespace": false,
		"interface": false,
		"members": ["count", "height", "isLeftChild", "isRightChild", "left", "parent", "right", "value"]
	}, {
		"name": "goog.structs.CircularBuffer",
		"href": "class_goog_structs_CircularBuffer.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "clear", "containsKey", "containsValue", "get", "getCount", "getKeys", "getLast", "getNewestValues", "getValues", "isEmpty", "set"]
	}, {
		"name": "goog.structs.Collection",
		"href": "interface_goog_structs_Collection.html",
		"namespace": true,
		"interface": true,
		"members": ["add", "contains", "getCount", "remove"]
	}, {
		"name": "goog.structs.Heap",
		"href": "class_goog_structs_Heap.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "clone", "containsKey", "containsValue", "getCount", "getKeys", "getValues", "insert", "insertAll", "isEmpty", "peek", "peekKey", "remove"]
	}, {
		"name": "goog.structs.InversionMap",
		"href": "class_goog_structs_InversionMap.html",
		"namespace": false,
		"interface": false,
		"members": ["at", "getLeast", "rangeArray", "spliceInversion", "values"]
	}, {
		"name": "goog.structs.LinkedMap",
		"href": "class_goog_structs_LinkedMap.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "contains", "containsKey", "every", "forEach", "get", "getCount", "getKeys", "getValues", "head_", "isEmpty", "map", "peek", "peekLast", "peekValue", "pop", "remove", "removeNode", "set", "setEvictionCallback", "setMaxCount", "shift", "some"]
	}, {
		"name": "goog.structs.LinkedMap.Node_",
		"href": "class_goog_structs_LinkedMap_Node_.html",
		"namespace": false,
		"interface": false,
		"members": ["key", "next", "prev", "remove", "value"]
	}, {
		"name": "goog.structs.Map",
		"href": "class_goog_structs_Map.html",
		"namespace": false,
		"interface": false,
		"statics": ["Map.defaultEquals"],
		"members": ["__iterator__", "addAll", "clear", "clone", "containsKey", "containsValue", "equals", "forEach", "get", "getCount", "getKeyIterator", "getKeys", "getValueIterator", "getValues", "isEmpty", "remove", "set", "toObject", "transpose"]
	}, {
		"name": "goog.structs.Node",
		"href": "class_goog_structs_Node.html",
		"namespace": false,
		"interface": false,
		"members": ["clone", "getKey", "getValue"]
	}, {
		"name": "goog.structs.Pool",
		"href": "class_goog_structs_Pool.html",
		"namespace": false,
		"interface": false,
		"members": ["addFreeObject", "adjustForMinMax", "contains", "createObject", "delay", "disposeInternal", "disposeObject", "getCount", "getFreeCount", "getInUseCount", "getObject", "isEmpty", "lastAccess", "objectCanBeReused", "releaseObject", "setDelay", "setMaximumCount", "setMinimumCount"]
	}, {
		"name": "goog.structs.PriorityPool",
		"href": "class_goog_structs_PriorityPool.html",
		"namespace": false,
		"interface": false,
		"members": ["addFreeObject", "adjustForMinMax", "getObject"]
	}, {
		"name": "goog.structs.PriorityQueue",
		"href": "class_goog_structs_PriorityQueue.html",
		"namespace": false,
		"interface": false,
		"members": ["dequeue", "enqueue"]
	}, {
		"name": "goog.structs.QuadTree",
		"href": "class_goog_structs_QuadTree.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "clone", "contains", "forEach", "get", "getCount", "getKeys", "getRootNode", "getValues", "isEmpty", "remove", "set"]
	}, {
		"name": "goog.structs.QuadTree.Node",
		"href": "class_goog_structs_QuadTree_Node.html",
		"namespace": false,
		"interface": false,
		"members": ["h", "ne", "nodeType", "nw", "parent", "point", "se", "sw", "w", "x", "y"]
	}, {
		"name": "goog.structs.QuadTree.NodeType",
		"href": "enum_goog_structs_QuadTree_NodeType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.structs.QuadTree.Point",
		"href": "class_goog_structs_QuadTree_Point.html",
		"namespace": false,
		"interface": false,
		"members": ["value", "x", "y"]
	}, {
		"name": "goog.structs.Queue",
		"href": "class_goog_structs_Queue.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "contains", "dequeue", "enqueue", "getCount", "getValues", "isEmpty", "peek", "remove"]
	}, {
		"name": "goog.structs.Set",
		"href": "class_goog_structs_Set.html",
		"namespace": false,
		"interface": false,
		"members": ["__iterator__", "add", "addAll", "clear", "clone", "contains", "containsAll", "difference", "equals", "getCount", "getValues", "intersection", "isEmpty", "isSubsetOf", "map_", "remove", "removeAll"]
	}, {
		"name": "goog.structs.SimplePool",
		"href": "class_goog_structs_SimplePool.html",
		"namespace": false,
		"interface": false,
		"members": ["createObject", "disposeInternal", "disposeObject", "getObject", "releaseObject", "setCreateObjectFn", "setDisposeObjectFn"]
	}, {
		"name": "goog.structs.StringSet",
		"href": "class_goog_structs_StringSet.html",
		"namespace": false,
		"interface": false,
		"members": ["__iterator__", "add", "addArray", "addSet", "clear", "clone", "contains", "containsArray", "equals", "forEach", "getCount", "getDifference", "getIntersection", "getSymmetricDifference", "getUnion", "getValues", "isDisjoint", "isEmpty", "isSubsetOf", "isSupersetOf", "remove", "removeArray", "removeSet"]
	}, {
		"name": "goog.structs.TreeNode",
		"href": "class_goog_structs_TreeNode.html",
		"namespace": false,
		"interface": false,
		"statics": ["TreeNode.findCommonAncestor"],
		"members": ["addChild", "addChildAt", "contains", "deepClone", "forEachChild", "forEachDescendant", "getAncestors", "getChildAt", "getChildCount", "getChildren", "getDepth", "getNodeByKey", "getParent", "getRoot", "getSubtreeKeys", "isLastChild", "isLeaf", "removeChild", "removeChildAt", "removeChildren", "replaceChild", "replaceChildAt", "setParent", "traverse"]
	}, {
		"name": "goog.structs.Trie",
		"href": "class_goog_structs_Trie.html",
		"namespace": false,
		"interface": false,
		"members": ["add", "clear", "clone", "containsKey", "containsPrefix", "containsValue", "get", "getCount", "getKeyAndPrefixes", "getKeys", "getValues", "isEmpty", "remove", "set", "setAll"]
	}, {
		"name": "goog.structs.weak",
		"href": "namespace_goog_structs_weak.html",
		"namespace": true,
		"interface": false,
		"statics": ["SUPPORTED_BROWSER", "USE_NATIVE_WEAKMAP", "USE_NATIVE_WEAKSET", "WEAKREFS_PROPERTY_NAME", "checkKeyType", "generateId", "has", "remove", "set"]
	}, {
		"name": "goog.style",
		"href": "namespace_goog_style.html",
		"namespace": true,
		"interface": false,
		"statics": ["clearTransparentBackgroundImage", "getBackgroundColor", "getBorderBox", "getBorderBoxSize", "getBounds", "getCascadedStyle", "getClientLeftTop", "getClientPosition", "getClientViewportElement", "getComputedBoxSizing", "getComputedCursor", "getComputedOverflowX", "getComputedOverflowY", "getComputedPosition", "getComputedStyle", "getComputedTextAlign", "getComputedTransform", "getComputedZIndex", "getContainerOffsetToScrollInto", "getContentBoxSize", "getCssTranslation", "getFloat", "getFontFamily", "getFontSize", "getFramedPageOffset", "getLengthUnits", "getMarginBox", "getOffsetParent", "getOpacity", "getPaddingBox", "getPageOffset", "getPageOffsetLeft", "getPageOffsetTop", "getPosition", "getRelativePosition", "getScrollbarWidth", "getSize", "getStyle", "getTransformedSize", "getViewportPageOffset", "getVisibleRectForElement", "installStyles", "isElementShown", "isRightToLeft", "isUnselectable", "parseStyleAttribute", "scrollIntoContainerView", "setBorderBoxSize", "setContentBoxSize", "setElementShown", "setFloat", "setHeight", "setInlineBlock", "setOpacity", "setPageOffset", "setPosition", "setPreWrap", "setSize", "setStyle", "setStyles", "setTransparentBackgroundImage", "setUnselectable", "setWidth", "showElement", "toCamelCase", "toSelectorCase", "toStyleAttribute", "translateRectForAnotherFrame", "uninstallStyles"]
	}, {
		"name": "goog.style.bidi",
		"href": "namespace_goog_style_bidi.html",
		"namespace": true,
		"interface": false,
		"statics": ["getOffsetStart", "getScrollLeft", "setPosition", "setScrollOffset"]
	}, {
		"name": "goog.style.cursor",
		"href": "namespace_goog_style_cursor.html",
		"namespace": true,
		"interface": false,
		"statics": ["CLOSEDHAND_FILE", "OPENHAND_FILE", "getDraggableCursorStyle", "getDraggingCursorStyle"]
	}, {
		"name": "goog.style.transform",
		"href": "namespace_goog_style_transform.html",
		"namespace": true,
		"interface": false,
		"statics": ["getScale", "getTranslation", "is3dSupported", "isSupported", "setScale", "setTranslation"]
	}, {
		"name": "goog.style.transition",
		"href": "namespace_goog_style_transition.html",
		"namespace": true,
		"interface": false,
		"statics": ["isSupported", "removeAll", "set"]
	}, {
		"name": "goog.style.transition.Css3Property",
		"href": "namespace_goog_style_transition.html#transition.Css3Property"
	}, {
		"name": "goog.test_module",
		"href": "class_goog_test_module.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.test_module_dep",
		"href": "namespace_goog_test_module_dep.html",
		"namespace": true,
		"interface": false,
		"statics": ["someFunction", "someValue"]
	}, {
		"name": "goog.testing",
		"href": "namespace_goog_testing.html",
		"namespace": true,
		"interface": false,
		"statics": ["createConstructorMock", "createFunctionMock", "createGlobalFunctionMock", "createMethodMock"]
	}, {
		"name": "goog.testing.AsyncTestCase",
		"href": "class_goog_testing_AsyncTestCase.html",
		"namespace": false,
		"interface": false,
		"statics": ["AsyncTestCase.createAndInstall"],
		"members": ["activeTest", "continueTesting", "cycleTests", "doAsyncError", "enableDebugLogging", "finalize", "getCurrentStepName", "origAssert_", "origFail_", "runTests", "signal", "stepTimeout", "timeToSleepAfterFailure", "waitForAsync", "waitForSignals"]
	}, {
		"name": "goog.testing.AsyncTestCase.TopStackFuncResult_",
		"href": "class_goog_testing_AsyncTestCase.html#AsyncTestCase.TopStackFuncResult_"
	}, {
		"name": "goog.testing.AsyncTestCase.ControlBreakingException",
		"href": "class_goog_testing_AsyncTestCase_ControlBreakingException.html",
		"namespace": false,
		"interface": false,
		"statics": ["ControlBreakingException.TO_STRING"],
		"members": ["isControlBreakingException", "message", "toString"]
	}, {
		"name": "goog.testing.ContinuationTestCase",
		"href": "class_goog_testing_ContinuationTestCase.html",
		"namespace": false,
		"interface": false,
		"statics": ["ContinuationTestCase.MAX_TIMEOUT"],
		"members": ["waitForCondition", "waitForEvent", "waitForTimeout"]
	}, {
		"name": "goog.testing.ContinuationTestCase.Step",
		"href": "class_goog_testing_ContinuationTestCase_Step.html",
		"namespace": false,
		"interface": false,
		"members": ["clearTimeout", "setTimeout", "waiting"]
	}, {
		"name": "goog.testing.ContinuationTestCase.Test",
		"href": "class_goog_testing_ContinuationTestCase_Test.html",
		"namespace": false,
		"interface": false,
		"members": ["addStep", "cancelCurrentPhase", "cancelTestPhase", "getCurrentPhase", "getError", "setError"]
	}, {
		"name": "goog.testing.DeferredTestCase",
		"href": "class_goog_testing_DeferredTestCase.html",
		"namespace": false,
		"interface": false,
		"statics": ["DeferredTestCase.createAndInstall"],
		"members": ["addWaitForAsync", "onError", "onSuccess", "waitForDeferred"]
	}, {
		"name": "goog.testing.ExpectedFailures",
		"href": "class_goog_testing_ExpectedFailures.html",
		"namespace": false,
		"interface": false,
		"members": ["expectFailureFor", "handleException", "handleTearDown", "isExceptionExpected", "run"]
	}, {
		"name": "goog.testing.FunctionCall",
		"href": "class_goog_testing_FunctionCall.html",
		"namespace": false,
		"interface": false,
		"members": ["arguments_", "error_", "function_", "getArgument", "getArguments", "getError", "getFunction", "getReturnValue", "getThis", "returnValue_", "thisContext_"]
	}, {
		"name": "goog.testing.JsTdTestCaseAdapter",
		"href": "namespace_goog_testing_JsTdTestCaseAdapter.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.JsUnitException",
		"href": "class_goog_testing_JsUnitException.html",
		"namespace": false,
		"interface": false,
		"members": ["comment", "isJsUnitException", "jsUnitMessage", "stackTrace", "toString"]
	}, {
		"name": "goog.testing.LooseExpectationCollection",
		"href": "class_goog_testing_LooseExpectationCollection.html",
		"namespace": false,
		"interface": false,
		"members": ["addExpectation", "getExpectations"]
	}, {
		"name": "goog.testing.LooseMock",
		"href": "class_goog_testing_LooseMock.html",
		"namespace": false,
		"interface": false,
		"members": ["$setIgnoreUnexpectedCalls"]
	}, {
		"name": "goog.testing.MethodMock",
		"href": "namespace_goog_testing_MethodMock.html",
		"namespace": true,
		"interface": false,
		"statics": ["$tearDown"]
	}, {
		"name": "goog.testing.Mock",
		"href": "class_goog_testing_Mock.html",
		"namespace": false,
		"interface": false,
		"statics": ["Mock.LOOSE", "Mock.STRICT"],
		"members": ["$anyTimes", "$argumentListVerifiers_", "$argumentsAsString", "$atLeastOnce", "$atMostOnce", "$do", "$does", "$maybeThrow", "$mockMethod", "$never", "$once", "$pendingExpectation", "$proxy", "$recordAndThrow", "$recordCall", "$recordExpectation", "$registerArgumentListVerifier", "$replay", "$reset", "$returns", "$throwCallException", "$throwException", "$throws", "$times", "$verify", "$verifyCall"]
	}, {
		"name": "goog.testing.MockClassFactory",
		"href": "class_goog_testing_MockClassFactory.html",
		"namespace": false,
		"interface": false,
		"members": ["getLooseMockClass", "getLooseStaticMock", "getStrictMockClass", "getStrictStaticMock", "reset"]
	}, {
		"name": "goog.testing.MockClassRecord",
		"href": "class_goog_testing_MockClassRecord.html",
		"namespace": false,
		"interface": false,
		"members": ["addMockInstance", "findMockInstance", "getClassName", "getNamespace", "getOriginalClass", "getProxy", "getStaticMock", "reset", "setStaticMock"]
	}, {
		"name": "goog.testing.MockClock",
		"href": "class_goog_testing_MockClock.html",
		"namespace": false,
		"interface": false,
		"statics": ["MockClock.REQUEST_ANIMATION_FRAME_TIMEOUT", "MockClock.nextId"],
		"members": ["fireResetEvent", "getCurrentTime", "getTimeoutDelay", "getTimeoutsMade", "install", "isTimeoutSet", "reset", "setTimeoutDelay", "tick", "tickPromise", "uninstall"]
	}, {
		"name": "goog.testing.MockControl",
		"href": "class_goog_testing_MockControl.html",
		"namespace": false,
		"interface": false,
		"members": ["$replayAll", "$resetAll", "$tearDown", "$verifyAll", "addMock", "createConstructorMock", "createFunctionMock", "createGlobalFunctionMock", "createLooseMock", "createMethodMock", "createStrictMock"]
	}, {
		"name": "goog.testing.MockExpectation",
		"href": "class_goog_testing_MockExpectation.html",
		"namespace": false,
		"interface": false,
		"members": ["actualCalls", "addErrorMessage", "argumentList", "errorMessages", "exceptionToThrow", "getErrorMessage", "getErrorMessageCount", "maxCalls", "minCalls", "name", "returnValue", "toDo", "verificationCalls"]
	}, {
		"name": "goog.testing.MockInterface",
		"href": "interface_goog_testing_MockInterface.html",
		"namespace": true,
		"interface": true,
		"members": ["$replay", "$reset", "$verify"]
	}, {
		"name": "goog.testing.MockRandom",
		"href": "class_goog_testing_MockRandom.html",
		"namespace": false,
		"interface": false,
		"members": ["hasMoreValues", "inject", "install", "random", "setStrictlyFromSequence", "uninstall"]
	}, {
		"name": "goog.testing.MockRange",
		"href": "class_goog_testing_MockRange.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.MockRange.ConcreteRange_",
		"href": "class_goog_testing_MockRange_ConcreteRange_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.MockStorage",
		"href": "class_goog_testing_MockStorage.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "getItem", "key", "length", "removeItem", "setItem"]
	}, {
		"name": "goog.testing.MockUserAgent",
		"href": "class_goog_testing_MockUserAgent.html",
		"namespace": false,
		"interface": false,
		"members": ["getNavigator", "getUserAgentString", "install", "setNavigator", "setUserAgentString", "uninstall"]
	}, {
		"name": "goog.testing.MultiTestRunner",
		"href": "class_goog_testing_MultiTestRunner.html",
		"namespace": false,
		"interface": false,
		"statics": ["MultiTestRunner.DEFAULT_TIMEOUT_MS", "MultiTestRunner.STATES"],
		"members": ["addTests", "getAllTests", "getBasePath", "getFilterFunction", "getHidePasses", "getName", "getPoolSize", "getTestsThatFailed", "getTestsToRun", "getTimeout", "getVerbosePasses", "log", "processResult", "setBasePath", "setFilterFunction", "setHidePasses", "setName", "setPoolSize", "setStatsBucketSizes", "setTimeout", "setVerbosePasses", "start"]
	}, {
		"name": "goog.testing.MultiTestRunner.TestFrame",
		"href": "class_goog_testing_MultiTestRunner_TestFrame.html",
		"namespace": false,
		"interface": false,
		"members": ["getReport", "getStats", "getTestFile", "isSuccess", "runTest"]
	}, {
		"name": "goog.testing.ObjectPropertyString",
		"href": "class_goog_testing_ObjectPropertyString.html",
		"namespace": false,
		"interface": false,
		"members": ["getObject", "getPropertyString"]
	}, {
		"name": "goog.testing.PerformanceTable",
		"href": "class_goog_testing_PerformanceTable.html",
		"namespace": false,
		"interface": false,
		"members": ["getTimer", "recordResults", "reportError", "run", "runTask"]
	}, {
		"name": "goog.testing.PerformanceTimer",
		"href": "class_goog_testing_PerformanceTimer.html",
		"namespace": false,
		"interface": false,
		"statics": ["PerformanceTimer.createResults"],
		"members": ["getNumSamples", "getTimeoutInterval", "isDiscardOutliers", "run", "runAsyncTask", "runTask", "setDiscardOutliers", "setNumSamples", "setTimeoutInterval"]
	}, {
		"name": "goog.testing.PerformanceTimer.TestFunction",
		"href": "class_goog_testing_PerformanceTimer.html#PerformanceTimer.TestFunction"
	}, {
		"name": "goog.testing.PerformanceTimer.Task",
		"href": "class_goog_testing_PerformanceTimer_Task.html",
		"namespace": false,
		"interface": false,
		"members": ["getSetUp", "getTearDown", "getTest", "withSetUp", "withTearDown"]
	}, {
		"name": "goog.testing.PropertyReplacer",
		"href": "class_goog_testing_PropertyReplacer.html",
		"namespace": false,
		"interface": false,
		"members": ["remove", "replace", "reset", "set", "setPath"]
	}, {
		"name": "goog.testing.PseudoRandom",
		"href": "class_goog_testing_PseudoRandom.html",
		"namespace": false,
		"interface": false,
		"statics": ["PseudoRandom.A", "PseudoRandom.M", "PseudoRandom.ONE_OVER_M_MINUS_ONE", "PseudoRandom.Q", "PseudoRandom.R"],
		"members": ["install", "random", "seed", "uninstall"]
	}, {
		"name": "goog.testing.ShardingTestCase",
		"href": "class_goog_testing_ShardingTestCase.html",
		"namespace": false,
		"interface": false,
		"statics": ["ShardingTestCase.shardByFileName"],
		"members": ["runTests"]
	}, {
		"name": "goog.testing.StrictMock",
		"href": "class_goog_testing_StrictMock.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.TestCase",
		"href": "class_goog_testing_TestCase.html",
		"namespace": false,
		"interface": false,
		"statics": ["TestCase.IS_IE", "TestCase.currentTestName", "TestCase.getGlobals", "TestCase.initializeTestRunner", "TestCase.maxRunTime"],
		"members": ["add", "addNewTest", "autoDiscoverLifecycle", "autoDiscoverTests", "clearTimeout", "createTestFromAutoDiscoveredFunction", "cycleTests", "doError", "doSuccess", "exceptionBeforeTest", "execute", "finalize", "getActuallyRunCount", "getAutoDiscoveryPrefix", "getBatchTime", "getCount", "getGlobals", "getName", "getNumFilesLoaded", "getReport", "getResult", "getRunTime", "getTestResults", "getTests", "isInsideMultiTestRunner", "isSuccess", "log", "logError", "maybeFailTestEarly", "next", "now", "order", "reset", "result_", "runTests", "runTestsReturningPromise", "running", "saveMessage", "setBatchTime", "setCompletedCallback", "setOrder", "setTestObj", "setTests", "setTestsToRun", "setUp", "setUpPage", "shouldRunTests", "started", "tearDown", "tearDownPage", "timeout"]
	}, {
		"name": "goog.testing.TestCase.Error",
		"href": "class_goog_testing_TestCase_Error.html",
		"namespace": false,
		"interface": false,
		"members": ["message", "source", "stack", "toString"]
	}, {
		"name": "goog.testing.TestCase.Order",
		"href": "enum_goog_testing_TestCase_Order.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.TestCase.Result",
		"href": "class_goog_testing_TestCase_Result.html",
		"namespace": false,
		"interface": false,
		"members": ["complete", "errors", "getSummary", "isSuccess", "messages", "numFilesLoaded", "resultsByName", "runCount", "runTime", "successCount", "testSuppressed", "totalCount"]
	}, {
		"name": "goog.testing.TestCase.Test",
		"href": "class_goog_testing_TestCase_Test.html",
		"namespace": false,
		"interface": false,
		"members": ["execute", "name", "ref", "scope"]
	}, {
		"name": "goog.testing.TestQueue",
		"href": "class_goog_testing_TestQueue.html",
		"namespace": false,
		"interface": false,
		"members": ["dequeue", "enqueue", "isEmpty"]
	}, {
		"name": "goog.testing.TestRunner",
		"href": "class_goog_testing_TestRunner.html",
		"namespace": false,
		"interface": false,
		"members": ["errors", "execute", "getNumFilesLoaded", "getReport", "getRunTime", "getTestResults", "hasErrors", "initialize", "initialized", "isFinished", "isInitialized", "isStrict", "isSuccess", "log", "logError", "logTestFailure", "setErrorFilter", "setStrict", "testCase", "writeLog"]
	}, {
		"name": "goog.testing.asserts",
		"href": "namespace_goog_testing_asserts.html",
		"namespace": true,
		"interface": false,
		"statics": ["EQUALITY_PREDICATE_CANT_PROCESS", "EQUALITY_PREDICATE_VARS_ARE_EQUAL", "callWithoutLogging", "findDifferences", "raiseException"]
	}, {
		"name": "goog.testing.asserts.ArrayLike",
		"href": "namespace_goog_testing_asserts.html#asserts.ArrayLike"
	}, {
		"name": "goog.testing.async",
		"href": "namespace_goog_testing_async.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.async.MockControl",
		"href": "class_goog_testing_async_MockControl.html",
		"namespace": false,
		"interface": false,
		"members": ["assertDeferredEquals", "assertDeferredError", "asyncAssertEquals", "createCallbackMock"]
	}, {
		"name": "goog.testing.benchmark",
		"href": "namespace_goog_testing_benchmark.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.dom",
		"href": "namespace_goog_testing_dom.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertHtmlContentsMatch", "assertHtmlMatches", "assertNodesMatch", "assertRangeEquals", "exposeNode", "exposeRange", "findTextNode"]
	}, {
		"name": "goog.testing.editor",
		"href": "namespace_goog_testing_editor.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.editor.FieldMock",
		"href": "class_goog_testing_editor_FieldMock.html",
		"namespace": false,
		"interface": false,
		"members": ["inModalMode", "isUneditable", "setModalMode", "setUneditable"]
	}, {
		"name": "goog.testing.editor.TestHelper",
		"href": "class_goog_testing_editor_TestHelper.html",
		"namespace": false,
		"interface": false,
		"members": ["assertHtmlMatches", "findTextNode", "select", "setRoot", "setUpEditableElement", "tearDownEditableElement"]
	}, {
		"name": "goog.testing.editor.dom",
		"href": "namespace_goog_testing_editor_dom.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertRangeBetweenText", "getNextNonEmptyTextNode", "getPreviousNonEmptyTextNode"]
	}, {
		"name": "goog.testing.events",
		"href": "namespace_goog_testing_events.html",
		"namespace": true,
		"interface": false,
		"statics": ["fireBlurEvent", "fireBrowserEvent", "fireClickEvent", "fireClickSequence", "fireContextMenuEvent", "fireContextMenuSequence", "fireDoubleClickEvent", "fireDoubleClickSequence", "fireFocusEvent", "fireKeySequence", "fireMouseDownEvent", "fireMouseEnterEvent", "fireMouseLeaveEvent", "fireMouseMoveEvent", "fireMouseOutEvent", "fireMouseOverEvent", "fireMouseUpEvent", "fireNonAsciiKeySequence", "firePopStateEvent", "fireTouchEndEvent", "fireTouchMoveEvent", "fireTouchSequence", "fireTouchStartEvent", "mixinListenable"]
	}, {
		"name": "goog.testing.events.Event",
		"href": "class_goog_testing_events_Event.html",
		"namespace": false,
		"interface": false,
		"members": ["propagationStopped_", "returnValue_"]
	}, {
		"name": "goog.testing.events.EventMatcher",
		"href": "class_goog_testing_events_EventMatcher.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.events.EventObserver",
		"href": "class_goog_testing_events_EventObserver.html",
		"namespace": false,
		"interface": false,
		"members": ["getEvents", "handleEvent"]
	}, {
		"name": "goog.testing.events.OnlineHandler",
		"href": "class_goog_testing_events_OnlineHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["isOnline", "setOnline"]
	}, {
		"name": "goog.testing.fs",
		"href": "namespace_goog_testing_fs.html",
		"namespace": true,
		"interface": false,
		"statics": ["blobToString", "createObjectUrl", "getBlob", "getBlobWithProperties", "getPersistent", "getTemporary", "install", "isObjectUrlGranted", "revokeObjectUrl", "sliceBlob"]
	}, {
		"name": "goog.testing.fs.Blob",
		"href": "class_goog_testing_fs_Blob.html",
		"namespace": false,
		"interface": false,
		"members": ["setDataInternal", "size", "slice", "toArrayBuffer", "toDataUrl", "toString", "type"]
	}, {
		"name": "goog.testing.fs.DirectoryEntry",
		"href": "class_goog_testing_fs_DirectoryEntry.html",
		"namespace": false,
		"interface": false,
		"members": ["children", "createDirectorySync", "createFileSync", "createPath", "getDirectory", "getDirectorySync", "getFile", "getFileSync", "hasChild", "listDirectory", "removeRecursively"]
	}, {
		"name": "goog.testing.fs.Entry",
		"href": "class_goog_testing_fs_Entry.html",
		"namespace": false,
		"interface": false,
		"members": ["checkNotDeleted", "clone", "copyTo", "deleted", "getFileSystem", "getFullPath", "getLastModified", "getMetadata", "getName", "getParent", "isDirectory", "isFile", "moveTo", "parent", "remove", "toUri", "toUrl", "wrapEntry"]
	}, {
		"name": "goog.testing.fs.File",
		"href": "class_goog_testing_fs_File.html",
		"namespace": false,
		"interface": false,
		"members": ["lastModifiedDate", "name"]
	}, {
		"name": "goog.testing.fs.FileEntry",
		"href": "class_goog_testing_fs_FileEntry.html",
		"namespace": false,
		"interface": false,
		"members": ["createWriter", "file", "fileSync"]
	}, {
		"name": "goog.testing.fs.FileReader",
		"href": "class_goog_testing_fs_FileReader.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getError", "getReadyState", "getResult", "readAsArrayBuffer", "readAsBinaryString", "readAsDataUrl", "readAsText"]
	}, {
		"name": "goog.testing.fs.FileReader.ReturnType",
		"href": "enum_goog_testing_fs_FileReader_ReturnType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.fs.FileSystem",
		"href": "class_goog_testing_fs_FileSystem.html",
		"namespace": false,
		"interface": false,
		"members": ["getName", "getRoot"]
	}, {
		"name": "goog.testing.fs.FileWriter",
		"href": "class_goog_testing_fs_FileWriter.html",
		"namespace": false,
		"interface": false,
		"members": ["abort", "getError", "getLength", "getPosition", "getReadyState", "seek", "truncate", "write"]
	}, {
		"name": "goog.testing.fs.ProgressEvent",
		"href": "class_goog_testing_fs_ProgressEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["getLoaded", "getTotal", "isLengthComputable"]
	}, {
		"name": "goog.testing.graphics",
		"href": "namespace_goog_testing_graphics.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertPathEquals"]
	}, {
		"name": "goog.testing.i18n.asserts",
		"href": "namespace_goog_testing_i18n_asserts.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertI18nEquals"]
	}, {
		"name": "goog.testing.jsunit",
		"href": "namespace_goog_testing_jsunit.html",
		"namespace": true,
		"interface": false,
		"statics": ["AUTO_RUN_DELAY_IN_MS", "AUTO_RUN_ONLOAD", "BASE_PATH", "CORE_SCRIPT"]
	}, {
		"name": "goog.testing.messaging",
		"href": "namespace_goog_testing_messaging.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.messaging.MockMessageChannel",
		"href": "class_goog_testing_messaging_MockMessageChannel.html",
		"namespace": false,
		"interface": false,
		"members": ["dispose", "disposed", "receive", "send"]
	}, {
		"name": "goog.testing.messaging.MockMessageEvent",
		"href": "class_goog_testing_messaging_MockMessageEvent.html",
		"namespace": false,
		"interface": false,
		"statics": ["MockMessageEvent.wrap"],
		"members": ["data", "lastEventId", "origin", "ports", "source"]
	}, {
		"name": "goog.testing.messaging.MockMessagePort",
		"href": "class_goog_testing_messaging_MockMessagePort.html",
		"namespace": false,
		"interface": false,
		"members": ["close", "closed", "id", "postMessage", "start", "started"]
	}, {
		"name": "goog.testing.messaging.MockPortNetwork",
		"href": "class_goog_testing_messaging_MockPortNetwork.html",
		"namespace": false,
		"interface": false,
		"members": ["dial"]
	}, {
		"name": "goog.testing.mockmatchers",
		"href": "namespace_goog_testing_mockmatchers.html",
		"namespace": true,
		"interface": false,
		"statics": ["flexibleArrayMatcher", "ignoreArgument", "isArray", "isArrayLike", "isBoolean", "isDateLike", "isFunction", "isNodeLike", "isNumber", "isObject", "isString"]
	}, {
		"name": "goog.testing.mockmatchers.ArgumentMatcher",
		"href": "class_goog_testing_mockmatchers_ArgumentMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["matches"]
	}, {
		"name": "goog.testing.mockmatchers.IgnoreArgument",
		"href": "class_goog_testing_mockmatchers_IgnoreArgument.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.mockmatchers.InstanceOf",
		"href": "class_goog_testing_mockmatchers_InstanceOf.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.mockmatchers.ObjectEquals",
		"href": "class_goog_testing_mockmatchers_ObjectEquals.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.mockmatchers.RegexpMatch",
		"href": "class_goog_testing_mockmatchers_RegexpMatch.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.mockmatchers.SaveArgument",
		"href": "class_goog_testing_mockmatchers_SaveArgument.html",
		"namespace": false,
		"interface": false,
		"members": ["arg"]
	}, {
		"name": "goog.testing.mockmatchers.TypeOf",
		"href": "class_goog_testing_mockmatchers_TypeOf.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.net",
		"href": "namespace_goog_testing_net.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.net.XhrIo",
		"href": "class_goog_testing_net_XhrIo.html",
		"namespace": false,
		"interface": false,
		"statics": ["XhrIo.cleanup", "XhrIo.getSendInstances", "XhrIo.send"],
		"members": ["abort", "createXhr", "getAllResponseHeaders", "getLastContent", "getLastError", "getLastErrorCode", "getLastMethod", "getLastRequestHeaders", "getLastUri", "getProgressEventsEnabled", "getReadyState", "getResponse", "getResponseBody", "getResponseHeader", "getResponseHeaders", "getResponseJson", "getResponseText", "getResponseType", "getResponseXml", "getStatus", "getStatusText", "getTimeoutInterval", "getWithCredentials", "headers", "isActive", "isComplete", "isSuccess", "send", "setProgressEventsEnabled", "setResponseType", "setTimeoutInterval", "setWithCredentials", "simulatePartialResponse", "simulateProgress", "simulateReady", "simulateReadyStateChange", "simulateResponse", "simulateTimeout"]
	}, {
		"name": "goog.testing.net.XhrIo.ResponseType",
		"href": "enum_goog_testing_net_XhrIo_ResponseType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.net.XhrIoPool",
		"href": "class_goog_testing_net_XhrIoPool.html",
		"namespace": false,
		"interface": false,
		"members": ["getXhr"]
	}, {
		"name": "goog.testing.proto2",
		"href": "namespace_goog_testing_proto2.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertEquals", "fromObject"]
	}, {
		"name": "goog.testing.singleton",
		"href": "namespace_goog_testing_singleton.html",
		"namespace": true,
		"interface": false,
		"statics": ["addSingletonGetter", "reset"]
	}, {
		"name": "goog.testing.stacktrace",
		"href": "namespace_goog_testing_stacktrace.html",
		"namespace": true,
		"interface": false,
		"statics": ["canonicalize", "get", "setDeobfuscateFunctionName"]
	}, {
		"name": "goog.testing.stacktrace.Frame",
		"href": "class_goog_testing_stacktrace_Frame.html",
		"namespace": false,
		"interface": false,
		"members": ["alias_", "args_", "context_", "getName", "isAnonymous", "name_", "path_", "toCanonicalString"]
	}, {
		"name": "goog.testing.storage",
		"href": "namespace_goog_testing_storage.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.storage.FakeMechanism",
		"href": "class_goog_testing_storage_FakeMechanism.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.testing.style",
		"href": "namespace_goog_testing_style.html",
		"namespace": true,
		"interface": false,
		"statics": ["hasVisibleDimensions", "intersects", "isOnScreen", "isVisible"]
	}, {
		"name": "goog.testing.style.layoutasserts",
		"href": "namespace_goog_testing_style_layoutasserts.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.ui",
		"href": "namespace_goog_testing_ui.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.testing.ui.RendererHarness",
		"href": "class_goog_testing_ui_RendererHarness.html",
		"namespace": false,
		"interface": false,
		"members": ["assertDomMatches", "attachControlAndDecorate", "attachControlAndRender", "disposeInternal"]
	}, {
		"name": "goog.testing.ui.rendererasserts",
		"href": "namespace_goog_testing_ui_rendererasserts.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertNoGetCssClassCallsInConstructor"]
	}, {
		"name": "goog.testing.ui.style",
		"href": "namespace_goog_testing_ui_style.html",
		"namespace": true,
		"interface": false,
		"statics": ["assertStructureMatchesReference", "getElementChildren", "getReferenceNode", "isContentNode", "writeReferenceFrame"]
	}, {
		"name": "goog.testing.watchers",
		"href": "namespace_goog_testing_watchers.html",
		"namespace": true,
		"interface": false,
		"statics": ["signalClockReset", "watchClockReset"]
	}, {
		"name": "goog.text",
		"href": "namespace_goog_text.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.text.LoremIpsum",
		"href": "class_goog_text_LoremIpsum.html",
		"namespace": false,
		"interface": false,
		"statics": ["LoremIpsum.chooseClosest"],
		"members": ["generateParagraph", "generateSentence", "starts_"]
	}, {
		"name": "goog.tweak",
		"href": "namespace_goog_tweak.html",
		"namespace": true,
		"interface": false,
		"statics": ["beginBooleanGroup", "endBooleanGroup", "getBoolean", "getNumber", "getRegistry", "getString", "overrideDefaultValue", "registerBoolean", "registerButton", "registerNumber", "registerString"]
	}, {
		"name": "goog.tweak.ConfigParams",
		"href": "namespace_goog_tweak.html#tweak.ConfigParams"
	}, {
		"name": "goog.tweak.BaseEntry",
		"href": "class_goog_tweak_BaseEntry.html",
		"namespace": false,
		"interface": false,
		"members": ["addCallback", "description", "fireCallbacks", "getId", "isRestartRequired", "label", "logger", "removeCallback", "setRestartRequired"]
	}, {
		"name": "goog.tweak.BasePrimitiveSetting",
		"href": "class_goog_tweak_BasePrimitiveSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["encodeNewValue", "getDefaultValue", "getNewValue", "getValue", "logger", "setDefaultValue", "setValue"]
	}, {
		"name": "goog.tweak.BaseSetting",
		"href": "class_goog_tweak_BaseSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["assertNotInitialized", "ensureInitialized", "getNewValueEncoded", "getParamName", "initialQueryParamValue", "initialize", "isInitializing", "logger", "setInitialQueryParamValue", "setParamName"]
	}, {
		"name": "goog.tweak.BaseSetting.InitializeState_",
		"href": "enum_goog_tweak_BaseSetting_InitializeState_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.tweak.BooleanGroup",
		"href": "class_goog_tweak_BooleanGroup.html",
		"namespace": false,
		"interface": false,
		"members": ["addChild", "getChildEntries", "logger"]
	}, {
		"name": "goog.tweak.BooleanInGroupSetting",
		"href": "class_goog_tweak_BooleanInGroupSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["getGroup", "getToken", "logger", "setToken"]
	}, {
		"name": "goog.tweak.BooleanSetting",
		"href": "class_goog_tweak_BooleanSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["logger"]
	}, {
		"name": "goog.tweak.ButtonAction",
		"href": "class_goog_tweak_ButtonAction.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.tweak.EntriesPanel",
		"href": "class_goog_tweak_EntriesPanel.html",
		"namespace": false,
		"interface": false,
		"members": ["childPanels", "getRootElement", "insertEntry", "render", "toggleAllDescriptions"]
	}, {
		"name": "goog.tweak.NamespaceEntry_",
		"href": "class_goog_tweak_NamespaceEntry_.html",
		"namespace": false,
		"interface": false,
		"statics": ["NamespaceEntry_.ID_PREFIX"],
		"members": ["entries"]
	}, {
		"name": "goog.tweak.NumericSetting",
		"href": "class_goog_tweak_NumericSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["getValidValues", "logger", "setValidValues", "validValues_"]
	}, {
		"name": "goog.tweak.Registry",
		"href": "class_goog_tweak_Registry.html",
		"namespace": false,
		"interface": false,
		"statics": ["Registry.parseQueryParams"],
		"members": ["addOnRegisterListener", "extractEntries", "getBooleanSetting", "getEntry", "getNumericSetting", "getStringSetting", "hasEntry", "makeUrlQuery", "overrideDefaultValue", "register"]
	}, {
		"name": "goog.tweak.StringSetting",
		"href": "class_goog_tweak_StringSetting.html",
		"namespace": false,
		"interface": false,
		"members": ["getValidValues", "logger", "setValidValues", "validValues_"]
	}, {
		"name": "goog.tweak.TweakUi",
		"href": "class_goog_tweak_TweakUi.html",
		"namespace": false,
		"interface": false,
		"statics": ["TweakUi.create", "TweakUi.createCollapsible"],
		"members": ["getRootElement", "render"]
	}, {
		"name": "goog.ui",
		"href": "namespace_goog_ui.html",
		"namespace": true,
		"interface": false,
		"statics": ["INLINE_BLOCK_CLASSNAME"]
	}, {
		"name": "goog.ui.ControlContent",
		"href": "namespace_goog_ui.html#ui.ControlContent"
	}, {
		"name": "goog.ui.AbstractSpellChecker",
		"href": "class_goog_ui_AbstractSpellChecker.html",
		"namespace": false,
		"interface": false,
		"members": ["blockReadyEvents", "check", "clearWordElements", "continueAsyncProcessing", "createWordElement", "excludeMarker", "finishAsyncProcessing", "focusOnElement", "getElementByIndex", "getElementProperties", "getFocusedElementIndex", "getLastIndex", "getMenu", "getMenuEdit", "getNextIndex", "getSpellCheck", "ignoreWord", "initSuggestionsMenu", "initializeAsyncMode", "isVisible", "makeElementId", "markCorrected", "navigate", "onCorrectionAction", "populateDictionary", "processRange", "processTextAsync", "processWord", "registerWordElement", "removeMarkup", "replaceWord", "resume", "setExcludeMarker", "setFocusedElementIndex", "setHandler", "setSpellCheck", "showSuggestionsMenu", "spellCheck", "suggestionsMenuClassName", "unblockReadyEvents", "updateElement"]
	}, {
		"name": "goog.ui.AbstractSpellChecker.AsyncResult",
		"href": "enum_goog_ui_AbstractSpellChecker_AsyncResult.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.AbstractSpellChecker.Direction",
		"href": "enum_goog_ui_AbstractSpellChecker_Direction.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ActivityMonitor",
		"href": "class_goog_ui_ActivityMonitor.html",
		"namespace": false,
		"interface": false,
		"statics": ["ActivityMonitor.MIN_EVENT_SPACING"],
		"members": ["addDocument", "getIdleTime", "getLastEventTime", "getLastEventType", "removeDocument", "resetTimer", "updateIdleTime"]
	}, {
		"name": "goog.ui.ActivityMonitor.Event",
		"href": "enum_goog_ui_ActivityMonitor_Event.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.AdvancedTooltip",
		"href": "class_goog_ui_AdvancedTooltip.html",
		"namespace": false,
		"interface": false,
		"members": ["getCursorTracking", "getCursorTrackingHideDelayMs", "getHideDelayMs", "getHotSpotPadding", "handleMouseMove", "handleTooltipMouseOver", "isCoordinateInTooltip", "isMouseInTooltip", "maybeHide", "onHide_", "onShow_", "resetHotSpot", "setCursorTracking", "setCursorTrackingHideDelayMs", "setHotSpotPadding"]
	}, {
		"name": "goog.ui.AnimatedZippy",
		"href": "class_goog_ui_AnimatedZippy.html",
		"namespace": false,
		"interface": false,
		"members": ["animationAcceleration", "animationDuration", "isBusy", "setExpanded"]
	}, {
		"name": "goog.ui.AttachableMenu",
		"href": "class_goog_ui_AttachableMenu.html",
		"namespace": false,
		"interface": false,
		"members": ["getItemClassName", "getNextPrevItem", "getSelectedItem", "getSelectedItemClassName", "onKeyDown", "onMouseDown", "onMouseOut", "onMouseOver", "onMouseUp", "onShow_", "setItemClassName", "setSelectedItemClassName"]
	}, {
		"name": "goog.ui.BaseRoundedPanel",
		"href": "class_goog_ui_BaseRoundedPanel.html",
		"namespace": false,
		"interface": false,
		"members": ["decorateInternal", "getContentElement"]
	}, {
		"name": "goog.ui.BidiInput",
		"href": "class_goog_ui_BidiInput.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "decorateInternal", "getDirection", "getValue", "setValue"]
	}, {
		"name": "goog.ui.Bubble",
		"href": "class_goog_ui_Bubble.html",
		"namespace": false,
		"interface": false,
		"statics": ["Bubble.defaultConfig"],
		"members": ["attach", "getComputedAnchoredPosition", "isVisible", "setAutoHide", "setPinnedCorner", "setPosition", "setTimeout", "setVisible"]
	}, {
		"name": "goog.ui.Button",
		"href": "class_goog_ui_Button.html",
		"namespace": false,
		"interface": false,
		"members": ["getTooltip", "getValue", "handleKeyEventInternal", "setCollapsed", "setTooltip", "setTooltipInternal", "setValue", "setValueInternal"]
	}, {
		"name": "goog.ui.Button.Side",
		"href": "enum_goog_ui_Button_Side.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ButtonRenderer",
		"href": "class_goog_ui_ButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ButtonRenderer.CSS_CLASS", "ButtonRenderer.getInstance"],
		"members": ["getAriaRole", "getTooltip", "getValue", "setCollapsed", "setTooltip", "setValue", "updateAriaState"]
	}, {
		"name": "goog.ui.ButtonSide",
		"href": "enum_goog_ui_ButtonSide.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.CharCounter",
		"href": "class_goog_ui_CharCounter.html",
		"namespace": false,
		"interface": false,
		"members": ["checkLength", "getDisplayMode", "getMaxLength", "setDisplayMode", "setMaxLength"]
	}, {
		"name": "goog.ui.CharCounter.Display",
		"href": "enum_goog_ui_CharCounter_Display.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.CharPicker",
		"href": "class_goog_ui_CharPicker.html",
		"namespace": false,
		"interface": false,
		"members": ["category", "getInputChar", "getRecentChars", "getSelectedChar", "itempos", "items"]
	}, {
		"name": "goog.ui.CheckBoxMenuItem",
		"href": "class_goog_ui_CheckBoxMenuItem.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Checkbox",
		"href": "class_goog_ui_Checkbox.html",
		"namespace": false,
		"interface": false,
		"members": ["getChecked", "isUnchecked", "isUndetermined", "setChecked", "setCheckedInternal", "setEnabled", "setLabel", "toggle"]
	}, {
		"name": "goog.ui.Checkbox.State",
		"href": "enum_goog_ui_Checkbox_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.CheckboxRenderer",
		"href": "class_goog_ui_CheckboxRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["CheckboxRenderer.CSS_CLASS", "CheckboxRenderer.getInstance"],
		"members": ["getAriaRole", "getClassForCheckboxState", "setCheckboxState"]
	}, {
		"name": "goog.ui.ColorButton",
		"href": "class_goog_ui_ColorButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ColorButtonRenderer",
		"href": "class_goog_ui_ColorButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ColorButtonRenderer.CSS_CLASS", "ColorButtonRenderer.getInstance"]
	}, {
		"name": "goog.ui.ColorMenuButton",
		"href": "class_goog_ui_ColorMenuButton.html",
		"namespace": false,
		"interface": false,
		"statics": ["ColorMenuButton.NO_COLOR", "ColorMenuButton.PALETTES", "ColorMenuButton.newColorMenu"],
		"members": ["getSelectedColor", "handleMenuAction", "setOpen", "setSelectedColor", "setValue"]
	}, {
		"name": "goog.ui.ColorMenuButtonRenderer",
		"href": "class_goog_ui_ColorMenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ColorMenuButtonRenderer.CSS_CLASS", "ColorMenuButtonRenderer.getInstance", "ColorMenuButtonRenderer.setCaptionValue", "ColorMenuButtonRenderer.wrapCaption"],
		"members": ["createCaption", "initializeDom", "setValue"]
	}, {
		"name": "goog.ui.ColorPalette",
		"href": "class_goog_ui_ColorPalette.html",
		"namespace": false,
		"interface": false,
		"members": ["createColorNodes", "getColors", "getSelectedColor", "setColors", "setSelectedColor"]
	}, {
		"name": "goog.ui.ColorPicker",
		"href": "class_goog_ui_ColorPicker.html",
		"namespace": false,
		"interface": false,
		"statics": ["ColorPicker.DEFAULT_NUM_COLS", "ColorPicker.SIMPLE_GRID_COLORS", "ColorPicker.createSimpleColorGrid"],
		"members": ["addColors", "canDecorate", "enterDocument", "focus", "getColors", "getSelectedColor", "getSelectedIndex", "getSize", "isFocusable", "setColors", "setColumnCount", "setFocusable", "setSelectedColor", "setSelectedIndex", "setSize"]
	}, {
		"name": "goog.ui.ColorPicker.EventType",
		"href": "enum_goog_ui_ColorPicker_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ColorSplitBehavior",
		"href": "class_goog_ui_ColorSplitBehavior.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ComboBox",
		"href": "class_goog_ui_ComboBox.html",
		"namespace": false,
		"interface": false,
		"statics": ["ComboBox.BLUR_DISMISS_TIMER_MS"],
		"members": ["addItem", "addItemAt", "canDecorate", "createDom", "dismiss", "getDefaultText", "getFieldName", "getInputElement", "getItemAt", "getItemCount", "getLabelInput", "getMatchFunction", "getMenu", "getToken", "getValue", "handleKeyEvent", "isEnabled", "positionMenu", "removeAllItems", "removeItem", "removeItemAt", "setDefaultText", "setEnabled", "setFieldName", "setMatchFunction", "setUseDropdownArrow", "setValue"]
	}, {
		"name": "goog.ui.ComboBoxItem",
		"href": "class_goog_ui_ComboBoxItem.html",
		"namespace": false,
		"interface": false,
		"members": ["isSticky", "setFormatFromToken", "setSticky"]
	}, {
		"name": "goog.ui.Component",
		"href": "class_goog_ui_Component.html",
		"namespace": false,
		"interface": false,
		"statics": ["Component.ALLOW_DETACHED_DECORATION", "Component.DEFAULT_BIDI_DIR", "Component.getStateTransitionEvent", "Component.setDefaultRightToLeft"],
		"members": ["addChild", "addChildAt", "canDecorate", "createDom", "decorate", "decorateInternal", "disposeInternal", "dom_", "enterDocument", "exitDocument", "forEachChild", "getChild", "getChildAt", "getChildCount", "getChildIds", "getContentElement", "getDomHelper", "getElement", "getElementByClass", "getElementByFragment", "getElementStrict", "getElementsByClass", "getFragmentFromId", "getHandler", "getId", "getModel", "getParent", "getRequiredElementByClass", "hasChildren", "indexOfChild", "isInDocument", "isRightToLeft", "makeId", "makeIds", "removeChild", "removeChildAt", "removeChildren", "render", "renderBefore", "setElementInternal", "setId", "setModel", "setParent", "setParentEventTarget", "setRightToLeft", "wasDecorated"]
	}, {
		"name": "goog.ui.Component.Error",
		"href": "enum_goog_ui_Component_Error.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Component.EventType",
		"href": "enum_goog_ui_Component_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Component.State",
		"href": "enum_goog_ui_Component_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Container",
		"href": "class_goog_ui_Container.html",
		"namespace": false,
		"interface": false,
		"members": ["addChild", "addChildAt", "canDecorate", "canHighlightItem", "createDom", "decorateInternal", "enterDocument", "exitDocument", "getChild", "getChildAt", "getContentElement", "getHighlighted", "getHighlightedIndex", "getKeyEventTarget", "getKeyHandler", "getOpenItem", "getOrientation", "getOwnerControl", "getRenderer", "handleBlur", "handleChildMouseEvents", "handleCloseItem", "handleDocumentMouseUp", "handleEnterItem", "handleFocus", "handleHighlightItem", "handleKeyEvent", "handleKeyEventInternal", "handleMouseDown", "handleOpenItem", "handleUnHighlightItem", "highlightFirst", "highlightHelper", "highlightLast", "highlightNext", "highlightPrevious", "isEnabled", "isFocusable", "isFocusableChildrenAllowed", "isMouseButtonPressed", "isOpenFollowsHighlight", "isVisible", "removeChild", "setEnabled", "setFocusable", "setFocusableChildrenAllowed", "setHighlighted", "setHighlightedIndex", "setHighlightedIndexFromKeyEvent", "setKeyEventTarget", "setMouseButtonPressed", "setOpenFollowsHighlight", "setOrientation", "setRenderer", "setVisible"]
	}, {
		"name": "goog.ui.Container.EventType",
		"href": "enum_goog_ui_Container_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Container.Orientation",
		"href": "enum_goog_ui_Container_Orientation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ContainerRenderer",
		"href": "class_goog_ui_ContainerRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ContainerRenderer.CSS_CLASS", "ContainerRenderer.getCustomRenderer", "ContainerRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "decorate", "decorateChildren", "enableTabIndex", "getAriaRole", "getClassNames", "getContentElement", "getCssClass", "getDecoratorForChild", "getDefaultOrientation", "getKeyEventTarget", "initializeDom", "setStateFromClassName"]
	}, {
		"name": "goog.ui.ContainerScroller",
		"href": "class_goog_ui_ContainerScroller.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Control",
		"href": "class_goog_ui_Control.html",
		"namespace": false,
		"interface": false,
		"statics": ["Control.decorate", "Control.getDecorator", "Control.registerDecorator"],
		"members": ["addClassName", "canDecorate", "createDom", "decorateInternal", "enableClassName", "enterDocument", "exitDocument", "getAriaLabel", "getCaption", "getContent", "getContentElement", "getExtraClassNames", "getKeyEventTarget", "getKeyHandler", "getPreferredAriaRole", "getRenderer", "getState", "handleBlur", "handleContextMenu", "handleDblClick", "handleFocus", "handleKeyEvent", "handleKeyEventInternal", "handleMouseDown", "handleMouseOut", "handleMouseOver", "handleMouseUp", "hasState", "isActive", "isAllowTextSelection", "isAutoState", "isChecked", "isDispatchTransitionEvents", "isEnabled", "isFocused", "isHandleMouseEvents", "isHighlighted", "isOpen", "isSelected", "isSupportedState", "isTransitionAllowed", "isVisible", "performActionInternal", "removeClassName", "setActive", "setAllowTextSelection", "setAriaLabel", "setAutoStates", "setCaption", "setChecked", "setContent", "setContentInternal", "setDispatchTransitionEvents", "setEnabled", "setFocused", "setHandleMouseEvents", "setHighlighted", "setOpen", "setPreferredAriaRole", "setRenderer", "setSelected", "setState", "setStateInternal", "setSupportedState", "setVisible"]
	}, {
		"name": "goog.ui.Control.IeMouseEventSequenceSimulator_",
		"href": "class_goog_ui_Control_IeMouseEventSequenceSimulator_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ControlRenderer",
		"href": "class_goog_ui_ControlRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ControlRenderer.CSS_CLASS", "ControlRenderer.IE6_CLASS_COMBINATIONS", "ControlRenderer.getCustomRenderer", "ControlRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "decorate", "enableClassName", "enableExtraClassName", "getAriaRole", "getClassForState", "getClassNames", "getClassNamesForState", "getContentElement", "getCssClass", "getIe6ClassCombinations", "getKeyEventTarget", "getStateFromClass", "getStructuralCssClass", "initializeDom", "isFocusable", "setAllowTextSelection", "setAriaLabel", "setAriaRole", "setAriaStates", "setContent", "setFocusable", "setRightToLeft", "setState", "setVisible", "updateAriaState"]
	}, {
		"name": "goog.ui.CookieEditor",
		"href": "class_goog_ui_CookieEditor.html",
		"namespace": false,
		"interface": false,
		"members": ["selectCookie"]
	}, {
		"name": "goog.ui.Css3ButtonRenderer",
		"href": "class_goog_ui_Css3ButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Css3ButtonRenderer.CSS_CLASS", "Css3ButtonRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "getCssClass"]
	}, {
		"name": "goog.ui.Css3MenuButtonRenderer",
		"href": "class_goog_ui_Css3MenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Css3MenuButtonRenderer.CSS_CLASS", "Css3MenuButtonRenderer.getInstance"],
		"members": ["canDecorate", "createButton", "getCssClass"]
	}, {
		"name": "goog.ui.CssRoundedPanel",
		"href": "class_goog_ui_CssRoundedPanel.html",
		"namespace": false,
		"interface": false,
		"members": ["decorateInternal"]
	}, {
		"name": "goog.ui.CustomButton",
		"href": "class_goog_ui_CustomButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.CustomButtonRenderer",
		"href": "class_goog_ui_CustomButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["CustomButtonRenderer.CSS_CLASS", "CustomButtonRenderer.getInstance"],
		"members": ["canDecorate", "createButton", "createDom", "decorate", "getAriaRole", "getContentElement", "getCssClass", "hasBoxStructure"]
	}, {
		"name": "goog.ui.CustomColorPalette",
		"href": "class_goog_ui_CustomColorPalette.html",
		"namespace": false,
		"interface": false,
		"members": ["createColorNodes", "promptForCustomColor"]
	}, {
		"name": "goog.ui.DatePicker",
		"href": "class_goog_ui_DatePicker.html",
		"namespace": false,
		"interface": false,
		"members": ["create", "getActiveMonth", "getAllowNone", "getBaseCssClass", "getDate", "getDateAt", "getDateElementAt", "getExtraWeekAtEnd", "getFirstWeekday", "getShowFixedNumWeeks", "getShowOtherMonths", "getShowToday", "getShowWeekNum", "getShowWeekdayNames", "getWeekdayClass", "i18nDateFormatterDay2_", "i18nDateFormatterDay_", "i18nDateFormatterMonthYear_", "i18nDateFormatterWeek_", "i18nDateFormatterYear_", "isCreated", "nextMonth", "nextYear", "previousMonth", "previousYear", "selectNone", "selectToday", "setAllowNone", "setDate", "setDecorator", "setExtraWeekAtEnd", "setFirstWeekday", "setLongDateFormat", "setShowFixedNumWeeks", "setShowOtherMonths", "setShowToday", "setShowWeekNum", "setShowWeekdayNames", "setUseNarrowWeekdayNames", "setUseSimpleNavigationMenu", "setUserSelectableDateRange", "setWeekdayClass", "tableBody_", "wdayNames_"]
	}, {
		"name": "goog.ui.DatePicker.Events",
		"href": "namespace_goog_ui_DatePicker_Events.html",
		"namespace": true,
		"interface": false,
		"statics": ["CHANGE", "CHANGE_ACTIVE_MONTH", "SELECT"]
	}, {
		"name": "goog.ui.DatePickerEvent",
		"href": "class_goog_ui_DatePickerEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["date"]
	}, {
		"name": "goog.ui.DatePickerRenderer",
		"href": "interface_goog_ui_DatePickerRenderer.html",
		"namespace": true,
		"interface": true,
		"members": ["renderFooterRow", "renderNavigationRow"]
	}, {
		"name": "goog.ui.DefaultDatePickerRenderer",
		"href": "class_goog_ui_DefaultDatePickerRenderer.html",
		"namespace": false,
		"interface": false,
		"members": ["getBaseCssClass", "getDomHelper", "renderFooterRow", "renderNavigationRow"]
	}, {
		"name": "goog.ui.Dialog",
		"href": "class_goog_ui_Dialog.html",
		"namespace": false,
		"interface": false,
		"statics": ["Dialog.SELECT_EVENT"],
		"members": ["createDragger", "getBackgroundElement", "getBackgroundElementOpacity", "getButtonElement", "getButtonSet", "getClass", "getContent", "getContentElement", "getDialogElement", "getDisposeOnHide", "getDraggable", "getHasTitleCloseButton", "getModal", "getPreferredAriaRole", "getSafeHtmlContent", "getTitle", "getTitleCloseElement", "getTitleElement", "getTitleTextElement", "isEscapeToCancel", "setBackgroundElementOpacity", "setButtonSet", "setContent", "setDisposeOnHide", "setDraggable", "setEscapeToCancel", "setHasTitleCloseButton", "setModal", "setPreferredAriaRole", "setSafeHtmlContent", "setTitle", "setVisible"]
	}, {
		"name": "goog.ui.Dialog.ButtonSet",
		"href": "class_goog_ui_Dialog_ButtonSet.html",
		"namespace": false,
		"interface": false,
		"statics": ["ButtonSet.CONTINUE_SAVE_CANCEL", "ButtonSet.OK", "ButtonSet.OK_CANCEL", "ButtonSet.YES_NO", "ButtonSet.YES_NO_CANCEL", "ButtonSet.createContinueSaveCancel", "ButtonSet.createOk", "ButtonSet.createOkCancel", "ButtonSet.createYesNo", "ButtonSet.createYesNoCancel"],
		"members": ["addButton", "attachToElement", "decorate", "dom_", "getAllButtons", "getButton", "getCancel", "getDefault", "getDomHelper", "getElement", "render", "set", "setAllButtonsEnabled", "setButtonEnabled", "setCancel", "setDefault"]
	}, {
		"name": "goog.ui.Dialog.ButtonSet.DefaultButtons",
		"href": "enum_goog_ui_Dialog_ButtonSet_DefaultButtons.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Dialog.DefaultButtonCaptions",
		"href": "enum_goog_ui_Dialog_DefaultButtonCaptions.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Dialog.DefaultButtonKeys",
		"href": "enum_goog_ui_Dialog_DefaultButtonKeys.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Dialog.Event",
		"href": "class_goog_ui_Dialog_Event.html",
		"namespace": false,
		"interface": false,
		"members": ["caption", "key"]
	}, {
		"name": "goog.ui.Dialog.EventType",
		"href": "enum_goog_ui_Dialog_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.DimensionPicker",
		"href": "class_goog_ui_DimensionPicker.html",
		"namespace": false,
		"interface": false,
		"members": ["getSize", "getValue", "handleKeyEvent", "handleMouseMove", "handleWindowResize", "maxColumns", "maxRows", "minColumns", "minRows", "setValue"]
	}, {
		"name": "goog.ui.DimensionPickerRenderer",
		"href": "class_goog_ui_DimensionPickerRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["DimensionPickerRenderer.CSS_CLASS", "DimensionPickerRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "decorate", "getCssClass", "getGridOffsetX", "getGridOffsetY", "getMouseMoveElement", "initializeDom", "positionMouseCatcher", "setHighlightedSize", "updateSize"]
	}, {
		"name": "goog.ui.DragDropDetector",
		"href": "class_goog_ui_DragDropDetector.html",
		"namespace": false,
		"interface": false,
		"statics": ["DragDropDetector.INIT_POSITION", "DragDropDetector.MSG_DRAG_DROP_LOCAL_FILE_ERROR", "DragDropDetector.MSG_DRAG_DROP_PROTECTED_FILE_ERROR"]
	}, {
		"name": "goog.ui.DragDropDetector.EventType",
		"href": "enum_goog_ui_DragDropDetector_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.DragDropDetector.ImageDropEvent",
		"href": "class_goog_ui_DragDropDetector_ImageDropEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["getPosition", "getUrl"]
	}, {
		"name": "goog.ui.DragDropDetector.LinkDropEvent",
		"href": "class_goog_ui_DragDropDetector_LinkDropEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["getUrl"]
	}, {
		"name": "goog.ui.DrilldownRow",
		"href": "class_goog_ui_DrilldownRow.html",
		"namespace": false,
		"interface": false,
		"statics": ["DrilldownRow.decorate", "DrilldownRow.sampleProperties", "DrilldownRow.unsafeCreate"],
		"members": ["addChildAt", "canDecorate", "enterDocument", "findIndex", "getDepth", "isExpanded", "render", "setExpanded"]
	}, {
		"name": "goog.ui.DrilldownRow.DrilldownRowProperties",
		"href": "class_goog_ui_DrilldownRow.html#DrilldownRow.DrilldownRowProperties"
	}, {
		"name": "goog.ui.DrilldownRow.DrilldownRowPropertiesUnsafe",
		"href": "class_goog_ui_DrilldownRow.html#DrilldownRow.DrilldownRowPropertiesUnsafe"
	}, {
		"name": "goog.ui.FilterObservingMenuItem",
		"href": "class_goog_ui_FilterObservingMenuItem.html",
		"namespace": false,
		"interface": false,
		"members": ["callObserver", "setObserver"]
	}, {
		"name": "goog.ui.FilterObservingMenuItemRenderer",
		"href": "class_goog_ui_FilterObservingMenuItemRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["FilterObservingMenuItemRenderer.CSS_CLASS", "FilterObservingMenuItemRenderer.getInstance"],
		"members": ["getCssClass"]
	}, {
		"name": "goog.ui.FilteredMenu",
		"href": "class_goog_ui_FilteredMenu.html",
		"namespace": false,
		"interface": false,
		"members": ["getAllowMultiple", "getEnteredItems", "getFilter", "getFilterFromIndex", "getFilterInputElement", "getFilterLabel", "handleFilterEvent", "handleKeyEventInternal", "hasPersistentVisibility", "setAllowMultiple", "setFilter", "setFilterFromIndex", "setFilterLabel", "setHighlightedIndex", "setPersistentVisibility"]
	}, {
		"name": "goog.ui.FilteredMenu.EventType",
		"href": "enum_goog_ui_FilteredMenu_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.FilteredMenu.Id_",
		"href": "enum_goog_ui_FilteredMenu_Id_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.FlatButtonRenderer",
		"href": "class_goog_ui_FlatButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["FlatButtonRenderer.CSS_CLASS", "FlatButtonRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "decorate", "getAriaRole", "getCssClass", "getValue"]
	}, {
		"name": "goog.ui.FlatMenuButtonRenderer",
		"href": "class_goog_ui_FlatMenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["FlatMenuButtonRenderer.CSS_CLASS", "FlatMenuButtonRenderer.getInstance"],
		"members": ["createCaption", "createDom", "createDropdown", "decorate", "getContentElement", "getCssClass"]
	}, {
		"name": "goog.ui.FormPost",
		"href": "class_goog_ui_FormPost.html",
		"namespace": false,
		"interface": false,
		"members": ["post"]
	}, {
		"name": "goog.ui.Gauge",
		"href": "class_goog_ui_Gauge.html",
		"namespace": false,
		"interface": false,
		"statics": ["Gauge.FACTOR_COLOR_RADIUS", "Gauge.FACTOR_MAIN_AREA", "Gauge.FACTOR_MAJOR_TICKS", "Gauge.FACTOR_MINOR_TICKS", "Gauge.FACTOR_NEEDLE_BACK", "Gauge.FACTOR_NEEDLE_FRONT", "Gauge.FACTOR_NEEDLE_HINGE", "Gauge.FACTOR_NEEDLE_WIDTH", "Gauge.FACTOR_RADIUS_FROM_SIZE", "Gauge.FACTOR_TICK_LABEL_FONT_SIZE", "Gauge.FACTOR_TITLE_FONT_SIZE", "Gauge.FACTOR_TITLE_OFFSET", "Gauge.FACTOR_VALUE_FONT_SIZE", "Gauge.FACTOR_VALUE_OFFSET", "Gauge.GREEN", "Gauge.MAX_EXCEED_POSITION_POSITION", "Gauge.NEEDLE_MOVE_MAX_STEP", "Gauge.NEEDLE_MOVE_TIME", "Gauge.RED", "Gauge.TITLE_FONT_NAME", "Gauge.YELLOW"],
		"members": ["addBackgroundColor", "createDom", "getMaximum", "getMinimum", "redraw", "setMajorTickLabels", "setMaximum", "setMinimum", "setTheme", "setTicks", "setTitleBottom", "setTitleFont", "setTitleTop", "setValue", "setValueFont"]
	}, {
		"name": "goog.ui.GaugeColoredRange",
		"href": "class_goog_ui_GaugeColoredRange.html",
		"namespace": false,
		"interface": false,
		"members": ["backgroundColor", "fromValue", "toValue"]
	}, {
		"name": "goog.ui.GaugeTheme",
		"href": "class_goog_ui_GaugeTheme.html",
		"namespace": false,
		"interface": false,
		"members": ["getExternalBorderFill", "getExternalBorderStroke", "getHingeFill", "getHingeStroke", "getInternalBorderFill", "getInternalBorderStroke", "getMajorTickStroke", "getMinorTickStroke", "getNeedleFill", "getNeedleStroke", "getTickLabelColor", "getTitleColor", "getValueColor"]
	}, {
		"name": "goog.ui.GraphicsRoundedPanel",
		"href": "class_goog_ui_GraphicsRoundedPanel.html",
		"namespace": false,
		"interface": false,
		"members": ["decorateInternal"]
	}, {
		"name": "goog.ui.HoverCard",
		"href": "class_goog_ui_HoverCard.html",
		"namespace": false,
		"interface": false,
		"members": ["cancelTrigger", "getAnchorElement", "handleMouseOutAndBlur", "handleMouseOver", "maybeShow", "onCancelTrigger", "onHide_", "onTrigger", "setMaxSearchSteps", "triggerForElement"]
	}, {
		"name": "goog.ui.HoverCard.EventType",
		"href": "enum_goog_ui_HoverCard_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.HoverCard.TriggerEvent",
		"href": "class_goog_ui_HoverCard_TriggerEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["anchor", "data"]
	}, {
		"name": "goog.ui.HsvPalette",
		"href": "class_goog_ui_HsvPalette.html",
		"namespace": false,
		"interface": false,
		"members": ["canDecorate", "className", "color", "enterDocument", "getAlpha", "getColor", "handleInput", "handleMouseDown", "handleMouseUp", "inputElement", "mouseMoveListener", "mouseUpListener", "setColor", "setColorInternal", "setHsv", "swatchElement", "updateInput", "updateUi", "valueBackgroundImageElement"]
	}, {
		"name": "goog.ui.HsvaPalette",
		"href": "class_goog_ui_HsvaPalette.html",
		"namespace": false,
		"interface": false,
		"members": ["getColorRgbaHex", "setAlpha", "setColor", "setColorRgbaHex"]
	}, {
		"name": "goog.ui.IdGenerator",
		"href": "class_goog_ui_IdGenerator.html",
		"namespace": false,
		"interface": false,
		"statics": ["IdGenerator.getInstance"],
		"members": ["getNextUniqueId"]
	}, {
		"name": "goog.ui.IdleTimer",
		"href": "class_goog_ui_IdleTimer.html",
		"namespace": false,
		"interface": false,
		"members": ["getActivityMonitor", "getIdleThreshold", "isIdle"]
	}, {
		"name": "goog.ui.IdleTimer.Event",
		"href": "enum_goog_ui_IdleTimer_Event.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.IframeMask",
		"href": "class_goog_ui_IframeMask.html",
		"namespace": false,
		"interface": false,
		"members": ["applyMask", "disposeInternal", "hideMask", "listenOnTarget", "removeHandlers", "setOpacity", "setSnapElement", "setZIndex"]
	}, {
		"name": "goog.ui.ImagelessButtonRenderer",
		"href": "class_goog_ui_ImagelessButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ImagelessButtonRenderer.CSS_CLASS", "ImagelessButtonRenderer.getInstance"],
		"members": ["createButton", "getCssClass", "hasBoxStructure"]
	}, {
		"name": "goog.ui.ImagelessMenuButtonRenderer",
		"href": "class_goog_ui_ImagelessMenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ImagelessMenuButtonRenderer.CSS_CLASS", "ImagelessMenuButtonRenderer.getInstance"],
		"members": ["canDecorate", "createButton", "getCssClass", "hasBoxStructure"]
	}, {
		"name": "goog.ui.InputDatePicker",
		"href": "class_goog_ui_InputDatePicker.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "getDate", "getDatePicker", "getInputValue", "getPopupDatePicker", "hidePopup", "setDate", "setInputValue", "setPopupParentElement", "showForElement"]
	}, {
		"name": "goog.ui.ItemEvent",
		"href": "class_goog_ui_ItemEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["item"]
	}, {
		"name": "goog.ui.KeyboardShortcutEvent",
		"href": "class_goog_ui_KeyboardShortcutEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["identifier"]
	}, {
		"name": "goog.ui.KeyboardShortcutHandler",
		"href": "class_goog_ui_KeyboardShortcutHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["KeyboardShortcutHandler.MAX_KEY_SEQUENCE_DELAY", "KeyboardShortcutHandler.getKeyCode", "KeyboardShortcutHandler.parseStringShortcut"],
		"members": ["clearKeyListener", "getAllShortcutsAreGlobal", "getAlwaysPreventDefault", "getAlwaysStopPropagation", "getEventType", "getGlobalKeys", "getModifierShortcutsAreGlobal", "initializeKeyListener", "isShortcutRegistered", "registerShortcut", "setAllShortcutsAreGlobal", "setAllowSpaceKeyOnButtons", "setAlwaysPreventDefault", "setAlwaysStopPropagation", "setGlobalKeys", "setModifierShortcutsAreGlobal", "unregisterAll", "unregisterShortcut"]
	}, {
		"name": "goog.ui.KeyboardShortcutHandler.SequenceTree_",
		"href": "class_goog_ui_KeyboardShortcutHandler.html#KeyboardShortcutHandler.SequenceTree_"
	}, {
		"name": "goog.ui.KeyboardShortcutHandler.EventType",
		"href": "enum_goog_ui_KeyboardShortcutHandler_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.KeyboardShortcutHandler.Modifiers",
		"href": "enum_goog_ui_KeyboardShortcutHandler_Modifiers.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.KeyboardShortcutHandler.SequenceNode_",
		"href": "class_goog_ui_KeyboardShortcutHandler_SequenceNode_.html",
		"namespace": false,
		"interface": false,
		"members": ["next", "shortcut"]
	}, {
		"name": "goog.ui.LabelInput",
		"href": "class_goog_ui_LabelInput.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "createDom", "decorateInternal", "focusAndSelect", "getLabel", "getValue", "hasChanged", "hasFocus", "isEnabled", "labelCssClassName", "labelRestoreDelayMs", "reset", "setEnabled", "setLabel", "setValue"]
	}, {
		"name": "goog.ui.LinkButtonRenderer",
		"href": "class_goog_ui_LinkButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["LinkButtonRenderer.CSS_CLASS", "LinkButtonRenderer.getInstance"]
	}, {
		"name": "goog.ui.Menu",
		"href": "class_goog_ui_Menu.html",
		"namespace": false,
		"interface": false,
		"statics": ["Menu.CSS_CLASS"],
		"members": ["addItem", "addItemAt", "containsElement", "decorateContent", "getAllowAutoFocus", "getAllowHighlightDisabled", "getCssClass", "getItemAt", "getItemCount", "getItems", "getPosition", "highlightNextPrefix", "openingCoords", "removeItem", "removeItemAt", "setAllowAutoFocus", "setAllowHighlightDisabled", "setPosition"]
	}, {
		"name": "goog.ui.Menu.EventType",
		"href": "enum_goog_ui_Menu_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.MenuBarRenderer",
		"href": "class_goog_ui_MenuBarRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuBarRenderer.CSS_CLASS", "MenuBarRenderer.getInstance"],
		"members": ["getDefaultOrientation"]
	}, {
		"name": "goog.ui.MenuBase",
		"href": "class_goog_ui_MenuBase.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuBase.Events"],
		"members": ["getSelectedItem", "onHide_", "onKeyDown", "onMouseDown", "onMouseOut", "onMouseOver", "onMouseUp", "onShow_", "setSelectedItem"]
	}, {
		"name": "goog.ui.MenuButton",
		"href": "class_goog_ui_MenuButton.html",
		"namespace": false,
		"interface": false,
		"members": ["addItem", "addItemAt", "containsElement", "enterDocument", "exitDocument", "getItemAt", "getItemCount", "getMenu", "handleBlur", "handleCloseItem", "handleDocumentMouseDown", "handleHighlightItem", "handleMenuAction", "handleMenuBlur", "handleMouseDown", "handleMouseUp", "handleUnHighlightItem", "hideMenu", "invalidateMenuSize", "isAlignMenuToStart", "isFocusablePopupMenu", "isScrollOnOverflow", "performActionInternal", "positionMenu", "removeItem", "removeItemAt", "selectFirstOnEnterOrSpace_", "setAlignMenuToStart", "setEnabled", "setFocusablePopupMenu", "setMenu", "setMenuMargin", "setMenuPosition", "setOpen", "setPositionElement", "setRenderMenuAsSibling", "setScrollOnOverflow", "setSelectFirstOnEnterOrSpace", "setVisible", "showMenu"]
	}, {
		"name": "goog.ui.MenuButtonRenderer",
		"href": "class_goog_ui_MenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuButtonRenderer.CSS_CLASS", "MenuButtonRenderer.getInstance", "MenuButtonRenderer.wrapCaption"],
		"members": ["createButton", "createCaption", "createDropdown", "decorate", "getContentElement", "getCssClass"]
	}, {
		"name": "goog.ui.MenuHeader",
		"href": "class_goog_ui_MenuHeader.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.MenuHeaderRenderer",
		"href": "class_goog_ui_MenuHeaderRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuHeaderRenderer.CSS_CLASS", "MenuHeaderRenderer.getInstance"],
		"members": ["getCssClass"]
	}, {
		"name": "goog.ui.MenuItem",
		"href": "class_goog_ui_MenuItem.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuItem.ACCELERATOR_CLASS"],
		"members": ["getAccelerator", "getCaption", "getMnemonic", "getValue", "setCheckable", "setMnemonic", "setSelectable", "setValue"]
	}, {
		"name": "goog.ui.MenuItemRenderer",
		"href": "class_goog_ui_MenuItemRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuItemRenderer.CSS_CLASS", "MenuItemRenderer.getInstance"],
		"members": ["createContent", "createDom", "decorate", "getClassForState", "getStateFromClass", "hasCheckBoxStructure", "hasContentStructure", "setCheckable", "setContent", "setEnableCheckBoxStructure", "setSelectable"]
	}, {
		"name": "goog.ui.MenuItemRenderer.CompositeCssClassIndex_",
		"href": "enum_goog_ui_MenuItemRenderer_CompositeCssClassIndex_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.MenuRenderer",
		"href": "class_goog_ui_MenuRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuRenderer.CSS_CLASS", "MenuRenderer.getInstance"],
		"members": ["canDecorate", "containsElement", "getCssClass", "getDecoratorForChild"]
	}, {
		"name": "goog.ui.MenuSeparator",
		"href": "class_goog_ui_MenuSeparator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.MenuSeparatorRenderer",
		"href": "class_goog_ui_MenuSeparatorRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuSeparatorRenderer.CSS_CLASS", "MenuSeparatorRenderer.getInstance"],
		"members": ["createDom", "decorate", "getCssClass", "setContent"]
	}, {
		"name": "goog.ui.MockActivityMonitor",
		"href": "class_goog_ui_MockActivityMonitor.html",
		"namespace": false,
		"interface": false,
		"members": ["simulateEvent"]
	}, {
		"name": "goog.ui.ModalAriaVisibilityHelper",
		"href": "class_goog_ui_ModalAriaVisibilityHelper.html",
		"namespace": false,
		"interface": false,
		"members": ["setBackgroundVisibility"]
	}, {
		"name": "goog.ui.ModalPopup",
		"href": "class_goog_ui_ModalPopup.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "focus", "getBackgroundElement", "getBackgroundIframe", "getCssClass", "getTabCatcherElement", "isVisible", "onFocus", "onHide", "onShow", "reposition", "setA11YDetectBackground", "setTransition", "setVisible", "setupBackwardTabWrap"]
	}, {
		"name": "goog.ui.NativeButtonRenderer",
		"href": "class_goog_ui_NativeButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["NativeButtonRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "initializeDom"]
	}, {
		"name": "goog.ui.Option",
		"href": "class_goog_ui_Option.html",
		"namespace": false,
		"interface": false,
		"members": ["performActionInternal"]
	}, {
		"name": "goog.ui.Palette",
		"href": "class_goog_ui_Palette.html",
		"namespace": false,
		"interface": false,
		"members": ["getCaption", "getHighlightedIndex", "getHighlightedItem", "getSelectedIndex", "getSelectedItem", "getSize", "handleKeyEvent", "handleMouseDown", "handleMouseOver", "handleSelectionChange", "performActionInternal", "setCaption", "setContentInternal", "setHighlightedIndex", "setHighlightedItem", "setSelectedIndex", "setSelectedItem", "setSize"]
	}, {
		"name": "goog.ui.Palette.CurrentCell_",
		"href": "class_goog_ui_Palette_CurrentCell_.html",
		"namespace": false,
		"interface": false,
		"members": ["tryHighlight"]
	}, {
		"name": "goog.ui.Palette.EventType",
		"href": "enum_goog_ui_Palette_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.PaletteRenderer",
		"href": "class_goog_ui_PaletteRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["PaletteRenderer.CSS_CLASS", "PaletteRenderer.getInstance"],
		"members": ["canDecorate", "createCell", "createDom", "createGrid", "createRow", "createTable", "decorate", "getCellForItem", "getContainingItem", "getCssClass", "highlightCell", "selectCell", "setContent"]
	}, {
		"name": "goog.ui.PlainTextSpellChecker",
		"href": "class_goog_ui_PlainTextSpellChecker.html",
		"namespace": false,
		"interface": false,
		"members": ["check", "correctedWordClassName", "correctionPaneClassName", "createDom", "getElementProperties", "handleOverlayKeyEvent", "initSuggestionsMenu", "invalidWordClassName", "onCorrectionAction", "processRange", "processWord", "resume"]
	}, {
		"name": "goog.ui.Popup",
		"href": "class_goog_ui_Popup.html",
		"namespace": false,
		"interface": false,
		"members": ["getMargin", "getPinnedCorner", "getPosition", "position_", "reposition", "setMargin", "setPinnedCorner", "setPosition"]
	}, {
		"name": "goog.ui.PopupBase",
		"href": "class_goog_ui_PopupBase.html",
		"namespace": false,
		"interface": false,
		"statics": ["PopupBase.DEBOUNCE_DELAY_MS"],
		"members": ["addAutoHidePartner", "getAutoHide", "getAutoHideRegion", "getElement", "getEnableCrossIframeDismissal", "getHandler", "getHideOnEscape", "getLastHideTime", "getLastShowTime", "getType", "hidePopupElement", "isOrWasRecentlyVisible", "isVisible", "onBeforeHide_", "onBeforeShow", "onHide_", "onShow_", "removeAutoHidePartner", "reposition", "setAutoHide", "setAutoHideRegion", "setElement", "setEnableCrossIframeDismissal", "setHideOnEscape", "setShouldHideAsync", "setTransition", "setType", "setVisible", "shouldHideAsync", "showPopupElement"]
	}, {
		"name": "goog.ui.PopupBase.EventType",
		"href": "enum_goog_ui_PopupBase_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.PopupBase.Type",
		"href": "enum_goog_ui_PopupBase_Type.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.PopupColorPicker",
		"href": "class_goog_ui_PopupColorPicker.html",
		"namespace": false,
		"interface": false,
		"members": ["addColors", "attach", "canDecorate", "clearColors", "detach", "getAllowAutoFocus", "getAutoHide", "getAutoHideRegion", "getColorPicker", "getLastTarget", "getPopup", "getRememberSelection", "getSelectedColor", "getToggleMode", "setAllowAutoFocus", "setAutoHide", "setAutoHideRegion", "setFocusable", "setPinnedCorner", "setPopupCorner", "setRememberSelection", "setShowOnHover", "setToggleMode"]
	}, {
		"name": "goog.ui.PopupDatePicker",
		"href": "class_goog_ui_PopupDatePicker.html",
		"namespace": false,
		"interface": false,
		"members": ["attach", "canDecorate", "detach", "getAllowAutoFocus", "getDate", "getDatePicker", "getLastTarget", "hidePopup", "isVisible", "setAllowAutoFocus", "setDate", "showPopup"]
	}, {
		"name": "goog.ui.PopupMenu",
		"href": "class_goog_ui_PopupMenu.html",
		"namespace": false,
		"interface": false,
		"members": ["attach", "createAttachTarget", "decorateInternal", "detach", "detachAll", "getAttachTarget", "getAttachedElement", "getToggleMode", "handleBlur", "hide", "isAttachTarget", "isOrWasRecentlyVisible", "onDocClick", "setToggleMode", "showAt", "showAtElement", "showMenu", "showWithPosition", "wasRecentlyHidden"]
	}, {
		"name": "goog.ui.ProgressBar",
		"href": "class_goog_ui_ProgressBar.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "decorateInternal", "getMaximum", "getMinimum", "getOrientation", "getStep", "getValue", "setMaximum", "setMinimum", "setOrientation", "setStep", "setValue", "thumbElement_"]
	}, {
		"name": "goog.ui.ProgressBar.Orientation",
		"href": "enum_goog_ui_ProgressBar_Orientation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Prompt",
		"href": "class_goog_ui_Prompt.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "focus", "getCols", "getInputElement", "getRows", "setCols", "setDefaultValue", "setInputDecoratorFn", "setRows", "setValidationFunction", "setVisible"]
	}, {
		"name": "goog.ui.RangeModel",
		"href": "class_goog_ui_RangeModel.html",
		"namespace": false,
		"interface": false,
		"members": ["getExtent", "getMaximum", "getMinimum", "getStep", "getValue", "roundToStep", "roundToStepWithMin", "setExtent", "setMaximum", "setMinimum", "setMute", "setStep", "setValue"]
	}, {
		"name": "goog.ui.Ratings",
		"href": "class_goog_ui_Ratings.html",
		"namespace": false,
		"interface": false,
		"statics": ["Ratings.CSS_CLASS"],
		"members": ["decorateInternal", "enterDocument", "exitDocument", "getAttachedFormField", "getCssClass", "getHighlightedIndex", "getHighlightedValue", "getRatings", "getSelectedIndex", "getValue", "isEnabled", "setAttachedFormField", "setEnabled", "setRatings", "setSelectedIndex"]
	}, {
		"name": "goog.ui.Ratings.EventType",
		"href": "enum_goog_ui_Ratings_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.RichTextSpellChecker",
		"href": "class_goog_ui_RichTextSpellChecker.html",
		"namespace": false,
		"interface": false,
		"members": ["check", "createDom", "decorateInternal", "excludeTags", "getElementProperties", "handleRootNodeKeyEvent", "invalidWordCssText", "isEditorIframe", "processRange", "processWord", "resume", "updateElement", "wordClassName"]
	}, {
		"name": "goog.ui.RoundedPanel",
		"href": "namespace_goog_ui_RoundedPanel.html",
		"namespace": true,
		"interface": false,
		"statics": ["create"]
	}, {
		"name": "goog.ui.RoundedPanel.Classes_",
		"href": "enum_goog_ui_RoundedPanel_Classes_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.RoundedPanel.Corner",
		"href": "enum_goog_ui_RoundedPanel_Corner.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.RoundedTabRenderer",
		"href": "class_goog_ui_RoundedTabRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["RoundedTabRenderer.CSS_CLASS", "RoundedTabRenderer.getInstance"],
		"members": ["createCaption", "createDom", "createEdge", "createTab", "decorate", "getCssClass"]
	}, {
		"name": "goog.ui.ScrollFloater",
		"href": "class_goog_ui_ScrollFloater.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "decorateInternal", "isFloating", "isPinned", "isScrollingEnabled", "setContainerElement", "setScrollingEnabled", "setViewportTopOffset", "update"]
	}, {
		"name": "goog.ui.ScrollFloater.EventType",
		"href": "enum_goog_ui_ScrollFloater_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ScrollFloater.FloatMode_",
		"href": "enum_goog_ui_ScrollFloater_FloatMode_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Select",
		"href": "class_goog_ui_Select.html",
		"namespace": false,
		"interface": false,
		"members": ["addItem", "addItemAt", "decorateInternal", "getDefaultCaption", "getSelectedIndex", "getSelectedItem", "getSelectionModel", "getValue", "handleMenuAction", "handleSelectionChange", "removeItem", "removeItemAt", "setDefaultCaption", "setMenu", "setOpen", "setSelectedIndex", "setSelectedItem", "setValue", "updateCaption"]
	}, {
		"name": "goog.ui.SelectionMenuButton",
		"href": "class_goog_ui_SelectionMenuButton.html",
		"namespace": false,
		"interface": false,
		"members": ["addCheckboxEvent", "createCheckbox", "createDom", "getCheckboxElement", "getSelectionState", "handleCheckboxClick", "selectionState", "setCheckboxEnabled", "setEnabled", "setSelectionState"]
	}, {
		"name": "goog.ui.SelectionMenuButton.SelectionState",
		"href": "enum_goog_ui_SelectionMenuButton_SelectionState.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SelectionModel",
		"href": "class_goog_ui_SelectionModel.html",
		"namespace": false,
		"interface": false,
		"members": ["addItem", "addItemAt", "addItems", "clear", "getFirst", "getItemAt", "getItemCount", "getItems", "getLast", "getSelectedIndex", "getSelectedItem", "getSelectionHandler", "indexOfItem", "removeItem", "removeItemAt", "setSelectedIndex", "setSelectedItem", "setSelectionHandler"]
	}, {
		"name": "goog.ui.Separator",
		"href": "class_goog_ui_Separator.html",
		"namespace": false,
		"interface": false,
		"members": ["enterDocument"]
	}, {
		"name": "goog.ui.ServerChart",
		"href": "class_goog_ui_ServerChart.html",
		"namespace": false,
		"interface": false,
		"statics": ["ServerChart.CHART_SERVER_HTTPS_URI", "ServerChart.CHART_SERVER_HTTP_URI", "ServerChart.CHART_SERVER_SCHEME_INDEPENDENT_URI", "ServerChart.CHART_SERVER_URI", "ServerChart.CHART_VALUES", "ServerChart.CHART_VALUES_EXTENDED", "ServerChart.DEFAULT_NORMALIZATION", "ServerChart.EXTENDED_UPPER_BOUND"],
		"members": ["addDataSet", "addMultiAxis", "clearDataSets", "createDom", "decorateInternal", "getBackgroundFill", "getData", "getEncodingType", "getGridParameter", "getGridX", "getGridY", "getLeftLabels", "getLegendPosition", "getMarkerParameter", "getMaxValue", "getMinValue", "getMiscParameter", "getMultiAxisLabelPosition", "getMultiAxisLabelStyle", "getMultiAxisLabelText", "getMultiAxisRange", "getMultiAxisType", "getNumVisibleDataSets", "getRightLabels", "getSize", "getTitleColor", "getTitleSize", "getType", "getUri", "getUriLengthLimit", "getXLabels", "isBarChart", "isGroupedBarChart", "isHorizontalBarChart", "isLineChart", "isMap", "isPieChart", "isStackedBarChart", "isVerticalBarChart", "removeParameter", "setAutomaticBarWidth", "setBackgroundFill", "setBarSpaceWidths", "setDataScaling", "setEncodingType", "setGridParameter", "setGridX", "setGridY", "setLeftLabels", "setLegend", "setLegendPosition", "setMargins", "setMarkerParameter", "setMaxValue", "setMinValue", "setMiscParameter", "setMultiAxisLabelPosition", "setMultiAxisLabelStyle", "setMultiAxisLabelText", "setMultiAxisRange", "setNumVisibleDataSets", "setParameterValue", "setRightLabels", "setSize", "setTitle", "setTitleColor", "setTitleSize", "setType", "setUri", "setUriLengthLimit", "setVennSeries", "setXLabels", "updateChart"]
	}, {
		"name": "goog.ui.ServerChart.AxisDisplayType",
		"href": "enum_goog_ui_ServerChart_AxisDisplayType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.ChartType",
		"href": "enum_goog_ui_ServerChart_ChartType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.EncodingType",
		"href": "enum_goog_ui_ServerChart_EncodingType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.Event",
		"href": "enum_goog_ui_ServerChart_Event.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.LegendPosition",
		"href": "enum_goog_ui_ServerChart_LegendPosition.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.MaximumValue",
		"href": "enum_goog_ui_ServerChart_MaximumValue.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.MultiAxisAlignment",
		"href": "enum_goog_ui_ServerChart_MultiAxisAlignment.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.MultiAxisType",
		"href": "enum_goog_ui_ServerChart_MultiAxisType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.UriParam",
		"href": "enum_goog_ui_ServerChart_UriParam.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ServerChart.UriTooLongEvent",
		"href": "class_goog_ui_ServerChart_UriTooLongEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["uri"]
	}, {
		"name": "goog.ui.Slider",
		"href": "class_goog_ui_Slider.html",
		"namespace": false,
		"interface": false,
		"statics": ["Slider.CSS_CLASS_PREFIX", "Slider.THUMB_CSS_CLASS"],
		"members": ["getCssClass"]
	}, {
		"name": "goog.ui.Slider.Orientation",
		"href": "enum_goog_ui_Slider_Orientation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SliderBase",
		"href": "class_goog_ui_SliderBase.html",
		"namespace": false,
		"interface": false,
		"members": ["animatedSetValue", "createThumbs", "enableFlipForRtl", "enterDocument", "extentThumb", "getBlockIncrement", "getCssClass", "getExtent", "getExtentThumb", "getMaximum", "getMinimum", "getMoveToPointEnabled", "getOrientation", "getStep", "getTextValue", "getThumbCoordinateForValue", "getUnitIncrement", "getValue", "getValueFromMousePosition", "getValueThumb", "handleRangeModelChange", "isAnimating", "isDragging", "isEnabled", "isHandleMouseWheel", "moveThumbs", "rangeHighlight", "rangeModel", "setAdditionalAnimations", "setAriaRoles", "setBlockIncrement", "setEnabled", "setExtent", "setHandleMouseWheel", "setMaximum", "setMinExtent", "setMinimum", "setMoveToPointEnabled", "setOrientation", "setStep", "setUnitIncrement", "setValue", "setValueAndExtent", "setVisible", "updateAriaStates", "valueThumb"]
	}, {
		"name": "goog.ui.SliderBase.AnimationFactory",
		"href": "interface_goog_ui_SliderBase_AnimationFactory.html",
		"namespace": true,
		"interface": true,
		"members": ["createAnimations"]
	}, {
		"name": "goog.ui.SliderBase.EventType",
		"href": "enum_goog_ui_SliderBase_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SliderBase.Orientation",
		"href": "enum_goog_ui_SliderBase_Orientation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SplitBehavior",
		"href": "class_goog_ui_SplitBehavior.html",
		"namespace": false,
		"interface": false,
		"statics": ["SplitBehavior.CSS_CLASS"],
		"members": ["decorate", "getBehaviorHandler", "getElement", "getEventType", "render", "setActive", "setDisposeControls", "setEventType", "setHandler"]
	}, {
		"name": "goog.ui.SplitBehavior.DefaultHandlers",
		"href": "enum_goog_ui_SplitBehavior_DefaultHandlers.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SplitPane",
		"href": "class_goog_ui_SplitPane.html",
		"namespace": false,
		"interface": false,
		"members": ["canDecorate", "createDom", "decorateInternal", "enterDocument", "getFirstComponentSize", "getOrientation", "isVertical", "setContinuousResize", "setFirstComponentSize", "setHandleSize", "setInitialSize", "setOrientation", "setOrientationClassForHandle", "setSize"]
	}, {
		"name": "goog.ui.SplitPane.EventType",
		"href": "enum_goog_ui_SplitPane_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SplitPane.IframeOverlayIndex_",
		"href": "enum_goog_ui_SplitPane_IframeOverlayIndex_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SplitPane.Orientation",
		"href": "enum_goog_ui_SplitPane_Orientation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.SubMenu",
		"href": "class_goog_ui_SubMenu.html",
		"namespace": false,
		"interface": false,
		"statics": ["SubMenu.MENU_DELAY_MS"],
		"members": ["addItem", "addItemAt", "clearTimers", "containsElement", "dismissSubMenu", "getItemAt", "getItemCount", "getItems", "getMenu", "handleKeyEvent", "isAlignedToEnd", "isPositionAdjustable", "performActionInternal", "positionSubMenu", "removeItem", "removeItemAt", "setAlignToEnd", "setMenu", "setPositionAdjustable", "setVisible", "showSubMenu"]
	}, {
		"name": "goog.ui.SubMenuRenderer",
		"href": "class_goog_ui_SubMenuRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["SubMenuRenderer.CSS_CLASS", "SubMenuRenderer.getInstance"],
		"members": ["createDom", "decorate", "initializeDom", "setContent"]
	}, {
		"name": "goog.ui.Tab",
		"href": "class_goog_ui_Tab.html",
		"namespace": false,
		"interface": false,
		"members": ["getTooltip", "setTooltip", "setTooltipInternal"]
	}, {
		"name": "goog.ui.TabBar",
		"href": "class_goog_ui_TabBar.html",
		"namespace": false,
		"interface": false,
		"statics": ["TabBar.getOrientationFromLocation"],
		"members": ["deselectIfSelected", "getLocation", "getSelectedTab", "getSelectedTabIndex", "handleFocus", "handleTabDisable", "handleTabHide", "handleTabSelect", "handleTabUnselect", "isAutoSelectTabs", "isSelectableTab", "removeChild", "setAutoSelectTabs", "setHighlightedIndexFromKeyEvent", "setLocation", "setSelectedTab", "setSelectedTabIndex"]
	}, {
		"name": "goog.ui.TabBar.Location",
		"href": "enum_goog_ui_TabBar_Location.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.TabBarRenderer",
		"href": "class_goog_ui_TabBarRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["TabBarRenderer.CSS_CLASS", "TabBarRenderer.getInstance"],
		"members": ["getClassNames", "getCssClass", "setStateFromClassName"]
	}, {
		"name": "goog.ui.TabPane",
		"href": "class_goog_ui_TabPane.html",
		"namespace": false,
		"interface": false,
		"members": ["addPage", "dom_", "getContentElement", "getElement", "getPage", "getSelectedIndex", "getSelectedPage", "removePage", "setSelectedIndex", "setSelectedPage"]
	}, {
		"name": "goog.ui.TabPane.Events",
		"href": "namespace_goog_ui_TabPane_Events.html",
		"namespace": true,
		"interface": false,
		"statics": ["CHANGE"]
	}, {
		"name": "goog.ui.TabPane.TabLocation",
		"href": "enum_goog_ui_TabPane_TabLocation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.TabPane.TabPage",
		"href": "class_goog_ui_TabPane_TabPage.html",
		"namespace": false,
		"interface": false,
		"members": ["dom_", "getContentElement", "getIndex", "getParent", "getTitle", "getTitleElement", "isEnabled", "select", "setEnabled", "setTitle"]
	}, {
		"name": "goog.ui.TabPaneEvent",
		"href": "class_goog_ui_TabPaneEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["page"]
	}, {
		"name": "goog.ui.TabRenderer",
		"href": "class_goog_ui_TabRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["TabRenderer.CSS_CLASS", "TabRenderer.getInstance"],
		"members": ["createDom", "decorate", "getAriaRole", "getCssClass", "getTooltip", "setTooltip"]
	}, {
		"name": "goog.ui.TableSorter",
		"href": "class_goog_ui_TableSorter.html",
		"namespace": false,
		"interface": false,
		"statics": ["TableSorter.alphaSort", "TableSorter.createReverseSort", "TableSorter.noSort", "TableSorter.numericSort"],
		"members": ["getDefaultSortFunction", "getSortColumn", "getSortFunction", "isSortReversed", "setDefaultSortFunction", "setSortFunction", "setSortableHeaderRowIndex", "sort"]
	}, {
		"name": "goog.ui.TableSorter.EventType",
		"href": "enum_goog_ui_TableSorter_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Textarea",
		"href": "class_goog_ui_Textarea.html",
		"namespace": false,
		"interface": false,
		"statics": ["Textarea.TEXTAREA_PLACEHOLDER_CLASS"],
		"members": ["getMaxHeight", "getMinHeight", "getValue", "resize", "setMaxHeight", "setMinHeight", "setPlaceholder", "setValue"]
	}, {
		"name": "goog.ui.Textarea.EventType",
		"href": "enum_goog_ui_Textarea_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.TextareaRenderer",
		"href": "class_goog_ui_TextareaRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["TextareaRenderer.CSS_CLASS", "TextareaRenderer.getInstance"],
		"members": ["canDecorate", "createDom", "isFocusable", "setState"]
	}, {
		"name": "goog.ui.ToggleButton",
		"href": "class_goog_ui_ToggleButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Toolbar",
		"href": "class_goog_ui_Toolbar.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarButton",
		"href": "class_goog_ui_ToolbarButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarButtonRenderer",
		"href": "class_goog_ui_ToolbarButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ToolbarButtonRenderer.CSS_CLASS", "ToolbarButtonRenderer.getInstance"],
		"members": ["getCssClass"]
	}, {
		"name": "goog.ui.ToolbarColorMenuButton",
		"href": "class_goog_ui_ToolbarColorMenuButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarColorMenuButtonRenderer",
		"href": "class_goog_ui_ToolbarColorMenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ToolbarColorMenuButtonRenderer.getInstance"],
		"members": ["createCaption", "initializeDom", "setValue"]
	}, {
		"name": "goog.ui.ToolbarMenuButton",
		"href": "class_goog_ui_ToolbarMenuButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarMenuButtonRenderer",
		"href": "class_goog_ui_ToolbarMenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ToolbarMenuButtonRenderer.CSS_CLASS", "ToolbarMenuButtonRenderer.getInstance"],
		"members": ["getCssClass"]
	}, {
		"name": "goog.ui.ToolbarRenderer",
		"href": "class_goog_ui_ToolbarRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ToolbarRenderer.CSS_CLASS", "ToolbarRenderer.getInstance"],
		"members": ["getCssClass", "getDecoratorForChild", "getDefaultOrientation"]
	}, {
		"name": "goog.ui.ToolbarSelect",
		"href": "class_goog_ui_ToolbarSelect.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarSeparator",
		"href": "class_goog_ui_ToolbarSeparator.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ToolbarSeparatorRenderer",
		"href": "class_goog_ui_ToolbarSeparatorRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ToolbarSeparatorRenderer.CSS_CLASS", "ToolbarSeparatorRenderer.getInstance"],
		"members": ["createDom", "decorate", "getCssClass"]
	}, {
		"name": "goog.ui.ToolbarToggleButton",
		"href": "class_goog_ui_ToolbarToggleButton.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Tooltip",
		"href": "class_goog_ui_Tooltip.html",
		"namespace": false,
		"interface": false,
		"members": ["anchor", "attach", "className", "clearHideTimer", "clearShowTimer", "cursorPosition", "detach", "getActiveElement", "getAnchorFromElement", "getChildTooltip", "getDomHelper", "getElements", "getHideDelayMs", "getHtml", "getPositioningStrategy", "getShowDelayMs", "getState", "getText", "handleFocus", "handleMouseMove", "handleMouseOutAndBlur", "handleMouseOver", "handleTooltipMouseOut", "handleTooltipMouseOver", "hasActiveChild", "hideTimer", "isCoordinateInTooltip", "maybeHide", "maybeShow", "onBeforeShow", "onHide_", "setActiveElement", "setElement", "setHideDelayMs", "setHtml", "setRequireInteraction", "setSafeHtml", "setShowDelayMs", "setText", "showForElement", "showTimer", "startHideTimer", "startShowTimer"]
	}, {
		"name": "goog.ui.Tooltip.Activation",
		"href": "enum_goog_ui_Tooltip_Activation.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.Tooltip.CursorTooltipPosition",
		"href": "class_goog_ui_Tooltip_CursorTooltipPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["reposition"]
	}, {
		"name": "goog.ui.Tooltip.ElementTooltipPosition",
		"href": "class_goog_ui_Tooltip_ElementTooltipPosition.html",
		"namespace": false,
		"interface": false,
		"members": ["reposition"]
	}, {
		"name": "goog.ui.Tooltip.State",
		"href": "enum_goog_ui_Tooltip_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.TriStateMenuItem",
		"href": "class_goog_ui_TriStateMenuItem.html",
		"namespace": false,
		"interface": false,
		"members": ["getCheckedState", "setCheckedState"]
	}, {
		"name": "goog.ui.TriStateMenuItem.State",
		"href": "enum_goog_ui_TriStateMenuItem_State.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.TriStateMenuItemRenderer",
		"href": "class_goog_ui_TriStateMenuItemRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["TriStateMenuItemRenderer.CSS_CLASS", "TriStateMenuItemRenderer.getInstance"],
		"members": ["decorate"]
	}, {
		"name": "goog.ui.TwoThumbSlider",
		"href": "class_goog_ui_TwoThumbSlider.html",
		"namespace": false,
		"interface": false,
		"statics": ["TwoThumbSlider.CSS_CLASS_PREFIX", "TwoThumbSlider.EXTENT_THUMB_CSS_CLASS", "TwoThumbSlider.RANGE_HIGHLIGHT_CSS_CLASS", "TwoThumbSlider.VALUE_THUMB_CSS_CLASS"],
		"members": ["createThumbs"]
	}, {
		"name": "goog.ui.Zippy",
		"href": "class_goog_ui_Zippy.html",
		"namespace": false,
		"interface": false,
		"members": ["collapse", "expand", "getAriaRole", "getContentElement", "getVisibleHeaderElement", "isExpanded", "isHandleKeyEvents", "isHandleMouseEvents", "setExpanded", "setExpandedInternal", "setHandleKeyboardEvents", "setHandleMouseEvents", "toggle", "updateHeaderClassName"]
	}, {
		"name": "goog.ui.Zippy.Events",
		"href": "namespace_goog_ui_Zippy_Events.html",
		"namespace": true,
		"interface": false,
		"statics": ["ACTION", "TOGGLE"]
	}, {
		"name": "goog.ui.ZippyEvent",
		"href": "class_goog_ui_ZippyEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["expanded"]
	}, {
		"name": "goog.ui.ac",
		"href": "namespace_goog_ui_ac.html",
		"namespace": true,
		"interface": false,
		"statics": ["createSimpleAutoComplete"]
	}, {
		"name": "goog.ui.ac.ArrayMatcher",
		"href": "class_goog_ui_ac_ArrayMatcher.html",
		"namespace": false,
		"interface": false,
		"statics": ["ArrayMatcher.getMatchesForRows", "ArrayMatcher.getPrefixMatchesForRows", "ArrayMatcher.getSimilarMatchesForRows"],
		"members": ["getPrefixMatches", "getSimilarRows", "requestMatchingRows", "rows_", "setRows", "useSimilar_"]
	}, {
		"name": "goog.ui.ac.AutoComplete",
		"href": "class_goog_ui_ac_AutoComplete.html",
		"namespace": false,
		"interface": false,
		"members": ["attachInputWithAnchor", "attachInputs", "cancelDelayedDismiss", "detachInputs", "dismiss", "dismissOnDelay", "firstRowId_", "getAllSuggestions", "getHighlightedId", "getIndexOfId", "getMatcher", "getRenderer", "getRowCount", "getSelectionHandler", "getSuggestion", "getSuggestionCount", "getTarget", "getToken", "handleEvent", "hasHighlight", "hiliteId", "hiliteId_", "hiliteIndex", "hiliteNext", "hilitePrev", "isOpen", "matcher_", "renderRows", "renderer_", "rows_", "selectHilited", "selectionHandler_", "setAllowFreeSelect", "setAutoHilite", "setMatcher", "setMaxMatches", "setRenderer", "setTarget", "setToken", "setTokenInternal", "setTriggerSuggestionsOnUpdate", "setWrap", "target_", "token_", "update"]
	}, {
		"name": "goog.ui.ac.AutoComplete.Matcher",
		"href": "class_goog_ui_ac_AutoComplete.html#AutoComplete.Matcher"
	}, {
		"name": "goog.ui.ac.AutoComplete.EventType",
		"href": "enum_goog_ui_ac_AutoComplete_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.ac.CachingMatcher",
		"href": "class_goog_ui_ac_CachingMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["requestMatchingRows", "setBaseMatcherMaxMatches", "setLocalMatcher", "setMaxCacheSize", "setThrottleTime"]
	}, {
		"name": "goog.ui.ac.InputHandler",
		"href": "class_goog_ui_ac_InputHandler.html",
		"namespace": false,
		"interface": false,
		"statics": ["InputHandler.QUOTE_LITERALS", "InputHandler.STANDARD_LIST_SEPARATORS"],
		"members": ["ac_", "attachAutoComplete", "attachInput", "attachInputs", "detachInput", "detachInputs", "getActiveElement", "getAutoComplete", "getCursorPosition", "getThrottleTime", "getUpdateDuringTyping", "getValue", "handleBlur", "handleFocus", "handleKeyEvent", "handleKeyUp", "handleMouseDown", "needKeyUpListener", "parseToken", "processBlur", "processFocus", "selectRow", "setCursorPosition", "setGenerateNewTokenOnLiteral", "setPreventDefaultOnTab", "setPreventSelectionOnTab", "setRowJustSelected", "setSeparatorCompletes", "setSeparatorSelects", "setSeparators", "setThrottleTime", "setTokenText", "setTrimmingRegExp", "setUpdateDuringTyping", "setUpsideDown", "setValue", "setWhitespaceWrapEntries", "update"]
	}, {
		"name": "goog.ui.ac.Remote",
		"href": "class_goog_ui_ac_Remote.html",
		"namespace": false,
		"interface": false,
		"members": ["getInputHandler", "setContent", "setHeaders", "setMethod", "setTimeoutInterval", "setUseStandardHighlighting"]
	}, {
		"name": "goog.ui.ac.RemoteArrayMatcher",
		"href": "class_goog_ui_ac_RemoteArrayMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["buildUrl", "parseResponseText", "requestMatchingRows", "setContent", "setHeaders", "setMethod", "setTimeoutInterval", "shouldRequestMatches", "xhrCallback"]
	}, {
		"name": "goog.ui.ac.RenderOptions",
		"href": "class_goog_ui_ac_RenderOptions.html",
		"namespace": false,
		"interface": false,
		"members": ["getAutoHilite", "getPreserveHilited", "setAutoHilite", "setPreserveHilited"]
	}, {
		"name": "goog.ui.ac.Renderer",
		"href": "class_goog_ui_ac_Renderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["Renderer.DELAY_BEFORE_MOUSEOVER"],
		"members": ["activeClassName", "animation_", "className", "dismiss", "disposeInternal", "getAnchorCorner", "getAnchorElement", "getAutoPosition", "getElement", "getRightAlign", "getTarget", "getTopAlign", "highlightedClassName", "hiliteId", "hiliteNone", "hiliteRow", "hilitedRow_", "isVisible", "redraw", "renderRowHtml", "renderRows", "reposition", "rowClassName", "rowDivs_", "setAnchorElement", "setAutoPosition", "setHighlightAllTokens", "setMatchWordBoundary", "setMenuFadeDuration", "setRightAlign", "setShowScrollbarsIfTooLarge", "setTopAlign", "setUseStandardHighlighting", "setWidthProvider", "show", "startRenderingRows_", "target_"]
	}, {
		"name": "goog.ui.ac.Renderer.CustomRenderer",
		"href": "class_goog_ui_ac_Renderer_CustomRenderer.html",
		"namespace": false,
		"interface": false,
		"members": ["render", "renderRow"]
	}, {
		"name": "goog.ui.ac.RichInputHandler",
		"href": "class_goog_ui_ac_RichInputHandler.html",
		"namespace": false,
		"interface": false,
		"members": ["selectRow"]
	}, {
		"name": "goog.ui.ac.RichRemote",
		"href": "class_goog_ui_ac_RichRemote.html",
		"namespace": false,
		"interface": false,
		"members": ["setRowFilter"]
	}, {
		"name": "goog.ui.ac.RichRemoteArrayMatcher",
		"href": "class_goog_ui_ac_RichRemoteArrayMatcher.html",
		"namespace": false,
		"interface": false,
		"members": ["requestMatchingRows", "setRowFilter"]
	}, {
		"name": "goog.ui.editor",
		"href": "namespace_goog_ui_editor.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.ui.editor.ButtonDescriptor",
		"href": "namespace_goog_ui_editor.html#editor.ButtonDescriptor"
	}, {
		"name": "goog.ui.editor.AbstractDialog",
		"href": "class_goog_ui_editor_AbstractDialog.html",
		"namespace": false,
		"interface": false,
		"members": ["createDialogControl", "createOkEvent", "disposeInternal", "dom", "getButtonElement", "getCancelButtonElement", "getOkButtonElement", "handleCancel", "handleOk", "hide", "isOpen", "processOkAndClose", "show"]
	}, {
		"name": "goog.ui.editor.AbstractDialog.Builder",
		"href": "class_goog_ui_editor_AbstractDialog_Builder.html",
		"namespace": false,
		"interface": false,
		"members": ["addButton", "addCancelButton", "addClassName", "addOkButton", "build", "setContent", "setTitle"]
	}, {
		"name": "goog.ui.editor.AbstractDialog.EventType",
		"href": "enum_goog_ui_editor_AbstractDialog_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.editor.Bubble",
		"href": "class_goog_ui_editor_Bubble.html",
		"namespace": false,
		"interface": false,
		"statics": ["Bubble.BUBBLE_CLASSNAME"],
		"members": ["addPanel", "createBubbleDom", "getContainerElement", "getContentElement", "getEventHandler", "getMarginBox", "getViewportBox", "handlePopupHide", "hasPanelOfType", "isVisible", "logger", "removePanel", "reposition", "setAutoHide"]
	}, {
		"name": "goog.ui.editor.Bubble.Panel_",
		"href": "class_goog_ui_editor_Bubble_Panel_.html",
		"namespace": false,
		"interface": false,
		"members": ["element", "getContentElement", "preferBottomPosition", "targetElement", "type"]
	}, {
		"name": "goog.ui.editor.DefaultToolbar",
		"href": "namespace_goog_ui_editor_DefaultToolbar.html",
		"namespace": true,
		"interface": false,
		"statics": ["DEFAULT_BUTTONS", "DEFAULT_BUTTONS_RTL", "MSG_ALIGN_CENTER_TITLE", "MSG_ALIGN_LEFT_TITLE", "MSG_ALIGN_RIGHT_TITLE", "MSG_BACKGROUND_COLOR_TITLE", "MSG_BLOCKQUOTE_TITLE", "MSG_BOLD_TITLE", "MSG_DIR_LTR_TITLE", "MSG_DIR_RTL_TITLE", "MSG_EDIT_HTML_CAPTION", "MSG_EDIT_HTML_TITLE", "MSG_FONT_COLOR_TITLE", "MSG_FONT_FACE_TITLE", "MSG_FONT_NORMAL", "MSG_FONT_NORMAL_SERIF", "MSG_FONT_SIZE_HUGE", "MSG_FONT_SIZE_LARGE", "MSG_FONT_SIZE_NORMAL", "MSG_FONT_SIZE_SMALL", "MSG_FONT_SIZE_TITLE", "MSG_FORMAT_BLOCK_CAPTION", "MSG_FORMAT_BLOCK_TITLE", "MSG_FORMAT_HEADING", "MSG_FORMAT_MINOR_HEADING", "MSG_FORMAT_NORMAL", "MSG_FORMAT_SUBHEADING", "MSG_IMAGE_TITLE", "MSG_INDENT_TITLE", "MSG_ITALIC_TITLE", "MSG_JUSTIFY_TITLE", "MSG_LINK_TITLE", "MSG_ORDERED_LIST_TITLE", "MSG_OUTDENT_TITLE", "MSG_REDO_TITLE", "MSG_REMOVE_FORMAT_TITLE", "MSG_STRIKE_THROUGH_TITLE", "MSG_SUBSCRIPT", "MSG_SUPERSCRIPT", "MSG_UNDERLINE_TITLE", "MSG_UNDO_TITLE", "MSG_UNORDERED_LIST_TITLE", "addDefaultFontSizes", "addDefaultFonts", "addDefaultFormatOptions", "makeBuiltInToolbarButton", "makeDefaultToolbar", "makeToolbar", "setLocale"]
	}, {
		"name": "goog.ui.editor.LinkDialog",
		"href": "class_goog_ui_editor_LinkDialog.html",
		"namespace": false,
		"interface": false,
		"statics": ["LinkDialog.hasNoFollow", "LinkDialog.removeNoFollow"],
		"members": ["createOkEvent", "setAutogenFeatureEnabled", "setEmailWarning", "setStopReferrerLeaks", "setTextToDisplayVisible", "showOpenLinkInNewWindow", "showRelNoFollow"]
	}, {
		"name": "goog.ui.editor.LinkDialog.BeforeTestLinkEvent",
		"href": "class_goog_ui_editor_LinkDialog_BeforeTestLinkEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["url"]
	}, {
		"name": "goog.ui.editor.LinkDialog.EventType",
		"href": "enum_goog_ui_editor_LinkDialog_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.editor.LinkDialog.Id_",
		"href": "enum_goog_ui_editor_LinkDialog_Id_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.editor.LinkDialog.OkEvent",
		"href": "class_goog_ui_editor_LinkDialog_OkEvent.html",
		"namespace": false,
		"interface": false,
		"members": ["linkText", "linkUrl", "noFollow", "openInNewWindow"]
	}, {
		"name": "goog.ui.editor.TabPane",
		"href": "class_goog_ui_editor_TabPane.html",
		"namespace": false,
		"interface": false,
		"members": ["addTab", "getCurrentTabId", "setSelectedTabId"]
	}, {
		"name": "goog.ui.editor.ToolbarController",
		"href": "class_goog_ui_editor_ToolbarController.html",
		"namespace": false,
		"interface": false,
		"members": ["blur", "getCommand", "getComponentId", "getField", "getHandler", "getToolbar", "handleAction", "isEnabled", "isVisible", "setEnabled", "setVisible", "updateToolbar", "updateToolbarFromState"]
	}, {
		"name": "goog.ui.editor.ToolbarFactory",
		"href": "namespace_goog_ui_editor_ToolbarFactory.html",
		"namespace": true,
		"interface": false,
		"statics": ["addFont", "addFontSize", "addFontSizes", "addFonts", "addFormatOption", "addFormatOptions", "getLegacySizeFromPx", "getPrimaryFont", "getPxFromLegacySize", "makeButton", "makeColorMenuButton", "makeMenuButton", "makeSelectButton", "makeToggleButton", "makeToolbar"]
	}, {
		"name": "goog.ui.editor.messages",
		"href": "namespace_goog_ui_editor_messages.html",
		"namespace": true,
		"interface": false,
		"statics": ["MSG_EDIT_LINK", "MSG_EMAIL_ADDRESS", "MSG_EMAIL_ADDRESS_TIP", "MSG_EMAIL_EXPLANATION", "MSG_IMAGE_CAPTION", "MSG_INVALID_EMAIL", "MSG_LINK_CAPTION", "MSG_LINK_TO", "MSG_ON_THE_WEB", "MSG_ON_THE_WEB_TIP", "MSG_OPEN_IN_NEW_WINDOW", "MSG_TEST_THIS_LINK", "MSG_TEXT_TO_DISPLAY", "MSG_TR_LINK_EXPLANATION", "MSG_WHAT_EMAIL", "MSG_WHAT_URL", "getEmailExplanationSafeHtml", "getTrLinkExplanationSafeHtml"]
	}, {
		"name": "goog.ui.emoji",
		"href": "namespace_goog_ui_emoji.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.ui.emoji.Emoji",
		"href": "class_goog_ui_emoji_Emoji.html",
		"namespace": false,
		"interface": false,
		"statics": ["Emoji.ATTRIBUTE"],
		"members": ["getAltText", "getHeight", "getId", "getUrl", "getWidth"]
	}, {
		"name": "goog.ui.emoji.EmojiPalette",
		"href": "class_goog_ui_emoji_EmojiPalette.html",
		"namespace": false,
		"interface": false,
		"members": ["getEmojiIndex", "getImageLoader", "getNumberOfEmoji", "getSelectedEmoji", "loadAnimatedEmoji"]
	}, {
		"name": "goog.ui.emoji.EmojiPaletteRenderer",
		"href": "class_goog_ui_emoji_EmojiPaletteRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["EmojiPaletteRenderer.getCssClass"],
		"members": ["buildElementFromSpriteMetadata", "createPaletteItem", "getContainingItem", "updateAnimatedPaletteItem"]
	}, {
		"name": "goog.ui.emoji.EmojiPicker",
		"href": "class_goog_ui_emoji_EmojiPicker.html",
		"namespace": false,
		"interface": false,
		"statics": ["EmojiPicker.DEFAULT_NUM_COLS", "EmojiPicker.DEFAULT_NUM_ROWS"],
		"members": ["addEmojiGroup", "canDecorate", "getCssClass", "getNumColumns", "getNumEmojiGroups", "getNumRows", "getPage", "getPages", "getSelectedEmoji", "getTabPane", "isFocusable", "loadImages", "manuallyLoadAnimatedEmoji", "setAutoSizeByColumnCount", "setDelayedLoad", "setFocusable", "setManualLoadOfAnimatedEmoji", "setNumColumns", "setNumRows", "setProgressiveRender", "setTabLocation", "setUrlPrefix"]
	}, {
		"name": "goog.ui.emoji.PopupEmojiPicker",
		"href": "class_goog_ui_emoji_PopupEmojiPicker.html",
		"namespace": false,
		"interface": false,
		"members": ["addEmojiGroup", "attach", "detach", "getAutoHide", "getAutoHideRegion", "getEmojiPicker", "getLastTarget", "getNumEmojiGroups", "getPopup", "getSelectedEmoji", "getToggleMode", "loadImages", "setAutoHide", "setAutoHideRegion", "setDelayedLoad", "setFocusable", "setNumColumns", "setNumRows", "setProgressiveRender", "setTabLocation", "setToggleMode", "setUrlPrefix"]
	}, {
		"name": "goog.ui.emoji.ProgressiveEmojiPaletteRenderer",
		"href": "class_goog_ui_emoji_ProgressiveEmojiPaletteRenderer.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.emoji.SpriteInfo",
		"href": "class_goog_ui_emoji_SpriteInfo.html",
		"namespace": false,
		"interface": false,
		"members": ["getCssClass", "getHeightCssValue", "getUrl", "getWidthCssValue", "getXOffsetCssValue", "getYOffsetCssValue", "isAnimated"]
	}, {
		"name": "goog.ui.media",
		"href": "namespace_goog_ui_media.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.ui.media.FlashObject",
		"href": "class_goog_ui_media_FlashObject.html",
		"namespace": false,
		"interface": false,
		"statics": ["FlashObject.CSS_CLASS", "FlashObject.FLASH_CSS_CLASS"],
		"members": ["addFlashVars", "createDom", "enterDocument", "getAllowScriptAccess", "getBackgroundColor", "getFlashElement", "getFlashVars", "getRequiredVersion", "getWmode", "hasRequiredVersion", "isLoaded", "setAllowScriptAccess", "setBackgroundColor", "setFlashVar", "setFlashVars", "setRequiredVersion", "setSize", "setWmode"]
	}, {
		"name": "goog.ui.media.FlashObject.IeSwfReadyStates_",
		"href": "enum_goog_ui_media_FlashObject_IeSwfReadyStates_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.FlashObject.ScriptAccessLevel",
		"href": "enum_goog_ui_media_FlashObject_ScriptAccessLevel.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.FlashObject.SwfReadyStates_",
		"href": "enum_goog_ui_media_FlashObject_SwfReadyStates_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.FlashObject.Wmodes",
		"href": "enum_goog_ui_media_FlashObject_Wmodes.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.FlickrSet",
		"href": "class_goog_ui_media_FlickrSet.html",
		"namespace": false,
		"interface": false,
		"statics": ["FlickrSet.CSS_CLASS", "FlickrSet.getInstance", "FlickrSet.newControl", "FlickrSet.setFlashUrl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.FlickrSetModel",
		"href": "class_goog_ui_media_FlickrSetModel.html",
		"namespace": false,
		"interface": false,
		"statics": ["FlickrSetModel.buildUrl", "FlickrSetModel.newInstance"],
		"members": ["getSetId", "getUserId"]
	}, {
		"name": "goog.ui.media.GoogleVideo",
		"href": "class_goog_ui_media_GoogleVideo.html",
		"namespace": false,
		"interface": false,
		"statics": ["GoogleVideo.CSS_CLASS", "GoogleVideo.getInstance", "GoogleVideo.newControl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.GoogleVideoModel",
		"href": "class_goog_ui_media_GoogleVideoModel.html",
		"namespace": false,
		"interface": false,
		"statics": ["GoogleVideoModel.buildFlashUrl", "GoogleVideoModel.buildUrl", "GoogleVideoModel.newInstance"],
		"members": ["getVideoId"]
	}, {
		"name": "goog.ui.media.Media",
		"href": "class_goog_ui_media_Media.html",
		"namespace": false,
		"interface": false,
		"members": ["getDataModel", "setDataModel"]
	}, {
		"name": "goog.ui.media.MediaModel",
		"href": "class_goog_ui_media_MediaModel.html",
		"namespace": false,
		"interface": false,
		"members": ["findCategoryWithScheme", "findCreditsWithRole", "getCaption", "getCategories", "getCredits", "getDescription", "getDuration", "getHeight", "getMedium", "getPlayer", "getSubTitles", "getThumbnails", "getType", "getUrl", "getWidth", "setCaption", "setCategories", "setCredits", "setDescription", "setDuration", "setHeight", "setMedium", "setPlayer", "setSubTitles", "setThumbnails", "setType", "setUrl", "setWidth"]
	}, {
		"name": "goog.ui.media.MediaModel.Category",
		"href": "class_goog_ui_media_MediaModel_Category.html",
		"namespace": false,
		"interface": false,
		"members": ["getLabel", "getScheme", "getValue", "setLabel", "setScheme", "setValue"]
	}, {
		"name": "goog.ui.media.MediaModel.Credit",
		"href": "class_goog_ui_media_MediaModel_Credit.html",
		"namespace": false,
		"interface": false,
		"members": ["getRole", "getScheme", "getValue", "setRole", "setScheme", "setValue"]
	}, {
		"name": "goog.ui.media.MediaModel.Credit.Role",
		"href": "enum_goog_ui_media_MediaModel_Credit_Role.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.MediaModel.Credit.Scheme",
		"href": "enum_goog_ui_media_MediaModel_Credit_Scheme.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.MediaModel.Medium",
		"href": "enum_goog_ui_media_MediaModel_Medium.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.MediaModel.MimeType",
		"href": "enum_goog_ui_media_MediaModel_MimeType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.media.MediaModel.Player",
		"href": "class_goog_ui_media_MediaModel_Player.html",
		"namespace": false,
		"interface": false,
		"members": ["getSize", "getTrustedResourceUrl", "getUrl", "getVars", "setSize", "setUrl", "setVars"]
	}, {
		"name": "goog.ui.media.MediaModel.SubTitle",
		"href": "class_goog_ui_media_MediaModel_SubTitle.html",
		"namespace": false,
		"interface": false,
		"members": ["getHref", "getLang", "getType", "setHref", "setLang", "setType"]
	}, {
		"name": "goog.ui.media.MediaModel.Thumbnail",
		"href": "class_goog_ui_media_MediaModel_Thumbnail.html",
		"namespace": false,
		"interface": false,
		"members": ["getSize", "getUrl", "setSize", "setUrl"]
	}, {
		"name": "goog.ui.media.MediaRenderer",
		"href": "class_goog_ui_media_MediaRenderer.html",
		"namespace": false,
		"interface": false,
		"members": ["createDom", "getThumbnailCssName"]
	}, {
		"name": "goog.ui.media.Mp3",
		"href": "class_goog_ui_media_Mp3.html",
		"namespace": false,
		"interface": false,
		"statics": ["Mp3.CSS_CLASS", "Mp3.MATCHER", "Mp3.buildFlashUrl", "Mp3.getInstance", "Mp3.newControl", "Mp3.setFlashUrl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.Photo",
		"href": "class_goog_ui_media_Photo.html",
		"namespace": false,
		"interface": false,
		"statics": ["Photo.CSS_CLASS", "Photo.getInstance", "Photo.newControl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.PicasaAlbum",
		"href": "class_goog_ui_media_PicasaAlbum.html",
		"namespace": false,
		"interface": false,
		"statics": ["PicasaAlbum.CSS_CLASS", "PicasaAlbum.getInstance", "PicasaAlbum.newControl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.PicasaAlbumModel",
		"href": "class_goog_ui_media_PicasaAlbumModel.html",
		"namespace": false,
		"interface": false,
		"statics": ["PicasaAlbumModel.buildUrl", "PicasaAlbumModel.newInstance"],
		"members": ["getAlbumId", "getAuthKey", "getUserId"]
	}, {
		"name": "goog.ui.media.Vimeo",
		"href": "class_goog_ui_media_Vimeo.html",
		"namespace": false,
		"interface": false,
		"statics": ["Vimeo.CSS_CLASS", "Vimeo.getInstance", "Vimeo.newControl"],
		"members": ["createDom", "getCssClass"]
	}, {
		"name": "goog.ui.media.VimeoModel",
		"href": "class_goog_ui_media_VimeoModel.html",
		"namespace": false,
		"interface": false,
		"statics": ["VimeoModel.buildFlashUrl", "VimeoModel.buildUrl", "VimeoModel.newInstance"],
		"members": ["getVideoId"]
	}, {
		"name": "goog.ui.media.Youtube",
		"href": "class_goog_ui_media_Youtube.html",
		"namespace": false,
		"interface": false,
		"statics": ["Youtube.CSS_CLASS", "Youtube.getInstance", "Youtube.newControl"],
		"members": ["getCssClass", "setState"]
	}, {
		"name": "goog.ui.media.YoutubeModel",
		"href": "class_goog_ui_media_YoutubeModel.html",
		"namespace": false,
		"interface": false,
		"statics": ["YoutubeModel.buildUrl", "YoutubeModel.getFlashUrl", "YoutubeModel.getThumbnailUrl", "YoutubeModel.newInstance"],
		"members": ["getVideoId"]
	}, {
		"name": "goog.ui.menuBar",
		"href": "namespace_goog_ui_menuBar.html",
		"namespace": true,
		"interface": false,
		"statics": ["create"]
	}, {
		"name": "goog.ui.registry",
		"href": "namespace_goog_ui_registry.html",
		"namespace": true,
		"interface": false,
		"statics": ["getDecorator", "getDecoratorByClassName", "getDefaultRenderer", "reset", "setDecoratorByClassName", "setDefaultRenderer"]
	}, {
		"name": "goog.ui.style.app",
		"href": "namespace_goog_ui_style_app.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.ui.style.app.ButtonRenderer",
		"href": "class_goog_ui_style_app_ButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["ButtonRenderer.CSS_CLASS", "ButtonRenderer.IE6_CLASS_COMBINATIONS", "ButtonRenderer.getInstance"],
		"members": ["createButton", "hasBoxStructure"]
	}, {
		"name": "goog.ui.style.app.MenuButtonRenderer",
		"href": "class_goog_ui_style_app_MenuButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["MenuButtonRenderer.CSS_CLASS", "MenuButtonRenderer.IE6_CLASS_COMBINATIONS", "MenuButtonRenderer.getInstance"],
		"members": ["createButton", "createContentWithDropdown", "createDropdown", "decorate", "getAriaRole", "getContentElement", "getCssClass"]
	}, {
		"name": "goog.ui.style.app.PrimaryActionButtonRenderer",
		"href": "class_goog_ui_style_app_PrimaryActionButtonRenderer.html",
		"namespace": false,
		"interface": false,
		"statics": ["PrimaryActionButtonRenderer.CSS_CLASS", "PrimaryActionButtonRenderer.IE6_CLASS_COMBINATIONS", "PrimaryActionButtonRenderer.getInstance"]
	}, {
		"name": "goog.ui.tree",
		"href": "namespace_goog_ui_tree.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "goog.ui.tree.BaseNode",
		"href": "class_goog_ui_tree_BaseNode.html",
		"namespace": false,
		"interface": false,
		"statics": ["BaseNode.allNodes", "BaseNode.defaultConfig"],
		"members": ["add", "addChildAt", "collapse", "collapseAll", "collapseChildren", "contains", "deselect", "expand", "expandAll", "expandChildren", "getAfterLabelElement", "getAfterLabelHtml", "getAfterLabelSafeHtml", "getBackgroundPosition", "getCalculatedIconClass", "getChildren", "getChildrenElement", "getClientData", "getConfig", "getDepth", "getExpandIconClass", "getExpandIconElement", "getExpandIconSafeHtml", "getExpanded", "getExpandedIconClass", "getFirstChild", "getHtml", "getIconClass", "getIconElement", "getIconSafeHtml", "getLabelElement", "getLabelSafeHtml", "getLastChild", "getLastShownDescendant", "getLineStyle", "getNextShownNode", "getNextSibling", "getPreviousShownNode", "getPreviousSibling", "getRowClassName", "getRowElement", "getRowSafeHtml", "getSafeHtml", "getText", "getToolTip", "getTree", "initAccessibility", "isLastSibling", "isSelected", "isUserCollapsible", "onClick_", "onDoubleClick_", "onKeyDown", "onMouseDown", "remove", "removeChild", "reveal", "select", "setAfterLabelHtml", "setAfterLabelSafeHtml", "setClientData", "setExpanded", "setExpandedIconClass", "setExpandedInternal", "setHtml", "setIconClass", "setIsUserCollapsible", "setSafeHtml", "setSelectedInternal", "setText", "setToolTip", "setTreeInternal", "toSafeHtml", "toggle", "tree", "updateExpandIcon", "updateRow"]
	}, {
		"name": "goog.ui.tree.BaseNode.EventType",
		"href": "enum_goog_ui_tree_BaseNode_EventType.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.ui.tree.TreeControl",
		"href": "class_goog_ui_tree_TreeControl.html",
		"namespace": false,
		"interface": false,
		"statics": ["TreeControl.defaultConfig"],
		"members": ["clearTypeAhead", "createNode", "getCalculatedIconClass", "getSelectedItem", "getShowExpandIcons", "getShowLines", "getShowRootLines", "getShowRootNode", "handleKeyEvent", "hasFocus", "initAccessibility", "removeNode", "reveal", "selectedItem_", "setNode", "setSelectedItem", "setShowExpandIcons", "setShowLines", "setShowRootLines", "setShowRootNode"]
	}, {
		"name": "goog.ui.tree.TreeNode",
		"href": "class_goog_ui_tree_TreeNode.html",
		"namespace": false,
		"interface": false,
		"members": ["getCalculatedIconClass", "getTree"]
	}, {
		"name": "goog.ui.tree.TypeAhead",
		"href": "class_goog_ui_tree_TypeAhead.html",
		"namespace": false,
		"interface": false,
		"members": ["clear", "handleNavigation", "handleTypeAheadChar", "removeNodeFromMap", "setNodeInMap"]
	}, {
		"name": "goog.ui.tree.TypeAhead.Offset",
		"href": "enum_goog_ui_tree_TypeAhead_Offset.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.uri.utils",
		"href": "namespace_goog_uri_utils.html",
		"namespace": true,
		"interface": false,
		"statics": ["appendParam", "appendParams", "appendParamsFromMap", "appendPath", "buildFromEncodedParts", "buildQueryData", "buildQueryDataFromMap", "getDomain", "getDomainEncoded", "getEffectiveScheme", "getFragment", "getFragmentEncoded", "getHost", "getParamValue", "getParamValues", "getPath", "getPathAndAfter", "getPathEncoded", "getPort", "getQueryData", "getScheme", "getUserInfo", "getUserInfoEncoded", "hasParam", "haveSameDomain", "makeUnique", "parseQueryData", "removeFragment", "removeParam", "setFragmentEncoded", "setParam", "setPath", "split"]
	}, {
		"name": "goog.uri.utils.QueryArray",
		"href": "namespace_goog_uri_utils.html#utils.QueryArray"
	}, {
		"name": "goog.uri.utils.QueryValue",
		"href": "namespace_goog_uri_utils.html#utils.QueryValue"
	}, {
		"name": "goog.uri.utils.CharCode_",
		"href": "enum_goog_uri_utils_CharCode_.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.uri.utils.ComponentIndex",
		"href": "enum_goog_uri_utils_ComponentIndex.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.uri.utils.StandardQueryParam",
		"href": "enum_goog_uri_utils_StandardQueryParam.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.userAgent",
		"href": "namespace_goog_userAgent.html",
		"namespace": true,
		"interface": false,
		"statics": ["ANDROID", "ASSUME_ANDROID", "ASSUME_ANY_VERSION", "ASSUME_EDGE", "ASSUME_GECKO", "ASSUME_IE", "ASSUME_IPAD", "ASSUME_IPHONE", "ASSUME_LINUX", "ASSUME_MAC", "ASSUME_MOBILE_WEBKIT", "ASSUME_OPERA", "ASSUME_WEBKIT", "ASSUME_WINDOWS", "ASSUME_X11", "DOCUMENT_MODE", "EDGE", "EDGE_OR_IE", "GECKO", "IE", "IPAD", "IPHONE", "LINUX", "MAC", "MOBILE", "OPERA", "PLATFORM", "SAFARI", "VERSION", "WEBKIT", "WINDOWS", "X11", "compare", "getNavigator", "getUserAgentString", "isDocumentMode", "isDocumentModeOrHigher", "isVersion", "isVersionOrHigher"]
	}, {
		"name": "goog.userAgent.adobeReader",
		"href": "namespace_goog_userAgent_adobeReader.html",
		"namespace": true,
		"interface": false,
		"statics": ["HAS_READER", "SILENT_PRINT", "VERSION"]
	}, {
		"name": "goog.userAgent.flash",
		"href": "namespace_goog_userAgent_flash.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_NO_FLASH", "HAS_FLASH", "VERSION", "isVersion"]
	}, {
		"name": "goog.userAgent.iphoto",
		"href": "namespace_goog_userAgent_iphoto.html",
		"namespace": true,
		"interface": false,
		"statics": ["HAS_IPHOTO", "VERSION", "isVersion"]
	}, {
		"name": "goog.userAgent.jscript",
		"href": "namespace_goog_userAgent_jscript.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_NO_JSCRIPT", "HAS_JSCRIPT", "VERSION", "isVersion"]
	}, {
		"name": "goog.userAgent.keyboard",
		"href": "namespace_goog_userAgent_keyboard.html",
		"namespace": true,
		"interface": false,
		"statics": ["ASSUME_MAC_KEYBOARD", "MAC_KEYBOARD"]
	}, {
		"name": "goog.userAgent.platform",
		"href": "namespace_goog_userAgent_platform.html",
		"namespace": true,
		"interface": false,
		"statics": ["VERSION", "isVersion"]
	}, {
		"name": "goog.userAgent.product",
		"href": "namespace_goog_userAgent_product.html",
		"namespace": true,
		"interface": false,
		"statics": ["ANDROID", "ASSUME_ANDROID", "ASSUME_CHROME", "ASSUME_FIREFOX", "ASSUME_IPAD", "ASSUME_IPHONE", "ASSUME_SAFARI", "CHROME", "FIREFOX", "IE", "IPAD", "IPHONE", "OPERA", "SAFARI", "VERSION"]
	}, {
		"name": "goog.userAgentTestUtil",
		"href": "namespace_goog_userAgentTestUtil.html",
		"namespace": true,
		"interface": false,
		"statics": ["getUserAgentDetected", "reinitializeUserAgent"]
	}, {
		"name": "goog.userAgentTestUtil.UserAgents",
		"href": "enum_goog_userAgentTestUtil_UserAgents.html",
		"namespace": false,
		"interface": false
	}, {
		"name": "goog.vec",
		"href": "namespace_goog_vec.html",
		"namespace": true,
		"interface": false,
		"statics": ["EPSILON"]
	}, {
		"name": "goog.vec.AnyType",
		"href": "namespace_goog_vec.html#vec.AnyType"
	}, {
		"name": "goog.vec.ArrayType",
		"href": "namespace_goog_vec.html#vec.ArrayType"
	}, {
		"name": "goog.vec.Float32",
		"href": "namespace_goog_vec.html#vec.Float32"
	}, {
		"name": "goog.vec.Float64",
		"href": "namespace_goog_vec.html#vec.Float64"
	}, {
		"name": "goog.vec.Number",
		"href": "namespace_goog_vec.html#vec.Number"
	}, {
		"name": "goog.vec.Float32Array",
		"href": "class_goog_vec_Float32Array.html",
		"namespace": false,
		"interface": false,
		"statics": ["Float32Array.BYTES_PER_ELEMENT"],
		"members": ["BYTES_PER_ELEMENT", "length", "set", "toString"]
	}, {
		"name": "goog.vec.Float64Array",
		"href": "class_goog_vec_Float64Array.html",
		"namespace": false,
		"interface": false,
		"statics": ["Float64Array.BYTES_PER_ELEMENT"],
		"members": ["BYTES_PER_ELEMENT", "length", "set", "toString"]
	}, {
		"name": "goog.vec.Mat3",
		"href": "namespace_goog_vec_Mat3.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "clone", "cloneFloat32", "cloneFloat64", "create", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat32Identity", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createFloat64Identity", "createFromArray", "createFromValues", "createIdentity", "createNumber", "createNumberIdentity", "equals", "getColumn", "getColumns", "getElement", "getRow", "getRows", "invert", "makeEulerZXZ", "makeIdentity", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "rotate", "rotateX", "rotateY", "rotateZ", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromRowMajorArray", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "transpose"]
	}, {
		"name": "goog.vec.Mat3.AnyType",
		"href": "namespace_goog_vec_Mat3.html#Mat3.AnyType"
	}, {
		"name": "goog.vec.Mat3.Float32",
		"href": "namespace_goog_vec_Mat3.html#Mat3.Float32"
	}, {
		"name": "goog.vec.Mat3.Float64",
		"href": "namespace_goog_vec_Mat3.html#Mat3.Float64"
	}, {
		"name": "goog.vec.Mat3.Mat3Like",
		"href": "namespace_goog_vec_Mat3.html#Mat3.Mat3Like"
	}, {
		"name": "goog.vec.Mat3.Number",
		"href": "namespace_goog_vec_Mat3.html#Mat3.Number"
	}, {
		"name": "goog.vec.Mat3.Type",
		"href": "namespace_goog_vec_Mat3.html#Mat3.Type"
	}, {
		"name": "goog.vec.Mat4",
		"href": "namespace_goog_vec_Mat4.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "clone", "cloneFloat32", "cloneFloat64", "create", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat32Identity", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createFloat64Identity", "createFromArray", "createFromValues", "createIdentity", "createNumber", "createNumberIdentity", "determinant", "equals", "getColumn", "getColumns", "getDiagonal", "getElement", "getRow", "getRows", "getTranslation", "invert", "makeEulerZXZ", "makeFrustum", "makeIdentity", "makeLookAt", "makeOrtho", "makePerspective", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "multVec3NoTranslate", "multVec3Projective", "multVec4", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromRowMajorArray", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "toLookAt", "translate", "transpose"]
	}, {
		"name": "goog.vec.Mat4.AnyType",
		"href": "namespace_goog_vec_Mat4.html#Mat4.AnyType"
	}, {
		"name": "goog.vec.Mat4.Float32",
		"href": "namespace_goog_vec_Mat4.html#Mat4.Float32"
	}, {
		"name": "goog.vec.Mat4.Float64",
		"href": "namespace_goog_vec_Mat4.html#Mat4.Float64"
	}, {
		"name": "goog.vec.Mat4.Mat4Like",
		"href": "namespace_goog_vec_Mat4.html#Mat4.Mat4Like"
	}, {
		"name": "goog.vec.Mat4.Number",
		"href": "namespace_goog_vec_Mat4.html#Mat4.Number"
	}, {
		"name": "goog.vec.Mat4.Type",
		"href": "namespace_goog_vec_Mat4.html#Mat4.Type"
	}, {
		"name": "goog.vec.Matrix3",
		"href": "namespace_goog_vec_Matrix3.html",
		"namespace": true,
		"interface": false,
		"statics": ["add", "clone", "create", "createFromArray", "createFromValues", "createIdentity", "equals", "getColumn", "getColumns", "getElement", "getRow", "getRows", "invert", "makeAxisAngleRotate", "makeScale", "makeTranslate", "multMat", "multVec3", "scale", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromRowMajorArray", "setFromValues", "setIdentity", "setRow", "setRowValues", "setRows", "setZero", "subtract", "transpose"]
	}, {
		"name": "goog.vec.Matrix3.Type",
		"href": "namespace_goog_vec_Matrix3.html#Matrix3.Type"
	}, {
		"name": "goog.vec.Matrix4",
		"href": "namespace_goog_vec_Matrix4.html",
		"namespace": true,
		"interface": false,
		"statics": ["add", "applyRotate", "applyScale", "applyTranslate", "clone", "create", "createFromArray", "createFromValues", "createIdentity", "determinant", "equals", "fromEulerZXZ", "getColumn", "getColumns", "getElement", "getRow", "getRows", "invert", "lookAt", "makeAxisAngleRotate", "makeFrustum", "makeOrtho", "makePerspective", "makeScale", "makeTranslate", "multMat", "multVec3", "multVec3NoTranslate", "multVec3Projective", "multVec3ToArray", "multVec4", "multVec4ToArray", "scale", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromRowMajorArray", "setFromValues", "setIdentity", "setRow", "setRowValues", "setRows", "setZero", "subtract", "toEulerZXZ", "toLookAt", "transpose"]
	}, {
		"name": "goog.vec.Matrix4.Type",
		"href": "namespace_goog_vec_Matrix4.html#Matrix4.Type"
	}, {
		"name": "goog.vec.Quaternion",
		"href": "namespace_goog_vec_Quaternion.html",
		"namespace": true,
		"interface": false,
		"statics": ["add", "cloneFloat32", "cloneFloat64", "concat", "conjugate", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createNumber", "dot", "fromAngleAxis", "fromRotationMatrix4", "magnitude", "magnitudeSquared", "negate", "nlerp", "normalize", "scale", "setFromArray", "setFromValues", "slerp", "toAngleAxis", "toRotationMatrix4"]
	}, {
		"name": "goog.vec.Quaternion.AnyType",
		"href": "namespace_goog_vec_Quaternion.html#Quaternion.AnyType"
	}, {
		"name": "goog.vec.Quaternion.Float32",
		"href": "namespace_goog_vec_Quaternion.html#Quaternion.Float32"
	}, {
		"name": "goog.vec.Quaternion.Float64",
		"href": "namespace_goog_vec_Quaternion.html#Quaternion.Float64"
	}, {
		"name": "goog.vec.Quaternion.Number",
		"href": "namespace_goog_vec_Quaternion.html#Quaternion.Number"
	}, {
		"name": "goog.vec.Ray",
		"href": "class_goog_vec_Ray.html",
		"namespace": false,
		"interface": false,
		"members": ["dir", "equals", "origin", "set", "setDir", "setOrigin"]
	}, {
		"name": "goog.vec.Vec2",
		"href": "namespace_goog_vec_Vec2.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "cloneFloat32", "cloneFloat64", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createNumber", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "subtract"]
	}, {
		"name": "goog.vec.Vec2.AnyType",
		"href": "namespace_goog_vec_Vec2.html#Vec2.AnyType"
	}, {
		"name": "goog.vec.Vec2.Float32",
		"href": "namespace_goog_vec_Vec2.html#Vec2.Float32"
	}, {
		"name": "goog.vec.Vec2.Float64",
		"href": "namespace_goog_vec_Vec2.html#Vec2.Float64"
	}, {
		"name": "goog.vec.Vec2.Number",
		"href": "namespace_goog_vec_Vec2.html#Vec2.Number"
	}, {
		"name": "goog.vec.Vec3",
		"href": "namespace_goog_vec_Vec3.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "clone", "cloneFloat32", "cloneFloat64", "create", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createFromArray", "createFromValues", "createNumber", "cross", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "subtract"]
	}, {
		"name": "goog.vec.Vec3.AnyType",
		"href": "namespace_goog_vec_Vec3.html#Vec3.AnyType"
	}, {
		"name": "goog.vec.Vec3.Float32",
		"href": "namespace_goog_vec_Vec3.html#Vec3.Float32"
	}, {
		"name": "goog.vec.Vec3.Float64",
		"href": "namespace_goog_vec_Vec3.html#Vec3.Float64"
	}, {
		"name": "goog.vec.Vec3.Number",
		"href": "namespace_goog_vec_Vec3.html#Vec3.Number"
	}, {
		"name": "goog.vec.Vec3.Type",
		"href": "namespace_goog_vec_Vec3.html#Vec3.Type"
	}, {
		"name": "goog.vec.Vec3.Vec3Like",
		"href": "namespace_goog_vec_Vec3.html#Vec3.Vec3Like"
	}, {
		"name": "goog.vec.Vec4",
		"href": "namespace_goog_vec_Vec4.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "clone", "cloneFloat32", "cloneFloat64", "create", "createFloat32", "createFloat32FromArray", "createFloat32FromValues", "createFloat64", "createFloat64FromArray", "createFloat64FromValues", "createFromArray", "createFromValues", "createNumber", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "subtract"]
	}, {
		"name": "goog.vec.Vec4.AnyType",
		"href": "namespace_goog_vec_Vec4.html#Vec4.AnyType"
	}, {
		"name": "goog.vec.Vec4.Float32",
		"href": "namespace_goog_vec_Vec4.html#Vec4.Float32"
	}, {
		"name": "goog.vec.Vec4.Float64",
		"href": "namespace_goog_vec_Vec4.html#Vec4.Float64"
	}, {
		"name": "goog.vec.Vec4.Number",
		"href": "namespace_goog_vec_Vec4.html#Vec4.Number"
	}, {
		"name": "goog.vec.Vec4.Type",
		"href": "namespace_goog_vec_Vec4.html#Vec4.Type"
	}, {
		"name": "goog.vec.Vec4.Vec4Like",
		"href": "namespace_goog_vec_Vec4.html#Vec4.Vec4Like"
	}, {
		"name": "goog.vec.mat3d",
		"href": "namespace_goog_vec_mat3d.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "create", "equals", "getColumn", "getColumns", "getElement", "getRow", "getRows", "invert", "makeEulerZXZ", "makeIdentity", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "rotate", "rotateX", "rotateY", "rotateZ", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromMat3d", "setFromMat3f", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "transpose"]
	}, {
		"name": "goog.vec.mat3d.Type",
		"href": "namespace_goog_vec_mat3d.html#mat3d.Type"
	}, {
		"name": "goog.vec.mat3f",
		"href": "namespace_goog_vec_mat3f.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "create", "equals", "getColumn", "getColumns", "getElement", "getRow", "getRows", "invert", "makeEulerZXZ", "makeIdentity", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "rotate", "rotateX", "rotateY", "rotateZ", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromMat3d", "setFromMat3f", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "transpose"]
	}, {
		"name": "goog.vec.mat3f.Type",
		"href": "namespace_goog_vec_mat3f.html#mat3f.Type"
	}, {
		"name": "goog.vec.mat4d",
		"href": "namespace_goog_vec_mat4d.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "create", "determinant", "equals", "getColumn", "getColumns", "getDiagonal", "getElement", "getRow", "getRows", "getTranslation", "invert", "makeEulerZXZ", "makeFrustum", "makeIdentity", "makeLookAt", "makeOrtho", "makePerspective", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "multVec3NoTranslate", "multVec3Projective", "multVec4", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromMat4d", "setFromMat4f", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "toLookAt", "translate", "transpose"]
	}, {
		"name": "goog.vec.mat4d.Type",
		"href": "namespace_goog_vec_mat4d.html#mat4d.Type"
	}, {
		"name": "goog.vec.mat4f",
		"href": "namespace_goog_vec_mat4f.html",
		"namespace": true,
		"interface": false,
		"statics": ["addMat", "create", "determinant", "equals", "getColumn", "getColumns", "getDiagonal", "getElement", "getRow", "getRows", "getTranslation", "invert", "makeEulerZXZ", "makeFrustum", "makeIdentity", "makeLookAt", "makeOrtho", "makePerspective", "makeRotate", "makeRotateX", "makeRotateY", "makeRotateZ", "makeScale", "makeTranslate", "makeZero", "multMat", "multScalar", "multVec3", "multVec3NoTranslate", "multVec3Projective", "multVec4", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "setColumn", "setColumnValues", "setColumns", "setDiagonal", "setDiagonalValues", "setElement", "setFromArray", "setFromMat4d", "setFromMat4f", "setFromValues", "setRow", "setRowValues", "setRows", "subMat", "toEulerZXZ", "toLookAt", "translate", "transpose"]
	}, {
		"name": "goog.vec.mat4f.Type",
		"href": "namespace_goog_vec_mat4f.html#mat4f.Type"
	}, {
		"name": "goog.vec.vec2d",
		"href": "namespace_goog_vec_vec2d.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "componentDivide", "componentMultiply", "create", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec2d", "setFromVec2f", "subtract"]
	}, {
		"name": "goog.vec.vec2d.Type",
		"href": "namespace_goog_vec_vec2d.html#vec2d.Type"
	}, {
		"name": "goog.vec.vec2f",
		"href": "namespace_goog_vec_vec2f.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "componentDivide", "componentMultiply", "create", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec2d", "setFromVec2f", "subtract"]
	}, {
		"name": "goog.vec.vec2f.Type",
		"href": "namespace_goog_vec_vec2f.html#vec2f.Type"
	}, {
		"name": "goog.vec.vec3d",
		"href": "namespace_goog_vec_vec3d.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "create", "cross", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec3d", "setFromVec3f", "subtract"]
	}, {
		"name": "goog.vec.vec3d.Type",
		"href": "namespace_goog_vec_vec3d.html#vec3d.Type"
	}, {
		"name": "goog.vec.vec3f",
		"href": "namespace_goog_vec_vec3f.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "create", "cross", "direction", "distance", "distanceSquared", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec3d", "setFromVec3f", "subtract"]
	}, {
		"name": "goog.vec.vec3f.Type",
		"href": "namespace_goog_vec_vec3f.html#vec3f.Type"
	}, {
		"name": "goog.vec.vec4d",
		"href": "namespace_goog_vec_vec4d.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "create", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec4d", "setFromVec4f", "subtract"]
	}, {
		"name": "goog.vec.vec4d.Type",
		"href": "namespace_goog_vec_vec4d.html#vec4d.Type"
	}, {
		"name": "goog.vec.vec4f",
		"href": "namespace_goog_vec_vec4f.html",
		"namespace": true,
		"interface": false,
		"statics": ["abs", "add", "create", "dot", "equals", "lerp", "magnitude", "magnitudeSquared", "max", "min", "negate", "normalize", "scale", "setFromArray", "setFromValues", "setFromVec4d", "setFromVec4f", "subtract"]
	}, {
		"name": "goog.vec.vec4f.Type",
		"href": "namespace_goog_vec_vec4f.html#vec4f.Type"
	}, {
		"name": "goog.webgl",
		"href": "namespace_goog_webgl.html",
		"namespace": true,
		"interface": false,
		"statics": ["ACTIVE_ATTRIBUTES", "ACTIVE_TEXTURE", "ACTIVE_UNIFORMS", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "ALPHA", "ALPHA_BITS", "ALWAYS", "ARRAY_BUFFER", "ARRAY_BUFFER_BINDING", "ATTACHED_SHADERS", "BACK", "BLEND", "BLEND_COLOR", "BLEND_DST_ALPHA", "BLEND_DST_RGB", "BLEND_EQUATION", "BLEND_EQUATION_ALPHA", "BLEND_EQUATION_RGB", "BLEND_SRC_ALPHA", "BLEND_SRC_RGB", "BLUE_BITS", "BOOL", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "BROWSER_DEFAULT_WEBGL", "BUFFER_SIZE", "BUFFER_USAGE", "BYTE", "CCW", "CLAMP_TO_EDGE", "COLOR_ATTACHMENT0", "COLOR_BUFFER_BIT", "COLOR_CLEAR_VALUE", "COLOR_WRITEMASK", "COMPILE_STATUS", "COMPRESSED_RGBA_S3TC_DXT1_EXT", "COMPRESSED_RGBA_S3TC_DXT3_EXT", "COMPRESSED_RGBA_S3TC_DXT5_EXT", "COMPRESSED_RGB_S3TC_DXT1_EXT", "COMPRESSED_TEXTURE_FORMATS", "CONSTANT_ALPHA", "CONSTANT_COLOR", "CONTEXT_LOST_WEBGL", "CULL_FACE", "CULL_FACE_MODE", "CURRENT_PROGRAM", "CURRENT_VERTEX_ATTRIB", "CW", "DECR", "DECR_WRAP", "DELETE_STATUS", "DEPTH_ATTACHMENT", "DEPTH_BITS", "DEPTH_BUFFER_BIT", "DEPTH_CLEAR_VALUE", "DEPTH_COMPONENT", "DEPTH_COMPONENT16", "DEPTH_FUNC", "DEPTH_RANGE", "DEPTH_STENCIL", "DEPTH_STENCIL_ATTACHMENT", "DEPTH_TEST", "DEPTH_WRITEMASK", "DITHER", "DONT_CARE", "DST_ALPHA", "DST_COLOR", "DYNAMIC_DRAW", "ELEMENT_ARRAY_BUFFER", "ELEMENT_ARRAY_BUFFER_BINDING", "EQUAL", "FASTEST", "FLOAT", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "FRAGMENT_SHADER", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "FRAMEBUFFER", "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", "FRAMEBUFFER_BINDING", "FRAMEBUFFER_COMPLETE", "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", "FRAMEBUFFER_UNSUPPORTED", "FRONT", "FRONT_AND_BACK", "FRONT_FACE", "FUNC_ADD", "FUNC_REVERSE_SUBTRACT", "FUNC_SUBTRACT", "GENERATE_MIPMAP_HINT", "GEQUAL", "GREATER", "GREEN_BITS", "HALF_FLOAT_OES", "HIGH_FLOAT", "HIGH_INT", "INCR", "INCR_WRAP", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "INVALID_ENUM", "INVALID_FRAMEBUFFER_OPERATION", "INVALID_OPERATION", "INVALID_VALUE", "INVERT", "KEEP", "LEQUAL", "LESS", "LINEAR", "LINEAR_MIPMAP_LINEAR", "LINEAR_MIPMAP_NEAREST", "LINES", "LINE_LOOP", "LINE_STRIP", "LINE_WIDTH", "LINK_STATUS", "LOW_FLOAT", "LOW_INT", "LUMINANCE", "LUMINANCE_ALPHA", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MEDIUM_FLOAT", "MEDIUM_INT", "MIRRORED_REPEAT", "NEAREST", "NEAREST_MIPMAP_LINEAR", "NEAREST_MIPMAP_NEAREST", "NEVER", "NICEST", "NONE", "NOTEQUAL", "NO_ERROR", "ONE", "ONE_MINUS_CONSTANT_ALPHA", "ONE_MINUS_CONSTANT_COLOR", "ONE_MINUS_DST_ALPHA", "ONE_MINUS_DST_COLOR", "ONE_MINUS_SRC_ALPHA", "ONE_MINUS_SRC_COLOR", "OUT_OF_MEMORY", "PACK_ALIGNMENT", "POINTS", "POLYGON_OFFSET_FACTOR", "POLYGON_OFFSET_FILL", "POLYGON_OFFSET_UNITS", "RED_BITS", "RENDERBUFFER", "RENDERBUFFER_ALPHA_SIZE", "RENDERBUFFER_BINDING", "RENDERBUFFER_BLUE_SIZE", "RENDERBUFFER_DEPTH_SIZE", "RENDERBUFFER_GREEN_SIZE", "RENDERBUFFER_HEIGHT", "RENDERBUFFER_INTERNAL_FORMAT", "RENDERBUFFER_RED_SIZE", "RENDERBUFFER_STENCIL_SIZE", "RENDERBUFFER_WIDTH", "RENDERER", "REPEAT", "REPLACE", "RGB", "RGB565", "RGB5_A1", "RGBA", "RGBA4", "SAMPLER_2D", "SAMPLER_CUBE", "SAMPLES", "SAMPLE_ALPHA_TO_COVERAGE", "SAMPLE_BUFFERS", "SAMPLE_COVERAGE", "SAMPLE_COVERAGE_INVERT", "SAMPLE_COVERAGE_VALUE", "SCISSOR_BOX", "SCISSOR_TEST", "SHADER_TYPE", "SHADING_LANGUAGE_VERSION", "SHORT", "SRC_ALPHA", "SRC_ALPHA_SATURATE", "SRC_COLOR", "STATIC_DRAW", "STENCIL_ATTACHMENT", "STENCIL_BACK_FAIL", "STENCIL_BACK_FUNC", "STENCIL_BACK_PASS_DEPTH_FAIL", "STENCIL_BACK_PASS_DEPTH_PASS", "STENCIL_BACK_REF", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "STENCIL_BITS", "STENCIL_BUFFER_BIT", "STENCIL_CLEAR_VALUE", "STENCIL_FAIL", "STENCIL_FUNC", "STENCIL_INDEX", "STENCIL_INDEX8", "STENCIL_PASS_DEPTH_FAIL", "STENCIL_PASS_DEPTH_PASS", "STENCIL_REF", "STENCIL_TEST", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STREAM_DRAW", "SUBPIXEL_BITS", "TEXTURE", "TEXTURE0", "TEXTURE1", "TEXTURE10", "TEXTURE11", "TEXTURE12", "TEXTURE13", "TEXTURE14", "TEXTURE15", "TEXTURE16", "TEXTURE17", "TEXTURE18", "TEXTURE19", "TEXTURE2", "TEXTURE20", "TEXTURE21", "TEXTURE22", "TEXTURE23", "TEXTURE24", "TEXTURE25", "TEXTURE26", "TEXTURE27", "TEXTURE28", "TEXTURE29", "TEXTURE3", "TEXTURE30", "TEXTURE31", "TEXTURE4", "TEXTURE5", "TEXTURE6", "TEXTURE7", "TEXTURE8", "TEXTURE9", "TEXTURE_2D", "TEXTURE_BINDING_2D", "TEXTURE_BINDING_CUBE_MAP", "TEXTURE_CUBE_MAP", "TEXTURE_CUBE_MAP_NEGATIVE_X", "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_MAG_FILTER", "TEXTURE_MAX_ANISOTROPY_EXT", "TEXTURE_MIN_FILTER", "TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TRIANGLES", "TRIANGLE_FAN", "TRIANGLE_STRIP", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "UNPACK_ALIGNMENT", "UNPACK_COLORSPACE_CONVERSION_WEBGL", "UNPACK_FLIP_Y_WEBGL", "UNPACK_PREMULTIPLY_ALPHA_WEBGL", "UNSIGNED_BYTE", "UNSIGNED_INT", "UNSIGNED_SHORT", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1", "UNSIGNED_SHORT_5_6_5", "VALIDATE_STATUS", "VENDOR", "VERSION", "VERTEX_ARRAY_BINDING_OES", "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", "VERTEX_ATTRIB_ARRAY_ENABLED", "VERTEX_ATTRIB_ARRAY_NORMALIZED", "VERTEX_ATTRIB_ARRAY_POINTER", "VERTEX_ATTRIB_ARRAY_SIZE", "VERTEX_ATTRIB_ARRAY_STRIDE", "VERTEX_ATTRIB_ARRAY_TYPE", "VERTEX_SHADER", "VIEWPORT", "ZERO"]
	}, {
		"name": "goog.window",
		"href": "namespace_goog_window.html",
		"namespace": true,
		"interface": false,
		"statics": ["DEFAULT_POPUP_HEIGHT", "DEFAULT_POPUP_TARGET", "DEFAULT_POPUP_WIDTH", "open", "openBlank", "popup"]
	}, {
		"name": "svgpan",
		"href": "namespace_svgpan.html",
		"namespace": true,
		"interface": false
	}, {
		"name": "svgpan.SvgPan",
		"href": "class_svgpan_SvgPan.html",
		"namespace": false,
		"interface": false,
		"members": ["endPanOrDrag", "getState", "handleMove", "setDragEnabled", "setPanEnabled", "setZoomEnabled", "setZoomScale"]
	}, {
		"name": "svgpan.SvgPan.State",
		"href": "enum_svgpan_SvgPan_State.html",
		"namespace": false,
		"interface": false
	}]
};
