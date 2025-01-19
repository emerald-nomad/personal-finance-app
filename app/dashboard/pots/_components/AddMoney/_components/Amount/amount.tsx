import clsx from "clsx";
import styles from "./amount.module.scss";

interface AmountProps {
  target: number;
  totalSaved: number;
}

export function Amount({ target, totalSaved }: AmountProps) {
  const percentToTotal = ((totalSaved / target) * 100).toFixed(2) + "%";

  return (
    <div className={clsx([styles["amount"]])}>
      <div className={clsx([styles["total"]])}>
        <span className={clsx(["text-preset-4"])}>Total Saved</span>
        <span className={clsx(["text-preset-1"])}>
          ${totalSaved.toFixed(2)}
        </span>
      </div>
      <div className={clsx([styles["target-bar"]])}>
        <div className={clsx([styles["bar"]])}>
          <div
            style={{ width: `calc(${percentToTotal} - 1px)` }}
            className={clsx([styles["bar-fill"]])}
          />
          <div
            style={{ width: `calc(${percentToTotal} - 1px)` }}
            className={clsx([styles["bar-add"]])}
          />
        </div>
        <div className={clsx([styles["target-text"]])}>
          <span className={clsx(["text-preset-5-bold"])}>{percentToTotal}</span>
          <span className={clsx(["text-preset-5"])}>
            Target of ${target.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
