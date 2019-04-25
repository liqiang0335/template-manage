import React, { useState } from "react";
import styles from "./Navbar.scss";
import hub, { OPEN_URL } from "../../script/hub";

const data = [
  {
    id: "a1",
    name: "系统管理",
    children: [
      {
        id: "a3",
        name: "角色管理",
        url: "http://push.yueniucj.com/pages/system/role/index.html"
      },
      {
        id: "a4",
        name: "菜单管理",
        url: "http://push.yueniucj.com/pages/system/menu/index.html"
      },
      {
        id: "a5",
        name: "部门管理",
        url: "http://push.yueniucj.com/pages/system/organ/index.html"
      }
    ]
  }
];

export default function Navbar() {
  const [update, setUpdate] = useState(0);

  const showChildren = item => {
    item.show = !item.show;
    setUpdate(Date.now());
  };

  const onSelect = sub => {
    hub.emit(OPEN_URL, sub.url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>后台管理</div>
      {data.map(item => (
        <div key={item.id} className={styles.group}>
          <div className={styles.name1} onClick={showChildren.bind(null, item)}>
            <span className={styles.icon1}>
              <i className="icon-cog2" />
            </span>
            {item.name}
          </div>
          <div
            className={styles.children}
            style={{ display: item.show ? "none" : "flex" }}
          >
            {(item.children || []).map(sub => (
              <div
                key={sub.id}
                className={styles.name2}
                onClick={onSelect.bind(null, sub)}
              >
                {sub.name}
                <span className={styles.icon2}>
                  <i className="icon-navigate_next2" />
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
