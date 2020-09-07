import React from "react";

import * as style from "./container.style";

const Container: React.FC = ({ children }) => {
  return <div className={style.component}>{children}</div>;
};

export default Container;
