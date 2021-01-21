(() => {
    const getEvent = (json) =>
        new CustomEvent("message", {
            detail: json,
        });

    const textEvent = {
        setting_id: "landing|loginRegister|",
        value: "Creazfione di login",
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
    const getEvent = (json) =>
        new CustomEvent("message", {
            detail: json,
        });

    const block = {
        data: {
            data: {
                setting_id: "register|hasMultiLine|",
                value: true,
            },
        },
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

// TESTING METAFIELD
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|isChoiceTag|",
                value: "hasMetafield",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);

    json1 = {
        data: {
            data: {
                setting_id: "register|choiceNamespace|",
                value: "choice-namespace",
            },
        },
    };
    event1 = new CustomEvent("message", {
        detail: json1,
    });
    globalThis.dispatchEvent(event1);

    json2 = {
        data: {
            data: {
                setting_id: "register|choiceKey|",
                value: "choice-key",
            },
        },
    };

    event2 = new CustomEvent("message", {
        detail: json2,
    });

    globalThis.dispatchEvent(event2);
})();

// TESTING TAG
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|isChoiceTag|",
                value: "hasTag",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);

    json = {
        data: {
            data: {
                block_type_id: "register|hasChoice|",
                setting_id: "register|choiceList|",
                value: ["item_1", "item_2", "item_3", "item_4"],
            },
            target: "setting:update",
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);

    json = {
        data: {
            data: {
                setting_id: "register|choiceTag|",
                value: "gender",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    setTimeout(() => {
        globalThis.dispatchEvent(kastorEvent);
    }, 1000);
})();

// Add a block
(() => {
    const hasFirstNameBlock = {
        data: {
            data: {
                block_settings: {
                    "register|yourFirstName|": "Votre Prénome...",
                },
                block_type_id: "register|hasFirstName|",
                value: undefined,
            },
            target: "block:add",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: hasFirstNameBlock,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// Add a block - Newsletter
(() => {
    const json = {
        data: {
            data: {
                block_settings: {
                    "register|subscribeNewsletter|":
                        "Subscribe to our newsletter",
                },
                block_type_id: "register|hasNewsletter|",
                value: undefined,
            },
            target: "block:add",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

//Remove block
(() => {
    const json = {
        data: {
            data: {
                block_type_id: "register|hasLastName|",
                value: undefined,
            },
            target: "block:remove",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

// change placeholder
(() => {
    const firstNameBlock = {
        data: {
            data: {
                setting_id: "register|yourFirstName|",
                value: "Votre Prénom",
            },
        },
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

// show error in register form
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|pswMinLengthErr|",
                value: "Your password is too short",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// adding background image
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|--container-bg-image|",
                value:
                    "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// adding fomr image
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|--form-header-image|",
                value:
                    "https://www.imedias.pro/wp-content/themes/bootstrap-basic4-child/images/cours/images_web/tux_png_24.png",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// reorder fields
(() => {
    const json = {
        data: {
            target: "block:reorder",
            data: {
                page_id: "popup-de-login",
                section_type_id: "register|section|",
                section_id: "a0458c8f-1b4b-4a5c-ac03-843d6ee9c20e",
                blocks: {
                    "register|hasBirth|": {
                        "c10ff336-7690-4619-85fb-fe25f0f033da": {
                            "register|birthPlaceholder|": "Your date of birth",
                        },
                    },
                    "register|hasPassword|": {
                        "f34e332e-03e1-4669-98a0-86728b9b4e4a": {},
                    },
                    "register|hasTelephone|": {},
                    "register|hasChoice|": {
                        "bfda6265-66eb-4bfc-b373-1b3d8507da52": {
                            "register|choiceList|": ["Mr.", "Mrs.", "Miss"],
                            "register|hasMultiChoice|": 0,
                            "register|hasMultiLine|": 0,
                        },
                    },
                    "register|hasEmail|": {
                        "f6a834fa-6d59-48d7-93e4-5f2d9426aaac": {},
                    },
                },
                order: [
                    "f6a834fa-6d59-48d7-93e4-5f2d9426aaac",
                    "c10ff336-7690-4619-85fb-fe25f0f033da",
                    "8c570af9-282b-4169-aea1-c17d1e30be0b",
                    "f34e332e-03e1-4669-98a0-86728b9b4e4a",
                    "bfda6265-66eb-4bfc-b373-1b3d8507da52",
                ],
            },
        },
    };
    const event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();

// register - label style
(() => {
    const json = {
        data: {
            data: { setting_id: "register|formStyle|", value: "label-go-down" },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// landing
(() => {
    const json = {
        data: {
            data: { setting_id: "landing||", value: "" },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// change fontSize
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|--large-font-size|em",
                value: "4",
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// set animation
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|--animation|",
                value: "slide-from-right",
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// social login
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|hasSocialLogin|",
                value: true,
            },
        },
        target: null,
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();
// Birthdate
(() => {
    json = {
        data: {
            data: {
                block_type_id: "register|hasBirth|",
                block_settings: {
                    "register|birthPlaceholder|": "Your date of birth",
                    "register|isBirthTag|": "notHasTag",
                    "register|birthTag|": "",
                    "register|birthNamespace|": "",
                    "register|birthKey|": "",
                },
            },
            target: "block:add",
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);

    json = {
        data: {
            data: {
                setting_id: "register|birthNamespace|",
                value: "birth-namespace",
            },
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);

    json = {
        data: {
            data: {
                setting_id: "register|birthKey|",
                value: "birth-key",
            },
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();

//Activate block
(() => {
    const json = {
        data: {
            data: {
                block_type_id: "activate||",
                value: undefined,
            },
            target: "",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();

//test popup full
(() => {
    const json = {
        data: {
            data: {
                setting_id: "landing|layout|",
                value: "popup-full",
            },
            target: "",
        },
    };

    const kastorEvent = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(kastorEvent);
})();
