// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Define and interface for the To-do list props
//    (hint: that interface for the to-do might be useful here)
// ✅ Use the right type information from React for the component
// ✅ Delete the propTypes

import React from "react";
import Todo from "./Todo";
import { ITodo } from "../ducks/todos";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
