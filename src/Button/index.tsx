import * as React from "react";
import styled from "styled-components";
import { colours } from "../styles";

const StyledButton = styled.button`
  padding: 1rem 1rem;
  background-color: ${colours.primary};
  color: white;

  font-weight: bold;

  appearance: none;
  border: 0;
`;

const Button = () => <StyledButton>Button</StyledButton>;

export default Button;
