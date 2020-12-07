const { updateCss } = require("../utils");

const kastorHandler = (event) => {
    const body = event.data.data;
    const { setting_id, value } = body;
    console.log("setting_id, value: ", setting_id, value);
    console.log("Event received from Customize", setting_id, value);
    if (/font-size/.test(setting_id)) updateCss({ [setting_id]: `${value}em` });
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", kastorHandler);
};
