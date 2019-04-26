import React from "react";
import { Button } from "antd";

export function NewButton(prop) {
  return (
    <Button type="primary" style={{ margin: "0 5px" }} {...prop}>
      新增
    </Button>
  );
}

export function EditButton(prop) {
  return (
    <Button
      type="primary"
      style={{
        margin: "0 5px",
        background: "rgb(0, 187, 0)",
        borderColor: "rgb(0, 187, 0)"
      }}
      {...prop}
    >
      修改
    </Button>
  );
}

export function DeleteButton(prop) {
  return (
    <Button
      type="danger"
      style={{
        margin: "0 5px",
        background: "rgb(255, 91, 48)",
        borderColor: "rgb(255, 91, 48)",
        color: "white"
      }}
      {...prop}
    >
      删除
    </Button>
  );
}
