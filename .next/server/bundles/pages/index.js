module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Home__ = __webpack_require__("./src/Home.tsx");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_Home__["a" /* default */]);

/***/ }),

/***/ "./src/Home.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__React1a_vko35__ = __webpack_require__("./src/React1a_vko35.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__React1b_vko35__ = __webpack_require__("./src/React1b_vko35.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__React2a_vko36__ = __webpack_require__("./src/React2a_vko36.tsx");
var _jsxFileName = "/home/inka/GitRepos/WebOhjelmoinnin_jatko/with-typescript-app/src/Home.tsx";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "this is home.tsx.", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__React1a_vko35__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__React1b_vko35__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__React2a_vko36__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});

/***/ }),

/***/ "./src/React1a_vko35.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/inka/GitRepos/WebOhjelmoinnin_jatko/with-typescript-app/src/React1a_vko35.tsx";

var dateNow = new Date();
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "t\xE4n\xE4\xE4n on ".concat(dateNow.getDate(), ".").concat(dateNow.getMonth() + 1, ".").concat(dateNow.getFullYear()));
});

/***/ }),

/***/ "./src/React1b_vko35.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/inka/GitRepos/WebOhjelmoinnin_jatko/with-typescript-app/src/React1b_vko35.tsx";

var maat = [{
  "ID": "1067",
  "name": "China",
  "population": "1359821466",
  "percentage": "19,66%",
  "position": "1"
}, {
  "ID": "1068",
  "name": "India",
  "population": "1205624727",
  "percentage": "17,43%",
  "position": "2"
}, {
  "ID": "1069",
  "name": "United States of America",
  "population": "312237216",
  "percentage": "4,51%",
  "position": "3"
}, {
  "ID": "1070",
  "name": "Indonesia",
  "population": "240676485",
  "percentage": "3,48%",
  "position": "4"
}, {
  "ID": "1071",
  "name": "Brazil",
  "population": "195210154",
  "percentage": "2,82%",
  "position": "5"
}, {
  "ID": "1072",
  "name": "Pakistan",
  "population": "173113821",
  "percentage": "2,50%",
  "position": "6"
}, {
  "ID": "1073",
  "name": "Nigeria",
  "population": "159685249",
  "percentage": "2,31%",
  "position": "7"
}, {
  "ID": "1074",
  "name": "Bangladesh",
  "population": "151125475",
  "percentage": "2,19%",
  "position": "8"
}, {
  "ID": "1075",
  "name": "Russian Federation",
  "population": "143615916",
  "percentage": "2,08%",
  "position": "9"
}, {
  "ID": "1076",
  "name": "Japan",
  "population": "127352833",
  "percentage": "1,84%",
  "position": "10"
}, {
  "ID": "1077",
  "name": "Mexico",
  "population": "117886404",
  "percentage": "1,70%",
  "position": "11"
}, {
  "ID": "1078",
  "name": "Philippines",
  "population": "93444322",
  "percentage": "1,35%",
  "position": "12"
}, {
  "ID": "1079",
  "name": "Viet Nam",
  "population": "89047402",
  "percentage": "1,29%",
  "position": "13"
}, {
  "ID": "1080",
  "name": "Ethiopia",
  "population": "87095281",
  "percentage": "1,26%",
  "position": "14"
}, {
  "ID": "1081",
  "name": "Germany",
  "population": "83017404",
  "percentage": "1,20%",
  "position": "15"
}, {
  "ID": "1082",
  "name": "Egypt",
  "population": "78075705",
  "percentage": "1,13%",
  "position": "16"
}, {
  "ID": "1083",
  "name": "Iran (Islamic Republic of)",
  "population": "74462314",
  "percentage": "1,08%",
  "position": "17"
}, {
  "ID": "1084",
  "name": "Turkey",
  "population": "72137546",
  "percentage": "1,04%",
  "position": "18"
}, {
  "ID": "1085",
  "name": "Thailand",
  "population": "66400698",
  "percentage": "0,96%",
  "position": "19"
}, {
  "ID": "1086",
  "name": "France",
  "population": "63230866",
  "percentage": "0,91%",
  "position": "20"
}, {
  "ID": "1087",
  "name": "Democratic Republic of the Congo",
  "population": "62191161",
  "percentage": "0,90%",
  "position": "21"
}, {
  "ID": "1088",
  "name": "United Kingdom",
  "population": "62066350",
  "percentage": "0,90%",
  "position": "22"
}, {
  "ID": "1089",
  "name": "Italy",
  "population": "60508978",
  "percentage": "0,87%",
  "position": "23"
}, {
  "ID": "1090",
  "name": "Myanmar",
  "population": "51931231",
  "percentage": "0,75%",
  "position": "24"
}, {
  "ID": "1091",
  "name": "South Africa",
  "population": "51452352",
  "percentage": "0,74%",
  "position": "25"
}, {
  "ID": "1092",
  "name": "Republic of Korea",
  "population": "48453931",
  "percentage": "0,70%",
  "position": "26"
}, {
  "ID": "1093",
  "name": "Colombia",
  "population": "46444798",
  "percentage": "0,67%",
  "position": "27"
}, {
  "ID": "1094",
  "name": "Spain",
  "population": "46182038",
  "percentage": "0,67%",
  "position": "28"
}, {
  "ID": "1095",
  "name": "Ukraine",
  "population": "46044304",
  "percentage": "0,67%",
  "position": "29"
}, {
  "ID": "1096",
  "name": "United Republic of Tanzania",
  "population": "44973330",
  "percentage": "0,65%",
  "position": "30"
}];

var React1b_vko35 = function React1b_vko35() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, maat.map(function (maa) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, "COUNTRY: ".concat(maa.name, ", POPULATION: ").concat(maa.population));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (React1b_vko35);

/***/ }),

/***/ "./src/React2a_vko36.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/inka/GitRepos/WebOhjelmoinnin_jatko/with-typescript-app/src/React2a_vko36.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Clock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    var _this;

    _classCallCheck(this, Clock);

    _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "updateCounter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          counter: _this.state.counter + 1
        });
      }
    });
    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = window.setInterval(function () {
        return _this2.updateCounter();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.timerID);
    }
  }, {
    key: "render",
    value: function render() {
      var dateNow = new Date();
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.updateCounter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Increase"), "clock, counter: ", this.state.counter, "t\xE4n\xE4\xE4n on  ".concat(dateNow.getHours(), ".").concat(dateNow.getMinutes(), ".").concat(dateNow.getSeconds(), "."), typeof window !== 'undefined' && window.toString());
    }
  }]);

  return Clock;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Clock);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map