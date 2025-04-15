import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from "./InputArea.jsx";

function App() {

  const [inputList, setInputList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setInputList((prevList) => [...prevList, inputValue]);
    setInputValue("");
  };

  const deleteItem = (index) => {
    setInputList((prevList) => {
      return prevList.filter((_, id) => id !== index);
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onFormSubmit={onFormSubmit} onChangeInput={onChangeInput} inputValue={inputValue}/>
      <div>
        <ul>
          {inputList.map((value, index) => (
            <ToDoItem key={index} id={index} item={value} included={true} onCheck={deleteItem}/>
          ))}
          {inputValue && <ToDoItem included={false} item={inputValue} />}
        </ul>
      </div>
    </div>
  );
};

export default App;
