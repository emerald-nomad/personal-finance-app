import { Button } from "@/app/_components/Button";
import { BudgetChart } from "@/app/_components/Chart";
import { PageTitle } from "../_components/PageTitle";
import styles from "./budgets.module.scss";
import clsx from "clsx";
import { Summary } from "./_components/Summary";

export default function Page() {
  return (
    <>
      <PageTitle>
        Budgets <Button>+ Add New Budget</Button>
      </PageTitle>
      <section className={clsx([styles["left-side"]])}>
        <BudgetChart id="budget-chart" />
        <Summary />
      </section>
      <section className={clsx([styles["right-side"]])}></section>
    </>
  );
}
