const getData = (url) => {
    if (/\/customer-status/.test(url))
        return { state: "enabled", properties: {} };
    if (/\/configuration.json/.test(url)) return { style: {}, text: {} };
};

const fetch = (url) =>
    Promise.resolve({ json: () => Promise.resolve(getData(url)) });

exports.fetch = fetch;
