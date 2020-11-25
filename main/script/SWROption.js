import http from "@script/http";
// SWROption.js
// 异步请求: 这里使用 axios
function fetcher(...args) {
  let [url, config] = args;
  return http.get(url, config);
}

// 导出配置
export default {
  fetcher,
};
