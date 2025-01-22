import clsx from "clsx";
import { PageTitle } from "../_components/PageTitle";
import styles from "./recurring.module.scss";
import { TotalBills } from "./_components/TotalBills";
import { Summary } from "./_components/Summary";

export default function Page() {
  return (
    <>
      <PageTitle>Recurring Bills</PageTitle>
      <div className={clsx([styles["recurring"]])}>
        <div className={clsx([styles["left-side"]])}>
          <TotalBills />
          <Summary />
        </div>
        <div className={clsx([styles["right-side"]])}></div>
      </div>
    </>
  );
}
