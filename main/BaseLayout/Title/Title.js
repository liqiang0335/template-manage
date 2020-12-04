import React, { useEffect, useState } from "react";
import styles from "./Title.scss";
import css from "../Menu/Menu.scss";
/**
 * 标题
 */
export default function Title() {
  const [value, setValue] = useState("");
  useEffect(() => {
    window.addEventListener("hashchange", e => {
      const el = document.querySelector(`.${css.active}`);
      const title = el?.textContent || "";
      setValue(title);
    });
  }, []);
  return <div className={styles.title}>{value}</div>;
}
