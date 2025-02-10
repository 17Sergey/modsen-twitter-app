import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  disabled?: boolean;
}
