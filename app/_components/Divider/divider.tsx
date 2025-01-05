import clsx from "clsx";
import styles from "./divider.module.scss";

export function Divider() {
  return <hr className={clsx([styles["divider"]])} />;
}
