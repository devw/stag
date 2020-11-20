const { AWS_ENDPOINT } = require("../config.js");
const { toggleLoading } = require("../utils/toggle-loading");

exports.registerViaProxy = async (inputs) => {
    const response = await fetch(`${AWS_ENDPOINT}/user/add/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
    });
    return response.json();
};

exports.isRegistered = async (email) => {
    toggleLoading();
    const res = await fetch(`${AWS_ENDPOINT}/user/${email}`);
    const json = await res.json();
    toggleLoading();
    return json.data;
};
