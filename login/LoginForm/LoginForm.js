import React from "react";
import styles from "./LoginForm.scss";
import { Input, Button, Checkbox } from "antd";
import useLogin from "./useLogin";
import bg from "../assets/bg.png";

/**
 * 登录表单
 */
export default function LoginForm(props) {
  const { state, dispatch, submit } = useLogin(props);
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.box}>
        <div className={styles.title}>登录系统</div>
        <div className={styles.line}>
          <Input
            size="large"
            className={styles.input}
            addonBefore="账号"
            value={state.name}
            onChange={e => dispatch({ name: e.target.value })}
          />
        </div>
        <div className={styles.line}>
          <Input
            size="large"
            className={styles.input}
            addonBefore="密码"
            value={state.pass}
            onChange={e => dispatch({ pass: e.target.value })}
          />
        </div>
        <Button
          type="primary"
          onClick={submit}
          size="large"
          className={styles.btn}
        >
          提交
        </Button>
        <Checkbox
          className={styles.check}
          checked={state.remember}
          onChange={e => dispatch({ remember: e.target.checked })}
        >
          记住密码
        </Checkbox>
      </div>
    </div>
  );
}
