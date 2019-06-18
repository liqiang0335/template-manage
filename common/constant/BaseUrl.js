// const proBaseUrl = "http://push.yueniucj.com";

// if (process.env.NODE_ENV == "development") {
//   module.exports = getBase();
// } else {
//   module.exports = proBaseUrl;
// }

function getBase() {
  const href = window.location.href;
  if (/http:\/\/x/.test(href)) {
    return "http://127.0.0.1:8081";
  }
  if (/127\.0\.0\.1/.test(href)) {
    return "http://127.0.0.1:8081";
  }
  return "http://120.78.212.7:8081";
}

const baseURL = getBase();
window.baseURL = baseURL;
export default baseURL;
