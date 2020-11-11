const { updatePages } = require("./load-pages");
const { updateCss } = require("./load-css");
const { toggleModules: toggleModules } = require("./toggle-module");

exports.updatePages = updatePages;
exports.updateCss = updateCss;
exports.toggleModules = toggleModules;
