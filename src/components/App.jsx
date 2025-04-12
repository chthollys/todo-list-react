import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
// let currentIndex = 0;

function App() {

  const [inputList, setInputList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const onChangeInput = (e) => {
  //   const { value } = e.target;
  //   // console.log(value);
  //   setInputValue(value);
  //   setInputList((prevList) => {
  //     return [
  //       ...prevList.slice(0, currentIndex),
  //       value,
  //     ] 
  //   });    
  // };

  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(inputValue);
  //   setInputList((prevList) => {
  //     return [
  //       ...prevList.slice(0, currentIndex - 1),
  //       inputValue
  //     ];
  //   })
  //   setInputValue("");
  //   currentIndex ++;
  // };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setInputList((prevList) => [...prevList, inputValue]);
    setInputValue("");
  };

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue])

  // useEffect(() => {
  //   console.log(inputList);
  // }, [inputList])

  // useEffect(() => {
  //   console.log(listHTML);
  // }, [listHTML])

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={onFormSubmit} className="form">
        <input
         type="text"
         placeholder="Add a new item..."
         onChange={onChangeInput}
         value={inputValue}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {inputList.map((value, index) => (
            <ToDoItem key={index} item={value} />
          ))}
          {inputValue && <ToDoItem item={inputValue} />}
        </ul>
      </div>
    </div>
  );
};

export default App;
