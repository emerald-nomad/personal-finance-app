"use client";

import styles from "./color-tag-select.module.scss";
import clsx from "clsx";
import ArrowDownIcon from "@/images/icon-caret-down.svg";
import { JSX, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ColorTagIcon from "@/images/icon-color-tag.svg";
import SelectedIcon from "@/images/icon-selected.svg";

interface ColorTagSelectOption {
  name: string;
  value: string;
  inUse?: boolean;
}

interface ColorTagSelectProps {
  options: ColorTagSelectOption[];
  containerClassname?: string;
  buttonClassname?: string;
  label?: string;
}

export function ColorTagSelect({
  buttonClassname,
  containerClassname,
  options,
  label,
}: ColorTagSelectProps) {
  const [selected, setSelected] = useState(options[0]);

  function createOptions() {
    const opts: JSX.Element[] = [];

    options.forEach((option, index) => {
      if (index !== 0) {
        opts.push(<Divider key={option.name + "-divider"} />);
      }

      opts.push(
        <ListboxOption
          className={clsx([
            styles["option"],
            styles[option.value],
            option.inUse && styles["in-use"],
          ])}
          key={option.name}
          value={option}
          disabled={option.inUse}
        >
          {({ selected, disabled }) => (
            <>
              <ColorTagIcon />
              <span className={clsx(["text-preset-4"])}>{option.name}</span>
              <div className={clsx([styles["suffix"]])}>
                {selected && <SelectedIcon />}
                {disabled && (
                  <span className={clsx(["text-preset-5"])}>Already used</span>
                )}
              </div>
            </>
          )}
        </ListboxOption>
      );
    });

    return opts;
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={clsx([styles["container"], containerClassname])}>
        {label && (
          <span className={clsx([styles["label"], "text-preset-5-bold"])}>
            {label}
          </span>
        )}
        <ListboxButton
          className={clsx([styles["button"], buttonClassname, "text-preset-4"])}
        >
          <div className={clsx([styles["name"], styles[selected.value]])}>
            <ColorTagIcon />
            <span>{selected.name}</span>
          </div>

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
