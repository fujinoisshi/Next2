import React from "react";
import "./App.css";
import TodoList from "./../components/TodoList";
import TodoListDone from "./../components/TodoListDone.tsx";
function App() {
  return (
    // <div className="todo-list-container">
    <div>
      <TodoList />
    </div>
    //  <div className="todo-app2">
    //   <TodoListDone />
    // </div>
    // </div>
  );
}

export default App;
