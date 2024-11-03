/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sections/Testimonials.tsx":
/*!**************************************************!*\
  !*** ./src/components/Sections/Testimonials.tsx ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Page */ \"./src/components/Layout/Page.tsx\");\n/* harmony import */ var _components_Sections_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sections/About */ \"./src/components/Sections/About.tsx\");\n/* harmony import */ var _components_Sections_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sections/Contact */ \"./src/components/Sections/Contact/index.tsx\");\n/* harmony import */ var _components_Sections_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sections/Footer */ \"./src/components/Sections/Footer.tsx\");\n/* harmony import */ var _components_Sections_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sections/Hero */ \"./src/components/Sections/Hero.tsx\");\n/* harmony import */ var _components_Sections_Portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sections/Portfolio */ \"./src/components/Sections/Portfolio.tsx\");\n/* harmony import */ var _components_Sections_Resume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Sections/Resume */ \"./src/components/Sections/Resume/index.tsx\");\n/* harmony import */ var _components_Sections_Testimonials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Sections/Testimonials */ \"./src/components/Sections/Testimonials.tsx\");\n/* harmony import */ var _components_Sections_Testimonials__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_Sections_Testimonials__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n// eslint-disable-next-line react-memo/require-memo\nconst Header = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_Sections_Header_tsx-src_hooks_useNavObserver_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Sections/Header */ \"./src/components/Sections/Header.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"../components/Sections/Header\"\n        ]\n    },\n    ssr: false\n});\n_c = Header;\nconst Home = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(_c1 = ()=>{\n    const { title, description } = _data_data__WEBPACK_IMPORTED_MODULE_11__.homePageMeta;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        description: description,\n        title: title,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Resume__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Portfolio__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Sections_Testimonials__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\homea\\\\Desktop\\\\DigitalResume\\\\react-resume-template\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n});\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Home$memo\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNKO0FBRWM7QUFDSTtBQUNJO0FBQ0Y7QUFDSjtBQUNVO0FBQ047QUFDWTtBQUNyQjtBQUUxQyxtREFBbUQ7QUFDbkQsTUFBTVcsU0FBU1gsbURBQU9BLENBQUMsSUFBTSx5T0FBTzs7Ozs7O0lBQW1DWSxLQUFLOztLQUF0RUQ7QUFFTixNQUFNRSxxQkFBV1osMkNBQUlBLE9BQUM7SUFDcEIsTUFBTSxFQUFDYSxLQUFLLEVBQUVDLFdBQVcsRUFBQyxHQUFHTCxxREFBWUE7SUFDekMscUJBQ0UsOERBQUNSLCtEQUFJQTtRQUFDYSxhQUFhQTtRQUFhRCxPQUFPQTs7MEJBQ3JDLDhEQUFDSDs7Ozs7MEJBQ0QsOERBQUNMLGlFQUFJQTs7Ozs7MEJBQ0wsOERBQUNILGtFQUFLQTs7Ozs7MEJBQ04sOERBQUNLLG1FQUFNQTs7Ozs7MEJBQ1AsOERBQUNELHNFQUFTQTs7Ozs7MEJBQ1YsOERBQUNFLDJFQUFZQTs7Ozs7MEJBQ2IsOERBQUNMLG9FQUFPQTs7Ozs7MEJBQ1IsOERBQUNDLG1FQUFNQTs7Ozs7Ozs7Ozs7QUFHYjs7QUFFQSwrREFBZVEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHtGQywgbWVtb30gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvUGFnZSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25zL0Fib3V0JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Db250YWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25zL0Zvb3Rlcic7XHJcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSGVybyc7XHJcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Qb3J0Zm9saW8nO1xyXG5pbXBvcnQgUmVzdW1lIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvUmVzdW1lJztcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25zL1Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCB7aG9tZVBhZ2VNZXRhfSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LW1lbW8vcmVxdWlyZS1tZW1vXHJcbmNvbnN0IEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1NlY3Rpb25zL0hlYWRlcicpLCB7c3NyOiBmYWxzZX0pO1xyXG5cclxuY29uc3QgSG9tZTogRkMgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9ufSA9IGhvbWVQYWdlTWV0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2UgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxIZXJvIC8+XHJcbiAgICAgIDxBYm91dCAvPlxyXG4gICAgICA8UmVzdW1lIC8+XHJcbiAgICAgIDxQb3J0Zm9saW8gLz5cclxuICAgICAgPFRlc3RpbW9uaWFscyAvPlxyXG4gICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1BhZ2U+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIm1lbW8iLCJQYWdlIiwiQWJvdXQiLCJDb250YWN0IiwiRm9vdGVyIiwiSGVybyIsIlBvcnRmb2xpbyIsIlJlc3VtZSIsIlRlc3RpbW9uaWFscyIsImhvbWVQYWdlTWV0YSIsIkhlYWRlciIsInNzciIsIkhvbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});