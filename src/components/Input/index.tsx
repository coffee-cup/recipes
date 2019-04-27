import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "../../styled-components";
import { Detail } from "../Text";

export interface Props {
  placeholder: string;
  value: string;
  textarea?: boolean;
  required?: boolean;
  showErrors?: boolean;
  label?: string;
  onChange?: (value: string) => any;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const LabelTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  appearance: none;
  border: solid 1px ${props => props.theme.colours.primary};
  padding: 0.5rem 0.5rem;

  &.error {
    border-color: ${props => props.theme.colours.error};
  }
`;

const StyledTextArea = styled(TextareaAutosize)`
  appearance: none;
  border: solid 1px ${props => props.theme.colours.primary};
  padding: 0.5rem 0.5rem;
  min-height: 10rem;
  resize: vertical;

  &.error {
    border-color: ${props => props.theme.colours.error};
  }
`;

const StyledLabelText = styled.span`
  color: ${props => props.theme.colours.secondary}
  margin-bottom: 0.1rem;
`;

const StyledError = styled.span`
  color: ${props => props.theme.colours.error};
`;

const Input = (props: Props) => {
  const isError = props.showErrors && props.required && props.value === "";

  return (
    <StyledLabel>
      <LabelTextContainer>
        <StyledLabelText>
          {props.label && <Detail>{props.label}</Detail>}
        </StyledLabelText>

        {isError && (
          <StyledError>
            <Detail>Required</Detail>
          </StyledError>
        )}
      </LabelTextContainer>
      {props.textarea ? (
        <StyledTextArea
          className={isError ? "error" : ""}
          value={props.value}
          name={props.label || ""}
          placeholder={props.placeholder}
          onChange={(e: any) =>
            props.onChange && props.onChange(e.target.value)
          }
        />
      ) : (
        <StyledInput
          className={isError ? "error" : ""}
          value={props.value}
          name={props.label || ""}
          placeholder={props.placeholder}
          onChange={(e: any) =>
            props.onChange && props.onChange(e.target.value)
          }
        />
      )}
    </StyledLabel>
  );
};

export default Input;
