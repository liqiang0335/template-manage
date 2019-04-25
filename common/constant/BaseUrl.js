const devBaseUrl = "http://192.168.11.27:8899";
const proBaseUrl = "http://push.yueniucj.com";

if (process.env.NODE_ENV == "development") {
  module.exports = devBaseUrl;
} else {
  module.exports = proBaseUrl;
}
