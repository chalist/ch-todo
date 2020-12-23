import { TodoAction } from "./ActionsTypes";
import { TodoItemInterface } from "./interfaces";

export const createTodo = (todo: TodoItemInterface): TodoAction => ({
  type: "CREATE",
  payload: todo,
});

// export const deleteTodo = (id: string): TodoAction => ({
//   type: "DELETE",
//   payload: id,
// });
