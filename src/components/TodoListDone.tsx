import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./todo";
import TodoList from "./TodoList";
import "./../app/App.css";

function TodoListDone({ completedTodos }) {
  //   return (
  //     <div>
  //       <h2>Completed Tasks</h2>
  //       <ul>
  //         {completedTodos.map((todo) => (
  //           <li key={todo.id}>{todo.text}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // // interface Todo {
  // //   id: number;
  // //   text: string;
  // //   isComplete?: boolean;
  // // }

  // function TodoListDone(todos) {
  //   const [todoss, setTodos] = useState([]);
  //   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // 初期値を昇順に設定

  //   // const addTodo = (todo: any) => {
  //   //   //未入力だったらそのまま
  //   //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //   //     const nyuuryokusiro = "何か入力してください";
  //   //     return;
  //   //   }

  //   //   // const dateStr = "2023-08-16T12:00:00.000Z";
  //   //   // const parsedDate = new Date(Date.parse(dateStr));
  //   //   const newTodo = {
  //   //     id: Math.floor(Math.random() * 10000),
  //   //     text: todo.text,
  //   //     createdAt: new Date(), // タスクが追加された日時を取得
  //   //   };

  //   //   // const newTodo = {
  //   //   //   id: Math.floor(Math.random() * 10000),
  //   //   //   text: "新しいタスク",
  //   //   //   createdAt: parsedDate,
  //   //   // };
  //   //   const newTodos = [newTodo, ...todos];

  //   //   setTodos(todos);

  //   //   // console.log(...todos);
  //   //   console.log("todo", todo); //これは今入力したやつ
  //   //   console.log("new", newTodos); //新しいやつも含めた全部
  //   // };
  //   // const sortedTodos = [...todos].sort((a, b) => {
  //   //   const dateA = a.createdAt ? a.createdAt.getTime() : 0;
  //   //   const dateB = b.createdAt ? b.createdAt.getTime() : 0;

  //   //   if (sortOrder === "asc") {
  //   //     return dateA - dateB;
  //   //   } else {
  //   //     return dateB - dateA;
  //   //   }
  //   // });

  //   // const toggleSortOrder = () => {
  //   //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   // };

  //   const updateTodo = (todoId: number, newValue: any) => {
  //     //未入力だったら、そのまま返す
  //     if (!newValue.text || /^\s*$/.test(newValue.text)) {
  //       return;
  //     }

  //     setTodos((prev) =>
  //       prev.map((item) => (item.id === todoId ? newValue : item))
  //     );
  //   };

  //   const removeTodo = (id: number) => {
  //     const removedArr = [...todos].filter((todo) => todo.id !== id);

  //     setTodos(todos);
  //   };

  //   const completeTodo = (id: number) => {
  //     let updatedTodos = todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.isComplete = !todo.isComplete;
  //       }
  //       return todo;
  //     });
  //     setTodos(todos);
  //   };

  //   return (
  //     <>
  //       <div className="todo-app2">
  //         <h1 className="headtext">Your tasks to have done</h1>
  //         {/* <span className="sortButton2">
  //           <button className="sortButton" onClick={toggleSortOrder}>
  //             {sortOrder === "asc" ? "Sort Ascending" : "Sort Descending"}
  //           </button>
  //         </span> */}
  //         {/* <TodoForm onSubmit={addTodo} /> */}
  //         <Todo
  //           todos={todoss} // ここも修正
  //           completeTodo={completeTodo}
  //           removeTodo={removeTodo}
  //           updateTodo={updateTodo}
  //         />
  //       </div>
  //     </>
  //   );
  // }
  return (
    <div className="todo-app2">
      <h1 className="headtext">Your tasks to have done</h1>
      {completedTodos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div className="todo-date">
            {new Date(todo.createdAt).toLocaleString()}
          </div>
          <div key={todo.id}>{todo.text}</div>
          <div className="icons">
            {/* <button onClick={() => removeTodo(todo.id)} className="delete-icon">
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
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoListDone;

// // TodoListDoneコンポーネント内
// import React, { useState } from "react";

// function TodoListDone({ todos }) {
//   // todosを受け取り、表示または処理します
//   // この例ではtodosをマップして表示しています
//   return (
//     <div>
//       <h2>Completed Tasks</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoListDone;
