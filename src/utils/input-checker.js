const { $q } = require("./toggle");
const errorSelector = ".js-psw-policy";
const { STORAGE_CONFIG } = require("../config");

const checkDate = () => {
    const dateElem = $q("[type='date']");
    if (!dateElem) return [];
    const { minDate, maxDate, error, customerAge } = getDateAttr(dateElem);
    return minDate > customerAge || maxDate < customerAge ? [error] : [];
};
const getCustomerAge = (dateElem) => {
    const DAY_IN_YEAR = 365;
    const SEC_IN_DAY = 3600 * 24;
    const MSEC_IN_DAY = 1000 * SEC_IN_DAY;
    const userSec = new Date(dateElem.value).getTime();
    const nowSec = new Date().getTime();
    const days = parseInt((nowSec - userSec) / MSEC_IN_DAY);
    return days / DAY_IN_YEAR;
};
const getDateAttr = (dateElem) => ({
    minDate: dateElem.getAttribute("date-min"),
    maxDate: dateElem.getAttribute("date-max"),
    error: dateElem.getAttribute("date-error"),
    customerAge: getCustomerAge(dateElem),
});

const showError = (errorMsgs) => {
    // TODO you should use the css to hide/show!!
    const list = document.createElement("ul");
    errorMsgs.forEach((e) => {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(e));
        list.appendChild(item);
    });
    const errorElm = $q(`div[style*="display: block"] ${errorSelector}`);
    errorElm.appendChild(list);
    errorElm.style.setProperty("display", "block");
    return false;
};
const resetErrorMsgs = () => {
    $q(errorSelector).innerText = "";
    $q(errorSelector).style.setProperty("display", "none");
};

const getPasswordPolicyErrors = async (inputs) => {
    const psw = inputs["customer[password]"];
    const errorMsgs = [];
    const pswPolicy = JSON.parse(localStorage.getItem(STORAGE_CONFIG))["text"];
    // TODO refactor!!
    if (psw.length < pswPolicy.pswMinLength)
        errorMsgs.push(pswPolicy.pswMinLengthErr);
    if (psw.length > pswPolicy.pswMaxLength)
        errorMsgs.push(pswPolicy.pswMaxLengthErr);
    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(psw))
        errorMsgs.push(pswPolicy.pswUppercaseErr);
    if (pswPolicy.hasPswNumber && !/(?=.*\d)/.test(psw))
        errorMsgs.push(pswPolicy.pswNumberErr);
    if (pswPolicy.hasPswSpecialCharacter && !/(?=.*[\W|_])/.test(psw))
        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);
    if (pswPolicy.hasPswUppercase && !/[A-Z]/.test(psw))
        errorMsgs.push(pswPolicy.pswUppercaseErr);

    return errorMsgs;
};

const serialize = (form) => {
    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });
    return Array.from(new FormData(form)).reduce(reducer, {});
};

exports.isFormFilled = (form) =>
    Array.from(form.querySelectorAll("input[required]")).every((e) => e.value);

exports.checkInputs = async (form) => {
    resetErrorMsgs();
    const errors = [];
    const inputs = serialize(form);
    errors.push(...(await getPasswordPolicyErrors(inputs)));
    errors.push(...checkDate());
    return errors.length === 0 ? true : showError(errors) && false;
};

exports.isValidEmail = (email) => /\S+@\S+\.\S{2,}/.test(email);

exports.showError = showError;
