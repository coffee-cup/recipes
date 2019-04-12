import styled from "styled-components";
import { colours, fonts, fontSizes } from "./styles";

export default styled.div`
  color: ${colours.text};
  background-color: white;

  padding: 2rem;

  font-size: ${fontSizes.base};
  font-family: ${fonts.sans};

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ::selection {
    background: ${colours.primary};
  }
  ::-moz-selection {
    background: ${colours.primary};
  }
`;
