import clsx from "clsx";
import styles from "./total-bills.module.scss";
import RecurringBillsIcon from "@/images/icon-recurring-bills.svg";

export function TotalBills() {
  return (
    <div className={clsx([styles["total-bills"]])}>
      <RecurringBillsIcon />

      <div className={clsx([styles["text"]])}>
        <span className={clsx(["text-preset-4"])}>Total Bills</span>
        <span className={clsx(["text-preset-1"])}>$384.98</span>
      </div>
    </div>
  );
}
