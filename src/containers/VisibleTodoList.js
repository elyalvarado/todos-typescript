// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Add type information for the getVisibleTodos function
// ✅ Add type information for the mapStateToProps function
// ✅ Add type information for the mapDispathToProps function
//
// 💎💎💎 Bonus 💎💎💎
// 🚀 Change the code to use the MapStateToProps and MapDispatchToProps
//    generic types from react-redux

import { connect } from "react-redux";
import { toggleTodo } from "../ducks/todos";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../ducks/visibilityFilter";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
