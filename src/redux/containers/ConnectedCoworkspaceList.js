import { connect } from "react-redux"

import SegmentCoworkspaceList from "../../large/SegmentCoworkspaceList"

import {
  // get various actions creator to dispatch the actions
  fetchAllSpaces
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    space_lists : state.spaces.space_lists
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllSpaces: (test) => dispatch(fetchAllSpaces(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedCoworkspaceList = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentCoworkspaceList)

export default ConnectedCoworkspaceList
