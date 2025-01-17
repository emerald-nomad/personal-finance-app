import clsx from "clsx";
import styles from "./title.module.scss";
import ColorTagIcon from "@/images/icon-color-tag.svg";
import { BudgetCardOptions } from "../BudgetCardOptions";

interface TitleProps {
  title: string;
  colorTag: "cyan" | "green" | "yellow" | "navy";
}

export function Title({ colorTag, title }: TitleProps) {
  return (
    <div className={clsx([styles["title"]])}>
      <div className={clsx([styles[colorTag]])}>
        <ColorTagIcon />
        <span className={clsx(["text-preset-2"])}>{title}</span>
      </div>
      <BudgetCardOptions />
    </div>
  );
}
