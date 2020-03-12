import "ynw/style/reset.css";
import React from "react";
import styles from "./index.scss";
import Header from "./Header";
import Menu from "./Menu";
/**
 * 顶部
 */
export default function Common({ children }) {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.detail}>
        <Header />
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}
