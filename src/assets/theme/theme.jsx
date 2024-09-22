import { createTheme } from "@mui/material";

const theme = createTheme({
    // Palette (colors)
  palette: {
    primary: {
      main: '#4318FF', // Default Primary Color
    },
    secondary: {
      main: '#dc004e', // Default Secondary Color
    },
    error: {
      main: '#d32f2f', // Default Error Color
    },
    warning: {
      main: '#ffa726', // Default Warning Color
    },
    info: {
      main: '#0288d1', // Default Info Color
    },
    success: {
      main: '#2e7d32', // Default Success Color
    },
    background: {
      default: '#fafafa', // Default background color
      paper: '#fff', // Background color for paper elements
    },
    text: {
      primary: '#000', // Default primary text color
      secondary: '#757575', // Default secondary text color
      disabled: 'rgba(0, 0, 0, 0.38)', // Disabled text color
    },
    divider: 'rgba(0, 0, 0, 0.12)', // Divider color
  },

  // Typography
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Default font family
    fontSize: 14, // Default base font size
    h1: {
      fontSize: '2.5rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem', // Default body text size
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'uppercase', // Default button text transform
      fontWeight: 500,
    },
  },

  // Spacing (unit)
  spacing: 8, // Default spacing unit (8px)

  // Breakpoints (responsive design)
  breakpoints: {
    values: {
      xs: 0, // Extra small
      sm: 576, // Small
      md: 768, // Medium
      lg: 992, // Large
      xl: 1200, // Extra large
      xxl: 1440, // Extra Extra large
    },
  },

  // Shadows
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.2)',
    '0px 1px 5px rgba(0, 0, 0, 0.2)',
    '0px 1px 8px rgba(0, 0, 0, 0.2)',
    '0px 1px 10px rgba(0, 0, 0, 0.2)',
    // ...add more custom shadow definitions if needed
  ],

  // Shape (border radius)
  shape: {
    borderRadius: 8, // Default border radius
  },

  // Components
  components: {
    MuiBadge: {
      styleOverrides: {
        root: {
          // border: "10px solid #000",
          '& .MuiBadge-badge': {
            border: '3px solid #EAEBFF',  // Custom border color
            borderRadius: '50%',  // Makes the badge circular
            width: "25px",
            height: "25px",
            fontSize: "11px",
            top: "-6px",
            right: "-6px",
          },
        },
        colorPrimary: {
          backgroundColor: '#ff5722', // Custom color for primary badge
          color: '#fff',  // Custom text color
        },
        colorSecondary: {
          backgroundColor: '#252762', // Custom color for secondary badge
          color: '#fff',  // Custom text color
        },
        colorInfo: {
          backgroundColor: '#FF5B5B', // Custom color for secondary badge
          color: '#fff',  // Custom text color
        },
        dot: {
          backgroundColor: '#ff5722', // Custom color for badge with dot variant
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Custom border radius for buttons
          padding: '0.5rem 1rem',
          fontSize: "0.875rem",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          }
        },
        containedPrimary: {
          backgroundColor: '#4318FF',
          color: '#fff',
        },
        outlined: {
          borderColor: '#4318FF',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // Default AppBar color
          color: '#fff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Custom Card border radius
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px', // Default margin for text fields
        },
      },
    },
    MuiSelect: {
        styleOverrides: {
            root: {
                borderRadius: '8px',         // Add border radius
                border: "0.5px solid #89B0EB",
                backgroundColor: "#fff",
            },
            icon: {
            // Customize the dropdown icon
                color: '#272727',            // Change icon color
                right: '10px',               // Adjust position
            },
            outlined: {
                padding: "0.593rem 1rem",
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
                border: "0",
            },
            // '&:hover .MuiOutlinedInput-notchedOutline': {
            //   borderColor: '#ff5722',      // Border color on hover
            // },
            // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            //   borderColor: '#673ab7',      // Border color when focused
            //   borderWidth: '2px',          // Border width when focused
            // },
            // '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            //   borderColor: '#d32f2f',      // Border color when there's an error
            // },
          },
        },
      },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                color: '#272727',           // Label color
                fontWeight: 400,            // Font weight
                lineHeight: 0.875,
                '&.Mui-focused': {          // Styling when focused
                },
                '&.Mui-error': {            // Styling when there is an error
                    color: '#d32f2f',
                },
            },
            shrink: {
                backgroundColor: "#fff",
                paddingRight: "8px",
                paddingLeft: "3px",
                transform: 'translate(14px, -6px) scale(0.8)',
                color: "#89B0EB !important",
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
            // Customize each menu item
            fontSize: '16px',
            '&.Mui-selected': {
                backgroundColor: '#1976d2', // Selected item background
                color: '#fff',              // Selected item color
            },
            '&:hover': {
                backgroundColor: '#e3f2fd', // Hover background color
            },
            },
        },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: '#fff',
          // boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },

  // Z-index (for layering components)
  zIndex: {
    appBar: 1100, // Default z-index for AppBar
    drawer: 1200, // Default z-index for Drawer
  },

  // Transitions (animation easing)
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  // Overridable default props for components
  componentsProps: {
    MuiButton: {
      disableRipple: true, // Disable ripple effect for buttons by default
    },
    MuiTextField: {
      variant: 'outlined', // Set default variant for text fields
    },
    MuiPaper: {
      elevation: 3, // Default elevation for Paper components
    },
  },

  shadows: [
    'none', // elevation 0
    '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)', // elevation 1
    '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)', // elevation 2
    '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12)', // elevation 3
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)', // elevation 4
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12)', // elevation 5
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)', // elevation 6
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 2px 16px rgba(0, 0, 0, 0.12)', // elevation 7
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)', // elevation 8
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12)', // elevation 9
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.12)', // elevation 10
    // Add up to 24 (or more) depending on what elevations you need
  ],
});

export default theme;