



'use client';

// 必要なコンポーネントをインポート
import type { NextPage } from 'next'
import { useState } from "react"

// バックエンドのAPIからJSON形式のデータを取得する関数を追加
interface JsonData {
  id: number;
  title: string;
  text: string;
};

type JsonDataResponse = JsonData[];

const FetchTestApi = async (): Promise<JsonDataResponse> => {
  // バックエンドのAPI「http://localhost/api/v1/test」からデータを取得
  const res = await fetch("http://localhost:3000/api/v1/test",
  
  );
 // 取得したデータをJSON形式に変換
  const result = (await res.json()) as JsonDataResponse;
  return result;
};



// メイン処理
const Test: NextPage = () => {

    const [displayData, setDisplayData] = useState<JsonDataResponse>([]);
  // バックエンドのAPIからJSON形式のデータを取得し、
  // 取得したデータをdisplayDataに設定する関数
  const getTestApi = async() => {
    
    const jsonData = await FetchTestApi();
    // 取得した値を文字列型に変換してから設定
    //setDisplayData(JSON.stringify(jsonData));
    
    setDisplayData(jsonData);

    console.log(displayData);
    
  };

   // useStateで初期値をdisplayDataに設定
//     getTestApi
//   );




  // 関数「getTestApi」を実行
  //getTestApi();


  
  
  // 画面にdisplayDataの値を表示
  return (
    <div>

<button type="submit" onClick={getTestApi}>取得</button>



    </div>
  );
};


export default Test;


















//axios確認コード

/*

'use client';

import axios from 'axios';
// 必要なコンポーネントをインポート
import type { NextPage } from 'next'
import { useState } from "react"


// バックエンドのAPIからJSON形式のデータを取得する関数を追加
interface JsonData {
  id: number;
  title: string;
  text: string;
};

type JsonDataResponse = JsonData[];


const FetchTestApi = async () => {
  // バックエンドのAPI「http://localhost/api/v1/test」からデータを取得
  const res = await axios.get("http://localhost:3000/api/v1/test");
 
  // 取得したデータをJSON形式に変換
  //const result = (await res.json()) as JsonDataResponse;
  console.log(res);
  //return res;
};


// メイン処理
const Test: NextPage = () => {


return (
  <div>

<button type="submit" onClick={FetchTestApi}>取得</button>



  </div>
);
};





export default Test;
*/
