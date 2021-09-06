(() => {
    const HEAD = document.getElementsByTagName('head')[0];

    // TODO in prod the endpoint won't work (you can pass from proxy?)
    const ENDPOINT = globalThis?.Shopify
        ? 'https://login-popup-dev-configs.s3.amazonaws.com/public'
        : './';

    const addJS = (url) => {
        const script = document.createElement('script');
        script.src = url;
        HEAD.appendChild(script);
    };

    addJS(`${ENDPOINT}/bundle.js?t=${Math.random()}`);
})();
