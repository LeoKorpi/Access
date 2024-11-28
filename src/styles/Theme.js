import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: { main: "#e3e3e3" },
    secondary: { main: "#000" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
