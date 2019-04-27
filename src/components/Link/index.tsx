import { push } from "connected-react-router";
import * as React from "react";
import { connect } from "react-redux";
import styled from "../../styled-components";

const StyledLink = styled.a`
  color: ${props => props.theme.colours.accent};
  cursor: pointer;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export interface Props {
  children?: React.ReactNode;
  to: string;
}

export interface EnhancedProps extends Props {
  push: (to: string) => any;
}

const Link = (props: EnhancedProps) => (
  <StyledLink
    onClick={(e: any) => {
      props.push(props.to);
      e.stopPropagation();
      e.preventDefault();
    }}
  >
    {props.children}
  </StyledLink>
);

export default connect(
  null,
  { push },
)(Link);
