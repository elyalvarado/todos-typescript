// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Define and interface for the Add to-do props
//    (hint: you can use the Dispatch type from Redux)
// ✅ Use the right type information from React for the component
// ✅ Delete the propTypes
//
// 💎💎💎 Bonus 💎💎💎
// 🚀 Change the code to use a useRef hook with the right Generic

import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../ducks/todos";
import { Dispatch } from "redux";

interface IAddTodoProps {
  dispatch: Dispatch;
}
const AddTodo: React.FC<IAddTodoProps> = ({ dispatch }) => {
  let input: HTMLInputElement | null;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input!.value.trim()) {
            return;
          }
          dispatch(addTodo(input!.value));
          input!.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
