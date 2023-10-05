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

body {
    background-color: rgb(164, 198, 181);
}

#content {
    display: grid;
    grid-auto-flow: row;
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

.menu {
    position: relative;
}

.modal {
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    z-index: 1;
    opacity: 0;
    transition: opacity 3s;
}

.modal-content {
    transition: opacity 3s;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
}

.option {
    padding: 1.4rem;
    background-color: rgb(231, 77, 77);
    cursor: pointer;
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
}

.menuHeadline {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    font-family: 'Cinderella', sans-serif;
    padding: 1rem;
    margin-top: 1rem;
    ;
    color: whitesmoke;
}

.menuGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 100vw;
    padding: 1rem;
}

.menuDish {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-size: 1.2rem;
    font-style: italic;
    color: whitesmoke;
    font-family: 'Cinderella', sans-serif;
    border: 4px solid transparent;
    box-shadow:
        4px 4px 0px 0px #009246,
        /* Green */
        8px 8px 0px 0px #ffffff,
        /* White */
        12px 12px 0px 0px #ff0000;
    border-radius: .5rem;
    margin: .5rem;
    padding: .5rem;
}

.menuTitle,
.ronaSpecialTitle {
    font-weight: 600;
    font-family: 'Italian', sans-serif;
    font-size: 1.5rem;
    text-decoration: underline;
}

.menuImage {
    width: 100%;
    height: 50%;
    max-width: 30rem;
    max-height: 30rem;
    border: 2px solid gold;
    border-radius: .5rem;
}

.ronaSpecial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: whitesmoke;
    font-family: 'Cinderella', sans-serif;
    font-size: 1.2rem;
    font-style: italic;
}

.GoldenBorder {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-image: url('https://static.vecteezy.com/system/resources/previews/007/120/248/original/vintage-floral-ornament-border-hand-drawn-decorative-element-illustration-of-gold-floral-frame-with-white-background-design-template-for-page-decoration-cards-wedding-banner-free-vector.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 24rem;
    min-height: 40rem;
    width: 60vw;
    max-height: 54rem;
    margin-bottom: 1rem;
    border: 4px solid black;
    border-radius: 1rem;
}

.ronaSpecialImg {
    min-width: 18rem;
    min-height: 28rem;
    width: 45vw;
    max-height: 40rem;
    border: 2px solid goldenrod;
    border-radius: .5rem;
    cursor: pointer;
}

.ronaSpecialImg:hover {
    transform: scale(1.05);
}

.ronaSpecialTitle {
    text-decoration: wavy;
    color: whitesmoke;
}

.contactHeadline {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    font-family: 'Cinderella', sans-serif;
    padding: 1rem;
    margin-top: 1rem;
    ;
}

.contactText {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 1rem;
}

.contactLink {
    cursor: pointer;
}

.fade {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.fade.active {
    opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,eAAe;AACf;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,4DAA0C;AAC9C;;AAEA;IACI,yBAAyB;IACzB,4DAA4C;AAChD;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,2FAA2F;IAC3F,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,cAAc;IACd,kCAAkC;IAClC,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;;AAGA;IACI,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,2DAA2D;IAC3D,cAAc;IACd,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,sHAAsH;IACtH,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,cAAc;IACd,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,sHAAsH;IACtH,YAAY;AAChB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,+CAA+C;IAC/C,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,qCAAqC;IACrC,aAAa;IACb,gBAAgB;;IAEhB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;IACd,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,qCAAqC;IACrC,6BAA6B;IAC7B;;;;;iCAK6B;IAC7B,oBAAoB;IACpB,aAAa;IACb,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;IAChB,kCAAkC;IAClC,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,iBAAiB;IACjB,qCAAqC;IACrC,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,iSAAiS;IACjS,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,2BAA2B;IAC3B,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,qCAAqC;IACrC,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,sHAAsH;IACtH,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,kCAAkC;AACtC;;AAEA;IACI,UAAU;AACd","sourcesContent":["/* Meyer Reset*/\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n@font-face {\n    font-family: 'Italian';\n    src: url('./tomatoes.ttf') format('woff2');\n}\n\n@font-face {\n    font-family: 'Cinderella';\n    src: url('./Cinderella.ttf') format('woff2');\n}\n\nsvg {\n    height: 2rem;\n    width: 2rem;\n}\n\nbody {\n    background-color: rgb(164, 198, 181);\n}\n\n#content {\n    display: grid;\n    grid-auto-flow: row;\n}\n\n.panorama {\n    width: 100vw;\n    height: 30vh;\n}\n\n.headline,\n.impressum {\n    display: grid;\n    background: linear-gradient(to right, green, green 33%, white 33%, white 66%, red 66%, red);\n    padding: 1rem;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n\n.lang,\n.headtitle,\n.menu {\n    display: flex;\n    justify-content: center;\n}\n\n.headtitle {\n    font-family: 'Cinderella', sans-serif;\n    font-weight: 800;\n    font-size: 1.5rem;\n    line-height: 1.2;\n}\n\n#language {\n    appearance: none;\n    background-color: rgb(19, 183, 19);\n    color: white;\n    padding: .2rem;\n    border: 2px solid rgb(19, 183, 19);\n    padding-inline: .8rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n}\n\n\n#language:focus {\n    border-color: white;\n    box-shadow: .4rem .4rem .1rem green;\n}\n\n#language:hover {\n    transform: scale(1.05);\n}\n\nbutton {\n    border: 2px solid rgb(231, 77, 77);\n    width: fit-content;\n    padding: .2rem;\n    padding-inline: 1rem;\n    cursor: pointer;\n    background-color: rgb(231, 77, 77);\n    border-radius: .3rem;\n}\n\nbutton:focus {\n    border-color: white;\n    box-shadow: .4rem .4rem .1rem red;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\n.about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\n.aboutImages {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    grid-gap: 1rem;\n    justify-items: center;\n    align-items: center;\n}\n\n.aboutImg {\n    width: 100%;\n    height: 80%;\n    max-width: 30rem;\n    max-height: 20rem;\n}\n\n.text {\n    text-align: center;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.title {\n    font-family: 'Cinderella', sans-serif;\n    font-weight: 800;\n    font-size: 2rem;\n    text-decoration: underline;\n}\n\n.meetChef {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.francescoImg {\n    width: 60vw;\n    height: 80%;\n}\n\n#francesco {\n    font-family: 'Italian', sans-serif;\n    font-weight: 800;\n    font-size: 1.5rem;\n    margin: 1rem;\n}\n\n.credit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n    padding: .5rem;\n    background-color: black;\n    color: white;\n}\n\n.impressum {\n    margin-top: 1rem;\n}\n\na {\n    text-decoration: underline;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: black;\n}\n\n.career,\n.contact,\n.dataSecurity {\n    text-align: center;\n}\n\n.menu {\n    position: relative;\n}\n\n.modal {\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 100%;\n    width: 100%;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);\n    border-radius: 1rem;\n    z-index: 1;\n    opacity: 0;\n    transition: opacity 3s;\n}\n\n.modal-content {\n    transition: opacity 3s;\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n}\n\n.option {\n    padding: 1.4rem;\n    background-color: rgb(231, 77, 77);\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 1.5rem;\n    font-family: 'Italian', sans-serif;\n}\n\n.option:hover {\n    background-color: rgb(218, 53, 53);\n}\n\n.option.home {\n    display: flex;\n    justify-content: center;\n}\n\n.modal.active {\n    display: block;\n    opacity: 1;\n}\n\n.menuHeadline {\n    font-size: 2rem;\n    font-weight: 700;\n    text-align: center;\n    font-family: 'Cinderella', sans-serif;\n    padding: 1rem;\n    margin-top: 1rem;\n    ;\n    color: whitesmoke;\n}\n\n.menuGrid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    grid-gap: 1rem;\n    max-width: 100vw;\n    padding: 1rem;\n}\n\n.menuDish {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: center;\n    font-size: 1.2rem;\n    font-style: italic;\n    color: whitesmoke;\n    font-family: 'Cinderella', sans-serif;\n    border: 4px solid transparent;\n    box-shadow:\n        4px 4px 0px 0px #009246,\n        /* Green */\n        8px 8px 0px 0px #ffffff,\n        /* White */\n        12px 12px 0px 0px #ff0000;\n    border-radius: .5rem;\n    margin: .5rem;\n    padding: .5rem;\n}\n\n.menuTitle,\n.ronaSpecialTitle {\n    font-weight: 600;\n    font-family: 'Italian', sans-serif;\n    font-size: 1.5rem;\n    text-decoration: underline;\n}\n\n.menuImage {\n    width: 100%;\n    height: 50%;\n    max-width: 30rem;\n    max-height: 30rem;\n    border: 2px solid gold;\n    border-radius: .5rem;\n}\n\n.ronaSpecial {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    color: whitesmoke;\n    font-family: 'Cinderella', sans-serif;\n    font-size: 1.2rem;\n    font-style: italic;\n}\n\n.GoldenBorder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    background-image: url('https://static.vecteezy.com/system/resources/previews/007/120/248/original/vintage-floral-ornament-border-hand-drawn-decorative-element-illustration-of-gold-floral-frame-with-white-background-design-template-for-page-decoration-cards-wedding-banner-free-vector.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    min-width: 24rem;\n    min-height: 40rem;\n    width: 60vw;\n    max-height: 54rem;\n    margin-bottom: 1rem;\n    border: 4px solid black;\n    border-radius: 1rem;\n}\n\n.ronaSpecialImg {\n    min-width: 18rem;\n    min-height: 28rem;\n    width: 45vw;\n    max-height: 40rem;\n    border: 2px solid goldenrod;\n    border-radius: .5rem;\n    cursor: pointer;\n}\n\n.ronaSpecialImg:hover {\n    transform: scale(1.05);\n}\n\n.ronaSpecialTitle {\n    text-decoration: wavy;\n    color: whitesmoke;\n}\n\n.contactHeadline {\n    font-size: 2rem;\n    font-weight: 700;\n    text-align: center;\n    font-family: 'Cinderella', sans-serif;\n    padding: 1rem;\n    margin-top: 1rem;\n    ;\n}\n\n.contactText {\n    font-size: 1.5rem;\n    font-weight: 400;\n    text-align: center;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 1rem;\n}\n\n.contactLink {\n    cursor: pointer;\n}\n\n.fade {\n    opacity: 0;\n    transition: opacity 1s ease-in-out;\n}\n\n.fade.active {\n    opacity: 1;\n}"],"sourceRoot":""}]);
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
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadDOM() {
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

        const container = document.createElement('div');
        container.classList.add('container');

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

        container.appendChild(about);
        container.appendChild(meetChef);

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
        link2.classList.add('contactLink');
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
        content.appendChild(container);
        content.appendChild(impressum);
        content.appendChild(credit);

        if (selectLang.value === "it") {
            headtitle.textContent = 'Il ristorante Bella Partia';
            link1.textContent = 'Carriera al Bella Partia';
            link2.textContent = 'Contatto';
            link3.textContent = 'La sicurezza dei dati';
            titleAbout.textContent = 'Sulla Bella Partia';
            text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
            meetChefTitle.textContent = 'Incontra lo chef';
            text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
        }
        else {
            headtitle.textContent = 'The Bella Partia Restaurant';
            link1.textContent = 'Career at Bella Partia';
            link2.textContent = 'Contact';
            link3.textContent = 'Data Security';
            titleAbout.textContent = 'About Bella Partia';
            text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
            meetChefTitle.textContent = 'Meet the Chef';
            text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
        }

        selectLang.addEventListener('change', () => {
            if (selectLang.value === "it") {
                headtitle.textContent = 'Il ristorante Bella Partia';
                link1.textContent = 'Carriera al Bella Partia';
                link2.textContent = 'Contatto';
                link3.textContent = 'La sicurezza dei dati';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                link1.textContent = 'Career at Bella Partia';
                link2.textContent = 'Contact';
                link3.textContent = 'Data Security';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
            }    
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
};

loadDOM();

function loadHome() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.overflowX = '';


    const about = document.createElement('div');
    about.classList.add('about', 'fade');

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
    meetChef.classList.add('meetChef', 'fade');

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

    container.appendChild(about);
    container.appendChild(meetChef);

    setTimeout(() => {
        about.classList.add('active');
        meetChef.classList.add('active');
      }, 100);

    const selectLang = document.getElementById('language');

    if (selectLang.value === "it") {
        titleAbout.textContent = 'Sulla Bella Partia';
        text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
        meetChefTitle.textContent = 'Incontra lo chef';
        text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
    }
    else {
        titleAbout.textContent = 'About Bella Partia';
        text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
        meetChefTitle.textContent = 'Meet the Chef';
        text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
    }

    selectLang.addEventListener('change', () => {
        if (selectLang.value === "it") {
            titleAbout.textContent = 'Sulla Bella Partia';
            text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
            meetChefTitle.textContent = 'Incontra lo chef';
            text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
        }
        else {
            titleAbout.textContent = 'About Bella Partia';
            text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
            meetChefTitle.textContent = 'Meet the Chef';
            text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
        }
    });

}


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
function loadContact() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.overflowX = '';
    container.style.minHeight = "100vh";
    container.style.display = 'flex';
    container.style.flexDirection = 'column'
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    container.innerHTML = `
    <div class="contactHeadline">(Fictional) Bella Partia Restaurant UK ltd.</div>
    <p class="contactText">Platform 9 3/4, Kurdistan</p>
    <p class="contactText">48982 Disneyland</p>
    <p class="contactText">Tel.: 03770380948??!99845/$%</p>
    <p class="contactText">Mail: newPhoneWhoDis@non-existent.timbukdu</p>
    `;


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
function loadMenu() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1507048947301-7afc2aca0edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.overflowX = 'hidden';

    const menuHeadline = document.createElement('div');
    menuHeadline.classList.add('menuHeadline', 'fade');
    menuHeadline.textContent = 'The Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid', 'fade');

    const menu1 = document.createElement('div');
    menu1.classList.add('menuDish');
    const menu1Img = document.createElement('img');
    menu1Img.classList.add('menuImage');
    menu1Img.src = 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80';
    menu1Img.alt = 'Pizza Margherita';
    const menu1Title = document.createElement('div');
    menu1Title.classList.add('menuTitle');
    menu1Title.textContent = 'Pizza Margherita';
    const menu1Text = document.createElement('div');
    menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
    menu1.appendChild(menu1Img);
    menu1.appendChild(menu1Title);
    menu1.appendChild(menu1Text);

    const menu2 = document.createElement('div');
    menu2.classList.add('menuDish');
    const menu2Img = document.createElement('img');
    menu2Img.classList.add('menuImage');
    menu2Img.src = 'https://www.gutekueche.at/storage/media/recipe/120924/P00_Pizza-alla-Siciliana_atba.jpg';
    menu2Img.alt = 'Pizza Siciliana';
    const menu2Title = document.createElement('div');
    menu2Title.classList.add('menuTitle');
    menu2Title.textContent = 'Pizza Siciliana';
    const menu2Text = document.createElement('div');
    menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
    menu2.appendChild(menu2Img);
    menu2.appendChild(menu2Title);
    menu2.appendChild(menu2Text);

    const menu3 = document.createElement('div');
    menu3.classList.add('menuDish');
    const menu3Img = document.createElement('img');
    menu3Img.classList.add('menuImage');
    menu3Img.src = 'https://cdn.gutekueche.de/upload/rezept/5019/1600x1200_pizza-funghi.jpg';
    menu3Img.alt = 'Pizza Funghi';
    const menu3Title = document.createElement('div');
    menu3Title.classList.add('menuTitle');
    menu3Title.textContent = 'Pizza Funghi';
    const menu3Text = document.createElement('div');
    menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
    menu3.appendChild(menu3Img);
    menu3.appendChild(menu3Title);
    menu3.appendChild(menu3Text);

    const menu4 = document.createElement('div');
    menu4.classList.add('menuDish');
    const menu4Img = document.createElement('img');
    menu4Img.classList.add('menuImage');
    menu4Img.src = 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGl6emElMjBUdW5uYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60';
    menu4Img.alt = 'Pizza Salami';
    const menu4Title = document.createElement('div');
    menu4Title.classList.add('menuTitle');
    menu4Title.textContent = 'Pizza Salami';
    const menu4Text = document.createElement('div');
    menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
    menu4.appendChild(menu4Img);
    menu4.appendChild(menu4Title);
    menu4.appendChild(menu4Text);

    const menu5 = document.createElement('div');
    menu5.classList.add('menuDish');
    const menu5Img = document.createElement('img');
    menu5Img.classList.add('menuImage');
    menu5Img.src = 'https://images.unsplash.com/photo-1641244999574-5afea228bd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
    menu5Img.alt = 'Calzone';
    const menu5Title = document.createElement('div');
    menu5Title.classList.add('menuTitle');
    menu5Title.textContent = 'Calzone';
    const menu5Text = document.createElement('div');
    menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
    menu5.appendChild(menu5Img);
    menu5.appendChild(menu5Title);
    menu5.appendChild(menu5Text);

    const menu6 = document.createElement('div');
    menu6.classList.add('menuDish');
    const menu6Img = document.createElement('img');
    menu6Img.classList.add('menuImage');
    menu6Img.src = 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    menu6Img.alt = 'Spaghetti Bolognese';
    const menu6Title = document.createElement('div');
    menu6Title.classList.add('menuTitle');
    menu6Title.textContent = 'Spaghetti Bolognese';
    const menu6Text = document.createElement('div');
    menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
    menu6.appendChild(menu6Img);
    menu6.appendChild(menu6Title);
    menu6.appendChild(menu6Text);

    menuGrid.appendChild(menu1);
    menuGrid.appendChild(menu2);
    menuGrid.appendChild(menu3);
    menuGrid.appendChild(menu4);
    menuGrid.appendChild(menu5);
    menuGrid.appendChild(menu6);

    const specialty = document.createElement('div');
    specialty.classList.add('menuHeadline', 'fade');
    specialty.textContent = 'Our honorary House Special';

    const ronaSpecial = document.createElement('div');
    ronaSpecial.classList.add('ronaSpecial', 'fade');

    const GoldenBorder = document.createElement('div');
    GoldenBorder.classList.add('GoldenBorder');

    const ronaSpecialImg = document.createElement('img');
    ronaSpecialImg.classList.add('ronaSpecialImg');
    ronaSpecialImg.src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ba/e6/1a/disgusting-food-museum.jpg?w=1200&h=1200&s=1';
    ronaSpecialImg.alt = 'The Rona Special';

    GoldenBorder.appendChild(ronaSpecialImg);

    const ronaSpecialTitle = document.createElement('div');
    ronaSpecialTitle.classList.add('ronaSpecialTitle');
    ronaSpecialTitle.textContent = 'The infamous Rona Special';

    const ronaSpecialText = document.createElement('div');
    ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
    to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`

    ronaSpecial.appendChild(GoldenBorder);
    ronaSpecial.appendChild(ronaSpecialTitle);
    ronaSpecial.appendChild(ronaSpecialText);

    container.appendChild(menuHeadline);
    container.appendChild(menuGrid);
    container.appendChild(specialty);
    container.appendChild(ronaSpecial);

    setTimeout(() => {
        menuHeadline.classList.add('active');
        menuGrid.classList.add('active');
        specialty.classList.add('active');
        ronaSpecial.classList.add('active');
      }, 100);
    
    const selectLang = document.getElementById('language');

    if (selectLang.value === "it") {
        menuHeadline.textContent = 'Il Menu';
        menu1Text.textContent = "La Pizza Margherita è un classico italiano per le persone che non vogliono assumere tante calorie. Viene servito con basilico extra sopra e ovviamente con tanto cuore e passione.";
        menu2Text.textContent = 'Conosciuta anche come sfincione, la pizza alla siciliana ha una crosta spessa dalla consistenza soffice e soffice. Viene cotto in una teglia di forma rettangolare, condito con salsa di pomodoro, acciughe, cipolle, origano e formaggio di pecora a pasta dura.';
        menu3Text.textContent = "La Pizza Funghi è una Pizza famosa in tutto il mondo. La Pizza Funghi è condita con i migliori funghi aromatici, succosa mozzarella e formaggi Edam e rifinita con un contorno di erbe.";
        menu4Text.textContent = "La Pizza Salame è un'altra Pizza classica e apprezzata. Viene servito con pomodorini, mozzarella e fette di salame piccante.";
        menu5Text.textContent = 'Un calzone è un fatturato italiano al forno, fatto con pasta lievitata. Ha avuto origine a Napoli. Il nostro calzone è fatto con pasta di pane salata, cotta al forno ed è farcito con salame, mozzarella, ricotta e parmigiano, oltre ad un uovo.';
        menu6Text.textContent = "Gli spaghetti alla bolognese sono costituiti da spaghetti con ragù italiano (sugo di carne) a base di carne macinata, pancetta e pomodori, serviti con parmigiano. Gli spaghetti alla bolognese sono uno dei primi piatti più apprezzati fuori dall'Italia e ovviamente non possono mancare qui nel nostro menu.";
        specialty.textContent = 'Il nostro Speciale onorario della Casa';
        ronaSpecialTitle.textContent = 'Il famigerato Rona Speciale';
        ronaSpecialText.textContent = `Lo Speciale Rona è per tutte le persone che vogliono sperimentare una visione delicata della diffusione dello stupore, degli alimenti che causano pandemie e patogeni. Lo Speciale Rona è semplice
    da rendere ma incredibilmente unico perché in qualche modo le persone non lo provano più. Diventa uno dei pochi desiderosi di provare.
        `
    }
    else {
        menuHeadline.textContent = 'The Menu';
        menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
        menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
        menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
        menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
        menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
        menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
        specialty.textContent = 'Our honorary House Special';
        ronaSpecialTitle.textContent = 'The infamous Rona Special';
        ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
    to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`
    }

    selectLang.addEventListener('change', () => {
        if (selectLang.value === "it") {
            menuHeadline.textContent = 'Il Menu';
            menu1Text.textContent = "La Pizza Margherita è un classico italiano per le persone che non vogliono assumere tante calorie. Viene servito con basilico extra sopra e ovviamente con tanto cuore e passione.";
            menu2Text.textContent = 'Conosciuta anche come sfincione, la pizza alla siciliana ha una crosta spessa dalla consistenza soffice e soffice. Viene cotto in una teglia di forma rettangolare, condito con salsa di pomodoro, acciughe, cipolle, origano e formaggio di pecora a pasta dura.';
            menu3Text.textContent = "La Pizza Funghi è una Pizza famosa in tutto il mondo. La Pizza Funghi è condita con i migliori funghi aromatici, succosa mozzarella e formaggi Edam e rifinita con un contorno di erbe.";
            menu4Text.textContent = "La Pizza Salame è un'altra Pizza classica e apprezzata. Viene servito con pomodorini, mozzarella e fette di salame piccante.";
            menu5Text.textContent = 'Un calzone è un fatturato italiano al forno, fatto con pasta lievitata. Ha avuto origine a Napoli. Il nostro calzone è fatto con pasta di pane salata, cotta al forno ed è farcito con salame, mozzarella, ricotta e parmigiano, oltre ad un uovo.';
            menu6Text.textContent = "Gli spaghetti alla bolognese sono costituiti da spaghetti con ragù italiano (sugo di carne) a base di carne macinata, pancetta e pomodori, serviti con parmigiano. Gli spaghetti alla bolognese sono uno dei primi piatti più apprezzati fuori dall'Italia e ovviamente non possono mancare qui nel nostro menu.";
            specialty.textContent = 'Il nostro Speciale onorario della Casa';
            ronaSpecialTitle.textContent = 'Il famigerato Rona Speciale';
            ronaSpecialText.textContent = `Lo Speciale Rona è per tutte le persone che vogliono sperimentare una visione delicata della diffusione dello stupore, degli alimenti che causano pandemie e patogeni. Lo Speciale Rona è semplice
        da rendere ma incredibilmente unico perché in qualche modo le persone non lo provano più. Diventa uno dei pochi desiderosi di provare.
            `
        }
        else {
            menuHeadline.textContent = 'The Menu';
            menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
            menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
            menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
            menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
            menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
            menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
            specialty.textContent = 'Our honorary House Special';
            ronaSpecialTitle.textContent = 'The infamous Rona Special';
            ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
        to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`
        }
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
                    (0,_DOMloader_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
                });
                const option2 = document.querySelector('.option.menu');
                const option3 = document.querySelector('.option.contact');
                const contactLink = document.querySelector('.contactLink');
                option2.addEventListener('click', () => {
                    modal.classList.toggle('active');
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
                });
                option3.addEventListener('click', () => {
                    modal.classList.toggle('active');
                    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
                });

                contactLink.addEventListener('click', () => {
                    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
                    window.scrollTo({
                        top: 5,
                        behavior: "smooth" // Optional: Smooth scrolling animation
                    });
                });
        });
    }

    return { showTabMenu };
})();

interactWithDOM.showTabMenu();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksZ0JBQWdCLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxN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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7O0FDaFVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDTDtBQUNNOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG9CQUFvQix3REFBVztBQUMvQixpQkFBaUI7O0FBRWpCO0FBQ0Esb0JBQW9CLHdEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsU0FBUztBQUNUOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELDhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL0RPTWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi90b21hdG9lcy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NpbmRlcmVsbGEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTWV5ZXIgUmVzZXQqL1xuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICAgIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFuJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xufVxuXG5zdmcge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NCwgMTk4LCAxODEpO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xufVxuXG4ucGFub3JhbWEge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDMwdmg7XG59XG5cbi5oZWFkbGluZSxcbi5pbXByZXNzdW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBncmVlbiwgZ3JlZW4gMzMlLCB3aGl0ZSAzMyUsIHdoaXRlIDY2JSwgcmVkIDY2JSwgcmVkKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhbmcsXG4uaGVhZHRpdGxlLFxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4jbGFuZ3VhZ2Uge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxODMsIDE5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogLjJyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5LCAxODMsIDE5KTtcbiAgICBwYWRkaW5nLWlubGluZTogLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4jbGFuZ3VhZ2U6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogLjRyZW0gLjRyZW0gLjFyZW0gZ3JlZW47XG59XG5cbiNsYW5ndWFnZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMxLCA3NywgNzcpO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgNzcsIDc3KTtcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IC40cmVtIC40cmVtIC4xcmVtIHJlZDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uYWJvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5hYm91dEltYWdlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0SW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xufVxuXG4udGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0NpbmRlcmVsbGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWVldENoZWYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZnJhbmNlc2NvSW1nIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuI2ZyYW5jZXNjbyB7XG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLmNyZWRpdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1wcmVzc3VtIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmVlcixcbi5jb250YWN0LFxuLmRhdGFTZWN1cml0eSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLm9wdGlvbiB7XG4gICAgcGFkZGluZzogMS40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDc3LCA3Nyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFuJywgc2Fucy1zZXJpZjtcbn1cblxuLm9wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgNTMsIDUzKTtcbn1cblxuLm9wdGlvbi5ob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9kYWwuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubWVudUhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWVudUdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubWVudURpc2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICA0cHggNHB4IDBweCAwcHggIzAwOTI0NixcbiAgICAgICAgLyogR3JlZW4gKi9cbiAgICAgICAgOHB4IDhweCAwcHggMHB4ICNmZmZmZmYsXG4gICAgICAgIC8qIFdoaXRlICovXG4gICAgICAgIDEycHggMTJweCAwcHggMHB4ICNmZjAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLm1lbnVUaXRsZSxcbi5yb25hU3BlY2lhbFRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAnSXRhbGlhbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tZW51SW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWF4LWhlaWdodDogMzByZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuLnJvbmFTcGVjaWFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LWZhbWlseTogJ0NpbmRlcmVsbGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLkdvbGRlbkJvcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDcvMTIwLzI0OC9vcmlnaW5hbC92aW50YWdlLWZsb3JhbC1vcm5hbWVudC1ib3JkZXItaGFuZC1kcmF3bi1kZWNvcmF0aXZlLWVsZW1lbnQtaWxsdXN0cmF0aW9uLW9mLWdvbGQtZmxvcmFsLWZyYW1lLXdpdGgtd2hpdGUtYmFja2dyb3VuZC1kZXNpZ24tdGVtcGxhdGUtZm9yLXBhZ2UtZGVjb3JhdGlvbi1jYXJkcy13ZWRkaW5nLWJhbm5lci1mcmVlLXZlY3Rvci5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMjRyZW07XG4gICAgbWluLWhlaWdodDogNDByZW07XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgbWF4LWhlaWdodDogNTRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4ucm9uYVNwZWNpYWxJbWcge1xuICAgIG1pbi13aWR0aDogMThyZW07XG4gICAgbWluLWhlaWdodDogMjhyZW07XG4gICAgd2lkdGg6IDQ1dnc7XG4gICAgbWF4LWhlaWdodDogNDByZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvbmFTcGVjaWFsSW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucm9uYVNwZWNpYWxUaXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB3YXZ5O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFjdEhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgO1xufVxuXG4uY29udGFjdFRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNvbnRhY3RMaW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYWRlLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTtBQUNmOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztB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QkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0hBQXNIO0lBQ3RILGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNZXllciBSZXNldCovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nO1xcbiAgICBzcmM6IHVybCgnLi90b21hdG9lcy50dGYnKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NpbmRlcmVsbGEnO1xcbiAgICBzcmM6IHVybCgnLi9DaW5kZXJlbGxhLnR0ZicpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuc3ZnIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjQsIDE5OCwgMTgxKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbn1cXG5cXG4ucGFub3JhbWEge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMzB2aDtcXG59XFxuXFxuLmhlYWRsaW5lLFxcbi5pbXByZXNzdW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyZWVuLCBncmVlbiAzMyUsIHdoaXRlIDMzJSwgd2hpdGUgNjYlLCByZWQgNjYlLCByZWQpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhbmcsXFxuLmhlYWR0aXRsZSxcXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZHRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbiNsYW5ndWFnZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTgzLCAxOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOSwgMTgzLCAxOSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNsYW5ndWFnZTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IC40cmVtIC40cmVtIC4xcmVtIGdyZWVuO1xcbn1cXG5cXG4jbGFuZ3VhZ2U6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMxLCA3NywgNzcpO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCA3NywgNzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogLjRyZW0gLjRyZW0gLjFyZW0gcmVkO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmFib3V0SW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRJbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tZWV0Q2hlZiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFuY2VzY29JbWcge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbiNmcmFuY2VzY28ge1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY3JlZGl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW1wcmVzc3VtIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jYXJlZXIsXFxuLmNvbnRhY3QsXFxuLmRhdGFTZWN1cml0eSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgM3M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDc3LCA3Nyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRhbGlhbicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCA1MywgNTMpO1xcbn1cXG5cXG4ub3B0aW9uLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWVudUhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYScsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5tZW51R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1lbnVEaXNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6XFxuICAgICAgICA0cHggNHB4IDBweCAwcHggIzAwOTI0NixcXG4gICAgICAgIC8qIEdyZWVuICovXFxuICAgICAgICA4cHggOHB4IDBweCAwcHggI2ZmZmZmZixcXG4gICAgICAgIC8qIFdoaXRlICovXFxuICAgICAgICAxMnB4IDEycHggMHB4IDBweCAjZmYwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5tZW51VGl0bGUsXFxuLnJvbmFTcGVjaWFsVGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW4nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tZW51SW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIG1heC1oZWlnaHQ6IDMwcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLnJvbmFTcGVjaWFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxsYScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5Hb2xkZW5Cb3JkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDcvMTIwLzI0OC9vcmlnaW5hbC92aW50YWdlLWZsb3JhbC1vcm5hbWVudC1ib3JkZXItaGFuZC1kcmF3bi1kZWNvcmF0aXZlLWVsZW1lbnQtaWxsdXN0cmF0aW9uLW9mLWdvbGQtZmxvcmFsLWZyYW1lLXdpdGgtd2hpdGUtYmFja2dyb3VuZC1kZXNpZ24tdGVtcGxhdGUtZm9yLXBhZ2UtZGVjb3JhdGlvbi1jYXJkcy13ZWRkaW5nLWJhbm5lci1mcmVlLXZlY3Rvci5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDI0cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA0MHJlbTtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDU0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnJvbmFTcGVjaWFsSW1nIHtcXG4gICAgbWluLXdpZHRoOiAxOHJlbTtcXG4gICAgbWluLWhlaWdodDogMjhyZW07XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgICBtYXgtaGVpZ2h0OiA0MHJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm9uYVNwZWNpYWxJbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucm9uYVNwZWNpYWxUaXRsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogd2F2eTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5jb250YWN0SGVhZGxpbmUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDaW5kZXJlbGxhJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgO1xcbn1cXG5cXG4uY29udGFjdFRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdExpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhZGUuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBsb2FkRE9NKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHBhbm9yYW1hSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHBhbm9yYW1hSW1nLmNsYXNzTGlzdC5hZGQoJ3Bhbm9yYW1hJyk7XG4gICAgICAgIHBhbm9yYW1hSW1nLnNyYyA9ICdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMjIvOTY4LzEyNC9vcmlnaW5hbC9pdGFsaWFuLXZpbGxhZ2UtY2FydG9vbi1sYW5kc2NhcGUtd2l0aC1ncmVlbi1oaWxscy1hbmQtZmllbGRzLWlsbHVzdHJhdGlvbi1mbGF0LWRlc2lnbi1wb3N0ZXItZXVyb3BlYW4tc3VtbWVyLXZpbGxhZ2UtZXVyb3BlYW4tY291bnRyeXNpZGUtaW4tZmFsbC1jb3VudHJ5LWhvdXNlcy12ZWN0b3IuanBnJztcbiAgICAgICAgcGFub3JhbWFJbWcuYWx0ID0gJ2l0YWxpYW4gYmFja2dyb3VuZCc7XG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRsaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xuXG4gICAgICAgIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGFuZy5jbGFzc0xpc3QuYWRkKCdsYW5nJyk7XG5cbiAgICAgICAgbGFuZy5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5lYXJ0aDwvdGl0bGU+PHBhdGggZD1cIk0xNy45LDE3LjM5QzE3LjY0LDE2LjU5IDE2Ljg5LDE2IDE2LDE2SDE1VjEzQTEsMSAwIDAsMCAxNCwxMkg4VjEwSDEwQTEsMSAwIDAsMCAxMSw5VjdIMTNBMiwyIDAgMCwwIDE1LDVWNC41OUMxNy45Myw1Ljc3IDIwLDguNjQgMjAsMTJDMjAsMTQuMDggMTkuMiwxNS45NyAxNy45LDE3LjM5TTExLDE5LjkzQzcuMDUsMTkuNDQgNCwxNi4wOCA0LDEyQzQsMTEuMzggNC4wOCwxMC43OCA0LjIxLDEwLjIxTDksMTVWMTZBMiwyIDAgMCwwIDExLDE4TTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdExhbmcuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhbmd1YWdlJyk7XG4gICAgICAgIHNlbGVjdExhbmcuaWQgPSAnbGFuZ3VhZ2UnO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdlbicpO1xuICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gJ0VOJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaXQnKTtcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdJVCc7XG4gICAgICAgIHNlbGVjdExhbmcuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIHNlbGVjdExhbmcuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgICAgICAgbGFuZy5hcHBlbmRDaGlsZChzZWxlY3RMYW5nKTtcblxuICAgICAgICBjb25zdCBoZWFkdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWR0aXRsZScpO1xuICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgUmVzdGF1cmFudFwiO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbk1lbnUnKTtcbiAgICAgICAgYnV0dG9uTWVudS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tZW51PC90aXRsZT48cGF0aCBkPVwiTTMsNkgyMVY4SDNWNk0zLDExSDIxVjEzSDNWMTFNMywxNkgyMVYxOEgzVjE2WlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBtZW51XCI+TWVudTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGNvbnRhY3RcIj5Db250YWN0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChsYW5nKTtcbiAgICAgICAgaGVhZGxpbmVyLmFwcGVuZENoaWxkKGhlYWR0aXRsZSk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUFib3V0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJywgJ2Fib3V0Jyk7XG4gICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0IEJlbGxhIFBhcnRpYVwiO1xuXG4gICAgICAgIGNvbnN0IGFib3V0SW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFib3V0SW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1hZ2VzJyk7XG4gICAgICAgIGNvbnN0IGFib3V0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhYm91dEltZzEuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWcnKTtcbiAgICAgICAgYWJvdXRJbWcxLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzQ2NTAwNzU0ODktM2JhZWNlYzFlOGIxP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MFwiO1xuICAgICAgICBhYm91dEltZzEuYWx0ID0gXCJpdGFsaWFuIHJlc3RhdXJhbnRcIjtcbiAgICAgICAgY29uc3QgYWJvdXRJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFib3V0SW1nMi5jbGFzc0xpc3QuYWRkKCdhYm91dEltZycpO1xuICAgICAgICBhYm91dEltZzIuc3JjID0gXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNTQ5MDUyODZlNGIwNTA4MTIzNDU2NDRjLzcyOWY1MDZjLWQ1OWEtNDQ5NC05N2E3LTkwMmU5NmNhZjM5My9TbmlwMjAyMzAzMzBfMi5wbmdcIjtcbiAgICAgICAgYWJvdXRJbWcyLmFsdCA9IFwibG9jYXRpb25cIjtcbiAgICAgICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcxKTtcbiAgICAgICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcyKTtcblxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ2Fib3V0RGl2Jyk7XG4gICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuXG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlQWJvdXQpO1xuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEltYWdlcyk7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgICAgICBjb25zdCBtZWV0Q2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWV0Q2hlZi5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicpO1xuXG4gICAgICAgIGNvbnN0IG1lZXRDaGVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVldENoZWZUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicsICd0aXRsZScpO1xuICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gXCJNZWV0IHRoZSBDaGVmXCI7XG5cbiAgICAgICAgY29uc3QgZnJhbmNlc2NvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGZyYW5jZXNjb0ltZy5jbGFzc0xpc3QuYWRkKCdmcmFuY2VzY29JbWcnKTtcbiAgICAgICAgZnJhbmNlc2NvSW1nLnNyYyA9IFwiaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZm90b3Mta29zdGVubG9zL2F1c2RydWNrc3N0YXJrZXItanVuZ2VyLW1hbm4tcG9zaWVydC1mdWVyLXdpbnRlcmZlcmllbl8xNDA3MjUtMTQxMDIzLmpwZz93PTEzODAmdD1zdD0xNjk2MjYyNjE4fmV4cD0xNjk2MjYzMjE4fmhtYWM9ZmM5NjcwNjQ4OWI4YTNmYzRjYzc0YTI3ZTg2ZTdmMjliZmIyYzUwYjBmYmYxMWFjMDI1M2FiNjE2ODRiMmUyZlwiO1xuICAgICAgICBmcmFuY2VzY29JbWcuYWx0ID0gXCJpdGFsaWFuIGNvb2tcIjtcblxuICAgICAgICBjb25zdCBmcmFuY2VzY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbmNlc2NvLmlkID0gXCJmcmFuY2VzY29cIjtcbiAgICAgICAgZnJhbmNlc2NvLnRleHRDb250ZW50ID0gXCJGcmFuY2VzY29cIjtcblxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ0NoZWYnKTtcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS5cIjtcblxuICAgICAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChtZWV0Q2hlZlRpdGxlKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQoZnJhbmNlc2NvSW1nKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQoZnJhbmNlc2NvKTtcbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQodGV4dDIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWV0Q2hlZik7XG5cbiAgICAgICAgY29uc3QgaW1wcmVzc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcHJlc3N1bS5jbGFzc0xpc3QuYWRkKCdpbXByZXNzdW0nKTtcblxuICAgICAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZWVyLmNsYXNzTGlzdC5hZGQoJ2NhcmVlcicpO1xuICAgICAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazEuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xuICAgICAgICBsaW5rMS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rMS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSBcIkNhcmVlciBhdCBCZWxsYSBQYXJ0aWFcIjtcbiAgICAgICAgY2FyZWVyLmFwcGVuZENoaWxkKGxpbmsxKTtcblxuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICBjb25zdCBsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazIuY2xhc3NMaXN0LmFkZCgnY29udGFjdExpbmsnKTtcbiAgICAgICAgbGluazIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChsaW5rMik7XG5cbiAgICAgICAgY29uc3QgZGF0YVNlY3VyaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGFTZWN1cml0eS5jbGFzc0xpc3QuYWRkKCdkYXRhU2VjdXJpdHknKTtcbiAgICAgICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmszLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIjtcbiAgICAgICAgbGluazMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbGluazMucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICAgIGxpbmszLnRleHRDb250ZW50ID0gXCJEYXRhIFNlY3VyaXR5XCI7XG4gICAgICAgIGRhdGFTZWN1cml0eS5hcHBlbmRDaGlsZChsaW5rMyk7XG5cbiAgICAgICAgaW1wcmVzc3VtLmFwcGVuZENoaWxkKGNhcmVlcik7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICAgICAgaW1wcmVzc3VtLmFwcGVuZENoaWxkKGRhdGFTZWN1cml0eSk7XG5cbiAgICAgICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKCdjcmVkaXQnKTtcbiAgICAgICAgY3JlZGl0LmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIndoaXRlXCI+PHRpdGxlPmdpdGh1YjwvdGl0bGU+PHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0My5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgICAgIHRleHQzLmlubmVySFRNTCA9IFwiJmNvcHk7IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRpbmcwMlwiO1xuXG4gICAgICAgIGNyZWRpdC5hcHBlbmRDaGlsZCh0ZXh0Myk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYW5vcmFtYUltZyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltcHJlc3N1bSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgICAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSAnQ2FycmllcmEgYWwgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gJ0NvbnRhdHRvJztcbiAgICAgICAgICAgIGxpbmszLnRleHRDb250ZW50ID0gJ0xhIHNpY3VyZXp6YSBkZWkgZGF0aSc7XG4gICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ1N1bGxhIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEgc2kgdHJvdmEgYSBEaXNuZXlsYW5kLCBpbiBLdXJkaXN0YW4gZWQgw6ggaWwgTUlHTElPUiByaXN0b3JhbnRlIGl0YWxpYW5vIGFsIG1vbmRvISBPbHRyZSBhaSBub3N0cmkgcGlhdHRpIHRyYWRpemlvbmFsaSBpdGFsaWFuaSwgYWJiaWFtbyBhbmNoZSBkZWxpemlvc2Ugc3BlY2lhbGl0w6AgZGkgYWx0cmUgY3VsdHVyZSwgc29wcmF0dHV0dG8gY2luZXNpISBBbmRhdGUgYSBkYXJlIHVuJ29jY2hpYXRhIGFsIG5vc3RybyBtZW7DuSFcIjtcbiAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdRdWVzdG8gw6ggRnJhbmNlc2NvLiDDiCBpbCBub3N0cm8gbWlnbGlvciBjdW9jbywgcXVpbmRpIHNpaSBnZW50aWxlIGNvbiBsdWkuJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnQnO1xuICAgICAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSAnQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICBsaW5rMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgICAgIGxpbmszLnRleHRDb250ZW50ID0gJ0RhdGEgU2VjdXJpdHknO1xuICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ01lZXQgdGhlIENoZWYnO1xuICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLic7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RMYW5nLnZhbHVlID09PSBcIml0XCIpIHtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIGxpbmsxLnRleHRDb250ZW50ID0gJ0NhcnJpZXJhIGFsIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgbGluazIudGV4dENvbnRlbnQgPSAnQ29udGF0dG8nO1xuICAgICAgICAgICAgICAgIGxpbmszLnRleHRDb250ZW50ID0gJ0xhIHNpY3VyZXp6YSBkZWkgZGF0aSc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdTdWxsYSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnUXVlc3RvIMOoIEZyYW5jZXNjby4gw4ggaWwgbm9zdHJvIG1pZ2xpb3IgY3VvY28sIHF1aW5kaSBzaWkgZ2VudGlsZSBjb24gbHVpLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50JztcbiAgICAgICAgICAgICAgICBsaW5rMS50ZXh0Q29udGVudCA9ICdDYXJlZXIgYXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICBsaW5rMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9ICdEYXRhIFNlY3VyaXR5JztcbiAgICAgICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uJztcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5sb2FkRE9NKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICcnO1xuXG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ2ZhZGUnKTtcblxuICAgIGNvbnN0IHRpdGxlQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUFib3V0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJywgJ2Fib3V0Jyk7XG4gICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXQgQmVsbGEgUGFydGlhXCI7XG5cbiAgICBjb25zdCBhYm91dEltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0SW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1hZ2VzJyk7XG4gICAgY29uc3QgYWJvdXRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWJvdXRJbWcxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1nJyk7XG4gICAgYWJvdXRJbWcxLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzQ2NTAwNzU0ODktM2JhZWNlYzFlOGIxP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MFwiO1xuICAgIGFib3V0SW1nMS5hbHQgPSBcIml0YWxpYW4gcmVzdGF1cmFudFwiO1xuICAgIGNvbnN0IGFib3V0SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFib3V0SW1nMi5jbGFzc0xpc3QuYWRkKCdhYm91dEltZycpO1xuICAgIGFib3V0SW1nMi5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81NDkwNTI4NmU0YjA1MDgxMjM0NTY0NGMvNzI5ZjUwNmMtZDU5YS00NDk0LTk3YTctOTAyZTk2Y2FmMzkzL1NuaXAyMDIzMDMzMF8yLnBuZ1wiO1xuICAgIGFib3V0SW1nMi5hbHQgPSBcImxvY2F0aW9uXCI7XG4gICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcxKTtcbiAgICBhYm91dEltYWdlcy5hcHBlbmRDaGlsZChhYm91dEltZzIpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ2Fib3V0RGl2Jyk7XG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG5cbiAgICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZUFib3V0KTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEltYWdlcyk7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQodGV4dDEpO1xuXG4gICAgY29uc3QgbWVldENoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZWV0Q2hlZi5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicsICdmYWRlJyk7XG5cbiAgICBjb25zdCBtZWV0Q2hlZlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVldENoZWZUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZWV0Q2hlZicsICd0aXRsZScpO1xuICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lZXQgdGhlIENoZWZcIjtcblxuICAgIGNvbnN0IGZyYW5jZXNjb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZyYW5jZXNjb0ltZy5jbGFzc0xpc3QuYWRkKCdmcmFuY2VzY29JbWcnKTtcbiAgICBmcmFuY2VzY29JbWcuc3JjID0gXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mb3Rvcy1rb3N0ZW5sb3MvYXVzZHJ1Y2tzc3Rhcmtlci1qdW5nZXItbWFubi1wb3NpZXJ0LWZ1ZXItd2ludGVyZmVyaWVuXzE0MDcyNS0xNDEwMjMuanBnP3c9MTM4MCZ0PXN0PTE2OTYyNjI2MTh+ZXhwPTE2OTYyNjMyMTh+aG1hYz1mYzk2NzA2NDg5YjhhM2ZjNGNjNzRhMjdlODZlN2YyOWJmYjJjNTBiMGZiZjExYWMwMjUzYWI2MTY4NGIyZTJmXCI7XG4gICAgZnJhbmNlc2NvSW1nLmFsdCA9IFwiaXRhbGlhbiBjb29rXCI7XG5cbiAgICBjb25zdCBmcmFuY2VzY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcmFuY2VzY28uaWQgPSBcImZyYW5jZXNjb1wiO1xuICAgIGZyYW5jZXNjby50ZXh0Q29udGVudCA9IFwiRnJhbmNlc2NvXCI7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQnLCAnQ2hlZicpO1xuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uXCI7XG5cbiAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChtZWV0Q2hlZlRpdGxlKTtcbiAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChmcmFuY2VzY29JbWcpO1xuICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKGZyYW5jZXNjbyk7XG4gICAgbWVldENoZWYuYXBwZW5kQ2hpbGQodGV4dDIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVldENoZWYpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBtZWV0Q2hlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmd1YWdlJyk7XG5cbiAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnU3VsbGEgQmVsbGEgUGFydGlhJztcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIklsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhIHNpIHRyb3ZhIGEgRGlzbmV5bGFuZCwgaW4gS3VyZGlzdGFuIGVkIMOoIGlsIE1JR0xJT1IgcmlzdG9yYW50ZSBpdGFsaWFubyBhbCBtb25kbyEgT2x0cmUgYWkgbm9zdHJpIHBpYXR0aSB0cmFkaXppb25hbGkgaXRhbGlhbmksIGFiYmlhbW8gYW5jaGUgZGVsaXppb3NlIHNwZWNpYWxpdMOgIGRpIGFsdHJlIGN1bHR1cmUsIHNvcHJhdHR1dHRvIGNpbmVzaSEgQW5kYXRlIGEgZGFyZSB1bidvY2NoaWF0YSBhbCBub3N0cm8gbWVuw7khXCI7XG4gICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1F1ZXN0byDDqCBGcmFuY2VzY28uIMOIIGlsIG5vc3RybyBtaWdsaW9yIGN1b2NvLCBxdWluZGkgc2lpIGdlbnRpbGUgY29uIGx1aS4nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiVGhlIEJlbGxhIFBhcnRpYSByZXN0YXVyYW50IGlzIHNpdHVhdGVkIGluIERpc25leWxhbmQsIEt1cmRpc3RhbiBhbmQgaXMgdGhlIEJFU1QgaXRhbGlhbiByZXN0YXVyYW50IHdvcmxkd2lkZSEgQXNpZGUgZnJvbSBvdXIgdHJhZGl0aW9uYWwgSXRhbGlhbiBkaXNoZXMsIHdlIGFsc28gaGF2ZSBtb3V0aC13YXRlcmluZyBzcGVjaWFsdGllcyBmcm9tIG90aGVyIGN1bHR1cmVzLCBlc3BlY2lhbGx5IENoaW5lc2UsIGFzIHdlbGwhIEdvIHRha2UgYSBsb29rIGF0IG91ciBtZW51ISBcIjtcbiAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLic7XG4gICAgfVxuXG4gICAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RMYW5nLnZhbHVlID09PSBcIml0XCIpIHtcbiAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnU3VsbGEgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdJbmNvbnRyYSBsbyBjaGVmJztcbiAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1F1ZXN0byDDqCBGcmFuY2VzY28uIMOIIGlsIG5vc3RybyBtaWdsaW9yIGN1b2NvLCBxdWluZGkgc2lpIGdlbnRpbGUgY29uIGx1aS4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ01lZXQgdGhlIENoZWYnO1xuICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLic7XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYID0gJyc7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG4gICAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RIZWFkbGluZVwiPihGaWN0aW9uYWwpIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50IFVLIGx0ZC48L2Rpdj5cbiAgICA8cCBjbGFzcz1cImNvbnRhY3RUZXh0XCI+UGxhdGZvcm0gOSAzLzQsIEt1cmRpc3RhbjwvcD5cbiAgICA8cCBjbGFzcz1cImNvbnRhY3RUZXh0XCI+NDg5ODIgRGlzbmV5bGFuZDwvcD5cbiAgICA8cCBjbGFzcz1cImNvbnRhY3RUZXh0XCI+VGVsLjogMDM3NzAzODA5NDg/PyE5OTg0NS8kJTwvcD5cbiAgICA8cCBjbGFzcz1cImNvbnRhY3RUZXh0XCI+TWFpbDogbmV3UGhvbmVXaG9EaXNAbm9uLWV4aXN0ZW50LnRpbWJ1a2R1PC9wPlxuICAgIGA7XG5cblxufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzA0ODk0NzMwMS03YWZjMmFjYTBlZGM/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MiZxPTgwKSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICdmaXhlZCc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcblxuICAgIGNvbnN0IG1lbnVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGxpbmUnLCAnZmFkZScpO1xuICAgIG1lbnVIZWFkbGluZS50ZXh0Q29udGVudCA9ICdUaGUgTWVudSc7XG5cbiAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVHcmlkLmNsYXNzTGlzdC5hZGQoJ21lbnVHcmlkJywgJ2ZhZGUnKTtcblxuICAgIGNvbnN0IG1lbnUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTEuY2xhc3NMaXN0LmFkZCgnbWVudURpc2gnKTtcbiAgICBjb25zdCBtZW51MUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnUxSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWFnZScpO1xuICAgIG1lbnUxSW1nLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5ODAyMzY5NjQxNi0wMTkzYTBiY2QzMDI/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjEzNiZxPTgwJztcbiAgICBtZW51MUltZy5hbHQgPSAnUGl6emEgTWFyZ2hlcml0YSc7XG4gICAgY29uc3QgbWVudTFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUxVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTFUaXRsZS50ZXh0Q29udGVudCA9ICdQaXp6YSBNYXJnaGVyaXRhJztcbiAgICBjb25zdCBtZW51MVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51MVRleHQudGV4dENvbnRlbnQgPSBcIlRoZSBQaXp6YSBNYXJnaGVyaXRhIGlzIGFuIEl0YWxpYW4gY2xhc3NpYyBmb3IgcGVvcGxlIHdobyBkb24ndCB3YW50IHRvIGdhaW4gYXMgbXVjaCBjYWxvcmllcy4gSXQgaXMgc2VydmVkIHdpdGggZXh0cmEgYmFzaWwgb24gdG9wIGFuZCBvZiBjb3Vyc2Ugd2l0aCBhIGxvdCBvZiBoZWFydCBhbmQgcGFzc2lvbi5cIjtcbiAgICBtZW51MS5hcHBlbmRDaGlsZChtZW51MUltZyk7XG4gICAgbWVudTEuYXBwZW5kQ2hpbGQobWVudTFUaXRsZSk7XG4gICAgbWVudTEuYXBwZW5kQ2hpbGQobWVudTFUZXh0KTtcblxuICAgIGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTIuY2xhc3NMaXN0LmFkZCgnbWVudURpc2gnKTtcbiAgICBjb25zdCBtZW51MkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnUySW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWFnZScpO1xuICAgIG1lbnUySW1nLnNyYyA9ICdodHRwczovL3d3dy5ndXRla3VlY2hlLmF0L3N0b3JhZ2UvbWVkaWEvcmVjaXBlLzEyMDkyNC9QMDBfUGl6emEtYWxsYS1TaWNpbGlhbmFfYXRiYS5qcGcnO1xuICAgIG1lbnUySW1nLmFsdCA9ICdQaXp6YSBTaWNpbGlhbmEnO1xuICAgIGNvbnN0IG1lbnUyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51MlRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICAgIG1lbnUyVGl0bGUudGV4dENvbnRlbnQgPSAnUGl6emEgU2ljaWxpYW5hJztcbiAgICBjb25zdCBtZW51MlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51MlRleHQudGV4dENvbnRlbnQgPSAnQWxzbyBrbm93biBhcyBzZmluY2lvbmUsIFNpY2lsaWFuLXN0eWxlIHBpenphIGhhcyBhIHRoaWNrIGNydXN0IHdpdGggYSBmbHVmZnksIHNwb25nZS1saWtlIGNvbnNpc3RlbmN5LiBJdCBpcyBiYWtlZCBpbiBhIHJlY3Rhbmd1bGFyIHNoYXBlZCBwYW4sIHRvcHBlZCB3aXRoIHRvbWF0byBzYXVjZSwgYW5jaG92aWVzLCBvbmlvbnMsIG9yZWdhbm8sIGFuZCBhIGhhcmQgc2hlZXDigJlzIG1pbGsgY2hlZXNlLic7XG4gICAgbWVudTIuYXBwZW5kQ2hpbGQobWVudTJJbWcpO1xuICAgIG1lbnUyLmFwcGVuZENoaWxkKG1lbnUyVGl0bGUpO1xuICAgIG1lbnUyLmFwcGVuZENoaWxkKG1lbnUyVGV4dCk7XG5cbiAgICBjb25zdCBtZW51MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUzLmNsYXNzTGlzdC5hZGQoJ21lbnVEaXNoJyk7XG4gICAgY29uc3QgbWVudTNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51M0ltZy5jbGFzc0xpc3QuYWRkKCdtZW51SW1hZ2UnKTtcbiAgICBtZW51M0ltZy5zcmMgPSAnaHR0cHM6Ly9jZG4uZ3V0ZWt1ZWNoZS5kZS91cGxvYWQvcmV6ZXB0LzUwMTkvMTYwMHgxMjAwX3BpenphLWZ1bmdoaS5qcGcnO1xuICAgIG1lbnUzSW1nLmFsdCA9ICdQaXp6YSBGdW5naGknO1xuICAgIGNvbnN0IG1lbnUzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51M1RpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICAgIG1lbnUzVGl0bGUudGV4dENvbnRlbnQgPSAnUGl6emEgRnVuZ2hpJztcbiAgICBjb25zdCBtZW51M1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51M1RleHQudGV4dENvbnRlbnQgPSAnVGhlIFBpenphIEZ1bmdoaSBpcyBhIHdvcmxkIGZhbW91cyBQaXp6YS4gVGhlIFBpenphIEZ1bmdoaSBpcyB0b3BwZWQgd2l0aCB0aGUgZmluZXN0IGFyb21hdGljIG11c2hyb29tcywganVpY3kgbW96emFyZWxsYSBhbmQgRWRhbSBjaGVlc2VzLCBhbmQgZmluaXNoZWQgd2l0aCBhIGhlcmIgZ2FybmlzaC4nO1xuICAgIG1lbnUzLmFwcGVuZENoaWxkKG1lbnUzSW1nKTtcbiAgICBtZW51My5hcHBlbmRDaGlsZChtZW51M1RpdGxlKTtcbiAgICBtZW51My5hcHBlbmRDaGlsZChtZW51M1RleHQpO1xuXG4gICAgY29uc3QgbWVudTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NC5jbGFzc0xpc3QuYWRkKCdtZW51RGlzaCcpO1xuICAgIGNvbnN0IG1lbnU0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudTRJbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltYWdlJyk7XG4gICAgbWVudTRJbWcuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0MzA4OTgzNDk2LTRmYWJiMWEwMTVlZT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhVR2w2ZW1FbE1qQlVkVzV1WVh4bGJud3dmSHd3Zkh4OE1BJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjAwJnE9NjAnO1xuICAgIG1lbnU0SW1nLmFsdCA9ICdQaXp6YSBTYWxhbWknO1xuICAgIGNvbnN0IG1lbnU0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICAgIG1lbnU0VGl0bGUudGV4dENvbnRlbnQgPSAnUGl6emEgU2FsYW1pJztcbiAgICBjb25zdCBtZW51NFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NFRleHQudGV4dENvbnRlbnQgPSAnVGhlIFBpenphIFNhbGFtaSBpcyBhbm90aGVyIGNsYXNzaWMgYW5kIHBvcHVsYXIgUGl6emEuIEl0IGlzIHNldmVkIHdpdGggdG9tYXRvZXMsIG1venphcmVsbGEgYW5kIHNwaWN5IHNhbGFtaSBzbGljZXMuJztcbiAgICBtZW51NC5hcHBlbmRDaGlsZChtZW51NEltZyk7XG4gICAgbWVudTQuYXBwZW5kQ2hpbGQobWVudTRUaXRsZSk7XG4gICAgbWVudTQuYXBwZW5kQ2hpbGQobWVudTRUZXh0KTtcblxuICAgIGNvbnN0IG1lbnU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTUuY2xhc3NMaXN0LmFkZCgnbWVudURpc2gnKTtcbiAgICBjb25zdCBtZW51NUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnU1SW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWFnZScpO1xuICAgIG1lbnU1SW1nLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0MTI0NDk5OTU3NC01YWZlYTIyOGJkMjY/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk3NCZxPTgwJztcbiAgICBtZW51NUltZy5hbHQgPSAnQ2Fsem9uZSc7XG4gICAgY29uc3QgbWVudTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU1VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTVUaXRsZS50ZXh0Q29udGVudCA9ICdDYWx6b25lJztcbiAgICBjb25zdCBtZW51NVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NVRleHQudGV4dENvbnRlbnQgPSAnQSBjYWx6b25lIGlzIGFuIEl0YWxpYW4gb3Zlbi1iYWtlZCB0dXJub3ZlciwgbWFkZSB3aXRoIGxlYXZlbmVkIGRvdWdoLiBJdCBvcmlnaW5hdGVkIGluIE5hcGxlcy4gT3VyIGNhbHpvbmUgaXMgbWFkZSBmcm9tIHNhbHRlZCBicmVhZCBkb3VnaCwgYmFrZWQgaW4gYW4gb3ZlbiBhbmQgaXMgc3R1ZmZlZCB3aXRoIHNhbGFtaSwgbW96emFyZWxsYSwgcmljb3R0YSBhbmQgUGFybWVzYW4sIGFzIHdlbGwgYXMgYW4gZWdnLic7XG4gICAgbWVudTUuYXBwZW5kQ2hpbGQobWVudTVJbWcpO1xuICAgIG1lbnU1LmFwcGVuZENoaWxkKG1lbnU1VGl0bGUpO1xuICAgIG1lbnU1LmFwcGVuZENoaWxkKG1lbnU1VGV4dCk7XG5cbiAgICBjb25zdCBtZW51NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU2LmNsYXNzTGlzdC5hZGQoJ21lbnVEaXNoJyk7XG4gICAgY29uc3QgbWVudTZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51NkltZy5jbGFzc0xpc3QuYWRkKCdtZW51SW1hZ2UnKTtcbiAgICBtZW51NkltZy5zcmMgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjI5NzM1MzY5NjgtM2VhZDllNzgwOTYwP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCc7XG4gICAgbWVudTZJbWcuYWx0ID0gJ1NwYWdoZXR0aSBCb2xvZ25lc2UnO1xuICAgIGNvbnN0IG1lbnU2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NlRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICAgIG1lbnU2VGl0bGUudGV4dENvbnRlbnQgPSAnU3BhZ2hldHRpIEJvbG9nbmVzZSc7XG4gICAgY29uc3QgbWVudTZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTZUZXh0LnRleHRDb250ZW50ID0gXCJTcGFnaGV0dGkgYm9sb2duZXNlIGNvbnNpc3RzIG9mIHNwYWdoZXR0aSB3aXRoIGFuIEl0YWxpYW4gcmFnw7kgKG1lYXQgc2F1Y2UpIG1hZGUgd2l0aCBtaW5jZWQgYmVlZiwgYmFjb24gYW5kIHRvbWF0b2VzLCBzZXJ2ZWQgd2l0aCBQYXJtZXNhbiBjaGVlc2UuIFNwYWdoZXR0aSBib2xvZ25lc2UgaXMgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgcGFzdGEgZGlzaGVzIGVhdGVuIG91dHNpZGUgb2YgSXRhbHkgYW5kIG9mIGNvdXJzZSBpdCBjYW4ndCBiZSBtaXNzaW5nIGhlcmUgb24gb3VyIG1lbnUuXCI7XG4gICAgbWVudTYuYXBwZW5kQ2hpbGQobWVudTZJbWcpO1xuICAgIG1lbnU2LmFwcGVuZENoaWxkKG1lbnU2VGl0bGUpO1xuICAgIG1lbnU2LmFwcGVuZENoaWxkKG1lbnU2VGV4dCk7XG5cbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51MSk7XG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudTIpO1xuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnUzKTtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51NCk7XG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudTUpO1xuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnU2KTtcblxuICAgIGNvbnN0IHNwZWNpYWx0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWx0eS5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGxpbmUnLCAnZmFkZScpO1xuICAgIHNwZWNpYWx0eS50ZXh0Q29udGVudCA9ICdPdXIgaG9ub3JhcnkgSG91c2UgU3BlY2lhbCc7XG5cbiAgICBjb25zdCByb25hU3BlY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvbmFTcGVjaWFsLmNsYXNzTGlzdC5hZGQoJ3JvbmFTcGVjaWFsJywgJ2ZhZGUnKTtcblxuICAgIGNvbnN0IEdvbGRlbkJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEdvbGRlbkJvcmRlci5jbGFzc0xpc3QuYWRkKCdHb2xkZW5Cb3JkZXInKTtcblxuICAgIGNvbnN0IHJvbmFTcGVjaWFsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcm9uYVNwZWNpYWxJbWcuY2xhc3NMaXN0LmFkZCgncm9uYVNwZWNpYWxJbWcnKTtcbiAgICByb25hU3BlY2lhbEltZy5zcmMgPSAnaHR0cHM6Ly9keW5hbWljLW1lZGlhLWNkbi50cmlwYWR2aXNvci5jb20vbWVkaWEvcGhvdG8tby8xOS9iYS9lNi8xYS9kaXNndXN0aW5nLWZvb2QtbXVzZXVtLmpwZz93PTEyMDAmaD0xMjAwJnM9MSc7XG4gICAgcm9uYVNwZWNpYWxJbWcuYWx0ID0gJ1RoZSBSb25hIFNwZWNpYWwnO1xuXG4gICAgR29sZGVuQm9yZGVyLmFwcGVuZENoaWxkKHJvbmFTcGVjaWFsSW1nKTtcblxuICAgIGNvbnN0IHJvbmFTcGVjaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb25hU3BlY2lhbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3JvbmFTcGVjaWFsVGl0bGUnKTtcbiAgICByb25hU3BlY2lhbFRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBpbmZhbW91cyBSb25hIFNwZWNpYWwnO1xuXG4gICAgY29uc3Qgcm9uYVNwZWNpYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9uYVNwZWNpYWxUZXh0LnRleHRDb250ZW50ID0gYFRoZSBSb25hIFNwZWNpYWwgaXMgZm9yIGFsbCBwZW9wbGUgd2hvIHdhbnQgdG8gZXhwZXJpZW5jZSBhIGRlbGljYXRlIGluc2lnaHQgaW50byBhd2Ugc3ByZWFkaW5nLCBwYW5kZW1pYyBjYXVzaW5nIGFuZCBwYXRob2dlbmljIGZvb2RzLiBUaGUgUm9uYSBTcGVjaWFsIGlzIHNpbXBsZVxuICAgIHRvIG1ha2UgYnV0IGluY3JlZGlibHkgdW5pcXVlIGJlY2F1c2Ugc29tZWhvdyBwZW9wbGUgZG9uJ3QgdHJ5IHRoaXMgb3V0IGFueW1vcmUuIEJlY29tZSBvbmUgb2YgdGhlIGZldyB3aG8gYXJlIGVhZ2VyIHRvIHRyeS5gXG5cbiAgICByb25hU3BlY2lhbC5hcHBlbmRDaGlsZChHb2xkZW5Cb3JkZXIpO1xuICAgIHJvbmFTcGVjaWFsLmFwcGVuZENoaWxkKHJvbmFTcGVjaWFsVGl0bGUpO1xuICAgIHJvbmFTcGVjaWFsLmFwcGVuZENoaWxkKHJvbmFTcGVjaWFsVGV4dCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRsaW5lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUdyaWQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGVjaWFsdHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb25hU3BlY2lhbCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVudUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBtZW51R3JpZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc3BlY2lhbHR5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICByb25hU3BlY2lhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5ndWFnZScpO1xuXG4gICAgaWYgKHNlbGVjdExhbmcudmFsdWUgPT09IFwiaXRcIikge1xuICAgICAgICBtZW51SGVhZGxpbmUudGV4dENvbnRlbnQgPSAnSWwgTWVudSc7XG4gICAgICAgIG1lbnUxVGV4dC50ZXh0Q29udGVudCA9IFwiTGEgUGl6emEgTWFyZ2hlcml0YSDDqCB1biBjbGFzc2ljbyBpdGFsaWFubyBwZXIgbGUgcGVyc29uZSBjaGUgbm9uIHZvZ2xpb25vIGFzc3VtZXJlIHRhbnRlIGNhbG9yaWUuIFZpZW5lIHNlcnZpdG8gY29uIGJhc2lsaWNvIGV4dHJhIHNvcHJhIGUgb3Z2aWFtZW50ZSBjb24gdGFudG8gY3VvcmUgZSBwYXNzaW9uZS5cIjtcbiAgICAgICAgbWVudTJUZXh0LnRleHRDb250ZW50ID0gJ0Nvbm9zY2l1dGEgYW5jaGUgY29tZSBzZmluY2lvbmUsIGxhIHBpenphIGFsbGEgc2ljaWxpYW5hIGhhIHVuYSBjcm9zdGEgc3Blc3NhIGRhbGxhIGNvbnNpc3RlbnphIHNvZmZpY2UgZSBzb2ZmaWNlLiBWaWVuZSBjb3R0byBpbiB1bmEgdGVnbGlhIGRpIGZvcm1hIHJldHRhbmdvbGFyZSwgY29uZGl0byBjb24gc2Fsc2EgZGkgcG9tb2Rvcm8sIGFjY2l1Z2hlLCBjaXBvbGxlLCBvcmlnYW5vIGUgZm9ybWFnZ2lvIGRpIHBlY29yYSBhIHBhc3RhIGR1cmEuJztcbiAgICAgICAgbWVudTNUZXh0LnRleHRDb250ZW50ID0gXCJMYSBQaXp6YSBGdW5naGkgw6ggdW5hIFBpenphIGZhbW9zYSBpbiB0dXR0byBpbCBtb25kby4gTGEgUGl6emEgRnVuZ2hpIMOoIGNvbmRpdGEgY29uIGkgbWlnbGlvcmkgZnVuZ2hpIGFyb21hdGljaSwgc3VjY29zYSBtb3p6YXJlbGxhIGUgZm9ybWFnZ2kgRWRhbSBlIHJpZmluaXRhIGNvbiB1biBjb250b3JubyBkaSBlcmJlLlwiO1xuICAgICAgICBtZW51NFRleHQudGV4dENvbnRlbnQgPSBcIkxhIFBpenphIFNhbGFtZSDDqCB1bidhbHRyYSBQaXp6YSBjbGFzc2ljYSBlIGFwcHJlenphdGEuIFZpZW5lIHNlcnZpdG8gY29uIHBvbW9kb3JpbmksIG1venphcmVsbGEgZSBmZXR0ZSBkaSBzYWxhbWUgcGljY2FudGUuXCI7XG4gICAgICAgIG1lbnU1VGV4dC50ZXh0Q29udGVudCA9ICdVbiBjYWx6b25lIMOoIHVuIGZhdHR1cmF0byBpdGFsaWFubyBhbCBmb3JubywgZmF0dG8gY29uIHBhc3RhIGxpZXZpdGF0YS4gSGEgYXZ1dG8gb3JpZ2luZSBhIE5hcG9saS4gSWwgbm9zdHJvIGNhbHpvbmUgw6ggZmF0dG8gY29uIHBhc3RhIGRpIHBhbmUgc2FsYXRhLCBjb3R0YSBhbCBmb3JubyBlZCDDqCBmYXJjaXRvIGNvbiBzYWxhbWUsIG1venphcmVsbGEsIHJpY290dGEgZSBwYXJtaWdpYW5vLCBvbHRyZSBhZCB1biB1b3ZvLic7XG4gICAgICAgIG1lbnU2VGV4dC50ZXh0Q29udGVudCA9IFwiR2xpIHNwYWdoZXR0aSBhbGxhIGJvbG9nbmVzZSBzb25vIGNvc3RpdHVpdGkgZGEgc3BhZ2hldHRpIGNvbiByYWfDuSBpdGFsaWFubyAoc3VnbyBkaSBjYXJuZSkgYSBiYXNlIGRpIGNhcm5lIG1hY2luYXRhLCBwYW5jZXR0YSBlIHBvbW9kb3JpLCBzZXJ2aXRpIGNvbiBwYXJtaWdpYW5vLiBHbGkgc3BhZ2hldHRpIGFsbGEgYm9sb2duZXNlIHNvbm8gdW5vIGRlaSBwcmltaSBwaWF0dGkgcGnDuSBhcHByZXp6YXRpIGZ1b3JpIGRhbGwnSXRhbGlhIGUgb3Z2aWFtZW50ZSBub24gcG9zc29ubyBtYW5jYXJlIHF1aSBuZWwgbm9zdHJvIG1lbnUuXCI7XG4gICAgICAgIHNwZWNpYWx0eS50ZXh0Q29udGVudCA9ICdJbCBub3N0cm8gU3BlY2lhbGUgb25vcmFyaW8gZGVsbGEgQ2FzYSc7XG4gICAgICAgIHJvbmFTcGVjaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnSWwgZmFtaWdlcmF0byBSb25hIFNwZWNpYWxlJztcbiAgICAgICAgcm9uYVNwZWNpYWxUZXh0LnRleHRDb250ZW50ID0gYExvIFNwZWNpYWxlIFJvbmEgw6ggcGVyIHR1dHRlIGxlIHBlcnNvbmUgY2hlIHZvZ2xpb25vIHNwZXJpbWVudGFyZSB1bmEgdmlzaW9uZSBkZWxpY2F0YSBkZWxsYSBkaWZmdXNpb25lIGRlbGxvIHN0dXBvcmUsIGRlZ2xpIGFsaW1lbnRpIGNoZSBjYXVzYW5vIHBhbmRlbWllIGUgcGF0b2dlbmkuIExvIFNwZWNpYWxlIFJvbmEgw6ggc2VtcGxpY2VcbiAgICBkYSByZW5kZXJlIG1hIGluY3JlZGliaWxtZW50ZSB1bmljbyBwZXJjaMOpIGluIHF1YWxjaGUgbW9kbyBsZSBwZXJzb25lIG5vbiBsbyBwcm92YW5vIHBpw7kuIERpdmVudGEgdW5vIGRlaSBwb2NoaSBkZXNpZGVyb3NpIGRpIHByb3ZhcmUuXG4gICAgICAgIGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lbnVIZWFkbGluZS50ZXh0Q29udGVudCA9ICdUaGUgTWVudSc7XG4gICAgICAgIG1lbnUxVGV4dC50ZXh0Q29udGVudCA9IFwiVGhlIFBpenphIE1hcmdoZXJpdGEgaXMgYW4gSXRhbGlhbiBjbGFzc2ljIGZvciBwZW9wbGUgd2hvIGRvbid0IHdhbnQgdG8gZ2FpbiBhcyBtdWNoIGNhbG9yaWVzLiBJdCBpcyBzZXJ2ZWQgd2l0aCBleHRyYSBiYXNpbCBvbiB0b3AgYW5kIG9mIGNvdXJzZSB3aXRoIGEgbG90IG9mIGhlYXJ0IGFuZCBwYXNzaW9uLlwiO1xuICAgICAgICBtZW51MlRleHQudGV4dENvbnRlbnQgPSAnQWxzbyBrbm93biBhcyBzZmluY2lvbmUsIFNpY2lsaWFuLXN0eWxlIHBpenphIGhhcyBhIHRoaWNrIGNydXN0IHdpdGggYSBmbHVmZnksIHNwb25nZS1saWtlIGNvbnNpc3RlbmN5LiBJdCBpcyBiYWtlZCBpbiBhIHJlY3Rhbmd1bGFyIHNoYXBlZCBwYW4sIHRvcHBlZCB3aXRoIHRvbWF0byBzYXVjZSwgYW5jaG92aWVzLCBvbmlvbnMsIG9yZWdhbm8sIGFuZCBhIGhhcmQgc2hlZXDigJlzIG1pbGsgY2hlZXNlLic7XG4gICAgICAgIG1lbnUzVGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgRnVuZ2hpIGlzIGEgd29ybGQgZmFtb3VzIFBpenphLiBUaGUgUGl6emEgRnVuZ2hpIGlzIHRvcHBlZCB3aXRoIHRoZSBmaW5lc3QgYXJvbWF0aWMgbXVzaHJvb21zLCBqdWljeSBtb3p6YXJlbGxhIGFuZCBFZGFtIGNoZWVzZXMsIGFuZCBmaW5pc2hlZCB3aXRoIGEgaGVyYiBnYXJuaXNoLic7XG4gICAgICAgIG1lbnU0VGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgU2FsYW1pIGlzIGFub3RoZXIgY2xhc3NpYyBhbmQgcG9wdWxhciBQaXp6YS4gSXQgaXMgc2V2ZWQgd2l0aCB0b21hdG9lcywgbW96emFyZWxsYSBhbmQgc3BpY3kgc2FsYW1pIHNsaWNlcy4nO1xuICAgICAgICBtZW51NVRleHQudGV4dENvbnRlbnQgPSAnQSBjYWx6b25lIGlzIGFuIEl0YWxpYW4gb3Zlbi1iYWtlZCB0dXJub3ZlciwgbWFkZSB3aXRoIGxlYXZlbmVkIGRvdWdoLiBJdCBvcmlnaW5hdGVkIGluIE5hcGxlcy4gT3VyIGNhbHpvbmUgaXMgbWFkZSBmcm9tIHNhbHRlZCBicmVhZCBkb3VnaCwgYmFrZWQgaW4gYW4gb3ZlbiBhbmQgaXMgc3R1ZmZlZCB3aXRoIHNhbGFtaSwgbW96emFyZWxsYSwgcmljb3R0YSBhbmQgUGFybWVzYW4sIGFzIHdlbGwgYXMgYW4gZWdnLic7XG4gICAgICAgIG1lbnU2VGV4dC50ZXh0Q29udGVudCA9IFwiU3BhZ2hldHRpIGJvbG9nbmVzZSBjb25zaXN0cyBvZiBzcGFnaGV0dGkgd2l0aCBhbiBJdGFsaWFuIHJhZ8O5IChtZWF0IHNhdWNlKSBtYWRlIHdpdGggbWluY2VkIGJlZWYsIGJhY29uIGFuZCB0b21hdG9lcywgc2VydmVkIHdpdGggUGFybWVzYW4gY2hlZXNlLiBTcGFnaGV0dGkgYm9sb2duZXNlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHBhc3RhIGRpc2hlcyBlYXRlbiBvdXRzaWRlIG9mIEl0YWx5IGFuZCBvZiBjb3Vyc2UgaXQgY2FuJ3QgYmUgbWlzc2luZyBoZXJlIG9uIG91ciBtZW51LlwiO1xuICAgICAgICBzcGVjaWFsdHkudGV4dENvbnRlbnQgPSAnT3VyIGhvbm9yYXJ5IEhvdXNlIFNwZWNpYWwnO1xuICAgICAgICByb25hU3BlY2lhbFRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBpbmZhbW91cyBSb25hIFNwZWNpYWwnO1xuICAgICAgICByb25hU3BlY2lhbFRleHQudGV4dENvbnRlbnQgPSBgVGhlIFJvbmEgU3BlY2lhbCBpcyBmb3IgYWxsIHBlb3BsZSB3aG8gd2FudCB0byBleHBlcmllbmNlIGEgZGVsaWNhdGUgaW5zaWdodCBpbnRvIGF3ZSBzcHJlYWRpbmcsIHBhbmRlbWljIGNhdXNpbmcgYW5kIHBhdGhvZ2VuaWMgZm9vZHMuIFRoZSBSb25hIFNwZWNpYWwgaXMgc2ltcGxlXG4gICAgdG8gbWFrZSBidXQgaW5jcmVkaWJseSB1bmlxdWUgYmVjYXVzZSBzb21laG93IHBlb3BsZSBkb24ndCB0cnkgdGhpcyBvdXQgYW55bW9yZS4gQmVjb21lIG9uZSBvZiB0aGUgZmV3IHdobyBhcmUgZWFnZXIgdG8gdHJ5LmBcbiAgICB9XG5cbiAgICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdExhbmcudmFsdWUgPT09IFwiaXRcIikge1xuICAgICAgICAgICAgbWVudUhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0lsIE1lbnUnO1xuICAgICAgICAgICAgbWVudTFUZXh0LnRleHRDb250ZW50ID0gXCJMYSBQaXp6YSBNYXJnaGVyaXRhIMOoIHVuIGNsYXNzaWNvIGl0YWxpYW5vIHBlciBsZSBwZXJzb25lIGNoZSBub24gdm9nbGlvbm8gYXNzdW1lcmUgdGFudGUgY2Fsb3JpZS4gVmllbmUgc2Vydml0byBjb24gYmFzaWxpY28gZXh0cmEgc29wcmEgZSBvdnZpYW1lbnRlIGNvbiB0YW50byBjdW9yZSBlIHBhc3Npb25lLlwiO1xuICAgICAgICAgICAgbWVudTJUZXh0LnRleHRDb250ZW50ID0gJ0Nvbm9zY2l1dGEgYW5jaGUgY29tZSBzZmluY2lvbmUsIGxhIHBpenphIGFsbGEgc2ljaWxpYW5hIGhhIHVuYSBjcm9zdGEgc3Blc3NhIGRhbGxhIGNvbnNpc3RlbnphIHNvZmZpY2UgZSBzb2ZmaWNlLiBWaWVuZSBjb3R0byBpbiB1bmEgdGVnbGlhIGRpIGZvcm1hIHJldHRhbmdvbGFyZSwgY29uZGl0byBjb24gc2Fsc2EgZGkgcG9tb2Rvcm8sIGFjY2l1Z2hlLCBjaXBvbGxlLCBvcmlnYW5vIGUgZm9ybWFnZ2lvIGRpIHBlY29yYSBhIHBhc3RhIGR1cmEuJztcbiAgICAgICAgICAgIG1lbnUzVGV4dC50ZXh0Q29udGVudCA9IFwiTGEgUGl6emEgRnVuZ2hpIMOoIHVuYSBQaXp6YSBmYW1vc2EgaW4gdHV0dG8gaWwgbW9uZG8uIExhIFBpenphIEZ1bmdoaSDDqCBjb25kaXRhIGNvbiBpIG1pZ2xpb3JpIGZ1bmdoaSBhcm9tYXRpY2ksIHN1Y2Nvc2EgbW96emFyZWxsYSBlIGZvcm1hZ2dpIEVkYW0gZSByaWZpbml0YSBjb24gdW4gY29udG9ybm8gZGkgZXJiZS5cIjtcbiAgICAgICAgICAgIG1lbnU0VGV4dC50ZXh0Q29udGVudCA9IFwiTGEgUGl6emEgU2FsYW1lIMOoIHVuJ2FsdHJhIFBpenphIGNsYXNzaWNhIGUgYXBwcmV6emF0YS4gVmllbmUgc2Vydml0byBjb24gcG9tb2RvcmluaSwgbW96emFyZWxsYSBlIGZldHRlIGRpIHNhbGFtZSBwaWNjYW50ZS5cIjtcbiAgICAgICAgICAgIG1lbnU1VGV4dC50ZXh0Q29udGVudCA9ICdVbiBjYWx6b25lIMOoIHVuIGZhdHR1cmF0byBpdGFsaWFubyBhbCBmb3JubywgZmF0dG8gY29uIHBhc3RhIGxpZXZpdGF0YS4gSGEgYXZ1dG8gb3JpZ2luZSBhIE5hcG9saS4gSWwgbm9zdHJvIGNhbHpvbmUgw6ggZmF0dG8gY29uIHBhc3RhIGRpIHBhbmUgc2FsYXRhLCBjb3R0YSBhbCBmb3JubyBlZCDDqCBmYXJjaXRvIGNvbiBzYWxhbWUsIG1venphcmVsbGEsIHJpY290dGEgZSBwYXJtaWdpYW5vLCBvbHRyZSBhZCB1biB1b3ZvLic7XG4gICAgICAgICAgICBtZW51NlRleHQudGV4dENvbnRlbnQgPSBcIkdsaSBzcGFnaGV0dGkgYWxsYSBib2xvZ25lc2Ugc29ubyBjb3N0aXR1aXRpIGRhIHNwYWdoZXR0aSBjb24gcmFnw7kgaXRhbGlhbm8gKHN1Z28gZGkgY2FybmUpIGEgYmFzZSBkaSBjYXJuZSBtYWNpbmF0YSwgcGFuY2V0dGEgZSBwb21vZG9yaSwgc2Vydml0aSBjb24gcGFybWlnaWFuby4gR2xpIHNwYWdoZXR0aSBhbGxhIGJvbG9nbmVzZSBzb25vIHVubyBkZWkgcHJpbWkgcGlhdHRpIHBpw7kgYXBwcmV6emF0aSBmdW9yaSBkYWxsJ0l0YWxpYSBlIG92dmlhbWVudGUgbm9uIHBvc3Nvbm8gbWFuY2FyZSBxdWkgbmVsIG5vc3RybyBtZW51LlwiO1xuICAgICAgICAgICAgc3BlY2lhbHR5LnRleHRDb250ZW50ID0gJ0lsIG5vc3RybyBTcGVjaWFsZSBvbm9yYXJpbyBkZWxsYSBDYXNhJztcbiAgICAgICAgICAgIHJvbmFTcGVjaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnSWwgZmFtaWdlcmF0byBSb25hIFNwZWNpYWxlJztcbiAgICAgICAgICAgIHJvbmFTcGVjaWFsVGV4dC50ZXh0Q29udGVudCA9IGBMbyBTcGVjaWFsZSBSb25hIMOoIHBlciB0dXR0ZSBsZSBwZXJzb25lIGNoZSB2b2dsaW9ubyBzcGVyaW1lbnRhcmUgdW5hIHZpc2lvbmUgZGVsaWNhdGEgZGVsbGEgZGlmZnVzaW9uZSBkZWxsbyBzdHVwb3JlLCBkZWdsaSBhbGltZW50aSBjaGUgY2F1c2FubyBwYW5kZW1pZSBlIHBhdG9nZW5pLiBMbyBTcGVjaWFsZSBSb25hIMOoIHNlbXBsaWNlXG4gICAgICAgIGRhIHJlbmRlcmUgbWEgaW5jcmVkaWJpbG1lbnRlIHVuaWNvIHBlcmNow6kgaW4gcXVhbGNoZSBtb2RvIGxlIHBlcnNvbmUgbm9uIGxvIHByb3Zhbm8gcGnDuS4gRGl2ZW50YSB1bm8gZGVpIHBvY2hpIGRlc2lkZXJvc2kgZGkgcHJvdmFyZS5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVIZWFkbGluZS50ZXh0Q29udGVudCA9ICdUaGUgTWVudSc7XG4gICAgICAgICAgICBtZW51MVRleHQudGV4dENvbnRlbnQgPSBcIlRoZSBQaXp6YSBNYXJnaGVyaXRhIGlzIGFuIEl0YWxpYW4gY2xhc3NpYyBmb3IgcGVvcGxlIHdobyBkb24ndCB3YW50IHRvIGdhaW4gYXMgbXVjaCBjYWxvcmllcy4gSXQgaXMgc2VydmVkIHdpdGggZXh0cmEgYmFzaWwgb24gdG9wIGFuZCBvZiBjb3Vyc2Ugd2l0aCBhIGxvdCBvZiBoZWFydCBhbmQgcGFzc2lvbi5cIjtcbiAgICAgICAgICAgIG1lbnUyVGV4dC50ZXh0Q29udGVudCA9ICdBbHNvIGtub3duIGFzIHNmaW5jaW9uZSwgU2ljaWxpYW4tc3R5bGUgcGl6emEgaGFzIGEgdGhpY2sgY3J1c3Qgd2l0aCBhIGZsdWZmeSwgc3BvbmdlLWxpa2UgY29uc2lzdGVuY3kuIEl0IGlzIGJha2VkIGluIGEgcmVjdGFuZ3VsYXIgc2hhcGVkIHBhbiwgdG9wcGVkIHdpdGggdG9tYXRvIHNhdWNlLCBhbmNob3ZpZXMsIG9uaW9ucywgb3JlZ2FubywgYW5kIGEgaGFyZCBzaGVlcOKAmXMgbWlsayBjaGVlc2UuJztcbiAgICAgICAgICAgIG1lbnUzVGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgRnVuZ2hpIGlzIGEgd29ybGQgZmFtb3VzIFBpenphLiBUaGUgUGl6emEgRnVuZ2hpIGlzIHRvcHBlZCB3aXRoIHRoZSBmaW5lc3QgYXJvbWF0aWMgbXVzaHJvb21zLCBqdWljeSBtb3p6YXJlbGxhIGFuZCBFZGFtIGNoZWVzZXMsIGFuZCBmaW5pc2hlZCB3aXRoIGEgaGVyYiBnYXJuaXNoLic7XG4gICAgICAgICAgICBtZW51NFRleHQudGV4dENvbnRlbnQgPSAnVGhlIFBpenphIFNhbGFtaSBpcyBhbm90aGVyIGNsYXNzaWMgYW5kIHBvcHVsYXIgUGl6emEuIEl0IGlzIHNldmVkIHdpdGggdG9tYXRvZXMsIG1venphcmVsbGEgYW5kIHNwaWN5IHNhbGFtaSBzbGljZXMuJztcbiAgICAgICAgICAgIG1lbnU1VGV4dC50ZXh0Q29udGVudCA9ICdBIGNhbHpvbmUgaXMgYW4gSXRhbGlhbiBvdmVuLWJha2VkIHR1cm5vdmVyLCBtYWRlIHdpdGggbGVhdmVuZWQgZG91Z2guIEl0IG9yaWdpbmF0ZWQgaW4gTmFwbGVzLiBPdXIgY2Fsem9uZSBpcyBtYWRlIGZyb20gc2FsdGVkIGJyZWFkIGRvdWdoLCBiYWtlZCBpbiBhbiBvdmVuIGFuZCBpcyBzdHVmZmVkIHdpdGggc2FsYW1pLCBtb3p6YXJlbGxhLCByaWNvdHRhIGFuZCBQYXJtZXNhbiwgYXMgd2VsbCBhcyBhbiBlZ2cuJztcbiAgICAgICAgICAgIG1lbnU2VGV4dC50ZXh0Q29udGVudCA9IFwiU3BhZ2hldHRpIGJvbG9nbmVzZSBjb25zaXN0cyBvZiBzcGFnaGV0dGkgd2l0aCBhbiBJdGFsaWFuIHJhZ8O5IChtZWF0IHNhdWNlKSBtYWRlIHdpdGggbWluY2VkIGJlZWYsIGJhY29uIGFuZCB0b21hdG9lcywgc2VydmVkIHdpdGggUGFybWVzYW4gY2hlZXNlLiBTcGFnaGV0dGkgYm9sb2duZXNlIGlzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHBhc3RhIGRpc2hlcyBlYXRlbiBvdXRzaWRlIG9mIEl0YWx5IGFuZCBvZiBjb3Vyc2UgaXQgY2FuJ3QgYmUgbWlzc2luZyBoZXJlIG9uIG91ciBtZW51LlwiO1xuICAgICAgICAgICAgc3BlY2lhbHR5LnRleHRDb250ZW50ID0gJ091ciBob25vcmFyeSBIb3VzZSBTcGVjaWFsJztcbiAgICAgICAgICAgIHJvbmFTcGVjaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGluZmFtb3VzIFJvbmEgU3BlY2lhbCc7XG4gICAgICAgICAgICByb25hU3BlY2lhbFRleHQudGV4dENvbnRlbnQgPSBgVGhlIFJvbmEgU3BlY2lhbCBpcyBmb3IgYWxsIHBlb3BsZSB3aG8gd2FudCB0byBleHBlcmllbmNlIGEgZGVsaWNhdGUgaW5zaWdodCBpbnRvIGF3ZSBzcHJlYWRpbmcsIHBhbmRlbWljIGNhdXNpbmcgYW5kIHBhdGhvZ2VuaWMgZm9vZHMuIFRoZSBSb25hIFNwZWNpYWwgaXMgc2ltcGxlXG4gICAgICAgIHRvIG1ha2UgYnV0IGluY3JlZGlibHkgdW5pcXVlIGJlY2F1c2Ugc29tZWhvdyBwZW9wbGUgZG9uJ3QgdHJ5IHRoaXMgb3V0IGFueW1vcmUuIEJlY29tZSBvbmUgb2YgdGhlIGZldyB3aG8gYXJlIGVhZ2VyIHRvIHRyeS5gXG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSAnLi9ET01sb2FkZXIuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBpbnRlcmFjdFdpdGhET00gPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHNob3dUYWJNZW51KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLmhvbWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICAgICAgICAgIG9wdGlvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLm1lbnUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbi5jb250YWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdExpbmsnKTtcbiAgICAgICAgICAgICAgICBvcHRpb24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvcHRpb24zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIgLy8gT3B0aW9uYWw6IFNtb290aCBzY3JvbGxpbmcgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaG93VGFiTWVudSB9O1xufSkoKTtcblxuaW50ZXJhY3RXaXRoRE9NLnNob3dUYWJNZW51KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9