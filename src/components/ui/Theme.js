import { createMuiTheme } from '@material-ui/core/styles';

const blue = 'rgba(2,67,220,1)';
const orange = '#ffba60';
const white = 'rgba(255, 255, 250, 1)';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      footer: `${white}`,
      gradient1:
        'linear-gradient(165deg,rgba(63,152,254,1)0%,rgba(2,67,220,1)100%)',
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${white}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Josefin sans',
      textTransform: 'uppercase',
      fontWeight: '400',
      fontSize: '11px',
      marginLeft: '16px',
      letterSpacing: 2,
    },
    serif: {
      fontFamily: 'Source Serif Pro, serif',
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.15,
    },
    sans: {
      fontFamily: 'Source Sans Pro, serif',
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.4,
    },
  },
  utils: {
    container: {
      width: '100%',
      maxWidth: 1400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  flex: {
    col: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xxs: 0,
      xs: 360,
      sm: 410,
      md: 650,
      lg: 1150,
      xl: 1300,
    },
  },
});
