import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import TopicTags from "../../medium/TopicTags"

const mapStateToProps = (state, ownProps = {}) => {
  // console.log("mapStateToProps", state)
  // console.log("ownProps", ownProps)

  return {
    topics: state.topics
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("onClick")
  }
})

// create container by connecting
// the store's state to TopicTags' props
const AllTopics = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(TopicTags)

export default withRouter(AllTopics)
