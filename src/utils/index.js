const { render, parseConfiguration } = require("./load-pages");
const {
    togglePage,
    toggleSecret,
    toggleLoading,
    updateCss,
    sortBlocks,
} = require("./toggle");
const {
    isValidEmail,
    isFormFilled,
    areInvalidInputs,
} = require("./input-checker");
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
    render,
    togglePage,
    isFormFilled,
    debounce,
    isValidEmail,
    $q,
    $qq,
    sortBlocks,
    areInvalidInputs,
    toggleSecret,
    getRootNode,
    toggleLoading,
    parseConfiguration,
};
