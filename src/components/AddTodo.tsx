import React, { FormEvent, useRef, useContext, useState } from "react";
import { Context as TodoContext } from "../context";
import { createTodo } from "../Actions";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    dispatch(
      createTodo({
        id: new Date().getTime().toString(),
        title: title,
        description: description,
        status: "ToDo",
      })
    );
  };

  const useStyles = makeStyles((theme) => ({
    Button: {
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <form id="create-todo-form">
      <Typography variant="h6" component="h6">
        Add New Task
      </Typography>

      <TextField
        label="Title"
        margin="dense"
        variant="filled"
        required
        fullWidth
        onChange={handleTitle}
      />

      <TextField
        label="Description"
        margin="dense"
        variant="filled"
        multiline
        rows={4}
        fullWidth
        onChange={handleDescription}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddIcon />}
        onClick={submitHandler}
        className={classes.Button}
        fullWidth
      >
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
