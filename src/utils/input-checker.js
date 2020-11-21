// exports.isValidPsw = (value) => value.length > 4;
const { $q } = require("./q-selector");
const errorSelector = ".register .js-error";

exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

exports.isValidPsw = (str) => {
    $q(errorSelector).innerText = "";
    $q(errorSelector).style.setProperty("display", "none");

    const text = require("../../public/data/text.json");
    const psw = text.password;
    const errorMsgs = [];

    if (str.length < psw.pswMinLength) errorMsgs.push(psw.pswMinLengthErr);

    if (str.length > psw.pswMaxLength) errorMsgs.push(psw.pswMaxLengthErr);

    if (psw.pswUppercase && !/(?=.*[A-Z])/.test(str))
        errorMsgs.push(psw.pswUppercaseErr);

    if (psw.pswNumber && !/(?=.*\d)/.test(str))
        errorMsgs.push(psw.pswNumberErr);

    if (psw.pswSpecialCharacter && !/(?=.*[\W|_])/.test(str))
        errorMsgs.push(psw.pswSpecialCharacterErr);

    if (errorMsgs.length > 0) {
        const list = document.createElement("ul");
        errorMsgs.forEach((e) => {
            const item = document.createElement("li");
            item.appendChild(document.createTextNode(e));
            list.appendChild(item);
        });
        $q(errorSelector).appendChild(list);
        $q(errorSelector).style.setProperty("display", "block");
        return false;
    }
    return true;
};
