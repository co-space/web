import { connect } from "react-redux"

import SegmentCTAHeader from "../../large/SegmentCTAHeader"

import {
  // get various actions creator to dispatch the actions
  fetchOneSpace
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    token : state.auth.token,
    active_user: state.auth.active_user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOneSpace: (test) => dispatch(fetchOneSpace(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedCTAHeader = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentCTAHeader)

export default ConnectedCTAHeader
