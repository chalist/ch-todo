import React from "react";

import { Provider as TodoProvider } from "./context";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
