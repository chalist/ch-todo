import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1775b9",
      light: "#a2ceed",
    },
  },

  overrides: {
    todo_list: {
      backgroundColor: "#1775b9",
    },
  },
});

export default theme;
