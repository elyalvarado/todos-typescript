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

import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ITodo, toggleTodo } from "../ducks/todos";
import TodoList, { ITodoListProps } from "../components/TodoList";
import { VisibilityFilters } from "../ducks/visibilityFilter";
import { IGlobalState } from "../ducks";

const getVisibleTodos = (
  todos: ITodo[],
  filter: VisibilityFilters
): ITodo[] => {
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

const mapStateToProps: MapStateToProps<
  Pick<ITodoListProps, "todos">,
  {},
  IGlobalState
> = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps: MapDispatchToProps<
  Pick<ITodoListProps, "toggleTodo">,
  {}
> = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
