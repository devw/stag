const { $q } = require("./q-selector");
const errorSelector = ".js-psw-policy";
const { getTheme } = require("../services/proxy");

const showError = (errorMsgs) => {
    // TODO you should use the css to hide/show!!
    const list = document.createElement("ul");
    errorMsgs.forEach((e) => {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(e));
        list.appendChild(item);
    });
    $q(errorSelector).appendChild(list);
    $q(errorSelector).style.setProperty("display", "block");
    return false;
};
const resetErrorMsgs = () => {
    $q(errorSelector).innerText = "";
    $q(errorSelector).style.setProperty("display", "none");
};

const getPasswordPolicyErrors = async (inputs) => {
    const psw = inputs["customer[password]"];
    const errorMsgs = [];

    const pswPolicy = await getTheme().then((res) => res.text);

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

exports.isFormFilled = (form) => {
    const inputs = serialize(form);
    return Object.values(inputs).every((e) => e.length > 0);
};

exports.isValidPsw = async (form) => {
    resetErrorMsgs();
    const inputs = serialize(form);
    const errorMsgs = await getPasswordPolicyErrors(inputs);
    return errorMsgs.length === 0 ? true : showError(errorMsgs) && false;
};

exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

exports.showError = showError;
