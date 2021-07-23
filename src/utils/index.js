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

const getUrlParameter = (name) => {
    var url_string = location.href
    var url = new URL(url_string);
    return url.searchParams.get(name);
}

module.exports = {
    getUrlParameter,
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
