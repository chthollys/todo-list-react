import React from "react";

function InputArea({ onFormSubmit, onChangeInput, inputValue }) {
  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        type="text"
        placeholder="Add a new item..."
        onChange={onChangeInput}
        value={inputValue}
      />
      <button type="submit">
        <span>Save</span>
      </button>
    </form>
  )
};

export default InputArea;