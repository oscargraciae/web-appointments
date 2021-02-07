webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _user_ModalAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/ModalAuth */ \"./src/components/user/ModalAuth.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/userContext */ \"./src/context/userContext.tsx\");\nvar _jsxFileName = \"/Users/oscargracia/Documents/proyectos/boombook/web/src/components/Layout.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onClose = _useDisclosure.onClose,\n      onOpen = _useDisclosure.onOpen;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      authView = _useState[0],\n      setauthView = _useState[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_userContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]),\n      openModalLogin = _useContext.openModalLogin;\n\n  var handleAuthModal = function handleAuthModal(view) {\n    setauthView(view);\n    onOpen();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (authView || openModalLogin) && __jsx(_user_ModalAuth__WEBPACK_IMPORTED_MODULE_3__[\"ModalAuth\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    onOpen: onOpen,\n    view: authView,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 41\n    }\n  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    handleAuthModal: handleAuthModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Layout, \"dH7dcARaHIVaFHh6+e8XhBkLkYQ=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeD9iMjg1Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbk9wZW4iLCJ1c2VTdGF0ZSIsImF1dGhWaWV3Iiwic2V0YXV0aFZpZXciLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJvcGVuTW9kYWxMb2dpbiIsImhhbmRsZUF1dGhNb2RhbCIsInZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsdUJBQ3pCQyxzRUFBYSxFQURZO0FBQUEsTUFDckRDLE1BRHFELGtCQUNyREEsTUFEcUQ7QUFBQSxNQUM3Q0MsT0FENkMsa0JBQzdDQSxPQUQ2QztBQUFBLE1BQ3BDQyxNQURvQyxrQkFDcENBLE1BRG9DOztBQUFBLGtCQUc3QkMsc0RBQVEsRUFIcUI7QUFBQSxNQUd0REMsUUFIc0Q7QUFBQSxNQUc1Q0MsV0FINEM7O0FBQUEsb0JBS2xDQyx3REFBVSxDQUFDQyxnRUFBRCxDQUx3QjtBQUFBLE1BS3JEQyxjQUxxRCxlQUtyREEsY0FMcUQ7O0FBTzdELE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFrQjtBQUN4Q0wsZUFBVyxDQUFDSyxJQUFELENBQVg7QUFDQVIsVUFBTTtBQUNQLEdBSEQ7O0FBS0EsU0FDRSxtRUFDSSxDQUFDRSxRQUFRLElBQUlJLGNBQWIsS0FBZ0MsTUFBQyx5REFBRDtBQUFXLFVBQU0sRUFBRVIsTUFBbkI7QUFBMkIsV0FBTyxFQUFFQyxPQUFwQztBQUE2QyxVQUFNLEVBQUVDLE1BQXJEO0FBQTZELFFBQUksRUFBRUUsUUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURwQyxFQUVFLE1BQUMsK0NBQUQ7QUFBUSxtQkFBZSxFQUFFSyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsUUFESCxDQUpGLEVBT0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdELENBdkJNOztHQUFNRCxNO1VBQ3lCRSw4RDs7O0tBRHpCRixNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCB1c2VEaXNjbG9zdXJlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi9OYXZCYXInO1xuaW1wb3J0IHsgTW9kYWxBdXRoIH0gZnJvbSAnLi91c2VyL01vZGFsQXV0aCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJTZXJ2aWNlJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC91c2VyQ29udGV4dCc7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbkNsb3NlLCBvbk9wZW4gfSA9IHVzZURpc2Nsb3N1cmUoKTtcblxuICBjb25zdCBbYXV0aFZpZXcsIHNldGF1dGhWaWV3XSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCB7IG9wZW5Nb2RhbExvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVBdXRoTW9kYWwgPSAodmlldyA6bnVtYmVyKSA9PiB7XG4gICAgc2V0YXV0aFZpZXcodmlldyk7XG4gICAgb25PcGVuKCk7ICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyAoYXV0aFZpZXcgfHwgb3Blbk1vZGFsTG9naW4pICYmIDxNb2RhbEF1dGggaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IG9uT3Blbj17b25PcGVufSB2aWV3PXthdXRoVmlld30gIC8+IH1cbiAgICAgIDxIZWFkZXIgaGFuZGxlQXV0aE1vZGFsPXtoYW5kbGVBdXRoTW9kYWx9IC8+XG4gICAgICB7LyogPEJveCBoPSc2MHB4JyAvPiAqL31cbiAgICAgIDxCb3g+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n");

/***/ })

})