const { $q } = require('../utils');

const selectors = {
    close: '.js-close',
    shopifyRes: '.js-shopify-response',
    isLogged: '[href="/account/logout"]',
    wrongPsw: '#customer_login',
    captcha: '.shopify-challenge__button.btn',
};

exports.sendHttpRequest = (method, event) => {
    const target = event.path[0];
    return globalThis?.Shopify
        ? new Promise((res) => {
              const xhr = new XMLHttpRequest();
              xhr.open(method, target.action);
              xhr.send(new FormData(target));
              xhr.onload = () => {
                  console.log('xhr.response: ', xhr.response);
                  //   if (xhr.status >= 400) res(xhr.response);
                  //   else
                  res(parseShopifyResponse(target, xhr.response));
              };
              xhr.onerror = (err) => {
                  console.log('server error: ', xhr.response);
                  res(`Server error: ${err}`);
              }; //triggered if there is no connection
          })
        : new Promise((res) => setTimeout(() => res({}), 2000));
};

const hasServerError = (html) => {
    if (!html.querySelector('.status-code-500')) return null;
    const message = [];
    html.querySelectorAll('.content--desc').forEach((e) => message.push(e.textContent.trim()));
    return message.join(' ');
};

const shopifyResult = (html) => ({
    isLogged: html.querySelector(selectors.isLogged) != null,
    hasWrongPsw: html.querySelector(selectors.wrongPsw) != null,
    hasChallenge: html.querySelector(selectors.captcha) != null,
    serverError: hasServerError(html),
    // TODO adding other checks (unique email, ....)
});

const parseShopifyResponse = (target, response) => {
    const htmlResponse = new DOMParser().parseFromString(response, 'text/html');
    const resp = shopifyResult(htmlResponse);
    if (resp.isLogged) $q(selectors.close).click();
    else if (resp.hasWrongPsw) $q('.js-signin-err').style.display = 'block';
    //TODO take the message from configuration
    else if (resp.hasChallenge) $q('.partials-show form').submit();
    else if (resp.serverError) {
        const node = target.querySelector('button+label');
        node.setAttribute('class', 'error');
        node.innerText = resp.serverError;
    }
    return resp;
};
window.$q = $q;
