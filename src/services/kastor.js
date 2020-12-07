const { updateCss } = require("../utils");

const kastorHandler = (event) => {
    const body = event.data.data;
    const { setting_id, value } = body;
    if (/font-size|text-size|border-radius/.test(setting_id)) {
        console.log("Event received from Customize", setting_id, value);
        updateCss({ [setting_id]: `${value}em` });
    }
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", kastorHandler);
};
