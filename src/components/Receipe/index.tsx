import * as React from "react";
import { Receipe } from "../../models";

export interface Props {
  receipe: Receipe;
}

const Receipe = ({ receipe }: Props) => (
  <div>
    <h1>{receipe.name}</h1>
  </div>
);

export default Receipe;
