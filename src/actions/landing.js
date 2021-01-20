const { SIGNIN_ID, ACTIVATE_ID } = require("../templates/");
const { LANDING_ID, REGISTER_ID } = require("../templates/");
const { getCustomerStatus } = require("../services");
const { toggleModules, $qq } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
const { toggleLoading } = require("../utils/toggle-loading");
let form, customerStatusPromise;

const activeBtn = (btn, email) => {
    btn.removeAttribute("disabled");
    // TODO should I store the result in localStorage?
    customerStatusPromise = getCustomerStatus(email);
};

const onSubmit = async () => {
    toggleLoading();
    const result = await customerStatusPromise;
    toggleLoading();
    if (!result?.state) register();
    else if (result.state === "enabled") toggleModules(SIGNIN_ID);
    else if (result.state === "disabled") toggleModules(ACTIVATE_ID);
};

const emailAutofill = () => {
    const emailSelector = "[type='email']";
    const email = form.querySelector(emailSelector).value;
    $qq(`.${REGISTER_ID}`, `form ${emailSelector}`).value = email;
    $qq(`.${SIGNIN_ID}`, `form ${emailSelector}`).value = email;
};

const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn(btn, email) : disableBtn(btn);
};

const register = () => {
    toggleModules(REGISTER_ID);
};

exports.init = () => {
    form = $qq(`.${LANDING_ID}`, "form");
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    form.addEventListener("submit", emailAutofill);
};
