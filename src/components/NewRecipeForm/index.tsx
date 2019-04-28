import * as React from "react";
import { Recipe, validateRecipe } from "../../models";
import styled from "../../styled-components";
import Button from "../Button";
import Input from "../Input";

export interface Props {
  onCreate: (recipe: Recipe) => any;
}

const StyledNewRecipeForm = styled.div``;

const StyledFormElement = styled.div`
  margin-bottom: 1rem;
`;

const NewRecipeForm = (props: Props) => {
  const [newRecipe, setNewRecipe] = React.useState<Recipe>({
    name: "",
    ingredients: "",
    method: "",
  });

  const [showErrors, setShowErrors] = React.useState(false);

  const setName = (name: string) =>
    setNewRecipe({
      ...newRecipe,
      name,
    });

  const setIngredients = (ingredients: string) =>
    setNewRecipe({
      ...newRecipe,
      ingredients,
    });

  const setMethod = (method: string) =>
    setNewRecipe({
      ...newRecipe,
      method,
    });

  const submitForm = (e: any) => {
    e.preventDefault();

    if (validateRecipe(newRecipe)) {
      props.onCreate(newRecipe);
    } else {
      setShowErrors(true);
    }
  };

  return (
    <StyledNewRecipeForm>
      <form onSubmit={submitForm}>
        <StyledFormElement>
          <Input
            label="Name"
            value={newRecipe.name}
            placeholder="Something delicious"
            onChange={setName}
            showErrors={showErrors}
            required
          />
        </StyledFormElement>

        <StyledFormElement>
          <Input
            textarea
            label="Ingredients"
            value={newRecipe.ingredients}
            placeholder="- Cheese"
            onChange={setIngredients}
            showErrors={showErrors}
            required
          />
        </StyledFormElement>

        <StyledFormElement>
          <Input
            textarea
            label="Method"
            value={newRecipe.method}
            placeholder="Stir real good."
            onChange={setMethod}
            showErrors={showErrors}
            required
          />
        </StyledFormElement>

        <Button type="submit">Create</Button>
      </form>
    </StyledNewRecipeForm>
  );
};

export default NewRecipeForm;
