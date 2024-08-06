"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy";
exports.ids = ["vendor-chunks/@smithy"];
exports.modules = {

/***/ "(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/is-array-buffer/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)\n/* harmony export */ });\nconst isArrayBuffer = (arg) => (typeof ArrayBuffer === \"function\" && arg instanceof ArrayBuffer) ||\n    Object.prototype.toString.call(arg) === \"[object ArrayBuffer]\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9pcy1hcnJheS1idWZmZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy1hbXBsaWZ5LWdlbjIvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9pcy1hcnJheS1idWZmZXIvZGlzdC1lcy9pbmRleC5qcz81ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0FycmF5QnVmZmVyID0gKGFyZykgPT4gKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGFyZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-buffer-from/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ \"(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {\n    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {\n        throw new TypeError(`The \"input\" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);\n    }\n    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);\n};\nconst fromString = (input, encoding) => {\n    if (typeof input !== \"string\") {\n        throw new TypeError(`The \"input\" argument must be of type string. Received type ${typeof input} (${input})`);\n    }\n    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFDeEI7QUFDekI7QUFDUCxTQUFTLHNFQUFhO0FBQ3RCLHVGQUF1RixjQUFjLEdBQUcsTUFBTTtBQUM5RztBQUNBLFdBQVcsMENBQU07QUFDakI7QUFDTztBQUNQO0FBQ0EsMEZBQTBGLGNBQWMsR0FBRyxNQUFNO0FBQ2pIO0FBQ0Esc0JBQXNCLDBDQUFNLHlCQUF5QiwwQ0FBTTtBQUMzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy1hbXBsaWZ5LWdlbjIvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tL2Rpc3QtZXMvaW5kZXguanM/YTVmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIkBzbWl0aHkvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5leHBvcnQgY29uc3QgZnJvbUFycmF5QnVmZmVyID0gKGlucHV0LCBvZmZzZXQgPSAwLCBsZW5ndGggPSBpbnB1dC5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSA9PiB7XG4gICAgaWYgKCFpc0FycmF5QnVmZmVyKGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgQXJyYXlCdWZmZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCBvZmZzZXQsIGxlbmd0aCk7XG59O1xuZXhwb3J0IGNvbnN0IGZyb21TdHJpbmcgPSAoaW5wdXQsIGVuY29kaW5nKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kaW5nID8gQnVmZmVyLmZyb20oaW5wdXQsIGVuY29kaW5nKSA6IEJ1ZmZlci5mcm9tKGlucHV0KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js":
/*!************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst fromUtf8 = (input) => {\n    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, \"utf8\");\n    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9mcm9tVXRmOC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDtBQUMvQztBQUNQLGdCQUFnQixvRUFBVTtBQUMxQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLWFtcGxpZnktZ2VuMi8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL2Zyb21VdGY4LmpzPzA3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVN0cmluZyB9IGZyb20gXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIjtcbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGJ1ZiA9IGZyb21TdHJpbmcoaW5wdXQsIFwidXRmOFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),\n/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),\n/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\");\n/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDSTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLWFtcGxpZnktZ2VuMi8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL2luZGV4LmpzPzRmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vZnJvbVV0ZjhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RvVWludDhBcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VdGY4XCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n\nconst toUint8Array = (data) => {\n    if (typeof data === \"string\") {\n        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1VpbnQ4QXJyYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFDL0I7QUFDUDtBQUNBLGVBQWUsbURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLWFtcGxpZnktZ2VuMi8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL3RvVWludDhBcnJheS5qcz8zMzYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21VdGY4IH0gZnJvbSBcIi4vZnJvbVV0ZjhcIjtcbmV4cG9ydCBjb25zdCB0b1VpbnQ4QXJyYXkgPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUtf8.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst toUtf8 = (input) => (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(\"utf8\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1V0ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDcEQsMEJBQTBCLHlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLWFtcGxpZnktZ2VuMi8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL3RvVXRmOC5qcz82YjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21BcnJheUJ1ZmZlciB9IGZyb20gXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIjtcbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IGZyb21BcnJheUJ1ZmZlcihpbnB1dC5idWZmZXIsIGlucHV0LmJ5dGVPZmZzZXQsIGlucHV0LmJ5dGVMZW5ndGgpLnRvU3RyaW5nKFwidXRmOFwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\n");

/***/ })

};
;