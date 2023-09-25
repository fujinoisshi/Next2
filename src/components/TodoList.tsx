import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./todo";
import TodoListDone from "./TodoListDone";
import "./../app/App.css";

// interface Todo {
//   id: number;
//   text: string;
//   isComplete?: boolean;
// }

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // 初期値を昇順に設定
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (todo: any) => {
    //未入力だったらそのまま
    if (!todo.text || /^\s*$/.test(todo.text)) {
      const nyuuryokusiro = "何か入力してください";
      return;
    }

    // const dateStr = "2023-08-16T12:00:00.000Z";
    // const parsedDate = new Date(Date.parse(dateStr));
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo.text,
      createdAt: new Date(), // タスクが追加された日時を取得
    };

    // const newTodo = {
    //   id: Math.floor(Math.random() * 10000),
    //   text: "新しいタスク",
    //   createdAt: parsedDate,
    // };
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);

    // console.log(...todos);
    console.log("todo", todo); //これは今入力したやつ
    console.log("new", newTodos); //新しいやつも含めた全部
  };

  const sortedTodos = [...todos].sort((a, b) => {
    const dateA = a.createdAt ? a.createdAt.getTime() : 0;
    const dateB = b.createdAt ? b.createdAt.getTime() : 0;

    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const updateTodo = (todoId: number, newValue: any) => {
    //未入力だったら、そのまま返す
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    // 完了したタスクを completedTodos に追加
    const completedItem = updatedTodos.find((todo) => todo.id === id);
    if (completedItem && completedItem.isComplete) {
      setCompletedTodos([...completedTodos, completedItem]);
    } else {
      // 完了していない場合、completedTodos から削除
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    }

    setTodos(updatedTodos);
  };

  console.log("completedTodos", completedTodos);
  return (
    <>
      <div className="todo-list-container">
        <div className="todo-app">
          <h1 className="headtext">What's your tasks?</h1>
          <span className="sortButton2">
            <button className="sortButton" onClick={toggleSortOrder}>
              {sortOrder === "asc" ? "Sort Ascending" : "Sort Descending"}
            </button>
          </span>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={sortedTodos} // ここも修正
            completeTodo={toggleComplete}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </div>
        <div className="todo-app2">
          <TodoListDone completedTodos={completedTodos} />{" "}
          {/* TodoListDoneにtodosを渡す */}
        </div>
      </div>
    </>
  );
}

export default TodoList;
