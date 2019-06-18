import React from "react";
import { Form, Button, Input, message } from "antd";
import rules from "../script/rules";
import * as api from "../script/api";
import useCounter from "../../common/components/useCounter";
const FormItem = Form.Item;

export default Form.create({})(ForgetFrom);

function ForgetFrom({ form, children, onSuccess }) {
  const { getFieldDecorator, validateFields, resetFields } = form;
  const [counterText, running, counterRun] = useCounter();

  const reset = () => resetFields();

  function submit() {
    validateFields(async (errors, values) => {
      if (errors) {
        console.log("errros", errors);
        return;
      }
      await api.forget({ ...values, rePassword: values.password });
      resetFields();
      onSuccess();
    });
  }

  const onCode = async () => {
    if (running) return;
    form.validateFields(["telephone"], async (error, value) => {
      if (error) {
        return;
      }
      await api.getMessageCode({ telephone: value.telephone, type: "forget" });
      counterRun();
      message.success("验证码已发送");
    });
  };

  return (
    <div className="forget-page">
      <Form>
        <FormItem>
          <div className="form-item">
            {getFieldDecorator("telephone", {
              rules: rules.telephone,
              validateTrigger: "onBlur"
            })(<Input addonBefore="手机号" size="large" />)}
            <CodeButton text={counterText} onClick={onCode} />
          </div>
        </FormItem>
        <div id="popup-captcha" />
        <FormItem>
          <div className="form-item">
            {getFieldDecorator("telephoneCode", {
              rules: rules.telephoneCode,
              validateTrigger: "onBlur",
              validateFirst: true
            })(<Input addonBefore="验证码" size="large" />)}
          </div>
        </FormItem>
        <FormItem>
          <div className="form-item">
            {getFieldDecorator("password", {
              rules: rules.password,
              validateTrigger: "onBlur"
            })(<Input addonBefore="新密码" size="large" />)}
          </div>
        </FormItem>
      </Form>
      {children({ submit, reset })}
    </div>
  );
}

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
