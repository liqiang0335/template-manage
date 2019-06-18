import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styles from "./Contentbar.scss";
import Blank from "../Blank/Blank";

export default function Contentbar() {
  return (
    <div className={styles.container}>
      <Switch>
        <Redirect exact from="/" to="/blank" />
        <Route path="/blank" component={Blank} />
      </Switch>
    </div>
  );
}
