import chroma from "chroma-js";

export const colours = {
  text: "#333",
  primary: "peachpuff",
  secondary: "hotpink",
};

export const fonts = {
  sans:
    "'Montserrat', -apple-system, BlinkMacSystemFont, 'Avenir Next', Avenir, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
};

export const fontSizes = {
  base: "16px",
};

export const darken = (color: string, amount: number) =>
  chroma(color)
    .darken(amount)
    .toString();

export const lighten = (color: string, amount: number) =>
  chroma(color)
    .brighten(amount)
    .toString();
