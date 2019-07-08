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
