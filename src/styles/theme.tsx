import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      main: '#00B4D8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0077b6',
    },
    /* terciary? #CAF0F8 */
    background: {
      default: '#e5faff',
    },
  },
})
