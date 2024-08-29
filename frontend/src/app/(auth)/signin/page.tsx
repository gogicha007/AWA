import React from "react";
import Login from "../../../components/login/login";
import styles from "./page.module.css";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default SignIn;