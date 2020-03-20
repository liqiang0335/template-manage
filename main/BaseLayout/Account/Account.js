import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons";
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
          <div onClick={() => alert("logout")}>退出登录</div>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <div className={styles.container}>
      <Dropdown overlay={Menus}>
        <div className={styles.user}>
          <Avatar size={32} icon={<UserOutlined />} />
          <span className={styles.name}>用户名</span>
          <CaretDownOutlined className={styles.down} />
        </div>
      </Dropdown>
    </div>
  );
}
