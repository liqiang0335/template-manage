import React from "react";
import styles from "./Topbar.scss";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { Menu, Dropdown } from "antd";
import { Logout } from "../../redux/main.actions";

export default function Topbar(props) {
  const { dispatch } = props;

  const onMenuSelect = ({ key }) => {
    const handler = {
      logout: () => dispatch(Logout())
    };
    handler[key] && handler[key]();
  };

  const menu = (
    <Menu className={styles.dropMenu} onClick={onMenuSelect}>
      <Menu.Item key="logout">
        <div>退出登录</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.menus}>
        {(props.menus || []).map(item => (
          <NavLink
            className={`${styles.menu} topbar-menu`}
            key={item.id}
            to={item.url}
          >
            <i className="icon icon-fiber_manual_record" />
            <span className={`${styles.name} name`}>{item.name}</span>
            <i className="icon icon-close" />
          </NavLink>
        ))}
      </div>
      <div style={{ flexGrow: "1" }} />
      <Dropdown overlay={menu} trigger={["hover"]}>
        <div className={styles.avatar}>
          <Avatar icon="user" />
          <span className={styles.userName}>用户昵称</span>
        </div>
      </Dropdown>
    </div>
  );
}
