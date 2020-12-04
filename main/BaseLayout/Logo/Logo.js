import React from "react";
import styles from "./Logo.scss";
import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} width="100" />
    </div>
  );
}
