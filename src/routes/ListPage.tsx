import * as React from "react";
import Link from "../components/Link";
import Loader from "../components/Loader";
import Page from "../components/Page";
import RecipeList from "../components/RecipeList";
import Separator from "../components/Separator";
import { SubTitle, Text, Title } from "../components/Text";
import { useRecipes, useUser } from "../database";
import styled from "../styled-components";

const Error = styled(SubTitle)`
  color: ${props => props.theme.colours.error};
`;

const RecipeContainer = styled.div``;

const HeaderContainer = styled.div`
  margin-bottom: 1rem;
`;

const ListPage = () => {
  const { error, loading, value } = useRecipes();
  const { initialising, user } = useUser();
  const recipes = value;

  const canEdit = !initialising && user != null && user.admin;

  return (
    <Page>
      <HeaderContainer>
        <Title className="mb0">Receipes</Title>
        <Text className="mt2">{"A collection of delicious recipes."}</Text>
        <Separator />
      </HeaderContainer>

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
