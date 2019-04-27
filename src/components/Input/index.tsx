import * as React from "react";
import styled from "../../styled-components";
import { Detail } from "../Text";

export interface Props {
  placeholder: string;
  value: string;
  label?: string;
  onChange?: (value: string) => any;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  appearance: none;
  border: solid 1px ${props => props.theme.colours.accent};
  padding: 0.5rem 0.5rem;
`;

const StyledLabelText = styled.span`
  margin-bottom: 0.1rem;
`;

const Input = (props: Props) => (
  <StyledLabel>
    <StyledLabelText>
      {props.label && <Detail>{props.label}</Detail>}
    </StyledLabelText>
    <StyledInput
      value={props.value}
      name={props.label || ""}
      placeholder={props.placeholder}
      onChange={(e: any) => props.onChange && props.onChange(e.target.value)}
    />
  </StyledLabel>
);

export default Input;
