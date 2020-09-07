import React from "react";

import * as style from "./button.style";
import { classes } from "typestyle";

const Button2: React.FC = () => {
  const [active, setActive] = React.useState(false);

  return (
    <button
      className={classes(style.component, active && style.active)}
      onClick={() => setActive(!active)}
    >
      {active ? "Active" : "Inactive"} Button
    </button>
  );
};

export default Button2;
