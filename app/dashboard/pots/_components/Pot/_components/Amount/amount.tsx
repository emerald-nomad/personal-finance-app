import clsx from "clsx";
import styles from "./amount.module.scss";

interface AmountProps {
  totalSaved: number;
  target: number;
  colorTag: "cyan" | "green" | "yellow" | "navy" | "purple";
}

export function Amount({ colorTag, target, totalSaved }: AmountProps) {
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
            style={{ width: percentToTotal }}
            className={clsx([styles["bar-fill"], styles[colorTag]])}
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
