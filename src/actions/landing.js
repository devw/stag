const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, $qq, debounce, toggleLoading } = require("../utils");
const { hash } = require("../utils/input-checker");

var FORM, PROMISE, BTN;
const EMAIL_MAP = new Map();

const isCustomerChecked = (email) => {
    const emails = Array.from(EMAIL_MAP.keys());
    const isRegistered = emails.some((e) => e === hash(email));
    if (isRegistered) return true;
    const isChecked = emails.some((e) => RegExp(`^${e}`, "i").test(email));
    if (isChecked) return isChecked;
    return false;
};

const getEmail = () => FORM.querySelector("[type='email']").value;
const getEmailFields = () => $qq("[type='email']");

const checkCustomerStatus = async () => {
    await PROMISE;
    const email = getEmail();
    if (!isCustomerChecked(email)) {
        PROMISE = getCustomerStatus(email);
        const customers = await PROMISE;
        customers.forEach(setCustomerStatus);
    }
};

const setCustomerStatus = (customer) => {
    const email = getEmail();
    const key = customer.state ? customer.hash : email;
    EMAIL_MAP.set(key, customer);
    if (hash(email) !== customer.hash) EMAIL_MAP.set(email, {});
};

const firstCheck = async ({ target }) => {
    if (/[\w.]+@/.test(target.value)) {
        FORM.removeEventListener("input", firstCheck, true);
        checkCustomerStatus();
    }
};

const getEmailState = async () => {
    await PROMISE;
    const emails = Array.from(EMAIL_MAP.keys());
    const lastEmail = getEmail();
    const email = emails.find((e) => RegExp(`^${e}`, "i").test(lastEmail));
    return EMAIL_MAP.get(hash(lastEmail || email));
};

const activeBtn = () => BTN.removeAttribute("disabled");

const disableBtn = () => BTN.setAttribute("disabled", "true");

const onSubmit = async () => {
    toggleLoading(BTN);
    await checkCustomerStatus();
    const result = await getEmailState();
    toggleLoading(BTN);
    if (!result?.state) togglePage(REGISTER_ID);
    else if (result.state === "enabled") togglePage(SIGNIN_ID);
    else if (result.state === "disabled") togglePage(ACTIVATE_ID);
};

const emailAutofill = () => {
    const email = getEmail();
    const fields = getEmailFields();
    fields.forEach((e) => (e.value = email));
};

const toggleButton = async ({ target }) => {
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn() : disableBtn();
};

exports.init = () => {
    FORM = $q(`#${LANDING_ID} form`);
    BTN = FORM.querySelector("button");
    FORM.addEventListener("input", firstCheck, true);
    FORM.addEventListener("input", debounce(toggleButton, 200));
    FORM.addEventListener("submit", onSubmit);
    FORM.addEventListener("submit", emailAutofill);
};
