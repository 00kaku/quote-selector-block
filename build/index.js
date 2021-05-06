/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Quote.js":
/*!*********************************!*\
  !*** ./src/components/Quote.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This function will display the selected quote.
 *
 * @param {Object} props The function props.
 * @param {Object} props.quote The quote object.
 * @param {string} props.color The theme color.
 * @return {undefined}
 */

var Quote = function Quote(_ref) {
  var quote = _ref.quote,
      color = _ref.color;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "quote__header",
    style: {
      'border-top': "2px solid ".concat(color)
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "quote__quote"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])((quote === null || quote === void 0 ? void 0 : quote.quote) || 'No quote selected'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "quote__footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "quote__footer__text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    style: {
      color: color,
      fontSize: '22px',
      fontWeight: 'bold',
      fontFamily: 'Alegreya SC, serif',
      margin: '0'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])((quote === null || quote === void 0 ? void 0 : quote.citation) || 'Unknown')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'Open Sans condensed, Arial Narrow, serif',
      textShadow: '2px 2px rgba(0, 0, 0, 0.5)',
      margin: 0,
      marginLeft: 'auto'
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])((quote === null || quote === void 0 ? void 0 : quote.author) || 'Unknown'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "image__outer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])((quote === null || quote === void 0 ? void 0 : quote.srcUrl) || 'https://via.placeholder.com/150'),
    alt: "Author: ".concat((quote === null || quote === void 0 ? void 0 : quote.author) || 'Unknown')
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

/***/ "./src/components/quotes-editor.js":
/*!*****************************************!*\
  !*** ./src/components/quotes-editor.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote */ "./src/components/Quote.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





/**
 * This function will provied the user with grid of all post of type quotes and let them select a quote to display.
 * It will then use imported Quote component to display the quote.
 *
 * @param {Object} props The object passed from the index.js.
 * @param {Array} props.posts The array of all the posts type quotes.
 * @param {Function} props.setAttributes The function to update attributes of the block.
 * @param {Object} props.attributes The attributes of the block.
 * @return {undefined}
 */

var quotesEditor = function quotesEditor(_ref) {
  var posts = _ref.posts,
      setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;

  var handlePostSelect = function handlePostSelect(post) {
    var _post$_embedded, _post$_embedded$wpFe;

    var updatedPost = {
      id: post.id,
      title: post.title.rendered,
      quote: post.meta.quote,
      author: post.meta.author,
      citation: post.meta.citation,
      srcUrl: ((_post$_embedded = post._embedded) === null || _post$_embedded === void 0 ? void 0 : (_post$_embedded$wpFe = _post$_embedded['wp:featuredmedia'][0]) === null || _post$_embedded$wpFe === void 0 ? void 0 : _post$_embedded$wpFe.source_url) || 'https://via.placeholder.com/150'
    };
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
    key: "settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Theme Color'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    onChange: function onChange(color) {
      return setAttributes({
        color: color
      });
    },
    value: attributes.color
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Quote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    quote: attributes.post,
    color: attributes.color
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (quotesEditor);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_quotes_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quotes-editor */ "./src/components/quotes-editor.js");
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Quote */ "./src/components/Quote.js");




var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;

/**
 * The function register our block with the cofiguration passed in the second argument. The 'edit' function in the object
 * the editor component presented to the user to make changes and the 'save' function is what will be presented on the screen.
 *
 * @return {undefined}
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('quote/selector-block', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote Selector Block'),
  icon: 'images-alt2',
  category: 'design',
  attributes: {
    post: {
      type: 'Object',
      default: null
    },
    color: {
      type: 'string',
      default: '#222'
    }
  },
  edit: withSelect(function () {
    return {
      posts: select('core').getEntityRecords('postType', 'quotes', {
        _embed: true
      })
    };
  })(_components_quotes_editor__WEBPACK_IMPORTED_MODULE_3__["default"]),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Quote__WEBPACK_IMPORTED_MODULE_4__["default"], {
      quote: attributes === null || attributes === void 0 ? void 0 : attributes.post,
      color: attributes === null || attributes === void 0 ? void 0 : attributes.color
    });
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map