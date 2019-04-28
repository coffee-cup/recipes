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
  onChange?: (value: string) => any;
  onBlur?: () => any;
  autoFocus?: boolean;
  className?: string;
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
  padding: 0.5rem;
  min-height: 6rem;
  line-height: 1.6;
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
    <StyledLabel className={props.className}>
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
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
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
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
        />
      )}
    </StyledLabel>
  );
};

export default Input;
