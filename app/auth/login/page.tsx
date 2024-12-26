import clsx from "clsx";
import styles from "./login.module.scss";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <div className={clsx([styles["login-container"]])}>
      <p className={clsx(["text-preset-1"])}>Login</p>
      <div className={clsx([styles["input-group"]])}>
        <Input id="email" label="Email" />
        <Input id="password" label="Password" />
      </div>
      <Button>Login</Button>
      <p className={clsx([styles["text"], "text-preset-4"])}>
        Need to create an account?{" "}
        <Link
          href="/auth/signup"
          className={clsx(["text-preset-4-bold", styles["link"]])}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
