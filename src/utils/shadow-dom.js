exports.getShadowDOM = () => {
    const hasShadowDOM = document.body.querySelector('login-popup');
    return hasShadowDOM
        ? hasShadowDOM
        : document.body
              .insertBefore(
                  document.createElement('login-popup'),
                  document.querySelector('div')
              )
              .attachShadow({ mode: 'open' });
};
