import clsx from "clsx";
import { PageTitle } from "../_components/PageTitle";
import { Divider } from "@/app/_components/Divider";
import styles from "./transactions.module.scss";
import { Input } from "@/app/_components/Input";
import SearchIcon from "@/images/icon-search.svg";
import SortIcon from "@/images/icon-sort-mobile.svg";
import FilterIcon from "@/images/icon-filter-mobile.svg";
import { Select } from "@/app/_components/Select";
import {
  TransactionItem,
  TransactionItemProps,
} from "./_components/TransactionItem";
import { JSX } from "react";

const transactionItems: TransactionItemProps[] = [
  {
    imgUrl: "/images/avatars/bravo-zen-spa.jpg",
    name: "Bravo Zen Spa",
    category: "Personal Care",
    amount: -25,
    date: "29 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/alpha-analytics.jpg",
    name: "Alpha Analytics",
    category: "General",
    amount: 450,
    date: "27 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/echo-game-store.jpg",
    name: "Echo Game Store",
    category: "Lifestyle",
    amount: -21.5,
    date: "22 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/bravo-zen-spa.jpg",
    name: "Food Merchant",
    category: "General",
    amount: -21.5,
    date: "20 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/delta-taxi.jpg",
    name: "Delta Taxi",
    category: "Transportation",
    amount: -15.5,
    date: "19 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/delta-taxi.jpg",
    name: "Online Shop",
    category: "General",
    amount: -15,
    date: "15 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/bravo-zen-spa.jpg",
    name: "Bravo Zen Spa",
    category: "Personal Care",
    amount: -25,
    date: "13 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/bravo-zen-spa.jpg",
    name: "Liam Hughes",
    category: "General",
    amount: -10,
    date: "5 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/alpha-analytics.jpg",
    name: "Alpha Analytics",
    category: "General",
    amount: 1900,
    date: "3 Aug 2024",
  },
  {
    imgUrl: "/images/avatars/charlie-electric-company.jpg",
    name: "Charlie Electric Compnay",
    category: "Bills",
    amount: -100,
    date: "1 Aug 2024",
  },
];

export default function Page() {
  function createListItems() {
    const items: JSX.Element[] = [];

    transactionItems.forEach((item, index) => {
      if (index > 0) {
        items.push(<Divider key={item.name + "-" + index} />);
      }

      items.push(<TransactionItem key={index} {...item} />);
    });

    return items;
  }
  return (
    <>
      <PageTitle>Transactions</PageTitle>
      <div className={clsx([styles["content"]])}>
        <div className={clsx([styles["input-group"]])}>
          <Input
            id="search"
            placeholder="Search transactions"
            suffixIcon={<SearchIcon />}
            containerClassname={clsx([styles["search"]])}
          />
          <div className={clsx([styles["filters"]])}>
            <div className={clsx([styles["filters-icon"]])}>
              <SortIcon />
            </div>
            <div className={clsx([styles["filters-icon"]])}>
              <FilterIcon />
            </div>
            <div className={clsx([styles["filters-input"]])}>
              <span className={clsx(["text-preset-4"])}>Sort By</span>
              <Select
                buttonClassname={clsx([styles["sort-by-select"]])}
                options={[
                  { name: "Latest", value: "latest" },
                  { name: "Oldest", value: "oldest" },
                  { name: "A to Z", value: "desc" },
                ]}
              />
            </div>
            <div className={clsx([styles["filters-input"]])}>
              <span className={clsx(["text-preset-4"])}>Category</span>
              <Select
                buttonClassname={clsx([styles["category-select"]])}
                options={[
                  { name: "All Transactions", value: "all" },
                  { name: "Entertainment", value: "entertainment" },
                  { name: "Bills", value: "bills" },
                ]}
              />
            </div>
          </div>
        </div>
        <ul className={clsx([styles["transactions-list"]])}>
          {createListItems()}
        </ul>
      </div>
    </>
  );
}
