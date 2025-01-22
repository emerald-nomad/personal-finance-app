import clsx from "clsx";
import styles from "./summary.module.scss";
import { Divider } from "@/app/_components/Divider";

export function Summary() {
  return (
    <div className={clsx([styles["summary"]])}>
      <span className={clsx(["text-preset-3"])}>Summary</span>
      <div className={clsx([styles["texts"]])}>
        <SummaryRow title="Paid Bills" value="2($320.00)" />
        <Divider />
        <SummaryRow title="Total Upcomming" value="6($1,230.00)" />
        <Divider />
        <SummaryRow title="Due Soon" value="2($40.00)" color="red" />
      </div>
    </div>
  );
}

interface SummaryRowProps {
  title: string;
  value: string;
  color?: "grey" | "red";
}

function SummaryRow({ title, value, color = "grey" }: SummaryRowProps) {
  return (
    <div className={clsx([styles["summary-row"], styles[color]])}>
      <span className={clsx([styles["title"], "text-preset-5 "])}>{title}</span>
      <span className={clsx([styles["value"], "text-preset-5-bold"])}>
        {value}
      </span>
    </div>
  );
}
