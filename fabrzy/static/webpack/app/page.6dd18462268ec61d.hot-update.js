"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/client/survey.js":
/*!*****************************************!*\
  !*** ./src/components/client/survey.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fetches_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/fetches/requests */ \"(app-pages-browser)/./src/fetches/requests.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"(app-pages-browser)/./node_modules/react-cookie/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Survey(param) {\n    let { uid, title } = param;\n    _s();\n    const [survey, setSurvey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"ready\",\n        \"finished\"\n    ]);\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // get survey questions\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        (0,_fetches_requests__WEBPACK_IMPORTED_MODULE_2__.GetPreSurvey)().then((res)=>{\n            console.log(res);\n            setSurvey(res.data);\n        });\n    }, []);\n    // post survey questions\n    function handleSurveyForm() {\n        console.log(body);\n        (0,_fetches_requests__WEBPACK_IMPORTED_MODULE_2__.SubmitPreSurvey)(body).then((res)=>{\n            console.log(res);\n            setCookie(\"finished\", uid);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 h-[500px] bg-slate-600 rounded-lg px-9 items-center justify-center text-center flex flex-col overflow-hidden text-amber-300 pb-10 uppercase font-bold\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-amber-300 pb-10 uppercase font-bold my-5\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full w-full flex flex-col overflow-y-scroll\",\n                children: [\n                    survey.map((survey, idx)=>{\n                        // initial resp\n                        const no = idx + 1;\n                        var response = {\n                            questionNo: no.toString(),\n                            userID: uid,\n                            type: \"pre\"\n                        };\n                        //form\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-20 flex flex-col rounded-lg bg-orange-600 text-white my-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-2 text-black justify-center w-full py-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"# \" + no\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"italic\",\n                                            children: survey.question\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-full\",\n                                    children: survey.choices ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            onChange: (e)=>response = {\n                                                    ...response,\n                                                    answer: e.currentTarget.value\n                                                },\n                                            children: survey.choices.map((choice, no)=>{\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: no,\n                                                    children: choice\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 25\n                                                }, this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"w-full px-2 text-black\",\n                                        onChange: (e)=>response = {\n                                                ...response,\n                                                input: e.currentTarget.value\n                                            }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full flex justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-24 h-10 rounded-sm text-white \".concat(!counter == no ? \"bg-gray-400\" : \"bg-green-600\", \"}\"),\n                                        onClick: (e)=>{\n                                            e.currentTarget.disabled = true;\n                                            setBody([\n                                                ...body,\n                                                response\n                                            ]);\n                                            setCounter((prev)=>prev + 1);\n                                        },\n                                        children: \"Confirm\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-7 py-4 mt-7 mb-3\",\n                        onClick: ()=>{\n                            handleSurveyForm();\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Fabrzy/Desktop/Dev/llp/frontend/src/components/client/survey.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Survey, \"nrgJ8HwhGQj8d1LxXyUSm1eBZ9w=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies\n    ];\n});\n_c = Survey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Survey);\nvar _c;\n$RefreshReg$(_c, \"Survey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NsaWVudC9zdXJ2ZXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEQ7QUFDUDtBQUNYO0FBQ1E7QUFFbEQsU0FBU08sT0FBTyxLQUFjO1FBQWQsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUUsR0FBZDs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNZLFNBQVNDLFVBQVUsR0FBR1Ysd0RBQVVBLENBQUM7UUFBQztRQUFTO0tBQVc7SUFDN0QsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXZDLHVCQUF1QjtJQUN2QkMsOENBQU9BLENBQUM7UUFDTkcsK0RBQVlBLEdBQUdZLElBQUksQ0FBQyxDQUFDQztZQUNuQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaUixVQUFVUSxJQUFJRyxJQUFJO1FBQ3BCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsd0JBQXdCO0lBQ3hCLFNBQVNDO1FBQ1BILFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWlIsa0VBQWVBLENBQUNRLE1BQU1NLElBQUksQ0FBQyxDQUFDQztZQUMxQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaSixVQUFVLFlBQVlQO1FBQ3hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDswQkFDQyw0RUFBQ0U7b0JBQUdELFdBQVU7OEJBQ1hoQjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNlO2dCQUFJQyxXQUFVOztvQkFDWmYsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDakIsUUFBUWtCO3dCQUNuQixlQUFlO3dCQUNmLE1BQU1DLEtBQUtELE1BQU07d0JBRWpCLElBQUlFLFdBQVc7NEJBQ2JDLFlBQVlGLEdBQUdHLFFBQVE7NEJBQ3ZCQyxRQUFRekI7NEJBQ1IwQixNQUFNO3dCQUNSO3dCQUVBLE1BQU07d0JBQ04scUJBQ0UsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FFYiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDQztzREFBSSxPQUFPRzs7Ozs7O3NEQUNaLDhEQUFDSDs0Q0FBR0QsV0FBVTtzREFBVWYsT0FBT3lCLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FJekMsOERBQUNYO29DQUFJQyxXQUFVOzhDQUNaZixPQUFPMEIsT0FBTyxpQkFDYiw4REFBQ1o7a0RBQ0MsNEVBQUNhOzRDQUNDQyxVQUFVLENBQUNDLElBQ1JULFdBQVc7b0RBQ1YsR0FBR0EsUUFBUTtvREFDWFUsUUFBUUQsRUFBRUUsYUFBYSxDQUFDQyxLQUFLO2dEQUMvQjtzREFHRGhDLE9BQU8wQixPQUFPLENBQUNULEdBQUcsQ0FBQyxDQUFDZ0IsUUFBUWQ7OERBQzNCLDhEQUFDZTtvREFBT0YsT0FBT2I7OERBQUtjOzs7Ozs7NENBQ3RCOzs7Ozs7Ozs7OzZEQUlKOzs7Ozs7OENBS0osOERBQUNuQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ29CO3dDQUNDcEIsV0FBVTt3Q0FDVmEsVUFBVSxDQUFDQyxJQUNSVCxXQUFXO2dEQUFFLEdBQUdBLFFBQVE7Z0RBQUVlLE9BQU9OLEVBQUVFLGFBQWEsQ0FBQ0MsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7OENBTTlELDhEQUFDbEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNxQjt3Q0FDQ3JCLFdBQVcsbUNBRVYsT0FEQyxDQUFDVCxXQUFXYSxLQUFLLGdCQUFnQixnQkFDbEM7d0NBQ0RrQixTQUFTLENBQUNSOzRDQUNSQSxFQUFFRSxhQUFhLENBQUNPLFFBQVEsR0FBRzs0Q0FDM0JuQyxRQUFRO21EQUFJRDtnREFBTWtCOzZDQUFTOzRDQUMzQmIsV0FBVyxDQUFDZ0MsT0FBU0EsT0FBTzt3Q0FDOUI7a0RBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1UO2tDQUNBLDhEQUFDSDt3QkFDQ3JCLFdBQVU7d0JBQ1ZzQixTQUFTOzRCQUNQeEI7d0JBQ0Y7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBL0dTaEI7O1FBR3NCRixvREFBVUE7OztLQUhoQ0U7QUFpSFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2xpZW50L3N1cnZleS5qcz82NGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN1Ym1pdFByZVN1cnZleSB9IGZyb20gXCJAL2ZldGNoZXMvcmVxdWVzdHNcIjtcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5pbXBvcnQgeyBHZXRQcmVTdXJ2ZXkgfSBmcm9tIFwiQC9mZXRjaGVzL3JlcXVlc3RzXCI7XG5cbmZ1bmN0aW9uIFN1cnZleSh7IHVpZCwgdGl0bGUgfSkge1xuICBjb25zdCBbc3VydmV5LCBzZXRTdXJ2ZXldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJyZWFkeVwiLCBcImZpbmlzaGVkXCJdKTtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMSk7XG5cbiAgLy8gZ2V0IHN1cnZleSBxdWVzdGlvbnNcbiAgdXNlTWVtbygoKSA9PiB7XG4gICAgR2V0UHJlU3VydmV5KCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgc2V0U3VydmV5KHJlcy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIHBvc3Qgc3VydmV5IHF1ZXN0aW9uc1xuICBmdW5jdGlvbiBoYW5kbGVTdXJ2ZXlGb3JtKCkge1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIFN1Ym1pdFByZVN1cnZleShib2R5KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBzZXRDb29raWUoXCJmaW5pc2hlZFwiLCB1aWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC81IGgtWzUwMHB4XSBiZy1zbGF0ZS02MDAgcm91bmRlZC1sZyBweC05IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWFtYmVyLTMwMCBwYi0xMCB1cHBlcmNhc2UgZm9udC1ib2xkXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1hbWJlci0zMDAgcGItMTAgdXBwZXJjYXNlIGZvbnQtYm9sZCBteS01XCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICB7c3VydmV5Lm1hcCgoc3VydmV5LCBpZHgpID0+IHtcbiAgICAgICAgICAvLyBpbml0aWFsIHJlc3BcbiAgICAgICAgICBjb25zdCBubyA9IGlkeCArIDE7XG5cbiAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBxdWVzdGlvbk5vOiBuby50b1N0cmluZygpLFxuICAgICAgICAgICAgdXNlcklEOiB1aWQsXG4gICAgICAgICAgICB0eXBlOiBcInByZVwiLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvL2Zvcm1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yMCBmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlIG15LTEyXCI+XG4gICAgICAgICAgICAgIHsvKiBxdWVzdGlvbiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHRleHQtYmxhY2sganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB5LTNcIj5cbiAgICAgICAgICAgICAgICA8aDE+e1wiIyBcIiArIG5vfTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIml0YWxpY1wiPntzdXJ2ZXkucXVlc3Rpb259PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIGNob2ljZXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICB7c3VydmV5LmNob2ljZXMgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdXJ2ZXkuY2hvaWNlcy5tYXAoKGNob2ljZSwgbm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25vfT57Y2hvaWNlfTwvb3B0aW9uPjtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogdXNlciBpbnB1dCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0yIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UgPSB7IC4uLnJlc3BvbnNlLCBpbnB1dDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIGNvbmZpcm0gYW5zd2VyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMjQgaC0xMCByb3VuZGVkLXNtIHRleHQtd2hpdGUgJHtcbiAgICAgICAgICAgICAgICAgICAgIWNvdW50ZXIgPT0gbm8gPyBcImJnLWdyYXktNDAwXCIgOiBcImJnLWdyZWVuLTYwMFwiXG4gICAgICAgICAgICAgICAgICB9fWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXRCb2R5KFsuLi5ib2R5LCByZXNwb25zZV0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb3VudGVyKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTcgcHktNCBtdC03IG1iLTNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1cnZleUZvcm0oKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1cnZleTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIlN1Ym1pdFByZVN1cnZleSIsInVzZUNvb2tpZXMiLCJHZXRQcmVTdXJ2ZXkiLCJTdXJ2ZXkiLCJ1aWQiLCJ0aXRsZSIsInN1cnZleSIsInNldFN1cnZleSIsImJvZHkiLCJzZXRCb2R5IiwiY29va2llcyIsInNldENvb2tpZSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU3VydmV5Rm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaWR4Iiwibm8iLCJyZXNwb25zZSIsInF1ZXN0aW9uTm8iLCJ0b1N0cmluZyIsInVzZXJJRCIsInR5cGUiLCJxdWVzdGlvbiIsImNob2ljZXMiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJhbnN3ZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJjaG9pY2UiLCJvcHRpb24iLCJpbnB1dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/client/survey.js\n"));

/***/ })

});