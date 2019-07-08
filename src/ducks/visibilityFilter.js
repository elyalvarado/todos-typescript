// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Change the VisibilityFilters to an Enum using strings
// ✅ Fix the function signatures (hint: use an interface for the action)
//
// 💎💎💎 Bonus 💎💎💎
// 🚀 Export a type with the shape of the visibility filter state
// 🚀 Use the Reducer type from redux to type the reducer function (hint:
//    it uses the type with state shape

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// Actions
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// Action Creators
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

// Reducer
const reducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
