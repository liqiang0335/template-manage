import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./Account.scss";
const MenuItem = Menu.Item;
/**
 * 账户信息
 */
export default function Account() {
  const Menus = () => {
    return (
      <Menu className={styles.menu}>
        <MenuItem>
          <NavLink to="/setting/password">修改密码</NavLink>
        </MenuItem>
        <MenuItem>
          <div onClick={() => alert("logout")}>退出登录</div>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <div className={styles.container}>
      <Dropdown overlay={Menus}>
        <div className={styles.user}>
          <Avatar size={32} icon="user" />
          <span className={styles.name}>用户名</span>
          {/* <Icon type="caret-down" className={styles.down} /> */}
        </div>
      </Dropdown>
    </div>
  );
}
