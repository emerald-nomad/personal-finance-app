"use client";

import { Button } from "@/app/_components/Button";
import { Dialog } from "@/app/_components/Dialog";
import clsx from "clsx";
import { useState } from "react";
import styles from "./add-money.module.scss";
import { Input } from "@/app/_components/Input";
import { Amount } from "./_components/Amount";

interface AddMoneyProps {
  target: number;
  totalSaved: number;
}

export function AddMoney({ target, totalSaved }: AddMoneyProps) {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <>
      <Button color="secondary" onClick={toggleDialog}>
        + Add Money
      </Button>
      <Dialog
        title="Add to Pot"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
        open={open}
        setOpen={setOpen}
      >
        <form className={clsx([styles["form"]])} action="">
          <Amount target={target} totalSaved={totalSaved} />

          <Input id="amount" label="Amount to Add" prefix="$" />

          <Button type="submit" className={clsx([styles["submit"]])}>
            Confirm Addition
          </Button>
        </form>
      </Dialog>
    </>
  );
}
