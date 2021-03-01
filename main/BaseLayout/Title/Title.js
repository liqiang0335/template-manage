import React, { useEffect, useState } from "react";
import css from "../Menu/Menu.scss";
import styles from "./Title.scss";
const defaults = "";
/**
 * ----------------------------------------
 * Title
 * !! auto find active title
 * ----------------------------------------
 */
export default function Title() {
  const [value, setValue] = useState(defaults);

  const getTitle = () => {
    const el =
      document.querySelector(`.${css.active}`) ||
      document.querySelector(`.as-page-title`);
    const title = el?.textContent || defaults;
    setValue(title.replace(/[﹣\s]+/g, ""));
  };

  useEffect(() => {
    setTimeout(() => {
      getTitle();
    }, 500);
    window.addEventListener("hashchange", e => {
      getTitle();
    });
  }, []);

  if (!value)
    return (
      <div className={styles.title} style={{ opacity: 0 }}>
        标题
      </div>
    );
  return (
    <div className={styles.title}>
      <i className={styles.icon}></i> {value}
    </div>
  );
}
