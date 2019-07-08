// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Define and interface for the To-do props
//    (hint: Use the right Event Handler type from React and set
//    the generic for the element on it)
// ✅ Use the right type information from React for the component
// ✅ Delete the propTypes

import React from "react";

interface ITodoProps {
  completed: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  text: string;
}
const Todo: React.FC<ITodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
);

export default Todo;
