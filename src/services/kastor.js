const { updateCss } = require("../utils");

const kastorHandler = (event) => {
    const body = event.data.data;
    const { setting_id, value } = body;
    console.log("Event received from Customize", setting_id, value);
    if (/font-size|text-size|border-radius/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}em` });
    }
    if (/text-color/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}` });
    }
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", kastorHandler);
};
globalThis.__updateCss = updateCss;
