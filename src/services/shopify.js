const { $q } = require("../utils");
const tgt = {
    footer: "footer",
    header: "header",
    shopifyRes: ".js-shopify-response",
    isLogged: "#customer_logout_link",
    wrongPsw: "#customer_login",
    captha: "shopify-challenge__message",
};

exports.sendHttpRequest = (method, e) =>
    new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, e.target.action);
        xhr.send(new FormData(e.target));
        xhr.onload = () => {
            if (xhr.status >= 400) rej(xhr.response);
            else res(parseShopifyResponse(xhr.response));
        };
        xhr.onerror = (err) => rej(`Server error: ${err}`); //trigger if there is no connection
    });

const parseShopifyResponse = (response) => {
    $q(tgt.shopifyRes).innerHTML = response;
    cleanResponse();
    return shopifyResult();
};

const shopifyResult = () => ({
    isLogged: $q(tgt.isLogged) !== null,
    hasWrongPsw: $q(tgt.wrongPsw) !== null,
    hasChallenge: $q(tgt.captha) !== null,
});

const cleanResponse = () => {
    $q(tgt.footer)?.style?.setProperty("display", "none");
    $q(tgt.header)?.style?.setProperty("display", "none");
};
