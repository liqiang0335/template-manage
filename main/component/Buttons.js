import React from "react";
import { Button as AntButton, Space } from "antd";
import {
  SaveOutlined,
  PlusOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
} from "@ant-design/icons";

function ColorButton({ color, ...rest }) {
  const style = {};
  if (color) {
    style.background = color;
    style.borderColor = color;
  }
  return <AntButton style={style} {...rest} />;
}

export function ButtonGroup({ onClickAdd, onClickEdit, onClickDelete }) {
  return (
    <Space>
      <ColorButton onClick={onClickAdd}>添加</ColorButton>
      <ColorButton color="#15ae8b" onClick={onClickEdit}>
        修改
      </ColorButton>
      <ColorButton color="#dc6307" onClick={onClickDelete}>
        删除
      </ColorButton>
    </Space>
  );
}

export function SubmitButton(props) {
  return (
    <ColorButton
      htmlType="submit"
      type="primary"
      style={{ margin: "20px auto", display: "block", width: "150px" }}
      icon={<SaveOutlined />}
      {...props}
    >
      提交
    </ColorButton>
  );
}

export function AddButton(props) {
  return (
    <ColorButton type="primary" icon={<PlusOutlined />} {...props}>
      新增
    </ColorButton>
  );
}

export function EditButton(props) {
  return (
    <ColorButton icon={<EditOutlined />} color="#15ae8b" {...props}>
      修改
    </ColorButton>
  );
}

export function DeleteButton(props) {
  return (
    <AntButton type="danger" icon={<DeleteOutlined />} {...props}>
      删除
    </AntButton>
  );
}

export function ImportButton(props) {
  return (
    <ColorButton
      type="danger"
      color="#818181"
      icon={<DownloadOutlined />}
      {...props}
    >
      导入
    </ColorButton>
  );
}
