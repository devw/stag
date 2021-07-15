const { $q } = require("../utils");

exports.showProperActivate = (customer) => {
    const tags = customer.tags.split(",");
    const tag = tags.filter(e => !!$q(`.activate-${e}`));
    if (tag.length === 0) $q(".activate-no-tag").style.display = "block";
    else $q(`.activate-${tag[0]}`).style.display = "block";
};