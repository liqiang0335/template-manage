import React from "react";
import ReactDOM from "react-dom";
import { Input, Button, message } from "antd";
import http from "../../lib/http";
import "ynw/style/reset.css";
import "./style/login.scss";

const App = function() {
  const [pass, setPass] = React.useState("");
  const [name, setName] = React.useState("");

  const submit = async () => {
    if (!name) {
      message.error("请输入账号");
      return;
    }
    if (!pass) {
      message.error("请输入密码");
      return;
    }

    const res = await http.post("/system/login", {
      userName: name,
      password: pass
    });
    message.success("登录成功");
    const token = res.token;
    localStorage.wxAutoAddToken = token;
    window.location.href = "../app/index.html";
  };

  return (
    <div className="login flex grow">
      <div className="box flex column">
        <h1>登录微信助手</h1>
        <div className="contents flex column">
          <div className="form-item">
            <Input
              value={name}
              addonBefore="账号"
              size="large"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-item">
            <Input
              type="password"
              value={pass}
              addonBefore="密码"
              size="large"
              onChange={e => setPass(e.target.value)}
            />
          </div>
          <Button type="primary" size="large" onClick={submit}>
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
