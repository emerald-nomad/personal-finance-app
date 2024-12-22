import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import Image from "next/image";
import IconCaretDown from "@/images/icon-caret-down.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary" | "destroy";
}

export function Button({ children, color = "primary" }: ButtonProps) {
  return (
    <button
      className={clsx([
        styles.button,
        styles[color],
        color === "tertiary" ? "text-preset-4" : "text-preset-4-bold",
      ])}
    >
      {children}
      {color === "tertiary" && <IconCaretDown />}
    </button>
  );
}
