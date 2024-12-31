import styles from "./select.module.scss";
import clsx from "clsx";
import ArrowDownIcon from "@/images/icon-caret-down.svg";
import { InputHTMLAttributes } from "react";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {}

export function Select({ children }: SelectProps) {
  return (
    <div className={clsx([styles["container"]])}>
      <select
        className={clsx([styles["select"], "text-preset-4"])}
        name="status"
        aria-label="Project status"
      >
        {children}
      </select>
      <div className={clsx([styles["icon"]])}>
        <ArrowDownIcon />
      </div>
    </div>
  );
}
