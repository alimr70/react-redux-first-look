import React from "react";

const TodoItem = ({ todoItem }) => {
  return <div key={todoItem.id}>{todoItem.title}</div>;
};

export default TodoItem;
