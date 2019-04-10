import * as React from "react";
import styled from "styled-components";
import { colours, fonts, fontSizes } from "../styles";
import Button from "../Button";

const Wrapper = styled.div`
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

const App = () => (
  <Wrapper>
    <h1>Hello World</h1>
    <Button />
  </Wrapper>
);

export default App;
