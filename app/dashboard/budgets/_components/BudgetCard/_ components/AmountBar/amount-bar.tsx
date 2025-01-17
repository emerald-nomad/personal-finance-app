import clsx from "clsx";
import styles from "./amount-bar.module.scss";

interface AmountBarProps {
  amountSpent: number;
  maximumAmount: number;
  colorTag: "cyan" | "green" | "yellow" | "navy";
}

export function AmountBar({
  amountSpent,
  colorTag,
  maximumAmount,
}: AmountBarProps) {
  return (
    <div className={clsx([styles["amount-bar"]])}>
      <span className={clsx([styles["maximum"], "text-preset-4 "])}>
        Maximum of ${maximumAmount.toFixed(2)}
      </span>
      <div className={clsx([styles["bar"]])}>
        <div
          style={{ width: `${(amountSpent / maximumAmount) * 100}%` }}
          className={clsx([styles["bar-fill"], styles[colorTag]])}
        />
      </div>
      <div className={clsx([styles["meta"]])}>
        <div className={clsx([styles["spent"]])}>
          <div
            className={clsx([styles["spent-color-tag"], styles[colorTag]])}
          />
          <MetaText title="Spent" value={amountSpent} />
        </div>
        <div className={clsx([styles["free"]])}>
          <div className={clsx([styles["free-color-tag"]])} />
          <MetaText title="Remaining" value={maximumAmount - amountSpent} />
        </div>
      </div>
    </div>
  );
}

interface MetaTextProps {
  title: string;
  value: number;
}

function MetaText({ title, value }: MetaTextProps) {
  return (
    <p className={clsx([styles["meta-text"]])}>
      <span className={clsx(["text-preset-5"])}>{title}</span>
      <span className={clsx(["text-preset-4-bold"])}>${value.toFixed(2)}</span>
    </p>
  );
}
