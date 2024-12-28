import clsx from "clsx";
import styles from "./summary.module.scss";

export function Summary() {
  return (
    <div className={clsx([styles["summary"]])}>
      <SummaryItem title="Current Balance" value="$4,836.00" dark />
      <SummaryItem title="Income" value="$3,814.25" />
      <SummaryItem title="Expenses" value="$1,700.50" />
    </div>
  );
}

interface SummaryItemProps {
  title: string;
  value: string;
  dark?: boolean;
}

function SummaryItem({ dark, title, value }: SummaryItemProps) {
  return (
    <div className={clsx([styles["summary-item"], dark && styles["dark"]])}>
      <span className={clsx([styles["title"], "text-preset-4"])}>{title}</span>
      <span className={clsx([styles["value"], "text-preset-1"])}>{value}</span>
    </div>
  );
}
