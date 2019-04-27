import chroma from "chroma-js";
import { css } from "styled-components";

export type Colour = string;
export type Font = string;
export type Size = string;

export interface Colours {
  bg: Colour;
  primary: Colour;
  secondary: Colour;
  accent: Colour;
  text: Colour;
  error: Colour;
}

export interface Fonts {
  text: Font;
}

export interface FontSizes {
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
}

export interface Theme {
  colours: Colours;
  fonts: Fonts;
}

export const colours: Colours = {
  bg: "snow",
  text: "#333",
  primary: "peachpuff",
  secondary: "hotpink",
  accent: "hotpink",
  error: "red",
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

export const NarrowScreenWidth = 768;

export const forNarrowScreen = (first: any, ...interpolations: any[]) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (max-width: ${NarrowScreenWidth}px)`} {
    ${css(first, ...interpolations)}
  }
`;

export const forWideScreen = (first: any, ...interpolations: any[]) => css`
  @media only screen ${NarrowScreenWidth != null &&
      css` and (min-width: ${NarrowScreenWidth}px)`} {
    ${css(first, ...interpolations)}
  }
`;
