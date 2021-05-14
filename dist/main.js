/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/workbox-broadcast-update/BroadcastCacheUpdate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/BroadcastCacheUpdate.js ***!
  \***********************************************************************/
/*! exports provided: BroadcastCacheUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastCacheUpdate", function() { return BroadcastCacheUpdate; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/resultingClientExists.js */ "./node_modules/workbox-core/_private/resultingClientExists.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _responsesAreSame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsesAreSame.js */ "./node_modules/workbox-broadcast-update/responsesAreSame.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-broadcast-update/utils/constants.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-broadcast-update/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







// UA-sniff Safari: https://stackoverflow.com/questions/7944460/detect-safari-browser
// TODO(philipwalton): remove once this Safari bug fix has been released.
// https://bugs.webkit.org/show_bug.cgi?id=201169
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
/**
 * Generates the default payload used in update messages. By default the
 * payload includes the `cacheName` and `updatedURL` fields.
 *
 * @return Object
 * @private
 */
function defaultPayloadGenerator(data) {
    return {
        cacheName: data.cacheName,
        updatedURL: data.request.url,
    };
}
/**
 * Uses the `postMessage()` API to inform any open windows/tabs when a cached
 * response has been updated.
 *
 * For efficiency's sake, the underlying response bodies are not compared;
 * only specific response headers are checked.
 *
 * @memberof module:workbox-broadcast-update
 */
class BroadcastCacheUpdate {
    /**
     * Construct a BroadcastCacheUpdate instance with a specific `channelName` to
     * broadcast messages on
     *
     * @param {Object} [options]
     * @param {Array<string>} [options.headersToCheck=['content-length', 'etag', 'last-modified']]
     *     A list of headers that will be used to determine whether the responses
     *     differ.
     * @param {string} [options.generatePayload] A function whose return value
     *     will be used as the `payload` field in any cache update messages sent
     *     to the window clients.
     */
    constructor({ headersToCheck, generatePayload, } = {}) {
        this._headersToCheck = headersToCheck || _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_HEADERS_TO_CHECK"];
        this._generatePayload = generatePayload || defaultPayloadGenerator;
    }
    /**
     * Compares two [Responses](https://developer.mozilla.org/en-US/docs/Web/API/Response)
     * and sends a message (via `postMessage()`) to all window clients if the
     * responses differ (note: neither of the Responses can be
     * {@link http://stackoverflow.com/questions/39109789|opaque}).
     *
     * The message that's posted has the following format (where `payload` can
     * be customized via the `generatePayload` option the instance is created
     * with):
     *
     * ```
     * {
     *   type: 'CACHE_UPDATED',
     *   meta: 'workbox-broadcast-update',
     *   payload: {
     *     cacheName: 'the-cache-name',
     *     updatedURL: 'https://example.com/'
     *   }
     * }
     * ```
     *
     * @param {Object} options
     * @param {Response} [options.oldResponse] Cached response to compare.
     * @param {Response} options.newResponse Possibly updated response to compare.
     * @param {Request} options.request The request.
     * @param {string} options.cacheName Name of the cache the responses belong
     *     to. This is included in the broadcast message.
     * @param {Event} options.event event The event that triggered
     *     this possible cache update.
     * @return {Promise} Resolves once the update is sent.
     */
    async notifyIfUpdated(options) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(options.cacheName, 'string', {
                moduleName: 'workbox-broadcast-update',
                className: 'BroadcastCacheUpdate',
                funcName: 'notifyIfUpdated',
                paramName: 'cacheName',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(options.newResponse, Response, {
                moduleName: 'workbox-broadcast-update',
                className: 'BroadcastCacheUpdate',
                funcName: 'notifyIfUpdated',
                paramName: 'newResponse',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(options.request, Request, {
                moduleName: 'workbox-broadcast-update',
                className: 'BroadcastCacheUpdate',
                funcName: 'notifyIfUpdated',
                paramName: 'request',
            });
        }
        // Without two responses there is nothing to compare.
        if (!options.oldResponse) {
            return;
        }
        if (!Object(_responsesAreSame_js__WEBPACK_IMPORTED_MODULE_4__["responsesAreSame"])(options.oldResponse, options.newResponse, this._headersToCheck)) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Newer response found (and cached) for:`, options.request.url);
            }
            const messageData = {
                type: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__["CACHE_UPDATED_MESSAGE_TYPE"],
                meta: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__["CACHE_UPDATED_MESSAGE_META"],
                payload: this._generatePayload(options),
            };
            // For navigation requests, wait until the new window client exists
            // before sending the message
            if (options.request.mode === 'navigate') {
                let resultingClientId;
                if (options.event instanceof FetchEvent) {
                    resultingClientId = options.event.resultingClientId;
                }
                const resultingWin = await Object(workbox_core_private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_2__["resultingClientExists"])(resultingClientId);
                // Safari does not currently implement postMessage buffering and
                // there's no good way to feature detect that, so to increase the
                // chances of the message being delivered in Safari, we add a timeout.
                // We also do this if `resultingClientExists()` didn't return a client,
                // which means it timed out, so it's worth waiting a bit longer.
                if (!resultingWin || isSafari) {
                    // 3500 is chosen because (according to CrUX data) 80% of mobile
                    // websites hit the DOMContentLoaded event in less than 3.5 seconds.
                    // And presumably sites implementing service worker are on the
                    // higher end of the performance spectrum.
                    await Object(workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_1__["timeout"])(3500);
                }
            }
            const windows = await self.clients.matchAll({ type: 'window' });
            for (const win of windows) {
                win.postMessage(messageData);
            }
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-broadcast-update/BroadcastUpdatePlugin.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/BroadcastUpdatePlugin.js ***!
  \************************************************************************/
/*! exports provided: BroadcastUpdatePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastUpdatePlugin", function() { return BroadcastUpdatePlugin; });
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var _BroadcastCacheUpdate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BroadcastCacheUpdate.js */ "./node_modules/workbox-broadcast-update/BroadcastCacheUpdate.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-broadcast-update/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This plugin will automatically broadcast a message whenever a cached response
 * is updated.
 *
 * @memberof module:workbox-broadcast-update
 */
class BroadcastUpdatePlugin {
    /**
     * Construct a BroadcastCacheUpdate instance with the passed options and
     * calls its [`notifyIfUpdated()`]{@link module:workbox-broadcast-update.BroadcastCacheUpdate~notifyIfUpdated}
     * method whenever the plugin's `cacheDidUpdate` callback is invoked.
     *
     * @param {Object} [options]
     * @param {Array<string>} [options.headersToCheck=['content-length', 'etag', 'last-modified']]
     *     A list of headers that will be used to determine whether the responses
     *     differ.
     * @param {string} [options.generatePayload] A function whose return value
     *     will be used as the `payload` field in any cache update messages sent
     *     to the window clients.
     */
    constructor(options) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-sw` and `workbox-runtime-caching` handlers when an entry is
         * added to a cache.
         *
         * @private
         * @param {Object} options The input object to this function.
         * @param {string} options.cacheName Name of the cache being updated.
         * @param {Response} [options.oldResponse] The previous cached value, if any.
         * @param {Response} options.newResponse The new value in the cache.
         * @param {Request} options.request The request that triggered the update.
         * @param {Request} options.event The event that triggered the update.
         */
        this.cacheDidUpdate = async (options) => {
            Object(workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_0__["dontWaitFor"])(this._broadcastUpdate.notifyIfUpdated(options));
        };
        this._broadcastUpdate = new _BroadcastCacheUpdate_js__WEBPACK_IMPORTED_MODULE_1__["BroadcastCacheUpdate"](options);
    }
}



/***/ }),

/***/ "./node_modules/workbox-broadcast-update/_version.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/_version.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:broadcast-update:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-broadcast-update/index.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/index.js ***!
  \********************************************************/
/*! exports provided: BroadcastCacheUpdate, BroadcastUpdatePlugin, responsesAreSame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BroadcastCacheUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BroadcastCacheUpdate.js */ "./node_modules/workbox-broadcast-update/BroadcastCacheUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastCacheUpdate", function() { return _BroadcastCacheUpdate_js__WEBPACK_IMPORTED_MODULE_0__["BroadcastCacheUpdate"]; });

/* harmony import */ var _BroadcastUpdatePlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BroadcastUpdatePlugin.js */ "./node_modules/workbox-broadcast-update/BroadcastUpdatePlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastUpdatePlugin", function() { return _BroadcastUpdatePlugin_js__WEBPACK_IMPORTED_MODULE_1__["BroadcastUpdatePlugin"]; });

/* harmony import */ var _responsesAreSame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsesAreSame.js */ "./node_modules/workbox-broadcast-update/responsesAreSame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsesAreSame", function() { return _responsesAreSame_js__WEBPACK_IMPORTED_MODULE_2__["responsesAreSame"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-broadcast-update/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * @module workbox-broadcast-update
 */



/***/ }),

/***/ "./node_modules/workbox-broadcast-update/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/index.mjs ***!
  \*********************************************************/
/*! exports provided: BroadcastCacheUpdate, BroadcastUpdatePlugin, responsesAreSame */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-broadcast-update/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastCacheUpdate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["BroadcastCacheUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastUpdatePlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["BroadcastUpdatePlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsesAreSame", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["responsesAreSame"]; });



/***/ }),

/***/ "./node_modules/workbox-broadcast-update/responsesAreSame.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/responsesAreSame.js ***!
  \*******************************************************************/
/*! exports provided: responsesAreSame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsesAreSame", function() { return responsesAreSame; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-broadcast-update/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Given two `Response's`, compares several header values to see if they are
 * the same or not.
 *
 * @param {Response} firstResponse
 * @param {Response} secondResponse
 * @param {Array<string>} headersToCheck
 * @return {boolean}
 *
 * @memberof module:workbox-broadcast-update
 */
const responsesAreSame = (firstResponse, secondResponse, headersToCheck) => {
    if (true) {
        if (!(firstResponse instanceof Response &&
            secondResponse instanceof Response)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-responses-are-same-args');
        }
    }
    const atLeastOneHeaderAvailable = headersToCheck.some((header) => {
        return firstResponse.headers.has(header) &&
            secondResponse.headers.has(header);
    });
    if (!atLeastOneHeaderAvailable) {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].warn(`Unable to determine where the response has been updated ` +
                `because none of the headers that would be checked are present.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Attempting to compare the following: `, firstResponse, secondResponse, headersToCheck);
        }
        // Just return true, indicating the that responses are the same, since we
        // can't determine otherwise.
        return true;
    }
    return headersToCheck.every((header) => {
        const headerStateComparison = firstResponse.headers.has(header) ===
            secondResponse.headers.has(header);
        const headerValueComparison = firstResponse.headers.get(header) ===
            secondResponse.headers.get(header);
        return headerStateComparison && headerValueComparison;
    });
};



/***/ }),

/***/ "./node_modules/workbox-broadcast-update/utils/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-broadcast-update/utils/constants.js ***!
  \******************************************************************/
/*! exports provided: CACHE_UPDATED_MESSAGE_TYPE, CACHE_UPDATED_MESSAGE_META, DEFAULT_HEADERS_TO_CHECK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_UPDATED_MESSAGE_TYPE", function() { return CACHE_UPDATED_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_UPDATED_MESSAGE_META", function() { return CACHE_UPDATED_MESSAGE_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEADERS_TO_CHECK", function() { return DEFAULT_HEADERS_TO_CHECK; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-broadcast-update/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const CACHE_UPDATED_MESSAGE_TYPE = 'CACHE_UPDATED';
const CACHE_UPDATED_MESSAGE_META = 'workbox-broadcast-update';
const DEFAULT_HEADERS_TO_CHECK = [
    'content-length',
    'etag',
    'last-modified',
];


/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/*! exports provided: dontWaitFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dontWaitFor", function() { return dontWaitFor; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    promise.then(() => { });
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_private/resultingClientExists.js":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/resultingClientExists.js ***!
  \*********************************************************************/
/*! exports provided: resultingClientExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultingClientExists", function() { return resultingClientExists; });
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await Object(_timeout_js__WEBPACK_IMPORTED_MODULE_0__["timeout"])(100);
    }
    return resultingWindow;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_trip_form_output_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/trip-form-output.scss */ "./src/client/styles/trip-form-output.scss");
/* harmony import */ var _styles_trip_form_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/trip-form.scss */ "./src/client/styles/trip-form.scss");














/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_broadcast_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-broadcast-update */ "./node_modules/workbox-broadcast-update/index.mjs");


// Personal API Key for OpenWeatherMap API
const APIKey = '46612cfd63ae0eb9ca04308c63fd244b';

// Make Date + Time
const makeDateAndTime = () => {
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    if (today.getHours() > 12) {
        let dateTime = `${date} | ${today.getHours() - 12}:${today.getMinutes()} p.m.`;
        return dateTime;
    } else {
        let dateTime = `${date} | ${today.getHours()}:${today.getMinutes()} a.m.`;
        return dateTime;
    }
};

// Event listener to add function to existing HTML DOM element
document.querySelector('.submit-btn').addEventListener('click', generate);

/* Function called by event listener */
async function generate(event) {
    event.preventDefault();

    // Get user trip dates + city
    const tripCity = document.querySelector('.trip-city').value
    const departDate = document.querySelector('.depart-date').value;
    const returnDate = document.querySelector('.return-date').value;

    console.log(departDate, returnDate, tripCity);

    await postData('/api/add', {
        city: tripCity,
        departure: departDate,
        arrival: returnDate
    });

    // await getData('/all');
}

/* Function to GET Web API Data*/
const getWeather = async (userZip, APIKey) => {
    try {
        const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${APIKey}`);
        return await request.json();
    }
    catch (e) {
        console.log('FAILED TO FETCH WEATHER API DATA:', e);
    }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    try {
        console.log(`DATA SENT TO SERVER ${makeDateAndTime()}`);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};

/* Function to GET Project Data */
const getData = async (url) => {
    try {
        const request = await fetch(url);
        const data = await request.json();

        // UPDATE UI
        document.querySelector('#journal-prompt').style.display = "none";
        document.querySelector('#entryContainer').style.display = "block";

        // entry date
        document.querySelector('#date-label').innerHTML = data.date;

        // mood / weather / temp containers
        let mood = document.querySelector('#moodIcon');
        let weather = document.querySelector("#weather");
        let temp = document.querySelector('#temp');

        // changes mood icon + temp to match weather icon from API
        const colorChange = (hex) => {
            mood.style.color = hex;
            temp.style.color = hex;
        };

        const iconColor = () => {
            if (parseInt(data.weather.slice(0, 2)) === 3) {
                colorChange('#f2f2f1');
            } else if (data.weather.includes('n')) {
                colorChange('#48484a');
            } else if (parseInt(data.weather.slice(0, 2)) < 3) {
                colorChange('#ec6f4d');
            } else if (parseInt(data.weather.slice(0, 2)) === 10) {
                colorChange('#ec6f4d');
            } else {
                colorChange('#48484a');
            }
        };

        iconColor();

        // mood
        mood.classList.add(`${data.moodLabel}`);
        // mood name
        document.querySelector('#mood-name').innerHTML = data.mood;

        // weather
        let weatherIcon = document.querySelector('#weather').firstElementChild;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather}@2x.png`;
        // weather name
        document.querySelector('#weather-name').innerHTML = data.weatherName;

        // temp
        temp.innerHTML = data.temp;
        // daily high + low
        document.querySelector('#temp-feels').innerHTML = data.highLow;

        // journal entry
        let feelings = document.querySelector('#content');
        feelings.innerText = data.entry;

        console.log(`DATA POSTED TO UI ${makeDateAndTime()}`);
    }
    catch (e) {
        console.log('DATA NOT RETREIVED FROM SERVER', e);
    }
};

// EXTRA NON RUBRIC JS

// back btn actions: remove previous entries + back btn + display prompt
// document.querySelector('#back').addEventListener('click', function () {
// window.location.reload();
// });

// export {
//     makeDateAndTime,
//     generate,
//     postData,
//     getData,
//     getWeather
// }

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/trip-form-output.scss":
/*!*************************************************!*\
  !*** ./src/client/styles/trip-form-output.scss ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/trip-form.scss":
/*!******************************************!*\
  !*** ./src/client/styles/trip-form.scss ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=main.js.map