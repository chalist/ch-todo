import React from "react";
import { TodoAction } from "./ActionsTypes";

export enum Status {
  "TODO" = "TODO",
  "BLOCKED" = "BLOCKED",
  "IN_PROGRESS" = "IN_PROGRESS",
  "IN_QA" = "IN_QA",
  "DONE" = "DONE",
  "DEPLOY" = "DEPLOY",
}

export interface TodoHistory {
  date: Date;
  changes: Array<{
    from: string;
    to: string;
    keyName: string;
  }>;
}

export interface TodoItemInterface {
  id: string;
  title: string;
  description: string;
  status: Status;
  history?: TodoHistory[];
}

export interface TodoListInterface {
  todos: TodoItemInterface[];
}

export interface StateModel {
  state: TodoListInterface;
  dispatch: React.Dispatch<TodoAction>;
}
