import Host from "../constant/Host";
/**
 * 获取可用的图片路径
 * @param {*} src
 */
export default function getSrcPrefix(src) {
  if (!src) return "";
  if (/^(http|data:image|\/\/)/.test(src)) return src;
  return Host + src;
}
