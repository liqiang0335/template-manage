import React from "react";
import { DownOutlined } from "@ant-design/icons";
import css from "./Menu.scss";
import MenuData from "@const/MenuData";
import { NavLink } from "react-router-dom";
import * as Icons from "@ant-design/icons";
import Logo from "../Logo/Logo";
/**
 * 菜单栏
 */
export default function Menu() {
  return (
    <div className={css.container}>
      <div className={css.logobar}>
        <Logo />
      </div>
      <div className={css.contents}>
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

  // 图标
  const MenuIcon = ({ item }) => {
    if (item.icon) {
      return <Icon name={item.icon} layer={layer} />;
    }
    return null;
  };

  const Prefix = ({ item }) => {
    if (item.icon) return null;
    return <span style={{ fontSize: "12px" }}>﹣ </span>;
  };

  return data.map((item, i) => (
    <div className={css.node} key={i}>
      <Link to={item.to}>
        <MenuIcon item={item} i={i} />
        <span className={css.name}>
          <Prefix item={item} />
          {item.name}
        </span>
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

function Icon({ name, layer }) {
  if (layer > 0) return null;
  if (!Icons[name]) return null;

  const Icon = Icons[name];
  return (
    <div className={css.sign}>
      <Icon />
    </div>
  );
}
