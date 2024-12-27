import { JSX, PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import clsx from "clsx";

import OverviewIcon from "@/images/icon-nav-overview.svg";
import TransactionsIcon from "@/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/images/icon-nav-budgets.svg";
import PotIcon from "@/images/icon-nav-pots.svg";
import RecurringBillIcon from "@/images/icon-nav-recurring-bills.svg";
import Logo from "@/images/logo-large.svg";
import MinimizeIcon from "@/images/icon-minimize-menu.svg";
import { NavItem } from "@/components/NavItem";

export default function Layout({ children }: PropsWithChildren) {
  function createNavItems(className: string) {
    return [
      <NavItem
        className={className}
        key="dashboard"
        href="/dashboard"
        icon={<OverviewIcon />}
        title="Overview"
      />,
      <NavItem
        className={className}
        key="transactions"
        href="/dashboard/transactions"
        icon={<TransactionsIcon />}
        title="Transactions"
      />,
      <NavItem
        className={className}
        key="budgets"
        href="/dashboard/budgets"
        icon={<BudgetsIcon />}
        title="Budgets"
      />,
      <NavItem
        className={className}
        key="pots"
        href="/dashboard/pots"
        icon={<PotIcon />}
        title="Pots"
      />,
      <NavItem
        className={className}
        key="recurring"
        href="/dashboard/recurring"
        icon={<RecurringBillIcon />}
        title="Recurring Bills"
      />,
    ];
  }

  return (
    <main className={clsx([styles["main"]])}>
      <section className={clsx([styles["content"]])}>{children}</section>

      <nav className={clsx([styles["mobile-nav"]])}>
        {createNavItems("text-preset-5-bold")}
      </nav>
      <nav className={clsx([styles["desktop-nav"]])}>
        <div className={clsx([styles["logo-container"]])}>
          <Logo />
        </div>
        <div className={clsx([styles["menu"]])}>
          {createNavItems("text-preset-3")}
        </div>
        <div className={clsx([styles["expand-nav"], "text-preset-3"])}>
          <MinimizeIcon /> Minimize Menu
        </div>
      </nav>
    </main>
  );
}
