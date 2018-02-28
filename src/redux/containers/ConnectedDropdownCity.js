import { connect } from "react-redux"

import DropdownCity from "../../medium/DropdownCity"

import {
  // get various actions creator to dispatch the actions
  fetchOneSpace,
  setFilterCity
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected : state.spaces.selected_space,
    abc : "abc"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOneSpace: (test) => dispatch(fetchOneSpace(test)),
  setFilterCity: (param) => dispatch(setFilterCity(param))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedDropdownCity = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(DropdownCity)

export default ConnectedDropdownCity
