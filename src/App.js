import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoItem from "./components/TodoItem";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const [itemsLeft, setItemsLeft] = useState(0);

  const newTodo = (e) => {
    setTodos([...todos, e]);
    setItemsLeft(itemsLeft + 1);
  };

  const checkedHandler = (checked) => {
    setItemsLeft(itemsLeft - checked);
  };

  const delHandler = (todoText) => {
    const t = todos.filter((todo) => todo !== todoText);
    setTodos(t);
    setItemsLeft(itemsLeft - 1);
  };

  return (
    <div className="bg-gray-200 ml-5 mt-5 w-1/3 pb-3">
      <NewTodo newTodo={newTodo}></NewTodo>
      {todos.map((t, i) => (
        <TodoItem
          Todo={t}
          key={i}
          delHandler={delHandler}
          checkedHandler={checkedHandler}
        ></TodoItem>
      ))}
      <TodoFooter itemsLeft={itemsLeft}></TodoFooter>
    </div>
  );
}

export default App;
