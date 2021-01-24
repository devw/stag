const { updateCss, rendereTemplate } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getConfiguration, kastorHandler } = require("../services");

exports.loadTheme = async () => {
    const config = await getConfiguration();
    rendereTemplate(config.text);
    updateCss(config.style);
    loadActions();
};

kastorHandler();

// exports.showTheme = () => {
//     if (globalThis.self !== globalThis.top) openAccount();
//     kastorHandler();
// };
