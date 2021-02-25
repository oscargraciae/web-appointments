"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
// import { Fonts } from '../config/theme.fonts';
// const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` }
// const breakpoints = ['40em', '52em', '64em']
var theme = react_1.extendTheme(__assign(__assign({}, react_1.theme), { styles: {
        global: {
            body: {
                bg: "#FFFFFF",
                // color: "#333333",
                color: '#020621',
            },
            p: {
                fontWeight: '600',
            }
        },
    }, colors: __assign(__assign({}, react_1.theme.colors), { black: '#16161D', primary: '#25CB67', _primary: '#05AF3C', secondary: '#020621', _secondary: '#161e2c', accent: '#3722d3', error: '#B00020', 
        // background: '#F6F7F9',
        background: '#FFFFFF', surface: '#FFFFFF', 
        // borders: 'rgb(246, 246, 248)',
        borders: '#d9e3eb', primaryLight: '#E9F9EF', 
        // subtext: 'rgb(151, 156, 166)',
        subtext: '#5c6b85' }), 
    // fonts,
    // breakpoints,
    components: {
        Divider: {
            baseStyle: {
                borderColor: '#d9e3eb'
            }
        },
        Link: {
            variants: {
                "primary": {
                    fontWeight: '600',
                    _hover: {
                        textDecoration: 'none',
                        color: 'primary'
                    },
                },
                "primary-btn": {
                    fontWeight: '600',
                    borderWidth: 1,
                    borderColor: 'primary',
                    color: 'primary',
                    py: 2,
                    px: 5,
                    borderRadius: 3,
                    _hover: {
                        textDecoration: 'none',
                        color: 'primary'
                    },
                },
                "primary-solid": {
                    bg: "primary",
                    borderColor: "#05AF3C",
                    color: '#FFF',
                    fontWeight: '600',
                    borderWidth: 1,
                    py: 3,
                    px: 6,
                    borderRadius: 3,
                    _hover: {
                        bg: "_primary",
                        _disabled: {
                            bg: 'gray.500',
                        }
                    },
                },
            },
        },
        Button: {
            variants: {
                "primary": {
                    bg: "primary",
                    borderColor: "#05AF3C",
                    color: '#FFF',
                    _hover: {
                        bg: "_primary",
                        _disabled: {
                            bg: 'gray.500',
                        }
                    },
                },
                "primary-outline": {
                    bg: "transparent",
                    borderColor: "primary",
                    borderWidth: 1,
                    color: 'primary',
                    _hover: {
                        bg: "_primary",
                        color: '#FFFFFF',
                    },
                },
                "accent-outline": {
                    bg: "transparent",
                    borderColor: "accent",
                    borderWidth: 1,
                    color: 'accent',
                    _hover: {
                        bg: "accent",
                        color: '#FFFFFF',
                    },
                },
                "secondary": {
                    bg: "secondary",
                    borderColor: "#05AF3C",
                    color: '#FFF',
                    _hover: {
                        bg: "_secondary",
                    },
                },
            },
        },
        Input: {
            baseStyle: {
                field: {
                    borderColor: '',
                    _focus: {
                        borderColor: '_primary',
                        borderWidth: 1,
                        outline: 0,
                        boxShadow: 'none',
                    },
                    boxShadow: 'none',
                },
            },
            variants: {
                flushed: function () { return ({
                    field: {
                        _focus: {
                            borderWidth: 0,
                            outline: 0,
                            // borderColor: 'tomato'
                            boxShadow: '0px 1px 0px 0px #25CB67',
                        },
                        _hover: {}
                    },
                }); },
                outline: function () { return ({
                    borderColor: 'rgb(226, 232, 240)',
                    field: {
                        borderColor: 'rgb(226, 232, 240) !important',
                        _focus: {
                            borderColor: '_primary',
                            borderWidth: 1,
                            outline: 0,
                            boxShadow: 'none',
                        },
                        _hover: {
                            borderColor: '_primary',
                            borderWidth: 1,
                        }
                    },
                }); },
                "flushed-app": {
                    field: {
                        boxShadow: '0px 1px 0px 0px #25CB67',
                        _focus: {
                            borderWidth: 0,
                            outline: 0,
                            // borderColor: 'tomato'
                            boxShadow: '0px 1px 0px 0px #25CB67',
                        },
                        _hover: {
                            boxShadow: '0px 1px 0px 0px #25CB67',
                        }
                    },
                },
                "app": {
                    field: {
                        _focus: {
                            borderColor: '_primary',
                            borderWidth: 1,
                            outline: 0,
                        },
                    },
                },
            },
        },
        NumberInput: {
            variants: {
                outline: function () { return ({
                    borderColor: 'rgb(226, 232, 240)',
                    field: {
                        borderColor: 'rgb(226, 232, 240) !important',
                        _focus: {
                            borderColor: '_primary',
                            borderWidth: 1,
                            outline: 0,
                            boxShadow: 'none',
                        },
                        _hover: {
                            borderColor: '_primary',
                            borderWidth: 1,
                        }
                    },
                }); },
            },
        },
        Textarea: {
            baseStyle: {
                field: {
                    _focus: {
                        borderColor: '_primary',
                        borderWidth: 1,
                        outline: 0,
                        boxShadow: 'none',
                    },
                    boxShadow: 'none',
                },
            },
            variants: {
                flushed: function () { return ({
                    field: {
                        _focus: {
                            borderWidth: 0,
                            outline: 0,
                            // borderColor: 'tomato'
                            boxShadow: '0px 1px 0px 0px #25CB67',
                        },
                        _hover: {}
                    },
                }); },
                outline: function () { return ({
                    field: {
                        _focus: {
                            borderColor: '_primary',
                            borderWidth: 1,
                            outline: 0,
                            boxShadow: 'none',
                        },
                        _hover: {
                            borderColor: '_primary',
                            borderWidth: 1,
                        }
                    },
                }); },
                "app": {
                    borderColor: '#DDD',
                    borderWidth: 1,
                    field: {
                        _focus: {
                            borderColor: '_primary',
                            borderWidth: 1,
                            outline: 0,
                        },
                    },
                },
            },
        },
        Menu: {
            baseStyle: {
                list: {
                    borderColor: 'borders'
                }
            }
        }
    } }));
exports.default = theme;
