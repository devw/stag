const { rendereTemplate, updateCss, sortBlocks } = require("./load-pages");
const { togglePage, toggleSecret, toggleLoading } = require("./toggle");
const {
    isValidEmail,
    isFormFilled,
    checkInputs,
    debounce,
} = require("./input-checker");
const { showError } = require("./input-checker");
const { $q, getRootNode } = require("./toggle");

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
    toggleSecret,
    getRootNode,
    toggleLoading,
    debounce,
};
