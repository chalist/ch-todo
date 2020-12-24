import { TodoAction } from "./ActionsTypes";
import { TodoItemInterface } from "./interfaces";

export const createTodo = (todo: TodoItemInterface): TodoAction => ({
  type: "CREATE",
  payload: todo,
});

export const editTodo = (todo: TodoItemInterface): TodoAction => ({
  type: "EDIT",
  payload: todo,
});
