const { $q, $qq } = require("./toggle");
const { STORAGE_CONFIG } = require("../config");

const getErrorLabel = (e) => {
    return e.parentNode.querySelector(".label-error");
};
const showDateErrors = () => {
    $qq(".js-date").forEach((e) => {
        showDateError(e);
    });
};
globalThis.showDateErrors = showDateErrors;

const showDateError = (e) => {
    console.log(getDateAttr(e));
    const { minDate, maxDate, customerAge } = getDateAttr(e);
    console.log("getDateAttr: ", getDateAttr(e));
    if (minDate > customerAge || maxDate < customerAge) {
        globalThis._e = e;
        const errorEl = getErrorLabel(e);
        if (errorEl) {
            getErrorLabel(errorEl).style.display = "block";
        }
    }
};

const getCustomerAge = (dateElem) => {
    const DAY_IN_YEAR = 365;
    const SEC_IN_DAY = 3600 * 24;
    const MSEC_IN_DAY = 1000 * SEC_IN_DAY;
    const userSec = new Date(dateElem.value).getTime();
    const nowSec = new Date().getTime();
    const days = Math.trunc((nowSec - userSec) / MSEC_IN_DAY);
    return days / DAY_IN_YEAR;
};

//TODO to refactor
const getDateAttr = (dateElem) => ({
    minDate: dateElem.getAttribute("start"),
    maxDate: dateElem.getAttribute("end"),
    customerAge: getCustomerAge(dateElem),
});

const showPasswordErrors = () => {
    const pswElem = $q("[name='customer[password]']");
    const psw = pswElem.value;
    const pswPolicy = JSON.parse(localStorage.getItem(STORAGE_CONFIG))["text"];
    const errorNotes = [];
    // TODO refactor!!
    if (psw.length < pswPolicy.pswMinLength)
        errorNotes.push(pswPolicy.pswMinLengthErr);
    if (psw.length > pswPolicy.pswMaxLength)
        errorNotes.push(pswPolicy.pswMaxLengthErr);
    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(psw))
        errorNotes.push(pswPolicy.pswUppercaseErr);
    if (pswPolicy.hasPswNumber && !/(?=.*\d)/.test(psw))
        errorNotes.push(pswPolicy.pswNumberErr);
    if (pswPolicy.hasPswSpecialCharacter && !/(?=.*[\W|_])/.test(psw))
        errorNotes.push(pswPolicy.pswSpecialCharacterErr);
    if (pswPolicy.hasPswUppercase && !/[A-Z]/.test(psw))
        errorNotes.push(pswPolicy.pswUppercaseErr);
    const exclamationLabel = getErrorLabel(pswElem);
    if (errorNotes.length === 0) {
        exclamationLabel.style.display = "none";
        return null;
    }
    exclamationLabel.innerHTML = exclamationLabel.innerHTML.split("</i>")[0];
    exclamationLabel.style.display = "block";
    exclamationLabel.append(errorNotes[0]);
};

exports.isFormFilled = (form) =>
    Array.from(form.querySelectorAll("input[required]")).every((e) => e.value);

const hideErrors = () =>
    $qq(".label-error").forEach((e) => (e.style.display = "none"));

const areErrors = () => {
    const errElems = Array.from($qq(".label-error"));
    return errElems.some((e) => e.style.display === "block");
};

exports.areInvalidInputs = () => {
    hideErrors();
    showPasswordErrors();
    showDateErrors();
    return areErrors();
};

exports.isValidEmail = (email) => /\S+@\S+\.\S{2,}/.test(email);

exports.hash = (str) =>
    str.split("").reduce((a, c) => {
        a = (a << 5) - a + c.charCodeAt(0);
        return a & a;
    }, 0);
