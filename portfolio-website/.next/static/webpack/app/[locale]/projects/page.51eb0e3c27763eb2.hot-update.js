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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsHero: function() { return /* binding */ ProjectsHero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/MediaQueryProvider */ \"(app-pages-browser)/./src/providers/MediaQueryProvider/index.ts\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Icon */ \"(app-pages-browser)/./src/components/Icon/index.ts\");\n/* harmony import */ var _edit_ProjectData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/ProjectData.json */ \"(app-pages-browser)/./src/components/Hero/edit/ProjectData.json\");\n/* __next_internal_client_entry_do_not_use__ ProjectsHero auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Import JSON data from the messages folder\n\nconst ProjectItem = (param)=>{\n    let { src, alt, date, title, description, centerIcon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 \".concat(centerIcon ? \"items-center\" : \"items-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-start gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                        src: src,\n                        alt: alt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-400\",\n                                children: date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            description.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"• \",\n                        paragraph\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectItem;\nconst ProjectsHero = ()=>{\n    _s();\n    const { isMedium, isLarge, isXLarge } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__.MediaQueryContext);\n    const serviceClass = \"w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16\";\n    const outerHeroClass = \"flex flex-col gap-12 items-center\";\n    const innerHeroClass = \"flex flex-col gap-4 text-center\";\n    // Responsive grid layout\n    const gridClass = \"\\n    grid\\n    gap-8\\n    grid-cols-1\\n    \".concat(isLarge || isXLarge ? \"lg:grid-cols-2\" : \"grid-cols-1\", \"\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: serviceClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: outerHeroClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: innerHeroClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"My Projects!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"Some cool projects that I have made or been apart of!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: gridClass,\n                children: Object.entries(_edit_ProjectData_json__WEBPACK_IMPORTED_MODULE_4__).map((param)=>{\n                    let [title, [src, alt, url, date, description]] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: src,\n                        alt: alt,\n                        url: url,\n                        date: date,\n                        title: title,\n                        description: description,\n                        centerIcon: !isMedium\n                    }, title, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsHero, \"gys7/N/aaLcAOXLCOEFtsidk1FA=\");\n_c1 = ProjectsHero;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"ProjectsHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUM7QUFDK0I7QUFFMUI7QUFFeEMsNENBQTRDO0FBQ007QUFVbEQsTUFBTUksY0FBYztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQW9CO0lBQ3ZGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLHVCQUFtRSxPQUE1Q0YsYUFBYSxpQkFBaUI7OzBCQUNuRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVixrREFBSUE7d0JBQUNHLEtBQUtBO3dCQUFLQyxLQUFLQTs7Ozs7O2tDQUNyQiw4REFBQ0s7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBcUJKOzs7Ozs7MENBQ25DLDhEQUFDTTtnQ0FBRUYsV0FBVTswQ0FBeUJMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHekNFLFlBQVlNLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDdkIsOERBQUNIOzt3QkFBYzt3QkFBR0U7O21CQUFWQzs7Ozs7Ozs7Ozs7QUFJcEI7S0FmTWI7QUFpQkMsTUFBTWMsZUFBZTs7SUFDMUIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQUdyQixpREFBVUEsQ0FBQ0MsNEVBQWlCQTtJQUVwRSxNQUFNcUIsZUFBZTtJQUNyQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsaUJBQWlCO0lBRXZCLHlCQUF5QjtJQUN6QixNQUFNQyxZQUFZLCtDQUl5QyxPQUF2REwsV0FBV0MsV0FBVyxtQkFBbUIsZUFBYztJQUczRCxxQkFDRSw4REFBQ1Y7UUFBSUMsV0FBV1U7OzBCQUNkLDhEQUFDWDtnQkFBSUMsV0FBV1c7MEJBQ2QsNEVBQUNaO29CQUFJQyxXQUFXWTs7c0NBQ2QsOERBQUNFOzRCQUFHZCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUNuQyw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszQiw4REFBQ0Q7Z0JBQUlDLFdBQVdhOzBCQUNiRSxPQUFPQyxPQUFPLENBQUN6QixtREFBV0EsRUFBRVksR0FBRyxDQUFDO3dCQUFDLENBQUNQLE9BQU8sQ0FBQ0gsS0FBS0MsS0FBS3VCLEtBQUt0QixNQUFNRSxZQUFZLENBQUM7eUNBQzNFLDhEQUFDTDt3QkFFQ0MsS0FBS0E7d0JBQ0xDLEtBQUtBO3dCQUNMdUIsS0FBT0E7d0JBQ1B0QixNQUFRQTt3QkFDUkMsT0FBT0E7d0JBQ1BDLGFBQWFBO3dCQUNiQyxZQUFZLENBQUNTO3VCQVBSWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhakIsRUFBRTtHQXpDV1U7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9Qcm9qZWN0c0hlcm8udHN4PzFkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVkaWFRdWVyeUNvbnRleHQgfSBmcm9tICdAcHJvdmlkZXJzL01lZGlhUXVlcnlQcm92aWRlcic7XHJcblxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGNvbXBvbmVudHMvSWNvbic7XHJcblxyXG4vLyBJbXBvcnQgSlNPTiBkYXRhIGZyb20gdGhlIG1lc3NhZ2VzIGZvbGRlclxyXG5pbXBvcnQgcHJvamVjdERhdGEgZnJvbSAnLi9lZGl0L1Byb2plY3REYXRhLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RJdGVtUHJvcHMge1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIGFsdDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gIGNlbnRlckljb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RJdGVtID0gKHsgc3JjLCBhbHQsIGRhdGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2VudGVySWNvbiB9OiBQcm9qZWN0SXRlbVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBnYXAtMiAke2NlbnRlckljb24gPyAnaXRlbXMtY2VudGVyJyA6ICdpdGVtcy1zdGFydCd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1zdGFydCBnYXAtNFwiPlxyXG4gICAgICAgIDxJY29uIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+e2RhdGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2Rlc2NyaXB0aW9uLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4fT7igKIge3BhcmFncmFwaH08L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNNZWRpdW0sIGlzTGFyZ2UsIGlzWExhcmdlIH0gPSB1c2VDb250ZXh0KE1lZGlhUXVlcnlDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgc2VydmljZUNsYXNzID0gJ3ctNC81IGZsZXggZmxleC1jb2wgbXgtYXV0byBtYi0zMiBtdC0xMiBnYXAtMTYnO1xyXG4gIGNvbnN0IG91dGVySGVyb0NsYXNzID0gJ2ZsZXggZmxleC1jb2wgZ2FwLTEyIGl0ZW1zLWNlbnRlcic7XHJcbiAgY29uc3QgaW5uZXJIZXJvQ2xhc3MgPSAnZmxleCBmbGV4LWNvbCBnYXAtNCB0ZXh0LWNlbnRlcic7XHJcblxyXG4gIC8vIFJlc3BvbnNpdmUgZ3JpZCBsYXlvdXRcclxuICBjb25zdCBncmlkQ2xhc3MgPSBgXHJcbiAgICBncmlkXHJcbiAgICBnYXAtOFxyXG4gICAgZ3JpZC1jb2xzLTFcclxuICAgICR7aXNMYXJnZSB8fCBpc1hMYXJnZSA/ICdsZzpncmlkLWNvbHMtMicgOiAnZ3JpZC1jb2xzLTEnfVxyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZUNsYXNzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e291dGVySGVyb0NsYXNzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5uZXJIZXJvQ2xhc3N9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPk15IFByb2plY3RzITwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgIFNvbWUgY29vbCBwcm9qZWN0cyB0aGF0IEkgaGF2ZSBtYWRlIG9yIGJlZW4gYXBhcnQgb2YhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZENsYXNzfT5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMocHJvamVjdERhdGEpLm1hcCgoW3RpdGxlLCBbc3JjLCBhbHQsIHVybCwgZGF0ZSwgZGVzY3JpcHRpb25dXSkgPT4gKFxyXG4gICAgICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgICAgIGtleT17dGl0bGV9XHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgdXJsID0ge3VybH1cclxuICAgICAgICAgICAgZGF0ZSA9IHtkYXRlfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgY2VudGVySWNvbj17IWlzTWVkaXVtfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIk1lZGlhUXVlcnlDb250ZXh0IiwiSWNvbiIsInByb2plY3REYXRhIiwiUHJvamVjdEl0ZW0iLCJzcmMiLCJhbHQiLCJkYXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNlbnRlckljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsIlByb2plY3RzSGVybyIsImlzTWVkaXVtIiwiaXNMYXJnZSIsImlzWExhcmdlIiwic2VydmljZUNsYXNzIiwib3V0ZXJIZXJvQ2xhc3MiLCJpbm5lckhlcm9DbGFzcyIsImdyaWRDbGFzcyIsImgxIiwiT2JqZWN0IiwiZW50cmllcyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx\n"));

/***/ })

});