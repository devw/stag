const { REGISTER_ID, SIGNIN_ID, LANDING_ID } = require("../templates");
const { toggleModules, $q, toggleSecret } = require("../utils");
const { isFormFilled, checkInputs, sortBlocks } = require("../utils");
const { storeMetafieldIntoShopify } = require("../services");
const { STORAGE_METAFIELD } = require("../config.js");
const tgt = {
    form: `.${REGISTER_ID} form`,
    login: `.${REGISTER_ID} .js-login`,
    pswDiffError: `.${REGISTER_ID} .js-error .js-psw-diff`,
    pswFormatError: `.${REGISTER_ID} .js-error .js-psw-valid`,
};
const multiChoiceSelector = "multi-choice";

const storeTags = () => {
    const sel = `
        [type='checkbox'][data-tag]:checked,
        [type='text'][data-tag], 
        [type='date'][data-tag]
    `;

    const els = Array.from($q(tgt.form).querySelectorAll(sel));

    const tags = els.map((el) => `${el.getAttribute("data-tag")}:${el.value}`);
    $q('[name="customer[tags]"]').value = tags.join(", ");
};

const storeMetafield = () => {
    const sel = `
        [type='checkbox'][data-key]:checked,
        [type='text'][data-key], 
        [type='date'][data-key]
    `;
    const els = Array.from($q(tgt.form).querySelectorAll(sel));
    const metafields = els.map((el) => {
        return {
            namespace: el.getAttribute("data-namespace"),
            key: el.getAttribute("data-key"),
            value: el.value,
        };
    });

    localStorage.setItem(STORAGE_METAFIELD, JSON.stringify(metafields));
    console.log("localStorage", localStorage.getItem(STORAGE_METAFIELD));
};

const handleChoiceBlock = ({ target, currentTarget }) => {
    if (!currentTarget.classList.contains(multiChoiceSelector)) {
        currentTarget.querySelectorAll("[type='checkbox']").forEach((e) => {
            e.checked = false;
        });
        target.checked = true;
    }
};

const toggleButton = ({ target }) => {
    if (target.value.length > 2) {
        const btn = target.closest("form").querySelector("[type='submit']");
        btn.removeAttribute("disabled");
    }

    const btn = $q(tgt.form).querySelector("input[type='submit']");
    isFormFilled($q(tgt.form))
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const onSubmit = async (e) => {
    e.preventDefault();
    storeTags();
    storeMetafield();
    const { sendHttpRequest } = require("../services");
    if (!(await checkInputs($q(tgt.form)))) return null;
    $q(tgt.form).action = "/account";
    const resp = await sendHttpRequest("POST", e);
    console.log("shopify response", resp);
};

const changeSlide = (e) => {
    const ele = $q(tgt.form).querySelector(".carousel");
    const shift = parseInt(getComputedStyle(ele).getPropertyValue("width"), 10);
    const left = /js-next/.test(e.target.className) ? shift : -shift;
    ele.scrollBy({
        left: left,
        behavior: "smooth",
    });
};

const formatDate = ({ target }) => (target.type = "date");

exports.init = () => {
    const form = $q(tgt.form);
    sortBlocks();
    form.addEventListener("input", toggleButton);
    form.querySelectorAll(".js-next, .js-prev").forEach((e) =>
        e.addEventListener("click", changeSlide)
    );
    form.addEventListener("submit", onSubmit);
    $q(tgt.login)?.addEventListener("click", () => toggleModules(SIGNIN_ID));
    form.querySelector(".js-show-psw")?.addEventListener("click", toggleSecret);
    form.querySelector(".choice-block")?.addEventListener(
        "click",
        handleChoiceBlock
    );
    $q(".js-date input")?.addEventListener("focus", formatDate);
    storeMetafieldIntoShopify();
    $q(".js-back")?.addEventListener("click", () => toggleModules(LANDING_ID));
};
