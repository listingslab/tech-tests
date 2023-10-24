// @flow
import React from 'react';
import {
    createTheme,
    ThemeProvider
    // darken,
} from '@mui/material';

type ThemeShape = {
    children: Object
};

export default function Theme({ children }: ThemeShape): Object {
    const darkmode = false;
    const primary = '#5000ff';
    const secondary = '#f778eb';
    return (
        <ThemeProvider
            theme={createTheme({
                palette: {
                    mode: darkmode ? 'dark' : 'light',
                    background: {
                        // default: secondary,
                        // paper: darken(primary, 0.5),
                    },
                    primary: {
                        main: primary
                    },
                    secondary: {
                        main: secondary
                    },
                    success: {
                        main: primary
                    }
                }
            })}
        >
            {children}
        </ThemeProvider>
    );
}
