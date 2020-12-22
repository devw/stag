const { $q } = require("./q-selector");
const errorSelector = ".js-psw-policy";
// TODO read from configuration
const pswPolicy = {
    pswMinLength: 5,
    pswMinLengthErr: "Password too short",
    pswMaxLength: 18,
    pswMaxLengthErr: "Password too long",
    pswUppercase: true,
    pswUppercaseErr: "Missing uppercase letter",
};

const showError = (errorMsgs) => {
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

const getPasswordPolicyErrors = (inputs) => {
    const psw = inputs["customer[password]"];
    const errorMsgs = [];

    if (psw.length < pswPolicy.pswMinLength)
        errorMsgs.push(pswPolicy.pswMinLengthErr);
    if (psw.length > pswPolicy.pswMaxLength)
        errorMsgs.push(pswPolicy.pswMaxLengthErr);
    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(psw))
        errorMsgs.push(pswPolicy.pswUppercaseErr);
    if (pswPolicy.pswNumber && !/(?=.*\d)/.test(psw))
        errorMsgs.push(pswPolicy.pswNumberErr);
    if (pswPolicy.pswSpecialCharacter && !/(?=.*[\W|_])/.test(psw))
        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);

    return errorMsgs;
};

exports.isValidPsw = (inputs) => {
    resetErrorMsgs();
    const errorMsgs = getPasswordPolicyErrors(inputs);
    return errorMsgs.length === 0 ? true : showError(errorMsgs) && false;
};

exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
