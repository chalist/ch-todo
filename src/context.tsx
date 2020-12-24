import React, { ReactElement, useReducer } from "react";
import { TodoAction } from "./ActionsTypes";
import { TodoListInterface, StateModel } from "./interfaces";
import createHistory from "./lib/CreateHistory";

import PropTypes from "prop-types";

const reducer = (
  state: TodoListInterface,
  action: TodoAction
): TodoListInterface => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "EDIT":
      const indexOfItem = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexOfItem === -1) {
        return state;
      }
      const histories = state.todos[indexOfItem].history || [];
      const history = createHistory(action.payload, state.todos[indexOfItem]);

      const todos = [...state.todos];

      todos[indexOfItem] = action.payload;
      if (history.changes.length > 0) {
        todos[indexOfItem].history = [history, ...histories];
      } else {
        todos[indexOfItem].history = histories;
      }

      return {
        ...state,
        todos,
      };

    default:
      return state;
  }
};

export const Context = React.createContext({} as StateModel);

interface Props {
  children: ReactElement;
  defaultState: TodoListInterface;
}

export const Provider: React.FC<Props> = ({ children, defaultState }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  localStorage.setItem("app_state", JSON.stringify(state));

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any,
  defaultState: PropTypes.any,
};
