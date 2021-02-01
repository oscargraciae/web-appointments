
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` }

// const breakpoints = ['40em', '52em', '64em']

const theme = extendTheme({
  ...chakraTheme,
  styles: {
    global: {
      body: {
        bg: "#F6F7F9",
        // color: "#333333",
        color: '#020621',
      },
    },
  },
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    primary: '#25CB67',  // Primary
    _primary: '#05AF3C', // Priamry variant 
    secondary: '#020621', // Secondanry
    _secondary: '#161e2c', // Secondanry variant
    error: '#B00020',
    background: '#F6F7F9',
    surface: '#FFFFFF',
    // borders: 'rgb(246, 246, 248)',
    borders: '#d9e3eb',
    primaryLight: '#E9F9EF',
    // subtext: 'rgb(151, 156, 166)',
    subtext: '#5c6b85',
  },
  fonts,
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
        flushed: () => ({
          field: {
            _focus: {
              borderWidth: 0,
              outline: 0,
              // borderColor: 'tomato'
              boxShadow: '0px 1px 0px 0px #25CB67',
              
            },
            _hover: {}
          },
        }),
        outline: () => ({
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
        }),
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
        outline: () => ({
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
        }),
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
        flushed: () => ({
          field: {
            _focus: {
              borderWidth: 0,
              outline: 0,
              // borderColor: 'tomato'
              boxShadow: '0px 1px 0px 0px #25CB67',
              
            },
            _hover: {}
          },
        }),
        outline: () => ({
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
        }),
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
  }
})

export default theme