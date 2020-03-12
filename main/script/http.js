import createhttp from "./createhttp";
import { message, notification } from "antd";
import { Host } from "../constant/Constant";

const prefix = process.env.NODE_ENV == "development" ? "" : Host;

const http = createhttp({
  baseURL: prefix + "/api/costsys",
  timeout: 50000,
  onRequest(config) {
    if (window.token) {
      config.headers.token = window.token;
    }
    if (config.method === "post") {
      config.data = config.data || {};
      config.data.id = encode(Date.now());
    }
    return config;
  },
  onSuccess(body) {
    if (body.code === 1) {
      return [body.data, null];
    }
    message.error(body.message, 6);
    return [null, body.code];
  },
  onTimeout(err) {
    const { url } = err.response.config;
    notification.error({
      placement: "bottomLeft",
      duration: 0,
      message: "请求超时",
      description: `当请求"${url}"接口时出现超时,请确认网略连接是否正常, 或联系技术人员解决, 给您带来的不便, 敬请谅解`
    });
  },
  onError(status, err) {
    const { url } = err.response.config;
    notification.error({
      placement: "bottomLeft",
      duration: 0,
      message: `服务出现错误`,
      description: `请求接口 ${url} 时出现错误状态码为${status} 请联系技术人员, 给您带来的不便, 敬请谅解`
    });
  }
});

export default http;
