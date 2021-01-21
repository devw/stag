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

/***/ "./src/templates/activate.html":
/*!*************************************!*\
  !*** ./src/templates/activate.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<!-- TODO remove hardcoded value -->\\n<div class=\\\"title\\\">{{=it.activateTitle}}</div>\\n<div class=\\\"sub-title\\\">{{=it.activateSubTitle}}</div>\\n\\n<form\\n    method=\\\"post\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"{{=it.formStyle}}\\\"\\n>\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"customer_login\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/activate.html?");

/***/ }),

/***/ "./src/templates/container.html":
/*!**************************************!*\
  !*** ./src/templates/container.html ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"\\n<div class=\\\"container {{=it.layout}}\\\" style=\\\"display: none\\\">\\n    <div class=\\\"content\\\">\\n        <div class=\\\"loading\\\" style=\\\"display: none\\\">\\n            <div class=\\\"loading-icon\\\"></div>\\n        </div>\\n        <div class=\\\"btn-close js-close\\\">+</div>\\n        {{#def.landing }} {{#def.register }} {{#def.activate }} {{#def.signin}}\\n            <div class=\\\"js-shopify-response\\\" style=\\\"display: none\\\"></div>\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/container.html?");

/***/ }),

/***/ "./src/templates/landing.html":
/*!************************************!*\
  !*** ./src/templates/landing.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{=it.loginRegister}}</div>\\n<div class=\\\"sub-title\\\">{{=it.enterYourEmailToContinue}}</div>\\n<div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"{{=it.formStyle}}\\\">\\n    <div>\\n        {{? it.hasSocialLogin }}\\n        <input\\n            type=\\\"submit\\\"\\n            style=\\\"\\n                background: none;\\n                border: none;\\n                font-weight: 900;\\n                cursor: pointer;\\n                position: absolute;\\n            \\\"\\n            disabled=\\\"\\\"\\n            value=\\\"OK\\\"\\n        />\\n        {{?? true }}{{?}}\\n        <div>\\n            <input\\n                class=\\\"input-text\\\"\\n                name=\\\"email\\\"\\n                placeholder=\\\"{{=it.yourEmail}}\\\"\\n                type=\\\"email\\\"\\n            />\\n            <label>{{=it.yourEmail}}</label>\\n        </div>\\n    </div>\\n    {{? it.hasSocialLogin }}\\n    <div>\\n        <div class=\\\"or-social-login\\\">Or</div>\\n        <a href=\\\"#\\\" class=\\\"fb btn\\\">\\n            <i class=\\\"fa fa-facebook fa-fw\\\"></i> Login with Facebook\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"google btn\\\"\\n            ><i class=\\\"fa fa-google fa-fw\\\"></i> Login with Google+\\n        </a>\\n    </div>\\n    {{?? true }}\\n    <input\\n        type=\\\"submit\\\"\\n        class=\\\"btn btn-primary\\\"\\n        name=\\\"validate\\\"\\n        disabled=\\\"\\\"\\n        value=\\\"{{=it.validate}}\\\"\\n    />\\n    {{?}}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/landing.html?");

/***/ }),

/***/ "./src/templates/register-inputs.html":
/*!********************************************!*\
  !*** ./src/templates/register-inputs.html ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<!-- Choice List by TAG -->\\n{{? (it.hasChoice || it.choiceList ) }}\\n<!-- loop -->\\n<div\\n    class=\\\"hasChoice choice-block single-choice {{?it.hasMultiLine }}multi-line{{??true}} {{?}}\\\"\\n>\\n    {{~it.choiceList :value:index}}\\n    <div>\\n        <!-- tag -->\\n        {{? it.isChoiceTag === \\\"hasTag\\\"}}\\n        <input\\n            type=\\\"checkbox\\\"\\n            data-tag=\\\"{{=it.choiceTag}}\\\"\\n            value=\\\"{{=value}}\\\"\\n        />\\n        {{?? true }}{{?}}\\n        <!-- metafield -->\\n        {{? it.isChoiceTag === \\\"hasMetafield\\\"}}\\n        <input\\n            type=\\\"checkbox\\\"\\n            data-namespace=\\\"{{=it.choiceNamespace}}\\\"\\n            data-key=\\\"{{=it.choiceKey}}\\\"\\n            value=\\\"{{=value}}\\\"\\n        />\\n        {{?? true }}{{?}}\\n\\n        <label>{{=value}}</label>\\n    </div>\\n    {{~}}\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- FirstName field -->\\n{{? it.hasFirstName }}\\n<div class=\\\"hasFirstName\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        name=\\\"customer[first_name]\\\"\\n        placeholder=\\\"{{=it.yourFirstName}}\\\"\\n    />\\n    <label>{{=it.yourFirstName}}</label>\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- LastName field -->\\n{{? it.hasLastName }}\\n<div class=\\\"hasLastName\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        name=\\\"customer[last_name]\\\"\\n        placeholder=\\\"{{=it.yourLastName}}\\\"\\n    />\\n    <label>{{=it.yourLastName}}</label>\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- Telephone field -->\\n{{? it.hasTelephone }}\\n<div class=\\\"hasTelephone\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{=it.yourTelephone}}\\\"\\n        name=\\\"address[phone]\\\"\\n    />\\n    <label>{{=it.yourTelephone}}</label>\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- Email field -->\\n<div class=\\\"hasEmail\\\">\\n    <input\\n        required\\n        type=\\\"email\\\"\\n        placeholder=\\\"{{=it.yourEmail}}\\\"\\n        name=\\\"customer[email]\\\"\\n        class=\\\"input-text\\\"\\n    />\\n    <label>{{=it.yourEmail}}</label>\\n</div>\\n\\n<!-- Password field -->\\n<div class=\\\"hasPassword\\\">\\n    <div class=\\\"eye-icon js-show-psw\\\"></div>\\n    <input\\n        required\\n        type=\\\"password\\\"\\n        name=\\\"customer[password]\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{=it.yourPassword}}\\\"\\n    />\\n    <label>{{=it.yourPassword}}</label>\\n</div>\\n\\n<!-- TODO to simplify -->\\n{{? it.hasBirth }}\\n<div class=\\\"hasBirth js-date\\\">\\n    <!-- tag -->\\n    <input class=\\\"input-text\\\" required type=\\\"text\\\" date-min={{=it.birthMin}}\\n    date-max={{=it.birthMax}} date-error=\\\"{{=it.birthError}}\\\"\\n    placeholder=\\\"{{=it.birthPlaceholder}}\\\" {{? it.isBirthTag === \\\"hasTag\\\"}}\\n    data-tag=\\\"{{=it.birthTag}}\\\" {{?? true }}\\n    data-namespace=\\\"{{=it.birthNamespace}}\\\" data-key=\\\"{{=it.birthKey}}\\\" {{?}} />\\n    <label>{{=it.birthPlaceholder}}</label>\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- Subscribe newsletter checkbox -->\\n{{? it.hasNewsletter }}\\n<div class=\\\"hasNewsletter choice-block\\\">\\n    <div>\\n        <input type=\\\"checkbox\\\" class=\\\"input-text\\\" />\\n        <label>{{=it.subscribeNewsletter}}</label>\\n    </div>\\n</div>\\n{{?? true }}{{?}}\\n\\n<!-- Create account button -->\\n<p class=\\\"text-center hasSubmit\\\">\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{=it.registerAccount}}\\\"\\n    />\\n</p>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-inputs.html?");

/***/ }),

/***/ "./src/templates/register.html":
/*!*************************************!*\
  !*** ./src/templates/register.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{=it.createAccount}}</div>\\n<div class=\\\"sub-title text t-4\\\">{{=it.fillInfoToCreateAccount}}</div>\\n<div class=\\\"error js-psw-policy\\\"></div>\\n<form\\n    method=\\\"post\\\"\\n    id=\\\"RegisterForm\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"{{=it.formStyle}}\\\"\\n    data-blocks=\\\"{{=it.orderedBlock}}\\\"\\n>\\n    <input type=\\\"hidden\\\" name=\\\"return_to\\\" value=\\\"{{=it.redirectAfterRegister ||\\n    \\\"/\\\"}}\\\" />\\n    <input type=\\\"hidden\\\" name=\\\"customer[tags]\\\" value=\\\"\\\" />\\n\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"create_customer\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n\\n    {{#def.registerInputs }}\\n</form>\\n<p class=\\\"arrow-container js-back\\\"><i class=\\\"arrow left\\\"></i> Back</p>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register.html?");

/***/ }),

/***/ "./src/templates/root.html":
/*!*********************************!*\
  !*** ./src/templates/root.html ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"{{#def.container}}\\n<div style=\\\"display: none\\\"></div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/root.html?");

/***/ }),

/***/ "./src/templates/sign-in.html":
/*!************************************!*\
  !*** ./src/templates/sign-in.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{=it.loginTitle}}</div>\\n<div class=\\\"sub-title\\\">{{=it.enterEmailPswToConnect}}</div>\\n<div class=\\\"js-error\\\">\\n    <div class=\\\"error js-psw-valid\\\">{{=it.passwordTooShort}}</div>\\n    <div class=\\\"error js-psw-wrong\\\">{{=it.incorrectEmailOrPassword}}</div>\\n</div>\\n\\n<form\\n    method=\\\"post\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"{{=it.formStyle}}\\\"\\n    data-login-redirect=\\\"{{=it.loginRedirect || \\\"products\\\"}}\\\"\\n>\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"customer_login\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n    <div>\\n        <input\\n            type=\\\"email\\\"\\n            name=\\\"customer[email]\\\"\\n            autocomplete=\\\"email\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"{{=it.yourEmail}}\\\"\\n        />\\n        <label>{{=it.yourEmail}}</label>\\n    </div>\\n    <div>\\n        <input\\n            type=\\\"password\\\"\\n            value=\\\"\\\"\\n            name=\\\"customer[password]\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"{{=it.yourPassword}}\\\"\\n            autofocus\\n        />\\n        <label>{{=it.yourPassword}}</label>\\n    </div>\\n\\n    {{? it.hasPasswordRecover }}\\n    <div class=\\\"text-center\\\">\\n        <p><a href=\\\"#recover\\\" id=\\\"RecoverPassword\\\">Forgot your password?</a></p>\\n    </div>\\n    {{?? true }}{{?}}\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{=it.signIn}}\\\"\\n    />\\n</form>\\n{{? it.doYouLostPsw }}\\n<div class=\\\"secondary-action\\\">\\n    <a href=\\\"/account#recover-password\\\" class=\\\"link\\\">{{=it.doYouLostPsw}}</a>\\n</div>\\n{{?? true }}{{?}}\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/sign-in.html?");

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
/*!   export formStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasBirthDate [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasGender [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasNewsLetter [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasPasswordConfirmation [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export hasSocialLogin [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export incorrectEmailOrPassword [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export layout [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export login [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export loginRegister [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export passwordTooShort [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export pswPolicy [provided] [no usage info] [missing usage info prevents renaming] */
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
eval("module.exports = JSON.parse(\"{\\\"style\\\":{\\\"theme\\\":{\\\"--container-border-radius\\\":\\\"0em\\\",\\\"--container-bg-color\\\":\\\"rgba(90, 91, 91, 0.4)\\\",\\\"--container-bg-image\\\":\\\"url('https://cdn.shopify.com/s/files/1/2598/9270/products/Packshotfriandiseschatvolaille_600x.jpg?v=1599487575')\\\",\\\"--content-width\\\":\\\"530px\\\",\\\"--content-padding\\\":\\\"1.5em\\\",\\\"--content-bg-color\\\":\\\"#fff\\\",\\\"--primary-text-color\\\":\\\"#0d3c32\\\",\\\"--error-bg-color\\\":\\\"#bfd9cb\\\",\\\"--error-text-color\\\":\\\"#0d3c32\\\",\\\"--error-text-align\\\":\\\"left\\\",\\\"--hint-text-color\\\":\\\"#333\\\",\\\"--btn-bg-color\\\":\\\"#de7154\\\",\\\"--btn-disabled-bg-color\\\":\\\"#c6c1be\\\",\\\"--btn-disabled-opacity\\\":1,\\\"--large-font-family\\\":\\\"Helvetica Neue\\\",\\\"--large-font-size\\\":\\\"1.875rem\\\",\\\"--large-font-weight\\\":700,\\\"--large-line-height\\\":\\\"2em\\\",\\\"--large-letter-spacing\\\":\\\"0.05em\\\",\\\"--large-text-transform\\\":\\\"none\\\",\\\"--medium-text-size\\\":\\\"1.1em\\\",\\\"--medium-font-weight\\\":300,\\\"--input-padding\\\":\\\"10px 0\\\",\\\"--input-line\\\":\\\"none\\\",\\\"--placeholder-text-transform\\\":\\\"uppercase\\\",\\\"--placeholder-font-size\\\":\\\"inherit\\\",\\\"--placeholder-color\\\":\\\"inherit\\\",\\\"--text-input-margin\\\":\\\"0.9em\\\",\\\"--image-padding\\\":\\\"1em\\\",\\\"--image-size\\\":\\\"40%\\\",\\\"--image-url\\\":\\\"url('https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-Chat-1.png?v=1595510115')\\\"},\\\"page-landing\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-Chat-1.png?v=1595510115\\\\\\\")\\\",\\\"--image-width\\\":\\\"40%\\\"},\\\"page-register\\\":{\\\"--image\\\":\\\"url(\\\\\\\"https://cdn.shopify.com/s/files/1/2598/9270/files/Chien-16.png?v=1595509535\\\\\\\")\\\",\\\"--image-width\\\":\\\"40%\\\"}},\\\"text\\\":{\\\"hasGender\\\":false,\\\"hasSocialLogin\\\":false,\\\"hasPasswordConfirmation\\\":true,\\\"hasBirthDate\\\":false,\\\"hasNewsLetter\\\":true,\\\"layout\\\":\\\"popup-centered\\\",\\\"formStyle\\\":\\\"label-go-up\\\",\\\"createAccount\\\":\\\"Création de compte\\\",\\\"loginRegister\\\":\\\"Connexion / Inscription\\\",\\\"enterYourEmailToContinue\\\":\\\"Renseignez votre adresse email pour continuer.\\\",\\\"yourEmail\\\":\\\"Votre email\\\",\\\"signIn\\\":\\\"Se Connecter\\\",\\\"signUp\\\":\\\"S'inscrire\\\",\\\"fillInfoToCreateAccount\\\":\\\"Renseignez vos informations pour créer votre compte Franklin.\\\",\\\"login\\\":\\\"Connexion\\\",\\\"enterEmailPswToConnect\\\":\\\"Renseignez votre adresse email et votre mot de passe pour vous connecter.\\\",\\\"validate\\\":\\\"Valider\\\",\\\"yourFirstName\\\":\\\"Votre nom\\\",\\\"yourLastName\\\":\\\"Your last name\\\",\\\"yourPassword\\\":\\\"Votre mot de passe\\\",\\\"confirmYourPassword\\\":\\\"Confirmez votre mot de passe\\\",\\\"subscribeNewsletter\\\":\\\"Je m'inscris à la newsletter Franklin\\\",\\\"passwordTooShort\\\":\\\"Le mot de passe doit comporter au moins 5 caractères.\\\",\\\"incorrectEmailOrPassword\\\":\\\"Adresse email ou mot de passe incorrect.\\\",\\\"pswPolicy\\\":{\\\"passwordConfirmationError\\\":\\\"Les mots de passes ne correspondent pas\\\",\\\"pswMinLength\\\":6,\\\"pswMinLengthErr\\\":\\\"Le mot de passe doit comporter au moins 6 caractères\\\",\\\"pswMaxLength\\\":18,\\\"pswMaxLengthErr\\\":\\\"Password too long\\\",\\\"pswUppercase\\\":true,\\\"pswUppercaseErr\\\":\\\"Missing uppercase letters on your password\\\",\\\"pswNumber\\\":true,\\\"pswNumberErr\\\":\\\"Missing numbers on your password\\\",\\\"pswSpecialCharacter\\\":true,\\\"pswSpecialCharacterErr\\\":\\\"Missing special characters on your password\\\"},\\\"redirect\\\":{\\\"redirectAfterLogin\\\":\\\"/collections/all\\\",\\\"redirectAfterRegister\\\":\\\"/collections/all\\\"}}}\");\n\n//# sourceURL=webpack://stag-dotjs/./public/data/config.json?");

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

eval("const { updateCss, updatePages } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { loadActions, openAccount } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\nconst { getTheme, kastorHandler } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\nexports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);\n\nexports.showTheme = () => {\n    if (globalThis.self !== globalThis.top) openAccount();\n    kastorHandler();\n};\n\nconst onGetTheme = (theme) => {\n    updatePages(theme.text);\n    updateCss(theme.style);\n    loadActions();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/index.js?");

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

eval("const { SIGNIN_ID, ACTIVATE_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { LANDING_ID, REGISTER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { getCustomerStatus } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { toggleModules, $qq } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst disableBtn = (btn) => btn.setAttribute(\"disabled\", \"true\");\nconst { toggleLoading } = __webpack_require__(/*! ../utils/toggle-loading */ \"./src/utils/toggle-loading.js\");\nlet form, customerStatusPromise;\n\nconst activeBtn = (btn, email) => {\n    btn.removeAttribute(\"disabled\");\n    // TODO should I store the result in localStorage?\n    customerStatusPromise = getCustomerStatus(email);\n};\n\nconst onSubmit = async () => {\n    toggleLoading();\n    const result = await customerStatusPromise;\n    toggleLoading();\n    if (!result?.state) register();\n    else if (result.state === \"enabled\") toggleModules(SIGNIN_ID);\n    else if (result.state === \"disabled\") toggleModules(ACTIVATE_ID);\n};\n\nconst emailAutofill = () => {\n    const emailSelector = \"[type='email']\";\n    const email = form.querySelector(emailSelector).value;\n    $qq(`.${REGISTER_ID}`, `form ${emailSelector}`).value = email;\n    $qq(`.${SIGNIN_ID}`, `form ${emailSelector}`).value = email;\n};\n\nconst toggleButton = ({ target }) => {\n    const btn = form.querySelector(\"input[type='submit']\");\n    const email = target.value;\n    const isEmail = /[\\w.]+@\\w+\\.[a-z]{2,}/.test(email);\n    isEmail ? activeBtn(btn, email) : disableBtn(btn);\n};\n\nconst register = () => {\n    toggleModules(REGISTER_ID);\n};\n\nexports.init = () => {\n    form = $qq(`.${LANDING_ID}`, \"form\");\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n    form.addEventListener(\"submit\", emailAutofill);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/landing.js?");

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

eval("const { init: initLanding } = __webpack_require__(/*! ./landing */ \"./src/actions/landing.js\");\nconst { init: initSignIn } = __webpack_require__(/*! ./sign-in */ \"./src/actions/sign-in.js\");\nconst { init: initRegistration } = __webpack_require__(/*! ./register */ \"./src/actions/register.js\");\nconst { $q, toggleModules } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\nconst { LOGIN_BTN } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { LANDING_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\n\n//TODO refactoring too code repetition\n\nconst closeApp = () => {\n    // TODO remove container\n    $q(`.container`).style.setProperty(\"display\", \"none\");\n    document.body.classList.remove(\"remove-scrolling\");\n};\n\nconst initContainer = () => {\n    $q(`.js-close`).addEventListener(\"click\", closeApp);\n};\n\nconst placePopover = (e, dom) => {\n    const shift = parseInt(getComputedStyle(dom).getPropertyValue(\"width\"));\n    dom.style.setProperty(\"left\", `${e.clientX - shift / 2}px`);\n    dom.style.setProperty(\"top\", `${e.clientY + 20}px`);\n};\n\nconst openAccount = (e) => {\n    if (!globalThis.__st?.cid) {\n        e?.preventDefault();\n        e?.stopPropagation();\n        toggleModules(LANDING_ID);\n        const dom = $q(\".container\");\n        dom.style.setProperty(\"display\", \"flex\");\n        if (dom.classList.contains(\"popover\")) placePopover(e, dom);\n    }\n};\n\nexports.openAccount = openAccount;\nconst $ = document.querySelector.bind(document);\n$(LOGIN_BTN)?.addEventListener(\"click\", openAccount, true);\n\nexports.loadActions = () => {\n    initContainer();\n    initLanding();\n    initSignIn();\n    initRegistration();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/load.js?");

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

eval("const { REGISTER_ID, SIGNIN_ID, LANDING_ID } = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\nconst { toggleModules, $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { isFormFilled, checkInputs, sortBlocks } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { storeMetafieldIntoShopify } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { STORAGE_METAFIELD } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\nconst tgt = {\n    form: `.${REGISTER_ID} form`,\n    login: `.${REGISTER_ID} .js-login`,\n    pswDiffError: `.${REGISTER_ID} .js-error .js-psw-diff`,\n    pswFormatError: `.${REGISTER_ID} .js-error .js-psw-valid`,\n};\nconst multiChoiceSelector = \"multi-choice\";\n\nconst storeTags = () => {\n    const sel = `\n        [type='checkbox'][data-tag]:checked,\n        [type='text'][data-tag], \n        [type='date'][data-tag]\n    `;\n\n    const els = Array.from($q(tgt.form).querySelectorAll(sel));\n\n    const tags = els.map((el) => `${el.getAttribute(\"data-tag\")}:${el.value}`);\n    $q('[name=\"customer[tags]\"]').value = tags.join(\", \");\n};\n\nconst storeMetafield = () => {\n    const sel = `\n        [type='checkbox'][data-key]:checked,\n        [type='text'][data-key], \n        [type='date'][data-key]\n    `;\n    const els = Array.from($q(tgt.form).querySelectorAll(sel));\n    const metafields = els.map((el) => {\n        return {\n            namespace: el.getAttribute(\"data-namespace\"),\n            key: el.getAttribute(\"data-key\"),\n            value: el.value,\n        };\n    });\n\n    localStorage.setItem(STORAGE_METAFIELD, JSON.stringify(metafields));\n    console.log(\"localStorage\", localStorage.getItem(STORAGE_METAFIELD));\n};\n\nconst handleChoiceBlock = ({ target, currentTarget }) => {\n    if (!currentTarget.classList.contains(multiChoiceSelector)) {\n        currentTarget.querySelectorAll(\"[type='checkbox']\").forEach((e) => {\n            e.checked = false;\n        });\n        target.checked = true;\n    }\n};\n\nconst toggleSecret = (e) => {\n    const secret = $q(\"[name='customer[password]']\");\n    secret.type = secret.type === \"password\" ? \"text\" : \"password\";\n};\n\nconst toggleButton = ({ target }) => {\n    if (target.value.length > 2) {\n        const btn = target.closest(\"form\").querySelector(\"[type='submit']\");\n        btn.removeAttribute(\"disabled\");\n    }\n\n    const btn = $q(tgt.form).querySelector(\"input[type='submit']\");\n    isFormFilled($q(tgt.form))\n        ? btn.removeAttribute(\"disabled\")\n        : btn.setAttribute(\"disabled\", \"true\");\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n    storeTags();\n    storeMetafield();\n    const { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n    if (!(await checkInputs($q(tgt.form)))) return null;\n    $q(tgt.form).action = \"/account\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    console.log(\"shopify response\", resp);\n};\n\nconst changeSlide = (e) => {\n    const ele = $q(tgt.form).querySelector(\".carousel\");\n    const shift = parseInt(getComputedStyle(ele).getPropertyValue(\"width\"), 10);\n    const left = /js-next/.test(e.target.className) ? shift : -shift;\n    ele.scrollBy({\n        left: left,\n        behavior: \"smooth\",\n    });\n};\n\nconst formatDate = ({ target }) => (target.type = \"date\");\n\nexports.init = () => {\n    const form = $q(tgt.form);\n    sortBlocks();\n    form.addEventListener(\"input\", toggleButton);\n    form.querySelectorAll(\".js-next, .js-prev\").forEach((e) =>\n        e.addEventListener(\"click\", changeSlide)\n    );\n    form.addEventListener(\"submit\", onSubmit);\n    $q(tgt.login)?.addEventListener(\"click\", () => toggleModules(SIGNIN_ID));\n    form.querySelector(\".js-show-psw\")?.addEventListener(\"click\", toggleSecret);\n    form.querySelector(\".choice-block\")?.addEventListener(\n        \"click\",\n        handleChoiceBlock\n    );\n    $q(\".js-date input\")?.addEventListener(\"focus\", formatDate);\n    storeMetafieldIntoShopify();\n    $q(\".js-back\")?.addEventListener(\"click\", () => toggleModules(LANDING_ID));\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/register.js?");

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

eval("const { SIGNIN_ID, REGISTER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { $q, isValidEmail } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nconst tgt = {\n    form: `.${SIGNIN_ID} form`,\n    pswFormatError: `.${SIGNIN_ID} .js-error .js-psw-valid`,\n    register: `.js-create-account`,\n    wrongPsw: `.js-psw-wrong`,\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n    $q(tgt.form).action = \"/account/login\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    console.log(\"shopify response\", resp);\n    const { shop } = globalThis?.Shopify;\n    const redirect = $q(\"[data-login-redirect]\");\n    globalThis.location.href = `https://${shop}/${redirect}`;\n    // globalThis.__form = $q(tgt.form);\n};\n\nconst toggleButton = (e) => {\n    const form = $q(tgt.form);\n    const email = form.querySelector('[name=\"customer[email]\"]').value;\n    isValidEmail(email)\n        ? form.querySelector(\"[type='submit']\").removeAttribute(\"disabled\")\n        : form.querySelector(\"[type='submit']\").setAttribute(\"disabled\", \"\");\n};\n\nconst register = () => toggleModules(REGISTER_ID);\n\nexports.init = () => {\n    const form = $q(tgt.form);\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n    $q(tgt.register)?.addEventListener(\"click\", register);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/sign-in.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = {\n    LOGIN_BTN: \".site-header__account\",\n    PROXY_PATH: \"apps/dev\",\n    STORAGE_KEY: \"shopify_customer_metafields\",\n    // TODO get it from the PROXY\n    CONFIG_ENDPOINT: \"https://login-popup-dev-theme.s3.amazonaws.com\",\n    IDs: {\n        APP_ID: \"login-popup\",\n        ROOT_ID: \"bbb\",\n        CONTAINER_ID: \"container\",\n        LANDING_ID: \"landing\",\n        REGISTER_ID: \"register\",\n        SIGNIN_ID: \"signin\",\n        ACTIVATE_ID: \"activate\",\n    },\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/config.js?");

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
/*! export getCustomerStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export kastorHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sendHttpRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeMetafieldIntoShopify [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const {\n    getCustomerStatus,\n    getTheme,\n    storeMetafieldIntoShopify,\n} = __webpack_require__(/*! ./proxy */ \"./src/services/proxy.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ./shopify */ \"./src/services/shopify.js\");\nconst { kastorHandler } = __webpack_require__(/*! ./kastor-handler */ \"./src/services/kastor-handler.js\");\n\nexports.storeMetafieldIntoShopify = storeMetafieldIntoShopify;\nexports.getCustomerStatus = getCustomerStatus;\nexports.sendHttpRequest = sendHttpRequest;\nexports.getTheme = getTheme;\nexports.kastorHandler = kastorHandler;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/index.js?");

/***/ }),

/***/ "./src/services/kastor-handler.js":
/*!****************************************!*\
  !*** ./src/services/kastor-handler.js ***!
  \****************************************/
/*! default exports */
/*! export kastorHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updatePages, $q, showError } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { getBlocksAttr } = __webpack_require__(/*! ../utils/load-pages */ \"./src/utils/load-pages.js\");\n\nconst debounce = (fn, delay) => {\n    let timeoutId;\n    return (...args) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n};\n\nconst changePage = (page) => {\n    const { loadActions } = __webpack_require__(/*! ../actions/load */ \"./src/actions/load.js\");\n    const { toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    toggleModules(page);\n    $q(\".container\").style.setProperty(\"display\", \"flex\");\n    loadActions();\n};\n\nconst getBlocks = (json) => {\n    const blocks = [];\n    Object.keys(json).forEach((e) => {\n        blocks.push(`${e}${Object.keys(json[e]).length > 0}`);\n    });\n    return blocks;\n};\n\nconst showBlocks = (blocks) => {\n    blocks.forEach((block) => {\n        const [, name, display] = block.split(\"|\");\n        console.log(name, display, typeof display);\n        updatePages({ [name]: display === \"false\" ? false : true });\n    });\n    changePage(\"register\");\n};\n\nconst getIdsVsBlocks = (json) => {\n    const idsVsBlocks = Object.keys(json).map((e) => ({\n        [Object.keys(json[e])[0]]: e,\n    }));\n    return idsVsBlocks.filter((e) => Object.keys(e)[0] !== \"undefined\");\n};\n\nconst getOrderedBlocks = ({ blocks, order }) => {\n    let idsVsBlocks = getIdsVsBlocks(blocks);\n    idsVsBlocks = idsVsBlocks.sort(\n        (a, b) =>\n            order.indexOf(Object.keys(a)[0]) - order.indexOf(Object.keys(b)[0])\n    );\n\n    return idsVsBlocks.map((e) => Object.values(e)[0].split(\"|\")[1]);\n\n    // console.log(blocks_order);\n    // blocks_order.filter((e) => blocks);\n};\n\nconst getData = (event) => {\n    const e = event.data ? event.data : event.detail.data;\n    return e.data;\n};\n\nconst getTarget = (event) => {\n    const e = event.data ? event.data : event.detail.data;\n    return e.target;\n};\n\nconst parseEventData = (event) => {\n    const data = getData(event);\n    if (!data) return [undefined, undefined];\n    const { setting_id, section_type, block_type_id } = data;\n    const value = getData(event) == \"block:remove\" ? false : data.value;\n    const selector = setting_id || section_type || block_type_id;\n    return [selector, value];\n};\n\nconst updateNoBlock = (event) => {\n    const [selector, value] = parseEventData(event);\n\n    if (!selector) return null;\n    const [, page, key, unit] = selector.match(/^(.*?)\\|(.*?)\\|(.*?)$/);\n    const valueAndUnit = typeof value == \"object\" ? value : `${value}${unit}`;\n\n    const { updateCss } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    if (!/--animation/.test(key)) updateCss({ \"--animation\": \"none\" });\n    if (/^--/.test(key)) {\n        updateCss({ [key]: valueAndUnit });\n    } else\n        updatePages({ [key]: valueAndUnit == \"false\" ? false : valueAndUnit });\n\n    if (page) changePage(page);\n    // TODO: too fragile check the password policy in this way, you should refactore the code using objects\n    if (/^psw.*Err$/.test(key)) showError([value]);\n};\n\nconst kastorHandler = (event) => {\n    //reorder blocks\n    const target = getTarget(event);\n    if (target === \"block:reorder\") {\n        const orderBlocks = getOrderedBlocks(getData(event));\n        updatePages({ orderedBlock: orderBlocks });\n        changePage(\"register\"); // TODO remove magic number\n        return null;\n    }\n    //remove block\n    if (target === \"block:remove\") {\n        const { block_type_id } = getData(event);\n        const blockToDel = block_type_id.split(\"|\")[1];\n        const filteredBlocks = getBlocksAttr().filter((e) => e !== blockToDel);\n        updatePages({ orderedBlock: filteredBlocks });\n        updatePages({ [blockToDel]: false });\n        changePage(\"register\"); // TODO remove magic number\n        return null;\n    }\n    //add a block\n    if (target === \"block:add\") {\n        //TODO @Thomas, why two different names? (target: \"setting:update\")\n        const { block_type_id, block_settings } = getData(event);\n        const [page, blockToAdd] = block_type_id.split(\"|\");\n        const key = Object.keys(block_settings)[0].split(\"|\")[1];\n        const value = Object.values(block_settings)[0];\n        updatePages({ [key]: value });\n        updatePages({ [blockToAdd]: true });\n        changePage(page);\n        return null;\n    }\n\n    updateNoBlock(event);\n};\n\nexports.kastorHandler = () =>\n    globalThis.addEventListener(\"message\", debounce(kastorHandler, 500));\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/kastor-handler.js?");

/***/ }),

/***/ "./src/services/proxy.js":
/*!*******************************!*\
  !*** ./src/services/proxy.js ***!
  \*******************************/
/*! default exports */
/*! export getCustomerStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeMetafieldIntoShopify [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const {\n    PROXY_PATH,\n    STORAGE_METAFIELD,\n    STORAGE_CONFIG,\n    CONFIG_ENDPOINT,\n} = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nexports.getCustomerStatus = async (email) => {\n    // return { state: \"enabled\", properties: {} };\n    const shop = globalThis?.Shopify?.shop;\n\n    const endpoint = shop\n        ? `https://${shop}/${PROXY_PATH}/get-customer-status/${email}`\n        : \"https://api.mocki.io/v1/ce5f60e2\";\n\n    try {\n        const promise = await fetch(endpoint);\n        const result = await promise.json();\n        return result;\n    } catch (err) {\n        console.log(\"error in proxy.js: \", err);\n        //TODO what should I do if the proxy does not work?\n        return {};\n    }\n};\n\nexports.getTheme = async () => {\n    //TODO implements memoization\n    const shopName =\n        globalThis.Shopify?.shop || \"test-login-popup.myshopify.com\";\n    const endpoint = `${CONFIG_ENDPOINT}/${shopName}/configuration.json`;\n    // const endpoint = \"data/configuration.json\";\n    console.log(endpoint);\n    const promise = await globalThis.fetch(endpoint, {\n        headers: { pragma: \"no-cache\" },\n    });\n    const result = await promise.json();\n    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(result));\n    return result;\n};\n\nexports.storeMetafieldIntoShopify = async () => {\n    const shop = globalThis?.Shopify?.shop;\n    const cid = globalThis?.__st?.cid;\n    const endpoint = `https://${shop}/${PROXY_PATH}/set-metafield-in-shopify`;\n    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);\n\n    if (metafieldStorage && cid) {\n        const params = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({\n                cid: cid + \"\",\n                metafields: JSON.parse(metafieldStorage),\n            }),\n        };\n        console.log(\"There is metafieldStorage: \", metafieldStorage);\n        const promise = await globalThis.fetch(endpoint, params);\n        const result = await promise.json();\n        console.log(\"storeMetafieldIntoShopify result: \", result);\n        if (result) localStorage.removeItem(STORAGE_METAFIELD);\n    } else {\n        console.log(\"there are not \", STORAGE_METAFIELD);\n    }\n\n    return 0;\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/proxy.js?");

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

eval("const { $q } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst tgt = {\n    errorMsg: \".js-error\",\n    close: \".js-close\",\n    shopifyRes: \".js-shopify-response\",\n    isLogged: \"#customer_logout_link\",\n    wrongPsw: \"#customer_login\",\n    captha: \".shopify-challenge__button.btn\",\n};\n\nexports.sendHttpRequest = (method, e) => {\n    return new Promise((res, rej) => {\n        const xhr = new XMLHttpRequest();\n        xhr.open(method, e.target.action);\n        xhr.send(new FormData(e.target));\n        xhr.onload = () => {\n            if (xhr.status >= 400) rej(xhr.response);\n            else res(parseShopifyResponse(e, xhr.response));\n        };\n        xhr.onerror = (err) => rej(`Server error: ${err}`); //triggered if there is no connection\n    });\n};\n\nconst shopifyResult = (html) => ({\n    isLogged: html.querySelector(tgt.isLogged) != null,\n    hasWrongPsw: html.querySelector(tgt.wrongPsw) != null,\n    hasChallenge: html.querySelector(tgt.captha) != null,\n    // TODO adding other checks (unique email, ....)\n});\n\nconst parseShopifyResponse = ({ target }, response) => {\n    const htmlResponse = new DOMParser().parseFromString(response, \"text/html\");\n    const resp = shopifyResult(htmlResponse);\n    console.log(resp);\n    if (resp.isLogged) $q(tgt.close).click();\n    else if (resp.hasWrongPsw) onWrongPsw(target);\n    else if (resp.hasChallenge) target.submit();\n    return resp;\n};\n\nconst onWrongPsw = (target) => {\n    const { text } = __webpack_require__(/*! ../../public/data/config.json */ \"./public/data/config.json\");\n    const error = target.previousSibling;\n    error.innerHTML = text.incorrectEmailOrPassword;\n    error.style.setProperty(\"display\", \"block\");\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/shopify.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 30:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const rootTmpl = __webpack_require__(/*! ./root.html */ \"./src/templates/root.html\");\nconst containerTmpl = __webpack_require__(/*! ./container.html */ \"./src/templates/container.html\");\nconst landingTmpl = __webpack_require__(/*! ./landing.html */ \"./src/templates/landing.html\");\nconst registerTmpl = __webpack_require__(/*! ./register.html */ \"./src/templates/register.html\");\nconst signInTmpl = __webpack_require__(/*! ./sign-in.html */ \"./src/templates/sign-in.html\");\nconst activateTmpl = __webpack_require__(/*! ./activate.html */ \"./src/templates/activate.html\");\nconst registerInputsTmpl = __webpack_require__(/*! ./register-inputs.html */ \"./src/templates/register-inputs.html\");\nconst [APP_ID, ROOT_ID, CONTAINER_ID] = [\"login-popup\", \"bbb\", \"container\"];\nconst [LANDING_ID, REGISTER_ID, SIGNIN_ID] = [\"landing\", \"register\", \"signin\"];\nconst [ACTIVATE_ID] = [\"activate\"];\n\nconst getTemplate = ({ id, html }) =>\n    `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n\nconst getPartialTemplate = ({ id, html }) => {\n    html = `<div class=\"${id}\" style=\"display: none\">${html}</div>`;\n    return `<script id=\"${id}\" type=\"text/x-dot-template\">${html}</script>`;\n};\nconst templates = [];\n\ntemplates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));\ntemplates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));\ntemplates.push(getPartialTemplate({ id: LANDING_ID, html: landingTmpl }));\ntemplates.push(getPartialTemplate({ id: REGISTER_ID, html: registerTmpl }));\ntemplates.push(getPartialTemplate({ id: ACTIVATE_ID, html: activateTmpl }));\ntemplates.push(getTemplate({ id: \"registerInputs\", html: registerInputsTmpl }));\n\ntemplates.push(getPartialTemplate({ id: SIGNIN_ID, html: signInTmpl }));\n\nmodule.exports = {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n    ACTIVATE_ID,\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! default exports */
/*! export $q [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $qq [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkInputs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showError [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sortBlocks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updatePages, updateCss, sortBlocks } = __webpack_require__(/*! ./load-pages */ \"./src/utils/load-pages.js\");\nconst { toggleModules } = __webpack_require__(/*! ./toggle-module */ \"./src/utils/toggle-module.js\");\nconst { isValidEmail, isFormFilled, checkInputs } = __webpack_require__(/*! ./input-checker */ \"./src/utils/input-checker.js\");\nconst { showError } = __webpack_require__(/*! ./input-checker */ \"./src/utils/input-checker.js\");\nconst { $q, $qq } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nexports.updateCss = updateCss;\nexports.updatePages = updatePages;\nexports.toggleModules = toggleModules;\nexports.isFormFilled = isFormFilled;\nexports.showError = showError;\nexports.isValidEmail = isValidEmail;\nexports.$q = $q;\nexports.$qq = $qq;\nexports.sortBlocks = sortBlocks;\nexports.checkInputs = checkInputs;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/input-checker.js":
/*!************************************!*\
  !*** ./src/utils/input-checker.js ***!
  \************************************/
/*! default exports */
/*! export checkInputs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\nconst errorSelector = \".js-psw-policy\";\nconst { STORAGE_CONFIG } = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nconst checkDate = () => {\n    const { minDate, maxDate, error, customerAge } = getDateAttr();\n    if (minDate > customerAge || maxDate < customerAge) return [error];\n    return [];\n};\nconst getCustomerAge = (dateElem) => {\n    const DAY_IN_YEAR = 365;\n    const SEC_IN_DAY = 3600 * 24;\n    const MSEC_IN_DAY = 1000 * SEC_IN_DAY;\n    const userSec = new Date(dateElem.value).getTime();\n    const nowSec = new Date().getTime();\n    const days = parseInt((nowSec - userSec) / MSEC_IN_DAY);\n    return days / DAY_IN_YEAR;\n};\nconst getDateAttr = () => {\n    const dateElem = $q(\"[type='date']\");\n    return {\n        minDate: dateElem.getAttribute(\"date-min\"),\n        maxDate: dateElem.getAttribute(\"date-max\"),\n        error: dateElem.getAttribute(\"date-error\"),\n        customerAge: getCustomerAge(dateElem),\n    };\n};\n\nconst showError = (errorMsgs) => {\n    // TODO you should use the css to hide/show!!\n    const list = document.createElement(\"ul\");\n    errorMsgs.forEach((e) => {\n        const item = document.createElement(\"li\");\n        item.appendChild(document.createTextNode(e));\n        list.appendChild(item);\n    });\n    $q(errorSelector).appendChild(list);\n    $q(errorSelector).style.setProperty(\"display\", \"block\");\n    return false;\n};\nconst resetErrorMsgs = () => {\n    $q(errorSelector).innerText = \"\";\n    $q(errorSelector).style.setProperty(\"display\", \"none\");\n};\n\nconst getPasswordPolicyErrors = async (inputs) => {\n    const psw = inputs[\"customer[password]\"];\n    const errorMsgs = [];\n    const pswPolicy = JSON.parse(localStorage.getItem(STORAGE_CONFIG))[\"text\"];\n    // TODO refactor!!\n    if (psw.length < pswPolicy.pswMinLength)\n        errorMsgs.push(pswPolicy.pswMinLengthErr);\n    if (psw.length > pswPolicy.pswMaxLength)\n        errorMsgs.push(pswPolicy.pswMaxLengthErr);\n    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(psw))\n        errorMsgs.push(pswPolicy.pswUppercaseErr);\n    if (pswPolicy.hasPswNumber && !/(?=.*\\d)/.test(psw))\n        errorMsgs.push(pswPolicy.pswNumberErr);\n    if (pswPolicy.hasPswSpecialCharacter && !/(?=.*[\\W|_])/.test(psw))\n        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);\n    if (pswPolicy.hasPswUppercase && !/[A-Z]/.test(psw))\n        errorMsgs.push(pswPolicy.pswUppercaseErr);\n\n    return errorMsgs;\n};\n\nconst serialize = (form) => {\n    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });\n    return Array.from(new FormData(form)).reduce(reducer, {});\n};\n\nexports.isFormFilled = (form) =>\n    Array.from(form.querySelectorAll(\"input[required]\")).every((e) => e.value);\n\nexports.checkInputs = async (form) => {\n    resetErrorMsgs();\n    const errors = [];\n    const inputs = serialize(form);\n    errors.push(...(await getPasswordPolicyErrors(inputs)));\n    errors.push(...checkDate());\n    return errors.length === 0 ? true : showError(errors) && false;\n};\n\nexports.isValidEmail = (email) => /\\S+@\\S+\\.\\S+/.test(email);\n\nexports.showError = showError;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/input-checker.js?");

/***/ }),

/***/ "./src/utils/load-pages.js":
/*!*********************************!*\
  !*** ./src/utils/load-pages.js ***!
  \*********************************/
/*! default exports */
/*! export getBlocksAttr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sortBlocks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updatePages [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const doT = __webpack_require__(/*! ../doT */ \"./src/doT.js\");\nconst {\n    templates,\n    APP_ID,\n    ROOT_ID,\n    CONTAINER_ID,\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n    ACTIVATE_ID,\n} = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst $ = document.querySelector.bind(document);\n\nlet TEXT = {};\n\nconst getDef = () => ({\n    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,\n    [LANDING_ID]: document.getElementById(LANDING_ID).text,\n    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,\n    [ACTIVATE_ID]: document.getElementById(ACTIVATE_ID).text,\n    [SIGNIN_ID]: document.getElementById(SIGNIN_ID).text,\n    registerInputs: document.getElementById(\"registerInputs\").text,\n});\n\nconst appendTemplate = (e) => {\n    const elemDiv = document.createElement(\"div\");\n    elemDiv.innerHTML = e.trim();\n    document.body.appendChild(elemDiv);\n};\n\nconst getTemplate = (data) => {\n    data?.orderedBlock?.forEach((e) => (data[e] = true));\n    templates.forEach(appendTemplate);\n    return doT.template({\n        tmpl: document.getElementById(ROOT_ID).text,\n        def: getDef(),\n    })(data);\n};\n\nconst updateText = (text) => {\n    const hasManyKeys = Reflect.ownKeys(text).length > 1;\n    const firstKey = Reflect.ownKeys(text)[0];\n    if (hasManyKeys) TEXT = text;\n    else TEXT[firstKey] = text[firstKey];\n    return TEXT;\n};\n\nconst getBlocksAttr = () => {\n    const blocks = $(`.${REGISTER_ID} form`).getAttribute(\"data-blocks\");\n    return blocks.length > 0 ? blocks.split(\",\") : [];\n};\n\nconst filterCss = (data) => {\n    // TODO refactoring\n    let imgUrl;\n    imgUrl = data[\"--container-bg-image\"];\n    if (imgUrl) data[\"--container-bg-image\"] = `url(${imgUrl})`;\n    imgUrl = data[\"--form-header-image\"];\n    if (imgUrl) data[\"--form-header-image\"] = `url(${imgUrl})`;\n    return data;\n};\n\nexports.getBlocksAttr = getBlocksAttr;\n\nexports.sortBlocks = () => {\n    const blocks = getBlocksAttr();\n    blocks.forEach((e, i) => $(`.${e}`)?.style?.setProperty(\"order\", i));\n};\n\nexports.updatePages = (text) => {\n    text = updateText(text);\n    $(`#${APP_ID}`).innerHTML = getTemplate(text);\n};\n\nexports.updateCss = (cssVars) => {\n    // cssVars[\"--image-url\"] = `url(${cssVars[\"--image-url\"]})`;\n\n    cssVars = filterCss(cssVars);\n    console.log(cssVars[\"--container-bg-image\"]);\n    (function traverse(obj, key) {\n        if (obj !== null && typeof obj == \"object\") {\n            Object.entries(obj).forEach(([key, value]) => traverse(value, key));\n        } else $(`#${APP_ID}`).style.setProperty(key, obj);\n    })(cssVars);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-pages.js?");

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

/***/ "./src/utils/toggle-loading.js":
/*!*************************************!*\
  !*** ./src/utils/toggle-loading.js ***!
  \*************************************/
/*! default exports */
/*! export toggleLoading [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { APP_ID, CONTAINER_ID } = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\n\nconst $ = document.querySelector.bind(document);\n\nexports.toggleLoading = () => {\n    const loading = $(`#${APP_ID} .loading`);\n    if (loading.style.getPropertyValue(\"display\") == \"none\") {\n        loading.style.setProperty(\"display\", \"block\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 0.2);\n    } else {\n        loading.style.setProperty(\"display\", \"none\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 1);\n    }\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-loading.js?");

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

eval("const {\n    LANDING_ID,\n    REGISTER_ID,\n    SIGNIN_ID,\n    ACTIVATE_ID,\n} = __webpack_require__(/*! ../templates/ */ \"./src/templates/index.js\");\nconst { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nexports.toggleModules = (id) => {\n    $q(`.${LANDING_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${REGISTER_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${SIGNIN_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${ACTIVATE_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${id}`).style.setProperty(\"display\", \"block\");\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-module.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/animations.scss":
/*!************************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/animations.scss ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"@keyframes fade-in-show {\\n  0% {\\n    opacity: 0;\\n    transform: 0.2;\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n@keyframes slide-from-right {\\n  0% {\\n    transform: translateX(100%);\\n  }\\n  100% {\\n    transform: translateX(0%);\\n  }\\n}\\n@keyframes slide-from-bottom {\\n  0% {\\n    transform: translateY(100%);\\n  }\\n  100% {\\n    transform: translateY(0%);\\n  }\\n}\\n@keyframes slide-from-left {\\n  0% {\\n    transform: translateX(-100%);\\n  }\\n  100% {\\n    transform: translateX(0%);\\n  }\\n}\\n@keyframes slide-from-top {\\n  0% {\\n    transform: translateY(-100%);\\n  }\\n  100% {\\n    transform: translateY(0%);\\n  }\\n}\\n@keyframes shake {\\n  10%, 90% {\\n    transform: translate3d(-2px, 0, 0);\\n  }\\n  20%, 80% {\\n    transform: translate3d(4px, 0, 0);\\n  }\\n  30%, 50%, 70% {\\n    transform: translate3d(-8px, 0, 0);\\n  }\\n  40%, 60% {\\n    transform: translate3d(8px, 0, 0);\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/animations.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".arrow-container {\\n  color: var(--ternary-text-color, #0d3c32);\\n  margin-top: 15px;\\n  cursor: pointer;\\n}\\n\\n.arrow {\\n  border: solid var(--ternary-text-color, #0d3c32);\\n  border-width: 0 3px 3px 0;\\n  display: inline-block;\\n  padding: 3px;\\n}\\n\\n.left {\\n  transform: rotate(135deg);\\n  -webkit-transform: rotate(135deg);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/carousel.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/form.scss":
/*!******************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/form.scss ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#login-popup {\\n  /* START - GO UP */\\n  /* START - GO UP */\\n  /* START - GO UP */\\n  /* START - GO DOWN */\\n  /* START - GO DOWN */\\n  /* START - GO RIGHT */\\n  /* END - GO RIGHT */\\n}\\n#login-popup form {\\n  margin-top: 20px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n#login-popup form .hasSubmit {\\n  order: 10;\\n}\\n#login-popup form > div {\\n  margin: 0.8em 0;\\n  position: relative;\\n}\\n#login-popup .input-text {\\n  border: var(--input-line);\\n  border-bottom: 1px solid #333;\\n  background-color: unset;\\n  outline: none;\\n  font-size: 1em;\\n  color: #333;\\n  min-width: 100%;\\n  padding: var(--input-padding);\\n}\\n#login-popup label {\\n  z-index: 0;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  opacity: 0.5;\\n  transform-origin: 0 0;\\n  transition: transform 0.3s ease-in-out;\\n  background-color: var(--content-bg-color, #fff);\\n  font-size: var(--placeholder-font-size);\\n  color: var(--placeholder-color);\\n  text-transform: var(--placeholder-text-transform);\\n}\\n#login-popup .label-go-up input::placeholder {\\n  color: transparent;\\n}\\n#login-popup .label-go-up input::placeholder {\\n  color: transparent;\\n}\\n#login-popup .label-go-up input:focus + label,\\n#login-popup .label-go-up input:not(:placeholder-shown) + label {\\n  transform: translateY(-1em) scale(0.8);\\n}\\n#login-popup .label-go-down input::placeholder {\\n  color: transparent;\\n}\\n#login-popup .label-go-down input:focus + label,\\n#login-popup .label-go-down input:not(:placeholder-shown) + label {\\n  transform: translateY(1.2em) scale(0.8);\\n}\\n#login-popup .label-go-down input {\\n  padding-bottom: 15px;\\n}\\n#login-popup .label-go-right > div {\\n  overflow: hidden;\\n}\\n#login-popup .label-go-right input {\\n  padding: 8px 0;\\n}\\n#login-popup .label-go-right input + label {\\n  transition: color 0.4s, right 0.4s, left 0.4s;\\n  position: absolute;\\n  opacity: 0.5;\\n  left: unset;\\n  right: 100%;\\n  width: 100%;\\n  margin-right: -100%;\\n}\\n#login-popup .label-go-right input:focus + label {\\n  right: 0;\\n  margin-right: 0;\\n  width: 40%;\\n  padding: 5px;\\n  background: #111;\\n  color: white;\\n  font-size: 70%;\\n  height: 100%;\\n  z-index: 1;\\n  text-transform: uppercase;\\n  opacity: 0.8;\\n}\\n#login-popup .label-go-right input:valid {\\n  background: white;\\n}\\n#login-popup .label-fixed label {\\n  display: block;\\n  font-size: 0.8em;\\n  top: unset;\\n}\\n#login-popup .label-fixed input::placeholder {\\n  color: transparent;\\n}\\n#login-popup .label-none label {\\n  display: none;\\n}\\n#login-popup .choice-block {\\n  text-align: left;\\n}\\n#login-popup .choice-block > div {\\n  display: inline-block;\\n}\\n#login-popup .choice-block.multi-line > div {\\n  display: block;\\n}\\n#login-popup .choice-block label {\\n  opacity: 1;\\n  position: unset;\\n  display: inline-block;\\n}\\n#login-popup .choice-block input {\\n  min-width: unset;\\n}\\n#login-popup .choice-block input[type=checkbox] {\\n  width: 1.1em;\\n  height: 1.1em;\\n  background-color: white;\\n  vertical-align: middle;\\n  border: 1px solid #ddd;\\n  -webkit-appearance: none;\\n  outline: none;\\n  cursor: pointer;\\n  padding: 10px;\\n}\\n#login-popup .choice-block input[type=checkbox]:checked {\\n  background-color: gray;\\n}\\n#login-popup .choice-block.single-choice input[type=checkbox] {\\n  border-radius: 50%;\\n}\\n#login-popup .choice-block.multi-choice input[type=checkbox] {\\n  border-radius: 25%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/form.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"/*  ===================\\n    Table of contents\\n\\n        - Global styles\\n        - Theme/Typography\\n        - Components\\n        - Partials\\n\\n    =================== */\\n/*  ===================\\n    1. Global styles\\n    =================== */\\nbody.remove-scrolling {\\n  margin: 0;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n\\n/*  ===================\\n    Theme/Typography\\n    =================== */\\n.container {\\n  text-align: center;\\n  z-index: 99;\\n  position: absolute;\\n  animation: var(--animation) 1.5s;\\n}\\n\\n.content {\\n  color: var(--primary-text-color);\\n  background-color: var(--content-bg-color, #fff);\\n  border-radius: var(--container-border-radius);\\n  padding: var(--content-padding, 1.5em);\\n  position: relative;\\n}\\n\\n.error {\\n  background-color: var(--error-bg-color, #bfd9cb);\\n  border-radius: 3px;\\n  color: var(--error-text-color, #0d3c32);\\n  display: none;\\n  margin: 10px 0;\\n  padding: 5px;\\n  text-align: var(--error-text-align, left);\\n}\\n\\n/*  ===================\\n    Components\\n    =================== */\\n.form-image {\\n  content: var(--form-header-image);\\n  padding: var(--image-padding, \\\"1em\\\");\\n  width: var(--image-size, \\\"40%\\\");\\n}\\n\\n.title {\\n  font-family: var(--large-font-family);\\n  font-size: var(--large-font-size);\\n  font-weight: var(--large-font-weight);\\n  letter-spacing: var(--large-letter-spacing);\\n  line-height: var(--large-line-height);\\n  text-transform: var(--large-text-transform);\\n}\\n\\n.sub-title {\\n  font-size: var(--medium-text-size);\\n  font-weight: var(--medium-font-weight);\\n  color: var(--secondary-text-color, #02100a);\\n}\\n\\n.btn {\\n  border: none;\\n  color: #fff;\\n  cursor: pointer;\\n  padding: 10px;\\n  text-transform: uppercase;\\n  width: 100%;\\n  margin-top: 15px;\\n}\\n\\n.btn.btn-primary,\\n.btn.btn-primary:focus {\\n  background-color: var(--btn-bg-color);\\n}\\n\\n.btn:disabled,\\n.btn[disabled] {\\n  opacity: 0.5;\\n}\\n\\n.btn-small {\\n  width: 40%;\\n  margin: 20px auto;\\n}\\n\\n.btn-close {\\n  cursor: pointer;\\n  font-size: 40px;\\n  position: absolute;\\n  right: 14px;\\n  top: 0;\\n  transform: rotate(45deg);\\n  color: var(--ternary-text-color, #0d3c32);\\n}\\n\\n.link {\\n  color: var(--link-color);\\n}\\n\\n.eye-icon {\\n  color: #000;\\n  cursor: pointer;\\n  position: absolute;\\n  margin-left: 3px;\\n  margin-top: 3px;\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 70% 15%;\\n  border: solid 1px currentColor;\\n  -webkit-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n  right: 4px;\\n}\\n\\n.eye-icon:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 2px;\\n  top: 2px;\\n  width: 6px;\\n  height: 6px;\\n  border-radius: 50%;\\n  border: solid 1px currentColor;\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n  min-width: unset;\\n}\\n\\n.checkbox-container {\\n  align-items: center;\\n  display: flex;\\n  margin-top: 14px;\\n}\\n\\n.mandatory-container {\\n  margin-top: 10px;\\n}\\n\\n/*  ===================\\n    Partials\\n    =================== */\\n.or-social-login {\\n  margin: 15px 0;\\n}\\n\\n.fb {\\n  background-color: #3b5998;\\n  color: white;\\n}\\n\\n.google {\\n  background-color: #dd4b39;\\n  color: white;\\n}\\n\\n.mt-1 {\\n  margin-top: 10px;\\n}\\n\\n.mt-2 {\\n  margin-top: 20px;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 5px;\\n}\\n\\n/*  ===================\\n    3. Pages\\n    =================== */\\n/*  ===================\\n    3. Modules\\n    =================== */\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/main.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.scss":
/*!*******************************************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.scss ***!
  \*******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"/* 4 different popup\\n    1) popup-centered\\n    2) popup-floating\\n    3) popup-full\\n    4) popup-drawer\\n*/\\n/* \\n    POPUP-FLOATING\\n*/\\n#login-popup {\\n  /* \\n      POPUP-FULL\\n  */\\n  /* \\n      POPUP-DRAWER\\n  */\\n  /* \\n      POPUP-CENTERED\\n  */\\n}\\n#login-popup .content {\\n  z-index: 2;\\n}\\n#login-popup .popup-floating {\\n  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);\\n  top: 40px;\\n  right: 40px;\\n}\\n#login-popup .popup-full {\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0;\\n}\\n#login-popup .popup-full > .content {\\n  height: inherit;\\n  display: flex;\\n  align-items: center;\\n}\\n#login-popup .popup-full:before {\\n  content: \\\" \\\";\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 1;\\n  opacity: var(--bg-opacity-image, 1);\\n  background-image: var(--container-bg-image);\\n  background-size: cover;\\n}\\n#login-popup .popup-drawer {\\n  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);\\n  height: 100vh;\\n  min-width: var(--popup-min-width);\\n  right: 0;\\n  top: 0;\\n}\\n#login-popup .popup-drawer > .content {\\n  height: inherit;\\n  right: 0;\\n  /* position: absolute; */\\n  display: flex;\\n  align-items: center;\\n}\\n#login-popup .popup-centered {\\n  align-items: center;\\n  height: 100vh;\\n  justify-content: center;\\n  opacity: 1;\\n  right: 0;\\n  top: 0;\\n  width: 100vw;\\n}\\n#login-popup .popup-centered:before {\\n  content: \\\" \\\";\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 1;\\n  opacity: var(--bg-opacity-image, 1);\\n  background-image: var(--container-bg-image);\\n  background-size: cover;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/popup.scss?../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./src/styles/animations.scss":
/*!************************************!*\
  !*** ./src/styles/animations.scss ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./animations.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/animations.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/animations.scss?");

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

/***/ "./src/styles/form.scss":
/*!******************************!*\
  !*** ./src/styles/form.scss ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./form.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/form.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/form.scss?");

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

/***/ "./src/styles/popup.scss":
/*!*******************************!*\
  !*** ./src/styles/popup.scss ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ \"../../../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/popup.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://stag-dotjs/./src/styles/popup.scss?");

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
eval("__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n__webpack_require__(/*! ./styles/loader.scss */ \"./src/styles/loader.scss\");\n__webpack_require__(/*! ./styles/carousel.scss */ \"./src/styles/carousel.scss\");\n__webpack_require__(/*! ./styles/popup.scss */ \"./src/styles/popup.scss\");\n__webpack_require__(/*! ./styles/form.scss */ \"./src/styles/form.scss\");\n__webpack_require__(/*! ./styles/animations.scss */ \"./src/styles/animations.scss\");\n\nconst { APP_ID } = __webpack_require__(/*! ./templates/ */ \"./src/templates/index.js\");\n\nconst node = document.createElement(\"div\");\nnode.setAttribute(\"id\", APP_ID);\ndocument.body.append(node);\n\nconst { loadTheme, showTheme } = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\nloadTheme().then(() => showTheme());\n\n\n//# sourceURL=webpack://stag-dotjs/./src/app.js?");
})();

/******/ })()
;