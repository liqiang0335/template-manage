import React from "react";
import { Modal, Button, message, Form, Input } from "antd";
import { connect } from "react-redux";
import { ShowPasswordDialog } from "../../redux/dialog.actions";
import rules from "../../../login/script/rules";
import styles from "./Password.scss";
import { DeleteButton } from "../../../common/components/Buttons/Buttons";
import * as api from "../../redux/api";

const FormItem = Form.Item;

export default connect(state => ({
  show: state.dialog.password
}))(Form.create({})(Password));

function Password({ show, dispatch, form }) {
  const { getFieldDecorator, resetFields, validateFields } = form;

  const cancel = () => {
    resetFields();
    dispatch(ShowPasswordDialog(false));
  };

  const submit = () => {
    validateFields(async (errors, values) => {
      if (errors) {
        return;
      }
      const { password, rePassword, originalPassword } = values;
      if (password !== rePassword) {
        message.error("两次密码输入不一致");
        return;
      }
      await api.changePassword(originalPassword, password);
      message.success("修改密码成功");
      resetFields();
      dispatch(ShowPasswordDialog(false));
    });
  };

  return (
    <Modal
      visible={show}
      maskClosable={false}
      closable={false}
      footer={null}
      width={500}
      title="修改密码"
    >
      <div className={styles.contaienr}>
        <Form>
          <FormItem>
            {getFieldDecorator("originalPassword", { rules: rules.password })(
              <Input addonBefore="旧密码" type="password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", { rules: rules.password })(
              <Input addonBefore="新密码" type="password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("rePassword", {
              rules: rules.password
            })(<Input addonBefore="确认密码" type="password" />)}
          </FormItem>
        </Form>
        <div className={styles.bottom}>
          <DeleteButton text="取消" onClick={cancel} />
          <Button type="primary" onClick={submit}>
            提交
          </Button>
        </div>
      </div>
    </Modal>
  );
}
