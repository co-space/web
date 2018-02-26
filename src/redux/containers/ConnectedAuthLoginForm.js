import { connect } from "react-redux"

import AuthLoginForm from "../../medium/AuthLoginForm"

import {
  // get various actions creator to dispatch the actions
  setToken,
  getActiveUser
} from "../actions"

const mapStateToProps = (state, ownProps = {}) => {
  return {
    token : state.auth.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setToken: (param) => dispatch(setToken(param)),
  getActiveUser: (param) => dispatch(getActiveUser(param))
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const ConnectedAuthLoginForm = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(AuthLoginForm)

export default ConnectedAuthLoginForm
