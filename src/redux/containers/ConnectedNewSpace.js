import { connect } from "react-redux"

import SegmentNewSpace from "../../large/SegmentNewSpace"

import {
  // get various actions creator to dispatch the actions
  fetchOneSpace
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected : state.spaces.selected_space,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOneSpace: (test) => dispatch(fetchOneSpace(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedNewSpace = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentNewSpace)

export default ConnectedNewSpace
