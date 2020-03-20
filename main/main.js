import React from "react";
import ReactDOM from "react-dom";
import BaseLayout from "./BaseLayout";
import { Switch, Route } from "react-router-dom";
import RoleList from "./pages/RoleList/RoleList";
import UserList from "./pages/UserList/UserList";
import * as Routes from "./config/Routes";
/**
 * 后台管理系统
 */
const App = () => {
  return (
    <BaseLayout>
      <Switch>
        <Route path={Routes.UserList} component={UserList} />
        <Route path={Routes.RoleList} component={RoleList} />
      </Switch>
    </BaseLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
