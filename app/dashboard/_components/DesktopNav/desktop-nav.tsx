"use client";

import clsx from "clsx";
import styles from "./desktop-nav.module.scss";

import LogoLarge from "@/images/logo-large.svg";
import LogoSmall from "@/images/logo-small.svg";
import MinimizeIcon from "@/images/icon-minimize-menu.svg";

import { useState } from "react";
import { createNavItems } from "@/app/dashboard/layout";

export function DesktopNav() {
  const [navMinimized, setNavMinimized] = useState(false);

  function toggleNavMinimized() {
    setNavMinimized(!navMinimized);
  }

  return (
    <nav
      className={clsx([
        styles["desktop-nav"],
        navMinimized && styles["minimize"],
      ])}
    >
      <div
        className={clsx([
          styles["logo-container"],
          navMinimized && styles["minimize"],
        ])}
      >
        {navMinimized ? <LogoSmall /> : <LogoLarge />}
      </div>
      <div
        className={clsx([styles["menu"]], navMinimized && styles["minimize"])}
      >
        {createNavItems("text-preset-3")}
      </div>
      <div
        className={clsx(
          [styles["expand-nav"], "text-preset-3"],
          navMinimized && styles["minimize"]
        )}
        onClick={toggleNavMinimized}
      >
        <MinimizeIcon /> <span>Minimize Menu</span>
      </div>
    </nav>
  );
}
