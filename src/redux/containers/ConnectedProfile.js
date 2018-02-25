import { connect } from "react-redux"

import SegmentProfile from "../../large/SegmentProfile"

import {
  // get various actions creator to dispatch the actions
  fetchUserProfile
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected_profile : state.accounts.selected_profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserProfile: (param) => dispatch(fetchUserProfile(param))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedProfile = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentProfile)

export default ConnectedProfile
