import clsx from "clsx";

import styles from "./pot.module.scss";
import { Title } from "./_components/Title";

export function Pot() {
  return (
    <div className={clsx([styles["pot"]])}>
      <Title colorTag="green" title="Savings" />
    </div>
  );
}
