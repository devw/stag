const { APP_ID } = require("../templates/");
const $ = document.querySelector.bind(document);

const pretty = (ugly) => JSON.stringify(ugly, undefined, 2);

exports.updateCss = (cssVars) => {
    $(`#${APP_ID} .js-json-code`).value = pretty(cssVars); //REMOVE
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else $(`#${APP_ID}`).style.setProperty(key, obj);
    })(cssVars);
};
