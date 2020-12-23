import React, { useContext } from "react";
import { Context as TodoContext } from "../context";

const TodoList: React.FC = () => {
  const {
    state: { todos },
  } = useContext(TodoContext);

  return todos.length > 0 ? (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  ) : (
    <h2>No Todo&apos;s!</h2>
  );
};

export default TodoList;
