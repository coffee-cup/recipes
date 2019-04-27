import * as React from "react";
import styled from "../styled-components";
import { Title } from "../components/Text";
import Link from "../components/Link";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colours.secondary};
`;

const NotFound = () => (
  <Container>
    <Title>This page does not exist</Title>
    <Link to="/">go home</Link>
  </Container>
);

export default NotFound;
