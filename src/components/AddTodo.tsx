import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Context as TodoContext } from "../context";
import { createTodo, editTodo } from "../Actions";
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Status, TodoItemInterface } from "../interfaces";
import PropTypes from "prop-types";
import statusFlow from "../lib/StatusFlow";

interface Props {
  todo?: TodoItemInterface;
}

const AddTodo: React.FC<Props> = (props) => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.TODO);

  const editMode = !!props.todo;

  useEffect(() => {
    if (props.todo) {
      setTitle(props.todo.title);
      setDescription(props.todo.description);
      setStatus(props.todo.status);
    }
  }, [props.todo]);

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleStatus = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setStatus(event.target.value as Status);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    if (editMode && props.todo) {
      dispatch(
        editTodo({
          id: props.todo.id,
          title: title,
          description: description,
          status: status,
        })
      );
    } else {
      dispatch(
        createTodo({
          id: new Date().getTime().toString(),
          title: title,
          description: description,
          status: Status.TODO,
        })
      );
    }
  };

  const useStyles = makeStyles((theme) => ({
    Button: {
      marginTop: theme.spacing(1),
    },
    TextField: {
      marginBottom: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <form id="create-todo-form">
      <Typography variant="h4" component="h4">
        {editMode ? `Edit Task ${props.todo?.title}` : "Add New Task"}
      </Typography>

      <TextField
        label="Title"
        variant="filled"
        value={title}
        required
        fullWidth
        className={classes.TextField}
        onChange={handleTitle}
      />

      <TextField
        label="Description"
        variant="filled"
        defaultValue={description}
        multiline
        rows={4}
        fullWidth
        className={classes.TextField}
        onChange={handleDescription}
      />

      {editMode ? (
        <Select
          value={status}
          fullWidth
          variant="filled"
          onChange={handleStatus}
        >
          <MenuItem value={props.todo ? props.todo.status : status}>
            {props.todo ? props.todo.status : status}
          </MenuItem>
          {statusFlow[props.todo ? props.todo.status : status].map(
            (statusItem) => (
              <MenuItem key={statusItem} value={statusItem}>
                {statusItem}
              </MenuItem>
            )
          )}
        </Select>
      ) : (
        ""
      )}

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddIcon />}
        onClick={submitHandler}
        className={classes.Button}
        fullWidth
      >
        {editMode ? "Edit" : "Add"}
      </Button>
    </form>
  );
};

AddTodo.propTypes = {
  todo: PropTypes.any,
};

export default AddTodo;
