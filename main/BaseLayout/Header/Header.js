import React from "react";
import styles from "./Header.scss";
import Account from "../Account/Account";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}></div>
      <div className={styles.title}></div>
      <Account />
    </div>
  );
}
