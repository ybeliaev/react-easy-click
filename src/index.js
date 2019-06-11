import React from "react";
import ReactDOM from "react-dom";
import List from "./list";

import "./styles.css";

function App() {
  const dataList = [
    { label: "Make fitness", important: "true", id: 1 },
    { label: "Drink vodka", importeat: "false", id: 2 },
    { label: "Read book", important: "true", id: 3 }
  ];
  return (
    <div className="App">
      <h1>Hello !</h1>
      <h2>Пример простого клика:</h2>
      <List dataProps={dataList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
