import React, { memo } from "react";
import styles from "./Menu.scss";
import { NavLink } from "react-router-dom";
import data from "../../data/menu";

export default function Menu() {
  return data.map(item => (
    <div className={`${styles.node} menu-item`} key={item.id}>
      <Parent item={item} />
      <div className={`${styles.children} menu-children`}>
        {item.children.map(sub => (
          <NavLink to={sub.url} className={styles.node} key={sub.id}>
            <div className={`${styles.name} menu-sub-name`}>{sub.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  ));
}

const Parent = memo(({ item }) => {
  const toggle = el => {
    el.classList.toggle("show");
  };
  const onClickIcon = e => {
    e.stopPropagation();
    toggle(e.target.parentNode);
  };

  return (
    <div
      className={`${styles.name} menu-parent show`}
      onClick={e => toggle(e.target)}
    >
      <i className={`${styles.icon} icon-add_circle`} />
      {item.name}
      <i
        className={`${styles.indicate} icon-expand_less`}
        onClick={onClickIcon}
      />
    </div>
  );
});
