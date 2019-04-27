import * as React from "react";
import { Title } from "../components/Text";
import Input from "../components/Input";
import styled from "../styled-components";
import { Receipe } from "../models";

const StyledFormContainer = styled.div``;

const NewReceipePage = () => {
  const [newRecipe, setNewRecipe] = React.useState<Receipe>({
    name: "",
    ingridents: "",
    method: "",
  });

  const setName = (name: string) =>
    setNewRecipe({
      ...newRecipe,
      name,
    });

  return (
    <div>
      <Title>New Receipe</Title>
      <StyledFormContainer>
        <form>
          <Input
            label="Name"
            value={newRecipe.name}
            placeholder="Something delicious"
            onChange={setName}
          />
        </form>
      </StyledFormContainer>
    </div>
  );
};

export default NewReceipePage;
