document.body
    .querySelector('[href="/account/login"]')
    ?.addEventListener("click", (e) => e.preventDefault());

const ENDPOINT =
    "http://localhost:8081/" ||
    "https://login-popup-dev-theme.s3.amazonaws.com/";
var script = document.createElement("script");
script.type = "text/javascript";
script.src = `${ENDPOINT}/bundle.js?t=2`;
document.getElementsByTagName("head")[0].appendChild(script);
