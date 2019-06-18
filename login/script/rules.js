export default {
  userName: [
    { required: true, message: "请输入账号" },
    { min: 4, max: 20, message: "账号长度为4-20位" },
    { pattern: /^[\w\u4E00-\u9FA5]+$/, message: "汉字和字母数字下划线" }
  ],
  foreignPhone: [{ required: true, message: "请输入手机号" }],
  telephoneCode: [
    { required: true, message: "请输入验证码" },
    { pattern: /^\d+$/, message: "只能输入数字" },
    { min: 4, max: 6, message: "验证码为4-6位" }
  ],
  telephone: [
    { required: true, message: "请输入手机号" },
    { min: 11, max: 11, message: "手机号为11位数字" },
    { pattern: /^1\d{10}$/, message: "手机号格式有误" }
  ],
  password: [
    { required: true, message: "请输入密码" },
    { min: 6, max: 20, message: "密码6-20位" },
    { pattern: /^\w+$/, message: "只能输入字母数字下划线" }
  ]
};
