import React from "react";

import * as style from "./button.style";

export interface ComponentProps extends style.StyleProps {
  onClick?: () => void;
}

const Button: React.FC<ComponentProps> = ({
  theme,
  color,
  onClick,
  children,
}) => {
  return (
    <button className={style.getButtonStyle(theme, color)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
