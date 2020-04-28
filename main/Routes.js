import React from "react";
import { Route } from "react-router-dom";
// pages
import RoleList from "./pages/RoleList/RoleList";
import UserList from "./pages/UserList/UserList";
/**
 *
 */
export default function Routes() {
  return (
    <>
      <Route path="/user/list" component={UserList} />
      <Route path="/role/list" component={RoleList} />
    </>
  );
}
