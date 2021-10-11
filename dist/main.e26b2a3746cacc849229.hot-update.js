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

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar forms = function forms() {\n  var validator = function validator(type, value, name) {\n    switch (type) {\n      case 'text':\n        if (name === 'user_name') {\n          value = value.replace(/[^а-яё IVXL\\-]/ig, '');\n          return value;\n        } else {\n          value = value.replace(/[^а-яё ,!?\\d\\-\\.]/ig, '');\n          return value;\n        }\n\n      case 'email':\n        var email = value.replace(/[^a-zA-Z0-9_\\-@.]/ig, '');\n        return email;\n\n      case 'tel':\n        var phone = value.replace(/[^0-9+]{11,}/g, '');\n        return phone;\n    }\n  };\n\n  var formHeandler = function formHeandler(event) {\n    var target = event.target;\n    var type = target.type;\n    var value = target.value;\n    var name = target.name;\n    target.value = validator(type, value, name);\n  };\n\n  var fieldReplacer = function fieldReplacer(event) {\n    var target = event.target;\n    var type = target.type;\n    var value = target.value;\n    var name = target.name;\n\n    if (type === 'text') {\n      value = value.replace(/ {1,}/g, ' ').trim();\n      value = value.replace(/\\-{2,}/g, '-');\n      target.value = value;\n    }\n\n    if (name === 'user_name') {\n      value = value.toLowerCase();\n      var nameArr = value.split(' ');\n      value = '';\n      nameArr.forEach(function (str) {\n        str = str[0].toUpperCase() + str.substring(1);\n        value += str + ' ';\n      });\n      value = value.trim();\n      target.value = value;\n    }\n  }; // sent-ajax-form\n\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'Application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var formSender = function formSender(event, element) {\n    event.preventDefault();\n    var errorMesssage = 'Что-то пошло не так...',\n        loadMessage = 'Загрузка...',\n        succsessMessage = 'Спасибо!!! Мы скоро с Вами свяжемся...',\n        statuseMessage = document.createElement('div'),\n        formData = new FormData(element),\n        body = {};\n    statuseMessage.style.color = '#fff';\n    element.append(statuseMessage);\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    statuseMessage.textContent = loadMessage;\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Network status is not 200');\n      }\n\n      statuseMessage.textContent = succsessMessage;\n    })[\"catch\"](function (error) {\n      statuseMessage.textContent = errorMesssage;\n      console.error(error);\n    })[\"finally\"](function () {\n      element.reset();\n      setInterval(function () {\n        statuseMessage.remove();\n      }, 3000);\n    });\n  };\n\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (event) {\n    var target = event.target;\n    target = target.closest('form');\n\n    if (target) {\n      formHeandler(event);\n    }\n  });\n  body.addEventListener('change', function (event) {\n    var target = event.target;\n    target = target.closest('form');\n\n    if (target) {\n      fieldReplacer(event);\n    }\n  });\n  body.addEventListener('submit', function (event) {\n    var target = event.target;\n    target = target.closest('form');\n    formSender(event, target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://3d-glo/./src/modules/forms.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3056b233a5b888e9f95d")
/******/ })();
/******/ 
/******/ }
);