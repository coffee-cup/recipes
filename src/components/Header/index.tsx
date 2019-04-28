import * as React from "react";
import styled from "../../styled-components";
import { forNarrowScreen, forWideScreen } from "../../styles";
import Logo from "../Logo";
import Separator from "../Separator";
import { Text, Title } from "../Text";

interface Props {
  children: React.ReactNode;
  subtitle?: string;
  hideLogoDesktop?: boolean;
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

  h1 {
    word-wrap: anywhere;
  }

  &.hideLogoDesktop {
    .logo {
      ${forWideScreen`display: none`}
    }
  }

  .logo {
    margin-right: 1rem;

    ${forNarrowScreen`margin-right: 0;`}
  }
`;

const TextContainer = styled.div`
  ${forNarrowScreen`padding-top: 0.5rem;`}
  ${forNarrowScreen`text-align: center;`}
`;

const Header = (props: Props) => (
  <StyledHeader>
    <HeaderContainer className={props.hideLogoDesktop ? "hideLogoDesktop" : ""}>
      <Logo />
      <TextContainer>
        <Title className="mv0">{props.children}</Title>
        {props.subtitle != null && (
          <Text className="mv0">{props.subtitle}</Text>
        )}
      </TextContainer>
    </HeaderContainer>
    <Separator />
  </StyledHeader>
);

export default Header;
