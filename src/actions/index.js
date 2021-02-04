const { updateCss, render, parseConfiguration } = require("../utils");
const { loadActions } = require("./load");
const { getConfiguration } = require("../services");
const { STORAGE_CONFIG } = require("../config");

exports.loadTheme = async () => {
    const promise = await getConfiguration();
    const config = parseConfiguration(await promise.json());
    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(config));
    render(config.text);
    updateCss(config.style);
    loadActions();
};
