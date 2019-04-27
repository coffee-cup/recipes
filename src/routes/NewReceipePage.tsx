import * as React from "react";
import Header from "../components/Header";
import NewRecipeForm from "../components/NewRecipeForm";
import * as db from "../database";
import { Recipe } from "../models";

const NewReceipePage = (props: any) => {
  const onCreate = (recipe: Recipe) => {
    db.createRecipe(recipe);
    props.history.push("/");
  };

  return (
    <div>
      <Header>New Recipe</Header>
      <NewRecipeForm onCreate={onCreate} />
    </div>
  );
};

export default NewReceipePage;
