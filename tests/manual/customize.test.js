var detail = {
    state: {
        pages: {
            'popup-de-login': {
                order: [],
                sections: {
                    'landing||': {
                        'f672a58c-aa43-46a9-9bbf-9026f150f1f8': {
                            groups: {
                                'landing||': {
                                    'landing|loginRegister|': 'HI THERE',
                                    'landing|enterYourEmailToContinue|': '',
                                },
                                'form-group-landing-section': {
                                    'landing|yourEmail|': 'Write your email',
                                    'landing|validate|': 'Valider',
                                    'landing|hasSocialLogin|': 0,
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                    'register|section|': {
                        'eae562ec-11a2-495f-be4c-509ad6b5b2f9': {
                            groups: {
                                'register-section-header-group': {
                                    'register|createAccount|':
                                        'Création de compte',
                                    'register|fillInfoToCreateAccount|': '',
                                },
                                'register||': {
                                    'register|registerAccount|':
                                        'Créer un compte',
                                    'register|redirectAfterRegister|': '',
                                },
                            },
                            blocks: {
                                'register|inputBlocks|email': {
                                    '89ed0e70-d646-4e0a-b817-1a60be104370': {
                                        'register|name|': 'customer[email]',
                                        'register|message|':
                                            'This block can be used to sort the input fields present in the register form',
                                    },
                                },
                                'register|inputBlocks|firstName': {
                                    '730511bf-4fa5-4a2e-8b0b-b41e83a37d41': {
                                        'register|placeholder|':
                                            'Your first name',
                                        'register|name|':
                                            'customer[first_name]',
                                    },
                                },
                            },
                            blocks_order: [
                                '730511bf-4fa5-4a2e-8b0b-b41e83a37d41',
                                '89ed0e70-d646-4e0a-b817-1a60be104370',
                            ],
                        },
                    },
                    'signin||': {
                        '27accd6e-afda-4c14-ad32-35a14c466035': {
                            groups: {
                                'signin||': {
                                    'signin|yourPassword|':
                                        'Write your password',
                                    'signin|wrongPsw|':
                                        'Incorrect password. Please, try again!',
                                    'signin|signIn|': 'Submit',
                                    'signin|loginRedirect|': 'products',
                                    'signin|loginTitle|': 'Login ',
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                    'activate||': {
                        '7bc7c547-ff00-4ec6-8dc4-36fa1ef3ee16': {
                            groups: {
                                'activate|activate-section-header-group|': {
                                    'activate|activateTitle|': 'Activate',
                                    'activate|activateSubTitle|':
                                        'Fill in your email to activate your account.',
                                    'activate|activateBtn|': 'Resend the email',
                                },
                            },
                            blocks: {},
                            blocks_order: [],
                        },
                    },
                    'recovery||': {
                        'eea82f4b-feb5-4a5a-8b98-11c988291cfe': {
                            groups: {
                                'recovery|recovery-section-header-group|': {
                                    'recovery|recoveryTitle|':
                                        'Recover password',
                                    'recovery|recoverySubTitle|':
                                        'Enter your email to receive a reset password link.',
                                    'recovery|recoveryBtn|': 'Recover',
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
                        '|--primary-text-color|': 'rgba(0,0,0,1)',
                        '|--secondary-text-color|': 'rgba(0,0,0,1)',
                    },
                    'font-size': {
                        'landing|--large-font-size|em': 2,
                        'register|--title-font-weight': 400,
                        'landing|--medium-text-size|em': 1.1,
                    },
                    'font-family': {
                        'register|--title-font-family|': 'None',
                        'register|--form-font-family|': 'None',
                    },
                },
                blocks: {},
            },
            form: {
                groups: {
                    Labels: {
                        '|--ternary-text-color|': 'rgba(0,0,0,1)',
                        '|--label-font-size|em': 1.5,
                        '|--label-font-weight|': 400,
                        '|formStyle|': 'label-fixed-top',
                    },
                    'form-input': {
                        'register|--input-bg-color|': 'rgba(255,255,255, 1)',
                        'register|--input-box-shadow|': 'rgba(255,255,255, 1)',
                        'register|--input-padding|': '10px 0px 10px 5px ',
                        'register|--input-line|': '1px solid black',
                        'register|--input-line-direction|': 'All',
                        'register|--input-margin|em': '0.8',
                        'register|--input-radius|px': '0',
                        'register|--border-color-focus|': 'rgba(0, 0, 0, 1)',
                    },
                    'form-input-error': {
                        'register|errorIcon|': 'label-none',
                        'register|--error-color|': 'rgba(208, 26, 26, 1)',
                        'register|--error-bg-color|': 'rgba(240, 207, 207, 1)',
                    },
                },
                blocks: {},
            },
            buttons: {
                groups: {
                    'font-style': {
                        '|--btn-font-size|em': '1.4',
                        '|--btn-font-family|': 'BeaufortCondensedMedium',
                        '|--btn-border|': '1px solid #000000',
                        '|--btn-color|': 'rgba(12,5,5,1)',
                        '|--btn-bg-color|': 'rgba(255,255,255,1)',
                        '|--btn-padding|px': '5',
                    },
                },
                blocks: {},
            },
            theme: {
                groups: {
                    'popup-container': {
                        '|--content-bg-color|': 'rgba(255,255,255,1)',
                        'landing|--partial-width|px': '265',
                        'register|--content-padding|': '10px 0px 10px 5px ',
                        '|--container-border-radius|%': '0',
                        'landing|--content-width|px': '375',
                        'landing|--content-padding-bottom|px': '0',
                        'landing|--content-padding-top|px': '0',
                        '|--partial-width|px': '320',
                        '|--content-width|px': '465',
                        '|--content-padding-top|px': '17.5',
                        '|--content-padding-bottom|px': '52.5',
                    },
                    theme: {
                        'register|layout|': 'popup-drawer',
                        'register|--content-vertical-alignment|': 'center',
                        'register|--animation|': 'slide-from-right',
                        'register|--container-bg-image|':
                            'https://cdn.shopify.com/s/files/1/2598/9270/products/Packshotfriandiseschatvolaille_600x.jpg?v=159948757',
                        'register|--content-padding|': '10 0 10 5',
                        'register|--bg-opacity-image|': 1,
                        'register|--header-img|': '',
                        'register|--img-max-width|px': 200,
                        'register|--img-position|': 'column',
                        'register|--label-font-weight': 400,
                        '|layout|': 'popup-centered',
                        '|--header-img|': {
                            statusCode: 200,
                            url: 'https://customize-uploaded-files.s3.amazonaws.com/alfred-devstrore-antonio/14c6be6e-90cf-4605-900c-5ac2dfd4afed.png?AWSAccessKeyId=ASIA443P2P5PCCSMYZWB&Expires=1630513653&Signature=%2Bm0hwZK%2BTGnrTO9E6FJZe%2Bz1oXw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIExMnIrs3cVjQUvVA0WWkLnRUmIMsiV9tcBopWnj60VpAiAu%2BrYfdLCH6YA6B8QapVGlTTFCdLXUicocbY1kv895YiqiAgjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDg4NjYwODM5NjEyNiIMM4LE3wzEp6Dve7FHKvYBi7wFPwmRd1AYpsK2C7v066EbXX8TmWJg%2BB%2BuKjfS5x%2BROIWThP0Lb8EAm%2FRDg90xW7sZUSD%2BxWkzDV1PxlFw%2BpP3RmQyn4An62JM%2Fazl%2FTJJuJTnOqkqU5qGOoWg5i9SNxwNFAITs6RA2nYxtMEGtH1eeH%2F4GyMrCHZSnN9fMu6bg6d5MOvjB3nInqpJy4OHpXDIM7TvbUERxd5C%2FTif2M2wKlEAIWhZyk7ooyhwcnExC8W1M6Gf%2FEt2em%2F8%2BPDC0I540IKWv2twO%2B2UjH9UQaMGqZn1oJZ54C18letZmyEFYix%2BoPV8KIo1K3Lj%2BfKEaFCxO7sVMO%2FMvokGOpsBmDHMkfOM%2B3WI762fRno%2FSR%2FJdmULKqRjVXkO%2Bl0J8ZHWXTIUZ6QGwlOKUdRd15JWNal1h%2F5PYNmiju1L%2FHQ0N5YfO9A3l1ifXRuJ1k5nsSHMsX1nnzr8WnaSQ4KlCOpS6W93A%2Bf%2BZKiLwJYe1bZlsl0PvwmvxRD6QvjRuNYZ1ThqQREuWNLqslZ2YYrUhhPPTX6NEWCHmrQe9Ok%3D',
                        },
                        '|--img-max-width|px': '180',
                        '|--animation|': 'fade-in-show',
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
                            'The password must contain at least ? characters',
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
            value: 'fade-in-show',
            setting_id: '|--animation|',
            global_section_group_id: 'theme',
            global_section_id: 'theme',
        },
    },
};

var customizeEvent = new CustomEvent('message', { detail });
globalThis.dispatchEvent(customizeEvent);
