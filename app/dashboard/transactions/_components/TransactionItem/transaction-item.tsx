import clsx from "clsx";
import styles from "./transaction-item.module.scss";
import Image from "next/image";

export interface TransactionItemProps {
  imgUrl: string;
  name: string;
  category: string;
  amount: number;
  date: string;
}

export function TransactionItem({
  name,
  category,
  imgUrl,
  amount,
  date,
}: TransactionItemProps) {
  return (
    <li className={clsx([styles["transaction-item"]])}>
      <div className={clsx([styles["metadata"]])}>
        <div className={clsx([styles["metadata-img"]])}>
          <Image src={imgUrl} alt={name} height={32} width={32} />
        </div>
        <div className={clsx([styles["metadata-text"]])}>
          <span
            className={clsx([styles["metadata-name"], "text-preset-4-bold"])}
          >
            {name}
          </span>
          <span
            className={clsx([styles["metadata-category"], "text-preset-5"])}
          >
            {category}
          </span>
        </div>
      </div>
      <div className={clsx([styles["data"]])}>
        <span
          className={clsx([
            styles["data-amount"],
            amount < 0 && styles["expense"],
            "text-preset-4-bold",
          ])}
        >
          {amount < 0 ? "-" : "+"}${Math.abs(amount).toFixed(2)}
        </span>
        <span className={clsx([styles["data-date"], "text-preset-5 "])}>
          {date}
        </span>
      </div>
    </li>
  );
}
