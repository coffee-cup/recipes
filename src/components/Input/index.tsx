import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "../../styled-components";
import { Detail } from "../Text";

export interface Props {
  value: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  showErrors?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (value: string) => any;
  onBlur?: () => any;
  autoFocus?: boolean;
  className?: string;
  disableGramm?: boolean;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const LabelTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  appearance: none;
  border: solid 2px ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.text};
  padding: 0.5rem 0.5rem;

  &.error {
    border-color: ${props => props.theme.colours.error};
  }
`;

const StyledTextArea = styled(TextareaAutosize)`
  appearance: none;
  color: ${props => props.theme.colours.text};
  border: solid 2px ${props => props.theme.colours.primary};
  padding: 0.5rem;
  line-height: 1.6;
  min-height: 4rem;
  resize: none;
  outline: none;

  &.error {
    border-color: ${props => props.theme.colours.error};
  }

  &:disabled {
    color: inherit;
  }
`;

export const StyledLabelText = styled(Detail)`
  color: ${props => props.theme.colours.secondary}
  margin-bottom: 0.1rem;
`;

const StyledError = styled.span`
  color: ${props => props.theme.colours.error};
`;

const Input = (props: Props) => {
  const isError = props.showErrors && props.required && props.value === "";

  return (
    <StyledLabel className={props.className}>
      <LabelTextContainer>
        {props.label && <StyledLabelText>{props.label}</StyledLabelText>}

        {isError && (
          <StyledError>
            <Detail>Required</Detail>
          </StyledError>
        )}
      </LabelTextContainer>
      {props.textarea ? (
        <StyledTextArea
          data-gramm_editor={props.disableGramm ? "true" : undefined}
          className={isError ? "error" : ""}
          value={props.value}
          name={props.label || ""}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={(e: any) =>
            props.onChange && props.onChange(e.target.value)
          }
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
        />
      ) : (
        <StyledInput
          className={isError ? "error" : ""}
          value={props.value}
          name={props.label || ""}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={(e: any) =>
            props.onChange && props.onChange(e.target.value)
          }
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
        />
      )}
    </StyledLabel>
  );
};

export default Input;
