import clsx from "clsx";
import styles from "./budgets.module.scss";
import { Button } from "@/app/_components/Button";
import { BudgetChart } from "@/app/_components/Chart";

export function Budgets() {
  return (
    <div className={clsx([styles["budgets-container"]])}>
      <div className={clsx([styles["title"]])}>
        <span className={clsx(["text-preset-2"])}>Budgets</span>
        <Button as="link" href="/dashboard/recurring" color="tertiary">
          See Details
        </Button>
      </div>
      <div className={clsx([styles["content"]])}>
        <div className={clsx([styles["chart"]])}>
          <BudgetChart id="overview-budget-chart" />
        </div>
        <div className={clsx([styles["budgets"]])}>
          <BudgetMicro title="Entertainment" amount={50} colorTag="green" />
          <BudgetMicro title="Bills" amount={750} colorTag="cyan" />
          <BudgetMicro title="Dining OUt" amount={75} colorTag="yellow" />
          <BudgetMicro title="Personal Care" amount={100} colorTag="navy" />
        </div>
      </div>
    </div>
  );
}

interface BudgetMicroProps {
  title: string;
  amount: number;
  colorTag: "green" | "cyan" | "yellow" | "navy";
}

function BudgetMicro({ title, amount, colorTag }: BudgetMicroProps) {
  return (
    <div className={clsx([styles["budget-micro"]])}>
      <div className={clsx([styles["color-tag"], styles[colorTag]])}></div>
      <div className={clsx([styles["text"]])}>
        <span className={clsx(["text-preset-5"])}>{title}</span>
        <span className={clsx(["text-preset-4-bold"])}>
          ${amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
