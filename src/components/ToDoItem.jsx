import React, { useState } from "react";

function ToDoItem ( { id, item, included, onCheck, checked } ) {
	// const [isCompleted, setIsCompleted] = useState(checked);
	const onClickList = (id) => {
		// setIsCompleted((prev) => !prev);
		onCheck(id);
	}
	const errorMessage = (mess) => alert(mess);
	return (
		<li
			onClick={included ? () => onClickList(id) : () => errorMessage("Please complete the input process")}
			style={{textDecoration : checked ? "line-through" : "none"}}
		>
			{item}
		</li>
	);
};

export default ToDoItem;