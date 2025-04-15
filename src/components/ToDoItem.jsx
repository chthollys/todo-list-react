import React, { useState } from "react";

function ToDoItem ( { item, included } ) {
	const [isCompleted, setIsCompleted] = useState(false);
	const onClickList = () => {
		setIsCompleted((prev) => !prev);
	}
	const errorMessage = (mess) => alert(mess);
	return (
		<li
			onClick={included ? onClickList : () => errorMessage("Please complete the input process")}
			style={{textDecoration : isCompleted ? "line-through" : "none"}}
		>
			{item}
		</li>
	);
};

export default ToDoItem;