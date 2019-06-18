import React from "react";
import Tittle from "./Tittle";
import { Input, Button, Form, message } from "antd";
import rules from "../script/rules";
import * as api from "../script/api";
import { withRouter, NavLink } from "react-router-dom";
import useCounter from "../../common/components/useCounter";
import "./Register.scss";
const FormItem = Form.Item;

export default withRouter(Form.create({ onFieldsChange })(Register));

function onFieldsChange(props, changedFields) {
  const { form } = props;
  const { telephone } = changedFields;
  if (telephone) {
    const value = telephone.value;
    const userName = form.getFieldValue("userName");
    const shouldUpdate = /^\d+/g.test(userName) || !userName;
    if (shouldUpdate) {
      form.setFieldsValue({ userName: value });
    }
  }
}

function Register({ form, history }) {
  const { validateFields, resetFields } = form;

  function submit() {
    validateFields(async (errors, values) => {
      if (errors) {
        console.log("errros", errors);
        return;
      }
      await api.register({ ...values, rePassword: values.password });
      message.success("注册成功");
      history.push("/");
      resetFields();
    });
  }

  return (
    <div className="register">
      <Tittle />
      <div className="contents">
        <div id="popup-captcha" />
        <Form>
          <Telephone form={form} />
          <TelephoneCode form={form} />
          <UserName form={form} />
          <Password form={form} />
          <SubmitButton onClick={submit} />
        </Form>
      </div>
    </div>
  );
}

function UserName({ form }) {
  return (
    <FormItem>
      <div className="form-item">
        {form.getFieldDecorator("userName", { rules: rules.userName })(
          <Input addonBefore="账　号" size="large" placeholder="请输入账号" />
        )}
      </div>
    </FormItem>
  );
}

/**
 * 手机号
 */
function Telephone({ form }) {
  const [counterText, running, counterRun] = useCounter();

  const getMessageCode = () => {
    if (running) return;
    form.validateFields(["telephone"], async (error, value) => {
      if (error) {
        return;
      }
      await api.getMessageCode({
        telephone: value.telephone,
        type: "register"
      });
      counterRun();
      message.success("验证码已发送");
    });
  };
  return (
    <>
      <FormItem>
        <div className="form-item phone">
          {form.getFieldDecorator("telephone", {
            rules: rules.telephone,
            validateTrigger: "onBlur"
          })(
            <Input
              addonBefore="手机号"
              size="large"
              placeholder="请输入手机号"
            />
          )}
          <CodeButton text={counterText} onClick={getMessageCode} />
        </div>
      </FormItem>
      <NavLink className="foreign" to="/foreign">
        国外手机号
        <i className="icon-help" />
      </NavLink>
    </>
  );

  function CodeButton({ text, onClick }) {
    return (
      <Button
        type="primary"
        size="large"
        style={{ marginLeft: "10px" }}
        onClick={onClick}
      >
        {text}
      </Button>
    );
  }
}
/**
 * 密码
 */
function Password({ form }) {
  return (
    <FormItem>
      <div className="form-item">
        {form.getFieldDecorator("password", {
          rules: rules.password,
          validateTrigger: "onBlur"
        })(
          <Input
            addonBefore="密　码"
            size="large"
            placeholder="密码为6-20位,字母数字下划线组成"
          />
        )}
      </div>
    </FormItem>
  );
}

/**
 * 获取验证码
 */
function TelephoneCode({ form }) {
  return (
    <FormItem>
      <div className="form-item">
        {form.getFieldDecorator("telephoneCode", {
          rules: rules.telephoneCode,
          validateTrigger: "onBlur",
          validateFirst: true
        })(
          <Input addonBefore="验证码" size="large" placeholder="请输入验证码" />
        )}
      </div>
    </FormItem>
  );
}

function SubmitButton({ onClick }) {
  return (
    <Button
      type="primary"
      size="large"
      onClick={onClick}
      style={{ width: "100%", marginTop: "10px" }}
    >
      立即注册
    </Button>
  );
}
