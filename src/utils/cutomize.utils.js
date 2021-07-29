const isRegisterSection = (key) => /^register\|section/.test(key);

const addMissingBlock = ({ text }, name, placeholder, error) => {
    const block = text.inputBlocks.find((e) => e.name === name);
    if (!block || block.length === 0) {
        text.inputBlocks.push({
            placeholder: text[placeholder],
            error,
            name,
        });
    } else {
        block.placeholder = text[placeholder];
        block.error = error;
        console.log(block);
    }
};

const addBlockId = (e) => {
    const tmp = {};
    Object.keys(e[1]).forEach((k) => {
        tmp[k.split("|")[1]] = e[1][k];
    });
    tmp.id = e[0];

    return tmp;
};

const parseKeyValue = (key, obj) => {
    const [, id, unit] = key.split(/\|/);
    const value = obj + (unit || "");
    return { id: id, value: value };
};

module.exports.parseConfiguration = (jsonTree) => {
    const json = {
        style: {},
        text: {
            choiceBlocks: [],
            inputBlocks: [],
            dateBlocks: [],
            activateBlocks: [],
        },
    };
    (function traverse(obj, key) {
        if (isRegisterSection(key)) {
            const { blocks_order } = Object.values(obj)[0];
            json.text["blocks_order"] = blocks_order;
        }

        if (key === "blocks" && Object.keys(obj).length > 0) {
            const blocks = Object.entries(obj);
            blocks.forEach((e) => {
                const k = e[0].split("|")[1];
                json.text[k].push(...Object.entries(e[1]).map(addBlockId));
            });
        }

        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else {
            const { id, value } = parseKeyValue(key, obj);
            /--/.test(id) ? (json.style[id] = value) : (json.text[id] = obj);
        }
    })(jsonTree);

    addMissingBlock(json, "customer[email]", "yourEmail");
    addMissingBlock(json, "customer[password]", "yourPassword", true);

    return json;
};
