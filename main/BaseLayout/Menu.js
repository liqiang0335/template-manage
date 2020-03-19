import React from "react";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Menu.scss";
import Logo from "./Logo";
import MenuData from "./config/MenuData";
import { NavLink } from "react-router-dom";
/**
 * 菜单栏
 */
export default function Menu() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.contenst}>
        <Tree data={MenuData} layer={0} />
      </div>
    </div>
  );
}
/**
 * 树组件
 */
function Tree({ data, layer }) {
  const showChild = (e, layer) => {
    if (layer === 0) {
      e.target.classList.toggle(styles.spread);
    }
  };

  const Link = ({ to, onClick, children }) => {
    if (to) {
      return (
        <NavLink className={styles.item} to={to} activeClassName="actived">
          {children}
        </NavLink>
      );
    }
    return (
      <div className={styles.item} onClick={onClick}>
        {children}
      </div>
    );
  };

  return data.map((item, i) => (
    <div className={styles.node} key={item.key}>
      <Link to={item.to} onClick={e => showChild(e, layer)}>
        <span className={styles.name}> {item.name}</span>
        <Arrow item={item} />
      </Link>
      <div className={styles.children}>
        {item.children && (
          <div className={styles.child}>
            <Tree data={item.children} layer={i + 1} />
          </div>
        )}
      </div>
    </div>
  ));
}
/**
 * 一级菜单箭头图标
 */
function Arrow({ item }) {
  if (item.children) {
    return <DownOutlined className={styles.icon} />;
  }
  return null;
}
