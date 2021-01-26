const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, debounce } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
const { toggleLoading } = require("../utils/");
let form, customerStatusPromise;

const activeBtn = async (btn, email) => {
    btn.removeAttribute("disabled");
    if (!(await customerStatusPromise?.state))
        customerStatusPromise = getCustomerStatus(email);
};

const onSubmit = async () => {
    toggleLoading();
    const result = await customerStatusPromise;
    toggleLoading();
    if (!result?.state) togglePage(REGISTER_ID);
    else if (result.state === "enabled") togglePage(SIGNIN_ID);
    else if (result.state === "disabled") togglePage(ACTIVATE_ID);
};

const emailAutofill = () => {
    const emailSelector = "[type='email']";
    const email = form.querySelector(emailSelector).value;
    const fields = document.querySelectorAll(`#${IDs.APP_ID} ${emailSelector}`);
    fields.forEach((e) => (e.value = email));
};

const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn(btn, email) : disableBtn(btn);
};

exports.init = () => {
    form = $q(`.${LANDING_ID} form`);
    form.addEventListener("input", debounce(toggleButton, 100));
    form.addEventListener("submit", onSubmit);
    form.addEventListener("submit", emailAutofill);
};
