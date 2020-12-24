import AddTodo from "../components/AddTodo";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context as TodoContext } from "../context";
import { makeStyles } from "@material-ui/core";

interface Params {
  id: string;
}

const TodoForm: React.FC = () => {
  const { id } = useParams<Params>();
  const { state } = useContext(TodoContext);

  const useStyles = makeStyles((theme) => ({
    key_name: {
      backgroundColor: "#ddd",
      padding: "2px 5px",
      marginRight: "10px",
      color: "#666",
      borderRadius: "4px",
    },
    change_row: {
      margin: "0 2rem",
      padding: theme.spacing(1),
      borderBottom: "1px solid #eee",
      color: "#999",
      "&:hover, &:focus": {
        backgroundColor: "#efefef",
      },
    },
    border: {
      borderBottom: "1px solid #ccc",
    },
  }));

  const classes = useStyles();

  const todoItem = state.todos.find((todo: any) => todo.id === id);

  return (
    <>
      <AddTodo todo={todoItem} />

      <div>
        {todoItem &&
          todoItem.history?.map((history, index) => (
            <div
              className={classes.change_row}
              key={new Date(history.date).toISOString()}
            >
              <div>
                <small>{new Date(history.date).toISOString()}</small>
              </div>
              {history.changes.map((change) => (
                <div key={change.keyName}>
                  <span className={classes.key_name}>{change.keyName}</span>
                  form:
                  <span className={classes.key_name}>{change.from}</span>
                  has been changed to:
                  <span className={classes.key_name}>{change.to}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoForm;
