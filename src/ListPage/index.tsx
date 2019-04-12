import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Receipe } from "../models";
import ReceipeComp from "../components/Receipe";
import AddReceipe from "../components/AddReceipe";
import Button from "../components/Button";
import { State } from "../redux";
import { createReceipe } from "../redux/app";

export interface Props {
  receipes: Receipe[];
  onAdd: (receipe: Receipe) => any;
}

const ListPage = (props: Props) => (
  <div>
    <h1>Receipes</h1>
    <Button>I am a button.</Button>
    <AddReceipe onAdd={props.onAdd} />
    {props.receipes.map((r, i) => (
      <ReceipeComp receipe={r} key={i} />
    ))}
  </div>
);

export default connect(
  (state: State) => ({
    receipes: state.app.receipes,
  }),
  (dispatch: Dispatch) => ({
    onAdd: (receipe: Receipe) => dispatch(createReceipe(receipe)),
  }),
)(ListPage);
