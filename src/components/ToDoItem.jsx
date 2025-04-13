import React, { useState } from "react";

function ToDoItem ( { id, item, onCheck } ) {
	return (
		<li
			onClick={() => {
				onCheck(id)
			}}
		>
			{item}
		</li>
	);
};

export default ToDoItem;