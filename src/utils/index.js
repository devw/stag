const { rendereTemplate, updateCss, sortBlocks } = require("./load-pages");
const { togglePage } = require("./toggle-module");
const { isValidEmail, isFormFilled, checkInputs } = require("./input-checker");
const { showError, toggleSecret } = require("./input-checker");
const { $q, getRootNode } = require("./q-selector");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

exports.updateCss = updateCss;
exports.rendereTemplate = rendereTemplate;
exports.togglePage = togglePage;
exports.isFormFilled = isFormFilled;
exports.showError = showError;
exports.isValidEmail = isValidEmail;
exports.$q = $q;
exports.sortBlocks = sortBlocks;
exports.checkInputs = checkInputs;
exports.debounce = debounce;
exports.toggleSecret = toggleSecret;
exports.getRootNode = getRootNode;
