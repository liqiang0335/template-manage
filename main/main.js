import React from "react";
import ReactDOM from "react-dom";

import "../common/style/style";
import "./style/base.css";
import styles from "./style/main.scss";

import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Webview from "./components/Webview/Webview";

export default function Main() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contents}>
        <Topbar />
        <Webview />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
