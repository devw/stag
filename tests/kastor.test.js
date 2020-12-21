(() => {
    let kastorEvent;

    const textEvent = {
        setting_id: "landing|loginRegister|",
        value: "Creazione di login",
    };

    const layout = {
        setting_id: "landing|layout|",
        value: "popup-floating",
    };

    const style = {
        setting_id: "register|--btn-bg-color|",
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

    kastorEvent = new CustomEvent("message", {
        detail: form,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

(() => {
    const block = {
        setting_id: "register|hasMultiLine|",
        value: true,
    };

    const kastorEvent = new CustomEvent("message", {
        detail: block,
    });

    globalThis.dispatchEvent(kastorEvent);
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

(() => {
    const metaChoices = {
        setting_id: "register|metaChoices|",
        value: [
            { key: "1_meta_key", value: "1_meta_value" },
            { key: "2_meta_key", value: "2_meta_value" },
        ],
    };

    const kastorEvent = new CustomEvent("message", {
        detail: metaChoices,
    });

    globalThis.dispatchEvent(kastorEvent);
})();
