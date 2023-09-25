import React, { useState, useEffect, useRef } from "react";

interface Todo {
  id: number;
  text: string;
  isComplete?: boolean;
}

function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //入力内容の反映　多分送信押してなくても　onChange
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //送信押した時の挙動　onSubmit
  const handleSubmit = (e) => {
    // デフォルト挙動の阻止
    // 通常、フォームが送信されるとページが再読み込みされますが、
    // この行によりページが再読み込みされず、Reactコンポーネント内で定義されたカスタム動作を実行できます。
    e.preventDefault();

    // 新しいタスクの場合と編集されるタスクの場合で createdAt を設定
    const newTodo = {
      id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
      text: input,
      createdAt: new Date(),
    };

    // 親コンポーネントから受け取った onSubmit プロパティ（関数）を呼び出します。
    // この関数には新しいタスクの情報が引数として渡されます。
    // この関数は、新しいタスクを実際に追加または更新するために親コンポーネントで定義されています。
    //多分送信時にIDとかタスク内容を割り振ってる

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });

    props.onSubmit(newTodo);
    setInput("");

    //フィールドクリア
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
// 完了リスト　右に作る？　もしくはボタン切り替え？　これなら一緒に見れた方が良さそう
// 日付ソート　日付自動追記

export default TodoForm;
