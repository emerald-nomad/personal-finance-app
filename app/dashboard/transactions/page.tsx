import clsx from "clsx";
import { PageTitle } from "../_components/PageTitle";
import styles from "./transactions.module.scss";
import { Input } from "@/app/_components/Input";
import SearchIcon from "@/images/icon-search.svg";
import SortIcon from "@/images/icon-sort-mobile.svg";
import FilterIcon from "@/images/icon-filter-mobile.svg";
import { Select } from "@/app/_components/Select";

export default function Page() {
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
      </div>
    </>
  );
}
