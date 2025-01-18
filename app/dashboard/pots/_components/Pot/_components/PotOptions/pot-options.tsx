"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ElipsisIcon from "@/images/icon-ellipsis.svg";
import ColorTagIcon from "@/images/icon-color-tag.svg";
import styles from "./pot-options.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { Divider } from "@/app/_components/Divider";
import { Dialog } from "@/app/_components/Dialog";
import { Input } from "@/app/_components/Input";
import { Select } from "@/app/_components/Select";
import { Button } from "@/app/_components/Button";

export function PotOptions() {
  const [editPotOpen, setEditPotOpen] = useState(false);
  const [deletePotOpen, setDeletePotOpen] = useState(false);

  function toggleEditPotDialog() {
    setEditPotOpen(!editPotOpen);
  }
  function toggleDeletePotDialog() {
    setDeletePotOpen(!deletePotOpen);
  }

  return (
    <>
      <Menu as="div" className={clsx([styles["container"]])}>
        <MenuButton>
          <ElipsisIcon />
        </MenuButton>
        <MenuItems className={clsx(styles["items"])}>
          <EditPotButton toggleDialog={toggleEditPotDialog} />
          <Divider />
          <DeletePotButton toggleDialog={toggleDeletePotDialog} />
        </MenuItems>
      </Menu>
      <EditPotForm open={editPotOpen} setOpen={setEditPotOpen} />
      <DeletePotForm open={deletePotOpen} setOpen={setDeletePotOpen} />
    </>
  );
}

interface EditPotButtonProps {
  toggleDialog: () => void;
}

function EditPotButton({ toggleDialog }: EditPotButtonProps) {
  return (
    <>
      <MenuItem>
        <button onClick={toggleDialog} className="text-preset-4">
          Edit Pot
        </button>
      </MenuItem>
    </>
  );
}

interface EditPotFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function EditPotForm({ open, setOpen }: EditPotFormProps) {
  return (
    <Dialog
      title="Edit Pot"
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      open={open}
      setOpen={setOpen}
    >
      <form className={clsx([styles["form"]])} action="">
        <Input
          id="pot-name"
          label="Pot Name"
          helperText="0 of 30 characters left"
        />
        <Input id="target" label="Target" type="number" prefix="$" />
        <Select
          label="Color Tag"
          buttonClassname={clsx([styles["select-input"]])}
          prefix={<ColorTagIcon />}
          options={[{ name: "Green", value: "green" }]}
        />
        <Button type="submit" className={clsx([styles["submit"]])}>
          Save Changes
        </Button>
      </form>
    </Dialog>
  );
}

interface DeletePotButtonProps {
  toggleDialog: () => void;
}

function DeletePotButton({ toggleDialog }: DeletePotButtonProps) {
  return (
    <MenuItem>
      <button className="text-preset-4" onClick={toggleDialog}>
        Delete Pot
      </button>
    </MenuItem>
  );
}

interface DeletePotFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function DeletePotForm({ open, setOpen }: DeletePotFormProps) {
  return (
    <Dialog
      title='Delete "Savings"?'
      description="Are you sure you want to delete this Pot? This action cannot be reversed, and all the data inside it will be removed forever."
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
