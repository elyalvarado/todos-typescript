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
