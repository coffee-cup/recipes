import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Button from "../components/Button";
import Page from "../components/Page";
import Recipe from "../components/Recipe";
import * as db from "../database";
import { useUser } from "../database";
import { Recipe as RecipeModel } from "../models";
import styled from "../styled-components";

export interface Props {
  recipe: RecipeModel & { id: string };
}

const DeleteContainer = styled.div`
  padding-top: 2rem;
`;

const RecipePage = (props: Props & RouteComponentProps) => {
  const deleteRecipe = () => {
    db.deleteRecipe(props.recipe);
    props.history.push("/");
  };

  const { initialising, user } = useUser();
  const canEdit = !initialising && user != null && user.admin;

  return (
    <Page>
      <Recipe
        recipe={props.recipe}
        onUpdateRecipe={db.updateRecipe}
        canEdit={canEdit}
      />

      {canEdit && (
        <DeleteContainer>
          <Button onClick={deleteRecipe} asLink>
            delete recipe
          </Button>
        </DeleteContainer>
      )}
    </Page>
  );
};

export default withRouter(RecipePage);
