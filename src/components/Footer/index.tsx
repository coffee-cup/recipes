import * as React from "react";
import styled from "../../styled-components";
import Link from "../Link";
import { Detail } from "../Text";

const StyledFooter = styled.div``;

const StyledText = styled(Detail)`
  color: ${props => props.theme.colours.secondary};
`;

const Footer = () => (
  <StyledFooter>
    <Link to="/login" noUnderline={true}>
      <StyledText>Curated by Jake and Aleesha</StyledText>
    </Link>
  </StyledFooter>
);

export default Footer;
