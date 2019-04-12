import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Button from "../src/components/Button";
import AddReceipe from "../src/components/AddReceipe";

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add("base", () => <Button onClick={action("click")}>Base</Button>);

storiesOf("Add Receipe", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add("base", () => <AddReceipe onAdd={action("add receipe")} />);
