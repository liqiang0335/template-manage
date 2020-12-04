import React from "react";
import { Table as AntTable } from "antd";

const Index = {
  title: "序号",
  align: "center",
  width: 60,
  render(value, row) {
    return row.index;
  },
};

export default function Table({
  columns,
  dataSource,
  indexed = true, //是否显示序号
  ...rest
}) {
  const arr = indexed ? [Index, ...columns] : columns;
  const _columns = arr.map(item => {
    if (!item.align) {
      item.align = "center";
    }
    return item;
  });
  const _dataSource = dataSource.map((item, i) => {
    if (indexed) {
      item.index = i + 1;
    }
    return item;
  });

  return (
    <AntTable
      size="small"
      rowKey="_id"
      bordered
      {...rest}
      columns={_columns}
      dataSource={_dataSource}
    />
  );
}
