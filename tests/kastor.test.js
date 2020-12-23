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
        setting_id: "landing|formStyle|",
        value: "label-go-down",
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

(() => {
    const hasFirstNameBlock = {
        setting_id: "register|hasFirstNameBlock|",
        value: true,
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
        setting_id: "register|yourTelephone|",
        value: "Votre telephone",
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();
