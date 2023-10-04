/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./tomatoes.ttf */ "./src/tomatoes.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Cinderella.ttf */ "./src/Cinderella.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Meyer Reset*/
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

@font-face {
    font-family: 'Italian';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
}

@font-face {
    font-family: 'Cinderella';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
}

svg {
    height: 2rem;
    width: 2rem;
}

#content {
    display: grid;
    grid-auto-flow: row;
    background-color: rgb(164, 198, 181)
}

.panorama {
    width: 100vw;
    height: 30vh;
}

.headline,
.impressum {
    display: grid;
    background: linear-gradient(to right, green, green 33%, white 33%, white 66%, red 66%, red);
    padding: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
}

.lang,
.headtitle,
.menu {
    display: flex;
    justify-content: center;
}

.headtitle {
    font-family: 'Cinderella', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.2;
}

#language {
    appearance: none;
    background-color: rgb(19, 183, 19);
    color: white;
    padding: .2rem;
    border: 2px solid rgb(19, 183, 19);
    padding-inline: .8rem;
    border-radius: 0.3rem;
    cursor: pointer;
}


#language:focus {
    border-color: white;
    box-shadow: .4rem .4rem .1rem green;
}

#language:hover {
    transform: scale(1.05);
}

button {
    border: 2px solid rgb(231, 77, 77);
    width: fit-content;
    padding: .2rem;
    padding-inline: 1rem;
    cursor: pointer;
    background-color: rgb(231, 77, 77);
    border-radius: .3rem;
}

button:focus {
    border-color: white;
    box-shadow: .4rem .4rem .1rem red;
}

button:hover {
    transform: scale(1.05);
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.aboutImages {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
}

.aboutImg {
    width: 100%;
    height: 80%;
    max-width: 30rem;
    max-height: 20rem;
}

.text {
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
}

.title {
    font-family: 'Cinderella', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    text-decoration: underline;
}

.meetChef {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
}

.francescoImg {
    width: 60vw;
    height: 80%;
}

#francesco {
    font-family: 'Italian', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    margin: 1rem;
}

.credit {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    background-color: black;
    color: white;
}

.impressum {
    margin-top: 1rem;
}

a {
    text-decoration: underline;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
}

.career,
.contact,
.dataSecurity {
    text-align: center;
}

.menu{
    position:relative;
}

.modal {
    display: none;
    position: absolute;
    right:0;
    top: 100%;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    z-index: 1;
    opacity: 0;
    transition: opacity 3s;
}

.modal-content{
    transition: opacity 3s;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
}

.option {
    padding: 1.4rem;
    background-color: rgb(231, 77, 77);
    cursor:pointer;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Italian', sans-serif;
}

.option:hover {
    background-color: rgb(218, 53, 53);
}

.option.home {
    display: flex;
    justify-content: center;
}

.modal.active {
    display: block;
    opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Meyer Reset*/\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n@font-face {\n    font-family: 'Italian';\n    src: url('./tomatoes.ttf') format('woff2');\n}\n\n@font-face {\n    font-family: 'Cinderella';\n    src: url('./Cinderella.ttf') format('woff2');\n}\n\nsvg {\n    height: 2rem;\n    width: 2rem;\n}\n\n#content {\n    display: grid;\n    grid-auto-flow: row;\n    background-color: rgb(164, 198, 181)\n}\n\n.panorama {\n    width: 100vw;\n    height: 30vh;\n}\n\n.headline,\n.impressum {\n    display: grid;\n    background: linear-gradient(to right, green, green 33%, white 33%, white 66%, red 66%, red);\n    padding: 1rem;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n\n.lang,\n.headtitle,\n.menu {\n    display: flex;\n    justify-content: center;\n}\n\n.headtitle {\n    font-family: 'Cinderella', sans-serif;\n    font-weight: 800;\n    font-size: 1.5rem;\n    line-height: 1.2;\n}\n\n#language {\n    appearance: none;\n    background-color: rgb(19, 183, 19);\n    color: white;\n    padding: .2rem;\n    border: 2px solid rgb(19, 183, 19);\n    padding-inline: .8rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n}\n\n\n#language:focus {\n    border-color: white;\n    box-shadow: .4rem .4rem .1rem green;\n}\n\n#language:hover {\n    transform: scale(1.05);\n}\n\nbutton {\n    border: 2px solid rgb(231, 77, 77);\n    width: fit-content;\n    padding: .2rem;\n    padding-inline: 1rem;\n    cursor: pointer;\n    background-color: rgb(231, 77, 77);\n    border-radius: .3rem;\n}\n\nbutton:focus {\n    border-color: white;\n    box-shadow: .4rem .4rem .1rem red;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\n.about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\n.aboutImages {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    grid-gap: 1rem;\n    justify-items: center;\n    align-items: center;\n}\n\n.aboutImg {\n    width: 100%;\n    height: 80%;\n    max-width: 30rem;\n    max-height: 20rem;\n}\n\n.text {\n    text-align: center;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.title {\n    font-family: 'Cinderella', sans-serif;\n    font-weight: 800;\n    font-size: 2rem;\n    text-decoration: underline;\n}\n\n.meetChef {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.francescoImg {\n    width: 60vw;\n    height: 80%;\n}\n\n#francesco {\n    font-family: 'Italian', sans-serif;\n    font-weight: 800;\n    font-size: 1.5rem;\n    margin: 1rem;\n}\n\n.credit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n    padding: .5rem;\n    background-color: black;\n    color: white;\n}\n\n.impressum {\n    margin-top: 1rem;\n}\n\na {\n    text-decoration: underline;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: black;\n}\n\n.career,\n.contact,\n.dataSecurity {\n    text-align: center;\n}\n\n.menu{\n    position:relative;\n}\n\n.modal {\n    display: none;\n    position: absolute;\n    right:0;\n    top: 100%;\n    width: 100%;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n    border-radius: 1rem;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 3s;\n}\n\n.modal-content{\n    transition: opacity 3s;\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n}\n\n.option {\n    padding: 1.4rem;\n    background-color: rgb(231, 77, 77);\n    cursor:pointer;\n    font-weight: 600;\n    font-size: 1.5rem;\n    font-family: 'Italian', sans-serif;\n}\n\n.option:hover {\n    background-color: rgb(218, 53, 53);\n}\n\n.option.home {\n    display: flex;\n    justify-content: center;\n}\n\n.modal.active {\n    display: block;\n    opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMloader.js":
/*!**************************!*\
  !*** ./src/DOMloader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDOM: () => (/* binding */ loadDOM)
/* harmony export */ });
function loadDOM() {
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
        content.innerHTML ='';

        const panoramaImg = document.createElement('img');
        panoramaImg.classList.add('panorama');
        panoramaImg.src = 'https://static.vecteezy.com/system/resources/previews/022/968/124/original/italian-village-cartoon-landscape-with-green-hills-and-fields-illustration-flat-design-poster-european-summer-village-european-countryside-in-fall-country-houses-vector.jpg';
        panoramaImg.alt = 'italian background';

        const headliner = document.createElement('div');
        headliner.classList.add('headline');

        const lang = document.createElement('div');
        lang.classList.add('lang');
        
        lang.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const selectLang = document.createElement('select');
        selectLang.setAttribute('name', 'language');
        selectLang.id = 'language';
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'en');
        option1.textContent = 'EN';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'it');
        option2.textContent = 'IT';
        selectLang.appendChild(option1);
        selectLang.appendChild(option2);

        lang.appendChild(selectLang);

        const headtitle = document.createElement('div');
        headtitle.classList.add('headtitle');
        headtitle.textContent = "The Bella Partia Restaurant";

        const menu = document.createElement('div');
        menu.classList.add('menu');

        const buttonMenu = document.createElement('button');
        buttonMenu.classList.add('buttonMenu');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal-content">
        <div class="option home">Home</div>
        <div class="option menu">Menu</div>
        <div class="option contact">Contact</div>
        </div>
        `;

        menu.appendChild(buttonMenu);
        menu.appendChild(modal);

        headliner.appendChild(lang);
        headliner.appendChild(headtitle);
        headliner.appendChild(menu);

        const about = document.createElement('div');
        about.classList.add('about');

        const titleAbout = document.createElement('div');
        titleAbout.classList.add('title', 'about');
        titleAbout.textContent = "About Bella Partia";

        const aboutImages = document.createElement('div');
        aboutImages.classList.add('aboutImages');
        const aboutImg1 = document.createElement('img');
        aboutImg1.classList.add('aboutImg');
        aboutImg1.src = "https://images.unsplash.com/photo-1534650075489-3baecec1e8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
        aboutImg1.alt = "italian restaurant";
        const aboutImg2 = document.createElement('img');
        aboutImg2.classList.add('aboutImg');
        aboutImg2.src = "https://images.squarespace-cdn.com/content/v1/54905286e4b050812345644c/729f506c-d59a-4494-97a7-902e96caf393/Snip20230330_2.png";
        aboutImg2.alt = "location";
        aboutImages.appendChild(aboutImg1);
        aboutImages.appendChild(aboutImg2);

        const text1 = document.createElement('div');
        text1.classList.add('text', 'aboutDiv');
        text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";

        about.appendChild(titleAbout);
        about.appendChild(aboutImages);
        about.appendChild(text1);

        const meetChef = document.createElement('div');
        meetChef.classList.add('meetChef');

        const meetChefTitle = document.createElement('div');
        meetChefTitle.classList.add('meetChef', 'title');
        meetChefTitle.textContent = "Meet the Chef";

        const francescoImg = document.createElement('img');
        francescoImg.classList.add('francescoImg');
        francescoImg.src = "https://img.freepik.com/fotos-kostenlos/ausdrucksstarker-junger-mann-posiert-fuer-winterferien_140725-141023.jpg?w=1380&t=st=1696262618~exp=1696263218~hmac=fc96706489b8a3fc4cc74a27e86e7f29bfb2c50b0fbf11ac0253ab61684b2e2f";
        francescoImg.alt = "italian cook";

        const francesco = document.createElement('div');
        francesco.id = "francesco";
        francesco.textContent = "Francesco";

        const text2 = document.createElement('div');
        text2.classList.add('text', 'Chef');
        text2.textContent = "This is Francesco. He is our best cook, so be nice to him.";

        meetChef.appendChild(meetChefTitle);
        meetChef.appendChild(francescoImg);
        meetChef.appendChild(francesco);
        meetChef.appendChild(text2);

        const impressum = document.createElement('div');
        impressum.classList.add('impressum');

        const career = document.createElement('div');
        career.classList.add('career');
        const link1 = document.createElement('a');
        link1.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link1.target = "_blank";
        link1.rel = "noopener noreferrer";
        link1.textContent = "Career at Bella Partia";
        career.appendChild(link1);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        const link2 = document.createElement('a');
        link2.href = "";
        link2.textContent = "Contact";
        contact.appendChild(link2);

        const dataSecurity = document.createElement('div');
        dataSecurity.classList.add('dataSecurity');
        const link3 = document.createElement('a');
        link3.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link3.target = "_blank";
        link3.rel = "noopener noreferrer";
        link3.textContent = "Data Security";
        dataSecurity.appendChild(link3);

        impressum.appendChild(career);
        impressum.appendChild(contact);
        impressum.appendChild(dataSecurity);

        const credit = document.createElement('div');
        credit.classList.add('credit');
        credit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const text3 = document.createElement('div');
        text3.classList.add('text');
        text3.innerHTML = "&copy; https://github.com/mating02";

        credit.appendChild(text3);

        content.appendChild(panoramaImg);
        content.appendChild(headliner);
        content.appendChild(about);
        content.appendChild(meetChef);
        content.appendChild(impressum);
        content.appendChild(credit);

        selectLang.addEventListener('change', () => {
            if(selectLang.value === "it"){
                headtitle.textContent = 'Il ristorante Bella Partia';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
                career.textContent = 'Carriera al Bella Partia';
                contact.textContent = 'Contatto';
                dataSecurity.textContent = 'La sicurezza dei dati';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
                career.textContent = 'Career at Bella Partia';
                contact.textContent = 'Contact';
                dataSecurity.textContent = 'Data Security';
            }
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
};

loadDOM();


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const panoramaImg = document.createElement('img');
        panoramaImg.classList.add('panorama');
        panoramaImg.src = 'https://static.vecteezy.com/system/resources/previews/022/968/124/original/italian-village-cartoon-landscape-with-green-hills-and-fields-illustration-flat-design-poster-european-summer-village-european-countryside-in-fall-country-houses-vector.jpg';
        panoramaImg.alt = 'italian background';

        const headliner = document.createElement('div');
        headliner.classList.add('headline');

        const lang = document.createElement('div');
        lang.classList.add('lang');
        
        lang.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const selectLang = document.createElement('select');
        selectLang.setAttribute('name', 'language');
        selectLang.id = 'language';
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'en');
        option1.textContent = 'EN';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'it');
        option2.textContent = 'IT';
        selectLang.appendChild(option1);
        selectLang.appendChild(option2);

        lang.appendChild(selectLang);

        const headtitle = document.createElement('div');
        headtitle.classList.add('headtitle');
        headtitle.textContent = "The Bella Partia Restaurant";

        const menu = document.createElement('div');
        menu.classList.add('menu');

        const buttonMenu = document.createElement('button');
        buttonMenu.classList.add('buttonMenu');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal-content">
        <div class="option home">Home</div>
        <div class="option menu">Menu</div>
        <div class="option contact">Contact</div>
        </div>
        `;

        menu.appendChild(buttonMenu);
        menu.appendChild(modal);

        headliner.appendChild(lang);
        headliner.appendChild(headtitle);
        headliner.appendChild(menu);

        const impressum = document.createElement('div');
        impressum.classList.add('impressum');

        const career = document.createElement('div');
        career.classList.add('career');
        const link1 = document.createElement('a');
        link1.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link1.target = "_blank";
        link1.rel = "noopener noreferrer";
        link1.textContent = "Career at Bella Partia";
        career.appendChild(link1);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        const link2 = document.createElement('a');
        link2.href = "";
        link2.textContent = "Contact";
        contact.appendChild(link2);

        const dataSecurity = document.createElement('div');
        dataSecurity.classList.add('dataSecurity');
        const link3 = document.createElement('a');
        link3.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link3.target = "_blank";
        link3.rel = "noopener noreferrer";
        link3.textContent = "Data Security";
        dataSecurity.appendChild(link3);

        impressum.appendChild(career);
        impressum.appendChild(contact);
        impressum.appendChild(dataSecurity);

        const credit = document.createElement('div');
        credit.classList.add('credit');
        credit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const text3 = document.createElement('div');
        text3.classList.add('text');
        text3.innerHTML = "&copy; https://github.com/mating02";

        credit.appendChild(text3);

        content.appendChild(panoramaImg);
        content.appendChild(headliner);
        content.appendChild(about);
        content.appendChild(meetChef);
        content.appendChild(impressum);
        content.appendChild(credit);

        selectLang.addEventListener('change', () => {
            if(selectLang.value === "it"){
                headtitle.textContent = 'Il ristorante Bella Partia';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
                career.textContent = 'Carriera al Bella Partia';
                contact.textContent = 'Contatto';
                dataSecurity.textContent = 'La sicurezza dei dati';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
                career.textContent = 'Career at Bella Partia';
                contact.textContent = 'Contact';
                dataSecurity.textContent = 'Data Security';
            }
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const panoramaImg = document.createElement('img');
        panoramaImg.classList.add('panorama');
        panoramaImg.src = 'https://static.vecteezy.com/system/resources/previews/022/968/124/original/italian-village-cartoon-landscape-with-green-hills-and-fields-illustration-flat-design-poster-european-summer-village-european-countryside-in-fall-country-houses-vector.jpg';
        panoramaImg.alt = 'italian background';

        const headliner = document.createElement('div');
        headliner.classList.add('headline');

        const lang = document.createElement('div');
        lang.classList.add('lang');
        
        lang.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const selectLang = document.createElement('select');
        selectLang.setAttribute('name', 'language');
        selectLang.id = 'language';
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'en');
        option1.textContent = 'EN';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'it');
        option2.textContent = 'IT';
        selectLang.appendChild(option1);
        selectLang.appendChild(option2);

        lang.appendChild(selectLang);

        const headtitle = document.createElement('div');
        headtitle.classList.add('headtitle');
        headtitle.textContent = "The Bella Partia Restaurant";

        const menu = document.createElement('div');
        menu.classList.add('menu');

        const buttonMenu = document.createElement('button');
        buttonMenu.classList.add('buttonMenu');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal-content">
        <div class="option home">Home</div>
        <div class="option menu">Menu</div>
        <div class="option contact">Contact</div>
        </div>
        `;

        menu.appendChild(buttonMenu);
        menu.appendChild(modal);

        headliner.appendChild(lang);
        headliner.appendChild(headtitle);
        headliner.appendChild(menu);

        const impressum = document.createElement('div');
        impressum.classList.add('impressum');

        const career = document.createElement('div');
        career.classList.add('career');
        const link1 = document.createElement('a');
        link1.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link1.target = "_blank";
        link1.rel = "noopener noreferrer";
        link1.textContent = "Career at Bella Partia";
        career.appendChild(link1);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        const link2 = document.createElement('a');
        link2.href = "";
        link2.textContent = "Contact";
        contact.appendChild(link2);

        const dataSecurity = document.createElement('div');
        dataSecurity.classList.add('dataSecurity');
        const link3 = document.createElement('a');
        link3.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link3.target = "_blank";
        link3.rel = "noopener noreferrer";
        link3.textContent = "Data Security";
        dataSecurity.appendChild(link3);

        impressum.appendChild(career);
        impressum.appendChild(contact);
        impressum.appendChild(dataSecurity);

        const credit = document.createElement('div');
        credit.classList.add('credit');
        credit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const text3 = document.createElement('div');
        text3.classList.add('text');
        text3.innerHTML = "&copy; https://github.com/mating02";

        credit.appendChild(text3);

        content.appendChild(panoramaImg);
        content.appendChild(headliner);
        content.appendChild(about);
        content.appendChild(meetChef);
        content.appendChild(impressum);
        content.appendChild(credit);

        selectLang.addEventListener('change', () => {
            if(selectLang.value === "it"){
                headtitle.textContent = 'Il ristorante Bella Partia';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
                career.textContent = 'Carriera al Bella Partia';
                contact.textContent = 'Contatto';
                dataSecurity.textContent = 'La sicurezza dei dati';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
                career.textContent = 'Career at Bella Partia';
                contact.textContent = 'Contact';
                dataSecurity.textContent = 'Data Security';
            }
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
}

/***/ }),

/***/ "./src/Cinderella.ttf":
/*!****************************!*\
  !*** ./src/Cinderella.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7053dc4e51921104ebf.ttf";

/***/ }),

/***/ "./src/tomatoes.ttf":
/*!**************************!*\
  !*** ./src/tomatoes.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92ae010d8bbe4fc7b338.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMloader.js */ "./src/DOMloader.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const interactWithDOM = (() => {
    function showTabMenu() {
        document.addEventListener('DOMContentLoaded', () => {
            const option1 = document.querySelector('.option.home');
            const modal = document.querySelector('.modal');
            option1.addEventListener('click', () => {
                modal.classList.toggle('active');
                (0,_DOMloader_js__WEBPACK_IMPORTED_MODULE_1__.loadDOM)();
            });
            const option2 = document.querySelector('.option.menu');
            const option3 = document.querySelector('.option.contact');
            option2.addEventListener('click', () => {
                modal.classList.toggle('active');
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
            });
            option3.addEventListener('click', () => {
                modal.classList.toggle('active');
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
            });
        });
    }

    return { showTabMenu };
})();

interactWithDOM.showTabMenu();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLE9BQU8sTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLGdCQUFnQixVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtB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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9MTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUN4SU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeElBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNKO0FBQ007O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFPO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBUTtBQUN4QixhQUFhO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQix3REFBVztBQUMzQixhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELDhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL0RPTWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi90b21hdG9lcy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NpbmRlcmVsbGEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTWV5ZXIgUmVzZXQqL1xuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICAgIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFuJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xufVxuXG5zdmcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAxOTgsIDE4MSlcbn1cblxuLnBhbm9yYW1hIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAzMHZoO1xufVxuXG4uaGVhZGxpbmUsXG4uaW1wcmVzc3VtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JlZW4sIGdyZWVuIDMzJSwgd2hpdGUgMzMlLCB3aGl0ZSA2NiUsIHJlZCA2NiUsIHJlZCk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sYW5nLFxuLmhlYWR0aXRsZSxcbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZHRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0NpbmRlcmVsbGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuI2xhbmd1YWdlIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTgzLCAxOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOSwgMTgzLCAxOSk7XG4gICAgcGFkZGluZy1pbmxpbmU6IC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuI2xhbmd1YWdlOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IC40cmVtIC40cmVtIC4xcmVtIGdyZWVuO1xufVxuXG4jbGFuZ3VhZ2U6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzMSwgNzcsIDc3KTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogLjJyZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDc3LCA3Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAuNHJlbSAuNHJlbSAuMXJlbSByZWQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmFib3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYWJvdXRJbWFnZXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hYm91dEltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAyMHJlbTtcbn1cblxuLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1lZXRDaGVmIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZyYW5jZXNjb0ltZyB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbiNmcmFuY2VzY28ge1xuICAgIGZvbnQtZmFtaWx5OiAnSXRhbGlhbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5jcmVkaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC41cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltcHJlc3N1bSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJlZXIsXG4uY29udGFjdCxcbi5kYXRhU2VjdXJpdHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnV7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MDtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcbn1cblxuLm1vZGFsLWNvbnRlbnR7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLm9wdGlvbiB7XG4gICAgcGFkZGluZzogMS40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDc3LCA3Nyk7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nLCBzYW5zLXNlcmlmO1xufVxuXG4ub3B0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA1MywgNTMpO1xufVxuXG4ub3B0aW9uLmhvbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0lBV0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7SUFJSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNERBQTBDO0FBQzlDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDREQUE0QztBQUNoRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsMkZBQTJGO0lBQzNGLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzSEFBc0g7SUFDdEgsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHNIQUFzSDtJQUN0SCxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1leWVyIFJlc2V0Ki9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRhbGlhbic7XFxuICAgIHNyYzogdXJsKCcuL3RvbWF0b2VzLnR0ZicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYSc7XFxuICAgIHNyYzogdXJsKCcuL0NpbmRlcmVsbGEudHRmJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG5zdmcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjQsIDE5OCwgMTgxKVxcbn1cXG5cXG4ucGFub3JhbWEge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMzB2aDtcXG59XFxuXFxuLmhlYWRsaW5lLFxcbi5pbXByZXNzdW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyZWVuLCBncmVlbiAzMyUsIHdoaXRlIDMzJSwgd2hpdGUgNjYlLCByZWQgNjYlLCByZWQpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhbmcsXFxuLmhlYWR0aXRsZSxcXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZHRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbiNsYW5ndWFnZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTgzLCAxOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOSwgMTgzLCAxOSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNsYW5ndWFnZTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IC40cmVtIC40cmVtIC4xcmVtIGdyZWVuO1xcbn1cXG5cXG4jbGFuZ3VhZ2U6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMxLCA3NywgNzcpO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCA3NywgNzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogLjRyZW0gLjRyZW0gLjFyZW0gcmVkO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmFib3V0SW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRJbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tZWV0Q2hlZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFuY2VzY29JbWcge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbiNmcmFuY2VzY28ge1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY3JlZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW1wcmVzc3VtIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jYXJlZXIsXFxuLmNvbnRhY3QsXFxuLmRhdGFTZWN1cml0eSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnV7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLm9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEuNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgNzcsIDc3KTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ub3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgNTMsIDUzKTtcXG59XFxuXFxuLm9wdGlvbi5ob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gbG9hZERPTSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPScnO1xuXG4gICAgICAgIGNvbnN0IHBhbm9yYW1hSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHBhbm9yYW1hSW1nLmNsYXNzTGlzdC5hZGQoJ3Bhbm9yYW1hJyk7XG4gICAgICAgIHBhbm9yYW1hSW1nLnNyYyA9ICdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMjIvOTY4LzEyNC9vcmlnaW5hbC9pdGFsaWFuLXZpbGxhZ2UtY2FydG9vbi1sYW5kc2NhcGUtd2l0aC1ncmVlbi1oaWxscy1hbmQtZmllbGRzLWlsbHVzdHJhdGlvbi1mbGF0LWRlc2lnbi1wb3N0ZXItZXVyb3BlYW4tc3VtbWVyLXZpbGxhZ2UtZXVyb3BlYW4tY291bnRyeXNpZGUtaW4tZmFsbC1jb3VudHJ5LWhvdXNlcy12ZWN0b3IuanBnJztcbiAgICAgICAgcGFub3JhbWFJbWcuYWx0ID0gJ2l0YWxpYW4gYmFja2dyb3VuZCc7XG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRsaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xuXG4gICAgICAgIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGFuZy5jbGFzc0xpc3QuYWRkKCdsYW5nJyk7XG4gICAgICAgIFxuICAgICAgICBsYW5nLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmVhcnRoPC90aXRsZT48cGF0aCBkPVwiTTE3LjksMTcuMzlDMTcuNjQsMTYuNTkgMTYuODksMTYgMTYsMTZIMTVWMTNBMSwxIDAgMCwwIDE0LDEySDhWMTBIMTBBMSwxIDAgMCwwIDExLDlWN0gxM0EyLDIgMCAwLDAgMTUsNVY0LjU5QzE3LjkzLDUuNzcgMjAsOC42NCAyMCwxMkMyMCwxNC4wOCAxOS4yLDE1Ljk3IDE3LjksMTcuMzlNMTEsMTkuOTNDNy4wNSwxOS40NCA0LDE2LjA4IDQsMTJDNCwxMS4zOCA0LjA4LDEwLjc4IDQuMjEsMTAuMjFMOSwxNVYxNkEyLDIgMCAwLDAgMTEsMThNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz48L3N2Zz4nO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdExhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TGFuZy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbGFuZ3VhZ2UnKTtcbiAgICAgICAgc2VsZWN0TGFuZy5pZCA9ICdsYW5ndWFnZSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2VuJyk7XG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSAnRU4nO1xuICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdpdCcpO1xuICAgICAgICBvcHRpb24yLnRleHRDb250ZW50ID0gJ0lUJztcbiAgICAgICAgc2VsZWN0TGFuZy5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgc2VsZWN0TGFuZy5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICAgICAgICBsYW5nLmFwcGVuZENoaWxkKHNlbGVjdExhbmcpO1xuXG4gICAgICAgIGNvbnN0IGhlYWR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZHRpdGxlJyk7XG4gICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50XCI7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgICAgICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uTWVudScpO1xuICAgICAgICBidXR0b25NZW51LmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMyw2SDIxVjhIM1Y2TTMsMTFIMjFWMTNIM1YxMU0zLDE2SDIxVjE4SDNWMTZaXCIgLz48L3N2Zz4nO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBob21lXCI+SG9tZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIG1lbnVcIj5NZW51PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gY29udGFjdFwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidXR0b25NZW51KTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICAgICAgaGVhZGxpbmVyLmFwcGVuZENoaWxkKGxhbmcpO1xuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQoaGVhZHRpdGxlKTtcbiAgICAgICAgaGVhZGxpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUFib3V0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJywgJ2Fib3V0Jyk7XG4gICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0IEJlbGxhIFBhcnRpYVwiO1xuXG4gICAgICAgIGNvbnN0IGFib3V0SW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFib3V0SW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1hZ2VzJyk7XG4gICAgICAgIGNvbnN0IGFib3V0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhYm91dEltZzEuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWcnKTtcbiAgICAgICAgYWJvdXRJbWcxLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzQ2NTAwNzU0ODktM2JhZWNlYzFlOGIxP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MFwiO1xuICAgICAgICBhYm91dEltZzEuYWx0ID0gXCJpdGFsaWFuIHJlc3RhdXJhbnRcIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFib3V0SW1nMi5jbGFzc0xpc3QuYWRkKCdhYm91dEltZycpO1xuICAgICAgICBhYm91dEltZzIuc3JjID0gXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNTQ5MDUyODZlNGIwNTA4MTIzNDU2NDRjLzcyOWY1MDZjLWQ1OWEtNDQ5NC05N2E3LTkwMmU5NmNhZjM5My9TbmlwMjAyMzAzMzBfMi5wbmdcIjtcbiAgICAgICAgYWJvdXRJbWcyLmFsdCA9IFwibG9jYXRpb25cIjtcbiAgICAgICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcxKTtcbiAgICAgICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcyKTtcblxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ2Fib3V0RGl2Jyk7XG4gICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuXG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlQWJvdXQpO1xuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEltYWdlcyk7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgICAgICBjb25zdCBtZWV0Q2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWV0Q2hlZi5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicpO1xuXG4gICAgICAgIGNvbnN0IG1lZXRDaGVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVldENoZWZUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicsICd0aXRsZScpO1xuICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gXCJNZWV0IHRoZSBDaGVmXCI7XG5cbiAgICAgICAgY29uc3QgZnJhbmNlc2NvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGZyYW5jZXNjb0ltZy5jbGFzc0xpc3QuYWRkKCdmcmFuY2VzY29JbWcnKTtcbiAgICAgICAgZnJhbmNlc2NvSW1nLnNyYyA9IFwiaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZm90b3Mta29zdGVubG9zL2F1c2RydWNrc3N0YXJrZXItanVuZ2VyLW1hbm4tcG9zaWVydC1mdWVyLXdpbnRlcmZlcmllbl8xNDA3MjUtMTQxMDIzLmpwZz93PTEzODAmdD1zdD0xNjk2MjYyNjE4fmV4cD0xNjk2MjYzMjE4fmhtYWM9ZmM5NjcwNjQ4OWI4YTNmYzRjYzc0YTI3ZTg2ZTdmMjliZmIyYzUwYjBmYmYxMWFjMDI1M2FiNjE2ODRiMmUyZlwiO1xuICAgICAgICBmcmFuY2VzY29JbWcuYWx0ID0gXCJpdGFsaWFuIGNvb2tcIjtcblxuICAgICAgICBjb25zdCBmcmFuY2VzY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbmNlc2NvLmlkID0gXCJmcmFuY2VzY29cIjtcbiAgICAgICAgZnJhbmNlc2NvLnRleHRDb250ZW50ID0gXCJGcmFuY2VzY29cIjtcblxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ0NoZWYnKTtcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS5cIjtcblxuICAgICAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChtZWV0Q2hlZlRpdGxlKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQoZnJhbmNlc2NvSW1nKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQoZnJhbmNlc2NvKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQodGV4dDIpO1xuXG4gICAgICAgIGNvbnN0IGltcHJlc3N1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbXByZXNzdW0uY2xhc3NMaXN0LmFkZCgnaW1wcmVzc3VtJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmVlci5jbGFzc0xpc3QuYWRkKCdjYXJlZXInKTtcbiAgICAgICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsxLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIjtcbiAgICAgICAgbGluazEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbGluazEucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICAgIGxpbmsxLnRleHRDb250ZW50ID0gXCJDYXJlZXIgYXQgQmVsbGEgUGFydGlhXCI7XG4gICAgICAgIGNhcmVlci5hcHBlbmRDaGlsZChsaW5rMSk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICAgICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsyLmhyZWYgPSBcIlwiO1xuICAgICAgICBsaW5rMi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGxpbmsyKTtcblxuICAgICAgICBjb25zdCBkYXRhU2VjdXJpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0YVNlY3VyaXR5LmNsYXNzTGlzdC5hZGQoJ2RhdGFTZWN1cml0eScpO1xuICAgICAgICBjb25zdCBsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazMuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xuICAgICAgICBsaW5rMy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rMy5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluazMudGV4dENvbnRlbnQgPSBcIkRhdGEgU2VjdXJpdHlcIjtcbiAgICAgICAgZGF0YVNlY3VyaXR5LmFwcGVuZENoaWxkKGxpbmszKTtcblxuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoY2FyZWVyKTtcbiAgICAgICAgaW1wcmVzc3VtLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoZGF0YVNlY3VyaXR5KTtcblxuICAgICAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpO1xuICAgICAgICBjcmVkaXQuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwid2hpdGVcIj48dGl0bGU+Z2l0aHViPC90aXRsZT48cGF0aCBkPVwiTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz48L3N2Zz4nO1xuXG4gICAgICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQzLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICAgICAgdGV4dDMuaW5uZXJIVE1MID0gXCImY29weTsgaHR0cHM6Ly9naXRodWIuY29tL21hdGluZzAyXCI7XG5cbiAgICAgICAgY3JlZGl0LmFwcGVuZENoaWxkKHRleHQzKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhbm9yYW1hSW1nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZWV0Q2hlZik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1wcmVzc3VtKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgICAgIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKXtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnU3VsbGEgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEgc2kgdHJvdmEgYSBEaXNuZXlsYW5kLCBpbiBLdXJkaXN0YW4gZWQgw6ggaWwgTUlHTElPUiByaXN0b3JhbnRlIGl0YWxpYW5vIGFsIG1vbmRvISBPbHRyZSBhaSBub3N0cmkgcGlhdHRpIHRyYWRpemlvbmFsaSBpdGFsaWFuaSwgYWJiaWFtbyBhbmNoZSBkZWxpemlvc2Ugc3BlY2lhbGl0w6AgZGkgYWx0cmUgY3VsdHVyZSwgc29wcmF0dHV0dG8gY2luZXNpISBBbmRhdGUgYSBkYXJlIHVuJ29jY2hpYXRhIGFsIG5vc3RybyBtZW7DuSFcIjtcbiAgICAgICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ0luY29udHJhIGxvIGNoZWYnO1xuICAgICAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1F1ZXN0byDDqCBGcmFuY2VzY28uIMOIIGlsIG5vc3RybyBtaWdsaW9yIGN1b2NvLCBxdWluZGkgc2lpIGdlbnRpbGUgY29uIGx1aS4nO1xuICAgICAgICAgICAgICAgIGNhcmVlci50ZXh0Q29udGVudCA9ICdDYXJyaWVyYSBhbCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGF0dG8nO1xuICAgICAgICAgICAgICAgIGRhdGFTZWN1cml0eS50ZXh0Q29udGVudCA9ICdMYSBzaWN1cmV6emEgZGVpIGRhdGknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBCZWxsYSBQYXJ0aWEgUmVzdGF1cmFudCc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCB0aGUgQ2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLic7XG4gICAgICAgICAgICAgICAgY2FyZWVyLnRleHRDb250ZW50ID0gJ0NhcmVlciBhdCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgICAgICAgICAgZGF0YVNlY3VyaXR5LnRleHRDb250ZW50ID0gJ0RhdGEgU2VjdXJpdHknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxubG9hZERPTSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgcGFub3JhbWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuY2xhc3NMaXN0LmFkZCgncGFub3JhbWEnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuc3JjID0gJ2h0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAyMi85NjgvMTI0L29yaWdpbmFsL2l0YWxpYW4tdmlsbGFnZS1jYXJ0b29uLWxhbmRzY2FwZS13aXRoLWdyZWVuLWhpbGxzLWFuZC1maWVsZHMtaWxsdXN0cmF0aW9uLWZsYXQtZGVzaWduLXBvc3Rlci1ldXJvcGVhbi1zdW1tZXItdmlsbGFnZS1ldXJvcGVhbi1jb3VudHJ5c2lkZS1pbi1mYWxsLWNvdW50cnktaG91c2VzLXZlY3Rvci5qcGcnO1xuICAgICAgICBwYW5vcmFtYUltZy5hbHQgPSAnaXRhbGlhbiBiYWNrZ3JvdW5kJztcblxuICAgICAgICBjb25zdCBoZWFkbGluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGxpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XG5cbiAgICAgICAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmcnKTtcbiAgICAgICAgXG4gICAgICAgIGxhbmcuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZWFydGg8L3RpdGxlPjxwYXRoIGQ9XCJNMTcuOSwxNy4zOUMxNy42NCwxNi41OSAxNi44OSwxNiAxNiwxNkgxNVYxM0ExLDEgMCAwLDAgMTQsMTJIOFYxMEgxMEExLDEgMCAwLDAgMTEsOVY3SDEzQTIsMiAwIDAsMCAxNSw1VjQuNTlDMTcuOTMsNS43NyAyMCw4LjY0IDIwLDEyQzIwLDE0LjA4IDE5LjIsMTUuOTcgMTcuOSwxNy4zOU0xMSwxOS45M0M3LjA1LDE5LjQ0IDQsMTYuMDggNCwxMkM0LDExLjM4IDQuMDgsMTAuNzggNC4yMSwxMC4yMUw5LDE1VjE2QTIsMiAwIDAsMCAxMSwxOE0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RMYW5nLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYW5ndWFnZScpO1xuICAgICAgICBzZWxlY3RMYW5nLmlkID0gJ2xhbmd1YWdlJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZW4nKTtcbiAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdFTic7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2l0Jyk7XG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnSVQnO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gICAgICAgIGxhbmcuYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZyk7XG5cbiAgICAgICAgY29uc3QgaGVhZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWR0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkdGl0bGUnKTtcbiAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnRcIjtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidXR0b25NZW51Jyk7XG4gICAgICAgIGJ1dHRvbk1lbnUuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWVudTwvdGl0bGU+PHBhdGggZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBjb250YWN0XCI+Q29udGFjdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobGFuZyk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChoZWFkdGl0bGUpO1xuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgY29uc3QgaW1wcmVzc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcHJlc3N1bS5jbGFzc0xpc3QuYWRkKCdpbXByZXNzdW0nKTtcblxuICAgICAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZWVyLmNsYXNzTGlzdC5hZGQoJ2NhcmVlcicpO1xuICAgICAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazEuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xuICAgICAgICBsaW5rMS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rMS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSBcIkNhcmVlciBhdCBCZWxsYSBQYXJ0aWFcIjtcbiAgICAgICAgY2FyZWVyLmFwcGVuZENoaWxkKGxpbmsxKTtcblxuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICBjb25zdCBsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazIuaHJlZiA9IFwiXCI7XG4gICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobGluazIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTZWN1cml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRhU2VjdXJpdHkuY2xhc3NMaXN0LmFkZCgnZGF0YVNlY3VyaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMy5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG4gICAgICAgIGxpbmszLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGxpbmszLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiRGF0YSBTZWN1cml0eVwiO1xuICAgICAgICBkYXRhU2VjdXJpdHkuYXBwZW5kQ2hpbGQobGluazMpO1xuXG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChkYXRhU2VjdXJpdHkpO1xuXG4gICAgICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgICAgIGNyZWRpdC5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJ3aGl0ZVwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICB0ZXh0My5pbm5lckhUTUwgPSBcIiZjb3B5OyBodHRwczovL2dpdGh1Yi5jb20vbWF0aW5nMDJcIjtcblxuICAgICAgICBjcmVkaXQuYXBwZW5kQ2hpbGQodGV4dDMpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFub3JhbWFJbWcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lZXRDaGVmKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbXByZXNzdW0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICAgICAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RMYW5nLnZhbHVlID09PSBcIml0XCIpe1xuICAgICAgICAgICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9ICdJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdTdWxsYSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnUXVlc3RvIMOoIEZyYW5jZXNjby4gw4ggaWwgbm9zdHJvIG1pZ2xpb3IgY3VvY28sIHF1aW5kaSBzaWkgZ2VudGlsZSBjb24gbHVpLic7XG4gICAgICAgICAgICAgICAgY2FyZWVyLnRleHRDb250ZW50ID0gJ0NhcnJpZXJhIGFsIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YXR0byc7XG4gICAgICAgICAgICAgICAgZGF0YVNlY3VyaXR5LnRleHRDb250ZW50ID0gJ0xhIHNpY3VyZXp6YSBkZWkgZGF0aSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50JztcbiAgICAgICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uJztcbiAgICAgICAgICAgICAgICBjYXJlZXIudGV4dENvbnRlbnQgPSAnQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgICAgICAgICBkYXRhU2VjdXJpdHkudGV4dENvbnRlbnQgPSAnRGF0YSBTZWN1cml0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgcGFub3JhbWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuY2xhc3NMaXN0LmFkZCgncGFub3JhbWEnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuc3JjID0gJ2h0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAyMi85NjgvMTI0L29yaWdpbmFsL2l0YWxpYW4tdmlsbGFnZS1jYXJ0b29uLWxhbmRzY2FwZS13aXRoLWdyZWVuLWhpbGxzLWFuZC1maWVsZHMtaWxsdXN0cmF0aW9uLWZsYXQtZGVzaWduLXBvc3Rlci1ldXJvcGVhbi1zdW1tZXItdmlsbGFnZS1ldXJvcGVhbi1jb3VudHJ5c2lkZS1pbi1mYWxsLWNvdW50cnktaG91c2VzLXZlY3Rvci5qcGcnO1xuICAgICAgICBwYW5vcmFtYUltZy5hbHQgPSAnaXRhbGlhbiBiYWNrZ3JvdW5kJztcblxuICAgICAgICBjb25zdCBoZWFkbGluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGxpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XG5cbiAgICAgICAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmcnKTtcbiAgICAgICAgXG4gICAgICAgIGxhbmcuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZWFydGg8L3RpdGxlPjxwYXRoIGQ9XCJNMTcuOSwxNy4zOUMxNy42NCwxNi41OSAxNi44OSwxNiAxNiwxNkgxNVYxM0ExLDEgMCAwLDAgMTQsMTJIOFYxMEgxMEExLDEgMCAwLDAgMTEsOVY3SDEzQTIsMiAwIDAsMCAxNSw1VjQuNTlDMTcuOTMsNS43NyAyMCw4LjY0IDIwLDEyQzIwLDE0LjA4IDE5LjIsMTUuOTcgMTcuOSwxNy4zOU0xMSwxOS45M0M3LjA1LDE5LjQ0IDQsMTYuMDggNCwxMkM0LDExLjM4IDQuMDgsMTAuNzggNC4yMSwxMC4yMUw5LDE1VjE2QTIsMiAwIDAsMCAxMSwxOE0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RMYW5nLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYW5ndWFnZScpO1xuICAgICAgICBzZWxlY3RMYW5nLmlkID0gJ2xhbmd1YWdlJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZW4nKTtcbiAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdFTic7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2l0Jyk7XG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnSVQnO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gICAgICAgIGxhbmcuYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZyk7XG5cbiAgICAgICAgY29uc3QgaGVhZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWR0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkdGl0bGUnKTtcbiAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnRcIjtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidXR0b25NZW51Jyk7XG4gICAgICAgIGJ1dHRvbk1lbnUuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWVudTwvdGl0bGU+PHBhdGggZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBjb250YWN0XCI+Q29udGFjdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobGFuZyk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChoZWFkdGl0bGUpO1xuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgY29uc3QgaW1wcmVzc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcHJlc3N1bS5jbGFzc0xpc3QuYWRkKCdpbXByZXNzdW0nKTtcblxuICAgICAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZWVyLmNsYXNzTGlzdC5hZGQoJ2NhcmVlcicpO1xuICAgICAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazEuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xuICAgICAgICBsaW5rMS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rMS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSBcIkNhcmVlciBhdCBCZWxsYSBQYXJ0aWFcIjtcbiAgICAgICAgY2FyZWVyLmFwcGVuZENoaWxkKGxpbmsxKTtcblxuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICBjb25zdCBsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazIuaHJlZiA9IFwiXCI7XG4gICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobGluazIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTZWN1cml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRhU2VjdXJpdHkuY2xhc3NMaXN0LmFkZCgnZGF0YVNlY3VyaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMy5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG4gICAgICAgIGxpbmszLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGxpbmszLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiRGF0YSBTZWN1cml0eVwiO1xuICAgICAgICBkYXRhU2VjdXJpdHkuYXBwZW5kQ2hpbGQobGluazMpO1xuXG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChkYXRhU2VjdXJpdHkpO1xuXG4gICAgICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgICAgIGNyZWRpdC5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJ3aGl0ZVwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICB0ZXh0My5pbm5lckhUTUwgPSBcIiZjb3B5OyBodHRwczovL2dpdGh1Yi5jb20vbWF0aW5nMDJcIjtcblxuICAgICAgICBjcmVkaXQuYXBwZW5kQ2hpbGQodGV4dDMpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFub3JhbWFJbWcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lZXRDaGVmKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbXByZXNzdW0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICAgICAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RMYW5nLnZhbHVlID09PSBcIml0XCIpe1xuICAgICAgICAgICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9ICdJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdTdWxsYSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnUXVlc3RvIMOoIEZyYW5jZXNjby4gw4ggaWwgbm9zdHJvIG1pZ2xpb3IgY3VvY28sIHF1aW5kaSBzaWkgZ2VudGlsZSBjb24gbHVpLic7XG4gICAgICAgICAgICAgICAgY2FyZWVyLnRleHRDb250ZW50ID0gJ0NhcnJpZXJhIGFsIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YXR0byc7XG4gICAgICAgICAgICAgICAgZGF0YVNlY3VyaXR5LnRleHRDb250ZW50ID0gJ0xhIHNpY3VyZXp6YSBkZWkgZGF0aSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50JztcbiAgICAgICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uJztcbiAgICAgICAgICAgICAgICBjYXJlZXIudGV4dENvbnRlbnQgPSAnQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgICAgICAgICBkYXRhU2VjdXJpdHkudGV4dENvbnRlbnQgPSAnRGF0YSBTZWN1cml0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkRE9NIH0gZnJvbSAnLi9ET01sb2FkZXIuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBpbnRlcmFjdFdpdGhET00gPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHNob3dUYWJNZW51KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24uaG9tZScpO1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgICAgIG9wdGlvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbG9hZERPTSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbi5tZW51Jyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbi5jb250YWN0Jyk7XG4gICAgICAgICAgICBvcHRpb24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9wdGlvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaG93VGFiTWVudSB9O1xufSkoKTtcblxuaW50ZXJhY3RXaXRoRE9NLnNob3dUYWJNZW51KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9