import { notification } from "antd";
import axios from "axios";

const http = axios.create({ baseURL: "/", timeout: 30000 });
export default http;

http.interceptors.request.use(config => {
  config.data = config.data || {};
  config.params = config.params || {};
  if (window.token) {
    config.headers.token = window.token;
  }
  return config;
});

http.interceptors.response.use(
  function(res) {
    return res.data;
  },
  function(err) {
    if (err.response) {
      const { config, status } = err.response;
      notification.error({
        placement: "topRight",
        duration: 5,
        message: `服务错误: ${status}`,
        description: `${config.url}`,
      });
    }
    if (err.code === "ECONNABORTED") {
      notification.error({
        placement: "bottomLeft",
        duration: 5,
        message: "请求超时",
        description: `请确认网略连接是否正常`,
      });
    }
    return Promise.reject(err);
  }
);
