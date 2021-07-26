(() => {
    window.onClick_loginPopup = (e) => e.preventDefault();
    window.el__loginPopup = document.body.querySelector('[href="/account/login"]');
    window.el__loginPopup?.addEventListener("click", window.onClick_loginPopup, true);

    const HEAD = document.getElementsByTagName("head")[0];

    // TODO fix with Shopify.shop
    const ENDPOINT = globalThis?.Shopify
        ? "https://login-popup-dev-configs.s3.amazonaws.com/public"
        : "http://localhost:8082";

    const addCSS = (url) => {
        const link = `<link rel="stylesheet" href="${url}" />`;
        HEAD.insertAdjacentHTML("afterbegin", link);
    };

    const addJS = (url) => {
        const script = document.createElement("script");
        script.src = url;
        HEAD.appendChild(script);
    };

    addJS(`${ENDPOINT}/bundle.js?t=${Math.random()}`);
    addCSS(`${ENDPOINT}/main.css?t=${Math.random()}`);
    addCSS(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    );
})()


