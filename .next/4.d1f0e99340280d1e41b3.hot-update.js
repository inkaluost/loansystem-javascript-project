webpackHotUpdate(4,{

/***/ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/node_modules/warning/warning.js"));

var _brcast = _interopRequireDefault(__webpack_require__("./node_modules/brcast/dist/brcast.es.js"));

var _themeListener = _interopRequireWildcard(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MuiThemeProvider, _React$Component);

  // We are not using the React state in order to avoid unnecessary rerender.
  function MuiThemeProvider(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MuiThemeProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MuiThemeProvider).call(this)); // Get the outer theme from the context, can be null

    _this.broadcast = (0, _brcast.default)();
    _this.unsubscribeId = null;
    _this.outerTheme = null;
    _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(props.theme));

    return _this;
  }

  (0, _createClass2.default)(MuiThemeProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _this$props = this.props,
          sheetsManager = _this$props.sheetsManager,
          disableStylesGeneration = _this$props.disableStylesGeneration;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
      }
    } // Simple merge between the outer theme and the local theme

  }, {
    key: "mergeOuterLocalTheme",
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         true ? (0, _warning.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : void 0;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _extends2.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);
  return MuiThemeProvider;
}(_react.default.Component);

MuiThemeProvider.propTypes =  true ? {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes.default.bool,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,

  /**
   * A theme object.
   */
  theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : {};
MuiThemeProvider.propTypes =  true ? (0, _exactProp.default)(MuiThemeProvider.propTypes) : {};
MuiThemeProvider.childContextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
MuiThemeProvider.contextTypes = (0, _extends2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
var _default = MuiThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createGenerateClassName", {
  enumerable: true,
  get: function get() {
    return _createGenerateClassName.default;
  }
});
Object.defineProperty(exports, "createMuiTheme", {
  enumerable: true,
  get: function get() {
    return _createMuiTheme.default;
  }
});
Object.defineProperty(exports, "jssPreset", {
  enumerable: true,
  get: function get() {
    return _jssPreset.default;
  }
});
Object.defineProperty(exports, "MuiThemeProvider", {
  enumerable: true,
  get: function get() {
    return _MuiThemeProvider.default;
  }
});
Object.defineProperty(exports, "createStyles", {
  enumerable: true,
  get: function get() {
    return _createStyles.default;
  }
});
Object.defineProperty(exports, "withStyles", {
  enumerable: true,
  get: function get() {
    return _withStyles.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
});

var _createGenerateClassName = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/jssPreset.js"));

var _MuiThemeProvider = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"));

var _createStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createStyles.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/wrapDisplayName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTheme).call(this));
        _this.unsubscribeId = null;
        _this.state = {};
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["innerRef"]);
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme,
            ref: innerRef
          }, other));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

    WithTheme.propTypes =  true ? {
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : {};
    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (true) {
      WithTheme.displayName = (0, _wrapDisplayName.default)(Component, 'WithTheme');
    }

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/exactProp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.specialProperty = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
exports.specialProperty = specialProperty;

function exactProp(propTypes) {
  /* istanbul ignore if */
  if (false) {
    return propTypes;
  }

  return (0, _extends3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following properties are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

var _default = exactProp;
exports.default = _default;

/***/ }),

/***/ "./node_modules/brcast/dist/brcast.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);


/***/ }),

/***/ "./src/components/Countries.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Table__ = __webpack_require__("./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableBody__ = __webpack_require__("./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell__ = __webpack_require__("./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableHead__ = __webpack_require__("./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableRow__ = __webpack_require__("./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__);
var _jsxFileName = "/home/inka/GitRepos/WebOhjelmoinnin_jatko/with-typescript-app/src/components/Countries.tsx";









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

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      maxWidth: 700,
      minWidth: 700
    }
  };
};

function Countries(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Table___default.a, {
    className: classes.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableHead___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableRow___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
    numeric: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Sijoitus"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
    numeric: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, "V\xE4est\xF6nm\xE4\xE4r\xE4"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
    numeric: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "Osuus"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableBody___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, maat.map(function (maa) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableRow___default.a, {
      key: maa.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
      numeric: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }, maa.position), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }, maa.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
      numeric: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }, maa.population), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableCell___default.a, {
      numeric: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, maa.percentage));
  }))));
}

Countries.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_styles__["withStyles"])(styles)(Countries));

/***/ })

})
//# sourceMappingURL=4.d1f0e99340280d1e41b3.hot-update.js.map