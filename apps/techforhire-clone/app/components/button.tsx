"use client";
import { ComponentPropsWithoutRef } from "react";

type BtnProps = {
  text: string;
} & ComponentPropsWithoutRef<"button">;

const Button: React.FC<BtnProps> = ({ text, ...other }) => {
  return (
    <button className="btn" {...other}>
      {text}
    </button>
  );
};

export default Button;
