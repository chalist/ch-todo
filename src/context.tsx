import React, { useReducer } from "react";
import { TodoAction } from "./ActionsTypes";
import { TodoListInterface, StateModel } from "./interfaces";
import PropTypes from "prop-types";

const defaultState: TodoListInterface = {
  todos: [],
};

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

    default:
      return state;
  }
};

export const Context = React.createContext({} as StateModel);

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};
