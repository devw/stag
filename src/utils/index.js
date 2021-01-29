const {
    rendereTemplate,
    updateCss,
    sortBlocks,
    parseConfiguration,
} = require("./load-pages");
const { togglePage, toggleSecret, toggleLoading } = require("./toggle");
const { isValidEmail, isFormFilled, checkInputs } = require("./input-checker");
const { showError } = require("./input-checker");
const { $q, $qq, getRootNode } = require("./toggle");

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

module.exports = {
    updateCss,
    rendereTemplate,
    togglePage,
    isFormFilled,
    debounce,
    showError,
    isValidEmail,
    $q,
    $qq,
    sortBlocks,
    checkInputs,
    toggleSecret,
    getRootNode,
    toggleLoading,
    parseConfiguration,
};
