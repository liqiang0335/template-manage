import React from "react";
import { Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * 删除确认: 用户确认后执行回调函数
 *
 * @param {Function => Promise} submiter
 */
export default function deleter(submiter) {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      title: "操作确认",
      content: "确定要删除吗",
      async onOk() {
        try {
          await submiter();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          return;
        }
        message.success("操作成功");
        resolve();
      },
      onCancel() {
        reject();
      },
    });
  });
}
