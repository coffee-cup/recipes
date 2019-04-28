import * as React from "react";
import styled from "../../styled-components";
import { forNarrowScreen } from "../../styles";
import Logo from "../Logo";
import Separator from "../Separator";
import { Title } from "../Text";

interface Props {
  children: React.ReactNode;
  hideLogo?: boolean;
}

const StyledHeader = styled.div`
  margin-bottom: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  ${forNarrowScreen`flex-direction: column;`}
  ${forNarrowScreen`padding-top: 2rem;`}

  h1 {
    word-wrap: anywhere;
  }
`;

const Header = (props: Props) => (
  <StyledHeader>
    <HeaderContainer>
      <Logo />
      <Title className="mv0">{props.children}</Title>
    </HeaderContainer>
    <Separator />
  </StyledHeader>
);

export default Header;
