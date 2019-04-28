import * as React from "react";
import { Recipe } from "../../models";
import styled from "../../styled-components";
import Header from "../Header";
import Input from "../Input";

export interface Props {
  recipe: Recipe & { id: string };
  canEdit: boolean;
  onUpdateRecipe: (recipe: Recipe & { id: string }) => any;
}

const StyledRecipe = styled.div``;

const StyledTextContainer = styled.div`
  max-width: 70ch;
  padding-bottom: 1rem;
`;

const IngMethodContainer = styled.div``;

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

const TextSection = (props: {
  name: string;
  text: string;
  canEdit: boolean;
  onChange?: (value: string) => any;
}) => {
  const [textValue, setTextValue] = React.useState(props.text);

  return (
    <StyledTextContainer>
      <TextArea
        textarea
        value={textValue}
        label={props.name}
        placeholder=""
        onChange={setTextValue}
        disabled={!props.canEdit}
        onBlur={() => {
          if (props.onChange) {
            props.onChange(textValue);
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
          canEdit={props.canEdit}
        />
        <TextSection
          name="method"
          text={props.recipe.method}
          onChange={setMethod}
          canEdit={props.canEdit}
        />
      </IngMethodContainer>
    </StyledRecipe>
  );
};

export default Recipe;
