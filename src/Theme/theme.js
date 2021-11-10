import { createTheme } from '@material-ui/core';
import { red, green, blue } from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[500],
        },
        error: {
            main: red[500],
        },
    },
})
