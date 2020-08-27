import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#00aaff";
const orange = "#ffba60";
const whitish = "rgba(215, 215, 220, 1)";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      footer: `${whitish}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${whitish}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Poppins, sans",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      marginLeft: "25px",
    },
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
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
