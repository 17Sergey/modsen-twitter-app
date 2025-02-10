import { ComponentProps, PropsWithChildren } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  disabled?: boolean;
}
