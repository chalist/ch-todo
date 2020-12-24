import React from "react";
import AppBar from "@material-ui/core/AppBar";

import { Provider as TodoProvider } from "./context";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

import theme from "./theme";
import "./assets/styles.scss";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Photos</Typography>
          </Toolbar>
        </AppBar>
        <TodoProvider>
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
