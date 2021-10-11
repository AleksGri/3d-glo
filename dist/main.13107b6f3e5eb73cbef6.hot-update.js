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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_teamGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/teamGallery */ \"./src/modules/teamGallery.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15:20 5 october 2021'); //Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //PopUp\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //Tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //Slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //Calculator\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100); //Our team\n\n(0,_modules_teamGallery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); //forms\n\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://3d-glo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcTypeValue = calcBlock.querySelector('.calc-type'),\n      calcSquareValue = calcBlock.querySelector('.calc-square'),\n      calcCountValue = calcBlock.querySelector('.calc-count'),\n      calcDayValue = calcBlock.querySelector('.calc-day'),\n      totalValue = calcBlock.querySelector('#total');\n\n  var countSum = function countSum() {\n    var total = 0;\n    var calcSquare = calcSquareValue.value,\n        calcCount = calcCountValue.value,\n        calcDay = calcDayValue.value,\n        calcType = +calcTypeValue.options[calcTypeValue.selectedIndex].value;\n\n    if (calcType && calcSquare) {\n      total = calcType * calcSquare * price;\n    }\n\n    if (calcCount > 1) {\n      total *= 1 + (calcCount - 1) / 10;\n    }\n\n    if (calcDay && calcDay < 5) {\n      total *= 2;\n    } else if (calcDay && calcDay < 10) {\n      total *= 1.5;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n    target = target.closest('.calc-item');\n\n    if (target && !target.classList.contains('calc-type')) {\n      target.value = target.value.replace(/\\D/g, '');\n    }\n  });\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3d-glo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadLine) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      timerNumbers = document.querySelector('.timer-numbers');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 3600);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    clockPrinter(timerHours, timer.hours);\n    clockPrinter(timerMinutes, timer.minutes);\n    clockPrinter(timerSeconds, timer.seconds);\n  }\n\n  function clockPrinter(element, value) {\n    if (value > 9) element.textContent = value;else {\n      element.textContent = '0' + value;\n    }\n  }\n\n  if (getTimeRemaining().timeRemaining > 0) {\n    updateClock();\n    setInterval(updateClock, 1000);\n  } else {\n    timerHours.textContent = '00';\n    timerMinutes.textContent = '00';\n    timerSeconds.textContent = '00';\n    timerNumbers.style.color = 'red';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3d-glo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar forms = function forms() {\n  var validator = function validator(type, value, name) {\n    switch (type) {\n      case 'text':\n        if (name === 'user_name') {\n          value = value.replace(/[^а-яё IVXL\\-]/ig, '');\n          return value;\n        } else {\n          value = value.replace(/[^а-яё ,!?\\d\\-\\.]/ig, '');\n          return value;\n        }\n\n      case 'email':\n        var email = value.replace(/[^a-zA-Z0-9_\\-@.]/ig, '');\n        return email;\n\n      case 'tel':\n        var phone = value.replace(/[^0-9+]/g, '');\n        return phone;\n    }\n  };\n\n  var formHeandler = function formHeandler(event) {\n    var target = event.target;\n    var type = target.type;\n    var value = target.value;\n    var name = target.name;\n    target.value = validator(type, value, name);\n  };\n\n  var fieldReplacer = function fieldReplacer(event) {\n    var target = event.target;\n    var type = target.type;\n    var value = target.value;\n    var name = target.name;\n\n    if (type === 'text') {\n      value = value.replace(/ {1,}/g, ' ').trim();\n      value = value.replace(/\\-{2,}/g, '-');\n      target.value = value;\n    }\n\n    if (name === 'user_name') {\n      value = value.toLowerCase();\n      var nameArr = value.split(' ');\n      value = '';\n      nameArr.forEach(function (str) {\n        str = str[0].toUpperCase() + str.substring(1);\n        value += str + ' ';\n      });\n      value = value.trim();\n      target.value = value;\n    }\n\n    if (type === 'tel') {\n      var template = /[\\D]{,11}/;\n\n      if (template.test(value)) {\n        console.log(target.value);\n        target.value = ' ';\n      }\n    }\n\n    value = value.replace(/ {1,}/g, ' ').trim();\n    value = value.replace(/\\-{2,}/g, '-');\n    target.value = value;\n  }; // sent-ajax-form\n\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'Application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var formSender = function formSender(event, element) {\n    event.preventDefault();\n    var errorMesssage = 'Что-то пошло не так...',\n        loadMessage = 'Загрузка...',\n        succsessMessage = 'Спасибо!!! Мы скоро с Вами свяжемся...',\n        statuseMessage = document.createElement('div'),\n        formData = new FormData(element),\n        body = {};\n    statuseMessage.style.color = '#fff';\n    element.append(statuseMessage);\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    statuseMessage.textContent = loadMessage;\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Network status is not 200');\n      }\n\n      statuseMessage.textContent = succsessMessage;\n    })[\"catch\"](function (error) {\n      statuseMessage.textContent = errorMesssage;\n      console.error(error);\n    })[\"finally\"](function () {\n      element.reset();\n      setInterval(function () {\n        statuseMessage.remove();\n      }, 3000);\n    });\n  };\n\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (event) {\n    var target = event.target;\n    target = target.closest('form');\n\n    if (target) {\n      formHeandler(event);\n    }\n  });\n  body.addEventListener('change', function (event) {\n    var target = event.target;\n    target = target.closest('form');\n\n    if (target) {\n      fieldReplacer(event);\n    }\n  });\n  body.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    target = target.closest('form');\n    target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.background = '#ffffff';\n    target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.background = '#ffffff';\n    target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].style.background = '#ffffff';\n\n    if (target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].value === '') {\n      target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.background = '#de9a8e';\n      return;\n    }\n\n    if (target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].value === '') {\n      target.childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.background = '#de9a8e';\n      return;\n    }\n\n    if (target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].value === '') {\n      target.childNodes[1].childNodes[1].childNodes[5].childNodes[1].style.background = '#de9a8e';\n      return;\n    }\n\n    fieldReplacer(event);\n    formSender(event, target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3d-glo/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btns = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      portfolioDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      dot,\n      interval;\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlay = function autoPlay() {\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlay, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  var addDots = function addDots() {\n    slide.forEach(function () {\n      var elem = document.createElement('li');\n      elem.classList.add('dot');\n      portfolioDots.append(elem);\n    });\n    dot = document.querySelectorAll('.dot');\n    dot[0].classList.add('dot-active');\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn, .dot')) {\n      nextSlide(slide, currentSlide, 'portfolio-item-active');\n      nextSlide(dot, currentSlide, 'dot-active');\n\n      if (target.matches('#arrow-right')) {\n        currentSlide++;\n      } else if (target.matches('#arrow-left')) {\n        currentSlide--;\n      } else {\n        dot.forEach(function (elem, index) {\n          if (elem === target) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      prevSlide(slide, currentSlide, 'portfolio-item-active');\n      prevSlide(dot, currentSlide, 'dot-active');\n    }\n  });\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn, .dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn, .dot')) {\n      startSlide(1500);\n    }\n  });\n  addDots();\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3d-glo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tabs = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    var toggleTabContent = function toggleTabContent(index) {\n      for (var i = 0; i < tabContent.length; i++) {\n        if (i === index) {\n          tabContent[i].classList.remove('d-none');\n          tabs[i].classList.add('active');\n        } else {\n          tabContent[i].classList.add('d-none');\n          tabs[i].classList.remove('active');\n        }\n      }\n    };\n\n    if (target) {\n      tabs.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3d-glo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/teamGallery.js":
/*!************************************!*\
  !*** ./src/modules/teamGallery.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar teamGallery = function teamGallery() {\n  var galery = document.getElementById('command');\n  var replacedImg;\n  galery.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    target = target.closest('.command__photo');\n\n    if (target) {\n      replacedImg = target.src;\n      target.src = target.dataset.img;\n    }\n  });\n  galery.addEventListener('mouseout', function (event) {\n    var target = event.target;\n    target = target.closest('.command__photo');\n\n    if (target) {\n      target.src = replacedImg;\n      replacedImg = null;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamGallery);\n\n//# sourceURL=webpack://3d-glo/./src/modules/teamGallery.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleMenu() {\n  var menu = document.querySelector('menu'),\n      main = document.querySelector('main');\n\n  var menuHandler = function menuHandler() {\n    if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {\n      menu.style.transform = 'translate(0)';\n    } else {\n      menu.style.transform = 'translate(-100%)';\n    }\n  };\n\n  main.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.menu');\n\n    if (target) {\n      menuHandler();\n    } else {\n      var _target = event.target;\n      _target = _target.closest('menu');\n\n      if (!_target && menu.style.transform === 'translate(0px)') {\n        menuHandler();\n      }\n    }\n  });\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close-btn')) {\n      menuHandler();\n    } else {\n      target = target.closest('li');\n      document.location.replace(target.childNodes[0].href);\n\n      if (target) {\n        menuHandler();\n      }\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3d-glo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction togglePopUp() {\n  var popupBtn = document.querySelectorAll('.popup-btn'),\n      popupWindow = document.querySelector('.popup'),\n      popupForm = popupWindow.querySelector('#form3');\n\n  var popupHendler = function popupHendler() {\n    var popAnimation = function popAnimation(opacity, displayValue) {\n      popupWindow.style.opacity = \"\".concat(opacity, \"%\");\n\n      function initiateTimeOut() {\n        setTimeout(function () {\n          opacityChanger();\n        }, 50);\n      }\n\n      function opacityChanger() {\n        if (displayValue === 'block') {\n          popupWindow.style.display = displayValue;\n          opacity += 10;\n          popupWindow.style.opacity = \"\".concat(opacity, \"%\");\n\n          if (opacity < 100) {\n            initiateTimeOut();\n          }\n        } else {\n          opacity -= 10;\n          popupWindow.style.opacity = \"\".concat(opacity, \"%\");\n\n          if (opacity > 0) {\n            initiateTimeOut();\n          } else {\n            popupWindow.style.display = displayValue;\n          }\n        }\n      }\n\n      initiateTimeOut();\n    };\n\n    if (!popupWindow.style.display || popupWindow.style.display === 'none') {\n      if (window.innerWidth < 768) {\n        popupWindow.style.display = 'block';\n      } else {\n        popAnimation(0, 'block');\n      }\n    } else {\n      if (window.innerWidth < 768) {\n        popupWindow.style.display = 'none';\n      } else {\n        popAnimation(100, 'none');\n      }\n    }\n  };\n\n  popupBtn.forEach(function (button) {\n    return button.addEventListener('click', popupHendler);\n  });\n  popupWindow.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popupHendler();\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popupHendler();\n      }\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3d-glo/./src/modules/togglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bba061822c319fe59dc6")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);