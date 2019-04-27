import { Recipe } from "../../models";

export interface State {
  receipes: Recipe[];
}

const initialState: State = {
  receipes: [],
};

export type Action = CreateReceipe;

export interface CreateReceipe {
  type: "CREATE_RECEIPE";
  receipe: Recipe;
}

export const createReceipe = (receipe: Recipe): CreateReceipe => ({
  type: "CREATE_RECEIPE",
  receipe,
});

export const reducer = (state: State = initialState, action: Action): State => {
  if (action.type === "CREATE_RECEIPE") {
    return {
      ...state,
      receipes: state.receipes.concat(action.receipe),
    };
  }

  return state;
};
