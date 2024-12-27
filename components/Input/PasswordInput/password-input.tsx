"use client";

import { useState } from "react";
import { Input, InputProps } from "../input";
import ShowPasswordIcon from "@/images/icon-show-password.svg";
import HidePasswordIcon from "@/images/icon-hide-password.svg";

export function PasswordInput(props: Omit<InputProps, "type" | "suffixIcon">) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon = (
    <ShowPasswordIcon onClick={() => setShowPassword(true)} />
  );

  const hidePasswordIcon = (
    <HidePasswordIcon onClick={() => setShowPassword(false)} />
  );

  return (
    <Input
      id="create-password"
      label="Create Password"
      helperText="Passwords must be at least 8 characters"
      type={showPassword ? "text" : "password"}
      suffixIcon={showPassword ? hidePasswordIcon : showPasswordIcon}
    />
  );
}
