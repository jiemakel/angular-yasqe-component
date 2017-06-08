(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("yasgui-yasqe"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "yasgui-yasqe"], factory);
	else if(typeof exports === 'object')
		exports["yasqe-component"] = factory(require("angular"), require("yasgui-yasqe"));
	else
		root["yasqe-component"] = factory(root["angular"], root["YASQE"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
var YASQE = __webpack_require__(1);
var YasqeComponentController = (function () {
    /* @ngInject */
    YasqeComponentController.$inject = ["$element", "$timeout"];
    function YasqeComponentController($element, $timeout) {
        this.$element = $element;
        this.$timeout = $timeout;
    }
    YasqeComponentController.prototype.$postLink = function () {
        var _this = this;
        if (!this.content)
            this.content = '';
        this.yasqe = YASQE(this.$element[0], { createShareLink: false, sparql: { endpoint: this.endpoint, callbacks: { complete: function (results) { return _this.onQueryResults({ results: results }); } }, showQueryButton: this.showQueryButton } });
        this.yasqe.setValue(this.content);
        this.yasqe.on('change', function () { return _this.onContentChanged({ content: _this.yasqe.getValue() }); });
        this.onInit({ yasqe: this.yasqe });
    };
    YasqeComponentController.prototype.$onChanges = function (changes) {
        if (changes.endpoint && !changes.endpoint.isFirstChange())
            this.yasqe.options.sparql.endpoint = changes.endpoint.currentValue;
        if (changes.content && !changes.content.isFirstChange() && changes.content.currentValue !== this.yasqe.getValue())
            this.yasqe.setValue(changes.content.currentValue);
    };
    return YasqeComponentController;
}());
exports.YasqeComponentController = YasqeComponentController;
var YasqeComponent = (function () {
    function YasqeComponent() {
        this.bindings = {
            content: '<',
            onContentChanged: '&',
            onQueryResults: '&',
            endpoint: '<',
            onInit: '&',
            showQueryButton: '@'
        };
        this.controller = YasqeComponentController;
    }
    return YasqeComponent;
}());
exports.YasqeComponent = YasqeComponent;
angular.module('fi.seco.yasqe', []).component('yasqe', new YasqeComponent());


/***/ })
/******/ ]);
});
//# sourceMappingURL=yasqe-component.js.map