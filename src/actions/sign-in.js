const { SIGNIN_ID, REGISTER_ID } = require("../templates/");
const { $q, isValidEmail, toggleSecret } = require("../utils/");
const { sendHttpRequest } = require("../services");
const { toggleModules } = require("../utils");

const tgt = {
    form: `.${SIGNIN_ID} form`,
    pswFormatError: `.${SIGNIN_ID} .js-error .js-psw-valid`,
    register: `.js-create-account`,
    wrongPsw: `.js-psw-wrong`,
};

const onSubmit = async (e) => {
    e.preventDefault();
    $q(tgt.form).action = "/account/login";
    const resp = await sendHttpRequest("POST", e);
    if (resp.isLogged) {
        const { shop } = globalThis?.Shopify;
        const redirect = $q(tgt.form).getAttribute("data-login-redirect");
        globalThis.location.href = `https://${shop}/${redirect}`;
    }
};

const toggleButton = (e) => {
    const form = $q(tgt.form);
    const email = form.querySelector('[name="customer[email]"]').value;
    isValidEmail(email)
        ? form.querySelector("[type='submit']").removeAttribute("disabled")
        : form.querySelector("[type='submit']").setAttribute("disabled", "");
};

const register = () => toggleModules(REGISTER_ID);

exports.init = () => {
    const form = $q(tgt.form);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    form.querySelector(".js-show-psw")?.addEventListener("click", toggleSecret);
    $q(tgt.register)?.addEventListener("click", register);
};
