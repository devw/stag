(() => {
    const getEvent = (json) =>
        new CustomEvent("message", {
            detail: json,
        });

    const textEvent = {
        setting_id: "landing|loginRegister|",
        value: "Creazione di login",
    };

    const layout = {
        setting_id: "landing|layout|",
        value: "popup-full",
    };

    const style = {
        setting_id: "landing|--btn-bg-color|",
        value: "rgba(129, 183, 84, 1)",
    };

    const hasCarousel = {
        setting_id: "register|hasCarousel|",
        value: true,
    };

    const animation = {
        setting_id: "landing|--animation|",
        value: "slide-in",
    };

    const changeTheme = {
        setting_id: "|change-theme|",
        value: "respire",
    };

    const socialLogin = {
        setting_id: "landing|hasSocialLogin|",
        value: true,
    };

    const form = {
        data: {
            data: { setting_id: "landing|formStyle|", value: "label-go-down" },
        },
    };

    const carousel = {
        setting_id: "register|hasCarousel|",
        value: true,
    };

    globalThis.dispatchEvent(getEvent(form));
})();

(() => {
    const block = {
        setting_id: "register|hasMultiLine|",
        value: true,
    };

    globalThis.dispatchEvent(getEvent(block));
})();

(() => {
    const block = {
        setting_id: "register|hasMultiChoice|",
        value: true,
    };

    const kastorEvent = new CustomEvent("message", {
        detail: block,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// TESTING MULTI-CHOICE BLOCK
(() => {
    const metaChoices = {
        setting_id: "register|metaChoices|",
        value: [
            { key: "gender", value: "Mr." },
            { key: "gender", value: "Mrs." },
            { key: "gender", value: "Ms." },
            { key: "gender", value: "Miss." },
        ],
    };

    const kastorEvent = new CustomEvent("message", {
        detail: metaChoices,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// TESTING LIST-CHOICE BLOCK
(() => {
    let choiceList = {
        setting_id: "register|choiceList|",
        value: ["item_1", "item_2", "item_3", "item_4"],
    };

    let kastorEvent = new CustomEvent("message", {
        detail: choiceList,
    });

    globalThis.dispatchEvent(kastorEvent);

    const choiceMeta = {
        setting_id: "register|choiceMeta|",
        value: "gender",
    };

    kastorEvent = new CustomEvent("message", {
        detail: choiceMeta,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// Add a block
(() => {
    const hasFirstNameBlock = {
        data: {
            setting_id: "register|hasFirstNameBlock|",
            value: true,
        },
        target: "block:add",
    };

    const kastorEvent = new CustomEvent("message", {
        detail: hasFirstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// Remove a block
(() => {
    const hasFirstNameBlock = {
        data: {
            setting_id: "register|hasFirstNameBlock|",
            value: undefined,
        },
        target: "block:remove",
    };

    const kastorEvent = new CustomEvent("message", {
        detail: hasFirstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

(() => {
    const firstNameBlock = {
        setting_id: "register|yourFirstName|",
        value: "Votre Prénom",
    };

    const kastorEvent = new CustomEvent("message", {
        detail: firstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

(() => {
    const json = {
        setting_id: "register|yourLastName|",
        value: "Votre Nom",
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

(() => {
    const json = {
        setting_id: "register|yourPassword|",
        value: "Votre Mot de password",
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

(() => {
    const json = {
        data: {
            setting_id: "register|pswMinLengthErr|",
            value: "Your password is too short",
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

(() => {
    const json = {
        data: {
            data: JSON.parse(
                '{"page_id":"popup-de-login","section_type_id":"register||","section_id":"386801cf-4b7a-4d2a-8607-2616be3002bf","blocks":{"register|hasFirstName|":{"66ae96e1-1c92-4e6d-9bff-82a912ba1c1c":{"register|yourFirstName|":"Votre Prénom"}},"register|hasEmail|":{"054255cf-07e7-401d-afb6-6ab11bc7d702":{}},"register|hasLastName|":{"0e4dc077-ed0c-4d7a-9b60-b8a6ea6bbca6":{"register|yourLastName|":"Votre Nom"}},"register|hasPassword|":{"a560aef9-edd5-428e-9ee0-a7c84bdb59a7":{}}},"order":["054255cf-07e7-401d-afb6-6ab11bc7d702","0e4dc077-ed0c-4d7a-9b60-b8a6ea6bbca6","a560aef9-edd5-428e-9ee0-a7c84bdb59a7","66ae96e1-1c92-4e6d-9bff-82a912ba1c1c"]}'
            ),
            target: "block:reorder",
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

(() => {
    const json = {
        data: {
            data: { setting_id: "landing|formStyle|", value: "label-go-down" },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();
