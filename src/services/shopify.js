const { $q, showError } = require("../utils");

const tgt = {
    close: ".js-close",
    shopifyRes: ".js-shopify-response",
    isLogged: "#customer_logout_link",
    wrongPsw: "#customer_login",
    captha: ".shopify-challenge__button.btn",
};

exports.sendHttpRequest = (method, e) => {
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

const shopifyResult = (html) => ({
    isLogged: html.querySelector(tgt.isLogged) != null,
    hasWrongPsw: html.querySelector(tgt.wrongPsw) != null,
    hasChallenge: html.querySelector(tgt.captha) != null,
    // TODO adding other checks (unique email, ....)
});

const parseShopifyResponse = ({ target }, response) => {
    const htmlResponse = new DOMParser().parseFromString(response, "text/html");
    const resp = shopifyResult(htmlResponse);
    console.log(resp);
    if (resp.isLogged) $q(tgt.close).click();
    else if (resp.hasWrongPsw) showError(["Wrong password or email"]);
    //TODO take the message from configuration
    else if (resp.hasChallenge) target.submit();
    return resp;
};
