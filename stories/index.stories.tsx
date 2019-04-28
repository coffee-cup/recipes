import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Button from "../src/components/Button";
import NewRecipeForm from "../src/components/NewRecipeForm";
import Input from "../src/components/Input";

const infoParams = {
  info: {
    inline: true,
  },
};

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addParameters(infoParams)
  .add("base", () => <Button onClick={action("click")}>Base</Button>);

storiesOf("Input", module)
  .addDecorator(withInfo)
  .addParameters(infoParams)
  .add("empty", () => <Input value="" />);

storiesOf("Add Receipe", module)
  .addDecorator(withInfo)
  .addParameters(infoParams)
  .add("base", () => <NewRecipeForm onCreate={action("create")} />);
