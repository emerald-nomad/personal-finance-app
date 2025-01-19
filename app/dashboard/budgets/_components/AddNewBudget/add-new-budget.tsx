"use client";

import { Button } from "@/app/_components/Button";
import { Dialog } from "@/app/_components/Dialog";
import { useState } from "react";
import styles from "./add-new-budget.module.scss";
import clsx from "clsx";
import { Select } from "@/app/_components/Select";
import { Input } from "@/app/_components/Input";
import { ColorTagSelect } from "@/app/_components/ColorTagSelect";

export function AddNewBudget() {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <>
      <Button onClick={toggleDialog}>+ Add New Budget</Button>
      <Dialog
        title="Add New Budget"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
        open={open}
        setOpen={setOpen}
      >
        <form className={clsx([styles["form"]])} action="">
          <Select
            label="Budget Category"
            buttonClassname={clsx([styles["select-input"]])}
            options={[
              { name: "Entertainment", value: "entertainment" },
              { name: "Bills", value: "bills" },
            ]}
          />
          <Input
            id="max-spending"
            label="Maximum Spending"
            prefix="$"
            type="number"
            defaultValue={0}
          />
          <ColorTagSelect
            buttonClassname={clsx([styles["select-input"]])}
            options={[
              { name: "Green", value: "green" },
              { name: "Yellow", value: "yellow", inUse: true },
              { name: "Cyan", value: "cyan" },
              { name: "Navy", value: "navy", inUse: true },
              { name: "Red", value: "red", inUse: true },
              { name: "Purple", value: "purple" },
              { name: "Turquoise", value: "turquoise" },
            ]}
          />
          <Button type="submit" className={clsx([styles["submit"]])}>
            Save Changes
          </Button>
        </form>
      </Dialog>
    </>
  );
}
