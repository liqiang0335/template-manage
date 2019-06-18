import React from "react";
import "./Foreign.scss";
import { Input, Button, Form, message } from "antd";
import rules from "../script/rules";
import { NavLink } from "react-router-dom";
import * as api from "../script/api";
import { withRouter } from "react-router-dom";

const FormItem = Form.Item;

export default withRouter(Form.create({})(Foreign));

function Foreign({ form, history }) {
  const { getFieldDecorator, validateFields, resetFields } = form;

  const submit = () => {
    validateFields(async (errors, values) => {
      if (errors) {
        return;
      }
      const geet = await api.getGeetOption();
      await api.foreignRegister({ ...values, ...geet });
      message.success("提交成功, 信息审核中...");
      resetFields();
      history.push("/");
    });
  };

  return (
    <div className="foreign">
      <div className="box">
        <div className="title">提示</div>
        <div className="tip">
          本产品暂不支持国外手机号注册, 如需使用提交以下信息并联系管理员开通账号
        </div>
        <Form>
          <FormItem>
            {getFieldDecorator("userName", { rules: rules.userName })(
              <Input addonBefore="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("telephone", { rules: rules.foreignPhone })(
              <Input addonBefore="手机号" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", { rules: rules.password })(
              <Input addonBefore="密　码" />
            )}
          </FormItem>
        </Form>
        <div className="bottom">
          <Button type="primary" onClick={submit}>
            提交信息
          </Button>
          <NavLink to="/register" className="cancel">
            取消
          </NavLink>
        </div>
      </div>
    </div>
  );
}
