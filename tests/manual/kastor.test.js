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
                value: "The password must contain at least 6 charactersas",
                global_section_id: "register|passwordPolicy|",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// show error icon
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|errorIcon|",
                value: "fa-bug",
            },
        },
    };

    const event = new CustomEvent("message", {
        detail: json,
    });

    globalThis.dispatchEvent(event);
})();

// show error color
(() => {
    const json = {
        data: {
            data: {
                setting_id: "register|--error-bg-color|",
                value: "rgba(100,75,75,1)",
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

// reorder fields
(() => {
    const json = {
        data: {
            data: {
                blocks: {
                    "register|hasFirstName|": {
                        "66ae96e1-1c92-4e6d-9bff-82a912ba1c1c": {
                            "register|yourFirstName|": "Votre Prénom",
                        },
                    },
                    "register|hasEmail|": {
                        "054255cf-07e7-401d-afb6-6ab11bc7d702": {},
                    },
                    "register|hasLastName|": {},
                    "register|hasPassword|": {
                        "a560aef9-edd5-428e-9ee0-a7c84bdb59a7": {},
                    },
                },
                order: [
                    "a560aef9-edd5-428e-9ee0-a7c84bdb59a7",
                    "66ae96e1-1c92-4e6d-9bff-82a912ba1c1c",
                    "054255cf-07e7-401d-afb6-6ab11bc7d702",
                    "0e4dc077-ed0c-4d7a-9b60-b8a6ea6bbca6",
                ],
            },
            target: "block:reorder",
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
            data: { setting_id: "register|formStyle|", value: "label-go-up" },
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

// Birthdate
(() => {
    json = {
        data: {
            data: {
                block_type_id: "register|hasBirth|",
                block_settings: {
                    "register|birthPlaceholder|": "Your date of birth",
                    "register|isBirthTag|": "hasTag",
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

// TESTING TAG
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|choiceList|",
                value: ["item_1", "item_2", "item_3", "item_4"],
            },
            target: "setting:update",
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();
// Remove choice

// Date block
(() => {
    json = {
        data: {
            data: {
                block_settings: {
                    "register|datePlaceholder|": "Your Date",
                },
                block_type_id: "register|hasDate|",
                value: undefined,
            },
            target: "block:add",
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();

// TESTING METAFIELD
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|isDateTag|",
                value: "hasMetafield",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);
})();

// Date block
(() => {
    json = {
        data: {
            data: {
                block_settings: {
                    "register|birthPlaceholder|": "Your Date birthasds",
                },
                block_type_id: "register|hasBirth|",
                value: undefined,
            },
            target: "block:add",
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();

// TESTING METAFIELD
(() => {
    json = {
        data: {
            data: {
                setting_id: "register|isBirthTag|",
                value: "hasTag",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);
})();

// TESTING METAFIELD
(() => {
    json = {
        data: {
            data: {
                setting_id: "signin|wrongPsw|",
                value: "Incorrect password. Please, try again! ",
            },
        },
    };
    kastorEvent = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(kastorEvent);
})();

(() => {
    json = {
        data: {
            data: {
                setting_id: "dd0d42f8-55ff-46c9-8137-3d9c860d184e",
                block_type_id: "register|hasChoice|",
                value: undefined,
            },
            target: "block:remove",
        },
    };
    event = new CustomEvent("message", {
        detail: json,
    });
    globalThis.dispatchEvent(event);
})();
const kastor = () => {};
kastor("register||");
kastor("landing|hasSocialLogin|", true);
kastor("landing|loginRegister|", "Creation login");
kastor("signin|wrongPsw|", "Incorrect password. Please, try again! ");
kastor("landing|layout|", "popup-full");
kastor("landing|--btn-bg-color|", "rgba(129, 183, 84, 1)");
kastor("landing|--animation|", "slide-from-right");
kastor("landing|formStyle|", "label-go-down");
