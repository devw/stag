const { IDs } = require("../config");
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require("../services");
const { togglePage, $q, $qq, debounce, toggleLoading } = require("../utils");
var FORM, PROMISE, BTN;
const CUSTOMERS = [];

const getEmail = () => FORM.querySelector("[type='email']").value;
const setEmail = (email) =>
    (FORM.querySelector("[type='email']").value = email);
const getEmailFields = () => $qq("[type='email']");

const firstCheck = async ({ target }) => {
    const email = target.value;
    if (!/[\w.]+@/.test(email)) return null;
    FORM.removeEventListener("input", firstCheck, true);
    PROMISE = getCustomerStatus(email);
    const result = await PROMISE;
    result.forEach((e) => CUSTOMERS.push(e));
};

const activeBtn = () => BTN.removeAttribute("disabled");

const disableBtn = () => BTN.setAttribute("disabled", "true");

const onSubmit = async () => {
    toggleLoading(BTN);
    togglePage(REGISTER_ID);
};

const emailAutofill = () => {
    const email = getEmail();
    const fields = getEmailFields();
    fields.forEach((e) => (e.value = email));
};

const autocomplete = ({ target }) => {
    const email = target.value;
    if (!/[\w.]+@\w{1,}\./.test(email)) return null;
    const customers = CUSTOMERS.filter((e) => new RegExp(email).test(e.email));
    if (customers.length !== 1) return null;
    const customer = customers[0];
    console.log("....customer....", customer);
    setEmail(customer.email);
    if (!customer.state) togglePage(REGISTER_ID);
    else if (customer.state === "enabled") togglePage(SIGNIN_ID);
    else if (customer.state === "disabled") togglePage(ACTIVATE_ID);
    emailAutofill();
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
    FORM.addEventListener("input", autocomplete);
    FORM.addEventListener("input", debounce(toggleButton, 200));
    FORM.addEventListener("submit", onSubmit);
    FORM.addEventListener("submit", emailAutofill);
};
