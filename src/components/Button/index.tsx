import * as React from "react";
import styled from "styled-components";
import { colours, darken, lighten } from "../../styles";

const StyledLink = styled.span`
  color: ${props => props.theme.colours.accent};
  cursor: pointer;
  text-decoration: underline;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

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
  className?: string;
  onClick?: () => any;
  type?: "button" | "submit" | "reset";
  asLink?: boolean;
}

const Button = (props: Props) =>
  props.asLink ? (
    <StyledLink className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledLink>
  ) : (
    <StyledButton
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );

export default Button;
