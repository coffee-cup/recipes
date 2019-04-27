export interface Recipe {
  name: string;
  description?: string;
  ingredients: string;
  method: string;
}

export interface Ingredient {
  amount: string;
  name: string;
}

export const validateRecipe = (recipe: Recipe): boolean =>
  recipe.name !== "" && recipe.ingredients !== "" && recipe.method !== "";
