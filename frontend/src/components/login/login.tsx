"use client";
import React, { useRef, useState } from "react";
import { AlertModal } from "../alert-modal/alert-modal";
import Link from "next/link";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useModal from "@/lib/helper";

const LoginForm = (props: any) => {
  const {dialogRef, toggleDialog} = useModal();
  const [dialogContent, setDialogContent] = useState('error')
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
    if (res?.ok) {
      router.push(props.callbackUrl ?? "/");
    } else {
      console.log('wrond credentials')
      setDialogContent('ამ მონაცემებით ანგარიში არ მოიძებნა');
      toggleDialog();
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.login__form}>
      <label htmlFor="userName">User</label>
      <input
        type="email"
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
      <AlertModal toggleDialog={toggleDialog} ref={dialogRef}>
        <h3>{dialogContent}</h3>
      </AlertModal>
    </form>
  );
};

export default LoginForm;