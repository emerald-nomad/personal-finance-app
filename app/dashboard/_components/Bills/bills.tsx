import clsx from "clsx";
import styles from "./bills.module.scss";
import { Button } from "@/app/_components/Button";

export function Bills() {
  return (
    <div className={clsx([styles["bills"]])}>
      <div className={clsx([styles["title"]])}>
        <span className={clsx(["text-preset-2"])}>Recurring Bills</span>
        <Button as="link" href="/dashboard/recurring" color="tertiary">
          See Details
        </Button>
      </div>
      <div className={clsx([styles["content"]])}>
        <BillType name="Paid Bills" value={190} color="green" />
        <BillType name="Total Upcoming" value={194.98} color="yellow" />
        <BillType name="Coming Soon" value={59.98} color="cyan" />
      </div>
    </div>
  );
}

interface BillTypeProps {
  color: "green" | "yellow" | "cyan";
  name: string;
  value: number;
}

export function BillType({ name, value, color }: BillTypeProps) {
  return (
    <div className={clsx([styles["bill-type"], styles[color]])}>
      <span className={clsx([styles["name"], "text-preset-4"])}>{name}</span>
      <span className={clsx([styles["value"], "text-preset-4-bold"])}>
        ${value.toFixed(2)}
      </span>
    </div>
  );
}
