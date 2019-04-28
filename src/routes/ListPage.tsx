import * as React from "react";
import Header from "../components/Header";
import Link from "../components/Link";
import Loader from "../components/Loader";
import Page from "../components/Page";
import RecipeList from "../components/RecipeList";
import { SubTitle } from "../components/Text";
import { useRecipes, useUser } from "../database";
import styled from "../styled-components";

const Error = styled(SubTitle)`
  color: ${props => props.theme.colours.error};
`;

const RecipeContainer = styled.div``;

const ListPage = () => {
  const { error, loading, value } = useRecipes();
  const { initialising, user } = useUser();
  const recipes = value;

  const canEdit = !initialising && user != null && user.admin;

  return (
    <Page>
      <Header subtitle="A collection of delicious recipes" hideLogoDesktop>
        Recipes
      </Header>

      {canEdit && (
        <Link to="/new" asButton>
          New Receipe
        </Link>
      )}

      {error && <Error>Error getting recipes</Error>}
      {loading && <Loader />}

      {!error && recipes != null && (
        <RecipeContainer>
          <RecipeList recipes={recipes} />
        </RecipeContainer>
      )}
    </Page>
  );
};

export default ListPage;
