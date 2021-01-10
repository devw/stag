const { updatePages, updateCss, sortBlocks } = require("./load-pages");
const { toggleModules } = require("./toggle-module");
const { isValidPsw, isValidEmail, isFormFilled } = require("./input-checker");
const { showError, formatDate } = require("./input-checker");
const { $q, $qq } = require("./q-selector");

exports.updateCss = updateCss;
exports.updatePages = updatePages;
exports.toggleModules = toggleModules;
exports.isFormFilled = isFormFilled;
exports.showError = showError;
exports.formatDate = formatDate;
exports.isValidPsw = isValidPsw;
exports.isValidEmail = isValidEmail;
exports.$q = $q;
exports.$qq = $qq;
exports.sortBlocks = sortBlocks;
