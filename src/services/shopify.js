const { $q } = require('../utils');

const selectors = {
    close: '.js-close',
    shopifyRes: '.js-shopify-response',
    isLogged: '#customer_logout_link',
    wrongPsw: '#customer_login',
    captcha: '.shopify-challenge__button.btn',
};

exports.sendHttpRequest = (method, e) => {
    return globalThis?.Shopify
        ? new Promise((res, rej) => {
              const xhr = new XMLHttpRequest();
              xhr.open(method, e.target.action);
              xhr.send(new FormData(e.target));
              xhr.onload = () => {
                  if (xhr.status >= 400) rej(xhr.response);
                  else res(parseShopifyResponse(e, xhr.response));
              };
              xhr.onerror = (err) => rej(`Server error: ${err}`); //triggered if there is no connection
          })
        : new Promise((res) => setTimeout(() => res({}), 2000));
};

const shopifyResult = (html) => ({
    isLogged: html.querySelector(selectors.isLogged) != null,
    hasWrongPsw: html.querySelector(selectors.wrongPsw) != null,
    hasChallenge: html.querySelector(selectors.captcha) != null,
    // TODO adding other checks (unique email, ....)
});

const parseShopifyResponse = ({ target }, response) => {
    const htmlResponse = new DOMParser().parseFromString(response, 'text/html');
    const resp = shopifyResult(htmlResponse);
    if (resp.isLogged) $q(selectors.close).click();
    else if (resp.hasWrongPsw) $q('.js-signin-err').style.display = 'block';
    //TODO take the message from configuration
    else if (resp.hasChallenge) $q('[name="register-form"]').submit();
    return resp;
};
