# To-Do List Application

This is a simple **To-Do List Application** built with **React**. It allows users to manage their tasks by adding new tasks, marking tasks as completed, and dynamically updating the task list. The project demonstrates the use of React hooks like `useState` and `useEffect` to manage state and lifecycle events.

---

## Features

- **Add Tasks**: Users can add new tasks to the list using the input field.
- **Mark as Completed**: Clicking on a task toggles its completion status, visually represented by a line-through style.
- **Remove Completed Tasks**: Completed tasks are automatically removed when a new task is added.
- **Dynamic Rendering**: The task list dynamically updates as tasks are added or modified.
- **Input Validation**: Prevents adding empty or whitespace-only tasks.

---

## Components

### 1. `App.jsx`
- Manages the overall state of the application, including the task list (`inputList`) and the input value (`inputValue`).
- Handles adding tasks, toggling completion, and filtering completed tasks.
- Passes necessary props to child components (`InputArea` and `ToDoItem`).

### 2. `InputArea.jsx`
- A form component for adding new tasks.
- Includes an input field and a submit button.
- Handles user input and form submission.

### 3. `ToDoItem.jsx`
- Represents individual tasks in the list.
- Handles click events to toggle the completion status of tasks.
- Dynamically applies a line-through style to completed tasks.

---

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/chthollys/todo-list-react.git
    cd todo-list-react
2. Install dependencies:
    ```bash
    pnpm install
3. Start the development server:
    ```bash
    pnpm run dev
4. Open the application in your browser at
    ```bash
    http://localhost:3000

## Future Improvements
1. Add persistent storage using local storage or a backend API.
2. Implement task categories or priorities.
3. Add animations for task addition and removal.
4. Improve styling for a better user experience.