import * as React from "react";
import styled from "../../styled-components";

const StyledSeparator = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.theme.colours.secondary},
    ${props => props.theme.colours.primary}
  );
  width: 100%;
  height: 10px;
`;

const Separator = () => <StyledSeparator />;

export default Separator;
