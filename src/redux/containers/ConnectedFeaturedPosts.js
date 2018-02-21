import { connect } from "react-redux"

import SegmentFeaturedPosts from "../../large/SegmentFeaturedPosts"

const mapStateToProps = (state, ownProps = {}) => {
  // console.log("mapStateToProps", state)
  // console.log("ownProps", ownProps)

  return {
    posts: {
      featured: state.posts.featured
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("onClick")
  }
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedFeaturedPosts = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentFeaturedPosts)

export default ConnectedFeaturedPosts
