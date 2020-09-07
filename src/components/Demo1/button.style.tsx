import { style as s } from "typestyle";

export interface StyleProps {
  theme?: "primary";
  color?: string;
}

export const getButtonStyle = (theme?: "primary", color?: string) => {
  return s({
    // $debugName: "WOOOO",
    borderRadius: 3,
    border: "2px solid palevioletred",
    padding: "0.25em 1em",
    background: theme === "primary" ? "palevioletred" : "cornflowerblue",
    color: color ? color : "white",
  });
};
