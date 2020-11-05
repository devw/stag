const $ = document.querySelector.bind(document);

const popupActions = () => {
    $(".account-popup__close-popup")?.addEventListener("click", (e) => {
        $("[name='account-popup'").style.display = "none";
    });
};

module.exports = {
    popupActions,
};
