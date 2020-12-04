import React, { useState, lazy, Suspense } from "react";
import styles from "./CropperBox.scss";
import getCoverPath from "@script/getCoverPath";
const Crop = require("./Cropper");
/**
 * @param {String} value - 图片回显路径
 * @param {Function} onChange(base64) - 裁切完成回调, 参数中包含base64格式图片
 * @param {String,Optional} name - 按钮文字,默认为"选择图片"
 * @param {Number,Optional} width - 图片的宽度, 默认260
 * @param {Object,Optional} cropper - cropper选项, 默认值 { aspectRatio: 16/9, viewMode:2, ...}
 */
export default function Cropper(props) {
  const { name, onChange, value, ...rest } = props;
  const [file, setfile] = useState(null);

  const onInputChange = e => {
    const file = e.nativeEvent.target.files[0];
    setfile(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label className={styles.label}>
          {name || "选择图片"}
          <input
            type="file"
            onChange={onInputChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <img
        src={getCoverPath(value)}
        className={styles.img}
        width="100%"
        style={{ maxWidth: props.width + "px" }}
      />
      <Suspense fallback={null}>
        <Crop file={file} onSubmit={onChange} width={260} {...rest} />
      </Suspense>
    </div>
  );
}
