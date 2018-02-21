import { connect } from "react-redux"
import {
  // get various actions creator to dispatch the actions
  fetchPost
} from "../actions"
import Post from "../../pages/Post"

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
  fetchPost: (test) => dispatch(fetchPost(test))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedPost = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(Post)

export default ConnectedPost
