import clsx from "clsx";
import { PageTitle } from "../_components/PageTitle";
import { AddNewPot } from "./_components/AddNewPot";
import styles from "./pots.module.scss";
import { Pot, PotProps } from "./_components/Pot";

const pots: PotProps[] = [
  {
    title: "Savings",
    colorTag: "green",
    totalSaved: 159,
    target: 2000,
  },
  {
    title: "Concert Ticket",
    colorTag: "navy",
    totalSaved: 110,
    target: 150,
  },
  {
    title: "Gift",
    colorTag: "cyan",
    totalSaved: 40,
    target: 60,
  },
  {
    title: "New Laptop",
    colorTag: "yellow",
    totalSaved: 10,
    target: 1000,
  },
  {
    title: "Holiday",
    colorTag: "purple",
    totalSaved: 531,
    target: 1440,
  },
];

export default function Page() {
  return (
    <>
      <PageTitle>
        Pots <AddNewPot />
      </PageTitle>
      <ul className={clsx([styles["pots"]])}>
        {pots.map((p) => (
          <Pot key={p.title} {...p} />
        ))}
      </ul>
    </>
  );
}
