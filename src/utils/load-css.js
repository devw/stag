const { APP_ID } = require("../configs/pages-id.yml");

exports.updateCss = (cssVars) => {
    let currentSelector = document.querySelector(`#${APP_ID}`);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else currentSelector.style.setProperty(key, obj);
    })(cssVars);
};
