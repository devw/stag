const { rendereTemplate, updateCss, sortBlocks } = require("./load-pages");
const { togglePage, toggleSecret, toggleLoading } = require("./toggle");
const { isValidEmail, isFormFilled, checkInputs } = require("./input-checker");
const { showError } = require("./input-checker");
const { $q, getRootNode } = require("./toggle");

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
    showError,
    isValidEmail,
    $q,
    sortBlocks,
    checkInputs,
    debounce,
    toggleSecret,
    getRootNode,
    toggleLoading,
};
