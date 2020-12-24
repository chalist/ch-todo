import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import TodoForm from "./pages/TodoForm";

import "./assets/styles.scss";

function App() {
  let defaultState = {
    todos: [],
  };
  try {
    const app_state = localStorage.getItem("app_state");
    defaultState = JSON.parse(app_state || "");
  } catch (_) {
    // do nothing
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Task Management</Typography>
            </Toolbar>
          </AppBar>
          <TodoProvider defaultState={defaultState}>
            <Switch>
              <Route path="/edit/:id">
                <TodoForm />
              </Route>
              <Route exact path="/">
                <>
                  <AddTodo />
                  <TodoList />
                </>
              </Route>
              <Route path="*">
                <h2>404</h2>
              </Route>
            </Switch>
          </TodoProvider>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
