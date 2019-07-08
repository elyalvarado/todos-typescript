// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Use the right type information from React for the component

import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
