export default function isNull(v) {
  return ["", undefined, "undefined", null].includes(v);
}
