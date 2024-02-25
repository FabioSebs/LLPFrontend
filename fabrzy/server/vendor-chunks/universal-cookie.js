"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universal-cookie";
exports.ids = ["vendor-chunks/universal-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/universal-cookie/esm/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/universal-cookie/esm/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cookies)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(ssr)/./node_modules/cookie/index.js\");\n\nfunction hasDocumentCookie() {\n    const testingValue = typeof global === \"undefined\" ? undefined : global.TEST_HAS_DOCUMENT_COOKIE;\n    if (typeof testingValue === \"boolean\") {\n        return testingValue;\n    }\n    // Can we get/set cookies on document.cookie?\n    return typeof document === \"object\" && typeof document.cookie === \"string\";\n}\nfunction parseCookies(cookies) {\n    if (typeof cookies === \"string\") {\n        return cookie__WEBPACK_IMPORTED_MODULE_0__.parse(cookies);\n    } else if (typeof cookies === \"object\" && cookies !== null) {\n        return cookies;\n    } else {\n        return {};\n    }\n}\nfunction readCookie(value, options = {}) {\n    const cleanValue = cleanupCookieValue(value);\n    if (!options.doNotParse) {\n        try {\n            return JSON.parse(cleanValue);\n        } catch (e) {\n        // At least we tried\n        }\n    }\n    // Ignore clean value if we failed the deserialization\n    // It is not relevant anymore to trim those values\n    return value;\n}\nfunction cleanupCookieValue(value) {\n    // express prepend j: before serializing a cookie\n    if (value && value[0] === \"j\" && value[1] === \":\") {\n        return value.substr(2);\n    }\n    return value;\n}\nclass Cookies {\n    constructor(cookies, defaultSetOptions = {}){\n        this.changeListeners = [];\n        this.HAS_DOCUMENT_COOKIE = false;\n        this.update = ()=>{\n            if (!this.HAS_DOCUMENT_COOKIE) {\n                return;\n            }\n            const previousCookies = this.cookies;\n            this.cookies = cookie__WEBPACK_IMPORTED_MODULE_0__.parse(document.cookie);\n            this._checkChanges(previousCookies);\n        };\n        const domCookies = typeof document === \"undefined\" ? \"\" : document.cookie;\n        this.cookies = parseCookies(cookies || domCookies);\n        this.defaultSetOptions = defaultSetOptions;\n        this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();\n    }\n    _emitChange(params) {\n        for(let i = 0; i < this.changeListeners.length; ++i){\n            this.changeListeners[i](params);\n        }\n    }\n    _checkChanges(previousCookies) {\n        const names = new Set(Object.keys(previousCookies).concat(Object.keys(this.cookies)));\n        names.forEach((name)=>{\n            if (previousCookies[name] !== this.cookies[name]) {\n                this._emitChange({\n                    name,\n                    value: readCookie(this.cookies[name])\n                });\n            }\n        });\n    }\n    _startPolling() {\n        this.pollingInterval = setInterval(this.update, 300);\n    }\n    _stopPolling() {\n        if (this.pollingInterval) {\n            clearInterval(this.pollingInterval);\n        }\n    }\n    get(name, options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        return readCookie(this.cookies[name], options);\n    }\n    getAll(options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        const result = {};\n        for(let name in this.cookies){\n            result[name] = readCookie(this.cookies[name], options);\n        }\n        return result;\n    }\n    set(name, value, options) {\n        if (options) {\n            options = Object.assign(Object.assign({}, this.defaultSetOptions), options);\n        } else {\n            options = this.defaultSetOptions;\n        }\n        const stringValue = typeof value === \"string\" ? value : JSON.stringify(value);\n        this.cookies = Object.assign(Object.assign({}, this.cookies), {\n            [name]: stringValue\n        });\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, stringValue, options);\n        }\n        this._emitChange({\n            name,\n            value,\n            options\n        });\n    }\n    remove(name, options) {\n        const finalOptions = options = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), options), {\n            expires: new Date(1970, 1, 1, 0, 0, 1),\n            maxAge: 0\n        });\n        this.cookies = Object.assign({}, this.cookies);\n        delete this.cookies[name];\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, \"\", finalOptions);\n        }\n        this._emitChange({\n            name,\n            value: undefined,\n            options\n        });\n    }\n    addChangeListener(callback) {\n        this.changeListeners.push(callback);\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1) {\n            if (false) {} else {\n                this._startPolling();\n            }\n        }\n    }\n    removeChangeListener(callback) {\n        const idx = this.changeListeners.indexOf(callback);\n        if (idx >= 0) {\n            this.changeListeners.splice(idx, 1);\n        }\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0) {\n            if (false) {} else {\n                this._stopPolling();\n            }\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBRWpDLFNBQVNDO0lBQ0wsTUFBTUMsZUFBZSxPQUFPQyxXQUFXLGNBQ2pDQyxZQUNBRCxPQUFPRSx3QkFBd0I7SUFDckMsSUFBSSxPQUFPSCxpQkFBaUIsV0FBVztRQUNuQyxPQUFPQTtJQUNYO0lBQ0EsNkNBQTZDO0lBQzdDLE9BQU8sT0FBT0ksYUFBYSxZQUFZLE9BQU9BLFNBQVNOLE1BQU0sS0FBSztBQUN0RTtBQUNBLFNBQVNPLGFBQWFDLE9BQU87SUFDekIsSUFBSSxPQUFPQSxZQUFZLFVBQVU7UUFDN0IsT0FBT1IseUNBQVksQ0FBQ1E7SUFDeEIsT0FDSyxJQUFJLE9BQU9BLFlBQVksWUFBWUEsWUFBWSxNQUFNO1FBQ3RELE9BQU9BO0lBQ1gsT0FDSztRQUNELE9BQU8sQ0FBQztJQUNaO0FBQ0o7QUFDQSxTQUFTRSxXQUFXQyxLQUFLLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLE1BQU1DLGFBQWFDLG1CQUFtQkg7SUFDdEMsSUFBSSxDQUFDQyxRQUFRRyxVQUFVLEVBQUU7UUFDckIsSUFBSTtZQUNBLE9BQU9DLEtBQUtQLEtBQUssQ0FBQ0k7UUFDdEIsRUFDQSxPQUFPSSxHQUFHO1FBQ04sb0JBQW9CO1FBQ3hCO0lBQ0o7SUFDQSxzREFBc0Q7SUFDdEQsa0RBQWtEO0lBQ2xELE9BQU9OO0FBQ1g7QUFDQSxTQUFTRyxtQkFBbUJILEtBQUs7SUFDN0IsaURBQWlEO0lBQ2pELElBQUlBLFNBQVNBLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBT0EsS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLO1FBQy9DLE9BQU9BLE1BQU1PLE1BQU0sQ0FBQztJQUN4QjtJQUNBLE9BQU9QO0FBQ1g7QUFFQSxNQUFNUTtJQUNGQyxZQUFZWixPQUFPLEVBQUVhLG9CQUFvQixDQUFDLENBQUMsQ0FBRTtRQUN6QyxJQUFJLENBQUNDLGVBQWUs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LENBQUMzQyxlQUFlLENBQUM0QyxPQUFPLENBQUNQO1FBQ3pDLElBQUlNLE9BQU8sR0FBRztZQUNWLElBQUksQ0FBQzNDLGVBQWUsQ0FBQzZDLE1BQU0sQ0FBQ0YsS0FBSztRQUNyQztRQUNBLElBQUksSUFBSSxDQUFDMUMsbUJBQW1CLElBQUksSUFBSSxDQUFDRCxlQUFlLENBQUNTLE1BQU0sS0FBSyxHQUFHO1lBQy9ELElBQUksS0FBcUQ4QixFQUFFLEVBRTFELE1BQ0k7Z0JBQ0QsSUFBSSxDQUFDbkIsWUFBWTtZQUNyQjtRQUNKO0lBQ0o7QUFDSjtBQUU4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xscGFpLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvZXNtL2luZGV4Lm1qcz9kYzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvb2tpZSBmcm9tICdjb29raWUnO1xuXG5mdW5jdGlvbiBoYXNEb2N1bWVudENvb2tpZSgpIHtcbiAgICBjb25zdCB0ZXN0aW5nVmFsdWUgPSB0eXBlb2YgZ2xvYmFsID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IGdsb2JhbC5URVNUX0hBU19ET0NVTUVOVF9DT09LSUU7XG4gICAgaWYgKHR5cGVvZiB0ZXN0aW5nVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdGVzdGluZ1ZhbHVlO1xuICAgIH1cbiAgICAvLyBDYW4gd2UgZ2V0L3NldCBjb29raWVzIG9uIGRvY3VtZW50LmNvb2tpZT9cbiAgICByZXR1cm4gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZG9jdW1lbnQuY29va2llID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIHBhcnNlQ29va2llcyhjb29raWVzKSB7XG4gICAgaWYgKHR5cGVvZiBjb29raWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY29va2llLnBhcnNlKGNvb2tpZXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ29iamVjdCcgJiYgY29va2llcyAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29va2llcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWFkQ29va2llKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBjbGVhblZhbHVlID0gY2xlYW51cENvb2tpZVZhbHVlKHZhbHVlKTtcbiAgICBpZiAoIW9wdGlvbnMuZG9Ob3RQYXJzZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2xlYW5WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IHdlIHRyaWVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWdub3JlIGNsZWFuIHZhbHVlIGlmIHdlIGZhaWxlZCB0aGUgZGVzZXJpYWxpemF0aW9uXG4gICAgLy8gSXQgaXMgbm90IHJlbGV2YW50IGFueW1vcmUgdG8gdHJpbSB0aG9zZSB2YWx1ZXNcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjbGVhbnVwQ29va2llVmFsdWUodmFsdWUpIHtcbiAgICAvLyBleHByZXNzIHByZXBlbmQgajogYmVmb3JlIHNlcmlhbGl6aW5nIGEgY29va2llXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlWzBdID09PSAnaicgJiYgdmFsdWVbMV0gPT09ICc6Jykge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyKDIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKGNvb2tpZXMsIGRlZmF1bHRTZXRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0Nvb2tpZXMgPSB0aGlzLmNvb2tpZXM7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWUucGFyc2UoZG9jdW1lbnQuY29va2llKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQ2hhbmdlcyhwcmV2aW91c0Nvb2tpZXMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBkb21Db29raWVzID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/ICcnIDogZG9jdW1lbnQuY29va2llO1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY29va2llcyB8fCBkb21Db29raWVzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2V0T3B0aW9ucyA9IGRlZmF1bHRTZXRPcHRpb25zO1xuICAgICAgICB0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgPSBoYXNEb2N1bWVudENvb2tpZSgpO1xuICAgIH1cbiAgICBfZW1pdENoYW5nZShwYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYW5nZUxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNbaV0ocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2hlY2tDaGFuZ2VzKHByZXZpb3VzQ29va2llcykge1xuICAgICAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMocHJldmlvdXNDb29raWVzKS5jb25jYXQoT2JqZWN0LmtleXModGhpcy5jb29raWVzKSkpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNDb29raWVzW25hbWVdICE9PSB0aGlzLmNvb2tpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVdKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zdGFydFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIDMwMCk7XG4gICAgfVxuICAgIF9zdG9wUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9sbGluZ0ludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQobmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZENvb2tpZSh0aGlzLmNvb2tpZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBnZXRBbGwob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5kb05vdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmNvb2tpZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVdLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmRlZmF1bHRTZXRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29va2llcyksIHsgW25hbWVdOiBzdHJpbmdWYWx1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnNlcmlhbGl6ZShuYW1lLCBzdHJpbmdWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSh7IG5hbWUsIHZhbHVlLCBvcHRpb25zIH0pO1xuICAgIH1cbiAgICByZW1vdmUobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSAob3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTZXRPcHRpb25zKSwgb3B0aW9ucyksIHsgZXhwaXJlczogbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSksIG1heEFnZTogMCB9KSk7XG4gICAgICAgIHRoaXMuY29va2llcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29va2llcyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvb2tpZXNbbmFtZV07XG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5zZXJpYWxpemUobmFtZSwgJycsIGZpbmFsT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSh7IG5hbWUsIHZhbHVlOiB1bmRlZmluZWQsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICBpZiAodGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFICYmIHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICdjb29raWVTdG9yZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNvb2tpZVN0b3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0UG9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY2hhbmdlTGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgJiYgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgJ2Nvb2tpZVN0b3JlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29va2llU3RvcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29va2llcyBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiY29va2llIiwiaGFzRG9jdW1lbnRDb29raWUiLCJ0ZXN0aW5nVmFsdWUiLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJURVNUX0hBU19ET0NVTUVOVF9DT09LSUUiLCJkb2N1bWVudCIsInBhcnNlQ29va2llcyIsImNvb2tpZXMiLCJwYXJzZSIsInJlYWRDb29raWUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJjbGVhblZhbHVlIiwiY2xlYW51cENvb2tpZVZhbHVlIiwiZG9Ob3RQYXJzZSIsIkpTT04iLCJlIiwic3Vic3RyIiwiQ29va2llcyIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFNldE9wdGlvbnMiLCJjaGFuZ2VMaXN0ZW5lcnMiLCJIQVNfRE9DVU1FTlRfQ09PS0lFIiwidXBkYXRlIiwicHJldmlvdXNDb29raWVzIiwiX2NoZWNrQ2hhbmdlcyIsImRvbUNvb2tpZXMiLCJfZW1pdENoYW5nZSIsInBhcmFtcyIsImkiLCJsZW5ndGgiLCJuYW1lcyIsIlNldCIsIk9iamVjdCIsImtleXMiLCJjb25jYXQiLCJmb3JFYWNoIiwibmFtZSIsIl9zdGFydFBvbGxpbmciLCJwb2xsaW5nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9zdG9wUG9sbGluZyIsImNsZWFySW50ZXJ2YWwiLCJnZXQiLCJkb05vdFVwZGF0ZSIsImdldEFsbCIsInJlc3VsdCIsInNldCIsImFzc2lnbiIsInN0cmluZ1ZhbHVlIiwic3RyaW5naWZ5Iiwic2VyaWFsaXplIiwicmVtb3ZlIiwiZmluYWxPcHRpb25zIiwiZXhwaXJlcyIsIkRhdGUiLCJtYXhBZ2UiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsImNhbGxiYWNrIiwicHVzaCIsIndpbmRvdyIsImNvb2tpZVN0b3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/esm/index.mjs\n");

/***/ })

};
;