/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/container.html":
/*!**************************************!*\
  !*** ./src/templates/container.html ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"container\\\">\\n    <div class=\\\"theme\\\">\\n        <div class=\\\"loader\\\" style=\\\"display: none;\\\"></div>\\n        <div class=\\\"btn-close js-close\\\">+</div>\\n        <div class=\\\"content\\\">\\n            {{#def.landing || ''}}\\n            {{#def.register || ''}}\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/container.html?");

/***/ }),

/***/ "./src/templates/landing.html":
/*!************************************!*\
  !*** ./src/templates/landing.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"page page-landing\\\">\\n    <img class=\\\"landing_image\\\"/>\\n    <div class=\\\"title\\\">\\n        {{=it.loginRegister}}\\n    </div>\\n    <div class=\\\"sub-title\\\">\\n        <p>{{=it.enterYourEmailToContinue}}</p>\\n    </div>\\n    <div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n    <div class=\\\"inputs-container \\\">\\n        <input class=\\\"input-text\\\" name=\\\"email\\\" placeholder=\\\"{{=it.yourEmail}}\\\" type=\\\"email\\\">\\n        {{? it.hasSocialLogin }}\\n            <div class=\\\"email-validate\\\" name=\\\"validate\\\">OK</div>\\n        {{?? true }}{{?}}\\n    </div>\\n    {{? it.hasSocialLogin }}\\n        <div>\\n            <div class=\\\"or-social-login\\\">{{=it.or}}</div>\\n            <a href=\\\"#\\\" class=\\\"fb btn\\\">\\n                <i class=\\\"fa fa-facebook fa-fw\\\"></i> Login with Facebook\\n            </a>\\n            <a href=\\\"#\\\" class=\\\"google btn\\\"><i class=\\\"fa fa-google fa-fw\\\"></i> Login with Google+\\n            </a>\\n        </div>\\n    {{?? true }}\\n        <div class=\\\"button\\\">\\n            <button class=\\\"btn btn-primary\\\" name=\\\"validate\\\" disabled=\\\"\\\">{{=it.validate}}</button>\\n        </div>\\n    {{?}}\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/landing.html?");

/***/ }),

/***/ "./src/templates/register.html":
/*!*************************************!*\
  !*** ./src/templates/register.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"page page-register\\\">\\n    <img class=\\\"landing_image\\\"/>\\n    <div class=\\\"title\\\">\\n        {{=it.createAccount}}\\n    </div>\\n    <div class=\\\"subtitle text t-4\\\">\\n        <p>{{=it.fillInfoToCreateAccount}}</p>\\n    </div>\\n    <div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n    <form action=\\\"javascript:void(0);\\\" class=\\\"inputs-container\\\" dataRegisterForm=\\\"\\\">\\n        {{? it.hasGender }}\\n            <div class=\\\"gender\\\">\\n                <input data-register-gender=\\\"\\\" type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"male\\\" value=\\\"male\\\" checked=\\\"\\\" data-wg-notranslate=\\\"manual\\\">\\n                <label class=\\\"input-radio__label\\\" for=\\\"male\\\">Monsieur</label>\\n                <input data-register-gender=\\\"\\\" type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"female\\\" value=\\\"female\\\" data-wg-notranslate=\\\"manual\\\">\\n            <label class=\\\"input-radio__label\\\" for=\\\"female\\\">Madame</label>\\n            </div>\\n        {{?? true }}{{?}}\\n        <input class=\\\"input-text\\\" name=\\\"email\\\" placeholder=\\\"{{=it.yourEmail}}\\\" type=\\\"email\\\">\\n        <input class=\\\"input-text\\\" name=\\\"firstName\\\" placeholder=\\\"{{=it.yourFirstName}}\\\" type=\\\"text\\\">\\n        <input class=\\\"input-text\\\" name=\\\"lastName\\\" placeholder=\\\"{{=it.yourLastName}}\\\" type=\\\"text\\\">\\n        <input class=\\\"input-text\\\" name=\\\"password\\\" placeholder=\\\"{{=it.yourPassword}}\\\" type=\\\"password\\\">\\n        {{? it.hasPasswordVerification }}\\n            <input class=\\\"input-text\\\" name=\\\"confirmPassword\\\" placeholder=\\\"{{=it.confirmYourPassword}}\\\" type=\\\"password\\\">\\n        {{?? true }}{{?}}\\n        {{? it.hasBirthDate }}\\n            <div class=\\\"birth-date\\\">\\n                <div class=\\\"birth-date-text\\\">\\n                    Date de naissance\\n                </div>\\n                <input placeholder=\\\"jj\\\" class=\\\"input-text input__birth\\\" data-register-day=\\\"\\\" type=\\\"number\\\" min=\\\"01\\\" max=\\\"31\\\">\\n                <input placeholder=\\\"mm\\\" class=\\\"input-text input__birth\\\" data-register-month=\\\"\\\" type=\\\"number\\\" min=\\\"01\\\" max=\\\"12\\\">\\n                <input placeholder=\\\"aaaa\\\" class=\\\"input-text input__birth\\\" data-register-year=\\\"\\\" type=\\\"number\\\" min=\\\"1900\\\" max=\\\"2020\\\">\\n            </div>\\n        {{?? true }}{{?}}\\n        <div class=\\\"button\\\">\\n            <button class=\\\"btn btn-primary\\\" disabled=\\\"\\\">{{=it.createAccount}}</button>\\n        </div>\\n        <div class=\\\"checkbox-container\\\">\\n            <input class=\\\"checkbox\\\" data-register-newscheck=\\\"\\\" name=\\\"acceptsMarketing\\\" type=\\\"checkbox\\\">\\n            <div class=\\\"text t-5 uppercase pointer\\\" data-register-newstext=\\\"\\\">\\n                {{=it.subscribeNewsletter}}\\n            </div>\\n        </div>\\n    </form>   \\n</div> \\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register.html?");

/***/ }),

/***/ "./src/templates/root.html":
/*!*********************************!*\
  !*** ./src/templates/root.html ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<h2>Here is the root page2</h2>\\n{{#def.container}}\\n<form action=\\\"\\\" style=\\\"width: 300px\\\">\\n    <textarea name=\\\"\\\" class=\\\"js-json-code\\\" cols=\\\"30\\\" rows=\\\"10\\\" style=\\\"white-space: break-spaces;\\\"></textarea>\\n    <input type=\\\"button\\\" class=\\\"btn btn-primary js-load-json\\\" value=\\\"load json from textarea\\\">\\n    <hr> <hr>\\n    <div class=\\\"js-load-json-theme\\\">\\n        <h3>Load conf with a fetch request</h3>\\n        <input type=\\\"button\\\" class=\\\"btn btn-primary \\\" value=\\\"franklin\\\" style=\\\"margin: 10px 0;\\\">\\n        <input type=\\\"button\\\" class=\\\"btn btn-primary\\\" value=\\\"balzac\\\" style=\\\"margin: 10px 0;\\\">\\n        <input type=\\\"button\\\" class=\\\"btn btn-primary\\\" value=\\\"respire\\\" style=\\\"margin: 10px 0;\\\">\\n    </div>\\n</form>\\n\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/root.html?");

/***/ }),

/***/ "./src/configs/pages-id.yml":
/*!**********************************!*\
  !*** ./src/configs/pages-id.yml ***!
  \**********************************/
/*! default exports */
/*! export APP_ID [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CONTAINER_ID [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LANDING_ID [provided] [no usage info] [missing usage info prevents renaming] */
/*! export REGISTER_ID [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ROOT_ID [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SIGN_IN [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"APP_ID\\\":\\\"appit_asdsas\\\",\\\"ROOT_ID\\\":\\\"pagetmpl\\\",\\\"CONTAINER_ID\\\":\\\"container\\\",\\\"LANDING_ID\\\":\\\"landing\\\",\\\"REGISTER_ID\\\":\\\"register\\\",\\\"SIGN_IN\\\":\\\"signin\\\"}\");\n\n//# sourceURL=webpack://stag-dotjs/./src/configs/pages-id.yml?");

/***/ }),

/***/ "./public/data/custom.json":
/*!*********************************!*\
  !*** ./public/data/custom.json ***!
  \*********************************/
/*! default exports */
/*! export _comment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export page-landing [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export page-register [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export theme [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --align-items [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --background-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --border [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --button-background-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --button-disabled-background-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --button-disabled-opacity [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --content-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --error-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --hint-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --input-margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --large-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --medium-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --normal-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --placeholder-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --primary-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --primary-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --secondary-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --secondary-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --small-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --subtitle-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --tertiary-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --tertiary-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-font-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-font-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-font-weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-letter-spacing [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-line-height [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --title-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export --titles-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"_comment\\\":\\\"This file is autogenerated (see yaml2json.js)\\\",\\\"theme\\\":{\\\"--align-items\\\":\\\"center\\\",\\\"--background-color\\\":\\\"#fff\\\",\\\"--image\\\":\\\"none\\\",\\\"--primary-text-color\\\":\\\"#0d3c32\\\",\\\"--secondary-text-color\\\":\\\"#000\\\",\\\"--tertiary-text-color\\\":\\\"#000\\\",\\\"--error-text-color\\\":\\\"#f00\\\",\\\"--hint-text-color\\\":\\\"#333\\\",\\\"--primary-color\\\":\\\"#000\\\",\\\"--secondary-color\\\":\\\"#000\\\",\\\"--tertiary-color\\\":\\\"#777\\\",\\\"--large-text-size\\\":\\\"2.5em\\\",\\\"--medium-text-size\\\":\\\"1.8em\\\",\\\"--normal-text-size\\\":\\\"16px\\\",\\\"--small-text-size\\\":\\\"0.8em\\\",\\\"--title-text-transform\\\":\\\"uppercase\\\",\\\"--title-font-size\\\":\\\"1.875rem\\\",\\\"--title-font-family\\\":\\\"\\\\\\\"Helvetica Neue\\\\\\\", Arial, \\\\\\\"Lucida Grande\\\\\\\", sans-serif\\\",\\\"--title-letter-spacing\\\":\\\"0.5px\\\",\\\"--title-font-weight\\\":700,\\\"--title-line-height\\\":\\\"36px\\\",\\\"--margin\\\":\\\"0.1em\\\",\\\"--padding\\\":\\\"0.1em\\\",\\\"--border\\\":\\\"none\\\",\\\"--titles-family\\\":\\\"serif\\\",\\\"--subtitle-family\\\":\\\"...\\\",\\\"--content-family\\\":\\\"serif\\\",\\\"--placeholder-text-transform\\\":\\\"uppercase\\\",\\\"--input-margin\\\":\\\"13px\\\",\\\"--button-background-color\\\":\\\"#de7154\\\",\\\"--button-disabled-background-color\\\":\\\"#c6c1be\\\",\\\"--button-disabled-opacity\\\":1},\\\"page-landing\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-Chat-1.png?v=1595510115\\\\\\\")\\\",\\\"--image-width\\\":\\\"50%\\\"},\\\"page-register\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-16.png?v=1595509535\\\\\\\")\\\",\\\"--image-width\\\":\\\"30%\\\"}}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/custom.json?");

/***/ }),

/***/ "./public/data/text.json":
/*!*******************************!*\
  !*** ./public/data/text.json ***!
  \*******************************/
/*! default exports */
/*! export confirmYourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enterEmailPswToConnect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enterYourEmailToContinue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fillInfoToCreateAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasBirthDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasGender [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasPasswordVerification [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasSocialLogin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login-register [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginRegister [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signIn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signUp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subscribeNewsletter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourFirstName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourLastName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export yourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"hasGender\\\":false,\\\"hasSocialLogin\\\":false,\\\"hasPasswordVerification\\\":true,\\\"hasBirthDate\\\":false,\\\"createAccount\\\":\\\"Inscription\\\",\\\"loginRegister\\\":\\\"Connexion / Inscription\\\",\\\"enterYourEmailToContinue\\\":\\\"Renseignez votre adresse email pour continuer.\\\",\\\"yourEmail\\\":\\\"Votre email\\\",\\\"signIn\\\":\\\"Se Connecter\\\",\\\"signUp\\\":\\\"S'inscrire\\\",\\\"fillInfoToCreateAccount\\\":\\\"Renseignez vos informations pour créer votre compte Franklin.\\\",\\\"login\\\":\\\"Connexion\\\",\\\"enterEmailPswToConnect\\\":\\\"Renseignez votre adresse email et votre mot de passe pour vous connecter.\\\",\\\"validate\\\":\\\"Valider\\\",\\\"login-register\\\":\\\"Connexion / Inscription\\\",\\\"yourFirstName\\\":\\\"Votre nom\\\",\\\"yourLastName\\\":\\\"Your last name\\\",\\\"yourPassword\\\":\\\"Votre mot de passe\\\",\\\"confirmYourPassword\\\":\\\"Confirmez votre mot de passe\\\",\\\"subscribeNewsletter\\\":\\\"Je m'inscris à la newsletter Franklin\\\"}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/text.json?");

/***/ }),

/***/ "./src/actions/dashboard.js":
/*!**********************************!*\
  !*** ./src/actions/dashboard.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const $ = document.querySelector.bind(document);\nconst { APP_ID } = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\nconst utils = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst load = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\n\nconst init = () => {\n    $(`#${APP_ID} .js-load-json-theme`).addEventListener(\"click\", uploadTheme);\n    $(`#${APP_ID} .js-load-json`).addEventListener(\"click\", loadFromTextarea);\n};\n\nconst loadFromTextarea = (e) => {\n    const css = e.target.previousElementSibling.value;\n    utils.updateCss(JSON.parse(css));\n};\n\nconst uploadTheme = async (e) => {\n    const theme = e.target.value;\n    const text = await fetch(`data/${theme}-text.json`);\n    const style = await fetch(`data/${theme}-custom.json`);\n    const styleJson = await style.json();\n    utils.updatePages(await text.json());\n    utils.updateCss(styleJson);\n    load.loadActions();\n    $(`#${APP_ID} .page-landing`).style.setProperty(\"display\", \"block\");\n    $(`#${APP_ID} .js-json-code`).value = JSON.stringify(styleJson);\n};\n\nmodule.exports = {\n    init: init,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/dashboard.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { updatePages } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { updateCss } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { APP_ID } = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\nconst { loadActions } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\nconst css = __webpack_require__(/*! ../../public/data/custom.json */ \"./public/data/custom.json\");\nconst text = __webpack_require__(/*! ../../public/data/text.json */ \"./public/data/text.json\");\nconst $ = document.querySelector.bind(document);\n\nglobalThis.addEventListener(\"load\", () => {\n    updatePages(text);\n    updateCss(css);\n    loadActions();\n    $(`#${APP_ID} .page-landing`).style.setProperty(\"display\", \"block\");\n});\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/index.js?");

/***/ }),

/***/ "./src/actions/landing.js":
/*!********************************!*\
  !*** ./src/actions/landing.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 26:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { APP_ID } = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\nconst $ = document.querySelector.bind(document);\n\nconst disableBtn = (btn) => btn.setAttribute(\"disabled\", \"true\");\n\nconst activeBtn = (btn, target) => {\n    btn.removeAttribute(\"disabled\");\n    sessionStorage.setItem(\"email\", target.value);\n};\nconst toggleButton = ({ target }) => {\n    const btn = $(\"button\");\n    const isEmail = /\\S+@\\S+\\.\\S+/.test(target.value);\n    isEmail ? activeBtn(btn, target) : disableBtn(btn);\n};\n\nconst register = () => {\n    $(`#${APP_ID} .page`).style.setProperty(\"display\", \"none\");\n    $(`#${APP_ID} .page-register`).style.setProperty(\"display\", \"block\");\n};\n\nconst init = () => {\n    $(`#${APP_ID} .input-text`).addEventListener(\"input\", toggleButton);\n    $(`#${APP_ID} [name='validate']`).addEventListener(\"click\", register);\n};\n\nmodule.exports = {\n    init: init,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/landing.js?");

/***/ }),

/***/ "./src/actions/load.js":
/*!*****************************!*\
  !*** ./src/actions/load.js ***!
  \*****************************/
/*! default exports */
/*! export loadActions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { init: initDashboard } = __webpack_require__(/*! ./dashboard */ \"./src/actions/dashboard.js\");\nconst { init: initLanding } = __webpack_require__(/*! ./landing */ \"./src/actions/landing.js\");\nconst { APP_ID } = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\nconst $ = document.querySelector.bind(document);\n\nconst initContainer = () => {\n    const closeApp = () => ($(`#${APP_ID}`).innerHTML = \"\");\n    $(`#${APP_ID} .js-close`).addEventListener(\"click\", closeApp);\n};\n\nexports.loadActions = () => {\n    initDashboard();\n    initLanding();\n    initContainer();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/load.js?");

/***/ }),

/***/ "./src/doT.js":
/*!********************!*\
  !*** ./src/doT.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = {\n    template,\n    compile,\n    setDelimiters,\n};\n\nconst templateSettings = {\n    argName: \"it\",\n    encoders: {},\n    selfContained: false,\n    strip: true,\n    internalPrefix: \"_val\",\n    encodersPrefix: \"_enc\",\n    delimiters: {\n        start: \"{{\",\n        end: \"}}\",\n    },\n};\n\n// depends on selfContained mode\nconst encoderType = {\n    false: \"function\",\n    true: \"string\",\n};\n\nconst defaultSyntax = {\n    evaluate: /\\{\\{([\\s\\S]+?(\\}?)+)\\}\\}/g,\n    interpolate: /\\{\\{=([\\s\\S]+?)\\}\\}/g,\n    typeInterpolate: /\\{\\{%([nsb])=([\\s\\S]+?)\\}\\}/g,\n    encode: /\\{\\{([a-z_$]+[\\w$]*)?!([\\s\\S]+?)\\}\\}/g,\n    use: /\\{\\{#([\\s\\S]+?)\\}\\}/g,\n    useParams: /(^|[^\\w$])def(?:\\.|\\[[\\'\\\"])([\\w$\\.]+)(?:[\\'\\\"]\\])?\\s*\\:\\s*([\\w$]+(?:\\.[\\w$]+|\\[[^\\]]+\\])*|\\\"[^\\\"]+\\\"|\\'[^\\']+\\'|\\{[^\\}]+\\}|\\[[^\\]]*\\])/g,\n    define: /\\{\\{##\\s*([\\w\\.$]+)\\s*(\\:|=)([\\s\\S]+?)#\\}\\}/g,\n    defineParams: /^\\s*([\\w$]+):([\\s\\S]+)/,\n    conditional: /\\{\\{\\?(\\?)?\\s*([\\s\\S]*?)\\s*\\}\\}/g,\n    iterate: /\\{\\{~\\s*(?:\\}\\}|([\\s\\S]+?)\\s*\\:\\s*([\\w$]+)\\s*(?:\\:\\s*([\\w$]+))?\\s*\\}\\})/g,\n};\n\nlet currentSyntax = { ...defaultSyntax };\n\nconst TYPES = {\n    n: \"number\",\n    s: \"string\",\n    b: \"boolean\",\n};\n\nfunction resolveDefs(c, syn, block, def) {\n    return (typeof block === \"string\" ? block : block.toString())\n        .replace(syn.define, (_, code, assign, value) => {\n            if (code.indexOf(\"def.\") === 0) {\n                code = code.substring(4);\n            }\n            if (!(code in def)) {\n                if (assign === \":\") {\n                    value.replace(syn.defineParams, (_, param, v) => {\n                        def[code] = { arg: param, text: v };\n                    });\n                    if (!(code in def)) def[code] = value;\n                } else {\n                    new Function(\"def\", `def['${code}']=${value}`)(def);\n                }\n            }\n            return \"\";\n        })\n        .replace(syn.use, (_, code) => {\n            code = code.replace(syn.useParams, (_, s, d, param) => {\n                if (def[d] && def[d].arg && param) {\n                    const rw = unescape(\n                        (d + \":\" + param).replace(/'|\\\\/g, \"_\")\n                    );\n                    def.__exp = def.__exp || {};\n                    def.__exp[rw] = def[d].text.replace(\n                        new RegExp(`(^|[^\\\\w$])${def[d].arg}([^\\\\w$])`, \"g\"),\n                        `$1${param}$2`\n                    );\n                    return s + `def.__exp['${rw}']`;\n                }\n            });\n            const v = new Function(\"def\", \"return \" + code)(def);\n            return v ? resolveDefs(c, syn, v, def) : v;\n        });\n}\n\nfunction unescape(code) {\n    return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n}\n\nfunction template({ tmpl, c = undefined, def }) {\n    const ds = c && c.delimiters;\n    const syn = ds && !sameDelimiters(ds) ? getSyntax(ds) : currentSyntax;\n    c = c ? { ...templateSettings, ...c } : templateSettings;\n    let sid = 0;\n    let str = resolveDefs(c, syn, tmpl, def || {});\n    const needEncoders = {};\n\n    str = (\n        \"let out='\" +\n        (c.strip\n            ? str\n                  .trim()\n                  .replace(/[\\t ]+(\\r|\\n)/g, \"\\n\") // remove trailing spaces\n                  .replace(/(\\r|\\n)[\\t ]+/g, \" \") // leading spaces reduced to \" \"\n                  .replace(/\\r|\\n|\\t|\\/\\*[\\s\\S]*?\\*\\//g, \"\") // remove breaks, tabs and JS comments\n            : str\n        )\n            .replace(/'|\\\\/g, \"\\\\$&\")\n            .replace(syn.interpolate, (_, code) => `'+(${unescape(code)})+'`)\n            .replace(syn.typeInterpolate, (_, typ, code) => {\n                sid++;\n                const val = c.internalPrefix + sid;\n                const error = `throw new Error(\"expected ${TYPES[typ]}, got \"+ (typeof ${val}))`;\n                return `';const ${val}=(${unescape(\n                    code\n                )});if(typeof ${val}!==\"${TYPES[typ]}\") ${error};out+=${val}+'`;\n            })\n            .replace(syn.encode, (_, enc = \"\", code) => {\n                needEncoders[enc] = true;\n                code = unescape(code);\n                const e = c.selfContained ? enc : enc ? \".\" + enc : '[\"\"]';\n                return `'+${c.encodersPrefix}${e}(${code})+'`;\n            })\n            .replace(syn.conditional, (_, elseCase, code) => {\n                if (code) {\n                    code = unescape(code);\n                    return elseCase\n                        ? `';}else if(${code}){out+='`\n                        : `';if(${code}){out+='`;\n                }\n                return elseCase ? \"';}else{out+='\" : \"';}out+='\";\n            })\n            .replace(syn.iterate, (_, arr, vName, iName) => {\n                if (!arr) return \"';} } out+='\";\n                sid++;\n                const defI = iName ? `let ${iName}=-1;` : \"\";\n                const incI = iName ? `${iName}++;` : \"\";\n                const val = c.internalPrefix + sid;\n                return `';const ${val}=${unescape(\n                    arr\n                )};if(${val}){${defI}for (const ${vName} of ${val}){${incI}out+='`;\n            })\n            .replace(syn.evaluate, (_, code) => `';${unescape(code)}out+='`) +\n        \"';return out;\"\n    )\n        .replace(/\\n/g, \"\\\\n\")\n        .replace(/\\t/g, \"\\\\t\")\n        .replace(/\\r/g, \"\\\\r\")\n        .replace(/(\\s|;|\\}|^|\\{)out\\+='';/g, \"$1\")\n        .replace(/\\+''/g, \"\");\n\n    const args = Array.isArray(c.argName) ? properties(c.argName) : c.argName;\n\n    if (Object.keys(needEncoders).length === 0) {\n        return try_(() => new Function(args, str));\n    }\n    checkEncoders(c, needEncoders);\n    str = `return function(${args}){${str}};`;\n    return try_(() =>\n        c.selfContained\n            ? new Function((str = addEncoders(c, needEncoders) + str))()\n            : new Function(c.encodersPrefix, str)(c.encoders)\n    );\n\n    function try_(f) {\n        try {\n            return f();\n        } catch (e) {\n            console.log(\"Could not create a template function: \" + str);\n            throw e;\n        }\n    }\n}\n\nfunction compile(tmpl, def) {\n    return template(tmpl, null, def);\n}\n\nfunction sameDelimiters({ start, end }) {\n    const d = templateSettings.delimiters;\n    return d.start === start && d.end === end;\n}\n\nfunction setDelimiters(delimiters) {\n    if (sameDelimiters(delimiters)) {\n        console.log(\"delimiters did not change\");\n        return;\n    }\n    currentSyntax = getSyntax(delimiters);\n    templateSettings.delimiters = delimiters;\n}\n\nfunction getSyntax({ start, end }) {\n    start = escape(start);\n    end = escape(end);\n    const syntax = {};\n    for (const syn in defaultSyntax) {\n        const s = defaultSyntax[syn]\n            .toString()\n            .replace(/\\\\\\{\\\\\\{/g, start)\n            .replace(/\\\\\\}\\\\\\}/g, end);\n        syntax[syn] = strToRegExp(s);\n    }\n    return syntax;\n}\n\nconst escapeCharacters = /([{}[\\]()<>\\\\\\/^$\\-.+*?!=|&:])/g;\n\nfunction escape(str) {\n    return str.replace(escapeCharacters, \"\\\\$1\");\n}\n\nconst regexpPattern = /^\\/(.*)\\/([\\w]*)$/;\n\nfunction strToRegExp(str) {\n    const [, rx, flags] = str.match(regexpPattern);\n    return new RegExp(rx, flags);\n}\n\nfunction properties(args) {\n    return args.reduce((s, a, i) => s + (i ? \",\" : \"\") + a, \"{\") + \"}\";\n}\n\nfunction checkEncoders(c, encoders) {\n    const typ = encoderType[c.selfContained];\n    for (const enc in encoders) {\n        const e = c.encoders[enc];\n        if (!e) throw new Error(`unknown encoder \"${enc}\"`);\n        if (typeof e !== typ)\n            throw new Error(\n                `selfContained ${c.selfContained}: encoder type must be \"${typ}\"`\n            );\n    }\n}\n\nfunction addEncoders(c, encoders) {\n    let s = \"\";\n    for (const enc in encoders)\n        s += `const ${c.encodersPrefix}${enc}=${c.encoders[enc]};`;\n    return s;\n}\n\n\n//# sourceURL=webpack://stag-dotjs/./src/doT.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 21:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const rootTmpl = __webpack_require__(/*! ./root.html */ \"./src/templates/root.html\");\nconst containerTmpl = __webpack_require__(/*! ./container.html */ \"./src/templates/container.html\");\nconst landingTmpl = __webpack_require__(/*! ./landing.html */ \"./src/templates/landing.html\");\nconst registerTmpl = __webpack_require__(/*! ./register.html */ \"./src/templates/register.html\");\nconst {\n    ROOT_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    CONTAINER_ID,\n} = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\n\nconst getTemplate = ({ id, html }) =>\n    `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\nconst templates = [];\n\ntemplates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));\ntemplates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));\ntemplates.push(getTemplate({ id: LANDING_ID, html: landingTmpl }));\ntemplates.push(getTemplate({ id: REGISTER_ID, html: registerTmpl }));\n\nmodule.exports = { templates };\n\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! default exports */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updatePages } = __webpack_require__(/*! ./load-pages */ \"./src/utils/load-pages.js\");\nconst { updateCss } = __webpack_require__(/*! ./load-css */ \"./src/utils/load-css.js\");\n\nexports.updatePages = updatePages;\nexports.updateCss = updateCss;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/load-css.js":
/*!*******************************!*\
  !*** ./src/utils/load-css.js ***!
  \*******************************/
/*! default exports */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID } = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\n\nexports.updateCss = (cssVars) => {\n    let currentSelector = document.querySelector(`#${APP_ID}`);\n    (function traverse(obj, key) {\n        if (obj !== null && typeof obj == \"object\") {\n            Object.entries(obj).forEach(([key, value]) => traverse(value, key));\n        } else currentSelector.style.setProperty(key, obj);\n    })(cssVars);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-css.js?");

/***/ }),

/***/ "./src/utils/load-pages.js":
/*!*********************************!*\
  !*** ./src/utils/load-pages.js ***!
  \*********************************/
/*! default exports */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { templates } = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\nconst doT = __webpack_require__(/*! ../doT */ \"./src/doT.js\");\nconst id_pages = __webpack_require__(/*! ../configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\nconst { APP_ID, ROOT_ID, CONTAINER_ID, LANDING_ID, REGISTER_ID } = id_pages;\nconst $ = document.querySelector.bind(document);\n\nconst getDef = () => ({\n    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,\n    [LANDING_ID]: document.getElementById(LANDING_ID).text,\n    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,\n});\n\nconst appendTemplate = (e) => {\n    const elemDiv = document.createElement(\"div\");\n    elemDiv.innerHTML = e.trim();\n    document.body.appendChild(elemDiv);\n};\n\nconst getTemplate = (data) => {\n    templates.forEach(appendTemplate);\n    return doT.template({\n        tmpl: document.getElementById(ROOT_ID).text,\n        def: getDef(),\n    })(data);\n};\n\nexports.updatePages = (text) => {\n    $(`#${APP_ID}`).innerHTML = getTemplate(text);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-pages.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"/* Table of contents\\n\\n- Global styles\\n- Theme/Typography\\n- Pages\\n    3.1 Landing page\\n    3.2 Register page\\n    3.4 Sign-in page\\n- Modules\\n    3.1 social-login\\n    3.2 gender\\n    3.3 password-verification\\n- Components\\n    4.1 buttons\\n    4.2 inputs\\n*/\\n/*  ===================\\n    1. Global styles\\n    =================== */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/*  ===================\\n    2. Theme/Typography\\n    =================== */\\n.theme {\\n  background-color: var(--background-color);\\n  border-radius: 4px;\\n  color: var(--primary-text-color);\\n  padding: 22px;\\n  padding-bottom: 32px;\\n  position: relative;\\n  width: 500px;\\n}\\n\\n.container {\\n  align-items: center;\\n  background-color: rgba(90, 91, 91, 0.4);\\n  display: flex;\\n  height: 100%;\\n  justify-content: center;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 70%;\\n  z-index: 100;\\n}\\n\\n.content {\\n  margin: var(--margin);\\n  padding: var(--padding);\\n  text-align: var(--align-items);\\n}\\n\\n/*  ===================\\n    3. Pages\\n    =================== */\\n.page {\\n  display: none;\\n}\\n\\n/*  ===================\\n    3. Modules\\n    =================== */\\n/*  ===================\\n    4. Components\\n    =================== */\\n.btn-close {\\n  cursor: pointer;\\n  font-size: 40px;\\n  position: absolute;\\n  right: 14px;\\n  top: 0;\\n  transform: rotate(45deg);\\n}\\n\\n.title {\\n  font-family: var(--title-font-family);\\n  font-size: var(--title-font-size);\\n  font-weight: var(--title-font-weight);\\n  letter-spacing: 0.59px;\\n  letter-spacing: var(--title-letter-spacing);\\n  line-height: var(--title-line-height);\\n  text-transform: var(--title-text-transform);\\n}\\n\\n.sub-title {\\n  margin: 18px 0;\\n}\\n\\n::placeholder {\\n  font-size: var(--placeholder-font-size);\\n  text-transform: var(--placeholder-text-transform);\\n}\\n\\n/*  ===================\\n    Modules\\n    =================== */\\n.email-validate {\\n  cursor: pointer;\\n  display: inline;\\n  font-weight: 900;\\n  position: absolute;\\n  right: 40px;\\n}\\n\\n.or-social-login {\\n  margin: 15px 0;\\n}\\n\\n.landing_image {\\n  content: var(--image);\\n  width: var(--image-width);\\n}\\n\\n.gender {\\n  margin: 20px 0;\\n  text-align: left;\\n}\\n\\n.birth-date {\\n  align-items: center;\\n  display: flex;\\n}\\n.birth-date .birth-date-text {\\n  min-width: 40%;\\n}\\n\\n.fb {\\n  background-color: #3b5998;\\n  color: white;\\n}\\n\\n.google {\\n  background-color: #dd4b39;\\n  color: white;\\n}\\n\\n/*  ===================\\n    Components\\n    =================== */\\n.btn {\\n  border: none;\\n  color: #fff;\\n  cursor: pointer;\\n  padding: 10px;\\n  text-transform: uppercase;\\n  width: 100%;\\n}\\n\\n.btn.btn-primary {\\n  background-color: var(--button-background-color);\\n}\\n\\n.btn:disabled,\\n.btn[disabled] {\\n  background-color: var(--button-disabled-background-color);\\n  opacity: var(--button-disabled-opacity);\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-container {\\n  align-items: center;\\n  display: flex;\\n  margin-top: 14px;\\n}\\n\\n.mandatory-container {\\n  margin-top: 10px;\\n}\\n\\n.inputs-container {\\n  margin-bottom: 10px;\\n}\\n\\n.input-text {\\n  border-bottom: 1px solid;\\n  border-bottom-style: groove;\\n  border-left-style: hidden;\\n  border-right-style: hidden;\\n  border-top-style: hidden;\\n  font: 400 13.3333px Arial;\\n  margin-bottom: var(--input-margin);\\n  padding-left: 2px;\\n  width: 100%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://stag-dotjs/../../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://stag-dotjs/../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n__webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\nconst { APP_ID } = __webpack_require__(/*! ./configs/pages-id.yml */ \"./src/configs/pages-id.yml\");\n\nconst node = document.createElement(\"div\");\nnode.setAttribute(\"id\", APP_ID);\ndocument.body.appendChild(node);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/app.js?");
})();

/******/ })()
;