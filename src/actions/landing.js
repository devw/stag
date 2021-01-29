const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, $qq, toggleLoading, debounce } = require("../utils");
const { hash } = require("../utils/input-checker");

let FORM, PROMISE;
const EMAIL_MAP = new Map();

const isCustomerChecked = (email) => {
    const emails = Array.from(EMAIL_MAP.keys());
    const isRegisted = emails.some((e) => e === hash(email));
    if (isRegisted) return true;
    const isChecked = emails.some((e) => RegExp(`^${e}`, "i").test(email));
    if (isChecked) return isChecked;
    return false;
};

const getEmail = () => FORM.querySelector("[type='email']").value;
const getEmailFields = () => $qq("[type='email']");

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
    EMAIL_MAP.set(key, cust);
    if (hash(email) !== cust.hash) EMAIL_MAP.set(email, {});
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
    const fields = getEmailFields();
    fields.forEach((e) => (e.value = email));
};

const toggleButton = ({ target }) => {
    const btn = FORM.querySelector("input[type='submit']");
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn(btn) : disableBtn(btn);
};

exports.init = () => {
    FORM = $q(`.${LANDING_ID} form`);
    FORM.addEventListener("input", firstCheck, true);
    FORM.addEventListener("input", debounce(toggleButton, 200));
    FORM.addEventListener("submit", onSubmit);
    FORM.addEventListener("submit", emailAutofill);
};
