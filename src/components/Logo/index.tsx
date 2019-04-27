import * as React from "react";
import { Link } from "react-router-dom";
import styled from "../../styled-components";
import chef from "../../media/chef.svg";

const Container = styled.div`
  margin-right: 1rem;
  color: ${props => props.theme.colours.secondary};
`;

const Image = styled.img`
  max-height: 3rem;
`;

const Logo = () => (
  <Container>
    <Link to="/">
      <Image src={chef} />
    </Link>
  </Container>
);

export default Logo;
