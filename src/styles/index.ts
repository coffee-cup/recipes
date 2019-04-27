import chroma from "chroma-js";

export type Color = string;
export type Font = string;
export type Size = string;

export interface Colors {
  primary: Color;
  secondary: Color;
  accent: Color;
  text: Color;
}

export interface Fonts {
  text: Font;
}

export type FontSizes = {
  title: Size;
  subtitle: Size;
  header: Size;
  h1: Size;
  h2: Size;
  h3: Size;
  h4: Size;
  large: Size;
  base: Size;
  detail: Size;
};

export interface Theme {
  colours: Colors;
  fonts: Fonts;
}

export const colours: Colors = {
  text: "#333",
  primary: "peachpuff",
  secondary: "hotpink",
  accent: "hotpink",
};

export const fonts: Fonts = {
  text: "'Merriweather Sans', -apple-system, BlinkMacSystemFont, sans-serif",
};

export const baseFontSize = 16;

export const theme: Theme = {
  colours,
  fonts,
};

export const paddings = {
  none: "0",
  small: "0.5rem",
  medium: "1rem",
  large: "2rem",
};

export const margins = paddings;

export const darken = (color: string, amount: number) =>
  chroma(color)
    .darken(amount)
    .toString();

export const lighten = (color: string, amount: number) =>
  chroma(color)
    .brighten(amount)
    .toString();
