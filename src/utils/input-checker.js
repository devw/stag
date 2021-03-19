const { $q, $qq } = require("./toggle");
const { STORAGE_CONFIG } = require("../config");

const getErrorLabel = (e) => {
    return e.parentNode.querySelector(".label-error:not([readonly]");
};
const showDateErrors = () => {
    $qq(".js-date:not([readonly]").forEach((e) => {
        showDateError(e);
    });
};
globalThis.showDateErrors = showDateErrors;

const showDateError = (e) => {
    const { minDate, maxDate, customerAge } = getDateAttr(e);
    const dateFormat = "DD-MM-YYYY";
    const minD = globalThis.moment(minDate, dateFormat);
    const maxD = globalThis.moment(maxDate, dateFormat);
    const customerD = globalThis.moment(customerAge, dateFormat);
    const errorLabel = getErrorLabel(e);
    if (!customerD.isBetween(minD, maxD) && errorLabel)
        errorLabel.style.display = "block";
};

//TODO to refactor
const getDateAttr = (dateElem) => ({
    minDate: dateElem.getAttribute("minDate"),
    maxDate: dateElem.getAttribute("maxDate"),
    customerAge: dateElem.value,
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
    hideLabel(pswElem);
    exclamationLabel.append(errorNotes[0]);
};

const hideLabel = (el) => {
    const block = el.closest("[block-id]");
    block.querySelector("label:not(.label-error)").classList.add("hidden");
};

exports.isFormFilled = (form) => {
    const s = "input[required]:not([readonly]";
    return Array.from(form.querySelectorAll(s)).every((e) => e.value);
};

const hideErrors = () => {
    $qq(".label-error").forEach((e) => (e.style.display = "none"));
    $qq("label:not(.label-error)").forEach((e) => e.classList.remove("hidden"));
};

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
