"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/projects/page",{

/***/ "(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx":
/*!**********************************************!*\
  !*** ./src/components/Hero/ProjectsHero.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsHero: function() { return /* binding */ ProjectsHero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/MediaQueryProvider */ \"(app-pages-browser)/./src/providers/MediaQueryProvider/index.ts\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Icon */ \"(app-pages-browser)/./src/components/Icon/index.ts\");\n/* harmony import */ var _projectData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectData.json */ \"(app-pages-browser)/./src/components/Hero/projectData.json\");\n/* __next_internal_client_entry_do_not_use__ ProjectsHero auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Import JSON data from the messages folder\n\nconst ProjectItem = (param)=>{\n    let { src, alt, title, description: description1, centerIcon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 \".concat(centerIcon ? \"items-center\" : \"items-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                src: src,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-lg\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            description1.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: paragraph\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectItem;\nconst ProjectsHero = ()=>{\n    _s();\n    const { isMedium, isLarge, isXLarge } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__.MediaQueryContext);\n    const serviceClass = \"w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16\";\n    const outerHeroClass = \"flex flex-col gap-12 items-center\";\n    const innerHeroClass = \"flex flex-col gap-4 text-center\";\n    // Responsive grid layout\n    const gridClass = \"\\n    grid\\n    gap-8\\n    grid-cols-1\\n    \".concat(isLarge || isXLarge ? \"lg:grid-cols-2\" : \"grid-cols-1\", \"\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: serviceClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: outerHeroClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: innerHeroClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Our Services\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"Through comprehensive services including innovative software solutions, digital strategy execution, professional consulting, and reliable support, we enable organizations to succeed in today's evolving digital landscape and fulfill their strategic visions.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: gridClass,\n                children: Object.entries(_projectData_json__WEBPACK_IMPORTED_MODULE_4__).map((param)=>{\n                    let [title, src] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: src,\n                        title: title,\n                        description: description,\n                        centerIcon: !isMedium\n                    }, title, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsHero, \"gys7/N/aaLcAOXLCOEFtsidk1FA=\");\n_c1 = ProjectsHero;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"ProjectsHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUM7QUFDK0I7QUFFMUI7QUFFeEMsNENBQTRDO0FBQ0M7QUFVN0MsTUFBTUksY0FBYztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLGFBQUFBLFlBQVcsRUFBRUMsVUFBVSxFQUFvQjtJQUNqRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyx1QkFBbUUsT0FBNUNGLGFBQWEsaUJBQWlCOzswQkFDbkUsOERBQUNQLGtEQUFJQTtnQkFBQ0csS0FBS0E7Z0JBQUtDLEtBQUtBOzs7Ozs7MEJBQ3JCLDhEQUFDTTtnQkFBR0QsV0FBVTswQkFBcUJKOzs7Ozs7WUFDbENDLGFBQVlLLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDM0IsOERBQUNDOzhCQUFlRjttQkFBUkM7Ozs7Ozs7Ozs7O0FBSWhCO0tBVk1YO0FBWUMsTUFBTWEsZUFBZTs7SUFDMUIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQUdwQixpREFBVUEsQ0FBQ0MsNEVBQWlCQTtJQUVwRSxNQUFNb0IsZUFBZTtJQUNyQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsaUJBQWlCO0lBRXZCLHlCQUF5QjtJQUN6QixNQUFNQyxZQUFZLCtDQUl5QyxPQUF2REwsV0FBV0MsV0FBVyxtQkFBbUIsZUFBYztJQUczRCxxQkFDRSw4REFBQ1Y7UUFBSUMsV0FBV1U7OzBCQUNkLDhEQUFDWDtnQkFBSUMsV0FBV1c7MEJBQ2QsNEVBQUNaO29CQUFJQyxXQUFXWTs7c0NBQ2QsOERBQUNFOzRCQUFHZCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUNuQyw4REFBQ0s7NEJBQUVMLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU8zQiw4REFBQ0Q7Z0JBQUlDLFdBQVdhOzBCQUNiRSxPQUFPQyxPQUFPLENBQUN4Qiw4Q0FBV0EsRUFBRVUsR0FBRyxDQUFDO3dCQUFDLENBQUNOLE9BQU9GLElBQUk7eUNBQzVDLDhEQUFDRDt3QkFFQ0MsS0FBS0E7d0JBQ0xFLE9BQU9BO3dCQUNQQyxhQUFhQTt3QkFDYkMsWUFBWSxDQUFDUzt1QkFKUlg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCLEVBQUU7R0F4Q1dVO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeD8xZDU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lZGlhUXVlcnlDb250ZXh0IH0gZnJvbSAnQHByb3ZpZGVycy9NZWRpYVF1ZXJ5UHJvdmlkZXInO1xyXG5cclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0Bjb21wb25lbnRzL0ljb24nO1xyXG5cclxuLy8gSW1wb3J0IEpTT04gZGF0YSBmcm9tIHRoZSBtZXNzYWdlcyBmb2xkZXJcclxuaW1wb3J0IHByb2plY3REYXRhIGZyb20gJy4vcHJvamVjdERhdGEuanNvbic7XHJcblxyXG5pbnRlcmZhY2UgUHJvamVjdEl0ZW1Qcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbiAgYWx0OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nW107XHJcbiAgY2VudGVySWNvbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdEl0ZW0gPSAoeyBzcmMsIGFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjZW50ZXJJY29uIH06IFByb2plY3RJdGVtUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGdhcC0yICR7Y2VudGVySWNvbiA/ICdpdGVtcy1jZW50ZXInIDogJ2l0ZW1zLXN0YXJ0J31gfT5cclxuICAgICAgPEljb24gc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGdcIj57dGl0bGV9PC9oMz5cclxuICAgICAge2Rlc2NyaXB0aW9uLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxwIGtleT17aW5kZXh9PntwYXJhZ3JhcGh9PC9wPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNNZWRpdW0sIGlzTGFyZ2UsIGlzWExhcmdlIH0gPSB1c2VDb250ZXh0KE1lZGlhUXVlcnlDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgc2VydmljZUNsYXNzID0gJ3ctNC81IGZsZXggZmxleC1jb2wgbXgtYXV0byBtYi0zMiBtdC0xMiBnYXAtMTYnO1xyXG4gIGNvbnN0IG91dGVySGVyb0NsYXNzID0gJ2ZsZXggZmxleC1jb2wgZ2FwLTEyIGl0ZW1zLWNlbnRlcic7XHJcbiAgY29uc3QgaW5uZXJIZXJvQ2xhc3MgPSAnZmxleCBmbGV4LWNvbCBnYXAtNCB0ZXh0LWNlbnRlcic7XHJcblxyXG4gIC8vIFJlc3BvbnNpdmUgZ3JpZCBsYXlvdXRcclxuICBjb25zdCBncmlkQ2xhc3MgPSBgXHJcbiAgICBncmlkXHJcbiAgICBnYXAtOFxyXG4gICAgZ3JpZC1jb2xzLTFcclxuICAgICR7aXNMYXJnZSB8fCBpc1hMYXJnZSA/ICdsZzpncmlkLWNvbHMtMicgOiAnZ3JpZC1jb2xzLTEnfVxyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZUNsYXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e291dGVySGVyb0NsYXNzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5uZXJIZXJvQ2xhc3N9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPk91ciBTZXJ2aWNlczwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgIFRocm91Z2ggY29tcHJlaGVuc2l2ZSBzZXJ2aWNlcyBpbmNsdWRpbmcgaW5ub3ZhdGl2ZSBzb2Z0d2FyZSBzb2x1dGlvbnMsIGRpZ2l0YWwgc3RyYXRlZ3lcclxuICAgICAgICAgICAgZXhlY3V0aW9uLCBwcm9mZXNzaW9uYWwgY29uc3VsdGluZywgYW5kIHJlbGlhYmxlIHN1cHBvcnQsIHdlIGVuYWJsZSBvcmdhbml6YXRpb25zIHRvXHJcbiAgICAgICAgICAgIHN1Y2NlZWQgaW4gdG9kYXkncyBldm9sdmluZyBkaWdpdGFsIGxhbmRzY2FwZSBhbmQgZnVsZmlsbCB0aGVpciBzdHJhdGVnaWMgdmlzaW9ucy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkQ2xhc3N9PlxyXG4gICAgICAgIHtPYmplY3QuZW50cmllcyhwcm9qZWN0RGF0YSkubWFwKChbdGl0bGUsIHNyY10pID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0SXRlbVxyXG4gICAgICAgICAgICBrZXk9e3RpdGxlfVxyXG4gICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGNlbnRlckljb249eyFpc01lZGl1bX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJNZWRpYVF1ZXJ5Q29udGV4dCIsIkljb24iLCJwcm9qZWN0RGF0YSIsIlByb2plY3RJdGVtIiwic3JjIiwiYWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNlbnRlckljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwicCIsIlByb2plY3RzSGVybyIsImlzTWVkaXVtIiwiaXNMYXJnZSIsImlzWExhcmdlIiwic2VydmljZUNsYXNzIiwib3V0ZXJIZXJvQ2xhc3MiLCJpbm5lckhlcm9DbGFzcyIsImdyaWRDbGFzcyIsImgxIiwiT2JqZWN0IiwiZW50cmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx\n"));

/***/ })

});