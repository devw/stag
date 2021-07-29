const { updateCss, render } = require("../utils");
const { loadActions } = require("./load");
const { STORAGE_CONFIG } = require("../config");

exports.loadTheme = async (config) => {

    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(cleanConfig(config)));
    render(config.text);
    updateCss(config.style);
    loadActions();
};

//TODO you should clean the file in AWS
const cleanConfig = (config) => {
    delete config.text.error;
    delete config.text.name;
    delete config.text.placeholder;
    return config;
};
