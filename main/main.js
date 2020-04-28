import React from "react";
import ReactDOM from "react-dom";
import BaseLayout from "./BaseLayout";
import { Switch } from "react-router-dom";
import Routes from "./Routes";

/**
 * 后台管理系统
 */
const App = () => {
  return (
    <BaseLayout>
      <Switch>
        <Routes></Routes>
      </Switch>
    </BaseLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
