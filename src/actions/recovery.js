const { IDs } = require("../config");
const { RECOVERY_ID } = IDs;
const { toggleLoading, $q } = require("../utils");
const { sendHttpRequest } = require("../services");

let FORM;

exports.init = () => {
    FORM = $q(`#${RECOVERY_ID} form`);
    FORM.addEventListener("submit", onSubmit);
};

const onSubmit = async (e) => {
    e.preventDefault();
    const BTN = FORM.querySelector("button");
    FORM.action = "/account/recover";
    toggleLoading(BTN);
    const resp = await sendHttpRequest("POST", e);
    toggleLoading(BTN);
    console.log("shopify response", resp);
    //TODO should I redirect the user in some page after this action?
};
