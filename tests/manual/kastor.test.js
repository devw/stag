const kastor = (setting_id, value, block_type_id, target, block_id) => {
    // param: setting_id, value, block_type_id, (target = null), block_id
};
let json, block_id;

// adding birthDate
json = {
    target: "block:add",
    block_id: "8b9c1691-69fc-45fb-939f-14b4ccb47707",
    block_type_id: "register|dateBlocks|hasBirth",
    block_settings: {
        "register|dateMax|": 90,
        "register|dateMin|": 0,
        "register|error|": "Your bithdate should be between 0 and 99",
        "register|key|": "",
        "register|namespace|": "",
        "register|pickerStyle|": "no-calendar",
        "register|placeholder|bith": "Write your birthdate",
        "register|tagVsMeta|": "hasMetafield",
    },
};
kastor(json);

// adding a new block to the end
json = {
    block_id: "ecc4793c-edb3-497e-8590-2e82affadefa",
    block_type_id: "register|inputBlocks|firstName",
    block_settings: {
        "register|name|": "customer[first_name]",
        "register|placeholder|": "Your first name",
    },
    target: "block:add",
};

//birthDate TODO you should display the error
json = {
    target: "setting:update",
    block_id: "e448ed8b-fb61-4df0-bfea-534ebe0067e4",
    block_type_id: "register|dateBlocks|hasBirth",
    setting_id: "register|error|",
    value: "Your bithdate should be between 0 and 99!!",
};
//birthDate TODO you should fix the age as a number
json = {
    target: "setting:update",
    block_id: "e448ed8b-fb61-4df0-bfea-534ebe0067e4",
    block_type_id: "register|dateBlocks|hasBirth",
    setting_id: "register|dateMin|",
    value: "12",
};

json = {
    setting_id: "register||",
};
kastor(json);

json = {
    target: "block:reorder",
    order: [
        "18471aa8-c71c-4335-899a-d67089f78ecf",
        "491a7436-ff0b-40f4-8822-73005cea6aed",
        "432fc97b-00f3-41a3-80c4-9fd5f8f60ad3",
        "36bb79db-a978-4fe9-b243-df7e372b037b",
        "c944d5ee-05bf-4272-beee-20e6b61a9f32",
    ],
};
kastor(json);

json = {
    target: "setting:update",
    block_id: "432fc97b-00f3-41a3-80c4-9fd5f8f60ad3",
    block_type_id: "register|dateBlocks|",
    setting_id: "register|dateMin|",
    value: "201",
};
kastor(json);
/***********
 * Adding a choice block
 */
block_id = "6db30215-d61c-4447-826b-cc024ea9e84a";
// adding the choice list block
json = {
    block_id,
    block_type_id: "register|choiceBlocks|block",
    target: "block:add",
    block_settings: {
        "register|isTag|": "hasMetafield",
    },
};
kastor(json);

json = {
    block_id,
    block_type_id: "register|choiceBlocks|block",
    setting_id: "register|choiceList|",
    value: ["Mrs."],
    target: "setting:update",
};
kastor(json);

/***********
 * Adding inputBlocks
 */
// telephone input block
block_id = "027d5f1d-f5d5-47dd-a9ee-403e5a73f7e9";
json = {
    target: "block:add",
    block_id,
    block_type_id: "register|inputBlocks|telephone",
    block_settings: {
        "register|name|": "address[phone]",
        "register|placeholder|:": "Inserisci il tuo numero",
    },
};
kastor(json);

// updating the choice list block
kastor(
    "register|choiceList|",
    ["o1", "o2"],
    "register|hasChoice|",
    "setting:update",
    id
);
kastor(
    "register|hasMultiLine|",
    true,
    "register|hasChoice|",
    "setting:update",
    id
);

//remove a block -> YES
kastor(undefined, undefined, "register|hasFirstName|", "block:remove");

//TODO remove choice block
block_id = "ef187c8e-cd76-4c60-a8ea-a1925723a57f";
kastor(undefined, undefined, "register|hasChoice|", "block:remove", block_id);

kastor({ setting_id: "register||" });
kastor("landing|hasSocialLogin|", true);
kastor("landing|loginRegister|", "Creation login");
kastor("signin|wrongPsw|", "Incorrect password. Please, try again! ");
kastor("landing|layout|", "popup-full");
kastor("landing|--btn-bg-color|", "rgba(129, 183, 84, 1)");
kastor("landing|--animation|", "slide-from-right");
kastor("landing|formStyle|", "label-go-down");
const arr = [...Array(99).keys()].map((e) => `item_${e}`);
kastor("register|choiceList|", arr, "register|hasChoice|", "setting:update");
kastor("register|hasMultiLine|", true);
kastor("register|--img-position|", "row");
kastor("register|--img-position|", "row-reverse");

// adding an input field
block_id = "3d0d01d9-5359-42d9-83e3-f555191922a6";
kastor(undefined, undefined, "register|inputBlocks|", "block:add", block_id);
kastor(
    "register|placeholder|",
    "Votre Nomaas",
    "register|inputBlocks|",
    "setting:update",
    id
);

kastor(undefined, undefined, "register|inputBlocks|", "block:remove", id);

kastor({
    target: "block:reorder",
    order: [
        "b29ba912-60e2-47d1-aace-7dbe3a1877a4",
        "4901918c-aadc-45fe-8996-32d27ac72436",
    ],
});

json = {
    block_id: "910facc5-6891-4924-9c1f-4f0766b2a993",
    setting_id: "register|error|",
    value: "Your age should be between 0 and 99.,m",
};
kastor(json);

// adding a block
json = {
    block_id: "9facc5-6891-4924-9c1f-4f0766b2a993",
    block_type_id: "register|inputBlocks|asdsa",
    taget: "block:add",
};
kastor(json);

json = {
    target: "block:add",
    block_id: "f23bc6d2-2df9-407f-8846-724099cc85a2",
    block_type_id: "register|hasChoice|",
    section_type_id: "register|section|",
};

// TODO you need to fix it in kastor side!
json = {
    block_type_id: "register|dateBlocks|",
    block_id: "7casd74-c456-4cb5-9035-b66912f4c8f9",
    target: "block:add",
    block_settings: {
        "register|dateMax|": 2025,
        "register|dateMin|": 2015,
        "register|isTag|": "hasMetafield",
        "register|key|": "",
        "register|namespace|": "",
        "register|pickerStyle|": "calendar",
        "register|placeholder|": "Select a date",
        "register|tag|": "",
    },
};
kastor(json);

json = {
    value: "fa-bug",
    setting_id: "register|errorIcon|",
    target: "setting:update",
};
kastor(json);

json = {
    target: "setting:update",
    value: "saddsadass",
    block_id: "44dfad96-ad46-41cf-b510-9990cb50d672",
    setting_id: "register|error|",
};
kastor(json);

json = {
    target: "metamask-inpage",
    method: "metamask_chainChanged",
    name: "metamask-provider",
};
kastor(json);

json = {
    setting_id: "register|pickerStyle|",
    value: "calendar",
    block_id: "b7133ced-91c7-47aa-855b-b9f596404e59",
    block_type_id: "register|dateBlocks|",
    section_type_id: "register|section|",
    target: "setting:update",
};
kastor(json);

// adding phoneBlock

// adding a emailBlock
json = {
    block_id: "eb8cc3f3-d795-4c6d-8a4b-3162bb457896",
    block_type_id: "register|emailBlock|",
    block_settings: {
        "register|message|":
            "This block can be used to sort the input fields present in the register form",
        "register|name|": "customer[email]",
    },
    target: "block:add",
    state: {
        block_id: "9c424af4-361b-4fb2-9b92-59c31b8cf387",
        name: "customer[email]",
    },
};
kastor(json);

// add a newsletter

json = {
    target: "block:add",
    block_id: "ww9d004f-f9b6-426d-8d45-d6f2aa351654",
    block_type_id: "register|choiceBlocks|block",

    block_settings: {
        "register|placeholder|":
            "Subscribe to our newslasdasd  asdsdadasd asdsadas asdasdsa asdasdsa sadasda asdads",
        "register|name": "customer[accepts_marketing]",
        "register|hasMultiChoice|": 1,
    },
};
kastor(json);

json = {
    block_id: "e29d004f-f9b6-426d-8d45-d6f2aa351654",
    block_type_id: "register|choiceBlocks|block",
    setting_id: "register|choiceList|",
    value: ["Mrs."],
    target: "setting:update",
};
kastor(json);

// remove a newsletter
json = {
    block_id: "e29d004f-f9b6-426d-8d45-d6f2aa351654",
    block_type_id: "register|hasNewsletter|",
    section_type_id: "register|section|",
    target: "block:remove",
};
