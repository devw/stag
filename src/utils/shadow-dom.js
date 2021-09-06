exports.getShadowDOM = () => {
    const hasShadowDOM = document.body.querySelector('login-popup');
    return hasShadowDOM
        ? hasShadowDOM
        : document
              .querySelector('body')
              .appendChild(document.createElement('login-popup'))
              .attachShadow({ mode: 'open' });
};
