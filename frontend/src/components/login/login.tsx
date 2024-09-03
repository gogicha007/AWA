"use client";
import React, { useRef } from "react";
import Link from "next/link";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = (props: any) => {
  const router = useRouter();
  const userName = useRef("");
  const userPass = useRef("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: userPass.current,
      redirect: false,
    });
    if (!res?.error) {
      router.push(props.callbackUrl ?? "/");
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.login__form}>
      <label htmlFor="userName">User</label>
      <input
        type="text"
        id="userName"
        name="userName"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <label htmlFor="userPass">Password</label>
      <input
        type="password"
        id="userPass"
        name="userPass"
        autoComplete="new-password"
        onChange={(e) => (userPass.current = e.target.value)}
      />
      <div className={styles.login__controls}>
        <button className={styles.login__btn} type="submit">Submit</button>
        <button className={styles.login__btn} type="button">
          <Link href={"/"}>Cancel</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;