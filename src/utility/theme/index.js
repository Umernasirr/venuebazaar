import { extendTheme } from "@chakra-ui/react";

export const Colors = {
  brand: {
    100: "#FFEEEE",
    200: "#C9B8D9",
    400: "#C1C3F3",
    600: "#e62878",
    800: "#aa1956",
  },
};

export const theme = extendTheme({
  colors: Colors,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  textStyles: {
    body: {
      fontFamily: "Roboto",
    },
    heading: {
      fontFamily: "Roboto",
    },
    mono: {
      fontFamily: "Roboto",
    },
  },
});
