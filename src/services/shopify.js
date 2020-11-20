const { $q } = require("../utils");
const { $qq } = require("../utils/q-selector");
const tgt = {
    pswWrong: ".js-psw-wrong",
    close: "js-close",
    footer: "footer",
    header: "header",
    shopifyRes: ".js-shopify-response",
    isLogged: "#customer_logout_link",
    wrongPsw: "#customer_login",
    captha: ".shopify-challenge__button.btn",
};

exports.sendHttpRequest = (method, e) => {
    const htmlFixture = require("../fixtures/wrong-email-psw.html");

    // return new Promise((res, rej) => {
    //     res(parseShopifyResponse(e, htmlFixture));
    // });

    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, e.target.action);
        xhr.send(new FormData(e.target));
        xhr.onload = () => {
            if (xhr.status >= 400) rej(xhr.response);
            else res(parseShopifyResponse(e, xhr.response));
        };
        xhr.onerror = (err) => rej(`Server error: ${err}`); //triggered if there is no connection
    });
};

const shopifyResult = () => ({
    isLogged: $q(tgt.isLogged) !== null,
    hasWrongPsw: $q(tgt.wrongPsw) !== null,
    hasChallenge: $q(tgt.captha) !== null,
    // TODO adding other checks (unique email, ....)
});

const parseShopifyResponse = ({ target }, response) => {
    $q(tgt.shopifyRes).innerHTML = response;
    cleanResponse();
    const resp = shopifyResult();
    if (resp.isLogged) $q(tgt.close).click();
    else if (resp.hasWrongPsw) onWrongPsw(target);
    else if (resp.hasChallenge) onChallenge(target);
    return shopifyResult();
};

const onChallenge = (target) => {
    target.submit();
    // target.style.setProperty("display", "none");
    // $q(tgt.captha).addEventListener("click", (e) => {
    //     e.preventDefault();
    //     target.submit();
    // });
};

const onWrongPsw = (target) => {
    globalThis.__target = target;
    const error = target.previousSibling.querySelector(tgt.pswWrong);
    error.style.setProperty("display", "block");
};

const cleanResponse = () => {
    $q(tgt.footer)?.style?.setProperty("display", "none");
    $q(tgt.header)?.style?.setProperty("display", "none");
};
