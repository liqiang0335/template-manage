import React from "react";
import styles from "./Header.scss";
import Account from "../Account/Account";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>222</div>
      <div style={{ flex: 1 }}></div>
      <Account />
    </div>
  );
}
