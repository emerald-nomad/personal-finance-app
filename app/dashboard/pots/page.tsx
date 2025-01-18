import clsx from "clsx";
import { PageTitle } from "../_components/PageTitle";
import { AddNewPot } from "./_components/AddNewPot";
import styles from "./pots.module.scss";
import { Pot } from "./_components/Pot";

export default function Page() {
  return (
    <>
      <PageTitle>
        Pots <AddNewPot />
      </PageTitle>
      <ul className={clsx([styles["pots"]])}>
        <Pot />
      </ul>
    </>
  );
}
