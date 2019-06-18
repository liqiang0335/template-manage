import React from "react";
import "./Register.scss";
import { Button, message } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Forget.scss";
import ForgetFrom from "./ForgetFrom";

export default withRouter(Register);

function Register({ history }) {
  const onSuccess = () => {
    message.success("密码修改成功");
    history.push("/");
  };

  return (
    <div className="forget-page">
      <h1>忘记密码</h1>
      <div className="contents">
        <ForgetFrom onSuccess={onSuccess}>
          {({ submit }) => <SubmitButton onClick={submit} />}
        </ForgetFrom>
      </div>
    </div>
  );
}

function SubmitButton({ onClick }) {
  return (
    <div className="forget-page-bottom">
      <NavLink to="/" style={{ marginRight: "20px" }}>
        <Button size="large">取消</Button>
      </NavLink>
      <Button type="primary" size="large" onClick={onClick}>
        确定
      </Button>
    </div>
  );
}
