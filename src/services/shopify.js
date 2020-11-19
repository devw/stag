const { APP_ID } = require("../templates");
const $ = document.querySelector.bind(document);

exports.sendHttpRequest = (method, e) =>
    new Promise((res, _) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, e.target.action);
        xhr.send(new FormData(e.target));
        xhr.onload = () => {
            $(".js-shopify-response").innerHTML = xhr.responseText;
            // cleanResponse();
            const result = shopifyResult();
            res(result);
        };
    });

const shopifyResult = () => ({
    login: $(`#${APP_ID}`).querySelector("#customer_logout_link")?.length > 0,
    wrongInput: $(`#${APP_ID}`).querySelector("#customer_login")?.length > 0,
});
const cleanResponse = () => {
    $(`#${APP_ID} footer`).style.setProperty("display", "none");
    $(`#${APP_ID} header`).style.setProperty("display", "none");
};
