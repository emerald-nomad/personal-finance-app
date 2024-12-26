import clsx from "clsx";
import styles from "./signup.module.scss";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";
import ShowPasswordIcon from "@/images/icon-show-password.svg";

export default function Page() {
  return (
    <div className={clsx([styles["login-container"]])}>
      <p className={clsx(["text-preset-1"])}>Sign Up</p>
      <div className={clsx([styles["input-group"]])}>
        <Input id="name" label="Name" />
        <Input id="email" label="Email" />
        <Input
          id="create-password"
          label="Create Password"
          helperText="Passwords must be at least 8 characters"
          type="password"
          suffixIcon={<ShowPasswordIcon />}
        />
      </div>
      <Button>Create Account</Button>
      <p className={clsx([styles["text"], "text-preset-4"])}>
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className={clsx(["text-preset-4-bold", styles["link"]])}
        >
          Login
        </Link>
      </p>
    </div>
  );
}
