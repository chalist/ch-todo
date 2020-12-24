import React, { useContext } from "react";
import { Context as TodoContext } from "../context";
import { Link } from "react-router-dom";

const TodoList: React.FC = () => {
  const {
    state: { todos },
  } = useContext(TodoContext);

  return todos.length > 0 ? (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/edit/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <h2>No Todo&apos;s!</h2>
  );
};

export default TodoList;
