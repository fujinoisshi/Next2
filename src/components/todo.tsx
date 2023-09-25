import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    console.log("od", edit.id);
    //id　は変わる
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  // 未完了のタスクのみ表示する
  const uncompletedTodos = todos.filter((todo) => !todo.isComplete);

  return uncompletedTodos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="todo-date">
        {new Date(todo.createdAt).toLocaleString()} {/* 日付を表示 */}
      </div>
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          delete
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >
          edit
        </button>

        <button
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="edit-icon"
        >
          done
        </button>
      </div>
    </div>
  ));
};

export default Todo;
