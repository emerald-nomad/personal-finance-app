"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ElipsisIcon from "@/images/icon-ellipsis.svg";
import clsx from "clsx";
import styles from "./budget-card-options.module.scss";
import { Divider } from "@/app/_components/Divider";
import { useState } from "react";
import { Dialog } from "@/app/_components/Dialog";
import { Input } from "@/app/_components/Input";
import { Select } from "@/app/_components/Select";
import { Button } from "@/app/_components/Button";
import ColorTagIcon from "@/images/icon-color-tag.svg";

export function BudgetCardOptions() {
  const [editBudgetOpen, setEditBudgetOpen] = useState(false);

  function toggleDialog() {
    setEditBudgetOpen(!editBudgetOpen);
  }

  return (
    <>
      <Menu as="div" className={clsx([styles["container"]])}>
        <MenuButton>
          <ElipsisIcon />
        </MenuButton>
        <MenuItems className={clsx(styles["items"])}>
          <EditBudgetButton toggleDialog={toggleDialog} />
          <Divider />
          <DeleteBudget />
        </MenuItems>
      </Menu>
      <EditBudgetForm open={editBudgetOpen} setOpen={setEditBudgetOpen} />
    </>
  );
}

interface EditBudgetButtonProps {
  toggleDialog: () => void;
}

function EditBudgetButton({ toggleDialog }: EditBudgetButtonProps) {
  return (
    <>
      <MenuItem>
        <button onClick={toggleDialog} className="text-preset-4">
          Edit Budget
        </button>
      </MenuItem>
    </>
  );
}

interface EditBudgetFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function EditBudgetForm({ open, setOpen }: EditBudgetFormProps) {
  return (
    <Dialog
      title="Edit Budget"
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
        <Select
          label="Color Tag"
          buttonClassname={clsx([styles["select-input"]])}
          prefix={<ColorTagIcon />}
          options={[{ name: "Green", value: "green" }]}
        />
        <Button className={clsx([styles["submit"]])}>Save Changes</Button>
      </form>
    </Dialog>
  );
}

function DeleteBudget() {
  return (
    <MenuItem>
      <button className="text-preset-4">Delete Budget</button>
    </MenuItem>
  );
}
