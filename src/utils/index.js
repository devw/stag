const { render, parseConfiguration } = require('./load-pages');
const { getShadowDOM } = require('./shadow-dom');
const { addJS, addCSS } = require('./embed-code');
const { togglePage, toggleSecret, toggleLoading, updateCss, sortBlocks } = require('./toggle');
const { isValidEmail, isFormFilled, areInvalidInputs } = require('./input-checker');
const { $q, $qq, getRootNode } = require('./toggle');
const { showMessage } = require('./notification');

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const getUrlParameter = (name) => {
    var url_string = location.href;
    var url = new URL(url_string);
    return url.searchParams.get(name);
};

module.exports = {
    $q,
    $qq,
    areInvalidInputs,
    debounce,
    getRootNode,
    getShadowDOM,
    getUrlParameter,
    isFormFilled,
    isValidEmail,
    parseConfiguration,
    render,
    showMessage,
    sortBlocks,
    toggleLoading,
    togglePage,
    toggleSecret,
    updateCss,
    addJS,
    addCSS,
};
