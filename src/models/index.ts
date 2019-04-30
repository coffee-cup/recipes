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

export const recipeToSlug = (recipe: Recipe): string =>
  encodeURIComponent(recipe.name.toLowerCase().replace(/\s+/g, "-"));

export interface User {
  displayName: string;
  email: string;
  admin: boolean;
}
