const { REGISTER_ID, LANDING_ID, APP_ID } = require("../configs/pages-id.yml");

const loadCssVars = (cssVars) => {
    let currentSelector = document.querySelector(`#${APP_ID}`);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else currentSelector.style.setProperty(key, obj);
    })(cssVars);
};

module.exports = {
    loadCssVars: loadCssVars,
};
