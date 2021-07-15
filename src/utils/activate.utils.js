const { $q, $qq } = require("../utils");

exports.showProperActivate = (customer) => {
    hideActivateView();
    const tags = customer.tags.split(",").map(e => e.trim());
    const tag = tags.filter(e => !!$q(`.activate-${e}`));
    if (tag.length === 0) $q(".activate-no-tag").style.display = "block";
    else $q(`.activate-${tag[0]}`).style.display = "block";
};

const hideActivateView = () => $qq(".activate").forEach(e => e.style.display = "none");