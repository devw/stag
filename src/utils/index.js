const { updatePages, updateCss, sortBlocks } = require("./load-pages");
const { toggleModules } = require("./toggle-module");
const { isValidEmail, isFormFilled, checkInputs } = require("./input-checker");
const { showError } = require("./input-checker");
const { $q, $qq } = require("./q-selector");

exports.updateCss = updateCss;
exports.updatePages = updatePages;
exports.toggleModules = toggleModules;
exports.isFormFilled = isFormFilled;
exports.showError = showError;
exports.isValidEmail = isValidEmail;
exports.$q = $q;
exports.$qq = $qq;
exports.sortBlocks = sortBlocks;
exports.checkInputs = checkInputs;
