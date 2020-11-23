const { $q } = require("../utils");

const getConfig = async ({ target }) => {
    if (/textarea/.test(target.className)) {
        return JSON.parse($q(`.js-custom-style`).value);
    }
    const { STAG_ENDPOINT } = require("../config");
    let resp = await fetch(`${STAG_ENDPOINT}/data/${target.value}-config.json`);
    return await resp.json();
};

const changeTheme = async (e) => {
    const { loadActions } = require("./load");
    const { updatePages, updateCss } = require("../utils");
    const config = await getConfig(e);
    updatePages(config.text);
    updateCss(config.style);
    loadActions(config);
    $q(`.container`).style.setProperty("display", "flex");
    $q(`.js-dashboard`).style.setProperty("display", "block");
};

exports.init = (config) => {
    $q(`.js-load-default-theme`).addEventListener("click", changeTheme);
    $q(`.js-load-from-textarea`).addEventListener("click", changeTheme);
    $q(`.js-custom-style`).value = JSON.stringify(config, undefined, 1);
};
