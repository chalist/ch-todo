import { TodoItemInterface } from "./interfaces";

export type TodoAction =
  | { type: "CREATE"; payload: TodoItemInterface }
  | { type: "CHANGE_TO_TODO"; payload: string }
  | { type: "CHANGE_TO_BLOCK"; payload: string }
  | { type: "CHANGE_TO_IN_PROGRESS"; payload: string }
  | { type: "CHANGE_TO_IN_QA"; payload: string }
  | { type: "CHANGE_TO_DONE"; payload: string }
  | { type: "CHANGE_TO_DEPLOY"; payload: string };
