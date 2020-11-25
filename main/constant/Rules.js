export const Required = [{ required: true, message: "请输入内容" }];
export default {
  required: [{ required: true, message: "请输入内容" }],
  account: [
    {
      pattern: /[\w_\-@$]+/,
      message: "账号为字母/数字/下划线",
    },
    { min: 3, max: 30, message: "账号位数为3-30位" },
  ],
  password: [
    {
      pattern: /[\w_\-@$]+/,
      message: "密码为字母/数字/下划线",
    },
    { min: 6, max: 20, message: "密码位数为6-20位" },
  ],
  name: [
    { required: true, message: "请输入姓名" },
    { message: "姓名为中文", pattern: /[\u4E00-\u9FA5]+/ },
    { message: "姓名为2-10个中文字符", min: 2, max: 10 },
  ],
  phone: [
    { required: true, message: "请输入手机号" },
    { message: "请输入有效手机号", len: 11 },
  ],
};
