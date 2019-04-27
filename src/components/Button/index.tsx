import * as React from "react";
import styled from "styled-components";
import { colours, darken, lighten } from "../../styles";

const StyledButton = styled.button`
  color: ${colours.secondary};
  background-color: ${colours.primary};
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;

  font-weight: bold;

  border: 0;
  border-radius: 2px;
  cursor: pointer;
  appearance: none;

  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${lighten(colours.primary, 0.4)};
  }

  &:active {
    background-color: ${darken(colours.primary, 0.1)};
  }
`;

export interface Props {
  children?: React.ReactNode;
  onClick?: () => any;
}

const Button = (props: Props) => (
  <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
);

export default Button;
