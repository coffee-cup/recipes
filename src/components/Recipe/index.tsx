import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Recipe, recipeToSlug } from "../../models";
import styled from "../../styled-components";
import Header from "../Header";
import Input, { StyledLabelText } from "../Input";

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

const TextSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditSaveButton = styled(StyledLabelText)`
  cursor: pointer;
`;

const TextSectionText = styled.div`
  white-space: pre-line;
  min-height: 4rem;
  padding: 0.5rem;
  border: solid 2px ${props => props.theme.colours.bg};
`;

const TextArea = styled(Input)`
  textarea {
    background-color: ${props => props.theme.colours.bg};
  }
`;

const TextSection = (props: {
  name: string;
  text: string;
  canEdit: boolean;
  onChange: (value: string) => any;
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [textValue, setTextValue] = React.useState(props.text);

  return (
    <StyledTextContainer>
      <TextSectionHeader>
        <StyledLabelText>{props.name}</StyledLabelText>
        {!isEditing && props.canEdit && (
          <EditSaveButton onClick={() => setIsEditing(!isEditing)}>
            edit
          </EditSaveButton>
        )}
      </TextSectionHeader>

      {isEditing && props.canEdit ? (
        <TextArea
          textarea
          value={textValue}
          placeholder=""
          onChange={setTextValue}
          disabled={!props.canEdit}
          onBlur={() => {
            if (props.onChange) {
              props.onChange(textValue);
            }
            setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <TextSectionText>{textValue}</TextSectionText>
      )}
    </StyledTextContainer>
  );
};

const Recipe = (props: Props & RouteComponentProps) => {
  const setIngredients = (value: string) =>
    props.onUpdateRecipe({ ...props.recipe, ingredients: value });

  const setMethod = (value: string) =>
    props.onUpdateRecipe({ ...props.recipe, method: value });

  const setName = () => {
    const newName = window.prompt("Change Recipe Name", props.recipe.name);
    if (newName) {
      const newRecipe = { ...props.recipe, name: newName };
      props.onUpdateRecipe(newRecipe);
      props.history.push(recipeToSlug(newRecipe));
    }
  };

  return (
    <StyledRecipe>
      <Header onTitleClick={() => props.canEdit && setName()}>
        {props.recipe.name}
      </Header>

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

export default withRouter(Recipe);
