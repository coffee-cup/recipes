import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { Detail } from "../components/Text";
import * as db from "../database";
import { Recipe } from "../models";
import styled from "../styled-components";

export interface Props {
  recipe: Recipe & { id: string };
}

const StyledRecipePage = styled.div`
  margin-bottom: 1rem;
`;

const StyledTextContainer = styled.div`
  max-width: 70ch;
  padding: 1rem 0;
`;

const IngMethodContainer = styled.div``;

const StyledName = styled.div`
  color: ${props => props.theme.colours.secondary};
  margin-bottom: 0.2rem;
`;

const TextArea = styled(Input)`
  textarea {
    background-color: ${props => props.theme.colours.bg};
    border: solid 1px ${props => props.theme.colours.bg};

    &:focus {
      border: solid 1px ${props => props.theme.colours.primary};
    }
  }
`;

const DeleteContainer = styled.div`
  padding-top: 2rem;
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
        onBlur={() => onChange && onChange(textValue)}
      />
    </StyledTextContainer>
  );
};

const RecipePage = (props: Props & RouteComponentProps) => {
  const setIngredients = (value: string) =>
    db.updateRecipe({ ...props.recipe, ingredients: value });

  const setMethod = (value: string) =>
    db.updateRecipe({ ...props.recipe, method: value });

  const deleteRecipe = () => {
    db.deleteRecipe(props.recipe);
    props.history.push("/");
  };

  return (
    <StyledRecipePage>
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

      <DeleteContainer>
        <Button onClick={deleteRecipe} asLink>
          delete recipe
        </Button>
      </DeleteContainer>
    </StyledRecipePage>
  );
};

export default withRouter(RecipePage);
