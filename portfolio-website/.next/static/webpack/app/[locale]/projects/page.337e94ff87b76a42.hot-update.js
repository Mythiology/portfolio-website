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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsHero: function() { return /* binding */ ProjectsHero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/MediaQueryProvider */ \"(app-pages-browser)/./src/providers/MediaQueryProvider/index.ts\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Icon */ \"(app-pages-browser)/./src/components/Icon/index.ts\");\n/* harmony import */ var _projectData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectData.json */ \"(app-pages-browser)/./src/components/Hero/projectData.json\");\n/* __next_internal_client_entry_do_not_use__ ProjectsHero auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Import JSON data from the messages folder\n\nconst ProjectItem = (param)=>{\n    let { src, alt, title, description, centerIcon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 \".concat(centerIcon ? \"items-center\" : \"items-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                src: src,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-lg\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            description.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: paragraph\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectItem;\nconst ProjectsHero = ()=>{\n    _s();\n    const { isMedium, isLarge, isXLarge } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__.MediaQueryContext);\n    const serviceClass = \"w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16\";\n    const outerHeroClass = \"flex flex-col gap-12 items-center\";\n    const innerHeroClass = \"flex flex-col gap-4 text-center\";\n    // Responsive grid layout\n    const gridClass = \"\\n    grid\\n    gap-8\\n    grid-cols-1\\n    \".concat(isLarge || isXLarge ? \"lg:grid-cols-2\" : \"grid-cols-1\", \"\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: serviceClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: outerHeroClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: innerHeroClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Our Services\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"Through comprehensive services including innovative software solutions, digital strategy execution, professional consulting, and reliable support, we enable organizations to succeed in today's evolving digital landscape and fulfill their strategic visions.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: gridClass,\n                children: Object.entries(_projectData_json__WEBPACK_IMPORTED_MODULE_4__).map((param)=>{\n                    let [title, src] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: src,\n                        title: title,\n                        centerIcon: !isMedium\n                    }, title, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsHero, \"gys7/N/aaLcAOXLCOEFtsidk1FA=\");\n_c1 = ProjectsHero;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"ProjectsHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUM7QUFDK0I7QUFFMUI7QUFFeEMsNENBQTRDO0FBQ0M7QUFVN0MsTUFBTUksY0FBYztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFvQjtJQUNqRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyx1QkFBbUUsT0FBNUNGLGFBQWEsaUJBQWlCOzswQkFDbkUsOERBQUNQLGtEQUFJQTtnQkFBQ0csS0FBS0E7Z0JBQUtDLEtBQUtBOzs7Ozs7MEJBQ3JCLDhEQUFDTTtnQkFBR0QsV0FBVTswQkFBcUJKOzs7Ozs7WUFDbENDLFlBQVlLLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDM0IsOERBQUNDOzhCQUFlRjttQkFBUkM7Ozs7Ozs7Ozs7O0FBSWhCO0tBVk1YO0FBWUMsTUFBTWEsZUFBZTs7SUFDMUIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQUdwQixpREFBVUEsQ0FBQ0MsNEVBQWlCQTtJQUVwRSxNQUFNb0IsZUFBZTtJQUNyQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsaUJBQWlCO0lBRXZCLHlCQUF5QjtJQUN6QixNQUFNQyxZQUFZLCtDQUl5QyxPQUF2REwsV0FBV0MsV0FBVyxtQkFBbUIsZUFBYztJQUczRCxxQkFDRSw4REFBQ1Y7UUFBSUMsV0FBV1U7OzBCQUNkLDhEQUFDWDtnQkFBSUMsV0FBV1c7MEJBQ2QsNEVBQUNaO29CQUFJQyxXQUFXWTs7c0NBQ2QsOERBQUNFOzRCQUFHZCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUNuQyw4REFBQ0s7NEJBQUVMLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU8zQiw4REFBQ0Q7Z0JBQUlDLFdBQVdhOzBCQUNiRSxPQUFPQyxPQUFPLENBQUN4Qiw4Q0FBV0EsRUFBRVUsR0FBRyxDQUFDO3dCQUFDLENBQUNOLE9BQU9GLElBQUk7eUNBQzVDLDhEQUFDRDt3QkFFQ0MsS0FBS0E7d0JBQ0xFLE9BQU9BO3dCQUNQRSxZQUFZLENBQUNTO3VCQUhSWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakIsRUFBRTtHQXZDV1U7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9Qcm9qZWN0c0hlcm8udHN4PzFkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVkaWFRdWVyeUNvbnRleHQgfSBmcm9tICdAcHJvdmlkZXJzL01lZGlhUXVlcnlQcm92aWRlcic7XHJcblxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGNvbXBvbmVudHMvSWNvbic7XHJcblxyXG4vLyBJbXBvcnQgSlNPTiBkYXRhIGZyb20gdGhlIG1lc3NhZ2VzIGZvbGRlclxyXG5pbXBvcnQgcHJvamVjdERhdGEgZnJvbSAnLi9wcm9qZWN0RGF0YS5qc29uJztcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0SXRlbVByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxuICBhbHQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdbXTtcclxuICBjZW50ZXJJY29uOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHNyYywgYWx0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGNlbnRlckljb24gfTogUHJvamVjdEl0ZW1Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgZ2FwLTIgJHtjZW50ZXJJY29uID8gJ2l0ZW1zLWNlbnRlcicgOiAnaXRlbXMtc3RhcnQnfWB9PlxyXG4gICAgICA8SWNvbiBzcmM9e3NyY30gYWx0PXthbHR9IC8+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPnt0aXRsZX08L2gzPlxyXG4gICAgICB7ZGVzY3JpcHRpb24ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPHAga2V5PXtpbmRleH0+e3BhcmFncmFwaH08L3A+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c0hlcm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc01lZGl1bSwgaXNMYXJnZSwgaXNYTGFyZ2UgfSA9IHVzZUNvbnRleHQoTWVkaWFRdWVyeUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlQ2xhc3MgPSAndy00LzUgZmxleCBmbGV4LWNvbCBteC1hdXRvIG1iLTMyIG10LTEyIGdhcC0xNic7XHJcbiAgY29uc3Qgb3V0ZXJIZXJvQ2xhc3MgPSAnZmxleCBmbGV4LWNvbCBnYXAtMTIgaXRlbXMtY2VudGVyJztcclxuICBjb25zdCBpbm5lckhlcm9DbGFzcyA9ICdmbGV4IGZsZXgtY29sIGdhcC00IHRleHQtY2VudGVyJztcclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBncmlkIGxheW91dFxyXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGBcclxuICAgIGdyaWRcclxuICAgIGdhcC04XHJcbiAgICBncmlkLWNvbHMtMVxyXG4gICAgJHtpc0xhcmdlIHx8IGlzWExhcmdlID8gJ2xnOmdyaWQtY29scy0yJyA6ICdncmlkLWNvbHMtMSd9XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlQ2xhc3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b3V0ZXJIZXJvQ2xhc3N9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbm5lckhlcm9DbGFzc30+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+T3VyIFNlcnZpY2VzPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgVGhyb3VnaCBjb21wcmVoZW5zaXZlIHNlcnZpY2VzIGluY2x1ZGluZyBpbm5vdmF0aXZlIHNvZnR3YXJlIHNvbHV0aW9ucywgZGlnaXRhbCBzdHJhdGVneVxyXG4gICAgICAgICAgICBleGVjdXRpb24sIHByb2Zlc3Npb25hbCBjb25zdWx0aW5nLCBhbmQgcmVsaWFibGUgc3VwcG9ydCwgd2UgZW5hYmxlIG9yZ2FuaXphdGlvbnMgdG9cclxuICAgICAgICAgICAgc3VjY2VlZCBpbiB0b2RheSdzIGV2b2x2aW5nIGRpZ2l0YWwgbGFuZHNjYXBlIGFuZCBmdWxmaWxsIHRoZWlyIHN0cmF0ZWdpYyB2aXNpb25zLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRDbGFzc30+XHJcbiAgICAgICAge09iamVjdC5lbnRyaWVzKHByb2plY3REYXRhKS5tYXAoKFt0aXRsZSwgc3JjXSkgPT4gKFxyXG4gICAgICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgICAgIGtleT17dGl0bGV9XHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGNlbnRlckljb249eyFpc01lZGl1bX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJNZWRpYVF1ZXJ5Q29udGV4dCIsIkljb24iLCJwcm9qZWN0RGF0YSIsIlByb2plY3RJdGVtIiwic3JjIiwiYWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNlbnRlckljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwicCIsIlByb2plY3RzSGVybyIsImlzTWVkaXVtIiwiaXNMYXJnZSIsImlzWExhcmdlIiwic2VydmljZUNsYXNzIiwib3V0ZXJIZXJvQ2xhc3MiLCJpbm5lckhlcm9DbGFzcyIsImdyaWRDbGFzcyIsImgxIiwiT2JqZWN0IiwiZW50cmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx\n"));

/***/ })

});