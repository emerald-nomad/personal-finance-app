import clsx from "clsx";
import styles from "./budget-card.module.scss";
import { Title } from "./_ components/Title";
import { AmountBar } from "./_ components/AmountBar/amount-bar";
import {
  LatestSpending,
  LatestSpendingItemProps,
} from "./_ components/LatestSpending";

export interface BudgetCardProps {
  amountSpent: number;
  title: string;
  colorTag: "cyan" | "green" | "yellow" | "navy";
  maximumAmount: number;
  items: LatestSpendingItemProps[];
}

export function BudgetCard({
  amountSpent,
  colorTag,
  title,
  maximumAmount,
  items,
}: BudgetCardProps) {
  return (
    <div className={clsx([styles["budget-card"]])}>
      <Title colorTag={colorTag} title={title} />
      <AmountBar
        amountSpent={amountSpent}
        colorTag={colorTag}
        maximumAmount={maximumAmount}
      />
      <LatestSpending items={items} />
    </div>
  );
}
