import React from "react";
import styles from "./Blank.scss";

export default function Blank() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Title</div>
      <div className={styles.encourage}>Something</div>
    </div>
  );
}
