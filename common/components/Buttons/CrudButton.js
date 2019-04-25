import React from "react";
import { NewButton, EditButton, DeleteButton } from "./Buttons";

export default function Basic({ onNew, onEdit, onDelete }) {
  return (
    <div style={{ margin: "15px" }}>
      <NewButton onClick={onNew} />
      <EditButton onClick={onEdit} />
      <DeleteButton onClick={onDelete} />
    </div>
  );
}
