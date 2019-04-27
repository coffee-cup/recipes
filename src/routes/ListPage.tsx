import * as React from "react";
import Link from "../components/Link";
import Loader from "../components/Loader";
import RecipeList from "../components/RecipeList";
import { SubTitle, Title } from "../components/Text";
import { useRecipes } from "../database";
import styled from "../styled-components";

const Error = styled(SubTitle)`
  color: ${props => props.theme.colours.error};
`;

const RecipeContainer = styled.div``;

const ListPage = () => {
  const { error, loading, value } = useRecipes();
  const recipes = value;

  return (
    <div>
      <Title>Receipes</Title>
      <Link to="/new" asButton>
        New Receipe
      </Link>

      {error && <Error>Error getting recipes</Error>}
      {loading && <Loader />}

      {!error && recipes != null && (
        <RecipeContainer>
          <RecipeList recipes={recipes} />
        </RecipeContainer>
      )}
    </div>
  );
};

export default ListPage;
