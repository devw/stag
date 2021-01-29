const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, toggleLoading, debounce } = require("../utils");
const { hash } = require("../utils/input-checker");
let form, PROMISE;
const emailMap = new Map();
const emailSelector = "[type='email']";
globalThis.emailMap = emailMap;

const isCustomerChecked = (email) => {
    const emails = Array.from(emailMap.keys());
    const isRegisted = emails.some((e) => e === hash(email));
    if (isRegisted) return true;
    const isChecked = emails.some((e) => RegExp(`^${e}`, "i").test(email));
    if (isChecked) return isChecked;
    return false;
};

const getEmail = () => form.querySelector(emailSelector).value;

const disableBtn = (btn) => btn.setAttribute("disabled", "true");

const checkCustomerStatus = async () => {
    await PROMISE;
    const email = getEmail();
    if (!isCustomerChecked(email)) {
        PROMISE = getCustomerStatus(email);
        customers = await PROMISE;
        customers.forEach(setCustomerStatus);
    }
};

const setCustomerStatus = (cust) => {
    const email = getEmail();
    const key = cust.state ? cust.hash : email;
    emailMap.set(key, cust);
    if (hash(email) !== cust.hash) emailMap.set(email, {});
};

const firstCheck = async ({ target }) => {
    if (/[\w.]+@/.test(target.value)) {
        form.removeEventListener("input", firstCheck, true);
        checkCustomerStatus();
    }
};

const getEmailState = async () => {
    await PROMISE;
    const emails = Array.from(emailMap.keys());
    const lastEmail = getEmail();
    const email = emails.find((e) => RegExp(`^${e}`, "i").test(lastEmail));
    return emailMap.get(hash(lastEmail || email));
};

const activeBtn = async (btn) => {
    btn.removeAttribute("disabled");
    checkCustomerStatus();
};

const onSubmit = async () => {
    toggleLoading();
    const result = await getEmailState();
    toggleLoading();
    if (!result?.state) togglePage(REGISTER_ID);
    else if (result.state === "enabled") togglePage(SIGNIN_ID);
    else if (result.state === "disabled") togglePage(ACTIVATE_ID);
};

const emailAutofill = () => {
    const email = getEmail();
    const fields = document.querySelectorAll(`#${IDs.APP_ID} ${emailSelector}`);
    fields.forEach((e) => (e.value = email));
};

const toggleButton = ({ target }) => {
    const btn = form.querySelector("input[type='submit']");
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn(btn) : disableBtn(btn);
};

exports.init = () => {
    form = $q(`.${LANDING_ID} form`);
    form.addEventListener("input", firstCheck, true);
    form.addEventListener("input", debounce(toggleButton, 100));
    form.addEventListener("submit", onSubmit);
    form.addEventListener("submit", emailAutofill);
};
