import * as React from "react";
import styled from "../../styled-components";
import Footer from "../Footer";

interface Props {
  children?: React.ReactNode;
}

const StyledPage = styled.div`
  padding-bottom: 2rem;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Page = (props: Props) => (
  <StyledPage>
    <Container>{props.children}</Container>
    <Footer />
  </StyledPage>
);

export default Page;
