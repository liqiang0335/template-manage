import React from "react";
import styles from "./index.scss";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import Title from "./Title/Title";

import "ynw/style/reset.css";
import "../style/common.css";
import "../style/antd-reset.scss";

/**
 * 顶部
 */
export default function Common({ children }) {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <div className={styles.container}>
          <Menu />
          <div className={styles.detail}>
            <Header />
            <div className={styles.contents}>
              <Title></Title>
              {children}
            </div>
          </div>
        </div>
      </HashRouter>
    </ConfigProvider>
  );
}
