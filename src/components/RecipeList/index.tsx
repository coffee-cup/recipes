import * as React from "react";
import { Recipe, recipeToSlug } from "../../models";
import styled from "../../styled-components";
import Link from "../Link";

export interface Props {
  recipes: Recipe[];
}

const StyledRecipe = styled(Link)`
  color: ${props => props.theme.colours.text};
  text-decoration: none;
`;

const StyledRecipeHeader = styled.h3`
  word-wrap: anywhere;
`;

const Recipe = ({ recipe }: { recipe: Recipe }) => (
  <StyledRecipe to={`/${recipeToSlug(recipe)}`}>
    <StyledRecipeHeader className="f3">{recipe.name}</StyledRecipeHeader>
  </StyledRecipe>
);

export default ({ recipes }: Props) => (
  <div>
    {recipes.map((r, i) => (
      <Recipe key={i} recipe={r} />
    ))}
  </div>
);
