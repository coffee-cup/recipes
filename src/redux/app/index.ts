import { Receipe } from "../../models";

export interface State {
  receipes: Receipe[];
}

const initialState: State = {
  receipes: [],
};

export type Action = CreateReceipe;

export interface CreateReceipe {
  type: "CREATE_RECEIPE";
  receipe: Receipe;
}

export const createReceipe = (receipe: Receipe): CreateReceipe => ({
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
