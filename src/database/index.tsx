import firebase from "firebase/app";
import { Recipe } from "../models";
import { useCollectionData } from "react-firebase-hooks/firestore";

const RECIPE_COLLECTION = "recipes";

export const createRecipe = (recipe: Recipe) => {
  firebase
    .firestore()
    .collection(RECIPE_COLLECTION)
    .add(recipe);
};

export const useRecipes = () =>
  useCollectionData<Recipe>(firebase.firestore().collection(RECIPE_COLLECTION));
