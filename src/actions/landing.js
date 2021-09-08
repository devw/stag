const { IDs } = require('../config');
const { SIGNIN_ID, ACTIVATE_ID } = IDs;
const { LANDING_ID, REGISTER_ID } = IDs;
const { getCustomerStatus } = require('../services');
const { togglePage, $q, $qq, debounce, toggleLoading } = require('../utils');
const { showProperActivate } = require('../utils/activate.utils');

var BTN,
    EMAIL,
    QUERY,
    CUSTOMERS = [];

const getEmail = () => EMAIL.value;
const setEmail = (email) => (EMAIL.value = email);
const getEmailFields = () => $qq("[type='email']");

const setCustomers = async (email) => {
    QUERY = email;
    const promise = getCustomerStatus(QUERY);
    const result = await promise;
    CUSTOMERS = [];
    result?.customers?.forEach((e) => CUSTOMERS.push(e));
};

const getUniqCustomer = (email) => {
    const customers = CUSTOMERS.filter((e) => e.email === email);
    if (customers[0]) return customers[0];
};

const getMatchCustomer = (email) => {
    const customers = CUSTOMERS.filter((e) =>
        new RegExp(`^${email}`).test(e.email)
    );
    if (customers.length === 1) return customers[0];
};

const updateCustomers = async (event) => {
    const email = getEmail();
    if (email.length < 6 || event.inputType === 'deleteContentBackward')
        return null;
    if (!new RegExp(`^${QUERY}`).test(email)) await setCustomers(email);
    autocomplete(event);
};

const activeBtn = () => BTN.removeAttribute('disabled');

const disableBtn = () => BTN.setAttribute('disabled', 'true');

const onSubmit = async () => {
    const email = getEmail();
    toggleLoading(BTN);
    if (!new RegExp(`^${QUERY}`).test(email)) await setCustomers(email);
    const customer = getUniqCustomer(email);
    checkStatusAndTogglePage(customer);
    setTimeout(() => toggleLoading(BTN), 0);
};

const emailAutofill = () => {
    const email = getEmail();
    const fields = getEmailFields();
    fields.forEach((e) => (e.value = email));
};

const checkStatusAndTogglePage = (customer) => {
    const { state, id } = customer;
    emailAutofill();
    if (!state) togglePage(REGISTER_ID);
    else if (state === 'enabled') togglePage(SIGNIN_ID);
    else {
        togglePage(ACTIVATE_ID);
        $q('[name="customer-id"]').value = id;
        showProperActivate(customer);
    }
};

const autocomplete = ({ inputType }) => {
    const email = getEmail();
    if (!/[\w.]+@\w{1,}\./.test(email) || inputType === 'deleteContentBackward')
        return null;
    const customer = getMatchCustomer(email);
    if (!customer) return null;
    setEmail(customer.email);
    checkStatusAndTogglePage(customer);
};

const toggleButton = async ({ target }) => {
    const email = target.value;
    const isEmail = /[\w.]+@\w+\.[a-z]{2,}/.test(email);
    isEmail ? activeBtn() : disableBtn();
};

exports.init = () => {
    const form = $q(`#${LANDING_ID} form`);
    BTN = form.querySelector('button');
    EMAIL = form.querySelector("[type='email']");

    form.addEventListener('input', debounce(toggleButton, 200));
    form.addEventListener('submit', onSubmit);
    EMAIL.addEventListener('input', updateCustomers);
    EMAIL.addEventListener('change', autocomplete);
    EMAIL.addEventListener('input', autocomplete);
};
