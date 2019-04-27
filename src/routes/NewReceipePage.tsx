import * as React from "react";
import { Title } from "../components/Text";
import NewRecipeForm from "../components/NewRecipeForm";

const NewReceipePage = () => {
  return (
    <div>
      <Title>New Receipe</Title>
      <NewRecipeForm onCreate={recipe => console.log(recipe)} />
    </div>
  );
};

export default NewReceipePage;
