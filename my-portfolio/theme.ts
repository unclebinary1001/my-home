import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none", // Remove underline on hover
          color: "green.800", // Change color on hover
        },
        _focus: {
          textDecoration: "none", // Remove underline on focus
        },
        textDecoration: "none", // Remove underline in default state
      },
    },
  },
});

export default theme;
