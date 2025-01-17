"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ElipsisIcon from "@/images/icon-ellipsis.svg";
import clsx from "clsx";
import styles from "./budget-card-options.module.scss";
import { Divider } from "@/app/_components/Divider";
import { useState } from "react";
import { Dialog } from "@/app/_components/Dialog";

export function BudgetCardOptions() {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <>
      <Menu as="div" className={clsx([styles["container"]])}>
        <MenuButton>
          <ElipsisIcon />
        </MenuButton>
        <MenuItems className={clsx(styles["items"])}>
          <EditBudget toggleDialog={toggleDialog} />
          <Divider />
          <DeleteBudget />
        </MenuItems>
      </Menu>
      <Dialog title="Edit Budget" open={open} setOpen={setOpen} />
    </>
  );
}

interface EditButtonProps {
  toggleDialog: () => void;
}

function EditBudget({ toggleDialog }: EditButtonProps) {
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

function DeleteBudget() {
  return (
    <MenuItem>
      <button className="text-preset-4">Delete Budget</button>
    </MenuItem>
  );
}
