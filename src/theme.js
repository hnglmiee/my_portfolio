import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const MAIN_COLOR = '#d039af'
// Create a theme instance.
const theme = extendTheme({
  porfolio: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: MAIN_COLOR
        },
        secondary: {
          main: '#FFFCEC'
        },
        text: {
          primary: MAIN_COLOR
        }
        // secondary: 'D039AF'
      },
      spacing: (factor) => `${0.25 * factor}rem`
      //This is theme override
    },
    dark: {
      palette: {
        //   primary: 'FFFCEC',
        //   secondary: 'D039AF'
      }
    }
  }
  //This is theme override

  // ...other properties
})

export default theme