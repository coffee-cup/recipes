import * as React from "react";
import styled from "../../styled-components";
import { forNarrowScreen } from "../../styles";
import Logo from "../Logo";
import { Title } from "../Text";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  ${forNarrowScreen`flex-direction: column;`}
  ${forNarrowScreen`padding-top: 2rem;`}

  h1 {
    word-wrap: anywhere;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Header = (props: Props) => (
  <HeaderContainer>
    <Logo />
    <Title>{props.children}</Title>
  </HeaderContainer>
);

export default Header;
