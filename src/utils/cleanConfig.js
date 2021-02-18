exports.cleanChoiceBlock = (text) => {
    //TODO this part should be made in kastor
    text?.choiceBlocks?.forEach((e) => {
        e.lineStyle = e.hasMultiLine ? "multi-line" : "";
        e.choiceStyle = e.hasMultiChoice ? "multi-choice" : "single-choice";
        e.isTag = e.isTag === "hasTag" ? true : false;
    });

    return text;
};
exports.cleanInputBlocks = (text) => {
    text?.inputBlocks?.forEach((e) => {
        if (e.name === "customer[email]") {
            e.placeholder = text?.yourEmail;
        }
        if (e.name === "customer[password]") {
            e.placeholder = text?.yourPassword;
        }
    });
};

const pastDate = (year) => {
    const mSecYear = 31_536_000_000;
    const seconds = Date.now() - year * mSecYear;
    const d = new Date(seconds);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("-");
};

const cleanDate = (date) => {
    if (/^\d{4}$/.test(date)) return `01-01-${date}`;
    if (/^\d{1,3}$/.test(date)) return pastDate(date);
    return date;
};

exports.cleanDateBlocks = (text) => {
    //TODO this part should be made in kastor
    text?.dateBlocks?.forEach((e) => {
        e.isTag = e.isTag === "hasTag" ? true : false;
        e.minDate = cleanDate(e.minDate);
        e.maxDate = cleanDate(e.maxDate);
    });

    return text;
};
