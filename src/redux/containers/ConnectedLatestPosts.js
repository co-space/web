import { connect } from "react-redux"
import {
  // get various actions creator to dispatch the actions
  fetchAllPosts,
  fetchPost
} from "../actions"
import SegmentLatestPosts from "../../large/SegmentLatestPosts"

const mapStateToProps = (state, ownProps = {}) => {
  // console.log("mapStateToProps", state)
  // console.log("ownProps", ownProps)

  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (test) => {
    console.log(`onClick ${test}`)
  },
  fetchAllPosts: (test) => dispatch(fetchAllPosts(test)),
  fetchPost: (test) => dispatch(fetchPost(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedLatestPosts = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentLatestPosts)

export default ConnectedLatestPosts
