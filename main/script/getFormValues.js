import { message } from "antd";
/**
 * ----------------------------------------
 * * 提交表单
 * @param {Form} form - antd Form
 * @param {Function} callback - 回调函数
 * ----------------------------------------
 */
export default function formSubmit(form, callback) {
  return form
    .validateFields()
    .then(() => {
      const values = form.getFieldsValue();
      callback(values);
    })
    .catch(err => {
      const error = err.errorFields[0].errors[0];
      message.error(error);
    });
}
