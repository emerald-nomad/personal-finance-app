"use client";

import styles from "./select.module.scss";
import clsx from "clsx";
import ArrowDownIcon from "@/images/icon-caret-down.svg";
import { InputHTMLAttributes, JSX, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

interface SelectOption {
  name: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  containerClassname?: string;
  buttonClassname?: string;
}

export function Select({
  buttonClassname,
  containerClassname,
  options,
}: SelectProps) {
  const [selected, setSelected] = useState(options[0]);

  function createOptions() {
    const opts: JSX.Element[] = [];

    options.forEach((option, index) => {
      if (index !== 0) {
        opts.push(<Divider key={option.name + "-divider"} />);
      }

      opts.push(
        <ListboxOption
          className={clsx([styles["option"]])}
          key={option.name}
          value={option}
        >
          <span
            className={clsx(
              ["text-preset-4"],
              selected.value === option.value
                ? "text-preset-4-bold"
                : "text-preset-4"
            )}
          >
            {option.name}
          </span>
        </ListboxOption>
      );
    });

    return opts;
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={clsx([styles["container"], containerClassname])}>
        <ListboxButton className={clsx([styles["button"], buttonClassname])}>
          <span className={clsx([styles["name"]])}>{selected.name}</span>

          <div className={clsx([styles["icon"]])}>
            <ArrowDownIcon />
          </div>
        </ListboxButton>
        <ListboxOptions className={clsx([styles["options"]])}>
          {createOptions()}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

function Divider() {
  return <hr className={clsx([styles["divider"]])} />;
}
