import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
/**
 * 路由
 */
export default function Routes() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
    </>
  );
}
