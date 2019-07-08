// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Create and export an interface with the shape of a To-do
// ✅ Fix the function signatures (hint: use an interface for the action)
//
// 💎💎💎 Bonus 💎💎💎
// 🚀 Export a type with the shape of the to-do state
// 🚀 Use the Reducer type from redux to type the reducer function (hint:
//    it uses the type with state shape

let nextTodoId = 0;

// Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creators
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default reducer;
