import * as React from "react";
import styled from "../../styled-components";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FullPage = (props: Props) => <Container>{props.children}</Container>;

export default FullPage;
