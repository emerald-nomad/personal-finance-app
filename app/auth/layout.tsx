import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./auth-layout.module.scss";
import LogoLarge from "@/images/logo-large.svg";

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={clsx([styles["container"]])}>
      <section className={clsx([styles["illustration-container"]])}>
        <div className={clsx([styles["illustration"]])}>
          <LogoLarge />
          <div className={clsx([styles["spending-summary"]])}>
            <p className={clsx(["text-preset-1"])}>
              Keep track of your money and save for your future
            </p>
            <p className={clsx(["text-preset-4"])}>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </section>
      <section className={clsx([styles["form-container"]])}>{children}</section>
    </main>
  );
}
