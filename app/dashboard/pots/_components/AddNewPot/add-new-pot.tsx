"use client";

import { Button } from "@/app/_components/Button";
import { Dialog } from "@/app/_components/Dialog";
import clsx from "clsx";
import { useState } from "react";
import styles from "./add-new-pot.module.scss";
import { Input } from "@/app/_components/Input";
import { ColorTagSelect } from "@/app/_components/ColorTagSelect";

export function AddNewPot() {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <>
      <Button onClick={toggleDialog}>+ Add New Pot</Button>
      <Dialog
        title="Add New Pot"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
        open={open}
        setOpen={setOpen}
      >
        <form className={clsx([styles["form"]])} action="">
          <Input
            id="pot-name"
            label="Pot Name"
            placeholder="e.g. Rainy Days"
            helperText="0 of 30 characters left"
          />
          <Input
            id="target"
            label="Target"
            prefix="$"
            placeholder="e.g. 2000"
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
            Add Pot
          </Button>
        </form>
      </Dialog>
    </>
  );
}
