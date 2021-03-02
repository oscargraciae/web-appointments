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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "KOAY":
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "QeBL":
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

// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__("2FnJ");

// EXTERNAL MODULE: ./src/components/Wrapper.tsx
var Wrapper = __webpack_require__("uHth");

// EXTERNAL MODULE: external "react-places-autocomplete"
var external_react_places_autocomplete_ = __webpack_require__("KOAY");
var external_react_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_react_places_autocomplete_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/utils/stringToUrl.tsx
var stringToUrl = __webpack_require__("bI8x");

// CONCATENATED MODULE: ./src/components/home/InputSearch.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const InputSearch = ({}) => {
  // hooks
  const router = Object(router_["useRouter"])(); // states

  const {
    0: geoAddress,
    1: setGeoAddress
  } = Object(external_react_["useState"])('');
  const {
    0: geoAddressSelected,
    1: setGeoAddressSelected
  } = Object(external_react_["useState"])('');
  const {
    0: placeId,
    1: setPlaceId
  } = Object(external_react_["useState"])(''); // const { changeLocation } = useGoogleMaps({ coords, setCoords });

  const handleSelect = async address => {
    const results = await Object(external_react_places_autocomplete_["geocodeByAddress"])(address);

    if (results) {
      setPlaceId(results[0].place_id);
    }

    setGeoAddress(address);
    setGeoAddressSelected(address);
  };

  const onSubmit = e => {
    e.preventDefault();
    router.push(`/explore/todo/${Object(stringToUrl["a" /* stringToUrl */])(geoAddressSelected)}?placeId=${placeId}`);
  };

  return __jsx("form", {
    onSubmit: onSubmit
  }, __jsx(react_["Stack"], {
    mt: 0,
    isInline: true,
    bg: "#FFF",
    px: 2,
    py: 2,
    boxShadow: "0px 5px 10px rgba(0,0,0,.08)",
    borderRadius: 6
  }, __jsx(external_react_places_autocomplete_default.a, {
    value: geoAddress,
    onChange: geoaddress => {
      setGeoAddress(geoaddress);
      setGeoAddressSelected('');
    },
    onSelect: handleSelect,
    searchOptions: {
      componentRestrictions: {
        country: ['mx']
      }
    }
  }, ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
    loading
  }) => __jsx(react_["Box"], {
    w: "100%"
  }, __jsx(react_["Input"], _extends({}, getInputProps(), {
    placeholder: "Ubicaci\xF3n",
    size: "lg",
    border: "0px",
    fontWeight: "600"
  })), __jsx(react_["Box"], {
    shadow: "md",
    background: "#FFFFFF",
    zIndex: 10,
    pos: "absolute",
    _hover: {
      cursor: 'pointer'
    }
  }, loading && __jsx(react_["Progress"], {
    size: "xs",
    isIndeterminate: true,
    colorScheme: "green"
  }), suggestions.map((suggestion, index) => __jsx(react_["Box"], _extends({}, getSuggestionItemProps(suggestion), {
    textAlign: "left",
    px: 6,
    py: 4,
    _hover: {
      background: 'primaryLight'
    }
  }), __jsx(react_["Text"], null, suggestion.description)))))), __jsx(react_["Button"], {
    variant: "primary",
    size: "lg",
    isDisabled: !geoAddressSelected && !placeId,
    type: "submit"
  }, "Buscar")));
};
// EXTERNAL MODULE: ./src/services/categoryService.tsx
var categoryService = __webpack_require__("ieLr");

// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = external_react_default.a.createElement;







// geo: {
//   range: [ 3147849728, 3147851775 ],
//   country: 'MX',
//   region: 'NLE',
//   eu: '0',
//   timezone: 'America/Monterrey',
//   city: 'Apodaca',
//   ll: [ 25.7657, -100.2159 ],
//   metro: 0,
//   area: 5
// }
const getServerSideProps = async ({
  query
}) => {
  let address = query.geo.city;
  return {
    props: {
      id: 1,
      data: query,
      address,
      geo: query.geo
    }
  };
};

const Index = ({
  address,
  geo
}) => {
  // state
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    const fetchCategories = async () => {
      const {
        categories
      } = await new categoryService["a" /* CategoryService */]().getAll();
      setCategories(categories);
    };

    fetchCategories();
  }, []);
  return pages_jsx(react_["Flex"], {
    justify: "center",
    align: "center",
    w: "100%",
    bgSize: "cover",
    direction: "column",
    mb: 16
  }, pages_jsx(react_["Flex"], {
    w: "100%",
    h: "340px",
    alignItems: "center",
    bg: "linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-main.jpg);",
    bgSize: "cover",
    bgRepeat: "no-repeat"
  }, pages_jsx(react_["Text"], {
    mx: "auto",
    pt: 10,
    width: {
      base: '90%',
      md: '800px'
    },
    mt: 2,
    fontSize: {
      base: 'xl',
      md: '4xl'
    },
    fontWeight: "bold",
    lineHeight: "short",
    textAlign: "center",
    color: "#FFF",
    zIndex: 20
  }, "Encuentra servicios profesionales cerca de ti y reserva f\xE1cil, r\xE1pido y seguro.")), pages_jsx(react_["Box"], {
    width: {
      base: '90%',
      md: '700px'
    },
    bg: "transparent",
    p: "16px",
    rounded: "sm",
    zIndex: 10,
    mt: "-50px"
  }, pages_jsx(InputSearch, null), pages_jsx(react_["Wrap"], {
    spacing: 4,
    mt: 6,
    justify: "center"
  }, categories.map(item => pages_jsx(react_["WrapItem"], {
    key: item.id
  }, pages_jsx(react_["Link"], {
    borderRadius: 3,
    w: "144px",
    textAlign: "center",
    fontWeight: "600",
    py: 2,
    bg: "secondary",
    color: "#FFF",
    href: `/explore/${item.name}/${Object(stringToUrl["a" /* stringToUrl */])(address)}`
  }, item.name))))), pages_jsx(Wrapper["a" /* Wrapper */], null, pages_jsx(react_["Flex"], {
    zIndex: 10,
    my: 10
  }, pages_jsx(react_["Flex"], {
    justify: "space-between",
    alignItems: "center",
    direction: {
      base: 'column',
      md: 'row'
    }
  }, pages_jsx(react_["Box"], {
    w: {
      base: '80%',
      md: '32%'
    },
    my: 4
  }, pages_jsx(react_["HStack"], {
    alignItems: "center"
  }, pages_jsx(ti_["TiLocation"], {
    size: 24
  }), pages_jsx(react_["Text"], {
    fontWeight: "bold",
    fontSize: "lg"
  }, "Ubicaci\xF3n")), pages_jsx(react_["Text"], {
    color: "subtext"
  }, "Reserly te permite localizar negocios cercanos a tu ubicaci\xF3n.")), pages_jsx(react_["Box"], {
    w: {
      base: '80%',
      md: '32%'
    },
    my: 4
  }, pages_jsx(react_["HStack"], null, pages_jsx(ti_["TiStar"], {
    size: 24
  }), pages_jsx(react_["Text"], {
    fontWeight: "bold",
    fontSize: "lg"
  }, "Mayor confianza")), pages_jsx(react_["Text"], {
    color: "subtext"
  }, "Elige el negocio que se adapte a lo que tu necesitas, comparando los servicios, precio y comentarios.")), pages_jsx(react_["Box"], {
    w: {
      base: '80%',
      md: '32%'
    },
    my: 4
  }, pages_jsx(react_["HStack"], null, pages_jsx(ti_["TiCalendar"], {
    size: 24
  }), pages_jsx(react_["Text"], {
    fontWeight: "bold",
    fontSize: "lg"
  }, "Reservaciones")), pages_jsx(react_["Text"], {
    color: "subtext"
  }, "Selecciona los servicios que necesitas y reserva de manera segura, disponible las 24 horas del d\xEDa."))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "bI8x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stringToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return urlToString; });
const stringToUrl = str => {
  // return str.replace(/[^A-Z0-9]+/ig, "_");
  return str.replace(/ /g, '-');
};
const urlToString = str => {
  // return str.replace(/[^A-Z0-9]+/ig, "_");
  return str.replace(/-/g, ' ');
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ieLr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("n1X7");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7OMa");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CategoryService extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor() {
    super(_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* URL_API */ "a"]);

    _defineProperty(this, "getAll", () => this.instance.get('/categories'));
  }

}

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });