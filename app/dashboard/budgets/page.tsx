"use client";

import { Button } from "@/app/_components/Button";
import { BudgetChart } from "@/app/_components/Chart";
import { PageTitle } from "../_components/PageTitle";
import styles from "./budgets.module.scss";
import clsx from "clsx";
import { Summary } from "./_components/Summary";
import { BudgetCard, BudgetCardProps } from "./_components/BudgetCard";
import { Dialog } from "@/app/_components/Dialog";

const budgetCards: BudgetCardProps[] = [
  {
    title: "Entertainment",
    colorTag: "green",
    amountSpent: 25,
    maximumAmount: 50,
    items: [
      {
        title: "Papa Software",
        value: -10,
        date: "16 Aug 2024",
      },
      {
        title: "Quebec Services",
        value: -5,
        date: "12 Aug 2024",
      },
      {
        title: "Romeo Cloud Service",
        value: -10,
        date: "5 Aug 2024",
      },
    ],
  },
  {
    title: "Bills",
    colorTag: "cyan",
    amountSpent: 250,
    maximumAmount: 750,
    items: [
      {
        title: "Charlie Electric Company",
        value: -100,
        date: "1 Aug 2024",
      },
      {
        title: "Foxtrot Waterline",
        value: -100,
        date: "1 Aug 2024",
      },
      {
        title: "Tango Gas Company",
        value: -50,
        date: "1 Aug 2024",
      },
    ],
  },
  {
    title: "Dining Out",
    colorTag: "yellow",
    amountSpent: 675,
    maximumAmount: 750,
    items: [
      {
        title: "Lima Dining House",
        value: -30,
        date: "21 Aug 2024",
      },
      {
        title: "Yuna Kim",
        value: -21.5,
        date: "20 Aug 2024",
      },
      {
        title: "Juliet Restaurant",
        value: -15.5,
        date: "12 Aug 2024",
      },
    ],
  },
  {
    title: "Personal Care",
    colorTag: "navy",
    amountSpent: 65,
    maximumAmount: 100,
    items: [
      {
        title: "Bravo Zen Spa",
        value: -25,
        date: "29 Aug 2024",
      },
      {
        title: "Sofia Peterson",
        value: -15,
        date: "15 Aug 2024",
      },
      {
        title: "Bravo Zen Spa",
        value: -25,
        date: "13 Aug 2024",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* <Dialog open setOpen={() => {}} /> */}
      <PageTitle>
        Budgets <Button>+ Add New Budget</Button>
      </PageTitle>
      <div className={clsx([styles["content"]])}>
        <section className={clsx([styles["left-side"]])}>
          <div className={clsx([styles["chart-container"]])}>
            <BudgetChart id="budget-chart" />
          </div>
          <Summary />
        </section>
        <section className={clsx([styles["right-side"]])}>
          {budgetCards.map((budgetCard) => (
            <BudgetCard
              key={budgetCard.title + "-" + budgetCard.maximumAmount}
              {...budgetCard}
            />
          ))}
        </section>
      </div>
    </>
  );
}
