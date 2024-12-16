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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsHero: function() { return /* binding */ ProjectsHero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/MediaQueryProvider */ \"(app-pages-browser)/./src/providers/MediaQueryProvider/index.ts\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Icon */ \"(app-pages-browser)/./src/components/Icon/index.ts\");\n/* __next_internal_client_entry_do_not_use__ ProjectsHero auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProjectItem = (param)=>{\n    let { src, alt, title, description, centerIcon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 \".concat(centerIcon ? \"items-center\" : \"items-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                src: src,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-lg\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            description.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: paragraph\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectItem;\nconst ProjectsHero = ()=>{\n    _s();\n    const { isMedium, isLarge, isXLarge } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__.MediaQueryContext);\n    const serviceClass = \"w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16\";\n    const outerHeroClass = \"flex flex-col gap-12 items-center\";\n    const innerHeroClass = \"flex flex-col gap-4 text-center\";\n    // Responsive grid layout\n    const gridClass = \"\\n    grid\\n    gap-8\\n    grid-cols-1\\n    \".concat(isLarge || isXLarge ? \"lg:grid-cols-2\" : \"grid-cols-1\", \"\\n  \");\n    // Example JSON data\n    const projectData = {\n        \"Cloud Native Solutions\": [\n            \"/DevIcon.png\",\n            \"Code\",\n            [\n                \"We design and build applications that are scalable, resilient, and optimized for the cloud using platforms like AWS.\",\n                \"By harnessing cloud-native technologies, we ensure your applications are agile and well-suited for dynamic business environments.\"\n            ]\n        ],\n        \"Distributed Systems\": [\n            \"/DesignerIcon.png\",\n            \"Code\",\n            [\n                \"We excel in designing and implementing distributed systems that combine microservices architecture with essential common services.\",\n                \"By adopting distributed systems, we enable efficient and adaptable solutions that enhance overall operational effectiveness.\"\n            ]\n        ],\n        \"Custom Software Development\": [\n            \"/FileIcon.png\",\n            \"Code\",\n            [\n                \"We create bespoke software solutions tailored to your specific business requirements using modern technology stacks such as React.\",\n                \"Our development process ensures high performance and a seamless user experience.\"\n            ]\n        ],\n        \"Technical Consulting\": [\n            \"/CameraIcon.png\",\n            \"Code\",\n            [\n                \"Our consultants offer strategic advice to help you navigate complex technology landscapes.\",\n                \"We provide insights on technology adoption, project planning, and digital transformation, ensuring you make informed decisions.\"\n            ]\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: serviceClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: outerHeroClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: innerHeroClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Our Services\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"Through comprehensive services including innovative software solutions, digital strategy execution, professional consulting, and reliable support, we enable organizations to succeed in today's evolving digital landscape and fulfill their strategic visions.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: gridClass,\n                children: Object.entries(projectData).map((param)=>{\n                    let [title, [src, alt, description]] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: src,\n                        alt: alt,\n                        title: title,\n                        description: description,\n                        centerIcon: !isMedium\n                    }, title, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsHero, \"gys7/N/aaLcAOXLCOEFtsidk1FA=\");\n_c1 = ProjectsHero;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"ProjectsHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtQztBQUMrQjtBQUUxQjtBQVV4QyxNQUFNRyxjQUFjO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQW9CO0lBQ2pGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLHVCQUFtRSxPQUE1Q0YsYUFBYSxpQkFBaUI7OzBCQUNuRSw4REFBQ04sa0RBQUlBO2dCQUFDRSxLQUFLQTtnQkFBS0MsS0FBS0E7Ozs7OzswQkFDckIsOERBQUNNO2dCQUFHRCxXQUFVOzBCQUFxQko7Ozs7OztZQUNsQ0MsWUFBWUssR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUMzQiw4REFBQ0M7OEJBQWVGO21CQUFSQzs7Ozs7Ozs7Ozs7QUFJaEI7S0FWTVg7QUFZQyxNQUFNYSxlQUFlOztJQUMxQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUUsR0FBR25CLGlEQUFVQSxDQUFDQyw0RUFBaUJBO0lBRXBFLE1BQU1tQixlQUFlO0lBQ3JCLE1BQU1DLGlCQUFpQjtJQUN2QixNQUFNQyxpQkFBaUI7SUFFdkIseUJBQXlCO0lBQ3pCLE1BQU1DLFlBQVksK0NBSXlDLE9BQXZETCxXQUFXQyxXQUFXLG1CQUFtQixlQUFjO0lBRzNELG9CQUFvQjtJQUNwQixNQUFNSyxjQUEwRDtRQUM5RCwwQkFBMEI7WUFDeEI7WUFDQTtZQUNBO2dCQUNFO2dCQUNBO2FBQ0Q7U0FDRjtRQUNELHVCQUF1QjtZQUNyQjtZQUNBO1lBQ0E7Z0JBQ0U7Z0JBQ0E7YUFDRDtTQUNGO1FBQ0QsK0JBQStCO1lBQzdCO1lBQ0E7WUFDQTtnQkFDRTtnQkFDQTthQUNEO1NBQ0Y7UUFDRCx3QkFBd0I7WUFDdEI7WUFDQTtZQUNBO2dCQUNFO2dCQUNBO2FBQ0Q7U0FDRjtJQUNIO0lBRUEscUJBQ0UsOERBQUNmO1FBQUlDLFdBQVdVOzswQkFDZCw4REFBQ1g7Z0JBQUlDLFdBQVdXOzBCQUNkLDRFQUFDWjtvQkFBSUMsV0FBV1k7O3NDQUNkLDhEQUFDRzs0QkFBR2YsV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDbkMsOERBQUNLOzRCQUFFTCxXQUFVO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPM0IsOERBQUNEO2dCQUFJQyxXQUFXYTswQkFDYkcsT0FBT0MsT0FBTyxDQUFDSCxhQUFhWixHQUFHLENBQUM7d0JBQUMsQ0FBQ04sT0FBTyxDQUFDRixLQUFLQyxLQUFLRSxZQUFZLENBQUM7eUNBQ2hFLDhEQUFDSjt3QkFFQ0MsS0FBS0E7d0JBQ0xDLEtBQUtBO3dCQUNMQyxPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFlBQVksQ0FBQ1M7dUJBTFJYOzs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQixFQUFFO0dBN0VXVTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXJvL1Byb2plY3RzSGVyby50c3g/MWQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZWRpYVF1ZXJ5Q29udGV4dCB9IGZyb20gJ0Bwcm92aWRlcnMvTWVkaWFRdWVyeVByb3ZpZGVyJztcclxuXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAY29tcG9uZW50cy9JY29uJztcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0SXRlbVByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxuICBhbHQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdbXTtcclxuICBjZW50ZXJJY29uOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHNyYywgYWx0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGNlbnRlckljb24gfTogUHJvamVjdEl0ZW1Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgZ2FwLTIgJHtjZW50ZXJJY29uID8gJ2l0ZW1zLWNlbnRlcicgOiAnaXRlbXMtc3RhcnQnfWB9PlxyXG4gICAgICA8SWNvbiBzcmM9e3NyY30gYWx0PXthbHR9IC8+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPnt0aXRsZX08L2gzPlxyXG4gICAgICB7ZGVzY3JpcHRpb24ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPHAga2V5PXtpbmRleH0+e3BhcmFncmFwaH08L3A+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c0hlcm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc01lZGl1bSwgaXNMYXJnZSwgaXNYTGFyZ2UgfSA9IHVzZUNvbnRleHQoTWVkaWFRdWVyeUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlQ2xhc3MgPSAndy00LzUgZmxleCBmbGV4LWNvbCBteC1hdXRvIG1iLTMyIG10LTEyIGdhcC0xNic7XHJcbiAgY29uc3Qgb3V0ZXJIZXJvQ2xhc3MgPSAnZmxleCBmbGV4LWNvbCBnYXAtMTIgaXRlbXMtY2VudGVyJztcclxuICBjb25zdCBpbm5lckhlcm9DbGFzcyA9ICdmbGV4IGZsZXgtY29sIGdhcC00IHRleHQtY2VudGVyJztcclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBncmlkIGxheW91dFxyXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGBcclxuICAgIGdyaWRcclxuICAgIGdhcC04XHJcbiAgICBncmlkLWNvbHMtMVxyXG4gICAgJHtpc0xhcmdlIHx8IGlzWExhcmdlID8gJ2xnOmdyaWQtY29scy0yJyA6ICdncmlkLWNvbHMtMSd9XHJcbiAgYDtcclxuXHJcbiAgLy8gRXhhbXBsZSBKU09OIGRhdGFcclxuICBjb25zdCBwcm9qZWN0RGF0YTogUmVjb3JkPHN0cmluZywgW3N0cmluZywgc3RyaW5nLCBzdHJpbmdbXV0+ID0ge1xyXG4gICAgJ0Nsb3VkIE5hdGl2ZSBTb2x1dGlvbnMnOiBbXHJcbiAgICAgICcvRGV2SWNvbi5wbmcnLFxyXG4gICAgICAnQ29kZScsXHJcbiAgICAgIFtcclxuICAgICAgICAnV2UgZGVzaWduIGFuZCBidWlsZCBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgc2NhbGFibGUsIHJlc2lsaWVudCwgYW5kIG9wdGltaXplZCBmb3IgdGhlIGNsb3VkIHVzaW5nIHBsYXRmb3JtcyBsaWtlIEFXUy4nLFxyXG4gICAgICAgICdCeSBoYXJuZXNzaW5nIGNsb3VkLW5hdGl2ZSB0ZWNobm9sb2dpZXMsIHdlIGVuc3VyZSB5b3VyIGFwcGxpY2F0aW9ucyBhcmUgYWdpbGUgYW5kIHdlbGwtc3VpdGVkIGZvciBkeW5hbWljIGJ1c2luZXNzIGVudmlyb25tZW50cy4nLFxyXG4gICAgICBdLFxyXG4gICAgXSxcclxuICAgICdEaXN0cmlidXRlZCBTeXN0ZW1zJzogW1xyXG4gICAgICAnL0Rlc2lnbmVySWNvbi5wbmcnLFxyXG4gICAgICAnQ29kZScsXHJcbiAgICAgIFtcclxuICAgICAgICAnV2UgZXhjZWwgaW4gZGVzaWduaW5nIGFuZCBpbXBsZW1lbnRpbmcgZGlzdHJpYnV0ZWQgc3lzdGVtcyB0aGF0IGNvbWJpbmUgbWljcm9zZXJ2aWNlcyBhcmNoaXRlY3R1cmUgd2l0aCBlc3NlbnRpYWwgY29tbW9uIHNlcnZpY2VzLicsXHJcbiAgICAgICAgJ0J5IGFkb3B0aW5nIGRpc3RyaWJ1dGVkIHN5c3RlbXMsIHdlIGVuYWJsZSBlZmZpY2llbnQgYW5kIGFkYXB0YWJsZSBzb2x1dGlvbnMgdGhhdCBlbmhhbmNlIG92ZXJhbGwgb3BlcmF0aW9uYWwgZWZmZWN0aXZlbmVzcy4nLFxyXG4gICAgICBdLFxyXG4gICAgXSxcclxuICAgICdDdXN0b20gU29mdHdhcmUgRGV2ZWxvcG1lbnQnOiBbXHJcbiAgICAgICcvRmlsZUljb24ucG5nJyxcclxuICAgICAgJ0NvZGUnLFxyXG4gICAgICBbXHJcbiAgICAgICAgJ1dlIGNyZWF0ZSBiZXNwb2tlIHNvZnR3YXJlIHNvbHV0aW9ucyB0YWlsb3JlZCB0byB5b3VyIHNwZWNpZmljIGJ1c2luZXNzIHJlcXVpcmVtZW50cyB1c2luZyBtb2Rlcm4gdGVjaG5vbG9neSBzdGFja3Mgc3VjaCBhcyBSZWFjdC4nLFxyXG4gICAgICAgICdPdXIgZGV2ZWxvcG1lbnQgcHJvY2VzcyBlbnN1cmVzIGhpZ2ggcGVyZm9ybWFuY2UgYW5kIGEgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlLicsXHJcbiAgICAgIF0sXHJcbiAgICBdLFxyXG4gICAgJ1RlY2huaWNhbCBDb25zdWx0aW5nJzogW1xyXG4gICAgICAnL0NhbWVyYUljb24ucG5nJyxcclxuICAgICAgJ0NvZGUnLFxyXG4gICAgICBbXHJcbiAgICAgICAgJ091ciBjb25zdWx0YW50cyBvZmZlciBzdHJhdGVnaWMgYWR2aWNlIHRvIGhlbHAgeW91IG5hdmlnYXRlIGNvbXBsZXggdGVjaG5vbG9neSBsYW5kc2NhcGVzLicsXHJcbiAgICAgICAgJ1dlIHByb3ZpZGUgaW5zaWdodHMgb24gdGVjaG5vbG9neSBhZG9wdGlvbiwgcHJvamVjdCBwbGFubmluZywgYW5kIGRpZ2l0YWwgdHJhbnNmb3JtYXRpb24sIGVuc3VyaW5nIHlvdSBtYWtlIGluZm9ybWVkIGRlY2lzaW9ucy4nLFxyXG4gICAgICBdLFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VDbGFzc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdXRlckhlcm9DbGFzc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lubmVySGVyb0NsYXNzfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5PdXIgU2VydmljZXM8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICBUaHJvdWdoIGNvbXByZWhlbnNpdmUgc2VydmljZXMgaW5jbHVkaW5nIGlubm92YXRpdmUgc29mdHdhcmUgc29sdXRpb25zLCBkaWdpdGFsIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbiwgcHJvZmVzc2lvbmFsIGNvbnN1bHRpbmcsIGFuZCByZWxpYWJsZSBzdXBwb3J0LCB3ZSBlbmFibGUgb3JnYW5pemF0aW9ucyB0b1xyXG4gICAgICAgICAgICBzdWNjZWVkIGluIHRvZGF5J3MgZXZvbHZpbmcgZGlnaXRhbCBsYW5kc2NhcGUgYW5kIGZ1bGZpbGwgdGhlaXIgc3RyYXRlZ2ljIHZpc2lvbnMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZENsYXNzfT5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMocHJvamVjdERhdGEpLm1hcCgoW3RpdGxlLCBbc3JjLCBhbHQsIGRlc2NyaXB0aW9uXV0pID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0SXRlbVxyXG4gICAgICAgICAgICBrZXk9e3RpdGxlfVxyXG4gICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBjZW50ZXJJY29uPXshaXNNZWRpdW19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiTWVkaWFRdWVyeUNvbnRleHQiLCJJY29uIiwiUHJvamVjdEl0ZW0iLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2VudGVySWNvbiIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwicGFyYWdyYXBoIiwiaW5kZXgiLCJwIiwiUHJvamVjdHNIZXJvIiwiaXNNZWRpdW0iLCJpc0xhcmdlIiwiaXNYTGFyZ2UiLCJzZXJ2aWNlQ2xhc3MiLCJvdXRlckhlcm9DbGFzcyIsImlubmVySGVyb0NsYXNzIiwiZ3JpZENsYXNzIiwicHJvamVjdERhdGEiLCJoMSIsIk9iamVjdCIsImVudHJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx\n"));

/***/ })

});