import React from "react";
import LoginForm from "../../../components/login/login";
import styles from "./page.module.css";
import Link from "next/link";

const SignIn = async () => {
  return (
    <div className={styles.signin}>
      <h2>Login</h2>
      <LoginForm />
      <p className={styles.signin__register}>Don't have an account? <Link href='/register'>Sign Up</Link></p>
    </div>
  );
};

export default SignIn;