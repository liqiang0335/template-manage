import React, { useState } from "react";
import { Input, Button, message, Checkbox } from "antd";
import "./Login.scss";
import Tittle from "./Tittle";
import * as api from "../script/api";
import { NavLink } from "react-router-dom";
const db = localStorage;

export default function Login() {
  const [pass, setPass] = useState(db.pass || "");
  const [name, setName] = useState(db.name || "");
  const [remember, setRemember] = useState(db.remember == "1");

  const submit = async () => {
    if (!name) {
      message.error("请输入账号");
      return;
    }
    if (!pass) {
      message.error("请输入密码");
      return;
    }

    await api.login({
      userName: name,
      password: pass
    });
    message.success("登录成功");
    db.name = name;
    db.pass = remember ? pass : "";
    db.remember = remember ? "1" : "";
    window.location.href = "http://add.up135.com/platform/index.html";
  };

  return (
    <div className="login flex column">
      <Tittle />
      <div className="form-item">
        <Input
          value={name}
          placeholder="请输入账号或手机号"
          addonBefore="账号"
          size="large"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-item">
        <Input
          type="password"
          placeholder="请输入密码"
          value={pass}
          addonBefore="密码"
          size="large"
          onChange={e => setPass(e.target.value)}
        />
      </div>
      <Button type="primary" size="large" onClick={submit}>
        登录
      </Button>
      <div className="bottom flex">
        <div className="remeber">
          <Checkbox
            checked={remember}
            style={{ marginRight: "5px" }}
            onChange={e => setRemember(e.target.checked)}
          />
          记住密码
        </div>
        <div className="grow" />
        <NavLink className="forget" to="/forget">
          忘记密码
        </NavLink>
      </div>
    </div>
  );
}
