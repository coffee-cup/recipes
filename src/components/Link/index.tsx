import { Link as RouterLink } from "react-router-dom";
import * as React from "react";
import styled from "../../styled-components";
import Button from "../Button";
import { withRouter, RouteComponentProps } from "react-router";

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colours.accent};
  cursor: pointer;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export interface Props {
  children?: React.ReactNode;
  className?: string;
  asButton?: boolean;
  to: string;
}

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
    <StyledLink className={props.className} to={props.to}>
      {props.children}
    </StyledLink>
  );

export default withRouter(Link);
