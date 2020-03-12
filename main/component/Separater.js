import React from "react";
/**
 * 分隔线条
 * @param {Number} height - 高度
 * @param {Number} space - 左右距离
 * @return {}
 */
export default function Separater({ height = 20, off = 25 }) {
  return (
    <span
      style={{
        width: "1px",
        height: `${height}px`,
        margin: `0 ${off}px`,
        background: "#555",
        display: "inline-block"
      }}
    />
  );
}
