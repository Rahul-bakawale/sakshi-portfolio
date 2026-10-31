import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#161616' },
    secondary: { main: '#00A651' },
    background: { default: '#FFF7EE', paper: '#FFFFFF' },
    text: { primary: '#161616', secondary: '#575757' },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    button: { textTransform: 'none', fontWeight: 600 },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#FFF7EE' },
      },
    },
  },
})
