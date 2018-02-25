import { connect } from "react-redux"

import SegmentReviewHistory from "../../large/SegmentReviewHistory"

import {
  // get various actions creator to dispatch the actions
  fetchUserReviews
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected_review_history : state.accounts.selected_review_history
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserReviews: (param) => dispatch(fetchUserReviews(param)),
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedReviewHistory = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentReviewHistory)

export default ConnectedReviewHistory
