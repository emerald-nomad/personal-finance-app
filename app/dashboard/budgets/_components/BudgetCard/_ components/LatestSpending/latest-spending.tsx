import clsx from "clsx";
import styles from "./latest-spending.module.scss";
import { JSX } from "react";
import { Divider } from "@/app/_components/Divider";
import { Button } from "@/app/_components/Button";

export interface LatestSpendingProps {
  items: LatestSpendingItemProps[];
}

export function LatestSpending({ items }: LatestSpendingProps) {
  function createItems() {
    const listItems: JSX.Element[] = [];

    items.forEach((item, index) => {
      if (index > 0) {
        listItems.push(<Divider key={item.title + "-" + index} />);
      }

      listItems.push(
        <LatestSpendingItem key={item.title + "-" + item.date} {...item} />
      );
    });

    return listItems;
  }
  return (
    <div className={clsx([styles["latest-spending"]])}>
      <p className={clsx([styles["title"]])}>
        <span className={clsx(["text-preset-3"])}>Latest Spending</span>
        <Button as="link" href="" color="tertiary">
          See All
        </Button>
      </p>
      <ul className={clsx([styles["latest-spending-list"]])}>
        {createItems()}
      </ul>
    </div>
  );
}

export interface LatestSpendingItemProps {
  title: string;
  value: number;
  date: string;
}

function LatestSpendingItem({ title, date, value }: LatestSpendingItemProps) {
  return (
    <div className={clsx([styles["latest-spending-list-item"]])}>
      <span className={clsx(["text-preset-5-bold"])}>{title}</span>
      <div className={clsx([styles["latest-spending-list-item-value"]])}>
        <span className={clsx(["text-preset-5-bold"])}>
          -${Math.abs(value).toFixed(2)}
        </span>
        <span className={clsx(["text-preset-5"])}>{date}</span>
      </div>
    </div>
  );
}
