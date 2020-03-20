import React from "react";
import { DownOutlined } from "@ant-design/icons";
import css from "./Menu.scss";
import Logo from "./Logo";
import MenuData from "./config/MenuData";
import { NavLink } from "react-router-dom";
/**
 * 菜单栏
 */
export default function Menu() {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.contenst}>
        <Tree data={MenuData} layer={0} />
      </div>
    </div>
  );
}
/**
 * 树组件
 */
function Tree({ data, layer }) {
  const Link = ({ to, children }) => {
    const layerName = `layer${layer}`;
    const itemClass = `${css.item} ${css[layerName]}`;

    if (to) {
      return (
        <NavLink to={to} className={itemClass} activeClassName={css.active}>
          {children}
        </NavLink>
      );
    }
    const showChild = e => e.target.classList.toggle(css.spread);
    return (
      <div className={itemClass} onClick={showChild}>
        {children}
      </div>
    );
  };

  return data.map((item, i) => (
    <div className={css.node} key={i}>
      <Link to={item.to}>
        <span className={css.name}> {item.name}</span>
        <Arrow item={item} />
      </Link>
      <div className={css.children}>
        {item.children && (
          <div className={css.child}>
            <Tree data={item.children} layer={layer + 1} />
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
    return <DownOutlined className={css.icon} />;
  }
  return null;
}
