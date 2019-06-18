import React from "react";
import { Button } from "antd";

export function NewButton(prop) {
  return (
    <Button type="primary" style={{ marginRight: "10px" }} {...prop}>
      新增
    </Button>
  );
}

export function EditButton(prop) {
  return (
    <Button
      type="primary"
      style={{
        marginRight: "10px",
        background: "rgb(0, 187, 0)",
        borderColor: "rgb(0, 187, 0)"
      }}
      {...prop}
    >
      修改
    </Button>
  );
}

export function DeleteButton({ onClick, text = "删除" }) {
  return (
    <Button
      type="danger"
      style={{
        marginRight: "10px",
        background: "rgb(255, 63, 13)",
        borderColor: "rgb(255, 63, 13)",
        color: "white"
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
