"use client";

import { Button } from "@/app/_components/Button";
import { Dialog } from "@/app/_components/Dialog";
import clsx from "clsx";
import { useState } from "react";
import styles from "./withdraw.module.scss";
import { Amount } from "./_components/Amount";
import { Input } from "@/app/_components/Input";

interface WithdrawProps {
  title: string;
  target: number;
  totalSaved: number;
}

export function Withdraw({ title, target, totalSaved }: WithdrawProps) {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }
  return (
    <>
      <Button color="secondary" onClick={toggleDialog}>
        Withdraw
      </Button>
      <Dialog
        title={`Withdraw from '${title}'`}
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
        open={open}
        setOpen={setOpen}
      >
        <form className={clsx([styles["form"]])} action="">
          <Amount target={target} totalSaved={totalSaved} />

          <Input id="amount" label="Amount to Withdraw" prefix="$" />

          <Button type="submit" className={clsx([styles["submit"]])}>
            Confirm Withdrawal
          </Button>
        </form>
      </Dialog>
    </>
  );
}
