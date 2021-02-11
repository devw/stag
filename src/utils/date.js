const { $q, $qq } = require("./toggle");
globalThis.$q = $q;
globalThis.$qq = $qq;
const { addJS, addCSS } = require("./load-pages");

const ids = {
    d: "day",
    m: "month",
    y: "year",
    cal: ".picker-date",
    noCal: ".dropdown-date",
};

const addDatePicker = (callback) => {
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9";
    addJS(`${baseUrl}/flatpickr.min.js`, callback);
    addCSS(`${baseUrl}/flatpickr.min.css`);
};

const getDateAttrs = (el, arr) => {
    return arr.reduce((a, c) => {
        const attr = el.getAttribute(c);
        if (!attr) return a;
        return { ...a, [c]: attr };
    }, {});
};

const setCalendarPicker = () => addDatePicker(setCalendar);

const setCalendar = () => {
    $qq(".js-date")?.forEach((target) => {
        const arr = ["dateFormat", "enableTime", "mode"];
        const attrs = getDateAttrs(target, arr);
        console.log("attrs", attrs);
        globalThis.flatpickr(target, attrs);
    });
};

const setMonths = (target) => {
    const months = moment.months();
    const mElem = target.querySelector(`#${ids.m}`);
    mElem.innerHTML = "";
    months.forEach((e, i) => {
        const html = `<option value=${i + 1}>${e}</option>`;
        mElem.innerHTML += html;
    });
};

const setDays = ({ target }) => {
    const pNode = target.parentNode;
    const y = pNode.querySelector(`#${ids.y} option:checked`).value;
    const m = pNode.querySelector(`#${ids.m} option:checked`).value;
    const daysCount = moment(`${y}-${m}`, "YYYY-MM").daysInMonth();
    const d = pNode.querySelector(`#${ids.d}`);
    d.innerHTML = "";

    Array.from(new Array(daysCount)).forEach((e, i) => {
        const html = `<option value=${i + 1}>${i + 1}</option>`;
        d.innerHTML += html;
    });
};

const setYears = (target) => {
    const cal = target.parentNode.querySelector(ids.cal);
    let { start, end } = getDateAttrs(cal, ["start", "end"]);
    if (!start || start < 1900) start = 1900;
    if (!end || end > 2100) end = 2100;
    const length = end - start;
    const ys = Array.from({ length }, (v, k) => k + parseInt(start));
    const yElem = target.querySelector(`#${ids.y}`);
    ys.forEach((e) => {
        const html = `<option value=${e}>${e}</option>`;
        yElem.innerHTML += html;
    });
    yElem.dispatchEvent(new Event("change"));
};

const html = `
    <select id="${ids.d}"></select>
    <select id="${ids.m}"></select>
    <select id="${ids.y}"></select>
 `;

const setDatePickers = () => {
    $qq(ids.noCal).forEach(setDatePicker);
};

const setDatePicker = (target) => {
    target.innerHTML = html;
    target.querySelector(`#${ids.m}`).addEventListener("change", setDays);
    target.querySelector(`#${ids.y}`).addEventListener("change", setDays);
    target.querySelectorAll("select").forEach((e) => {
        e.addEventListener("change", updateCalendar);
    });
    setMonths(target);
    setYears(target);
};

const updateCalendar = ({ target }) => {
    const noCal = target.parentNode;
    const nums = Array.from(
        noCal.querySelectorAll("select option:checked")
    ).map((e) => e.value);
    noCal.parentNode.querySelector(`${ids.cal}`).value = nums.join("-");
};

const setDropDownPicker = () => {
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1";
    addJS(`${baseUrl}/moment.min.js`, setDatePickers);
};

exports.init = () => {
    setCalendarPicker();
    setDropDownPicker();
};
