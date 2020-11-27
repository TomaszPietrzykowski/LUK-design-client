import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#00aaff';
const orange = '#ffba60';
const white = 'rgba(255, 255, 250, 1)';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      footer: `${white}`,
      gradient1:
        'linear-gradient(150deg,rgba(0,210,191,1)0%,rgba(75,164,246,1)100%)',
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
  },
  utils: {
    container: {
      width: '100%',
      maxWidth: 1400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xxs: 0,
      xs: 360,
      sm: 410,
      md: 600,
      lg: 960,
      xl: 1200,
    },
  },
});
