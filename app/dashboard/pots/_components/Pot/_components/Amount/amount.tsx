import clsx from "clsx";
import styles from "./amount.module.scss";

export function Amount() {
  return (
    <div className={clsx([styles["amount"]])}>
      <div className={clsx([styles["total"]])}>
        <span className={clsx(["text-preset-4"])}>Total Saved</span>
        <span className={clsx(["text-preset-1"])}>$159.00</span>
      </div>
      <div className={clsx([styles["target-bar"]])}>
        <div className={clsx([styles["bar"]])}>
          <div
            style={{ width: `7.95%` }}
            className={clsx([styles["bar-fill"], styles["green"]])}
          />
        </div>
        <div className={clsx([styles["target-text"]])}>
          <span className={clsx(["text-preset-5-bold"])}>7.95%</span>
          <span className={clsx(["text-preset-5"])}>Target of $2000</span>
        </div>
      </div>
    </div>
  );
}
