const { IDs } = require("../config");
const { REGISTER_ID, LANDING_ID } = IDs;
const { togglePage, $q, toggleSecret, toggleLoading } = require("../utils");
const { isFormFilled, checkInputs, sortBlocks } = require("../utils");
const { storeMetafieldIntoShopify } = require("../services");
const { STORAGE_METAFIELD } = require("../config.js");
let FORM, BTN;

const multiChoiceSelector = "multi-choice";

const getSelector = (tag) => `
    [data-is-tag='${tag === "tag"}']:checked,
    [type='text'][data-is-tag='${tag === "tag"}'],
    [type='date'][data-is-tag='${tag === "tag"}']
`;

const storeTags = () => {
    const sel = getSelector("tag");
    const els = Array.from(FORM.querySelectorAll(sel));

    const tags = els.map((el) => `${el.getAttribute("data-tag")}:${el.value}`);
    $q('[name="customer[tags]"]').value = tags.join(", ");
};

const storeMetafield = () => {
    const sel = getSelector("metafield");
    const els = Array.from(FORM.querySelectorAll(sel));
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
const toggleButton = () => {
    isFormFilled(FORM)
        ? BTN.removeAttribute("disabled")
        : BTN.setAttribute("disabled", "true");
};

const onSubmit = async (e) => {
    e.preventDefault();
    if (!(await checkInputs(FORM))) return null;
    toggleLoading(BTN);
    storeTags();
    storeMetafield();
    const { sendHttpRequest } = require("../services");
    FORM.action = "/account";
    const resp = await sendHttpRequest("POST", e);
    toggleLoading(BTN);
    console.log("shopify response", resp);
};

const formatDate = ({ target }) => (target.type = "date");

exports.init = () => {
    FORM = $q(`#${REGISTER_ID} form`);
    BTN = FORM.querySelector("button");
    sortBlocks();
    FORM.addEventListener("input", toggleButton);
    FORM.addEventListener("submit", onSubmit);
    FORM.querySelector(".js-show-psw")?.addEventListener("click", toggleSecret);
    FORM.querySelector(".choice-block")?.addEventListener(
        "click",
        handleChoiceBlock
    );
    $q(".js-date input")?.addEventListener("focus", formatDate);
    storeMetafieldIntoShopify();
    $q(`#${REGISTER_ID} .js-back`).addEventListener("click", () =>
        togglePage(LANDING_ID)
    );
};
