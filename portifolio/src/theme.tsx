
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#060010',
        },
        secondary: {
            main: '#180c24',
        },
        
    },
});
theme = responsiveFontSizes(theme);

export default theme;