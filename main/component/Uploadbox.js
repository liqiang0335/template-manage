import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import uuid from "@script/encrypt";
const FILE_LIMIT = 1024 * 1024 * 30; // 上传限制: 30M
const { Dragger } = Upload;
const defaultLabel = "选择或拖动文件";
/**
 * ----------------------------------------
 * 文件上传窗口
 * @param {String} label
 * @param {Function} onChange
 * ----------------------------------------
 */
export default function Uploadbox({ label = defaultLabel, onChange }) {
  const config = {
    accept: ".rar,.zip",
    name: "file",
    multiple: false,
    action: `/api/tjlab/com/upfile?id=${uuid()}`,
    headers: {
      token: window.token,
    },
    onRemove() {},
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} 文件上传成功!`);
        const path = info.file.response.data;
        onChange(path);
      } else if (status === "error") {
        message.error(`${info.file.name} 文件上传失败!`);
      }
    },
  };

  return (
    <div>
      <Dragger {...config}>
        <div>
          <InboxOutlined style={{ fontSize: "16px" }} />
          {label}
        </div>
      </Dragger>
    </div>
  );
}
