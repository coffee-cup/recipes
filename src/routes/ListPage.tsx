import * as React from "react";
import { connect } from "react-redux";
import Link from "../components/Link";
import ReceipeComp from "../components/Receipe";
import { Title } from "../components/Text";
import { Recipe } from "../models";
import { State } from "../redux";

export interface Props {
  receipes: Recipe[];
}

const ListPage = (props: Props) => (
  <div>
    <Title>Receipes</Title>
    <Link to="/new">New Receipe</Link>
    {props.receipes.map((r, i) => (
      <ReceipeComp receipe={r} key={i} />
    ))}
  </div>
);

export default connect((state: State) => ({
  receipes: state.app.receipes,
}))(ListPage);
