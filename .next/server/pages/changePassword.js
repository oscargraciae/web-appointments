module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Q37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AlertError = ({
  title,
  description
}) => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    status: "error"
  }, title && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertTitle"], null, title), description && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AlertDescription"], {
    fontSize: "sm",
    textAlign: "left"
  }, description));
};

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ODVH");


/***/ }),

/***/ "7OMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_DOMAIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_API; });
/* unused harmony export APP_NAME */
/* unused harmony export TOKEN_MAPBOX */
// export const API_DOMAIN =  process.browser ? 'http://localhost:8001' : 'http://api:8001'
const API_DOMAIN = "https://api.reserly.mx" || false; // export const API_DOMAIN = 'https://api.reserly.mx';
// export const API_DOMAIN = 'http://api:8001'

const URL_API = `${API_DOMAIN}/api/v1`;
const APP_NAME = 'Reserly';
const TOKEN_MAPBOX = 'pk.eyJ1Ijoib2dyYWNpYSIsImEiOiJfdmpwaktNIn0.h9MNtUvMtDA2UxWbnMIh_g';

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "ODVH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./src/components/InputField.tsx
var InputField = __webpack_require__("yS0j");

// EXTERNAL MODULE: ./src/components/general/AlertError.tsx
var AlertError = __webpack_require__("/Q37");

// EXTERNAL MODULE: ./src/components/Wrapper.tsx
var Wrapper = __webpack_require__("uHth");

// EXTERNAL MODULE: ./src/services/userService.tsx
var userService = __webpack_require__("bQ0D");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// CONCATENATED MODULE: ./src/validations/changePassword.tsx

const changePasswordSchemaValidation = external_yup_["object"]().shape({
  password: external_yup_["string"]().required('Debes indicar una contraseña.'),
  confirmPassword: external_yup_["string"]().required('Debes confirmar la contraseña.')
});
// CONCATENATED MODULE: ./src/pages/changePassword.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const getServerSideProps = async ({
  query
}) => {
  return {
    props: _objectSpread({}, query)
  };
};

const ChangePassword = ({
  token
}) => {
  const router = Object(router_["useRouter"])();
  const toast = Object(react_["useToast"])();
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    0: success,
    1: setSuccess
  } = Object(external_react_["useState"])(false); // const [isLoading, setIsLoading] = useState(false);
  // const [password, setPassword] = useState('');

  const onSubmit = async values => {
    if (values.password === values.confirmPassword) {
      const response = await new userService["a" /* UserService */]().changePasword({
        token,
        password: values.password
      });

      if (response.success) {
        toast({
          status: 'success',
          title: 'Contraseña actualizada',
          position: 'top'
        }); // setSuccess(true);

        router.push('/');
      } else {
        setError(response.message);
      }
    } else {
      setError('Las contraseñas no coinciden');
    }
  };

  const initialState = {
    password: '',
    confirmPassword: ''
  };
  return __jsx(Wrapper["a" /* Wrapper */], {
    variant: "small"
  }, __jsx(react_["Box"], {
    h: "100vh"
  }, __jsx(react_["Heading"], {
    mb: 6
  }, "Cambiar contrase\xF1a"), __jsx(external_formik_["Formik"], {
    initialValues: initialState,
    onSubmit: onSubmit,
    validationSchema: changePasswordSchemaValidation
  }, ({
    isSubmitting,
    errors,
    touched
  }) => __jsx(external_formik_["Form"], null, __jsx(react_["VStack"], {
    spacing: 4
  }, __jsx(InputField["c" /* PasswordInputField */], {
    inputSize: "lg",
    name: "password",
    label: "Nueva contrase\xF1a"
  }), __jsx(InputField["c" /* PasswordInputField */], {
    inputSize: "lg",
    name: "confirmPassword",
    label: "Confirmar nueva contrase\xF1a"
  }), __jsx(react_["Button"], {
    mt: 40,
    isLoading: isSubmitting,
    type: "submit",
    size: "lg",
    variant: "primary",
    isFullWidth: true
  }, "Cambiar mi contrase\xF1a"), error && __jsx(AlertError["a" /* AlertError */], {
    description: error
  }))))));
};

/* harmony default export */ var changePassword = __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "bQ0D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("n1X7");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7OMa");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UserService extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor() {
    super(_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* URL_API */ "a"]);

    _defineProperty(this, "login", data => this.instance.post('/users/auth', data));

    _defineProperty(this, "signup", data => this.instance.post('/users', data));

    _defineProperty(this, "forgotPasword", data => this.instance.post('/users/forgot-password', data));

    _defineProperty(this, "changePasword", data => this.instance.post('/users/change-password', data));

    _defineProperty(this, "logout", () => this.instance.get('/users/auth/logout'));

    _defineProperty(this, "getMe", () => this.instance.get('/users'));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "n1X7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class HttpClient {
  constructor(baseURL) {
    _defineProperty(this, "instance", void 0);

    _defineProperty(this, "_initializeResponseInterceptor", () => {
      this.instance.interceptors.response.use(this._handleResponse, this._handleError);
    });

    _defineProperty(this, "_handleResponse", ({
      data
    }) => data);

    _defineProperty(this, "_handleError", error => Promise.reject(error));

    // /axios.defaults.withCredentials = true;
    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL,
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    this._initializeResponseInterceptor();
  }

}

/***/ }),

/***/ "uHth":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = ({
  children,
  variant = "regular"
}) => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 8,
    mx: "auto",
    maxW: variant === 'regular' ? "1180px" : "400px",
    w: "100%"
  }, children);
};

/***/ }),

/***/ "yS0j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputField; });
/* unused harmony export TextareaField */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PasswordInputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputNumberField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/WcL");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
//   label: string,
//   name: string,
//   errors?: string
//   inputSize?: string
// }
const InputField = (_ref) => {
  let {
    label,
    errors,
    inputSize = 'md'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "errors", "inputSize"]);

  const [field, {
    error,
    touched
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!(touched && error)
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    fontWeight: "bold",
    fontSize: "sm",
    htmlFor: field.name
  }, label), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
    size: inputSize
  }, field, props, {
    id: field.name
  })), touched && error ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], null, error) : null);
};
const TextareaField = (_ref2) => {
  let {
    label,
    errors,
    inputSize = 'md'
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["label", "errors", "inputSize"]);

  const [field, {
    error,
    touched
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!(touched && error)
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    fontWeight: "bold",
    fontSize: "sm",
    htmlFor: field.name
  }, label), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Textarea"], _extends({
    size: inputSize
  }, field, props, {
    id: field.name
  })), touched && error ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], null, error) : null);
};
const PasswordInputField = (_ref3) => {
  let {
    label = 'Contraseña'
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["label"]);

  const [field, {
    error,
    touched
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!(touched && error)
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    htmlFor: "description",
    fontSize: "sm",
    fontWeight: "bold"
  }, label), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
    type: showPassword ? "text" : "password"
  }, field, props, {
    id: field.name
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"], null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "Search database",
    variant: "ghost",
    icon: !showPassword ? Object(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillEye"])({}) : Object(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillEyeInvisible"])({}),
    onClick: () => setShowPassword(!showPassword)
  }))), touched && error ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], null, error) : null);
};
const InputNumberField = (_ref4) => {
  let {
    label,
    errors,
    inputSize = 'md'
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["label", "errors", "inputSize"]);

  const [field, {
    error,
    touched
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!(touched && error)
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    fontWeight: "bold",
    fontSize: "sm",
    htmlFor: field.name
  }, label), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["NumberInput"], {
    precision: 0
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["NumberInputField"], _extends({}, field, props, {
    id: field.name
  }))), touched && error ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], null, error) : null);
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });