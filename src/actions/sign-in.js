const { IDs } = require("../config");
const { SIGNIN_ID, RECOVERY_ID } = IDs;
const { $q, isValidEmail, toggleSecret } = require("../utils/");
const { sendHttpRequest } = require("../services");
const { togglePage } = require("../utils");
let FORM;

const onSubmit = async (e) => {
    e.preventDefault();
    FORM.action = "/account/login";
    const resp = await sendHttpRequest("POST", e);
    if (resp.isLogged) {
        const { shop } = globalThis?.Shopify;
        const redirect = FORM.getAttribute("data-login-redirect");
        globalThis.location.href = `https://${shop}/${redirect}`;
    }
};

const toggleButton = (_) => {
    const email = FORM.querySelector('[name="customer[email]"]').value;
    isValidEmail(email)
        ? FORM.querySelector("[type='submit']").removeAttribute("disabled")
        : FORM.querySelector("[type='submit']").setAttribute("disabled", "");
};

const recovery = () => togglePage(RECOVERY_ID);

exports.init = () => {
    FORM = $q(`#${SIGNIN_ID} form`);
    FORM.addEventListener("input", toggleButton);
    FORM.addEventListener("submit", onSubmit);
    FORM.querySelector(".js-show-psw").addEventListener("click", toggleSecret);
    FORM.querySelector(".js-recovery").addEventListener("click", recovery);
};
