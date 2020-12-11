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

eval("// Module\nvar code = \"{{? it.isPopover }}\\n<div class=\\\"container popover\\\" style=\\\"display: none\\\">\\n    {{?? true }}\\n    <div class=\\\"container js-modal\\\" style=\\\"display: none\\\">\\n        {{?}}\\n        <div class=\\\"content\\\">\\n            <div class=\\\"loading\\\" style=\\\"display: none\\\">\\n                <div class=\\\"loading-icon\\\"></div>\\n            </div>\\n            <!-- <div class=\\\"edit-solid icon js-toggle-dashboard\\\"></div> -->\\n            <div class=\\\"btn-close js-close\\\">+</div>\\n            {{#def.landing }} {{#def.register }} {{#def.signin}}\\n            <div class=\\\"js-shopify-response\\\" style=\\\"display: none\\\"></div>\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/container.html?");

/***/ }),

/***/ "./src/templates/dashboard.html":
/*!**************************************!*\
  !*** ./src/templates/dashboard.html ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"{{#def.container}}\\n<div class=\\\"js-dashboard\\\" style=\\\"display: none\\\">\\n    <form action=\\\"\\\">\\n        <input\\n            type=\\\"button\\\"\\n            class=\\\"btn btn-primary js-load-from-textarea\\\"\\n            value=\\\"load json from textarea\\\"\\n        />\\n        <textarea\\n            class=\\\"js-custom-style\\\"\\n            style=\\\"width: 100%; max-width: 100%; height: 60vh; margin: 1rem 0\\\"\\n        ></textarea>\\n        <div class=\\\"js-load-default-theme\\\">\\n            <input\\n                type=\\\"button\\\"\\n                class=\\\"btn btn-primary\\\"\\n                value=\\\"franklin\\\"\\n                style=\\\"margin: 10px 0\\\"\\n            />\\n            <input\\n                type=\\\"button\\\"\\n                class=\\\"btn btn-primary\\\"\\n                value=\\\"balzac\\\"\\n                style=\\\"margin: 10px 0\\\"\\n            />\\n            <input\\n                type=\\\"button\\\"\\n                class=\\\"btn btn-primary\\\"\\n                value=\\\"respire\\\"\\n                style=\\\"margin: 10px 0\\\"\\n            />\\n            <input\\n                type=\\\"button\\\"\\n                class=\\\"btn btn-primary\\\"\\n                value=\\\"warehouse\\\"\\n                style=\\\"margin: 10px 0\\\"\\n            />\\n        </div>\\n    </form>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/dashboard.html?");

/***/ }),

/***/ "./src/templates/landing.html":
/*!************************************!*\
  !*** ./src/templates/landing.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image landing_image\\\" />\\n<div class=\\\"title\\\">{{=it.loginRegister}}</div>\\n<div class=\\\"sub-title\\\">{{=it.enterYourEmailToContinue}}</div>\\n<div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"inputs-container\\\">\\n    <div class=\\\"inputs-container\\\">\\n        {{? it.hasSocialLogin }}\\n        <input\\n            type=\\\"submit\\\"\\n            class=\\\"slider-icon\\\"\\n            style=\\\"\\n                background: none;\\n                border: none;\\n                font-weight: 900;\\n                cursor: pointer;\\n                position: absolute;\\n                right: 40px;\\n            \\\"\\n            disabled=\\\"\\\"\\n            value=\\\"OK\\\"\\n        />\\n        {{?? true }}{{?}}\\n        <input\\n            class=\\\"input-text {{? it.hasSocialLogin }} input-text-primary {{?? true}}{{?}}\\\"\\n            name=\\\"email\\\"\\n            placeholder=\\\"{{=it.yourEmail}}\\\"\\n            type=\\\"email\\\"\\n        />\\n    </div>\\n    {{? it.hasSocialLogin }}\\n    <div>\\n        <div class=\\\"or-social-login\\\">{{=it.or}}</div>\\n        <a href=\\\"#\\\" class=\\\"fb btn\\\">\\n            <i class=\\\"fa fa-facebook fa-fw\\\"></i> Login with Facebook\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"google btn\\\"\\n            ><i class=\\\"fa fa-google fa-fw\\\"></i> Login with Google+\\n        </a>\\n    </div>\\n    {{?? true }}\\n    <input\\n        type=\\\"submit\\\"\\n        class=\\\"btn btn-primary\\\"\\n        name=\\\"validate\\\"\\n        disabled=\\\"\\\"\\n        value=\\\"{{=it.validate}}\\\"\\n    />\\n    {{?}}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/landing.html?");

/***/ }),

/***/ "./src/templates/register-no-slides.html":
/*!***********************************************!*\
  !*** ./src/templates/register-no-slides.html ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"{{? it.hasGender }}\\n<div class=\\\"gender\\\">\\n    <input\\n        data-register-gender=\\\"\\\"\\n        type=\\\"radio\\\"\\n        name=\\\"gender\\\"\\n        id=\\\"male\\\"\\n        value=\\\"male\\\"\\n        checked=\\\"\\\"\\n        data-wg-notranslate=\\\"manual\\\"\\n    />\\n    <label class=\\\"input-radio__label\\\" for=\\\"male\\\">Monsieur</label>\\n    <input\\n        data-register-gender=\\\"\\\"\\n        type=\\\"radio\\\"\\n        name=\\\"gender\\\"\\n        id=\\\"female\\\"\\n        value=\\\"female\\\"\\n        data-wg-notranslate=\\\"manual\\\"\\n    />\\n    <label class=\\\"input-radio__label\\\" for=\\\"female\\\">Madame</label>\\n</div>\\n{{?? true }}{{?}}\\n\\n<input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"create_customer\\\" /><input\\n    type=\\\"hidden\\\"\\n    name=\\\"utf8\\\"\\n    value=\\\"✓\\\"\\n/>\\n<input\\n    type=\\\"text\\\"\\n    class=\\\"input-text\\\"\\n    name=\\\"customer[first_name]\\\"\\n    placeholder=\\\"{{=it.yourFirstName}}\\\"\\n/>\\n<input\\n    type=\\\"text\\\"\\n    class=\\\"input-text\\\"\\n    name=\\\"customer[last_name]\\\"\\n    placeholder=\\\"{{=it.yourLastName}}\\\"\\n/>\\n<input\\n    type=\\\"email\\\"\\n    placeholder=\\\"{{=it.yourEmail}}\\\"\\n    name=\\\"customer[email]\\\"\\n    class=\\\"input-text\\\"\\n/>\\n<div\\n    class=\\\"eye icon js-show-psw\\\"\\n    style=\\\"position: absolute; right: 30px; cursor: pointer\\\"\\n></div>\\n<input\\n    type=\\\"password\\\"\\n    name=\\\"customer[password]\\\"\\n    class=\\\"input-text\\\"\\n    placeholder=\\\"{{=it.yourPassword}}\\\"\\n/>\\n{{? it.hasPasswordConfirmation }}\\n<input\\n    class=\\\"input-text\\\"\\n    name=\\\"confirmPassword\\\"\\n    placeholder=\\\"{{=it.confirmYourPassword}}\\\"\\n    type=\\\"password\\\"\\n/>\\n{{?? true }}{{?}} {{? it.hasBirthDate }}\\n<div class=\\\"birth-date\\\">\\n    <div class=\\\"birth-date-text\\\">Date de naissance</div>\\n    <input\\n        placeholder=\\\"jj\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-day=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"01\\\"\\n        max=\\\"31\\\"\\n    />\\n    <input\\n        placeholder=\\\"mm\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-month=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"01\\\"\\n        max=\\\"12\\\"\\n    />\\n    <input\\n        placeholder=\\\"aaaa\\\"\\n        class=\\\"input-text input__birth\\\"\\n        data-register-year=\\\"\\\"\\n        type=\\\"number\\\"\\n        min=\\\"1900\\\"\\n        max=\\\"2020\\\"\\n    />\\n</div>\\n{{?? true }}{{?}}\\n\\n<p class=\\\"text-center\\\">\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{=it.createAccount}}\\\"\\n    />\\n</p>\\n\\n{{? it.hasNewsLetter }}\\n<div class=\\\"checkbox-container\\\">\\n    <input\\n        class=\\\"checkbox\\\"\\n        data-register-newscheck=\\\"\\\"\\n        name=\\\"acceptsMarketing\\\"\\n        type=\\\"checkbox\\\"\\n    />\\n    <div class=\\\"text t-5 uppercase pointer\\\" data-register-newstext=\\\"\\\">\\n        {{=it.subscribeNewsletter}}\\n    </div>\\n</div>\\n{{?? true }}{{?}}\\n<div class=\\\"secondary-action\\\">\\n    {{? it.isPopover }}\\n    <p>\\n        Already have an account?\\n        <a href=\\\"#\\\" class=\\\"link js-login\\\">Login here</a>\\n    </p>\\n    {{?? true }}{{?}}\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-no-slides.html?");

/***/ }),

/***/ "./src/templates/register-with-slides.html":
/*!*************************************************!*\
  !*** ./src/templates/register-with-slides.html ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"carousel\\\" style=\\\"width: 100%\\\">\\n    <input\\n        style=\\\"display: none\\\"\\n        type=\\\"email\\\"\\n        placeholder=\\\"{{=it.yourEmail}}\\\"\\n        name=\\\"customer[email]\\\"\\n        class=\\\"input-text\\\"\\n        autocorrect=\\\"off\\\"\\n        autocapitalize=\\\"off\\\"\\n        autocomplete=\\\"email\\\"\\n        aria-required=\\\"true\\\"\\n    />\\n    <div>\\n        <input\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            name=\\\"customer[last_name]\\\"\\n            placeholder=\\\"{{=it.yourLastName}}\\\"\\n            autocomplete=\\\"family-name\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div class=\\\"mt-2\\\">\\n            <div>1/5</div>\\n        </div>\\n    </div>\\n    <div style=\\\"left: 100%\\\">\\n        <input\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            name=\\\"customer[first_name]\\\"\\n            placeholder=\\\"{{=it.yourFirstName}}\\\"\\n            autocomplete=\\\"given-name\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div class=\\\"mt-2\\\">\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div>2/5</div>\\n        </div>\\n    </div>\\n    <div style=\\\"left: 200%\\\">\\n        Date de naissance\\n        <input\\n            name=\\\"birthdate\\\"\\n            type=\\\"text\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"dd/mm/yyyy\\\"\\n        />\\n        <div class=\\\"btn btn-primary btn-small mt-1 mb-1 js-next\\\" disabled=\\\"\\\">\\n            Valider\\n        </div>\\n        <div class=\\\"mt-2\\\">\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div>3/5</div>\\n        </div>\\n    </div>\\n    <div style=\\\"left: 300%\\\">\\n        <input\\n            type=\\\"password\\\"\\n            name=\\\"customer[password]\\\"\\n            class=\\\"input-text\\\"\\n            aria-required=\\\"true\\\"\\n            placeholder=\\\"{{=it.yourPassword}}\\\"\\n        />\\n        <input\\n            class=\\\"btn btn-primary\\\"\\n            disabled=\\\"\\\"\\n            type=\\\"submit\\\"\\n            value=\\\"{{=it.createAccount}}\\\"\\n        />\\n        <div class=\\\"mt-2\\\">\\n            <div class=\\\"cursor-prev js-prev\\\">&#12296;</div>\\n            <div>4/5</div>\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-with-slides.html?");

/***/ }),

/***/ "./src/templates/register.html":
/*!*************************************!*\
  !*** ./src/templates/register.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image\\\" />\\n<div class=\\\"title\\\">{{=it.createAccount}}</div>\\n<div class=\\\"subtitle text t-4\\\">{{=it.fillInfoToCreateAccount}}</div>\\n<div class=\\\"js-error error\\\">\\n    <div class=\\\"error js-psw-wrong\\\">{{=it.incorrectEmailOrPassword}}</div>\\n</div>\\n\\n<form\\n    method=\\\"post\\\"\\n    id=\\\"RegisterForm\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n>\\n    <input\\n        type=\\\"hidden\\\"\\n        name=\\\"return_to\\\"\\n        value=\\\"{{=it.redirect.redirectAfterRegister}}\\\"\\n    />\\n    {{? it.hasCarousel }} {{#def.registerWithSlides }} {{?? true }}\\n    {{#def.registerNoSlides }} {{?}}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register.html?");

/***/ }),

/***/ "./src/templates/sign-in.html":
/*!************************************!*\
  !*** ./src/templates/sign-in.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"image\\\" />\\n<div class=\\\"title\\\">{{=it.login}}</div>\\n<div class=\\\"subtitle\\\">{{=it.enterEmailPswToConnect}}</div>\\n<div class=\\\"js-error\\\">\\n    <div class=\\\"error js-psw-valid\\\">{{=it.passwordTooShort}}</div>\\n    <div class=\\\"error js-psw-wrong\\\">{{=it.incorrectEmailOrPassword}}</div>\\n</div>\\n\\n<form\\n    method=\\\"post\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"inputs-container\\\"\\n>\\n    <input\\n        type=\\\"hidden\\\"\\n        name=\\\"checkout_url\\\"\\n        value=\\\"{{=it.redirect.redirectAfterLogin}}\\\"\\n    />\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"customer_login\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n    <input\\n        type=\\\"email\\\"\\n        name=\\\"customer[email]\\\"\\n        autocomplete=\\\"email\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{=it.yourEmail}}\\\"\\n    />\\n\\n    <input\\n        type=\\\"password\\\"\\n        value=\\\"\\\"\\n        name=\\\"customer[password]\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{=it.yourPassword}}\\\"\\n    />\\n\\n    {{? it.hasPasswordRecover }}\\n    <div class=\\\"text-center\\\">\\n        <p><a href=\\\"#recover\\\" id=\\\"RecoverPassword\\\">Forgot your password?</a></p>\\n    </div>\\n    {{?? true }}{{?}}\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{=it.signIn}}\\\"\\n    />\\n</form>\\n<div class=\\\"secondary-action\\\">\\n    {{? it.isPopover }}\\n    <p>\\n        {{=it.isNewCustomer}}\\n        <a href=\\\"#\\\" class=\\\"link js-create-account\\\">{{=it.createAccount}}</a>\\n    </p>\\n    {{?? true }}{{?}}\\n    <p>\\n        {{=it.doYouLostPsw}}\\n        <a href=\\\"/account#recover-password\\\" class=\\\"link\\\">{{=it.recoverPsw}}</a>\\n    </p>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/sign-in.html?");

/***/ }),

/***/ "./public/data/config.json":
/*!*********************************!*\
  !*** ./public/data/config.json ***!
  \*********************************/
/*! default exports */
/*! export style [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export page-landing [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export page-register [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export theme [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --btn-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --btn-disabled-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --btn-disabled-opacity [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --container-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --container-bg-image [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --container-border-radius [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --content-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --content-padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --content-width [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --error-bg-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --error-text-align [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --error-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --hint-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image-padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --image-url [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --input-line [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --input-padding [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-font-family [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-font-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-font-weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-letter-spacing [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-line-height [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --large-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --medium-font-weight [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --medium-text-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --placeholder-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --placeholder-font-size [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --placeholder-text-transform [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --primary-text-color [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export --text-input-margin [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   other exports [not provided] [no usage info] */
/*! export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export confirmYourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export createAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export enterEmailPswToConnect [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export enterYourEmailToContinue [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export fillInfoToCreateAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasBirthDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasGender [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasNewsLetter [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasPasswordConfirmation [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasSocialLogin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export incorrectEmailOrPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export isPopover [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export login [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export loginRegister [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export password [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export passwordConfirmationError [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswMaxLength [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswMaxLengthErr [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswMinLength [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswMinLengthErr [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswNumberErr [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswSpecialCharacter [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswSpecialCharacterErr [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswUppercase [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export pswUppercaseErr [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export passwordTooShort [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export redirect [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export redirectAfterLogin [provided] [no usage info] [missing usage info prevents renaming] */
/*!     export redirectAfterRegister [provided] [no usage info] [missing usage info prevents renaming] */
/*!     other exports [not provided] [no usage info] */
/*!   export signIn [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export signUp [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export subscribeNewsletter [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export validate [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export yourEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export yourFirstName [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export yourLastName [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export yourPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"style\\\":{\\\"theme\\\":{\\\"--container-border-radius\\\":\\\"0em\\\",\\\"--container-bg-color\\\":\\\"rgba(90, 91, 91, 0.4)\\\",\\\"--container-bg-image\\\":\\\"url('https://cdn.shopify.com/s/files/1/2598/9270/products/Packshotfriandiseschatvolaille_600x.jpg?v=1599487575')\\\",\\\"--content-width\\\":\\\"530px\\\",\\\"--content-padding\\\":\\\"1.5em\\\",\\\"--content-bg-color\\\":\\\"#fff\\\",\\\"--primary-text-color\\\":\\\"#0d3c32\\\",\\\"--error-bg-color\\\":\\\"#bfd9cb\\\",\\\"--error-text-color\\\":\\\"#0d3c32\\\",\\\"--error-text-align\\\":\\\"left\\\",\\\"--hint-text-color\\\":\\\"#333\\\",\\\"--btn-bg-color\\\":\\\"#de7154\\\",\\\"--btn-disabled-bg-color\\\":\\\"#c6c1be\\\",\\\"--btn-disabled-opacity\\\":1,\\\"--large-font-family\\\":\\\"Helvetica Neue\\\",\\\"--large-font-size\\\":\\\"1.875rem\\\",\\\"--large-font-weight\\\":700,\\\"--large-line-height\\\":\\\"2em\\\",\\\"--large-letter-spacing\\\":\\\"0.05em\\\",\\\"--large-text-transform\\\":\\\"none\\\",\\\"--medium-text-size\\\":\\\"1.1em\\\",\\\"--medium-font-weight\\\":300,\\\"--input-padding\\\":\\\"10px 0\\\",\\\"--input-line\\\":\\\"none\\\",\\\"--placeholder-text-transform\\\":\\\"uppercase\\\",\\\"--placeholder-font-size\\\":\\\"inherit\\\",\\\"--placeholder-color\\\":\\\"inherit\\\",\\\"--text-input-margin\\\":\\\"0.9em\\\",\\\"--image-padding\\\":\\\"1em\\\",\\\"--image-size\\\":\\\"40%\\\",\\\"--image-url\\\":\\\"url('https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-Chat-1.png?v=1595510115')\\\"},\\\"page-landing\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-Chat-1.png?v=1595510115\\\\\\\")\\\",\\\"--image-width\\\":\\\"40%\\\"},\\\"page-register\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-16.png?v=1595509535\\\\\\\")\\\",\\\"--image-width\\\":\\\"40%\\\"}},\\\"text\\\":{\\\"hasGender\\\":false,\\\"hasSocialLogin\\\":false,\\\"hasPasswordConfirmation\\\":true,\\\"hasBirthDate\\\":false,\\\"isPopover\\\":false,\\\"hasNewsLetter\\\":true,\\\"createAccount\\\":\\\"Création de compte\\\",\\\"loginRegister\\\":\\\"Connexion / Inscription\\\",\\\"enterYourEmailToContinue\\\":\\\"Renseignez votre adresse email pour continuer.\\\",\\\"yourEmail\\\":\\\"Votre email\\\",\\\"signIn\\\":\\\"Se Connecter\\\",\\\"signUp\\\":\\\"S'inscrire\\\",\\\"fillInfoToCreateAccount\\\":\\\"Renseignez vos informations pour créer votre compte Franklin.\\\",\\\"login\\\":\\\"Connexion\\\",\\\"enterEmailPswToConnect\\\":\\\"Renseignez votre adresse email et votre mot de passe pour vous connecter.\\\",\\\"validate\\\":\\\"Valider\\\",\\\"yourFirstName\\\":\\\"Votre nom\\\",\\\"yourLastName\\\":\\\"Your last name\\\",\\\"yourPassword\\\":\\\"Votre mot de passe\\\",\\\"confirmYourPassword\\\":\\\"Confirmez votre mot de passe\\\",\\\"subscribeNewsletter\\\":\\\"Je m'inscris à la newsletter Franklin\\\",\\\"passwordTooShort\\\":\\\"Le mot de passe doit comporter au moins 5 caractères.\\\",\\\"incorrectEmailOrPassword\\\":\\\"Adresse email ou mot de passe incorrect.\\\",\\\"password\\\":{\\\"passwordConfirmationError\\\":\\\"Les mots de passes ne correspondent pas\\\",\\\"pswMinLength\\\":6,\\\"pswMinLengthErr\\\":\\\"Le mot de passe doit comporter au moins 6 caractères\\\",\\\"pswMaxLength\\\":18,\\\"pswMaxLengthErr\\\":\\\"Password too long\\\",\\\"pswUppercase\\\":true,\\\"pswUppercaseErr\\\":\\\"Missing uppercase letters on your password\\\",\\\"pswNumber\\\":true,\\\"pswNumberErr\\\":\\\"Missing numbers on your password\\\",\\\"pswSpecialCharacter\\\":true,\\\"pswSpecialCharacterErr\\\":\\\"Missing special characters on your password\\\"},\\\"redirect\\\":{\\\"redirectAfterLogin\\\":\\\"/collections/all\\\",\\\"redirectAfterRegister\\\":\\\"/collections/all\\\"}}}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/config.json?");

/***/ }),

/***/ "./src/actions/dashboard.js":
/*!**********************************!*\
  !*** ./src/actions/dashboard.js ***!
  \**********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nconst getConfig = async ({ target }) => {\n    if (/textarea/.test(target.className)) {\n        return JSON.parse($q(`.js-custom-style`).value);\n    }\n    const { STAG_ENDPOINT } = __webpack_require__(/*! ../config */ \"./src/config.js\");\n    let resp = await fetch(`${STAG_ENDPOINT}/data/${target.value}-config.json`);\n    return await resp.json();\n};\n\nconst changeTheme = async (e) => {\n    const { loadActions } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\n    const { updatePages, updateCss } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    const config = await getConfig(e);\n    updatePages(config.text);\n    updateCss(config.style);\n    loadActions(config);\n    $q(`.container`).style.setProperty(\"display\", \"flex\");\n    $q(`.js-dashboard`).style.setProperty(\"display\", \"block\");\n};\n\nexports.init = (config) => {\n    $q(`.js-load-default-theme`).addEventListener(\"click\", changeTheme);\n    $q(`.js-load-from-textarea`).addEventListener(\"click\", changeTheme);\n    $q(`.js-custom-style`).value = JSON.stringify(config, undefined, 1);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/dashboard.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! default exports */
/*! export loadTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updateCss, updatePages, toggleModules, $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { loadActions, openAccount } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\nconst { getTheme, kastor } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\nconst onGetTheme = (theme) => {\n    updatePages(theme.text);\n    updateCss(theme.style);\n    loadActions();\n    kastor();\n};\nexports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);\n\nexports.showTheme = () => {\n    openAccount();\n    // TODO ut should work!\n    const urlParams = new URLSearchParams(globalThis.location.search);\n    if (urlParams.get(\"config_id\") === \"login-popup\") openAccount();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/index.js?");

/***/ }),

/***/ "./src/actions/landing.js":
/*!********************************!*\
  !*** ./src/actions/landing.js ***!
  \********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { LANDING_ID, REGISTER_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { isRegistered } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { toggleModules, $q, $qq } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst disableBtn = (btn) => btn.setAttribute(\"disabled\", \"true\");\nlet form;\nglobalThis.__toggleModules = toggleModules;\n\nconst activeBtn = (btn, target) => {\n    btn.removeAttribute(\"disabled\");\n    sessionStorage.setItem(\"email\", target.value); //TODO fix it\n};\nconst toggleButton = ({ target }) => {\n    const btn = form.querySelector(\"input[type='submit']\");\n    const isEmail = /\\S+@\\S+\\.\\S+/.test(target.value);\n    isEmail ? activeBtn(btn, target) : disableBtn(btn);\n};\n\nconst onSubmit = async () => {\n    const email = form.querySelector(\"[type='email']\").value;\n    $qq(`.${REGISTER_ID}`, \"form [type='email']\").value = email;\n    $qq(`.${SIGNIN_ID}`, \"form [type='email']\").value = email;\n    const result = await isRegistered(email);\n    result ? signIn() : register();\n};\n\nconst register = () => {\n    toggleModules(REGISTER_ID);\n};\n\nconst signIn = () => {\n    toggleModules(SIGNIN_ID);\n};\n\nexports.init = () => {\n    $q(\".js-modal\") ? toggleModules(LANDING_ID) : toggleModules(SIGNIN_ID);\n    form = $qq(`.${LANDING_ID}`, \"form\");\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/landing.js?");

/***/ }),

/***/ "./src/actions/load.js":
/*!*****************************!*\
  !*** ./src/actions/load.js ***!
  \*****************************/
/*! default exports */
/*! export loadActions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openAccount [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { init: initDashboard } = __webpack_require__(/*! ./dashboard */ \"./src/actions/dashboard.js\");\nconst { init: initLanding } = __webpack_require__(/*! ./landing */ \"./src/actions/landing.js\");\nconst { init: initSignIn } = __webpack_require__(/*! ./sign-in */ \"./src/actions/sign-in.js\");\nconst { init: initRegistration } = __webpack_require__(/*! ./register */ \"./src/actions/register.js\");\nconst { $q } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\n\n//TODO refactoring too code repetition\n\nconst closeApp = () => {\n    $q(`.container`).style.setProperty(\"display\", \"none\");\n    $q(`.js-dashboard`).style.setProperty(\"display\", \"none\");\n    document.body.classList.remove(\"remove-scrolling\");\n};\n\n// TODO dashboard should be removed\nconst dashboard = () =>\n    $q(`.js-dashboard`).style.setProperty(\"display\", \"block\");\n\nconst initContainer = () => {\n    $q(`.js-close`).addEventListener(\"click\", closeApp);\n    // $q(`.js-toggle-dashboard`).addEventListener(\"click\", dashboard);\n};\n\nexports.loadActions = () => {\n    // initDashboard(config);\n    initLanding();\n    initContainer();\n    initSignIn();\n    initRegistration();\n};\n\nconst placePopover = (e, dom) => {\n    const shift = parseInt(getComputedStyle(dom).getPropertyValue(\"width\"));\n    dom.style.setProperty(\"left\", `${e.clientX - shift / 2}px`);\n    dom.style.setProperty(\"top\", `${e.clientY + 20}px`);\n};\n\nconst openAccount = (e) => {\n    e?.preventDefault();\n    e?.stopPropagation();\n    if (!globalThis.__st?.cid) {\n        const dom = $q(\".container\");\n        dom.style.setProperty(\"display\", \"flex\");\n        if (dom.classList.contains(\"popover\")) placePopover(e, dom);\n    }\n};\n\nexports.openAccount = openAccount;\nconst $ = document.querySelector.bind(document);\n$(\".site-header__account\").addEventListener(\"click\", openAccount);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/load.js?");

/***/ }),

/***/ "./src/actions/register.js":
/*!*********************************!*\
  !*** ./src/actions/register.js ***!
  \*********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { REGISTER_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst {\n    toggleModules,\n    serialize,\n    isFormFilled,\n    isValidPsw,\n    $q,\n} = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst tgt = {\n    form: `.${REGISTER_ID} form`,\n    login: `.${REGISTER_ID} .js-login`,\n    pswDiffError: `.${REGISTER_ID} .js-error .js-psw-diff`,\n    pswFormatError: `.${REGISTER_ID} .js-error .js-psw-valid`,\n};\n\nconst toggleSecret = (e) => {\n    const secret = $q(\"[name='customer[password]']\");\n    secret.type = secret.type === \"password\" ? \"text\" : \"password\";\n};\n\nconst toggleButton = ({ target }) => {\n    if (target.value.length > 2)\n        target.nextElementSibling.removeAttribute(\"disabled\");\n\n    const btn = $q(tgt.form).querySelector(\"input[type='submit']\");\n    isFormFilled($q(tgt.form))\n        ? btn.removeAttribute(\"disabled\")\n        : btn.setAttribute(\"disabled\", \"true\");\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n\n    //TODO you do not need serialize!\n    const inputs = serialize($q(tgt.form));\n    if (!isValidPsw(inputs)) return null;\n    $q(tgt.form).action = \"/account\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    console.log(\"shopify response\", resp);\n    globalThis.__form = $q(tgt.form);\n};\n\nconst changeSlide = (e) => {\n    const ele = $q(tgt.form).querySelector(\".carousel\");\n    const shift = parseInt(getComputedStyle(ele).getPropertyValue(\"width\"), 10);\n    const left = /js-next/.test(e.target.className) ? shift : -shift;\n    ele.scrollBy({\n        left: left,\n        behavior: \"smooth\",\n    });\n};\n\nexports.init = () => {\n    const form = $q(tgt.form);\n\n    form.addEventListener(\"input\", toggleButton);\n    form.querySelectorAll(\".js-next, .js-prev\").forEach((e) =>\n        e.addEventListener(\"click\", changeSlide)\n    );\n    form.addEventListener(\"submit\", onSubmit);\n    $q(tgt.login)?.addEventListener(\"click\", () => toggleModules(SIGNIN_ID));\n    form.querySelector(\".js-show-psw\")?.addEventListener(\"click\", toggleSecret);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/register.js?");

/***/ }),

/***/ "./src/actions/sign-in.js":
/*!********************************!*\
  !*** ./src/actions/sign-in.js ***!
  \********************************/
/*! default exports */
/*! export init [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { SIGNIN_ID, REGISTER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { $q, isValidEmail, isValidPsw } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { serialize, toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nconst tgt = {\n    form: `.${SIGNIN_ID} form`,\n    pswFormatError: `.${SIGNIN_ID} .js-error .js-psw-valid`,\n    register: `.js-create-account`,\n    wrongPsw: `.js-psw-wrong`,\n};\n\n// TODO refactor this part\nconst areInputsValid = (inputs) => {\n    if (!isValidPsw(inputs[\"customer[password]\"])) {\n        $q(tgt.pswFormatError).style.setProperty(\"display\", \"block\");\n        return false;\n    } else {\n        $q(tgt.pswFormatError).style.setProperty(\"display\", \"none\");\n    }\n    return true;\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n    const inputs = serialize($q(tgt.form));\n    if (!areInputsValid(inputs)) return null;\n    $q(tgt.form).action = \"/account/login\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    console.log(\"shopify response\", resp);\n\n    // globalThis.__form = $q(tgt.form);\n};\n\nconst toggleButton = (e) => {\n    const form = $q(tgt.form);\n    const email = form.querySelector('[name=\"customer[email]\"]').value;\n    isValidEmail(email)\n        ? form.querySelector(\"[type='submit']\").removeAttribute(\"disabled\")\n        : form.querySelector(\"[type='submit']\").setAttribute(\"disabled\", \"\");\n};\n\nconst register = () => toggleModules(REGISTER_ID);\n\nexports.init = () => {\n    const form = $q(tgt.form);\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n    $q(tgt.register)?.addEventListener(\"click\", register);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/sign-in.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = {\n    //AWS_ENDPOINT: \"http://ec2-3-19-56-186.us-east-2.compute.amazonaws.com\",\n    AWS_ENDPOINT: \"https://f7b45b79bb90.ngrok.io\",\n    STAG_ENDPOINT: \"./\",\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/config.js?");

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

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! default exports */
/*! export getTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLogged [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRegistered [provided] [no usage info] [missing usage info prevents renaming] */
/*! export kastor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export register [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sendHttpRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { registerViaProxy, isRegistered, getTheme } = __webpack_require__(/*! ./proxy */ \"./src/services/proxy.js\");\nconst { registerViaStorefront, signInViaStorefront } = __webpack_require__(/*! ./storefront */ \"./src/services/storefront.js\");\nconst { toggleLoading } = __webpack_require__(/*! ../utils/toggle-loading */ \"./src/utils/toggle-loading.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ./shopify */ \"./src/services/shopify.js\");\nconst { kastor } = __webpack_require__(/*! ./kastor */ \"./src/services/kastor.js\");\n\nexports.isRegistered = isRegistered;\nexports.sendHttpRequest = sendHttpRequest;\nexports.getTheme = getTheme;\nexports.kastor = kastor;\n\n// TODO this should be removed\nexports.register = async (inputs) => {\n    registerViaStorefront(inputs);\n    return registerViaProxy(inputs);\n};\n// TODO this should be removed\nexports.isLogged = async (inputs) => {\n    toggleLoading();\n    signInViaStorefront(inputs);\n    toggleLoading();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/index.js?");

/***/ }),

/***/ "./src/services/kastor.js":
/*!********************************!*\
  !*** ./src/services/kastor.js ***!
  \********************************/
/*! default exports */
/*! export kastor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updateCss, updatePages, toggleModules, $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { getTheme } = __webpack_require__(/*! ./proxy */ \"./src/services/proxy.js\");\nconst { init } = __webpack_require__(/*! ../actions/register */ \"./src/actions/register.js\");\n\nconst debounce = (fn, delay) => {\n    let timeoutId;\n    return (...args) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n};\n\nconst sectionSettings = ({ sectionName, setting_id, value }) => {\n    if (setting_id) updatePages({ [setting_id]: value });\n    const section = sectionName.replace(/-section/, \"\");\n    toggleModules(section);\n    $q(\".container\").style.setProperty(\"display\", \"flex\");\n};\n\nconst generalSettings = ({ setting_id, value }) => {\n    if (/font-size|text-size|border-radius/.test(setting_id)) {\n        console.log(\"Event received from Customize\", setting_id, value);\n        updateCss({ [setting_id]: `${value}em` });\n    }\n    if (/text-color/.test(setting_id)) {\n        console.log(\"Event received from Customize\", setting_id, value);\n        updateCss({ [setting_id]: `${value}` });\n    }\n};\n\nconst showSlider = ({ setting_id, value }) => {\n    updatePages({ [setting_id]: value });\n    toggleModules(\"register\");\n    $q(\".container\").style.setProperty(\"display\", \"flex\");\n    init();\n};\n\nconst kastorHandler = (event) => {\n    const body = event.data.data;\n    // TODO improve this part\n    const sectionName =\n        body.section_type_id || body.section_type || body.setting_id;\n    body.sectionName = sectionName;\n    if (sectionName === \"change-theme\")\n        getTheme(body.value).then((theme) => updateCss(theme.style));\n    else if (sectionName === \"hasCarousel\") showSlider(body);\n    else if (/^--/.test(sectionName)) generalSettings(body);\n    else sectionSettings(body);\n};\n\nexports.kastor = () => {\n    console.log(\"loading kastor handler\");\n    globalThis.addEventListener(\"message\", debounce(kastorHandler, 500));\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/kastor.js?");

/***/ }),

/***/ "./src/services/mutations.js":
/*!***********************************!*\
  !*** ./src/services/mutations.js ***!
  \***********************************/
/*! namespace exports */
/*! export customerCreate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export customerTokenCreate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customerCreate\": () => /* binding */ customerCreate,\n/* harmony export */   \"customerTokenCreate\": () => /* binding */ customerTokenCreate\n/* harmony export */ });\nconst customerCreate = `mutation customerCreate($input: CustomerCreateInput!) {\n    customerCreate(input: $input) {\n      customer {\n        id\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }`;\n\nconst customerTokenCreate = `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }`;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/mutations.js?");

/***/ }),

/***/ "./src/services/proxy.js":
/*!*******************************!*\
  !*** ./src/services/proxy.js ***!
  \*******************************/
/*! default exports */
/*! export getTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRegistered [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerViaProxy [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { AWS_ENDPOINT } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\nconst { toggleLoading } = __webpack_require__(/*! ../utils/toggle-loading */ \"./src/utils/toggle-loading.js\");\n\n// TODO remove AWS_ENDPOINT and use the proxy. See getConfig\nexports.registerViaProxy = async (inputs) => {\n    const response = await fetch(`${AWS_ENDPOINT}/user/add/`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(inputs),\n    });\n    return response.json();\n};\n\n// TODO remove AWS_ENDPOINT and use the proxy. See getConfig\nexports.isRegistered = async (email) => {\n    return null;\n    toggleLoading();\n    const res = await fetch(`${AWS_ENDPOINT}/user/${email}`);\n    const json = await res.json();\n    toggleLoading();\n    return json.data;\n};\n\nexports.getTheme = async (themeName) => {\n    const shopName = globalThis.Shopify?.shop;\n    // TODO fix it\n    // const endpoint = shopName\n    //     ? `https://${shopName}/apps/dev/s3/${shopName}`\n    //     : \"data/config.json\";\n    const endpoint = `https://devw.github.io/stag/data/${themeName}-config.json`;\n    console.log(endpoint);\n    const result = await globalThis.fetch(endpoint);\n    return await result.json();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/proxy.js?");

/***/ }),

/***/ "./src/services/shopify.js":
/*!*********************************!*\
  !*** ./src/services/shopify.js ***!
  \*********************************/
/*! default exports */
/*! export sendHttpRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst tgt = {\n    errorMsg: \".js-error\",\n    close: \".js-close\",\n    shopifyRes: \".js-shopify-response\",\n    isLogged: \"#customer_logout_link\",\n    wrongPsw: \"#customer_login\",\n    captha: \".shopify-challenge__button.btn\",\n};\n\nexports.sendHttpRequest = (method, e) => {\n    // const wrongEmailFixture = require(\"../fixtures/wrong-email-psw.html\");\n    // const isLoggedHtml = `<div id=\"customer_logout_link\">link</div>`;\n\n    return new Promise((res, rej) => {\n        const xhr = new XMLHttpRequest();\n        xhr.open(method, e.target.action);\n        xhr.send(new FormData(e.target));\n        xhr.onload = () => {\n            if (xhr.status >= 400) rej(xhr.response);\n            else res(parseShopifyResponse(e, xhr.response));\n        };\n        xhr.onerror = (err) => rej(`Server error: ${err}`); //triggered if there is no connection\n    });\n};\n\nconst shopifyResult = (html) => ({\n    isLogged: html.querySelector(tgt.isLogged) != null,\n    hasWrongPsw: html.querySelector(tgt.wrongPsw) != null,\n    hasChallenge: html.querySelector(tgt.captha) != null,\n    // TODO adding other checks (unique email, ....)\n});\n\nconst parseShopifyResponse = ({ target }, response) => {\n    const htmlResponse = new DOMParser().parseFromString(response, \"text/html\");\n    const resp = shopifyResult(htmlResponse);\n    console.log(resp);\n    if (resp.isLogged) $q(tgt.close).click();\n    else if (resp.hasWrongPsw) onWrongPsw(target);\n    else if (resp.hasChallenge) target.submit();\n    return resp;\n};\n\nconst onWrongPsw = (target) => {\n    const { text } = __webpack_require__(/*! ../../public/data/config.json */ \"./public/data/config.json\");\n    const error = target.previousSibling;\n    error.innerHTML = text.incorrectEmailOrPassword;\n    error.style.setProperty(\"display\", \"block\");\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/shopify.js?");

/***/ }),

/***/ "./src/services/storefront.js":
/*!************************************!*\
  !*** ./src/services/storefront.js ***!
  \************************************/
/*! default exports */
/*! export registerViaStorefront [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signInViaStorefront [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { customerCreate, customerTokenCreate } = __webpack_require__(/*! ./mutations */ \"./src/services/mutations.js\");\nconst { AWS_ENDPOINT } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nconst getStorefrontToken = async () => {\n    const shop = globalThis.Shopify?.shop;\n    const response = await fetch(`${AWS_ENDPOINT}/shops/${shop}`);\n    const result = await response.json();\n    const { storefrontToken } = result[0];\n    return storefrontToken;\n};\n\nconst getParams = ({ query, input }) => ({\n    query: query,\n    variables: { input: input },\n});\n\nconst getHeader = async (body) => ({\n    method: \"POST\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"X-Shopify-Storefront-Access-Token\": await getStorefrontToken(),\n    },\n    body: JSON.stringify(body),\n});\n\nconst postRequest = async (fetchBody) => {\n    const header = getHeader(fetchBody);\n    globalThis.header = header;\n    const response = await fetch(`/api/graphql`, await header);\n    return await response.json();\n};\n\nexports.registerViaStorefront = async (input) => {\n    delete input.confirmPassword;\n    const fetchBody = getParams({ query: customerCreate, input: input });\n    return await postRequest(fetchBody);\n};\n\nexports.signInViaStorefront = async (input) => {\n    const fetchBody = getParams({ query: customerTokenCreate, input: input });\n    return await postRequest(fetchBody);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/storefront.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 32:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const dashboardTmpl = __webpack_require__(/*! ./dashboard.html */ \"./src/templates/dashboard.html\");\nconst containerTmpl = __webpack_require__(/*! ./container.html */ \"./src/templates/container.html\");\nconst landingTmpl = __webpack_require__(/*! ./landing.html */ \"./src/templates/landing.html\");\nconst registerTmpl = __webpack_require__(/*! ./register.html */ \"./src/templates/register.html\");\nconst signInTmpl = __webpack_require__(/*! ./sign-in.html */ \"./src/templates/sign-in.html\");\nconst registerNoSlidesTmpl = __webpack_require__(/*! ./register-no-slides.html */ \"./src/templates/register-no-slides.html\");\nconst registerWithSlidesTmpl = __webpack_require__(/*! ./register-with-slides.html */ \"./src/templates/register-with-slides.html\");\nconst [APP_ID, ROOT_ID, CONTAINER_ID] = [\"aaa\", \"bbb\", \"container\"];\nconst [LANDING_ID, REGISTER_ID, SIGNIN_ID] = [\"landing\", \"register\", \"signin\"];\n\nconst getTemplate = ({ id, html }) =>\n    `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n\nconst getPartialTemplate = ({ id, html }) => {\n    html = `<div class=\"${id}\" style=\"display: none\">${html}</div>`;\n    return `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n};\nconst templates = [];\n\ntemplates.push(getTemplate({ id: ROOT_ID, html: dashboardTmpl }));\ntemplates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));\ntemplates.push(getPartialTemplate({ id: LANDING_ID, html: landingTmpl }));\ntemplates.push(getPartialTemplate({ id: REGISTER_ID, html: registerTmpl }));\ntemplates.push(\n    getTemplate({ id: \"registerNoSlides\", html: registerNoSlidesTmpl })\n);\ntemplates.push(\n    getTemplate({ id: \"registerWithSlides\", html: registerWithSlidesTmpl })\n);\ntemplates.push(getPartialTemplate({ id: SIGNIN_ID, html: signInTmpl }));\n\nmodule.exports = {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! default exports */
/*! export $q [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $qq [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidPsw [provided] [no usage info] [missing usage info prevents renaming] */
/*! export serialize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updatePages, updateCss } = __webpack_require__(/*! ./load-pages */ \"./src/utils/load-pages.js\");\nconst { toggleModules } = __webpack_require__(/*! ./toggle-module */ \"./src/utils/toggle-module.js\");\nconst { serialize, isFormFilled } = __webpack_require__(/*! ./serialize */ \"./src/utils/serialize.js\");\nconst { isValidPsw, isValidEmail } = __webpack_require__(/*! ./input-checker */ \"./src/utils/input-checker.js\");\nconst { $q, $qq } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nexports.updatePages = updatePages;\nexports.updateCss = updateCss;\nexports.toggleModules = toggleModules;\nexports.serialize = serialize;\nexports.isFormFilled = isFormFilled;\nexports.isValidPsw = isValidPsw;\nexports.isValidEmail = isValidEmail;\nexports.$q = $q;\nexports.$qq = $qq;\n\nglobalThis.__updateCss = updateCss;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/input-checker.js":
/*!************************************!*\
  !*** ./src/utils/input-checker.js ***!
  \************************************/
/*! default exports */
/*! export isValidEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidPsw [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\nconst errorSelector = \".register .js-error\";\n// const { text } = require(\"../../public/data/config.json\");\n// const password = text.password;\n\nconst showError = (errorMsgs) => {\n    const list = document.createElement(\"ul\");\n    errorMsgs.forEach((e) => {\n        const item = document.createElement(\"li\");\n        item.appendChild(document.createTextNode(e));\n        list.appendChild(item);\n    });\n    $q(errorSelector).appendChild(list);\n    $q(errorSelector).style.setProperty(\"display\", \"block\");\n    return false;\n};\nconst resetErrorMsgs = () => {\n    $q(errorSelector).innerText = \"\";\n    $q(errorSelector).style.setProperty(\"display\", \"none\");\n};\n\nconst getPswConfirmationError = (inputs) => {\n    const { password } = JSON.parse($q(`.js-custom-style`).value).text;\n    const errorMsgs = [];\n    const areDifferent =\n        inputs.confirmPassword &&\n        inputs.confirmPassword !== inputs[\"customer[password]\"];\n    if (areDifferent) errorMsgs.push(password.passwordConfirmationError);\n    return errorMsgs;\n};\n\nconst getPasswordPolicyErrors = (inputs) => {\n    const str = inputs[\"customer[password]\"];\n    const { password } = JSON.parse($q(`.js-custom-style`).value).text;\n    const pswPolicy = password;\n    const errorMsgs = [];\n\n    if (str.length < pswPolicy.pswMinLength)\n        errorMsgs.push(pswPolicy.pswMinLengthErr);\n    if (str.length > pswPolicy.pswMaxLength)\n        errorMsgs.push(pswPolicy.pswMaxLengthErr);\n    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(str))\n        errorMsgs.push(pswPolicy.pswUppercaseErr);\n    if (pswPolicy.pswNumber && !/(?=.*\\d)/.test(str))\n        errorMsgs.push(pswPolicy.pswNumberErr);\n    if (pswPolicy.pswSpecialCharacter && !/(?=.*[\\W|_])/.test(str))\n        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);\n\n    return errorMsgs;\n};\n\nexports.isValidPsw = (inputs) => {\n    resetErrorMsgs();\n    const pswConfirmationErrs = getPswConfirmationError(inputs);\n    const pswPolicyErrs = getPasswordPolicyErrors(inputs);\n    const errorMsgs = pswConfirmationErrs.concat(pswPolicyErrs);\n    return errorMsgs.length === 0 ? true : showError(errorMsgs) && false;\n};\n\nexports.isValidEmail = (email) => /\\S+@\\S+\\.\\S+/.test(email);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/input-checker.js?");

/***/ }),

/***/ "./src/utils/load-pages.js":
/*!*********************************!*\
  !*** ./src/utils/load-pages.js ***!
  \*********************************/
/*! default exports */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const doT = __webpack_require__(/*! ../doT */ \"./src/doT.js\");\nconst {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n} = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nlet TEXT = {};\n\nconst getDef = () => ({\n    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,\n    [LANDING_ID]: document.getElementById(LANDING_ID).text,\n    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,\n    [SIGNIN_ID]: document.getElementById(SIGNIN_ID).text,\n    registerNoSlides: document.getElementById(\"registerNoSlides\").text,\n    registerWithSlides: document.getElementById(\"registerWithSlides\").text,\n});\n\nconst appendTemplate = (e) => {\n    const elemDiv = document.createElement(\"div\");\n    elemDiv.innerHTML = e.trim();\n    document.body.appendChild(elemDiv);\n};\n\nconst getTemplate = (data) => {\n    templates.forEach(appendTemplate);\n    return doT.template({\n        tmpl: document.getElementById(ROOT_ID).text,\n        def: getDef(),\n    })(data);\n};\n\nconst updateText = (text) => {\n    const hasManyKeys = Reflect.ownKeys(text).length > 1;\n    const firstKey = Reflect.ownKeys(text)[0];\n    if (hasManyKeys) TEXT = text;\n    else TEXT[firstKey] = text[firstKey];\n    return TEXT;\n};\n\nconst updatePages = (text) => {\n    text = updateText(text);\n    $(`#${APP_ID}`).innerHTML = getTemplate(text);\n};\n\nexports.updatePages = updatePages;\n\nexports.updateCss = (cssVars) => {\n    (function traverse(obj, key) {\n        if (obj !== null && typeof obj == \"object\") {\n            Object.entries(obj).forEach(([key, value]) => traverse(value, key));\n        } else $(`#${APP_ID}`).style.setProperty(key, obj);\n    })(cssVars);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-pages.js?");

/***/ }),

/***/ "./src/utils/q-selector.js":
/*!*********************************!*\
  !*** ./src/utils/q-selector.js ***!
  \*********************************/
/*! default exports */
/*! export $q [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $qq [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID } = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n\nconst root = () => document.querySelector(`#${APP_ID}`);\n\nexports.$q = (leaf) => root().querySelector(leaf);\n\nexports.$qq = (parent, leaf) =>\n    root().querySelector(parent).querySelector(leaf);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/q-selector.js?");

/***/ }),

/***/ "./src/utils/serialize.js":
/*!********************************!*\
  !*** ./src/utils/serialize.js ***!
  \********************************/
/*! default exports */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export serialize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("const serialize = (form) => {\n    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });\n    return Array.from(new FormData(form)).reduce(reducer, {});\n};\n\nconst isFormFilled = (form) => {\n    const inputs = serialize(form);\n    return Object.values(inputs).every((e) => e.length > 0);\n};\n\nexports.serialize = serialize;\nexports.isFormFilled = isFormFilled;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/serialize.js?");

/***/ }),

/***/ "./src/utils/toggle-loading.js":
/*!*************************************!*\
  !*** ./src/utils/toggle-loading.js ***!
  \*************************************/
/*! default exports */
/*! export toggleLoading [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, CONTAINER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\n\nconst $ = document.querySelector.bind(document);\n\nconst toggleLoading = () => {\n    const loading = $(`#${APP_ID} .loading`);\n    if (loading.style.getPropertyValue(\"display\") == \"none\") {\n        loading.style.setProperty(\"display\", \"block\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 0.2);\n    } else {\n        loading.style.setProperty(\"display\", \"none\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 1);\n    }\n};\n\nexports.toggleLoading = toggleLoading;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-loading.js?");

/***/ }),

/***/ "./src/utils/toggle-module.js":
/*!************************************!*\
  !*** ./src/utils/toggle-module.js ***!
  \************************************/
/*! default exports */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { LANDING_ID, REGISTER_ID, SIGNIN_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nexports.toggleModules = (id) => {\n    $q(`.${LANDING_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${REGISTER_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${SIGNIN_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${id}`).style.setProperty(\"display\", \"block\");\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-module.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss":
/*!**********************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss ***!
  \**********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".carousel {\\n  height: 170px;\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.carousel > div {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n}\\n\\n.cursor-prev {\\n  cursor: pointer;\\n  position: absolute;\\n  text-align: left;\\n  padding: 0 10px;\\n  line-height: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/carousel.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dashboard.scss":
/*!***********************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dashboard.scss ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".js-dashboard {\\n  position: absolute;\\n  top: 0px;\\n  z-index: 999;\\n}\\n\\n.edit-solid.icon {\\n  color: #000;\\n  cursor: pointer;\\n  position: absolute;\\n  margin-left: 4px;\\n  margin-top: 7px;\\n  width: 14px;\\n  height: 2px;\\n  border-radius: 1px;\\n  border: solid 1px currentColor;\\n  background-color: currentColor;\\n  -webkit-transform: rotate(-45deg);\\n  transform: rotate(-45deg);\\n}\\n\\n.edit-solid.icon:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: -12px;\\n  top: -1px;\\n  width: 0px;\\n  height: 0px;\\n  border-left: solid 5px transparent;\\n  border-right: solid 5px currentColor;\\n  border-top: solid 2px transparent;\\n  border-bottom: solid 2px transparent;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/dashboard.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss":
/*!********************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".loading {\\n  left: 50%;\\n  margin-left: -20px;\\n  top: 50%;\\n  margin-top: -20px;\\n  position: absolute;\\n  animation: loading-bar 400ms linear infinite;\\n}\\n\\n.loading .loading-icon {\\n  width: 40px;\\n  height: 40px;\\n  border: solid 4px transparent;\\n  border-top-color: #333;\\n  border-left-color: #333;\\n  border-radius: 50%;\\n}\\n\\n@keyframes loading-bar {\\n  0% {\\n    transform: rotate(0deg);\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n    transform: rotate(360deg);\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/loader.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"/*  ===================\\n    Table of contents\\n\\n        - Global styles\\n        - Theme/Typography\\n        - Components\\n        - Partials\\n\\n    =================== */\\n/*  ===================\\n    1. Global styles\\n    =================== */\\n.remove-scrolling {\\n  height: 100%;\\n  overflow: hidden;\\n}\\n\\n@keyframes fade_in_show {\\n  0% {\\n    opacity: var(--transform-opacity);\\n    transform: scale(var(--transform-scale));\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n/*  ===================\\n    Theme/Typography\\n    =================== */\\n.container {\\n  text-align: center;\\n  z-index: 99;\\n  position: absolute;\\n}\\n\\n.popover {\\n  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);\\n}\\n\\n.js-modal {\\n  align-items: center;\\n  background: linear-gradient(var(--container-bg-color) 100%, var(--container-bg-color) 100%), var(--container-bg-image) center/cover;\\n  background-size: cover;\\n  display: flex;\\n  height: 100vh;\\n  justify-content: center;\\n  opacity: 1;\\n  right: 0;\\n  top: 0;\\n  width: 100vw;\\n}\\n\\n.content {\\n  color: var(--primary-text-color);\\n  background-color: var(--content-bg-color);\\n  border-radius: var(--container-border-radius);\\n  padding: var(--content-padding);\\n  position: relative;\\n  max-width: var(--content-width);\\n}\\n\\n.error {\\n  background-color: var(--error-bg-color);\\n  border-radius: 3px;\\n  color: var(--error-text-color);\\n  display: none;\\n  margin: 10px 0;\\n  padding: 5px;\\n  text-align: var(--error-text-align);\\n}\\n\\n/*  ===================\\n    Components\\n    =================== */\\n.image {\\n  content: var(--image-url);\\n  padding: var(--image-padding);\\n  width: var(--image-size);\\n}\\n\\n.title {\\n  font-family: var(--large-font-family);\\n  font-size: var(--large-font-size);\\n  font-weight: var(--large-font-weight);\\n  letter-spacing: var(--large-letter-spacing);\\n  line-height: var(--large-line-height);\\n  text-transform: var(--large-text-transform);\\n}\\n\\n.sub-title {\\n  font-size: var(--medium-text-size);\\n  font-weight: var(--medium-font-weight);\\n}\\n\\nform {\\n  padding: 2em 0;\\n}\\n\\n::placeholder {\\n  background-color: var(--content-bg-color);\\n  font-size: var(--placeholder-font-size);\\n  color: var(--placeholder-color);\\n  text-transform: var(--placeholder-text-transform);\\n}\\n\\n.input-text {\\n  box-sizing: border-box;\\n  border: var(--input-line);\\n  padding: var(--input-padding);\\n  outline: none;\\n  border-bottom: 1px solid;\\n  margin-bottom: var(--text-input-margin);\\n  width: 100%;\\n}\\n\\n.btn {\\n  border: none;\\n  color: #fff;\\n  cursor: pointer;\\n  padding: 10px;\\n  text-transform: uppercase;\\n  width: 100%;\\n}\\n\\n.btn.btn-primary {\\n  background-color: var(--btn-bg-color);\\n}\\n\\n.btn:disabled,\\n.btn[disabled] {\\n  background-color: var(--btn-disabled-bg-color);\\n  opacity: var(--btn-disabled-opacity);\\n}\\n\\n.btn-small {\\n  width: 40%;\\n  margin: 20px auto;\\n}\\n\\n.btn-close {\\n  cursor: pointer;\\n  font-size: 40px;\\n  position: absolute;\\n  right: 14px;\\n  top: 0;\\n  transform: rotate(45deg);\\n}\\n\\n.link {\\n  color: var(--link-color);\\n}\\n\\n.eye.icon {\\n  color: #000;\\n  position: absolute;\\n  margin-left: 3px;\\n  margin-top: 3px;\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 70% 15%;\\n  border: solid 1px currentColor;\\n  -webkit-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\\n.eye.icon:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 2px;\\n  top: 2px;\\n  width: 6px;\\n  height: 6px;\\n  border-radius: 50%;\\n  border: solid 1px currentColor;\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n}\\n\\n.checkbox-container {\\n  align-items: center;\\n  display: flex;\\n  margin-top: 14px;\\n}\\n\\n.mandatory-container {\\n  margin-top: 10px;\\n}\\n\\n.inputs-container {\\n  margin-bottom: 10px;\\n}\\n\\n/*  ===================\\n    Partials\\n    =================== */\\n.or-social-login {\\n  margin: 15px 0;\\n}\\n\\n.gender {\\n  margin: 20px 0;\\n  text-align: left;\\n}\\n\\n.birth-date {\\n  align-items: center;\\n  display: flex;\\n}\\n.birth-date .birth-date-text {\\n  min-width: 40%;\\n}\\n\\n.fb {\\n  background-color: #3b5998;\\n  color: white;\\n}\\n\\n.google {\\n  background-color: #dd4b39;\\n  color: white;\\n}\\n\\n.mt-1 {\\n  margin-top: 10px;\\n}\\n\\n.mt-2 {\\n  margin-top: 20px;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 5px;\\n}\\n\\n/*  ===================\\n    3. Pages\\n    =================== */\\n/*  ===================\\n    3. Modules\\n    =================== */\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./src/styles/carousel.scss":
/*!**********************************!*\
  !*** ./src/styles/carousel.scss ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/carousel.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/carousel.scss?");

/***/ }),

/***/ "./src/styles/dashboard.scss":
/*!***********************************!*\
  !*** ./src/styles/dashboard.scss ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./dashboard.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dashboard.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/dashboard.scss?");

/***/ }),

/***/ "./src/styles/loader.scss":
/*!********************************!*\
  !*** ./src/styles/loader.scss ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./loader.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loader.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/loader.scss?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n__webpack_require__(/*! ./styles/loader.scss */ \"./src/styles/loader.scss\");\n__webpack_require__(/*! ./styles/carousel.scss */ \"./src/styles/carousel.scss\");\n__webpack_require__(/*! ./styles/dashboard.scss */ \"./src/styles/dashboard.scss\");\n\nconst { APP_ID } = __webpack_require__(/*! ./templates/ */ \"./src/templates/index.js\");\n\nconst node = document.createElement(\"div\");\nnode.setAttribute(\"id\", APP_ID);\ndocument.body.append(node);\n\nconst { loadTheme, showTheme } = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\nloadTheme(\"franklin\").then(() => showTheme());\n\n\n//# sourceURL=webpack://stag-dotjs/./src/app.js?");
})();

/******/ })()
;