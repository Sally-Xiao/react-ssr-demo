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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar App = function App(_ref) {\n  var _ref$initData = _ref.initData,\n      initData = _ref$initData === void 0 ? {} : _ref$initData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initData),\n      _useState2 = _slicedToArray(_useState, 1),\n      data = _useState2[0];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"video-list-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"slide\",\n    style: {\n      marginBottom: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: data.topImg,\n    alt: \"\\u6218\\u6BD2\",\n    width: \"100%\",\n    height: \"auto\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"video-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: {\n      margin: 0,\n      padding: 0,\n      listStyle: 'none',\n      display: 'flex',\n      justifyContent: 'space-between'\n    }\n  }, data.list.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      style: {\n        flex: 1\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"#\",\n      title: item.title,\n      target: \"_blank\",\n      style: {\n        display: 'block',\n        textAlign: 'center',\n        textDecoration: 'none'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: item.img,\n      alt: item.title,\n      width: \"210\",\n      height: \"107\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"title\",\n      style: {\n        marginTop: '10px',\n        fontSize: '16px',\n        color: '#333'\n      }\n    }, item.title)));\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/server/helper.js":
/*!******************************!*\
  !*** ./src/server/helper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var getInitData = function getInitData() {\n  return Promise.resolve({\n    topImg: \"https://liangcang-material.alicdn.com/prod/upload/48c3bfd6a4ec46bdba53782242de1673.jpg?x-oss-process=image/resize,w_2074/interlace,1/quality,Q_80/sharpen,100\",\n    list: [{\n      id: 1,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/f310a52c5eb84560bcf5908b753b6036.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '铁甲灌篮·终极battle'\n    }, {\n      id: 2,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/048e258619f74db78a486ffe45e61d3d.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '什刹海·舌尖上的北京'\n    }, {\n      id: 3,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/7d366efd4dde43aa8a3103119fd991e8.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '野性赤道🔥开播'\n    }, {\n      id: 4,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/1629990bc1f7415bb21a3a019f689e57.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '篮球少年王·热血'\n    }, {\n      id: 5,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/69252c63416b41a4aed2b5606556b30e.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '喜欢你💕明晚上线'\n    }, {\n      id: 6,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/f369c783b94b4dbf86580773a9dcc00c.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '苍生大医🔥医者仁心'\n    }, {\n      id: 7,\n      img: 'https://liangcang-material.alicdn.com/prod/upload/f369c783b94b4dbf86580773a9dcc00c.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',\n      title: '妖神记·黑狱篇'\n    }]\n  });\n};\n\nexports.getInitData = getInitData;\n\n//# sourceURL=webpack:///./src/server/helper.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ \"./src/server/helper.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\nvar profiler = __webpack_require__(/*! v8-profiler-node8 */ \"v8-profiler-node8\");\n\nvar process = __webpack_require__(/*! process */ \"process\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar profilerRunning = false;\n\nfunction toggleProfiling() {\n  if (profilerRunning) {\n    var profiler1 = profiler.stopProfiling();\n    profiler1[\"export\"]().pipe(fs.createWriteStream(path.resolve(process.env.HOME, './myapp-' + Date.now() + '.cpuprofile'))).on('finish', profiler.deleteAllProfiles);\n    profilerRunning = false;\n    return;\n  }\n\n  profiler.startProfiling();\n  profilerRunning = true;\n  console.log('started profiling');\n}\n\ntoggleProfiling();\nprocess.on('SIGTERM', function () {\n  toggleProfiling();\n});\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('/', function (req, res, next) {\n  _helper__WEBPACK_IMPORTED_MODULE_4___default.a.getInitData().then(function (data) {\n    res.write(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"zh-CN\\\">\\n            <head>\\n                <title>\\u5B81XX\\u64AD\\u653E\\u5668</title>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <meta name=\\\"keywords\\\" content=\\\"\\u64AD\\u653E\\u5668, \\u70ED\\u95E8\\u7535\\u89C6\\u5267, \\u4E0A\\u6620\\\">\\n                <meta name=\\\"description\\\" content=\\\"\\u6700\\u6743\\u5A01\\u7684\\u7535\\u89C6\\u5267\\u64AD\\u653E\\u6307\\u5357, \\u4F60\\u503C\\u5F97\\u62E5\\u6709\\\">\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\\n        \");\n    var stream = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToStaticNodeStream\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      initData: data\n    }));\n    stream.pipe(res, {\n      end: false\n    });\n    stream.on('end', function () {\n      res.write(\"\\n                </div>\\n                    </body>\\n                </html>\\n            \");\n      res.end();\n    });\n  })[\"catch\"](next);\n});\napp.listen(4200, function () {\n  console.log('The server is at port 4200');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"process\");\n\n//# sourceURL=webpack:///external_%22process%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "v8-profiler-node8":
/*!************************************!*\
  !*** external "v8-profiler-node8" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"v8-profiler-node8\");\n\n//# sourceURL=webpack:///external_%22v8-profiler-node8%22?");

/***/ })

/******/ });