import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Button from "../components/Button";
import Recipe from "../components/Recipe";
import * as db from "../database";
import { Recipe as RecipeModel } from "../models";
import styled from "../styled-components";

export interface Props {
  recipe: RecipeModel & { id: string };
}

const StyledRecipePage = styled.div`
  margin-bottom: 1rem;
`;

const DeleteContainer = styled.div`
  padding-top: 2rem;
`;

const RecipePage = (props: Props & RouteComponentProps) => {
  const deleteRecipe = () => {
    db.deleteRecipe(props.recipe);
    props.history.push("/");
  };

  return (
    <StyledRecipePage>
      <Recipe recipe={props.recipe} onUpdateRecipe={db.updateRecipe} />

      <DeleteContainer>
        <Button onClick={deleteRecipe} asLink>
          delete recipe
        </Button>
      </DeleteContainer>
    </StyledRecipePage>
  );
};

export default withRouter(RecipePage);
