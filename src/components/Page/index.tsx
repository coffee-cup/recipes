import * as React from "react";
import styled from "../../styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children?: React.ReactNode;
}

const Page = (props: Props) => <Container>{props.children}</Container>;

export default Page;
