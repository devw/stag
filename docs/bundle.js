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

eval("// Module\nvar code = \"<div class=\\\"container {{layout}}\\\" style=\\\"display: none\\\">\\n    <div class=\\\"content\\\">\\n        <div class=\\\"loading\\\" style=\\\"display: none\\\">\\n            <div class=\\\"loading-icon\\\"></div>\\n        </div>\\n        <div class=\\\"btn-close js-close\\\">+</div>\\n        <div class=\\\"landing\\\" style=\\\"display: none\\\">{{> landing}} </div>\\n        <div class=\\\"register\\\" style=\\\"display: none\\\">{{> register}} </div>\\n        <div class=\\\"activate\\\" style=\\\"display: none\\\">{{> activate}} </div>\\n        <div class=\\\"signin\\\" style=\\\"display: none\\\">{{> signin}} </div>\\n        <div class=\\\"js-shopify-response\\\" style=\\\"display: none\\\"></div>\\n        </div>\\n    </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/container.html?");

/***/ }),

/***/ "./src/templates/landing.html":
/*!************************************!*\
  !*** ./src/templates/landing.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{loginRegister}}</div>\\n<div class=\\\"sub-title\\\">{{enterYourEmailToContinue}}</div>\\n<div class=\\\"error\\\" data-account-error=\\\"\\\"></div>\\n<form action=\\\"javascript:void(0);\\\" class=\\\"{{formStyle}}\\\">\\n    <div>\\n        {{#hasSocialLogin }}\\n        <input\\n            type=\\\"submit\\\"\\n            style=\\\"\\n                background: none;\\n                border: none;\\n                font-weight: 900;\\n                cursor: pointer;\\n                position: absolute;\\n            \\\"\\n            disabled=\\\"\\\"\\n            value=\\\"OK\\\"\\n        />\\n        {{/hasSocialLogin }}\\n        <div>\\n            <input\\n                class=\\\"input-text\\\"\\n                name=\\\"email\\\"\\n                placeholder=\\\"{{yourEmail}}\\\"\\n                type=\\\"email\\\"\\n            />\\n            <label>{{yourEmail}}</label>\\n        </div>\\n    </div>\\n    {{#hasSocialLogin }}\\n    <div>\\n        <div class=\\\"or-social-login\\\">Or</div>\\n        <a href=\\\"#\\\" class=\\\"fb btn\\\">\\n            <i class=\\\"fa fa-facebook fa-fw\\\"></i> Login with Facebook\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"google btn\\\"\\n            ><i class=\\\"fa fa-google fa-fw\\\"></i> Login with Google+\\n        </a>\\n    </div>\\n    {{/hasSocialLogin }} {{^hasSocialLogin }}\\n    <input\\n        type=\\\"submit\\\"\\n        class=\\\"btn btn-primary\\\"\\n        name=\\\"validate\\\"\\n        disabled=\\\"\\\"\\n        value=\\\"{{validate}}\\\"\\n    />\\n    {{/hasSocialLogin }}\\n</form>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/landing.html?");

/***/ }),

/***/ "./src/templates/register-inputs.html":
/*!********************************************!*\
  !*** ./src/templates/register-inputs.html ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<!-- FirstName field -->\\n{{#hasFirstName }}\\n<div class=\\\"hasFirstName\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        name=\\\"customer[first_name]\\\"\\n        placeholder=\\\"{{yourFirstName}}\\\"\\n    />\\n    <label>{{yourFirstName}}</label>\\n</div>\\n{{/hasFirstName }}\\n\\n<!-- LastName field -->\\n{{#hasLastName }}\\n<div class=\\\"hasLastName\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        name=\\\"customer[last_name]\\\"\\n        placeholder=\\\"{{yourLastName}}\\\"\\n    />\\n    <label>{{yourLastName}}</label>\\n</div>\\n{{/hasLastName }}\\n\\n<!-- Telephone field -->\\n{{#hasTelephone }}\\n<div class=\\\"hasTelephone\\\">\\n    <input\\n        required\\n        type=\\\"text\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{yourTelephone}}\\\"\\n        name=\\\"address[phone]\\\"\\n    />\\n    <label>{{yourTelephone}}</label>\\n</div>\\n{{/hasTelephone }}\\n\\n<!-- Email field -->\\n<div class=\\\"hasEmail\\\">\\n    <input\\n        required\\n        type=\\\"email\\\"\\n        placeholder=\\\"{{yourEmail}}\\\"\\n        name=\\\"customer[email]\\\"\\n        class=\\\"input-text\\\"\\n    />\\n    <label>{{yourEmail}}</label>\\n</div>\\n\\n<!-- Password field -->\\n<div class=\\\"hasPassword\\\">\\n    <div class=\\\"eye-icon js-show-psw\\\"></div>\\n    <input\\n        required\\n        type=\\\"password\\\"\\n        name=\\\"customer[password]\\\"\\n        class=\\\"input-text\\\"\\n        placeholder=\\\"{{yourPassword}}\\\"\\n        autocomplete=\\\"on\\\"\\n    />\\n    <label>{{yourPassword}}</label>\\n</div>\\n\\n<!-- Subscribe newsletter checkbox -->\\n{{#hasNewsletter }}\\n<div class=\\\"hasNewsletter choice-block\\\">\\n    <div>\\n        <input type=\\\"checkbox\\\" class=\\\"input-text\\\" />\\n        <label>{{subscribeNewsletter}}</label>\\n    </div>\\n</div>\\n{{/hasNewsletter }}\\n\\n<!-- Create account button -->\\n<p class=\\\"text-center hasSubmit\\\">\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{registerAccount}}\\\"\\n    />\\n</p>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register-inputs.html?");

/***/ }),

/***/ "./src/templates/register.html":
/*!*************************************!*\
  !*** ./src/templates/register.html ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{createAccount}}</div>\\n<div class=\\\"sub-title text t-4\\\">{{fillInfoToCreateAccount}}</div>\\n<div class=\\\"error js-psw-policy\\\"></div>\\n\\n<form\\n    method=\\\"post\\\"\\n    id=\\\"RegisterForm\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"{{formStyle}}\\\"\\n    data-blocks=\\\"{{orderedBlock}}\\\"\\n>\\n    <input\\n        type=\\\"hidden\\\"\\n        name=\\\"return_to\\\"\\n        value=\\\"{{redirectAfterRegister ||\\n    '/'}}\\\"\\n    />\\n    <input type=\\\"hidden\\\" name=\\\"customer[tags]\\\" value=\\\"\\\" />\\n\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"create_customer\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n\\n    {{ >registerInputs }}\\n</form>\\n<p class=\\\"arrow-container js-back\\\"><i class=\\\"arrow left\\\"></i> Back</p>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/register.html?");

/***/ }),

/***/ "./src/templates/sign-in.html":
/*!************************************!*\
  !*** ./src/templates/sign-in.html ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("// Module\nvar code = \"<img class=\\\"form-image\\\" />\\n<div class=\\\"title\\\">{{loginTitle}}</div>\\n<div class=\\\"sub-title\\\">{{enterEmailPswToConnect}}</div>\\n<div class=\\\"error js-psw-policy\\\"></div>\\n\\n<form\\n    method=\\\"post\\\"\\n    accept-charset=\\\"UTF-8\\\"\\n    novalidate=\\\"novalidate\\\"\\n    class=\\\"{{formStyle}}\\\"\\n    data-login-redirect=\\\"{{loginRedirect}}\\\"\\n>\\n    <input type=\\\"hidden\\\" name=\\\"form_type\\\" value=\\\"customer_login\\\" /><input\\n        type=\\\"hidden\\\"\\n        name=\\\"utf8\\\"\\n        value=\\\"✓\\\"\\n    />\\n    <div>\\n        <input\\n            type=\\\"email\\\"\\n            name=\\\"customer[email]\\\"\\n            autocomplete=\\\"email\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"{{yourEmail}}\\\"\\n        />\\n        <label>{{yourEmail}}</label>\\n    </div>\\n    <div>\\n        <div class=\\\"eye-icon js-show-psw\\\"></div>\\n        <input\\n            type=\\\"password\\\"\\n            name=\\\"customer[password]\\\"\\n            class=\\\"input-text\\\"\\n            placeholder=\\\"{{yourPassword}}\\\"\\n            autofocus\\n            autocomplete=\\\"on\\\"\\n        />\\n        <label>{{yourPassword}}</label>\\n    </div>\\n    <input\\n        class=\\\"btn btn-primary\\\"\\n        disabled=\\\"\\\"\\n        type=\\\"submit\\\"\\n        value=\\\"{{signIn}}\\\"\\n    />\\n</form>\\n{{#doYouLostPsw }}\\n<div class=\\\"secondary-action\\\">\\n    <a href=\\\"/account#recover-password\\\" class=\\\"link\\\">{{doYouLostPsw}}</a>\\n</div>\\n{{/doYouLostPsw}}\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/sign-in.html?");

/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 6:2-6 */
/*! CommonJS bailout: module.exports is used directly at 3:65-79 */
/***/ (function(module) {

eval("// This file has been generated from mustache.mjs\n(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  /*!\n   * mustache.js - Logic-less {{mustache}} templates with JavaScript\n   * http://github.com/janl/mustache.js\n   */\n\n  var objectToString = Object.prototype.toString;\n  var isArray = Array.isArray || function isArrayPolyfill (object) {\n    return objectToString.call(object) === '[object Array]';\n  };\n\n  function isFunction (object) {\n    return typeof object === 'function';\n  }\n\n  /**\n   * More correct typeof string handling array\n   * which normally returns typeof 'object'\n   */\n  function typeStr (obj) {\n    return isArray(obj) ? 'array' : typeof obj;\n  }\n\n  function escapeRegExp (string) {\n    return string.replace(/[\\-\\[\\]{}()*+?.,\\\\\\^$|#\\s]/g, '\\\\$&');\n  }\n\n  /**\n   * Null safe way of checking whether or not an object,\n   * including its prototype, has a given property\n   */\n  function hasProperty (obj, propName) {\n    return obj != null && typeof obj === 'object' && (propName in obj);\n  }\n\n  /**\n   * Safe way of detecting whether or not the given thing is a primitive and\n   * whether it has the given property\n   */\n  function primitiveHasOwnProperty (primitive, propName) {\n    return (\n      primitive != null\n      && typeof primitive !== 'object'\n      && primitive.hasOwnProperty\n      && primitive.hasOwnProperty(propName)\n    );\n  }\n\n  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577\n  // See https://github.com/janl/mustache.js/issues/189\n  var regExpTest = RegExp.prototype.test;\n  function testRegExp (re, string) {\n    return regExpTest.call(re, string);\n  }\n\n  var nonSpaceRe = /\\S/;\n  function isWhitespace (string) {\n    return !testRegExp(nonSpaceRe, string);\n  }\n\n  var entityMap = {\n    '&': '&amp;',\n    '<': '&lt;',\n    '>': '&gt;',\n    '\"': '&quot;',\n    \"'\": '&#39;',\n    '/': '&#x2F;',\n    '`': '&#x60;',\n    '=': '&#x3D;'\n  };\n\n  function escapeHtml (string) {\n    return String(string).replace(/[&<>\"'`=\\/]/g, function fromEntityMap (s) {\n      return entityMap[s];\n    });\n  }\n\n  var whiteRe = /\\s*/;\n  var spaceRe = /\\s+/;\n  var equalsRe = /\\s*=/;\n  var curlyRe = /\\s*\\}/;\n  var tagRe = /#|\\^|\\/|>|\\{|&|=|!/;\n\n  /**\n   * Breaks up the given `template` string into a tree of tokens. If the `tags`\n   * argument is given here it must be an array with two string values: the\n   * opening and closing tags used in the template (e.g. [ \"<%\", \"%>\" ]). Of\n   * course, the default is to use mustaches (i.e. mustache.tags).\n   *\n   * A token is an array with at least 4 elements. The first element is the\n   * mustache symbol that was used inside the tag, e.g. \"#\" or \"&\". If the tag\n   * did not contain a symbol (i.e. {{myValue}}) this element is \"name\". For\n   * all text that appears outside a symbol this element is \"text\".\n   *\n   * The second element of a token is its \"value\". For mustache tags this is\n   * whatever else was inside the tag besides the opening symbol. For text tokens\n   * this is the text itself.\n   *\n   * The third and fourth elements of the token are the start and end indices,\n   * respectively, of the token in the original template.\n   *\n   * Tokens that are the root node of a subtree contain two more elements: 1) an\n   * array of tokens in the subtree and 2) the index in the original template at\n   * which the closing tag for that section begins.\n   *\n   * Tokens for partials also contain two more elements: 1) a string value of\n   * indendation prior to that tag and 2) the index of that tag on that line -\n   * eg a value of 2 indicates the partial is the third tag on this line.\n   */\n  function parseTemplate (template, tags) {\n    if (!template)\n      return [];\n    var lineHasNonSpace = false;\n    var sections = [];     // Stack to hold section tokens\n    var tokens = [];       // Buffer to hold the tokens\n    var spaces = [];       // Indices of whitespace tokens on the current line\n    var hasTag = false;    // Is there a {{tag}} on the current line?\n    var nonSpace = false;  // Is there a non-space char on the current line?\n    var indentation = '';  // Tracks indentation for tags that use it\n    var tagIndex = 0;      // Stores a count of number of tags encountered on a line\n\n    // Strips all whitespace tokens array for the current line\n    // if there was a {{#tag}} on it and otherwise only space.\n    function stripSpace () {\n      if (hasTag && !nonSpace) {\n        while (spaces.length)\n          delete tokens[spaces.pop()];\n      } else {\n        spaces = [];\n      }\n\n      hasTag = false;\n      nonSpace = false;\n    }\n\n    var openingTagRe, closingTagRe, closingCurlyRe;\n    function compileTags (tagsToCompile) {\n      if (typeof tagsToCompile === 'string')\n        tagsToCompile = tagsToCompile.split(spaceRe, 2);\n\n      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)\n        throw new Error('Invalid tags: ' + tagsToCompile);\n\n      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\\\s*');\n      closingTagRe = new RegExp('\\\\s*' + escapeRegExp(tagsToCompile[1]));\n      closingCurlyRe = new RegExp('\\\\s*' + escapeRegExp('}' + tagsToCompile[1]));\n    }\n\n    compileTags(tags || mustache.tags);\n\n    var scanner = new Scanner(template);\n\n    var start, type, value, chr, token, openSection;\n    while (!scanner.eos()) {\n      start = scanner.pos;\n\n      // Match any text between tags.\n      value = scanner.scanUntil(openingTagRe);\n\n      if (value) {\n        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {\n          chr = value.charAt(i);\n\n          if (isWhitespace(chr)) {\n            spaces.push(tokens.length);\n            indentation += chr;\n          } else {\n            nonSpace = true;\n            lineHasNonSpace = true;\n            indentation += ' ';\n          }\n\n          tokens.push([ 'text', chr, start, start + 1 ]);\n          start += 1;\n\n          // Check for whitespace on the current line.\n          if (chr === '\\n') {\n            stripSpace();\n            indentation = '';\n            tagIndex = 0;\n            lineHasNonSpace = false;\n          }\n        }\n      }\n\n      // Match the opening tag.\n      if (!scanner.scan(openingTagRe))\n        break;\n\n      hasTag = true;\n\n      // Get the tag type.\n      type = scanner.scan(tagRe) || 'name';\n      scanner.scan(whiteRe);\n\n      // Get the tag value.\n      if (type === '=') {\n        value = scanner.scanUntil(equalsRe);\n        scanner.scan(equalsRe);\n        scanner.scanUntil(closingTagRe);\n      } else if (type === '{') {\n        value = scanner.scanUntil(closingCurlyRe);\n        scanner.scan(curlyRe);\n        scanner.scanUntil(closingTagRe);\n        type = '&';\n      } else {\n        value = scanner.scanUntil(closingTagRe);\n      }\n\n      // Match the closing tag.\n      if (!scanner.scan(closingTagRe))\n        throw new Error('Unclosed tag at ' + scanner.pos);\n\n      if (type == '>') {\n        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];\n      } else {\n        token = [ type, value, start, scanner.pos ];\n      }\n      tagIndex++;\n      tokens.push(token);\n\n      if (type === '#' || type === '^') {\n        sections.push(token);\n      } else if (type === '/') {\n        // Check section nesting.\n        openSection = sections.pop();\n\n        if (!openSection)\n          throw new Error('Unopened section \"' + value + '\" at ' + start);\n\n        if (openSection[1] !== value)\n          throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + start);\n      } else if (type === 'name' || type === '{' || type === '&') {\n        nonSpace = true;\n      } else if (type === '=') {\n        // Set the tags for the next time around.\n        compileTags(value);\n      }\n    }\n\n    stripSpace();\n\n    // Make sure there are no open sections when we're done.\n    openSection = sections.pop();\n\n    if (openSection)\n      throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + scanner.pos);\n\n    return nestTokens(squashTokens(tokens));\n  }\n\n  /**\n   * Combines the values of consecutive text tokens in the given `tokens` array\n   * to a single token.\n   */\n  function squashTokens (tokens) {\n    var squashedTokens = [];\n\n    var token, lastToken;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      token = tokens[i];\n\n      if (token) {\n        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {\n          lastToken[1] += token[1];\n          lastToken[3] = token[3];\n        } else {\n          squashedTokens.push(token);\n          lastToken = token;\n        }\n      }\n    }\n\n    return squashedTokens;\n  }\n\n  /**\n   * Forms the given array of `tokens` into a nested tree structure where\n   * tokens that represent a section have two additional items: 1) an array of\n   * all tokens that appear in that section and 2) the index in the original\n   * template that represents the end of that section.\n   */\n  function nestTokens (tokens) {\n    var nestedTokens = [];\n    var collector = nestedTokens;\n    var sections = [];\n\n    var token, section;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      token = tokens[i];\n\n      switch (token[0]) {\n        case '#':\n        case '^':\n          collector.push(token);\n          sections.push(token);\n          collector = token[4] = [];\n          break;\n        case '/':\n          section = sections.pop();\n          section[5] = token[2];\n          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;\n          break;\n        default:\n          collector.push(token);\n      }\n    }\n\n    return nestedTokens;\n  }\n\n  /**\n   * A simple string scanner that is used by the template parser to find\n   * tokens in template strings.\n   */\n  function Scanner (string) {\n    this.string = string;\n    this.tail = string;\n    this.pos = 0;\n  }\n\n  /**\n   * Returns `true` if the tail is empty (end of string).\n   */\n  Scanner.prototype.eos = function eos () {\n    return this.tail === '';\n  };\n\n  /**\n   * Tries to match the given regular expression at the current position.\n   * Returns the matched text if it can match, the empty string otherwise.\n   */\n  Scanner.prototype.scan = function scan (re) {\n    var match = this.tail.match(re);\n\n    if (!match || match.index !== 0)\n      return '';\n\n    var string = match[0];\n\n    this.tail = this.tail.substring(string.length);\n    this.pos += string.length;\n\n    return string;\n  };\n\n  /**\n   * Skips all text until the given regular expression can be matched. Returns\n   * the skipped string, which is the entire tail if no match can be made.\n   */\n  Scanner.prototype.scanUntil = function scanUntil (re) {\n    var index = this.tail.search(re), match;\n\n    switch (index) {\n      case -1:\n        match = this.tail;\n        this.tail = '';\n        break;\n      case 0:\n        match = '';\n        break;\n      default:\n        match = this.tail.substring(0, index);\n        this.tail = this.tail.substring(index);\n    }\n\n    this.pos += match.length;\n\n    return match;\n  };\n\n  /**\n   * Represents a rendering context by wrapping a view object and\n   * maintaining a reference to the parent context.\n   */\n  function Context (view, parentContext) {\n    this.view = view;\n    this.cache = { '.': this.view };\n    this.parent = parentContext;\n  }\n\n  /**\n   * Creates a new context using the given view with this context\n   * as the parent.\n   */\n  Context.prototype.push = function push (view) {\n    return new Context(view, this);\n  };\n\n  /**\n   * Returns the value of the given name in this context, traversing\n   * up the context hierarchy if the value is absent in this context's view.\n   */\n  Context.prototype.lookup = function lookup (name) {\n    var cache = this.cache;\n\n    var value;\n    if (cache.hasOwnProperty(name)) {\n      value = cache[name];\n    } else {\n      var context = this, intermediateValue, names, index, lookupHit = false;\n\n      while (context) {\n        if (name.indexOf('.') > 0) {\n          intermediateValue = context.view;\n          names = name.split('.');\n          index = 0;\n\n          /**\n           * Using the dot notion path in `name`, we descend through the\n           * nested objects.\n           *\n           * To be certain that the lookup has been successful, we have to\n           * check if the last object in the path actually has the property\n           * we are looking for. We store the result in `lookupHit`.\n           *\n           * This is specially necessary for when the value has been set to\n           * `undefined` and we want to avoid looking up parent contexts.\n           *\n           * In the case where dot notation is used, we consider the lookup\n           * to be successful even if the last \"object\" in the path is\n           * not actually an object but a primitive (e.g., a string, or an\n           * integer), because it is sometimes useful to access a property\n           * of an autoboxed primitive, such as the length of a string.\n           **/\n          while (intermediateValue != null && index < names.length) {\n            if (index === names.length - 1)\n              lookupHit = (\n                hasProperty(intermediateValue, names[index])\n                || primitiveHasOwnProperty(intermediateValue, names[index])\n              );\n\n            intermediateValue = intermediateValue[names[index++]];\n          }\n        } else {\n          intermediateValue = context.view[name];\n\n          /**\n           * Only checking against `hasProperty`, which always returns `false` if\n           * `context.view` is not an object. Deliberately omitting the check\n           * against `primitiveHasOwnProperty` if dot notation is not used.\n           *\n           * Consider this example:\n           * ```\n           * Mustache.render(\"The length of a football field is {{#length}}{{length}}{{/length}}.\", {length: \"100 yards\"})\n           * ```\n           *\n           * If we were to check also against `primitiveHasOwnProperty`, as we do\n           * in the dot notation case, then render call would return:\n           *\n           * \"The length of a football field is 9.\"\n           *\n           * rather than the expected:\n           *\n           * \"The length of a football field is 100 yards.\"\n           **/\n          lookupHit = hasProperty(context.view, name);\n        }\n\n        if (lookupHit) {\n          value = intermediateValue;\n          break;\n        }\n\n        context = context.parent;\n      }\n\n      cache[name] = value;\n    }\n\n    if (isFunction(value))\n      value = value.call(this.view);\n\n    return value;\n  };\n\n  /**\n   * A Writer knows how to take a stream of tokens and render them to a\n   * string, given a context. It also maintains a cache of templates to\n   * avoid the need to parse the same template twice.\n   */\n  function Writer () {\n    this.templateCache = {\n      _cache: {},\n      set: function set (key, value) {\n        this._cache[key] = value;\n      },\n      get: function get (key) {\n        return this._cache[key];\n      },\n      clear: function clear () {\n        this._cache = {};\n      }\n    };\n  }\n\n  /**\n   * Clears all cached templates in this writer.\n   */\n  Writer.prototype.clearCache = function clearCache () {\n    if (typeof this.templateCache !== 'undefined') {\n      this.templateCache.clear();\n    }\n  };\n\n  /**\n   * Parses and caches the given `template` according to the given `tags` or\n   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens\n   * that is generated from the parse.\n   */\n  Writer.prototype.parse = function parse (template, tags) {\n    var cache = this.templateCache;\n    var cacheKey = template + ':' + (tags || mustache.tags).join(':');\n    var isCacheEnabled = typeof cache !== 'undefined';\n    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;\n\n    if (tokens == undefined) {\n      tokens = parseTemplate(template, tags);\n      isCacheEnabled && cache.set(cacheKey, tokens);\n    }\n    return tokens;\n  };\n\n  /**\n   * High-level method that is used to render the given `template` with\n   * the given `view`.\n   *\n   * The optional `partials` argument may be an object that contains the\n   * names and templates of partials that are used in the template. It may\n   * also be a function that is used to load partial templates on the fly\n   * that takes a single argument: the name of the partial.\n   *\n   * If the optional `config` argument is given here, then it should be an\n   * object with a `tags` attribute or an `escape` attribute or both.\n   * If an array is passed, then it will be interpreted the same way as\n   * a `tags` attribute on a `config` object.\n   *\n   * The `tags` attribute of a `config` object must be an array with two\n   * string values: the opening and closing tags used in the template (e.g.\n   * [ \"<%\", \"%>\" ]). The default is to mustache.tags.\n   *\n   * The `escape` attribute of a `config` object must be a function which\n   * accepts a string as input and outputs a safely escaped string.\n   * If an `escape` function is not provided, then an HTML-safe string\n   * escaping function is used as the default.\n   */\n  Writer.prototype.render = function render (template, view, partials, config) {\n    var tags = this.getConfigTags(config);\n    var tokens = this.parse(template, tags);\n    var context = (view instanceof Context) ? view : new Context(view, undefined);\n    return this.renderTokens(tokens, context, partials, template, config);\n  };\n\n  /**\n   * Low-level method that renders the given array of `tokens` using\n   * the given `context` and `partials`.\n   *\n   * Note: The `originalTemplate` is only ever used to extract the portion\n   * of the original template that was contained in a higher-order section.\n   * If the template doesn't use higher-order sections, this argument may\n   * be omitted.\n   */\n  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {\n    var buffer = '';\n\n    var token, symbol, value;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      value = undefined;\n      token = tokens[i];\n      symbol = token[0];\n\n      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);\n      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);\n      else if (symbol === '>') value = this.renderPartial(token, context, partials, config);\n      else if (symbol === '&') value = this.unescapedValue(token, context);\n      else if (symbol === 'name') value = this.escapedValue(token, context, config);\n      else if (symbol === 'text') value = this.rawValue(token);\n\n      if (value !== undefined)\n        buffer += value;\n    }\n\n    return buffer;\n  };\n\n  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {\n    var self = this;\n    var buffer = '';\n    var value = context.lookup(token[1]);\n\n    // This function is used to render an arbitrary template\n    // in the current context by higher-order sections.\n    function subRender (template) {\n      return self.render(template, context, partials, config);\n    }\n\n    if (!value) return;\n\n    if (isArray(value)) {\n      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {\n        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);\n      }\n    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {\n      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);\n    } else if (isFunction(value)) {\n      if (typeof originalTemplate !== 'string')\n        throw new Error('Cannot use higher-order sections without the original template');\n\n      // Extract the portion of the original template that the section contains.\n      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);\n\n      if (value != null)\n        buffer += value;\n    } else {\n      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);\n    }\n    return buffer;\n  };\n\n  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {\n    var value = context.lookup(token[1]);\n\n    // Use JavaScript's definition of falsy. Include empty arrays.\n    // See https://github.com/janl/mustache.js/issues/186\n    if (!value || (isArray(value) && value.length === 0))\n      return this.renderTokens(token[4], context, partials, originalTemplate, config);\n  };\n\n  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {\n    var filteredIndentation = indentation.replace(/[^ \\t]/g, '');\n    var partialByNl = partial.split('\\n');\n    for (var i = 0; i < partialByNl.length; i++) {\n      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {\n        partialByNl[i] = filteredIndentation + partialByNl[i];\n      }\n    }\n    return partialByNl.join('\\n');\n  };\n\n  Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {\n    if (!partials) return;\n    var tags = this.getConfigTags(config);\n\n    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];\n    if (value != null) {\n      var lineHasNonSpace = token[6];\n      var tagIndex = token[5];\n      var indentation = token[4];\n      var indentedValue = value;\n      if (tagIndex == 0 && indentation) {\n        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);\n      }\n      var tokens = this.parse(indentedValue, tags);\n      return this.renderTokens(tokens, context, partials, indentedValue, config);\n    }\n  };\n\n  Writer.prototype.unescapedValue = function unescapedValue (token, context) {\n    var value = context.lookup(token[1]);\n    if (value != null)\n      return value;\n  };\n\n  Writer.prototype.escapedValue = function escapedValue (token, context, config) {\n    var escape = this.getConfigEscape(config) || mustache.escape;\n    var value = context.lookup(token[1]);\n    if (value != null)\n      return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);\n  };\n\n  Writer.prototype.rawValue = function rawValue (token) {\n    return token[1];\n  };\n\n  Writer.prototype.getConfigTags = function getConfigTags (config) {\n    if (isArray(config)) {\n      return config;\n    }\n    else if (config && typeof config === 'object') {\n      return config.tags;\n    }\n    else {\n      return undefined;\n    }\n  };\n\n  Writer.prototype.getConfigEscape = function getConfigEscape (config) {\n    if (config && typeof config === 'object' && !isArray(config)) {\n      return config.escape;\n    }\n    else {\n      return undefined;\n    }\n  };\n\n  var mustache = {\n    name: 'mustache.js',\n    version: '4.1.0',\n    tags: [ '{{', '}}' ],\n    clearCache: undefined,\n    escape: undefined,\n    parse: undefined,\n    render: undefined,\n    Scanner: undefined,\n    Context: undefined,\n    Writer: undefined,\n    /**\n     * Allows a user to override the default caching strategy, by providing an\n     * object with set, get and clear methods. This can also be used to disable\n     * the cache by setting it to the literal `undefined`.\n     */\n    set templateCache (cache) {\n      defaultWriter.templateCache = cache;\n    },\n    /**\n     * Gets the default or overridden caching object from the default writer.\n     */\n    get templateCache () {\n      return defaultWriter.templateCache;\n    }\n  };\n\n  // All high-level mustache.* functions use this writer.\n  var defaultWriter = new Writer();\n\n  /**\n   * Clears all cached templates in the default writer.\n   */\n  mustache.clearCache = function clearCache () {\n    return defaultWriter.clearCache();\n  };\n\n  /**\n   * Parses and caches the given template in the default writer and returns the\n   * array of tokens it contains. Doing this ahead of time avoids the need to\n   * parse templates on the fly as they are rendered.\n   */\n  mustache.parse = function parse (template, tags) {\n    return defaultWriter.parse(template, tags);\n  };\n\n  /**\n   * Renders the `template` with the given `view`, `partials`, and `config`\n   * using the default writer.\n   */\n  mustache.render = function render (template, view, partials, config) {\n    if (typeof template !== 'string') {\n      throw new TypeError('Invalid template! Template should be a \"string\" ' +\n                          'but \"' + typeStr(template) + '\" was given as the first ' +\n                          'argument for mustache#render(template, view, partials)');\n    }\n\n    return defaultWriter.render(template, view, partials, config);\n  };\n\n  // Export the escaping function so that the user may override it.\n  // See https://github.com/janl/mustache.js/issues/244\n  mustache.escape = escapeHtml;\n\n  // Export these mainly for testing, but also for advanced usage.\n  mustache.Scanner = Scanner;\n  mustache.Context = Context;\n  mustache.Writer = Writer;\n\n  return mustache;\n\n})));\n\n\n//# sourceURL=webpack://stag-dotjs/./node_modules/mustache/mustache.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! default exports */
/*! export loadTheme [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { updateCss, rendereTemplate } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { loadActions, openAccount } = __webpack_require__(/*! ./load */ \"./src/actions/load.js\");\nconst { getConfiguration, kastorHandler } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n\nexports.loadTheme = async () => {\n    const config = await getConfiguration();\n    rendereTemplate(config.text);\n    updateCss(config.style);\n    loadActions();\n};\n\nkastorHandler();\n\n// exports.showTheme = () => {\n//     if (globalThis.self !== globalThis.top) openAccount();\n//     kastorHandler();\n// };\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/index.js?");

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

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { SIGNIN_ID, ACTIVATE_ID } = IDs;\nconst { LANDING_ID, REGISTER_ID } = IDs;\nconst { getCustomerStatus } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { toggleModules, $qq, debounce } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst disableBtn = (btn) => btn.setAttribute(\"disabled\", \"true\");\nconst { toggleLoading } = __webpack_require__(/*! ../utils/toggle-loading */ \"./src/utils/toggle-loading.js\");\nlet form, customerStatusPromise;\n\nconst activeBtn = (btn, email) => {\n    btn.removeAttribute(\"disabled\");\n    // TODO should I store the result in localStorage?\n    customerStatusPromise = getCustomerStatus(email);\n};\n\nconst onSubmit = async () => {\n    toggleLoading();\n    const result = await customerStatusPromise;\n    toggleLoading();\n    if (!result?.state) register();\n    else if (result.state === \"enabled\") toggleModules(SIGNIN_ID);\n    else if (result.state === \"disabled\") toggleModules(ACTIVATE_ID);\n};\n\nconst emailAutofill = () => {\n    const emailSelector = \"[type='email']\";\n    const email = form.querySelector(emailSelector).value;\n    $qq(`.${REGISTER_ID}`, `form ${emailSelector}`).value = email;\n    $qq(`.${SIGNIN_ID}`, `form ${emailSelector}`).value = email;\n};\n\nconst toggleButton = ({ target }) => {\n    const btn = form.querySelector(\"input[type='submit']\");\n    const email = target.value;\n    const isEmail = /[\\w.]+@\\w+\\.[a-z]{2,}/.test(email);\n    isEmail ? activeBtn(btn, email) : disableBtn(btn);\n};\n\nconst register = () => {\n    toggleModules(REGISTER_ID);\n};\n\nexports.init = () => {\n    form = $qq(`.${LANDING_ID}`, \"form\");\n    form.addEventListener(\"input\", debounce(toggleButton, 100));\n    form.addEventListener(\"submit\", onSubmit);\n    form.addEventListener(\"submit\", emailAutofill);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/landing.js?");

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

eval("const { init: initLanding } = __webpack_require__(/*! ./landing */ \"./src/actions/landing.js\");\nconst { init: initSignIn } = __webpack_require__(/*! ./sign-in */ \"./src/actions/sign-in.js\");\nconst { init: initRegistration } = __webpack_require__(/*! ./register */ \"./src/actions/register.js\");\nconst { $q, toggleModules } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\nconst { LOGIN_BTN, STORAGE_CONFIG, IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { LANDING_ID } = IDs;\n\n//TODO refactoring too code repetition\n\nconst closeApp = () => {\n    $q(`.${IDs.CONTAINER_ID}`).style.setProperty(\"display\", \"none\");\n    document.body.classList.remove(\"remove-scrolling\");\n};\n\nconst initContainer = () => {\n    $(LOGIN_BTN)?.addEventListener(\"click\", openAccount, true);\n    $q(`.js-close`).addEventListener(\"click\", closeApp);\n};\n\nconst placePopover = (e, dom) => {\n    const shift = parseInt(getComputedStyle(dom).getPropertyValue(\"width\"));\n    dom.style.setProperty(\"left\", `${e.clientX - shift / 2}px`);\n    dom.style.setProperty(\"top\", `${e.clientY + 20}px`);\n};\n\nconst openAccount = (e) => {\n    const { isActive } = JSON.parse(localStorage.getItem(STORAGE_CONFIG));\n    if (!globalThis.__st?.cid && isActive) {\n        e?.preventDefault();\n        e?.stopPropagation();\n        toggleModules(LANDING_ID);\n        const dom = $q(`.${IDs.CONTAINER_ID}`);\n        dom.style.setProperty(\"display\", \"flex\");\n        if (dom.classList.contains(\"popover\")) placePopover(e, dom);\n    }\n};\nexports.openAccount = openAccount;\nconst $ = document.querySelector.bind(document);\n\nexports.loadActions = () => {\n    initContainer();\n    initLanding();\n    initSignIn();\n    initRegistration();\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/load.js?");

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

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { REGISTER_ID, SIGNIN_ID, LANDING_ID } = IDs;\nconst { toggleModules, $q, toggleSecret } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { isFormFilled, checkInputs, sortBlocks } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { storeMetafieldIntoShopify } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { STORAGE_METAFIELD } = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\nconst tgt = {\n    form: `.${REGISTER_ID} form`,\n    login: `.${REGISTER_ID} .js-login`,\n    pswDiffError: `.${REGISTER_ID} .js-error .js-psw-diff`,\n    pswFormatError: `.${REGISTER_ID} .js-error .js-psw-valid`,\n};\nconst multiChoiceSelector = \"multi-choice\";\n\nconst storeTags = () => {\n    const sel = `\n        [type='checkbox'][data-tag]:checked,\n        [type='text'][data-tag], \n        [type='date'][data-tag]\n    `;\n\n    const els = Array.from($q(tgt.form).querySelectorAll(sel));\n\n    const tags = els.map((el) => `${el.getAttribute(\"data-tag\")}:${el.value}`);\n    $q('[name=\"customer[tags]\"]').value = tags.join(\", \");\n};\n\nconst storeMetafield = () => {\n    const sel = `\n        [type='checkbox'][data-key]:checked,\n        [type='text'][data-key], \n        [type='date'][data-key]\n    `;\n    const els = Array.from($q(tgt.form).querySelectorAll(sel));\n    const metafields = els.map((el) => {\n        return {\n            namespace: el.getAttribute(\"data-namespace\"),\n            key: el.getAttribute(\"data-key\"),\n            value: el.value,\n        };\n    });\n\n    localStorage.setItem(STORAGE_METAFIELD, JSON.stringify(metafields));\n    console.log(\"localStorage\", localStorage.getItem(STORAGE_METAFIELD));\n};\n\nconst handleChoiceBlock = ({ target, currentTarget }) => {\n    if (!currentTarget.classList.contains(multiChoiceSelector)) {\n        currentTarget.querySelectorAll(\"[type='checkbox']\").forEach((e) => {\n            e.checked = false;\n        });\n        target.checked = true;\n    }\n};\n\nconst toggleButton = ({ target }) => {\n    if (target.value.length > 2) {\n        const btn = target.closest(\"form\").querySelector(\"[type='submit']\");\n        btn.removeAttribute(\"disabled\");\n    }\n\n    const btn = $q(tgt.form).querySelector(\"input[type='submit']\");\n    isFormFilled($q(tgt.form))\n        ? btn.removeAttribute(\"disabled\")\n        : btn.setAttribute(\"disabled\", \"true\");\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n    storeTags();\n    storeMetafield();\n    const { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\n    if (!(await checkInputs($q(tgt.form)))) return null;\n    $q(tgt.form).action = \"/account\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    console.log(\"shopify response\", resp);\n};\n\nconst changeSlide = (e) => {\n    const ele = $q(tgt.form).querySelector(\".carousel\");\n    const shift = parseInt(getComputedStyle(ele).getPropertyValue(\"width\"), 10);\n    const left = /js-next/.test(e.target.className) ? shift : -shift;\n    ele.scrollBy({\n        left: left,\n        behavior: \"smooth\",\n    });\n};\n\nconst formatDate = ({ target }) => (target.type = \"date\");\n\nexports.init = () => {\n    const form = $q(tgt.form);\n    sortBlocks();\n    form.addEventListener(\"input\", toggleButton);\n    form.querySelectorAll(\".js-next, .js-prev\").forEach((e) =>\n        e.addEventListener(\"click\", changeSlide)\n    );\n    form.addEventListener(\"submit\", onSubmit);\n    $q(tgt.login)?.addEventListener(\"click\", () => toggleModules(SIGNIN_ID));\n    form.querySelector(\".js-show-psw\")?.addEventListener(\"click\", toggleSecret);\n    form.querySelector(\".choice-block\")?.addEventListener(\n        \"click\",\n        handleChoiceBlock\n    );\n    $q(\".js-date input\")?.addEventListener(\"focus\", formatDate);\n    storeMetafieldIntoShopify();\n    $q(\".js-back\")?.addEventListener(\"click\", () => toggleModules(LANDING_ID));\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/register.js?");

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

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { SIGNIN_ID, REGISTER_ID } = IDs;\nconst { $q, isValidEmail, toggleSecret } = __webpack_require__(/*! ../utils/ */ \"./src/utils/index.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ../services */ \"./src/services/index.js\");\nconst { toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nconst tgt = {\n    form: `.${SIGNIN_ID} form`,\n    pswFormatError: `.${SIGNIN_ID} .js-error .js-psw-valid`,\n    register: `.js-create-account`,\n    wrongPsw: `.js-psw-wrong`,\n};\n\nconst onSubmit = async (e) => {\n    e.preventDefault();\n    $q(tgt.form).action = \"/account/login\";\n    const resp = await sendHttpRequest(\"POST\", e);\n    if (resp.isLogged) {\n        const { shop } = globalThis?.Shopify;\n        const redirect = $q(tgt.form).getAttribute(\"data-login-redirect\");\n        globalThis.location.href = `https://${shop}/${redirect}`;\n    }\n};\n\nconst toggleButton = (e) => {\n    const form = $q(tgt.form);\n    const email = form.querySelector('[name=\"customer[email]\"]').value;\n    isValidEmail(email)\n        ? form.querySelector(\"[type='submit']\").removeAttribute(\"disabled\")\n        : form.querySelector(\"[type='submit']\").setAttribute(\"disabled\", \"\");\n};\n\nconst register = () => toggleModules(REGISTER_ID);\n\nexports.init = () => {\n    const form = $q(tgt.form);\n    form.addEventListener(\"input\", toggleButton);\n    form.addEventListener(\"submit\", onSubmit);\n    form.querySelector(\".js-show-psw\")?.addEventListener(\"click\", toggleSecret);\n    $q(tgt.register)?.addEventListener(\"click\", register);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/actions/sign-in.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = {\n    LOGIN_BTN: \".site-header__account\",\n    PROXY_PATH: \"apps/dev\",\n    STORAGE_KEY: \"shopify-loginpopup-metafields\",\n    STORAGE_CONFIG: \"shopify-loginpopup-configuration\",\n    // TODO get it from the PROXY\n    CONFIG_ENDPOINT: \"https://login-popup-dev-theme.s3.amazonaws.com\",\n    IDs: {\n        APP_ID: \"login-popup\",\n        CONTAINER_ID: \"container\",\n        LANDING_ID: \"landing\",\n        REGISTER_ID: \"register\",\n        SIGNIN_ID: \"signin\",\n        ACTIVATE_ID: \"activate\",\n    },\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/config.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! default exports */
/*! export getConfiguration [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCustomerStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export kastorHandler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sendHttpRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeMetafieldIntoShopify [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const {\n    getCustomerStatus,\n    getConfiguration,\n    storeMetafieldIntoShopify,\n} = __webpack_require__(/*! ./proxy */ \"./src/services/proxy.js\");\nconst { sendHttpRequest } = __webpack_require__(/*! ./shopify */ \"./src/services/shopify.js\");\nconst { kastorHandler } = __webpack_require__(/*! ./kastor-handler */ \"./src/services/kastor-handler.js\");\n\nexports.storeMetafieldIntoShopify = storeMetafieldIntoShopify;\nexports.getCustomerStatus = getCustomerStatus;\nexports.sendHttpRequest = sendHttpRequest;\nexports.getConfiguration = getConfiguration;\nexports.kastorHandler = kastorHandler;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/index.js?");

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

eval("const { rendereTemplate, $q, showError, debounce } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nconst { getBlocksAttr } = __webpack_require__(/*! ../utils/load-pages */ \"./src/utils/load-pages.js\");\n\nconst changePage = (page) => {\n    const { loadActions } = __webpack_require__(/*! ../actions/load */ \"./src/actions/load.js\");\n    const { toggleModules } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    toggleModules(page);\n    $q(\".container\").style.setProperty(\"display\", \"flex\");\n    loadActions();\n};\n\nconst getIdsVsBlocks = (json) => {\n    const idsVsBlocks = Object.keys(json).map((e) => ({\n        [Object.keys(json[e])[0]]: e,\n    }));\n    return idsVsBlocks.filter((e) => Object.keys(e)[0] !== \"undefined\");\n};\n\nconst getOrderedBlocks = ({ blocks, order }) => {\n    let idsVsBlocks = getIdsVsBlocks(blocks);\n    idsVsBlocks = idsVsBlocks.sort(\n        (a, b) =>\n            order.indexOf(Object.keys(a)[0]) - order.indexOf(Object.keys(b)[0])\n    );\n\n    return idsVsBlocks.map((e) => Object.values(e)[0].split(\"|\")[1]);\n\n    // console.log(blocks_order);\n    // blocks_order.filter((e) => blocks);\n};\n\nconst getData = (event) => {\n    const e = event.data ? event.data : event.detail.data;\n    return e.data;\n};\n\nconst getTarget = (event) => {\n    const e = event.data ? event.data : event.detail.data;\n    return e.target;\n};\n\nconst parseEventData = (event) => {\n    const data = getData(event);\n    if (!data) return [undefined, undefined];\n    const { setting_id, section_type, block_type_id } = data;\n    const value = getData(event) == \"block:remove\" ? false : data.value;\n    const selector = setting_id || section_type || block_type_id;\n    return [selector, value];\n};\n\nconst updateNoBlock = (event) => {\n    const [selector, value] = parseEventData(event);\n\n    if (!selector) return null;\n    const [, page, key, unit] = selector.match(/^(.*?)\\|(.*?)\\|(.*?)$/);\n    const valueAndUnit = typeof value == \"object\" ? value : `${value}${unit}`;\n\n    const { updateCss } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    if (!/--animation/.test(key)) updateCss({ \"--animation\": \"none\" });\n    if (/^--/.test(key)) {\n        updateCss({ [key]: valueAndUnit });\n    } else\n        rendereTemplate({\n            [key]: valueAndUnit == \"false\" ? false : valueAndUnit,\n        });\n\n    if (page) changePage(page);\n    // TODO: too fragile check the password policy in this way, you should refactore the code using objects\n    if (/^psw.*Err$/.test(key)) showError([value]);\n};\n\nconst kastorHandler = (event) => {\n    //reorder blocks\n    const target = getTarget(event);\n    if (target === \"block:reorder\") {\n        const orderBlocks = getOrderedBlocks(getData(event));\n        rendereTemplate({ orderedBlock: orderBlocks });\n        changePage(\"register\"); // TODO remove magic number\n        return null;\n    }\n    //remove block\n    if (target === \"block:remove\") {\n        const { block_type_id } = getData(event);\n        const blockToDel = block_type_id.split(\"|\")[1];\n        const filteredBlocks = getBlocksAttr().filter((e) => e !== blockToDel);\n        rendereTemplate({ orderedBlock: filteredBlocks });\n        rendereTemplate({ [blockToDel]: false });\n        changePage(\"register\"); // TODO remove magic number\n        return null;\n    }\n    //add a block\n    if (target === \"block:add\") {\n        //TODO @Thomas, why two different names? (target: \"setting:update\")\n        const { block_type_id, block_settings } = getData(event);\n        const [page, blockToAdd] = block_type_id.split(\"|\");\n        const key = Object.keys(block_settings)[0].split(\"|\")[1];\n        const value = Object.values(block_settings)[0];\n        rendereTemplate({ [key]: value });\n        rendereTemplate({ [blockToAdd]: true });\n        changePage(page);\n        return null;\n    }\n\n    updateNoBlock(event);\n};\n\nexports.kastorHandler = () =>\n    globalThis.addEventListener(\"message\", debounce(kastorHandler, 99));\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/kastor-handler.js?");

/***/ }),

/***/ "./src/services/proxy.js":
/*!*******************************!*\
  !*** ./src/services/proxy.js ***!
  \*******************************/
/*! default exports */
/*! export getConfiguration [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCustomerStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export storeMetafieldIntoShopify [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const {\n    PROXY_PATH,\n    STORAGE_METAFIELD,\n    STORAGE_CONFIG,\n    CONFIG_ENDPOINT,\n} = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\nexports.getCustomerStatus = async (email) => {\n    // return { state: \"enabled\", properties: {} };\n    const shop = globalThis?.Shopify?.shop;\n\n    const endpoint = shop\n        ? `https://${shop}/${PROXY_PATH}/get-customer-status/${email}`\n        : \"https://api.mocki.io/v1/ce5f60e2\";\n\n    try {\n        const promise = await fetch(endpoint);\n        const result = await promise.json();\n        return result;\n    } catch (err) {\n        console.log(\"error in proxy.js: \", err);\n        //TODO what should I do if the proxy does not work?\n        return {};\n    }\n};\n\nexports.getConfiguration = async () => {\n    //TODO implements memoization\n    const shopName =\n        globalThis.Shopify?.shop || \"test-login-popup.myshopify.com\";\n    const endpoint = `${CONFIG_ENDPOINT}/${shopName}/configuration.json`;\n    // const endpoint = \"data/configuration.json\";\n    const promise = await globalThis.fetch(endpoint, {\n        headers: { pragma: \"no-cache\" },\n    });\n    const result = await promise.json();\n    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(result));\n    return result;\n};\n\nexports.storeMetafieldIntoShopify = async () => {\n    const cid = globalThis?.__st?.cid;\n    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);\n    const areThereMetafields = metafieldStorage && cid;\n\n    if (!areThereMetafields) return null;\n\n    const shop = globalThis?.Shopify?.shop;\n    const endpoint = `https://${shop}/${PROXY_PATH}/set-metafield-in-shopify`;\n    const params = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({\n            cid: cid + \"\",\n            metafields: JSON.parse(metafieldStorage),\n        }),\n    };\n    const promise = await globalThis.fetch(endpoint, params);\n    const result = await promise.json();\n    if (result) localStorage.removeItem(STORAGE_METAFIELD);\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/proxy.js?");

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

eval("const { $q, showError } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\nconst tgt = {\n    errorMsg: \".js-error\",\n    close: \".js-close\",\n    shopifyRes: \".js-shopify-response\",\n    isLogged: \"#customer_logout_link\",\n    wrongPsw: \"#customer_login\",\n    captha: \".shopify-challenge__button.btn\",\n};\n\nexports.sendHttpRequest = (method, e) => {\n    return new Promise((res, rej) => {\n        const xhr = new XMLHttpRequest();\n        xhr.open(method, e.target.action);\n        xhr.send(new FormData(e.target));\n        xhr.onload = () => {\n            if (xhr.status >= 400) rej(xhr.response);\n            else res(parseShopifyResponse(e, xhr.response));\n        };\n        xhr.onerror = (err) => rej(`Server error: ${err}`); //triggered if there is no connection\n    });\n};\n\nconst shopifyResult = (html) => ({\n    isLogged: html.querySelector(tgt.isLogged) != null,\n    hasWrongPsw: html.querySelector(tgt.wrongPsw) != null,\n    hasChallenge: html.querySelector(tgt.captha) != null,\n    // TODO adding other checks (unique email, ....)\n});\n\nconst parseShopifyResponse = ({ target }, response) => {\n    const htmlResponse = new DOMParser().parseFromString(response, \"text/html\");\n    const resp = shopifyResult(htmlResponse);\n    console.log(resp);\n    if (resp.isLogged) $q(tgt.close).click();\n    else if (resp.hasWrongPsw) showError([\"Wrong password or email\"]);\n    //TODO take the message from configuration\n    else if (resp.hasChallenge) target.submit();\n    return resp;\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/services/shopify.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const container = __webpack_require__(/*! ./container.html */ \"./src/templates/container.html\");\nconst landing = __webpack_require__(/*! ./landing.html */ \"./src/templates/landing.html\");\nconst register = __webpack_require__(/*! ./register.html */ \"./src/templates/register.html\");\nconst registerInputs = __webpack_require__(/*! ./register-inputs.html */ \"./src/templates/register-inputs.html\");\nconst signIn = __webpack_require__(/*! ./sign-in.html */ \"./src/templates/sign-in.html\");\nconst activate = __webpack_require__(/*! ./activate.html */ \"./src/templates/activate.html\");\n\nmodule.exports = {\n    pages: {\n        container,\n        landing,\n        register,\n        signIn,\n        activate,\n        registerInputs,\n    },\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/templates/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! default exports */
/*! export $q [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $qq [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkInputs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export debounce [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRootNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFormFilled [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidEmail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rendereTemplate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showError [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sortBlocks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleModules [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toggleSecret [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { rendereTemplate, updateCss, sortBlocks } = __webpack_require__(/*! ./load-pages */ \"./src/utils/load-pages.js\");\nconst { toggleModules } = __webpack_require__(/*! ./toggle-module */ \"./src/utils/toggle-module.js\");\nconst { isValidEmail, isFormFilled, checkInputs } = __webpack_require__(/*! ./input-checker */ \"./src/utils/input-checker.js\");\nconst { showError, toggleSecret } = __webpack_require__(/*! ./input-checker */ \"./src/utils/input-checker.js\");\nconst { $q, $qq, getRootNode } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nconst debounce = (fn, delay) => {\n    let timeoutId;\n    return (...args) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n};\n\nexports.updateCss = updateCss;\nexports.rendereTemplate = rendereTemplate;\nexports.toggleModules = toggleModules;\nexports.isFormFilled = isFormFilled;\nexports.showError = showError;\nexports.isValidEmail = isValidEmail;\nexports.$q = $q;\nexports.$qq = $qq;\nexports.sortBlocks = sortBlocks;\nexports.checkInputs = checkInputs;\nexports.debounce = debounce;\nexports.toggleSecret = toggleSecret;\nexports.getRootNode = getRootNode;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/index.js?");

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
/*! export toggleSecret [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\nconst errorSelector = \".js-psw-policy\";\nconst { STORAGE_CONFIG } = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nconst checkDate = () => {\n    const dateElem = $q(\"[type='date']\");\n    if (!dateElem) return [];\n    const { minDate, maxDate, error, customerAge } = getDateAttr(dateElem);\n    return minDate > customerAge || maxDate < customerAge ? [error] : [];\n};\nconst getCustomerAge = (dateElem) => {\n    const DAY_IN_YEAR = 365;\n    const SEC_IN_DAY = 3600 * 24;\n    const MSEC_IN_DAY = 1000 * SEC_IN_DAY;\n    const userSec = new Date(dateElem.value).getTime();\n    const nowSec = new Date().getTime();\n    const days = parseInt((nowSec - userSec) / MSEC_IN_DAY);\n    return days / DAY_IN_YEAR;\n};\nconst getDateAttr = (dateElem) => ({\n    minDate: dateElem.getAttribute(\"date-min\"),\n    maxDate: dateElem.getAttribute(\"date-max\"),\n    error: dateElem.getAttribute(\"date-error\"),\n    customerAge: getCustomerAge(dateElem),\n});\n\nconst showError = (errorMsgs) => {\n    // TODO you should use the css to hide/show!!\n    const list = document.createElement(\"ul\");\n    errorMsgs.forEach((e) => {\n        const item = document.createElement(\"li\");\n        item.appendChild(document.createTextNode(e));\n        list.appendChild(item);\n    });\n    const errorElm = $q(`div[style*=\"display: block\"] ${errorSelector}`);\n    errorElm.appendChild(list);\n    errorElm.style.setProperty(\"display\", \"block\");\n    return false;\n};\nconst resetErrorMsgs = () => {\n    $q(errorSelector).innerText = \"\";\n    $q(errorSelector).style.setProperty(\"display\", \"none\");\n};\n\nconst getPasswordPolicyErrors = async (inputs) => {\n    const psw = inputs[\"customer[password]\"];\n    const errorMsgs = [];\n    const pswPolicy = JSON.parse(localStorage.getItem(STORAGE_CONFIG))[\"text\"];\n    // TODO refactor!!\n    if (psw.length < pswPolicy.pswMinLength)\n        errorMsgs.push(pswPolicy.pswMinLengthErr);\n    if (psw.length > pswPolicy.pswMaxLength)\n        errorMsgs.push(pswPolicy.pswMaxLengthErr);\n    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(psw))\n        errorMsgs.push(pswPolicy.pswUppercaseErr);\n    if (pswPolicy.hasPswNumber && !/(?=.*\\d)/.test(psw))\n        errorMsgs.push(pswPolicy.pswNumberErr);\n    if (pswPolicy.hasPswSpecialCharacter && !/(?=.*[\\W|_])/.test(psw))\n        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);\n    if (pswPolicy.hasPswUppercase && !/[A-Z]/.test(psw))\n        errorMsgs.push(pswPolicy.pswUppercaseErr);\n\n    return errorMsgs;\n};\n\nconst serialize = (form) => {\n    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });\n    return Array.from(new FormData(form)).reduce(reducer, {});\n};\n\nexports.toggleSecret = ({ target }) => {\n    const secret = target.nextElementSibling;\n    secret.type = secret.type === \"password\" ? \"text\" : \"password\";\n};\n\nexports.isFormFilled = (form) =>\n    Array.from(form.querySelectorAll(\"input[required]\")).every((e) => e.value);\n\nexports.checkInputs = async (form) => {\n    resetErrorMsgs();\n    const errors = [];\n    const inputs = serialize(form);\n    errors.push(...(await getPasswordPolicyErrors(inputs)));\n    errors.push(...checkDate());\n    return errors.length === 0 ? true : showError(errors) && false;\n};\n\nexports.isValidEmail = (email) => /\\S+@\\S+\\.\\S+/.test(email);\n\nexports.showError = showError;\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/input-checker.js?");

/***/ }),

/***/ "./src/utils/load-pages.js":
/*!*********************************!*\
  !*** ./src/utils/load-pages.js ***!
  \*********************************/
/*! default exports */
/*! export getBlocksAttr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rendereTemplate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sortBlocks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCss [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst $ = document.querySelector.bind(document);\nconst { REGISTER_ID } = IDs;\nconst { APP_ID } = IDs;\nconst Mustache = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\nconst { pages } = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\nlet TEXT = {};\n\nconst updateText = (text) => {\n    const hasManyKeys = Reflect.ownKeys(text).length > 1;\n    const firstKey = Reflect.ownKeys(text)[0];\n    if (hasManyKeys) TEXT = text;\n    else TEXT[firstKey] = text[firstKey];\n    return TEXT;\n};\n\nconst getBlocksAttr = () => {\n    const blocks = $(`.${REGISTER_ID} form`).getAttribute(\"data-blocks\");\n    return blocks.length > 0 ? blocks.split(\",\") : [];\n};\n\nconst filterCss = (data) => {\n    // TODO refactoring\n    let imgUrl;\n    imgUrl = data[\"--container-bg-image\"];\n    if (imgUrl) data[\"--container-bg-image\"] = `url(${imgUrl})`;\n    imgUrl = data[\"--form-header-image\"];\n    if (imgUrl) data[\"--form-header-image\"] = `url(${imgUrl})`;\n    return data;\n};\n\nexports.getBlocksAttr = getBlocksAttr;\n\nexports.sortBlocks = () => {\n    const blocks = getBlocksAttr();\n    blocks.forEach((e, i) => $(`.${e}`)?.style?.setProperty(\"order\", i));\n};\n\nexports.updateCss = (cssVars) => {\n    cssVars = filterCss(cssVars);\n    (function traverse(obj, key) {\n        if (obj !== null && typeof obj == \"object\") {\n            Object.entries(obj).forEach(([key, value]) => traverse(value, key));\n        } else $(`#${APP_ID}`).style.setProperty(key, obj);\n    })(cssVars);\n};\n\nexports.rendereTemplate = (text) => {\n    const { getRootNode } = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n    text = updateText(text);\n    getRootNode().innerHTML = Mustache.render(pages.container, text, {\n        landing: pages.landing,\n        register: pages.register,\n        activate: pages.activate,\n        signin: pages.signIn,\n        registerInputs: pages.registerInputs,\n    });\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/load-pages.js?");

/***/ }),

/***/ "./src/utils/q-selector.js":
/*!*********************************!*\
  !*** ./src/utils/q-selector.js ***!
  \*********************************/
/*! default exports */
/*! export $q [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $qq [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRootNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nconst getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);\n\nexports.getRootNode = getRootNode;\n\nexports.$q = (leaf) => getRootNode().querySelector(leaf);\n\nexports.$qq = (parent, leaf) =>\n    getRootNode().querySelector(parent).querySelector(leaf);\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/q-selector.js?");

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

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { APP_ID, CONTAINER_ID } = IDs;\n\nconst $ = document.querySelector.bind(document);\n\nexports.toggleLoading = () => {\n    const loading = $(`#${APP_ID} .loading`);\n    if (loading.style.getPropertyValue(\"display\") == \"none\") {\n        loading.style.setProperty(\"display\", \"block\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 0.2);\n    } else {\n        loading.style.setProperty(\"display\", \"none\");\n        $(`.${CONTAINER_ID}`).style.setProperty(\"opacity\", 1);\n    }\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-loading.js?");

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

eval("const { IDs } = __webpack_require__(/*! ../config */ \"./src/config.js\");\nconst { LANDING_ID, REGISTER_ID, SIGNIN_ID, ACTIVATE_ID } = IDs;\nconst { $q } = __webpack_require__(/*! ./q-selector */ \"./src/utils/q-selector.js\");\n\nexports.toggleModules = (id) => {\n    $q(`.${LANDING_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${REGISTER_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${SIGNIN_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${ACTIVATE_ID}`).style.setProperty(\"display\", \"none\");\n    $q(`.${id}`).style.setProperty(\"display\", \"block\");\n};\n\n\n//# sourceURL=webpack://stag-dotjs/./src/utils/toggle-module.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
eval("__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n__webpack_require__(/*! ./styles/loader.scss */ \"./src/styles/loader.scss\");\n__webpack_require__(/*! ./styles/carousel.scss */ \"./src/styles/carousel.scss\");\n__webpack_require__(/*! ./styles/popup.scss */ \"./src/styles/popup.scss\");\n__webpack_require__(/*! ./styles/form.scss */ \"./src/styles/form.scss\");\n__webpack_require__(/*! ./styles/animations.scss */ \"./src/styles/animations.scss\");\n\nconst { IDs } = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nconst node = document.createElement(\"div\");\nnode.setAttribute(\"id\", IDs.APP_ID);\ndocument.body.append(node);\n\nconst { loadTheme } = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\nloadTheme();\n\n\n//# sourceURL=webpack://stag-dotjs/./src/app.js?");
})();

/******/ })()
;