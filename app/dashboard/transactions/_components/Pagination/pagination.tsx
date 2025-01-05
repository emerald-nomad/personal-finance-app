import clsx from "clsx";
import styles from "./pagination.module.scss";
import CaretLeftIcon from "@/images/icon-caret-left.svg";
import CaretRightIcon from "@/images/icon-caret-right.svg";

export function Pagination() {
  return (
    <div className={clsx([styles["pagination"]])}>
      <button className={clsx([styles["nav-button"]])}>
        <CaretLeftIcon />
        <span className={clsx(["text-preset-4"])}>Prev</span>
      </button>
      <div className={clsx([styles["page-button-container"]])}>
        <button className={clsx([styles["page-button"], "text-preset-4 "])}>
          1
        </button>
        <button
          className={clsx([
            styles["page-button"],
            "text-preset-4 ",
            styles["active"],
          ])}
        >
          2
        </button>
        <button className={clsx([styles["page-button"], "text-preset-4 "])}>
          ...
        </button>
        <button className={clsx([styles["page-button"], "text-preset-4 "])}>
          5
        </button>
      </div>
      <button className={clsx([styles["nav-button"]])}>
        <span className={clsx(["text-preset-4"])}>Next</span>
        <CaretRightIcon />
      </button>
    </div>
  );
}
