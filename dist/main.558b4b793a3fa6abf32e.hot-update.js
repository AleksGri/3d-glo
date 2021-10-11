"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3d_glo"]("main",{

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcTypeValue = calcBlock.querySelector('.calc-type'),\n      calcSquareValue = calcBlock.querySelector('.calc-square'),\n      calcCountValue = calcBlock.querySelector('.calc-count'),\n      calcDayValue = calcBlock.querySelector('.calc-day'),\n      totalValue = calcBlock.querySelector('#total');\n\n  var countSum = function countSum() {\n    var total = 0;\n    var calcSquare = calcSquareValue.value,\n        calcCount = calcCountValue.value,\n        calcDay = calcDayValue.value,\n        calcType = calcTypeValue.options[calcTypeValue.selectedIndex].value;\n\n    if (calcType && calcSquare) {\n      total = calcType * calcSquare * price;\n    }\n\n    if (calcCount > 1) {\n      total *= 1 + (calcCount - 1) / 10;\n    }\n\n    if (calcDay && calcDay < 5) {\n      total *= 2;\n    } else if (calcDay && calcDay < 10) {\n      total *= 1.5;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n    target = target.closest('.calc-item');\n\n    if (target) {\n      target.value = target.value.replace(/\\D/g, '');\n    }\n  });\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3d-glo/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("24f7835dbe7225f70221")
/******/ })();
/******/ 
/******/ }
);