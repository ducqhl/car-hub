"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
}

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
