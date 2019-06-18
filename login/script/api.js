import http from "../../common/module/http";
import showGeetest from "../../common/module/showGeetest";

/**
 * 登录
 */
export function login(params) {
  const url = "/login/loginUser";
  return http.post(url, params);
}

/**
 * 注册
 */
export function register(params) {
  const url = "/login/registerUser";
  return http.post(url, params);
}

/**
 * 获取滑块参数
 */
export function getSlideCode() {
  const url = "/sms/getSlideCode";
  return http.get(url);
}

/**
 * 忘记密码
 */
export function forget(param) {
  const url = "/login/forgetUser";
  return http.post(url, param);
}

/**
 * 国外手机号注册
 */
export function foreignRegister(params) {
  const url = "/login/registerAbroadUser";
  return http.post(url, params);
}

/**
 * 拖动验证
 */
export async function getGeetOption() {
  const geetData = await getSlideCode();
  return showGeetest(geetData);
}

/**
 * 获取短信验证码
 * @param {Number} telephone 电话
 * @param {String} type
 */
export async function getMessageCode({ telephone, type }) {
  const geetData = await getSlideCode();
  const geetOption = await showGeetest(geetData);
  const getCode =
    type == "forget" ? getForgetMessageCode : getRegisterMessageCode;
  await getCode({
    telephone,
    ...geetOption
  });
}
// 获取注册短信验证码
function getRegisterMessageCode(params) {
  const url = "/sms/smsRegisterSend";
  return http.post(url, params);
}
// 获取忘记密码短信验证码
export function getForgetMessageCode(params) {
  const url = "/sms/smsForgetPasswdSend";
  return http.post(url, params);
}
