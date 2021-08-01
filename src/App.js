import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const newTodo = (e) => {
    setTodos([...todos, e]);
  };

  const delHandler = (todoText) => {
    const t = todos.filter((todo) => todo !== todoText);
    setTodos(t);
  };

  return (
    <div className="bg-gray-200 ml-5 mt-5 w-1/3">
      <NewTodo newTodo={newTodo}></NewTodo>
      {todos.map((t, i) => (
        <TodoItem Todo={t} key={i} delHandler={delHandler}></TodoItem>
      ))}
    </div>
  );
}

export default App;
