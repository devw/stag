const { updateCss } = require("../utils");

const kastorHandler = (event) => {
    const body = event.data.data;
    const { setting_id, value } = body;
    console.log("setting_id, value: ", setting_id, value);
    console.log("Event received from Customize", setting_id, value);
    updateCss({ [setting_id]: value });
};

exports.kastor = () => {
    console.log("loading kastor handler");
    globalThis.addEventListener("message", kastorHandler);
};
