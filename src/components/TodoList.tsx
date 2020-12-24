import React, { useContext } from "react";
import { Context as TodoContext } from "../context";
import TodoItem from "./TodoItem";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "10px",
    },
    title: {
      fontSize: 14,
    },
    actionBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

const TodoList: React.FC = () => {
  const classes = useStyles();

  const {
    state: { todos },
  } = useContext(TodoContext);

  return todos.length > 0 ? (
    <div className="todo_list">
      <h1>Tasks</h1>
      <ul className={classes.container}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  ) : (
    <h2>No Todo&apos;s!</h2>
  );
};

export default TodoList;
