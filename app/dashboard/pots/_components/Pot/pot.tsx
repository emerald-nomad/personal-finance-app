import clsx from "clsx";

import styles from "./pot.module.scss";
import { Title } from "./_components/Title";
import { AddMoney } from "../AddMoney";
import { Withdraw } from "../Withdraw/withdraw";
import { Amount } from "./_components/Amount";

export function Pot() {
  return (
    <div className={clsx([styles["pot"]])}>
      <Title colorTag="green" title="Savings" />
      <Amount />
      <div className={clsx([styles["button-group"]])}>
        <AddMoney />
        <Withdraw />
      </div>
    </div>
  );
}
