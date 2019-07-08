// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Fix the errors shown by the compiler

import reducer, * as actions from "./todos";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      reducer([], { type: "ADD_TODO", text: "Run the tests", id: 0 })
    ).toEqual([{ text: "Run the tests", completed: false, id: 0 }]);

    expect(
      reducer([{ text: "Run the tests", completed: false, id: 0 }], {
        type: "ADD_TODO",
        text: "Use Redux",
        id: 1
      })
    ).toEqual([
      { text: "Run the tests", completed: false, id: 0 },
      { text: "Use Redux", completed: false, id: 1 }
    ]);

    expect(
      reducer(
        [
          { text: "Run the tests", completed: false, id: 0 },
          { text: "Use Redux", completed: false, id: 1 }
        ],
        { type: "ADD_TODO", text: "Fix the tests", id: 2 }
      )
    ).toEqual([
      { text: "Run the tests", completed: false, id: 0 },
      { text: "Use Redux", completed: false, id: 1 },
      { text: "Fix the tests", completed: false, id: 2 }
    ]);
  });
  it("should handle TOGGLE_TODO", () => {
    expect(
      reducer(
        [
          { text: "Run the tests", completed: false, id: 1 },
          { text: "Use Redux", completed: false, id: 0 }
        ],
        { type: "TOGGLE_TODO", id: 1 }
      )
    ).toEqual([
      { text: "Run the tests", completed: true, id: 1 },
      { text: "Use Redux", completed: false, id: 0 }
    ]);
  });
});

describe("todos actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(actions.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "Use Redux"
    });
  });
  it("toggleTodo should create TOGGLE_TODO action", () => {
    expect(actions.toggleTodo(1)).toEqual({ type: "TOGGLE_TODO", id: 1 });
  });
});
