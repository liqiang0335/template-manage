import random from "lodash/random";
/**
 * 生成随机数
 */
export default function getRandomNumber(length = 6) {
  return Array.from({ length }, () => random(0, 9)).join("");
}
