import { extendTheme } from "@chakra-ui/react";

export const Colors = {
  brand: {
    100: "#FFDDEE",
    200: "#C9B8D9",
    400: "#C1C3F3",
    600: "#e62878",
    800: "#e62878",
  },
};

export const theme = extendTheme({
  colors: Colors,
  fonts: {
    heading: "Oswald",
    body: "Raleway",
  },
});
