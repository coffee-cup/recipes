import firebase from "firebase/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { Recipe } from "../models";

const RECIPE_COLLECTION = "recipes";

export const createRecipe = (recipe: Recipe) => {
  firebase
    .firestore()
    .collection(RECIPE_COLLECTION)
    .add(recipe);
};

export const updateRecipe = (recipe: Recipe & { id: string }) => {
  const recipeRef = firebase
    .firestore()
    .collection(RECIPE_COLLECTION)
    .doc(recipe.id);

  delete recipe.id;
  recipeRef.update(recipe);
};

export const deleteRecipe = (recipe: Recipe & { id: string }) => {
  const recipeRef = firebase
    .firestore()
    .collection(RECIPE_COLLECTION)
    .doc(recipe.id);

  recipeRef.delete();
};

export const useRecipes = (): {
  error: any;
  loading: boolean;
  value: Array<Recipe & { id: string }>;
} => {
  const { error, loading, value } = useCollection(
    firebase.firestore().collection(RECIPE_COLLECTION),
  );

  if (!error && !loading && value) {
    const recipes: Array<Recipe & { id: string }> = value.docs.map(doc => ({
      ...(doc.data() as Recipe),
      id: doc.id,
    }));

    return { error, loading, value: recipes };
  }

  return { error, loading, value: [] };
};
