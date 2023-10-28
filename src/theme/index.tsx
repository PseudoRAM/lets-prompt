import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      "50": "#EAF2FB",
      "100": "#D4E5F7",
      "200": "#A9C9F0",
      "300": "#7EACE9",
      "400": "#5290E2",
      "500": "#2870EA",
      "600": "#205BC6",
      "700": "#1846A2",
      "800": "#10317E",
      "900": "#081C5A",
    },
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "#170033",
        _dark: "#170033",
      },
      "chakra-body-bg": {
        _light: "#EEF3FA",
        _dark: "#EEF3FA",
      },
      "chakra-border-color": {
        _light: "#000",
        _dark: "#000",
      },
      "chakra-inverse-text": {
        _light: "#D7B8FE",
        _dark: "#D7B8FE",
      },
      "chakra-subtle-bg": {
        _light: "#F3F1F3",
        _dark: "#F3F1F3",
      },
      "chakra-subtle-text": {
        _light: "#514653",
        _dark: "#514653",
      },
      "chakra-placeholder-color": {
        _light: "#D7B8FE",
        _dark: "#D7B8FE",
      },
    },
  },
  fonts: {},
});

export default theme;
