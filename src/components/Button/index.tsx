import * as React from "react";
import styled from "styled-components";
import { colours, darken, lighten } from "../../styles";

const StyledButton = styled.button`
  color: ${colours.secondary};
  background-color: ${colours.primary};
  padding: 0.5rem 1rem;

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
  type?: "button" | "submit" | "reset";
}

const Button = (props: Props) => (
  <StyledButton type={props.type} onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

export default Button;
