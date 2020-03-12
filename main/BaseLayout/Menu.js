import React from "react";
import { DownOutlined } from "@ant-design/icons";
import styles from "./Menu.scss";
import Logo from "./Logo";
import MenuData from "./config/MenuData";
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
  const showChild = e => {
    e.target.classList.add(styles.active);
  };

  const getItemClass = () => {
    return [styles.item, styles[`layer-${layer}`]].join(" ");
  };

  return data.map((item, i) => (
    <div className={styles.node} key={item.key}>
      <div className={getItemClass()} onClick={showChild}>
        <span className={styles.name}> {item.name}</span>
        <Arrow item={item} />
      </div>
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
