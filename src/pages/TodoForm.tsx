import AddTodo from "../components/AddTodo";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context as TodoContext } from "../context";

interface Params {
  id: string;
}

const TodoForm: React.FC = (_, context) => {
  const { id } = useParams<Params>();
  const { state } = useContext(TodoContext);

  const todoItem = state.todos.find((todo: any) => todo.id === id);

  return (
    <>
      <AddTodo todo={todoItem} />
    </>
  );
};

export default TodoForm;
