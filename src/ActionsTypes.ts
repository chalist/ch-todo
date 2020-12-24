import { TodoItemInterface } from "./interfaces";

export type TodoAction =
  | { type: "CREATE"; payload: TodoItemInterface }
  | { type: "EDIT"; payload: TodoItemInterface };
