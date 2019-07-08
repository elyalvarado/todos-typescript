// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Fix the errors shown by the compiler

import reducer, {
  setVisibilityFilter,
  VisibilityFilters
} from "./visibilityFilter";

describe("visibilityFilter reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
  });

  it("should handle SET_VISIBILITY_FILTER", () => {
    expect(
      reducer(VisibilityFilters.SHOW_ALL, {
        type: "SET_VISIBILITY_FILTER",
        filter: VisibilityFilters.SHOW_ACTIVE
      })
    ).toEqual(VisibilityFilters.SHOW_ACTIVE);

    expect(
      reducer(VisibilityFilters.SHOW_ALL, {
        type: "SET_VISIBILITY_FILTER",
        filter: VisibilityFilters.SHOW_COMPLETED
      })
    ).toEqual(VisibilityFilters.SHOW_COMPLETED);
  });
});

describe("visibilityFilter actions", () => {
  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });
});
