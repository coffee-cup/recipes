import * as React from "react";
import { Recipe } from "../../models";

export interface Props {
  receipe: Recipe;
}

const Receipe = ({ receipe }: Props) => (
  <div>
    <h1>{receipe.name}</h1>
  </div>
);

export default Recipe;
