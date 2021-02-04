const { IDs } = require("../config");
const { SIGNIN_ID, RECOVERY_ID } = IDs;
const { $q, isValidEmail, toggleSecret, toggleLoading } = require("../utils/");
const { sendHttpRequest } = require("../services");
const { togglePage } = require("../utils");
var FORM, BTN;

const onSubmit = async (e) => {
    e.preventDefault();
    toggleLoading(BTN);
    FORM.action = "/account/login";
    const resp = await sendHttpRequest("POST", e);
    if (resp.isLogged) {
        const { shop } = globalThis?.Shopify;
        const redirect = FORM.getAttribute("data-login-redirect");
        globalThis.location.href = `https://${shop}/${redirect}`;
    }
    toggleLoading(BTN);
};

const toggleButton = () => {
    const email = FORM.querySelector("[type='email']").value;
    isValidEmail(email)
        ? BTN.removeAttribute("disabled")
        : BTN.setAttribute("disabled", "");
};

const recovery = () => togglePage(RECOVERY_ID);

exports.init = () => {
    const RECOVERY_BTN = $q(`#${SIGNIN_ID}`).querySelector(".js-recovery");
    FORM = $q(`#${SIGNIN_ID} form`);
    BTN = FORM.querySelector("button");
    FORM.addEventListener("input", toggleButton);
    FORM.addEventListener("submit", onSubmit);
    FORM.querySelector(".js-show-psw").addEventListener("click", toggleSecret);
    RECOVERY_BTN.addEventListener("click", recovery);
};
