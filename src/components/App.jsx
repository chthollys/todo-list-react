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
    setInputList((prevList) => {
      return prevList.filter((item) => item.checked == false)
    })
    if (inputValue.trim() === "") return;
    setInputList((prevList) => [...prevList, {text: inputValue, checked: false}]);
    setInputValue("");
  };

  const markDeleteItem = (id) => {
    setInputList((prevList) =>
      prevList.map((item, index) =>
        index === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    console.log(inputList);
  }, [inputList])

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onFormSubmit={onFormSubmit} onChangeInput={onChangeInput} inputValue={inputValue}/>
      <div>
        <ul>
          {inputList.map((item, index) => (
            <ToDoItem key={index} id={index} item={item.text} included={true} onCheck={markDeleteItem} checked={item.checked}/>
          ))}
          {inputValue && <ToDoItem included={false} item={inputValue} />}
        </ul>
      </div>
    </div>
  );
};

export default App;
