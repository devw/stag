const { APP_ID, SIGNIN_ID, REGISTER_ID } = require("../templates/");
const { isValidEmail, isValidPsw } = require("../utils/");

const { serialize, toggleModules } = require("../utils");

const $ = document.querySelector.bind(document);
let form, errorNode;

const onSubmit = async (e) => {
    e.preventDefault();
    const inputs = serialize(form);
    if (!isValidPsw(inputs["customer[password]"])) {
        errorNode.style.setProperty("display", "block");
        return null;
    }

    // const action = "https://antonio-balzac.myshopify.com/account/login";
    form.action = "https://antonio-balzac.myshopify.com/account/login";
    globalThis.__form = form;
    globalThis.__inputs = inputs;
    // form.submit();
};

const toggleButton = (e) => {
    const email = form.querySelector('[name="customer[email]"]').value;
    isValidEmail(email)
        ? form.querySelector("[type='submit']").removeAttribute("disabled")
        : form.querySelector("[type='submit']").setAttribute("disabled", "");
};

const register = () => toggleModules([REGISTER_ID, SIGNIN_ID]);

exports.init = () => {
    form = $(`#${APP_ID} .${SIGNIN_ID} form`);
    errorNode = $(`#${APP_ID} .${SIGNIN_ID} .js-error`);
    console.log("asdssssssssss", form);
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    $(`#${APP_ID} .js-create-account`)?.addEventListener("click", register);
};
