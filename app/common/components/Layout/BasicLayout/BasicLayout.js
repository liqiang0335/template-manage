import React from "react";
import CrudButton from "../../Buttons/CrudButton";
import Table from "../../Table/Table";
import { message, Modal } from "antd";

/**
 * 基础列表
 */
export default function BasicLayout({ tableProps, onEdit, onNew, onDelete }) {
  const [select, setSelect] = React.useState([]);

  const rowSelection = { onChange: (_, row) => setSelect(row) };

  const getSelection = () => {
    return new Promise((resolve, reject) => {
      if (select.length < 1) {
        message.error("请选择");
        reject();
        return;
      }
      resolve(select);
    });
  };

  const beforeEdit = async () => {
    const selection = await getSelection();
    if (selection.length > 1) {
      return message.error("请选择一条数据");
    }
    onEdit(selection);
  };

  const beforeDelete = async () => {
    const selection = await getSelection();
    Modal.confirm({
      title: "确定要删除吗?",
      onOk: () => onDelete(selection)
    });
  };

  return (
    <div>
      <CrudButton
        onEdit={beforeEdit.bind(null)}
        onNew={onNew}
        onDelete={beforeDelete.bind(null)}
      />
      <Table rowSelection={rowSelection} {...tableProps} />
    </div>
  );
}
