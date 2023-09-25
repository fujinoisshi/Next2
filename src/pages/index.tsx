// export default function firstpost() {
//   return (
//     <div>
//       <h1>最初の投稿</h1>
//     </div>
//   );
// }

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./../app/App";

class MainApp extends Component {
  componentDidMount() {
    // コンポーネントがDOMにアタッチされた後に実行されるクライアントサイドのコード
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
  }

  render() {
    return <div id="root"></div>;
  }
}

export default MainApp;
