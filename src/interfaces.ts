import React from "react";
import { TodoAction } from "./ActionsTypes";

export interface TodoItemInterface {
  id: string;
  title: string;
  description?: string;
  status: string;
}

export interface TodoListInterface {
  todos: TodoItemInterface[];
}

export interface StateModel {
  state: TodoListInterface;
  dispatch: React.Dispatch<TodoAction>;
}
