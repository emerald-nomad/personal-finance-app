import { InputHTMLAttributes, JSX } from "react";
import styles from "./input.module.scss";
import clsx from "clsx";
import ColorTagIcon from "@/images/icon-color-tag.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  // type?: "text" | "select";
  helperText?: string;
  suffixIcon?: JSX.Element;
  colorTag?: "green" | "red";
}

export function Input({
  label,
  id,
  helperText,
  // type = "text",
  suffixIcon,
  prefix,
  colorTag,
  ...props
}: InputProps) {
  return (
    <div className={clsx([styles["container"]])}>
      <label
        htmlFor={id}
        className={clsx([styles["label"], "text-preset-5-bold"])}
      >
        {label}
      </label>
      <div className={clsx([styles["input-wrapper"]])}>
        {colorTag && (
          <ColorTagIcon
            className={clsx([styles["color-tag"], styles[colorTag]])}
          />
        )}
        {prefix && (
          <span className={clsx([styles["prefix"], "text-preset-4"])}>
            {prefix}
          </span>
        )}
        <input
          className={clsx([styles["input"], "text-preset-4"])}
          id={id}
          {...props}
        />
        {suffixIcon}
      </div>
      {helperText && (
        <span className={clsx([styles["helper-text"], "text-preset-5"])}>
          {helperText}
        </span>
      )}
    </div>
  );
}
