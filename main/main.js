import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configStore";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import styles from "./style/main.scss";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Contentbar from "./components/Contentbar/Contentbar";

import "../common/style/style";
import "./style/base.scss";

function Main() {
  return (
    <LocaleProvider locale={zhCN}>
      <Provider store={store}>
        <HashRouter>
          <div className={styles.container}>
            <Navbar />
            <div className={styles.contents}>
              <Topbar />
              <Contentbar />
            </div>
          </div>
        </HashRouter>
      </Provider>
    </LocaleProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
