import React, { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const textInput = document.getElementById("todo-text") as HTMLInputElement;
    textInput.value = "";
    setTodos(prevTodos => [
      ...prevTodos,
      { id: (Math.random() * 1000).toString(), text: text },
    ]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;
