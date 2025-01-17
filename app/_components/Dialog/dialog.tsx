import {
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessDialog,
} from "@headlessui/react";
import clsx from "clsx";
import styles from "./dialog.module.scss";
import CloseIcon from "@/images/icon-close-modal.svg";

interface DialogProps {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Dialog({ title, open, setOpen }: DialogProps) {
  return (
    <HeadlessDialog
      open={open}
      onClose={setOpen}
      className={clsx([styles["dialog"]])}
    >
      <DialogBackdrop className={clsx([styles["backdrop"]])} />
      <div className={clsx([styles["container"]])}>
        <div className={clsx([styles["content-wrapper"]])}>
          <DialogPanel className={clsx([styles["content"]])}>
            <DialogTitle
              as="h3"
              className={clsx([styles["title"], "text-preset-2"])}
            >
              {title}
              <CloseIcon onClick={() => setOpen(false)} />
            </DialogTitle>
          </DialogPanel>
        </div>
      </div>
    </HeadlessDialog>
  );
}
