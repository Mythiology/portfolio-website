'use client';

import { ReactNode } from 'react';
import { MediaQueryProvider } from '@providers/MediaQueryProvider';
import { createTheme, ThemeProvider } from '@mui/material';

export const customMuiTheme = {
  palette: {
    text: {
      primary: '#949494',
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingBottom: 8,
          paddingTop: 0,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: '#9c9c9c',
          textTransform: 'none',
          fontFamily: '"Poppins", sans-serif',
          '&.Mui-selected': {
            color: '#FFA5A5',
          },
          '&:hover': {
            backgroundColor: '#2d2d2d',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#FFA5A5',
          height: '4px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#aed1ca',
            border: 'none',
          },
          '&:focus': {
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#2d2d2d',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { fontFamily: '"Poppins", sans-serif' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { fontFamily: '"Poppins", sans-serif' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontFamily: '"Poppins", sans-serif' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: { fontFamily: '"Poppins", sans-serif' },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { fontSize: '18px' },
      },
    },
  },
};

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // TODO: This is throwing a linting error despite it working correctly and defined properly, need to investigate
  // @ts-ignore
  const muiTheme = createTheme(customMuiTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <MediaQueryProvider>{children}</MediaQueryProvider>
    </ThemeProvider>
  );
}
