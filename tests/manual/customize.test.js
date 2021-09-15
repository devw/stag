var _event = {
    action: 'trigger',
    target: 'setting:update',
    params: {
        value: 'fade-in-show',
        setting_id: 'register|--animation|',
        global_section_group_id: 'theme',
        global_section_id: 'theme',
    },
};
var detail = {};
var customizeEvent = new CustomEvent('message', { detail });
var el = document.body
    .querySelector('login-popup')
    .shadowRoot.querySelector('div');
detail.state = state;
detail.event = _event;
globalThis.dispatchEvent(customizeEvent);

(() => {
    el.style.setProperty('pointer-events', 'all');
    // el.style.setProperty('--large-font-size', '2em');
    // el.style.setProperty('--img-position', 'column');
    // el.style.setProperty('--form-width', '500px');
    // el.style.setProperty('--form-padding', '10px');
})();

// test the activate page with tag
detail = {
    state: {
        pages: {
            'popup-de-login': {
                order: [],
                sections: {
                    'landing||': {
                        'b997e30e-877b-4a7f-95ca-65bec3f13411': {
                            groups: {
                                'landing||': {
                                    'landing|loginRegister|':
                                        'Log in / Register',
                                    'landing|enterYourEmailToContinue|': ' ',
                                },
                                'form-group-landing-section': {
                                    'landing|yourEmail|': 'Write your email',
                                    'landing|validate|': 'Submit',
                                    'landing|hasSocialLogin|': 0,
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                    'register|section|': {
                        'ac357687-96da-432b-8648-8a19f31f14e9': {
                            groups: {
                                'register-section-header-group': {
                                    'register|createAccount|': 'Register',
                                    'register|fillInfoToCreateAccount|': ' ',
                                },
                                'register||': {
                                    'register|registerAccount|': 'Submit',
                                    'register|redirectAfterRegister|': '',
                                },
                            },
                            blocks: {
                                'register|inputBlocks|email': {
                                    'f974094f-f04f-4075-8427-642f397f50f9': {
                                        'register|name|': 'customer[email]',
                                        'register|message|':
                                            'This block can be used to sort the input fields present in the register form',
                                    },
                                },
                                'register|inputBlocks|password': {
                                    '40836f33-8d87-4e70-89ca-819adc56660e': {
                                        'register|name|': 'customer[password]',
                                        'register|error|': 'true',
                                        'register|message|':
                                            'This block can be used to sort the input fields present in the register form',
                                    },
                                },
                                'register|inputBlocks|firstName': {
                                    '48e9b1dc-3a88-47ac-968b-1e489a9286fd': {
                                        'register|placeholder|': 'First name',
                                        'register|name|':
                                            'customer[first_name]',
                                    },
                                },
                                'register|inputBlocks|lastName': {
                                    '4721a050-1c04-46ff-82f7-a95b250c84f6': {
                                        'register|placeholder|': 'Last name',
                                        'register|name|': 'customer[last_name]',
                                    },
                                },
                                'register|dateBlocks|hasBirth': {
                                    '45441f37-5978-4196-a15c-e9b4967789f8': {
                                        'register|placeholder|birth':
                                            'Write your birthdate',
                                        'register|pickerStyle|': 'calendar',
                                        'register|maxDate|': 1,
                                        'register|minDate|': 99,
                                        'register|error|':
                                            'Your birthdate should be between 0 and 99',
                                        'register|isTag|': 'hasTag',
                                        'register|tag|': 'birth:',
                                        'register|namespace|': '',
                                        'register|key|': '',
                                    },
                                },
                                'register|inputBlocks|telephone': {
                                    'f5c180c7-a708-46d0-b113-8e57c4f66b3e': {
                                        'register|placeholder|':
                                            'Your telephone',
                                        'register|name|': 'address[phone]',
                                    },
                                },
                                'register|choiceBlocks|newsletter': {
                                    '6ac5a1a0-51e8-428c-94b0-6b1abf1b06f6': {
                                        'register|placeholder|':
                                            'Subscribe to our newsletter!',
                                        'register|name|':
                                            'customer[accepts_marketing]',
                                        'register|hasMultiChoice|': 1,
                                    },
                                },
                                'register|dateBlocks|': {
                                    'c968f8d7-9523-409c-8eb3-f865fd8764ed': {
                                        'register|placeholder|':
                                            'Select a date',
                                        'register|pickerStyle|': 'no-calendar',
                                        'register|minDate|': 2015,
                                        'register|maxDate|': 2025,
                                        'register|error|':
                                            'This date is out of range',
                                        'register|isTag|': 'hasMetafield',
                                        'register|tag|': '',
                                        'register|namespace|': '',
                                        'register|key|': '',
                                    },
                                    'ac46db72-9b66-4054-b5f9-f15cbb18eaca': {
                                        'register|placeholder|':
                                            'Select a date',
                                        'register|pickerStyle|': 'no-calendar',
                                        'register|minDate|': 2015,
                                        'register|maxDate|': 2025,
                                        'register|error|':
                                            'This date is out of range',
                                        'register|isTag|': 'hasMetafield',
                                        'register|tag|': '',
                                        'register|namespace|': '',
                                        'register|key|': '',
                                    },
                                    'e9a94123-fe2b-4d7f-86ad-7ab109826889': {
                                        'register|placeholder|':
                                            'Select a date',
                                        'register|pickerStyle|': 'no-calendar',
                                        'register|minDate|': 2015,
                                        'register|maxDate|': 2025,
                                        'register|error|':
                                            'This date is out of range',
                                        'register|isTag|': 'hasMetafield',
                                        'register|tag|': '',
                                        'register|namespace|': '',
                                        'register|key|': '',
                                    },
                                },
                            },
                            blocks_order: [
                                '48e9b1dc-3a88-47ac-968b-1e489a9286fd',
                                '4721a050-1c04-46ff-82f7-a95b250c84f6',
                                '45441f37-5978-4196-a15c-e9b4967789f8',
                                'f974094f-f04f-4075-8427-642f397f50f9',
                                '40836f33-8d87-4e70-89ca-819adc56660e',
                                'f5c180c7-a708-46d0-b113-8e57c4f66b3e',
                                '6ac5a1a0-51e8-428c-94b0-6b1abf1b06f6',
                                'c968f8d7-9523-409c-8eb3-f865fd8764ed',
                                'ac46db72-9b66-4054-b5f9-f15cbb18eaca',
                                'e9a94123-fe2b-4d7f-86ad-7ab109826889',
                            ],
                        },
                    },
                    'signin||': {
                        '2143bbdb-8723-4082-82bc-ce386202a1fe': {
                            groups: {
                                'signin||': {
                                    'signin|yourPassword|':
                                        'Write your password',
                                    'signin|wrongPsw|':
                                        'Incorrect password. Please, try again!',
                                    'signin|signIn|': 'Submit',
                                    'signin|loginRedirect|': 'products',
                                    'signin|loginTitle|': 'Login ',
                                    'signin|enterEmailPswToConnect|': ' ',
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                    'activate||': {
                        '900377a9-6edc-4ce9-ba2d-85a0a2880b70': {
                            groups: {
                                'activate|activate-section-header-group|': {
                                    'activate|activateTitle|':
                                        'Activate no Tag',
                                    'activate|activateSubTitle|':
                                        'Please click on the SUBMIT button to activate your account.',
                                    'activate|activateBtn|': 'SUBMIT',
                                },
                            },
                            blocks: {
                                'activate|activateBlocks|tag': {
                                    '694bd974-227a-4d14-9c3d-a7aff960da05': {
                                        'activate|tag|': 'tag_name_1',
                                        'activate|activateTagTitle|':
                                            'Activate Tag 1',
                                        'activate|activateTagSubTitle|':
                                            'Fill in your email to activate your account.',
                                        'activate|activateTagBtn|':
                                            'Resend the email',
                                    },
                                    '39588239-4c4f-432a-b82e-b375cf77ea43': {
                                        'activate|tag|': 'tag_name_2',
                                        'activate|activateTagTitle|':
                                            'Activate Tag 2',
                                        'activate|activateTagSubTitle|':
                                            'Fill in your email to activate your account.',
                                        'activate|activateTagBtn|':
                                            'Resend the email',
                                    },
                                },
                            },
                            blocks_order: [
                                '694bd974-227a-4d14-9c3d-a7aff960da05',
                                '39588239-4c4f-432a-b82e-b375cf77ea43',
                            ],
                        },
                    },
                    'recovery||': {
                        '00017022-c2be-4153-8f55-1a7730c75d41': {
                            groups: {
                                'recovery|recovery-section-header-group|': {
                                    'recovery|recoveryTitle|':
                                        'Recover password',
                                    'recovery|recoverySubTitle|': ' ',
                                    'recovery|recoveryBtn|': 'Submit',
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                },
            },
        },
        global_sections: {
            styles: {
                groups: {
                    colors: {
                        '|--primary-text-color|': 'rgba(253,201,81,1)',
                        '|--secondary-text-color|': 'rgba(0,0,0,1)',
                        '|--ternary-text-color|': 'rgba(0,0,0,1)',
                    },
                    'font-size': {
                        'landing|--large-font-size|em': 2,
                        'register|--title-font-weight': 400,
                        'landing|--medium-text-size|em': 1.1,
                        '|--title-font-weight|': 'lighter',
                        '|--large-font-size|em': '2.4',
                        '|--medium-text-size|em': '1.2',
                    },
                    'font-family': {
                        'register|--title-font-family|':
                            'BeaufortCondensedMedium',
                        '|--font-family|': 'Comic Sans MS, cursive',
                    },
                },
                blocks: {},
            },
            form: {
                groups: {
                    Labels: {
                        '|--ternary-text-color|': 'rgba(14,11,11,1)',
                        '|--label-font-size|em': '1.1',
                        '|--label-font-weight|': '700',
                        '|formStyle|': 'label-go-down',
                    },
                    'form-input': {
                        '|--input-bg-color|': 'rgba(255,255,255, 1)',
                        '|--input-box-shadow|': 'rgba(255,255,255, 1)',
                        '|--input-padding|': '10px 0px 12px 0px ',
                        '|--input-line|': '1px solid black',
                        '|--input-line-direction|': 'Bottom',
                        '|--input-margin|em': 0.8,
                        '|--input-radius|px': '',
                        '|--border-color-focus|': 'rgba(0, 0, 0, 1)',
                        '|--input-font-size|em': '1.2',
                    },
                    'form-input-error': {
                        '|errorIcon|': 'label-none',
                        '|--error-color|': 'rgba(208, 26, 26, 1)',
                        '|--error-bg-color|': 'rgba(240, 207, 207, 1)',
                    },
                },
                blocks: {},
            },
            buttons: {
                groups: {
                    'font-style': {
                        '--btn-font-size|em': 1.5,
                        '|--btn-font-family|': 'None',
                        '|--btn-color|': 'rgba(34,34,34,1)',
                        '|--btn-bg-color|': 'rgba(253,201,81,1)',
                        '|--btn-border|': '0px solid #092dc5',
                        '|--btn-margin|': '0px 0px 0px 0px ',
                    },
                },
                blocks: {},
            },
            theme: {
                groups: {
                    'popup-container': {
                        '|--content-bg-color|': 'rgba(255,255,255,1)',
                        '|--content-padding|': '10px 0px 40px 0px ',
                        '|--container-border-radius|%': 0.5,
                        '|--form-width|px': '448',
                        '|--form-padding|': '40px 50px 0px 50px ',
                    },
                    theme: {
                        '|layout|': 'popup-drawer',
                        '|--content-vertical-alignment|': 'center',
                        '|--animation|': 'none',
                        '|--container-bg-image|':
                            'https://cdn.shopify.com/s/files/1/2598/9270/products/Packshotfriandiseschatvolaille_600x.jpg?v=159948757',
                        '|--bg-opacity-image|': 1,
                        '|--header-img|': '',
                        '|--img-max-width|px': 200,
                        '|--img-position|': 'column',
                    },
                },
                blocks: {},
            },
            'register|passwordPolicy|': {
                groups: {
                    theme: {
                        'register|hasPswMinLength|': '',
                        'register|pswMinLength|': 5,
                        'register|pswMinLengthErr|':
                            'The password must contain at least 5 characters',
                        'register|hasPswMaxLength|': '',
                        'register|pswMaxLength|': 32,
                        'register|pswMaxLengthErr|':
                            'The password must contain at most 5 characters',
                        'register|hasPswUppercase|': '',
                        'register|pswUppercaseErr|':
                            'The password must contain at least an uppercase character',
                        'register|hasPswNumber|': '',
                        'register|pswNumberErr|':
                            'The password must contain at least a number',
                        'register|hasPswSpecialCharacter|': '',
                        'register|pswSpecialCharacterErr|':
                            'The password must contain at least a special character',
                    },
                },
                blocks: {},
            },
        },
    },
    event: {
        action: 'trigger',
        target: 'setting:update',
        params: {
            block_id: '694bd974-227a-4d14-9c3d-a7aff960da05',
            block_type: 'activate|activateBlocks|tag',
            page_id: 'popup-de-login',
        },
    },
};

var customizeEvent = new CustomEvent('message', { detail });
globalThis.dispatchEvent(customizeEvent);
