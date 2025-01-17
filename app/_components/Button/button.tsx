import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import IconCaretDown from "@/images/icon-caret-down.svg";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "clear" | "tertiary" | "destroy";
  className?: string;
  as?: "link" | "buton";
  href?: string;
}

export function Button({
  children,
  color = "primary",
  className,
  as = "buton",
  href = "",
  ...props
}: ButtonProps) {
  return as == "buton" ? (
    <button
      className={clsx([
        styles.button,
        styles[color],
        color === "tertiary" || color === "clear"
          ? "text-preset-4"
          : "text-preset-4-bold",
        className,
      ])}
      {...props}
    >
      {children}
      {color === "tertiary" && <IconCaretDown />}
    </button>
  ) : (
    <Link
      className={clsx([
        styles.button,
        styles[color],
        color === "tertiary" ? "text-preset-4" : "text-preset-4-bold",
        className,
      ])}
      href={href as string}
    >
      {children}
      {color === "tertiary" && <IconCaretDown />}
    </Link>
  );
}
