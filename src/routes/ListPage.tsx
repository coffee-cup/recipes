import * as React from "react";
import { connect } from "react-redux";
import ReceipeComp from "../components/Receipe";
import { Receipe } from "../models";
import { State } from "../redux";
import { Title } from "../components/Text";
import Link from "../components/Link";

export interface Props {
  receipes: Receipe[];
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
