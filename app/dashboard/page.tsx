import { PageTitle } from "@/app/dashboard/_components/PageTitle";
import { Pots } from "./_components/Pots";
import { Summary } from "./_components/Summary";
import clsx from "clsx";
import styles from "./overview.module.scss";
import { Transactions } from "./_components/Transactions";

export default function Home() {
  return (
    <>
      <PageTitle>Overview</PageTitle>
      <Summary />
      <div className={clsx([styles["summary-content"]])}>
        <div className={clsx([styles["left-side"]])}>
          <Pots />
          <Transactions />
        </div>
        <div className={clsx([styles["right-side"]])}></div>
      </div>
    </>
  );
}
