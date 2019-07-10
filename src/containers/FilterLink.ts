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

import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import {
  setVisibilityFilter,
  VisibilityFilters
} from "../ducks/visibilityFilter";
import Link, { ILinkProps } from "../components/Link";
import { IGlobalState } from "../ducks";

interface IFilterLinkProps {
  filter: VisibilityFilters;
}
const mapStateToProps: MapStateToProps<
  Pick<ILinkProps, "active">,
  IFilterLinkProps,
  IGlobalState
> = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps: MapDispatchToProps<
  Pick<ILinkProps, "onClick">,
  IFilterLinkProps
> = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
