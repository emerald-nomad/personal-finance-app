import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import clsx from "clsx";

import { DesktopNav } from "@/app/dashboard/_components/DesktopNav";

import OverviewIcon from "@/images/icon-nav-overview.svg";
import TransactionsIcon from "@/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/images/icon-nav-budgets.svg";
import PotIcon from "@/images/icon-nav-pots.svg";
import RecurringBillIcon from "@/images/icon-nav-recurring-bills.svg";

import { NavItem } from "@/app/dashboard/_components/NavItem";
import Script from "next/script";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={clsx([styles["main"]])}>
      <section className={clsx([styles["content"]])}>{children}</section>

      <nav className={clsx([styles["mobile-nav"]])}>
        {createNavItems("text-preset-5-bold")}
      </nav>
      <DesktopNav />
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        strategy="beforeInteractive"
      /> */}
    </main>
  );
}

export function createNavItems(className: string) {
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
