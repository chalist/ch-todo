import React from "react";
import { Link } from "react-router-dom";
import { TodoItemInterface } from "../interfaces";
import EditIcon from "@material-ui/icons/Edit";
import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

interface TodoItemProps {
  todo: TodoItemInterface;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "20px",
    },
    todoItem: {
      width: "50%",
      padding: "0 10px",
      boxSizing: "border-box",
    },
    title: {
      fontSize: 14,
    },
    actionBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    editButton: {
      float: "right",
    },
  })
);

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.todoItem}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.todo.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.todo.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionBox}>
          <Button variant="contained" color="primary" size="small">
            {props.todo.status}
          </Button>

          <Link to={`edit/${props.todo.id}`} className={classes.editButton}>
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
    /* 
    <div className="todo_item">
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>

      <div className="action">
        <div className="status"></div>
        <Button variant="contained" color="primary">
          
        </Button>

        <Link to={`edit/${props.todo.id}`}>
          <IconButton aria-label="delete" className={classes.editButton}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Link>
      </div>
    </div> */
  );
};

TodoItem.propTypes = {
  todo: Object,
};

export default TodoItem;
