import * as React from "react";
import styled from "styled-components";
import { Receipe } from "../../models";
import { colours } from "../../styles";

export interface Props {
  onAdd: (receipe: Receipe) => any;
}

const StyledInput = styled.input`
  padding: 0.5rem;
  border: solid 1px ${colours.secondary};
  border-radius: 2px;

  appearance: none;
`;

const AddReceipe = (props: Props) => (
  <div>
    <StyledInput
      placeholder="Something Delicious"
      onKeyUp={(e: any) => {
        if (e.keyCode === 13) {
          const name: string = e.target.value;
          props.onAdd({ name, ingridents: [] });
          e.target.value = "";
        }
      }}
    />
  </div>
);

export default AddReceipe;
