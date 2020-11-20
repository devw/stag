const { $q } = require("../utils");
const tgt = {
    pswWrong: ".js-psw-wrong",
    close: ".js-close",
    shopifyRes: ".js-shopify-response",
    isLogged: "#customer_logout_link",
    wrongPsw: "#customer_login",
    captha: ".shopify-challenge__button.btn",
};

exports.sendHttpRequest = (method, e) => {
    const htmlFixture = require("../fixtures/wrong-email-psw.html");
    const htmlLogged = `<div id="#customer_logout_link">link</div>`;

    // return new Promise((res, rej) => {
    //     res(parseShopifyResponse(e, htmlLogged));
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

const shopifyResult = (html) => ({
    isLogged: new RegExp(tgt.isLogged).test(html),
    hasWrongPsw: new RegExp(tgt.wrongPsw).test(html),
    hasChallenge: new RegExp(tgt.captha).test(html),
    // TODO adding other checks (unique email, ....)
});

const parseShopifyResponse = ({ target }, response) => {
    $q(tgt.shopifyRes).innerHTML = response;
    const resp = shopifyResult(response);
    console.log($q(tgt.close));
    globalThis._tgtClose = $q(tgt.close);
    if (resp.isLogged) $q(tgt.close).click();
    else if (resp.hasWrongPsw) onWrongPsw(target);
    else if (resp.hasChallenge) onChallenge(target);
    return resp;
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
