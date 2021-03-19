const STORAGE_CONFIG = "login-popup-config";
exports.$q = (leaf) => document.querySelector(leaf);
exports.$qq = (leaf) => document.querySelectorAll(leaf);
exports.STORAGE_CONFIG = STORAGE_CONFIG;
localStorage.setItem(
    STORAGE_CONFIG,
    JSON.stringify({
        text: {
            pswMinLength: 5,
            pswMinLengthErr: "The password must contain at least ? characters",
        },
    })
);
