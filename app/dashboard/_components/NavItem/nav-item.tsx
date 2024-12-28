"use client";

import clsx from "clsx";
import { JSX } from "react";
import styles from "./nav-item.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  title: string;
  className?: string;
}

export function NavItem({ className, href, icon, title }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx([
        styles["nav-item"],
        pathname === href && styles["active"],
        className || "",
      ])}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
