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
  const [deleteBudgetOpen, setDeleteBudgetOpen] = useState(false);

  function toggleEditBudgetDialog() {
    setEditBudgetOpen(!editBudgetOpen);
  }
  function toggleDeleteBudgetDialog() {
    setDeleteBudgetOpen(!deleteBudgetOpen);
  }

  return (
    <>
      <Menu as="div" className={clsx([styles["container"]])}>
        <MenuButton>
          <ElipsisIcon />
        </MenuButton>
        <MenuItems className={clsx(styles["items"])}>
          <EditBudgetButton toggleDialog={toggleEditBudgetDialog} />
          <Divider />
          <DeleteBudgetButton toggleDialog={toggleDeleteBudgetDialog} />
        </MenuItems>
      </Menu>
      <EditBudgetForm open={editBudgetOpen} setOpen={setEditBudgetOpen} />
      <DeleteBudgetForm open={deleteBudgetOpen} setOpen={setDeleteBudgetOpen} />
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

interface DeleteBudgetButtonProps {
  toggleDialog: () => void;
}

function DeleteBudgetButton({ toggleDialog }: DeleteBudgetButtonProps) {
  return (
    <MenuItem>
      <button className="text-preset-4" onClick={toggleDialog}>
        Delete Budget
      </button>
    </MenuItem>
  );
}

interface DeleteBudgetFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function DeleteBudgetForm({ open, setOpen }: DeleteBudgetFormProps) {
  return (
    <Dialog
      title="Delete Budget"
      description="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
      open={open}
      setOpen={setOpen}
    >
      <div className={clsx([styles["form"]])}>
        <Button color="destroy" className={clsx([styles["submit"]])}>
          Yes, Confirm Deletion
        </Button>
        <Button
          color="clear"
          onClick={() => setOpen(false)}
          className={clsx([styles["submit"]])}
        >
          No, I want to go back
        </Button>
      </div>
    </Dialog>
  );
}
