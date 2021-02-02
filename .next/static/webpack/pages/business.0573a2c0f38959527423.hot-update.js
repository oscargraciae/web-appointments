webpackHotUpdate_N_E("pages/business",{

/***/ "./src/components/business/BusinessPhotos.tsx":
/*!****************************************************!*\
  !*** ./src/components/business/BusinessPhotos.tsx ***!
  \****************************************************/
/*! exports provided: BusinessPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BusinessPhotos\", function() { return BusinessPhotos; });\n/* harmony import */ var _Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/userContext */ \"./src/context/userContext.tsx\");\n/* harmony import */ var _services_businessService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/businessService */ \"./src/services/businessService.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/oscargracia/Documents/proyectos/boombook/web/src/components/business/BusinessPhotos.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar BusinessPhotos = function BusinessPhotos(_ref) {\n  _s();\n\n  var businessId = _ref.businessId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      photos = _useState[0],\n      setPhotos = _useState[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context_userContext__WEBPACK_IMPORTED_MODULE_4__[\"UserContext\"]),\n      user = _useContext.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetch = /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response;\n        return _Users_oscargracia_Documents_proyectos_boombook_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return new _services_businessService__WEBPACK_IMPORTED_MODULE_5__[\"BusinessService\"]().getPhotos(businessId);\n\n              case 2:\n                response = _context.sent;\n                console.log('Respuestas', response);\n\n                if (response.success) {\n                  console.log('response.photos', response.photos);\n                  setPhotos(response.photos);\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetch() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetch();\n  }, []);\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    direction: \"column\",\n    flex: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, photos.length > 0 && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    size: \"lg\",\n    mb: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Fotos\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"SimpleGrid\"], {\n    columns: 3,\n    mt: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, photos.slice(0, 6).map(function (photo, index) {\n    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      p: 2,\n      key: index,\n      role: \"group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      w: \"200px\",\n      h: \"133px\",\n      objectFit: \"cover\",\n      src: photo.file,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }));\n  }))));\n};\n\n_s(BusinessPhotos, \"Rf/ECu7mL9mWGoByAxFa5kOEzHc=\");\n\n_c = BusinessPhotos;\n\nvar _c;\n\n$RefreshReg$(_c, \"BusinessPhotos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnVzaW5lc3MvQnVzaW5lc3NQaG90b3MudHN4P2E0NTEiXSwibmFtZXMiOlsiQnVzaW5lc3NQaG90b3MiLCJidXNpbmVzc0lkIiwidXNlU3RhdGUiLCJwaG90b3MiLCJzZXRQaG90b3MiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJCdXNpbmVzc1NlcnZpY2UiLCJnZXRQaG90b3MiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJwaG90byIsImluZGV4IiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ25EQyxzREFBUSxDQUFXLEVBQVgsQ0FEMkM7QUFBQSxNQUN4RUMsTUFEd0U7QUFBQSxNQUNoRUMsU0FEZ0U7O0FBQUEsb0JBRzlEQyx3REFBVSxDQUFDQyxnRUFBRCxDQUhvRDtBQUFBLE1BR3ZFQyxJQUh1RSxlQUd2RUEsSUFIdUU7O0FBSy9FQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLO0FBQUEsbVVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVyxJQUFJQyx5RUFBSixHQUFzQkMsU0FBdEIsQ0FBZ0NWLFVBQWhDLENBRFg7O0FBQUE7QUFDTlcsd0JBRE07QUFFWkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFFBQTFCOztBQUNBLG9CQUFJQSxRQUFRLENBQUNHLE9BQWIsRUFBc0I7QUFDcEJGLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsUUFBUSxDQUFDVCxNQUF4QztBQUVBQywyQkFBUyxDQUFDUSxRQUFRLENBQUNULE1BQVYsQ0FBVDtBQUNEOztBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUxNLEtBQUs7QUFBQTtBQUFBO0FBQUEsT0FBWDs7QUFVQUEsU0FBSztBQUNOLEdBWlEsRUFZTixFQVpNLENBQVQ7QUFjQSxTQUNFLE1BQUMscURBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsUUFBSSxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSU4sTUFBTSxDQUFDYSxNQUFQLEdBQWdCLENBQWhCLElBQ0EsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixNQUFFLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQywyREFBRDtBQUFZLFdBQU8sRUFBRSxDQUFyQjtBQUF3QixNQUFFLEVBQUUsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJYixNQUFNLENBQUNjLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxLQUFELEVBQWFDLEtBQWI7QUFBQSxXQUN2QixNQUFDLG9EQUFEO0FBQUssT0FBQyxFQUFFLENBQVI7QUFBVyxTQUFHLEVBQUVBLEtBQWhCO0FBQXVCLFVBQUksRUFBQyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFPLE9BQUMsRUFBQyxPQUFUO0FBQWlCLE9BQUMsRUFBQyxPQUFuQjtBQUEyQixlQUFTLEVBQUMsT0FBckM7QUFBNkMsU0FBRyxFQUFFRCxLQUFLLENBQUNFLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUR1QjtBQUFBLEdBQXZCLENBREosQ0FGRixDQUZKLENBREY7QUFnQkQsQ0FuQ007O0dBQU1yQixjOztLQUFBQSxjIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYnVzaW5lc3MvQnVzaW5lc3NQaG90b3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBJbWFnZSwgU2ltcGxlR3JpZCwgV3JhcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC91c2VyQ29udGV4dCc7XG5pbXBvcnQgeyBCdXNpbmVzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9idXNpbmVzc1NlcnZpY2UnO1xuaW1wb3J0IHsgQnVzaW5lc3NTZXJ2aWNlcyB9IGZyb20gJy4vQnVzaW5lc3NTZXJ2aWNlcyc7XG5cbmludGVyZmFjZSBCdXNpbmVzc1Bob3Rvc1Byb3BzIHtcbiAgYnVzaW5lc3NJZDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBCdXNpbmVzc1Bob3RvczogUmVhY3QuRkM8QnVzaW5lc3NQaG90b3NQcm9wcz4gPSAoeyBidXNpbmVzc0lkIH0pID0+IHtcbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlPG9iamVjdFtdPihbXSk7XG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgQnVzaW5lc3NTZXJ2aWNlKCkuZ2V0UGhvdG9zKGJ1c2luZXNzSWQpXG4gICAgICBjb25zb2xlLmxvZygnUmVzcHVlc3RhcycsIHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZS5waG90b3MnLCByZXNwb25zZS5waG90b3MpO1xuICAgICAgICBcbiAgICAgICAgc2V0UGhvdG9zKHJlc3BvbnNlLnBob3Rvcyk7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgZmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPSdjb2x1bW4nIGZsZXg9ezF9PlxuICAgICAgeyBwaG90b3MubGVuZ3RoID4gMCAmJlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibGdcIiBtYj17M30+Rm90b3M8L0hlYWRpbmc+XG4gICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17M30gbXQ9ezR9PlxuICAgICAgICAgICAgeyBwaG90b3Muc2xpY2UoMCwgNikubWFwKChwaG90byA6YW55LCBpbmRleCA6bnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxCb3ggcD17Mn0ga2V5PXtpbmRleH0gcm9sZT0nZ3JvdXAnPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3PScyMDBweCcgaD0nMTMzcHgnIG9iamVjdEZpdD1cImNvdmVyXCIgc3JjPXtwaG90by5maWxlfSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpIH1cbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgfVxuICAgIDwvRmxleD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/business/BusinessPhotos.tsx\n");

/***/ })

})