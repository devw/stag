const { $qq } = require("./toggle");
const { addJS, addCSS } = require("./load-pages");

const ids = {
    d: "day",
    m: "month",
    y: "year",
    cal: ".picker-date",
    noCal: ".dropdown-date",
};

const getValidity = () => ({
    day: (v) => v > 0 && v < 32 && /^\d{1,2}$/.test(v),
    month: (v) => v > 0 && v < 13 && /^\d{1,2}$/.test(v),
    year: (v) => v > 0 && /^\d{4}$/.test(v),
});

const checkFreeInput = ({ target }) => {
    checkDaysCount(target);
    const { id, value } = target;
    target.nextElementSibling.style.display = "none";
    const isValid = getValidity()[id](value);
    target.nextElementSibling.style.display = isValid ? "none" : "block";
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

const checkDaysCount = (target) => {
    const pNode = target.closest(".dropdown-date");
    const y = pNode.querySelector(`#${ids.y}`)?.value;
    const m = pNode.querySelector(`#${ids.m}`)?.value;
    const d = pNode.querySelector(`#${ids.d}`)?.value;
    if (!y && !m && !d) return null;
    const daysCount = moment(`${y}-${m}`, "YYYY-MM").daysInMonth();
    const dayLabel = pNode.querySelector(`#${ids.d}`).nextElementSibling;
    dayLabel.style.display = d > daysCount ? "block" : "none";
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

const setCalendar = () => {
    $qq(".js-date")?.forEach((target) => {
        let attrs = getDateAttrs(target);
        globalThis.flatpickr(target, attrs);
    });
};

const setMonths = async (target) => {
    const months = moment.months();
    const mElem = target.querySelector(`#${ids.m}`);
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
    if (!y && !m) return null;
    const daysCount = moment(`${y}-${m}`, "YYYY-MM").daysInMonth();
    const d = pNode.querySelector(`#${ids.d}`);
    let html = "";
    Array.from(new Array(daysCount)).forEach(
        (_, i) => (html += `<option value=${i + 1}>${i + 1}</option>`)
    );
    d.innerHTML = html;
};

const getStartEnd = (el) => {
    let { minDate, maxDate } = getDateAttrs(el);
    minDate = minDate.slice(-4);
    maxDate = maxDate.slice(-4);
    return { minDate, maxDate };
};

const setYears = (target) => {
    const cal = target.parentNode.querySelector(ids.cal);
    const { maxDate, minDate } = getStartEnd(cal);
    const length = maxDate - minDate + 1;
    const ys = Array.from({ length }, (_, k) => k + parseInt(minDate));
    const yElem = target.querySelector(`#${ids.y}`);
    let html = "";
    ys.forEach((e) => (html += `<option value=${e}>${e}</option>`));
    yElem.innerHTML = html;
    yElem.dispatchEvent(new Event("change"));
};

const getHtml = (target) => {
    const inputStyle = target.parentNode
        .querySelector(".js-date")
        .getAttribute("inputStyle");

    const selectHtml = `
        <select id="${ids.d}"><option>1</option></select>
        <select id="${ids.m}"><option>January</option></select>
        <select id="${ids.y}">2000</select>
    `;
    const inputHtml = `
        <div>
            <input id="${ids.d}" placeholder="day (dd)">
            <label class="label-error"><i class="fa"></i>Wrong ${ids.d}</label>
        </div>
        <div>
            <input id="${ids.m}" placeholder="month (mm)">
            <label class="label-error"><i class="fa"></i>Wrong ${ids.m}</label>
        </div>
        <div>
            <input id="${ids.y}" placeholder="year (yyyy)">
            <label class="label-error"><i class="fa"></i>Wrong ${ids.y}</label>
        </div>
    `;

    return inputStyle === "three-input-fields" ? inputHtml : selectHtml;
};

const setDatePickers = () => {
    $qq(ids.noCal).forEach(setDatePicker);
};

const setDatePicker = (target) => {
    target.innerHTML = getHtml(target);
    const freeInput = target.querySelectorAll(".dropdown-date>div input");
    const selectInput = target.querySelectorAll("select");
    freeInput.forEach((e) => e.addEventListener("input", checkFreeInput));
    selectInput.forEach((e) => e.addEventListener("change", updateCalendar));
    target.querySelector(`#${ids.m}`).addEventListener("change", setDays);
    target.querySelector(`#${ids.y}`).addEventListener("change", setDays);
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
    if (globalThis.moment) {
        setDatePickers();
        return null;
    }
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1";
    addJS(`${baseUrl}/moment.min.js`, setDatePickers);
};

exports.init = () => {
    setDropDownPicker();
    setCalendarPicker();
};
