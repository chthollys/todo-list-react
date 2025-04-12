import React, { useState } from "react";

function ToDoItem ( { item } ) {
	const [isCompleted, setIsCompleted] = useState(false);
	const onClickList = () => {
		setIsCompleted((prev) => !prev);
	}
    return (
      <li
				onClick={onClickList}
				style={{textDecoration : isCompleted ? "line-through" : "none"}}
			>
				{item}
			</li>
    );
};

export default ToDoItem;