(() => {
    let kastorEvent;

    const textEvent = {
        setting_id: "landing:loginRegister:",
        value: "Creazione di login",
    };

    const layoutEvent = {
        setting_id: "landing:layout:",
        value: "popup-floating",
    };

    const styleEvent = {
        setting_id: ":--large-font-size:em",
        value: "3.3",
    };

    const hasCarousel = {
        setting_id: "register:hasCarousel:",
        value: true,
    };

    kastorEvent = new CustomEvent("message", {
        detail: hasCarousel,
    });

    globalThis.dispatchEvent(kastorEvent);
})();
