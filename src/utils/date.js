const { $qq } = require("./toggle");
const { addJS, addCSS } = require("./load-pages");

const ids = {
    d: "day",
    m: "month",
    y: "year",
    cal: ".picker-date",
    noCal: ".dropdown-date",
};

const setCalendarPicker = () => {
    if (globalThis.flatpickr) {
        setCalendar();
        return null;
    }
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9";
    addJS(`${baseUrl}/flatpickr.min.js`, setCalendar);
    addCSS(`${baseUrl}/flatpickr.min.css`);
};

const checkDate = ({ target }) => {
    var input = target.value;
    input = input.replace(/[^\d]/, "");
    target.value = input;
};

const getDateAttrs = (el) => {
    const a = [
        "dateFormat",
        "enableTime",
        "minDate",
        "maxDate",
        "altInput",
        "altFormat",
    ];
    return a.reduce((a, c) => {
        const attr = el.getAttribute(c);
        if (!attr) return a;
        return { ...a, [c]: attr };
    }, {});
};

const getHtml = (target) => {
    const pickerStyle = target.closest("[block-id]").className;

    //TODO move these parts in templates/
    const selectHtml = `
        <select id="${ids.d}"><option>1</option></select>
        <select id="${ids.m}"><option>January</option></select>
        <select id="${ids.y}">2000</select>
    `;
    const inputHtml = `
        <input id="${ids.d}" placeholder="dd" maxlength="2">
        <input id="${ids.m}" placeholder="mm" maxlength="2">
        <input id="${ids.y}" placeholder="yyyy" maxlength="4">
    `;
    // return inputHtml;
    return pickerStyle === "date-text" ? inputHtml : selectHtml;
};

const getStartEnd = (el) => {
    let { minDate, maxDate } = getDateAttrs(el);
    minDate = globalThis.moment(minDate).year();
    maxDate = globalThis.moment(maxDate).year();
    return { minDate, maxDate };
};

const setYears = (target) => {
    const cal = target.parentNode.querySelector(ids.cal);
    const { maxDate, minDate } = getStartEnd(cal);
    const length = maxDate - minDate + 1;
    const ys = Array.from({ length }, (_, k) => k + parseInt(minDate));
    const yElem = target.querySelector(`select#${ids.y}`);
    if (!yElem) return null;
    let html = "";
    ys.forEach((e) => (html += `<option value=${e}>${e}</option>`));
    yElem.innerHTML = html;
    yElem.dispatchEvent(new Event("change"));
};

const setCalendar = () => {
    document.querySelectorAll(".flatpickr-calendar").forEach((e) => e.remove());
    const selector = "[block-id].calendar > .js-date";
    $qq(selector).forEach((e) => globalThis.flatpickr(e, getDateAttrs(e)));
};

const setMonths = async (target) => {
    const months = globalThis.moment.months();
    const mElem = target.querySelector(`select#${ids.m}`);
    if (!mElem) return null;
    let html = ``;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    months.forEach((e, i) => (html += `<option value=${i + 1}>${e}</option>`));
    mElem.innerHTML = html;
};

const setDays = ({ target }) => {
    //TODO code repetition
    const pNode = target.parentNode;
    const y = pNode.querySelector(`#${ids.y} option:checked`)?.value;
    const m = pNode.querySelector(`#${ids.m} option:checked`)?.value;
    if (!y || !m) return null;
    const daysCount = globalThis.moment(`${y}-${m}`, "YYYY-MM").daysInMonth();
    const d = pNode.querySelector(`select#${ids.d}`);
    if (!d) return null;
    let html = "";
    //TODO refactor needed
    Array.from(new Array(daysCount)).forEach(
        (_, i) => (html += `<option value=${i + 1}>${i + 1}</option>`)
    );
    d.innerHTML = html;
};

const setDatePickers = () => $qq(ids.noCal).forEach(setDatePicker);

const setDatePicker = (target) => {
    target.innerHTML = getHtml(target);

    const freeInput = target.querySelectorAll(".dropdown-date>input");
    const selectInput = target.querySelectorAll("select");
    // freeInput.forEach((e) => e.addEventListener("input", checkFreeInput));
    selectInput.forEach((e) => e.addEventListener("change", updateCalendar));
    freeInput.forEach((e) => e.addEventListener("input", updateCalendar));
    freeInput.forEach((e) => e.addEventListener("keyup", checkDate));
    target.querySelector(`#${ids.m}`).addEventListener("change", setDays);
    target.querySelector(`#${ids.y}`).addEventListener("change", setDays);

    setMonths(target);
    setYears(target);
};

const setDropDownPicker = () => {
    if (globalThis.moment) {
        setDatePickers();
        return null;
    }
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1";
    addJS(`${baseUrl}/moment.min.js`, setDatePickers);
};

const updateCalendar = ({ target }) => {
    const root = target.closest("[block-id]");
    const s = `${ids.noCal} select option:checked, ${ids.noCal} input`;
    const nums = Array.from(root.querySelectorAll(s)).map((e) => e.value);
    root.querySelector(`${ids.cal}`).value = nums.join("-");
};

exports.init = () => {
    setDropDownPicker();
    setCalendarPicker();
};
