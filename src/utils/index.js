const { updatePages } = require("./load-pages");
const { updateCss } = require("./load-css");
const { toggleModules } = require("./toggle-module");
const { serialize } = require("./serialize");

exports.updatePages = updatePages;
exports.updateCss = updateCss;
exports.toggleModules = toggleModules;
exports.serialize = serialize;
