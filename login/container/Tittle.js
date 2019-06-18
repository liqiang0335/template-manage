import React from "react";
import "./Tittle.scss";
import { NavLink } from "react-router-dom";

export default function Tittle() {
  return (
    <h1 className="title-1">
      <NavLink exact to="/" className="alink link">
        登录
      </NavLink>
      <NavLink to="/register" className="blink link">
        注册
      </NavLink>
    </h1>
  );
}
