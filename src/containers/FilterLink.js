// Migrate this file to typescript:
//
// ✅ Rename the file using the typescript extension
// ✅ Define and interface for the FilterLink props
// ✅ Add type information for the mapStateToProps function
// ✅ Add type information for the mapDispathToProps function
//
// 💎💎💎 Bonus 💎💎💎
// 🚀 Change the code to use the MapStateToProps and MapDispatchToProps
//    generic types from react-redux

import { connect } from "react-redux";
import { setVisibilityFilter } from "../ducks/visibilityFilter";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
