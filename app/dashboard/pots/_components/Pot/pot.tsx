import clsx from "clsx";

import styles from "./pot.module.scss";
import { Title } from "./_components/Title";
import { AddMoney } from "../AddMoney";
import { Withdraw } from "../Withdraw/withdraw";
import { Amount } from "./_components/Amount";

export interface PotProps {
  title: string;
  colorTag: "cyan" | "green" | "yellow" | "navy" | "purple";
  target: number;
  totalSaved: number;
}

export function Pot({ colorTag, title, target, totalSaved }: PotProps) {
  return (
    <div className={clsx([styles["pot"]])}>
      <Title colorTag={colorTag} title={title} />
      <Amount colorTag={colorTag} target={target} totalSaved={totalSaved} />
      <div className={clsx([styles["button-group"]])}>
        <AddMoney target={target} totalSaved={totalSaved} />
        <Withdraw />
      </div>
    </div>
  );
}
