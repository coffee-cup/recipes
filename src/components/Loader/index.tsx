import * as React from "react";
import { PushSpinner } from "react-spinners-kit";
import { colours } from "../../styles";
import styled from "../../styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const Loader = () => (
  <Container>
    <PushSpinner color={colours.accent} />
  </Container>
);

export default Loader;
