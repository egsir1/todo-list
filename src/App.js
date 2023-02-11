import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [showData, setShowData] = useState([]);

  const deleteItem = (id) => {
    setShowData(() => showData.filter((item) => item.id !== id));
  };

  const dataPointer = (inputVal) => {
    setShowData([
      ...showData,
      {
        id: Math.floor(Math.random() * 1000),
        inputVal,
      },
    ]);
  };
  console.log(showData);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div>
        <Form dataPointer={dataPointer} />
      </div>
      <div className="list">
        <List result={showData} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
