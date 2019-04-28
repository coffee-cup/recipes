import * as React from "react";
import { Recipe } from "../../models";
import styled from "../../styled-components";
import Header from "../Header";
import Input from "../Input";
import { Detail } from "../Text";

export interface Props {
  recipe: Recipe & { id: string };
  onUpdateRecipe: (recipe: Recipe & { id: string }) => any;
}

const StyledRecipe = styled.div``;

const StyledTextContainer = styled.div`
  max-width: 70ch;
  padding-bottom: 1rem;
`;

const IngMethodContainer = styled.div``;

const StyledName = styled.div`
  color: ${props => props.theme.colours.secondary};
  margin-bottom: 0.2rem;
`;

const TextArea = styled(Input)`
  textarea {
    background-color: ${props => props.theme.colours.bg};
    outline: solid 1px ${props => props.theme.colours.bg};
    border: none;

    transition: outline 150ms ease-in-out;

    &:focus {
      outline: solid 1px ${props => props.theme.colours.primary};
    }
  }
`;

const TextSection = ({
  name,
  text,
  onChange,
}: {
  name: string;
  text: string;
  onChange?: (value: string) => any;
}) => {
  const [textValue, setTextValue] = React.useState(text);

  return (
    <StyledTextContainer>
      <StyledName>
        <Detail>{name}</Detail>
      </StyledName>
      <TextArea
        textarea
        value={textValue}
        placeholder=""
        onChange={setTextValue}
        onBlur={() => {
          if (onChange) {
            onChange(textValue);
          }
        }}
      />
    </StyledTextContainer>
  );
};

const Recipe = (props: Props) => {
  const setIngredients = (value: string) =>
    props.onUpdateRecipe({ ...props.recipe, ingredients: value });

  const setMethod = (value: string) =>
    props.onUpdateRecipe({ ...props.recipe, method: value });

  return (
    <StyledRecipe>
      <Header>{props.recipe.name}</Header>

      <IngMethodContainer>
        <TextSection
          name="ingredients"
          text={props.recipe.ingredients}
          onChange={setIngredients}
        />
        <TextSection
          name="method"
          text={props.recipe.method}
          onChange={setMethod}
        />
      </IngMethodContainer>
    </StyledRecipe>
  );
};

export default Recipe;
