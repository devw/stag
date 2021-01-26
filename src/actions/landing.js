const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, debounce } = require("../utils");
const disableBtn = (btn) => btn.setAttribute("disabled", "true");
const { toggleLoading } = require("../utils/");
let form;
const emailMap = new Map();

const setEmail = async (email) => {
    const emails = Array.from(emailMap.keys());
    if (emails.every((e) => !RegExp(`^${e}`, "i").test(email))) {
        const result = await getCustomerStatus(email);
        emailMap.set(email, result);
    }
};

const getEmail = () => {
    const emails = Array.from(emailMap.keys());
    const lastEmail = $q(`.${LANDING_ID} [type='email']`).value;
    const email = emails.find((e) => RegExp(`^${e}`, "i").test(lastEmail));
    return emailMap.get(email);
};

const activeBtn = async (btn, email) => {
    btn.removeAttribute("disabled");
    setEmail(email);
};

const onSubmit = async () => {
    toggleLoading();
    const result = getEmail();
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
    // form.addEventListener("input", debounce(toggleButton, 100));
    form.addEventListener("input", toggleButton);
    form.addEventListener("submit", onSubmit);
    form.addEventListener("submit", emailAutofill);
};
