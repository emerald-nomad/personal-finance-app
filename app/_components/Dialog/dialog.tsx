import {
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessDialog,
} from "@headlessui/react";
import clsx from "clsx";
import styles from "./dialog.module.scss";
import CloseIcon from "@/images/icon-close-modal.svg";
import { PropsWithChildren } from "react";

interface DialogProps extends PropsWithChildren {
  title: string;
  description?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Dialog({
  children,
  description,
  title,
  open,
  setOpen,
}: DialogProps) {
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

            {description && (
              <p className={clsx(["text-preset-4", styles["description"]])}>
                {description}
              </p>
            )}

            <section className={clsx([styles["children"]])}>{children}</section>
          </DialogPanel>
        </div>
      </div>
    </HeadlessDialog>
  );
}
