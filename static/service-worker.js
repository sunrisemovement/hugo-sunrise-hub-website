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
/******/ 	__webpack_require__.p = "/sunrise-hub-website/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ServiceWorker/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ServiceWorker/index.ts":
/*!************************************!*\
  !*** ./src/ServiceWorker/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const CACHE_NAME = 'sunrise-hub-website-v1';
const cacheForeverAfterFirstLoad = async (event) => {
    event.respondWith((async () => {
        const request = event.request;
        const cache = await caches.open(CACHE_NAME);
        const matching = await cache.match(request);
        if (!matching) {
            const response = await fetch(request);
            await cache.put(request, response.clone());
            return response;
        }
        else {
            return matching;
        }
    })());
};
const shouldCacheForeverAfterFirstLoad = (event) => {
    return  false
        //   || (event.request.url.endsWith('.js') && event.request.method === 'GET')
        //   || (event.request.url.endsWith('.css') && event.request.method === 'GET')
        || (event.request.url.startsWith('https://maps.wikimedia.org') && event.request.method === 'GET');
};
const alwaysFetch = (event) => {
    event.respondWith(fetch(event.request));
};
self.addEventListener('install', (event_) => {
    const event = event_;
    const worker = self;
    event.waitUntil(worker.skipWaiting());
});
self.addEventListener('activate', (event_) => {
    const event = event_;
    const worker = self;
    event.waitUntil(worker.clients.claim());
});
self.addEventListener('fetch', (event) => {
    const fetchEvent = event;
    if (shouldCacheForeverAfterFirstLoad(fetchEvent))
        cacheForeverAfterFirstLoad(fetchEvent);
    else
        alwaysFetch(fetchEvent);
});


/***/ })

/******/ });
//# sourceMappingURL=service-worker.js.map