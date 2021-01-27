const { setDelimiters } = require("../src/doT");

var metafields = [
    {
        namespace: "date",
        key: "birth",
        value: "01/01/1900",
    },
    {
        namespace: "hobby",
        key: "sport",
        value: "14",
    },
];

localStorage.setItem("shopify_customer_metafields", JSON.stringify(metafields));

var std = { __cid: 4368841474213 };

localStorage.getItem("shopify_customer_metafields");

localStorage.removeItem("shopify_customer_metafields");
