import { connect } from "react-redux"

import SegmentCospaceList from "../../large/SegmentCospaceList"

import {
  // get various actions creator to dispatch the actions
  fetchCospaceList
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    selected_cospace_list : state.accounts.selected_cospace_list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCospaceList: (param) => dispatch(fetchCospaceList(param))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedCospaceList = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentCospaceList)

export default ConnectedCospaceList
