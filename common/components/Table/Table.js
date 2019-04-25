import React from "react";
import { Table } from "antd";

export default function CustomTable(props) {
  return (
    <div style={{ margin: "15px" }}>
      <Table rowKey="id" bordered size="middle" {...props} />
    </div>
  );
}
