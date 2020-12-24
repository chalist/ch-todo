import { TodoItemInterface, TodoHistory } from "../interfaces";

export default function (
  newTodo: TodoItemInterface,
  oldTodo: TodoItemInterface
): TodoHistory {
  const changes = [];

  for (const [key, value] of Object.entries(oldTodo)) {
    const newTodoValue = newTodo[key as keyof TodoItemInterface];
    if (key !== "history" && value !== newTodoValue) {
      changes.push({
        keyName: key,
        from: value,
        to: newTodoValue,
      });
    }
  }

  return {
    date: new Date(),
    changes,
  } as TodoHistory;
}
