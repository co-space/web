import { connect } from "react-redux"

import Info from "../../pages/Info"

import {
  // get various actions creator to dispatch the actions
  fetchOneSpace
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected : state.spaces.selected_space,
    active_user: state.auth.active_user,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchOneSpace: (test) => dispatch(fetchOneSpace(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedInfo = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(Info)

export default ConnectedInfo
