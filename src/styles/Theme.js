import { createTheme, responsiveFontSizes } from "@mui/material";

const baseFontSize = 16;

let theme = createTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#000" },
  },
  typography: {
    fontSize: baseFontSize,
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.625rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: (variant) => {
    const fontSizeMap = {
      h1: baseFontSize * 0.15,
      h2: baseFontSize * 0.125,
      h3: baseFontSize,
      body1: baseFontSize,
    };

    const fontSize = fontSizeMap[variant] || baseFontSize;
    return `${2 * fontSize}px`; //Spacing following paragraphs to at least 2 times the font size;
  },
  letterSpacing: (variant) => {
    const fontSizeMap = {
      h1: 0.5,
      h2: 0.625,
      h3: 0.75,
      body1: 0.375,
    };
    const fontSize = fontSizeMap[variant];
    return `${0.12 * fontSize}em`; //Letter spacing (tracking) to at least 0.12 times the font size;
  },
  wordSpacing: (variant) => {
    const fontSizeMap = {
      h1: 0.25,
      h2: 0.5,
      h3: 0.66,
      body1: 0.2,
    };
    const fontSize = fontSizeMap[variant];
    return `${0.16 * fontSize}em`; //Word spacing to at least 0.16 times the font size
  },
});

theme = responsiveFontSizes(theme);

export default theme;
