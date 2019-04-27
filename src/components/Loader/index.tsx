import * as React from "react";
import { PushSpinner } from "react-spinners-kit";
import styled from "../../styled-components";
import { colours } from "../../styles";

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
