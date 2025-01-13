import clsx from "clsx";
import styles from "./budget-card.module.scss";
import ColorTagIcon from "@/images/icon-color-tag.svg";
import ElipsisIcon from "@/images/icon-ellipsis.svg";
import { Button } from "@/app/_components/Button";
import { Divider } from "@/app/_components/Divider";
import { JSX } from "react";

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

interface TitleProps {
  title: string;
  colorTag: "cyan" | "green" | "yellow" | "navy";
}

function Title({ colorTag, title }: TitleProps) {
  return (
    <div className={clsx([styles["title"]])}>
      <div className={clsx([styles[colorTag]])}>
        <ColorTagIcon />
        <span className={clsx(["text-preset-2"])}>{title}</span>
      </div>
      <ElipsisIcon />
    </div>
  );
}

interface AmountBarProps {
  amountSpent: number;
  maximumAmount: number;
  colorTag: "cyan" | "green" | "yellow" | "navy";
}

function AmountBar({ amountSpent, colorTag, maximumAmount }: AmountBarProps) {
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

interface LatestSpendingProps {
  items: LatestSpendingItemProps[];
}

function LatestSpending({ items }: LatestSpendingProps) {
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

interface LatestSpendingItemProps {
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
