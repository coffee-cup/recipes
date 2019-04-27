import * as React from "react";
import Logo from "../components/Logo";
import NewRecipeForm from "../components/NewRecipeForm";
import { Title } from "../components/Text";
import * as db from "../database";
import { Recipe } from "../models";
import styled from "../styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NewReceipePage = (props: any) => {
  const onCreate = (recipe: Recipe) => {
    db.createRecipe(recipe);
    props.history.push("/");
  };

  return (
    <div>
      <HeaderContainer>
        <Logo />
        <Title>New Receipe</Title>
      </HeaderContainer>
      <NewRecipeForm onCreate={onCreate} />
    </div>
  );
};

export default NewReceipePage;
