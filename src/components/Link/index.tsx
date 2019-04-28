import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import styled from "../../styled-components";
import Button from "../Button";

export interface Props {
  children?: React.ReactNode;
  className?: string;
  asButton?: boolean;
  noUnderline?: boolean;
  to: string;
}

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colours.accent};
  cursor: pointer;
  text-decoration: underline;

  transition: opacity 250ms ease-in-out;

  &.no-underline {
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Link = (props: Props & RouteComponentProps) =>
  props.asButton ? (
    <Button
      className={props.className}
      onClick={() => {
        props.history.push(props.to);
      }}
    >
      {props.children}
    </Button>
  ) : (
    <StyledLink
      className={`${props.className} ${
        props.noUnderline ? "no-underline" : ""
      }`}
      to={props.to}
    >
      {props.children}
    </StyledLink>
  );

export default withRouter(Link);
