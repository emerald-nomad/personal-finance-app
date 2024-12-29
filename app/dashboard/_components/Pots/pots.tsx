import clsx from "clsx";
import styles from "./pots.module.scss";
import { Button } from "@/app/_components/Button";
import PotIcon from "@/images/icon-pot.svg";

export function Pots() {
  return (
    <div className={clsx([styles["pots"]])}>
      <div className={clsx([styles["heading"]])}>
        <span className={clsx(["text-preset-2"])}>Pots</span>
        <Button as="link" href="/dashboard/pots" color="tertiary">
          See Details
        </Button>
      </div>
      <div className={clsx([styles["content"]])}>
        <div className={clsx([styles["total-saved"]])}>
          <PotIcon />
          <div className={clsx([styles["total-saved-amount"]])}>
            <span className={clsx(["text-preset-4", styles["title"]])}>
              Total Saved
            </span>
            <span className={clsx(["text-preset-1", styles["value"]])}>
              $850
            </span>
          </div>
        </div>
        <div className={clsx([styles["savings"]])}>
          <SavingsMicro title="Savings" value="$149" color="green" />
          <SavingsMicro title="Gift" value="$40" color="cyan" />
          <SavingsMicro title="Concert Tickets" value="$110" color="navy" />
          <SavingsMicro title="New Laptop" value="$10" color="yellow" />
        </div>
      </div>
    </div>
  );
}

interface SavingsMicroProps {
  title: string;
  value: string;
  color: "green" | "cyan" | "navy" | "yellow";
}

function SavingsMicro({ title, value, color }: SavingsMicroProps) {
  return (
    <div className={clsx([styles["savings-micro"], styles[color]])}>
      <span className={clsx(["text-preset-5"])}>{title}</span>
      <span className={clsx(["text-preset-4-bold"])}>{value}</span>
    </div>
  );
}
