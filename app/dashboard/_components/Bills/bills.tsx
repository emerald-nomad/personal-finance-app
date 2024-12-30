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
    </div>
  );
}
