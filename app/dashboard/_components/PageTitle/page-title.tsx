import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./page-title.module.scss";

export function PageTitle({ children }: PropsWithChildren) {
  return (
    <span className={clsx([styles["page-title"], "text-preset-1"])}>
      {children}
    </span>
  );
}
