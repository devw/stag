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
        setting_id: "|--large-font-size|em",
        value: "3.3",
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
        value: "label-go-right",
    };

    kastorEvent = new CustomEvent("message", {
        detail: form,
    });

    globalThis.dispatchEvent(kastorEvent);
})();
