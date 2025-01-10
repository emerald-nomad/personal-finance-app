import clsx from "clsx";
import styles from "./summary.module.scss";

export function Summary() {
  return (
    <div className={clsx([styles["summary"]])}>
      <span className={clsx(["text-preset-2"])}>Spending Summary</span>
      <div className={clsx([styles["summary-details"]])}>
        <SummaryDetail
          colorTag="cyan"
          title="Bills"
          currentAmount={250}
          maxAmount={750}
        />
        <SummaryDetail
          colorTag="yellow"
          title="Dining Out"
          currentAmount={67}
          maxAmount={75}
        />
        <SummaryDetail
          colorTag="navy"
          title="Personal Care"
          currentAmount={65}
          maxAmount={100}
        />
        <SummaryDetail
          colorTag="green"
          title="Entertainment"
          currentAmount={25}
          maxAmount={50}
        />
      </div>
    </div>
  );
}

interface SummaryDetailProps {
  colorTag: "cyan" | "yellow" | "green" | "navy";
  currentAmount: number;
  maxAmount: number;
  title: string;
}

function SummaryDetail({
  colorTag,
  currentAmount,
  maxAmount,
  title,
}: SummaryDetailProps) {
  return (
    <div className={clsx([styles["summary-detail"]])}>
      <div className={clsx([styles["summary-detail-title"]])}>
        <div className={clsx([styles["color-tag"], styles[colorTag]])} />
        <span className={clsx(["text-preset-4"])}>{title}</span>
      </div>
      <div className={clsx([styles["summary-detail-amount"]])}>
        <span className={clsx(["text-preset-3"])}>
          ${currentAmount.toFixed(2)}
        </span>
        <span className={clsx(["text-preset-5"])}>
          of ${maxAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
