import React, { useState } from "react";

function ToDoItem ( { id, item, onCheck, included } ) {
	const errorMessage = (mess) => {
		alert(mess);
	}

	return (
		<li
			onClick={included ? () => onCheck(id) : () => errorMessage("Please complete the input process")}
		>
			{item}
		</li>
	);
};

export default ToDoItem;