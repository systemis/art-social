import {
  Colors,
  extendTheme,
  ThemeComponents,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultSize,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  heading: "CircularStd",
  body: "Poppins",
};
const colors: Colors = {
  gray: {
    700: "#1f2733",
  },
  navy: {
    50: "#d0dcfb",
    100: "#aac0fe",
    200: "#a3b9f8",
    300: "#728fea",
    400: "#3652ba",
    500: "#1b3bbb",
    600: "#24388a",
    700: "#1b254b",
    800: "#111c44",
    900: "#0b1437",
  },
  brand: {
    50: "#cbbff8",
    100: "#876cea",
    200: "#582CFF",
    300: "#542de1",
    400: "#7551FF",
    500: "#4318FF",
    600: "#300eaa",
    700: "#1c0377",
    800: "#130156",
    900: "#0e0042",
  },
};
const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5625rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "2.5rem",
  "6xl": "3.75rem",
  "7xl": "4.375rem",
  "8xl": "5rem",
  "9xl": "5.625rem",
};
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const components: ThemeComponents = {
  Button: {
    variants: {
      primary: {
        fontSize: "10px",
        bg: "blue.400",
        color: "#fff",
        _hover: { bg: "blue.300" },
        _focus: { bg: "blue.300" },
        _active: { bg: "blue.300" },
      },
      navy: {
        fontSize: "10px",
        bg: "navy.900",
        color: "#fff",
        _hover: { bg: "navy.900" },
        _focus: { bg: "navy.900" },
        _active: { bg: "navy.900" },
      },
      "no-effects": {
        _hover: "none",
        _active: "none",
        _focus: "none",
      },
      danger: () => ({
        color: "white",
        bg: "red.500",
        fontSize: "10px",
        _hover: "red.400",
        _focus: "red.400",
        _active: "red.400",
      }),
      outlined: (props) => ({
        color: mode("blue.400", "white")(props),
        bg: "transparent",
        fontSize: "10px",
        border: "1px solid",
        borderColor: { bg: mode("blue.400", "white")(props) },
        _hover: { bg: mode("blue.50", "transparent")(props) },
        _focus: { bg: mode("blue.50", "transparent")(props) },
        _active: { bg: mode("blue.50", "transparent")(props) },
      }),
      dark: (props) => ({
        color: "white",
        bg: mode("gray.700", "blue.500")(props),
        fontSize: "10px",
        _hover: { bg: mode("gray.700", "blue.500")(props) },
        _focus: { bg: mode("gray.700", "blue.600")(props) },
        _active: { bg: mode("gray.700", "blue.400")(props) },
      }),
      light: (props) => ({
        color: mode("gray.700", "gray.700")(props),
        bg: mode("gray.100", "white")(props),
        fontSize: "10px",
        _hover: { bg: mode("gray.50", "white")(props) },
        _focus: { bg: mode("gray.50", "white")(props) },
        _active: { bg: mode("gray.50", "white")(props) },
      }),
    },
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "8px",
      fontSize: "10px",
    },
  },
  Text: {
    defaultProps: {
      size: "md",
    },
  },
  Badge: {
    sizes: {
      md: {
        width: "65px",
        height: "25px",
      },
    },
    baseStyle: {
      textTransform: "capitalize",
    },
  },
};

const sizes = {
  container: {
    xl: "1350px",
  },
};
export const uiTheme = extendTheme(
  { colors, config, components, fonts, sizes, fontSizes },
  withDefaultColorScheme({ colorScheme: "easeMobile" }),
  withDefaultSize({ size: "lg" })
);
