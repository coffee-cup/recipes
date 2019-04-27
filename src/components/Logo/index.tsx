import * as React from "react";
import { Link } from "react-router-dom";
import chef from "../../media/chef.svg";
import styled from "../../styled-components";
import { forNarrowScreen } from "../../styles";

const Container = styled.div`
  margin-right: 1rem;
  color: ${props => props.theme.colours.secondary};
`;

const Image = styled.img`
  max-height: 3rem;
  ${forNarrowScreen`max-height: 4rem;`}
`;

const Logo = () => (
  <Container>
    <Link to="/">
      <Image src={chef} />
    </Link>
  </Container>
);

export default Logo;
