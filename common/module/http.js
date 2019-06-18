const Qs = require("querystring");
const axios = require("axios");
import { message } from "antd";

import BaseUrl from "../constant/baseUrl";
import ErrorCodes from "../constant/ErrorCodes";

const http = axios.create({
  baseURL: BaseUrl,
  timeout: 30000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  transformRequest: params => Qs.stringify(params)
});

export default http;

/**
 * 拦截请求
 */
http.interceptors.request.use(config => {
  // 处理config
  return config;
});

/**
 * 拦截响应
 */
http.interceptors.response.use(
  /**
   * 成功 : err.code >=200 || err.code <=300
   */
  function(res) {
    const body = res.data;

    //拦截登录错误码
    if (body.code == 10002) {
      window.location.href = "/platform/login.html";
    }

    if (res.config.interceptor === false) {
      return Promise.resolve(res.data);
    }
    if (body.code != 1) {
      message.error(ErrorCodes[body.code] || body.message || body.code);
      return Promise.reject(body);
    }
    // 处理服务器返回的数据
    return Promise.resolve(body.data);
  },
  /**
   * 失败: status > 300
   */
  function(err) {
    if (err.code === "ECONNABORTED") {
      message.error("网络超时");
    }
    if (err.response) {
      const res = err.response;
      console.log(res.status); // 404, 500...
      if (res.status == "500") {
        message.error("服务器异常");
      }
    }
    return Promise.reject(err);
  }
);
