import { extendTheme } from "@chakra-ui/react";

export const Colors = {
  brand: {
    100: "#F5E0E1",
    200: "#C9B8D9",
    400: "#C1C3F3",
    600: "#E62878",
    800: "#881155",
  },
};

export const theme = extendTheme({
  colors: Colors,
});
