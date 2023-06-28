import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
