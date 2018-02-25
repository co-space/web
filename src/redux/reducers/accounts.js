/*
  Create a new spaces' state
*/

// import {posts} from "../stores"

import {
  GET_USER_PROFILE, GET_USER_REVIEW_HISTORY, GET_USER_COSPACE_LIST
  // HANDLE_ERROR
} from "../actions/types"

// -----------------------------------------------------------------------------

// get all posts for view component's props
// export const getAllPosts = state => {
//   console.log("getAllPosts", state)
//
//   return state.getStore()
// }

export default(state = {}, action) => {
  switch (action.type) {
      // save all posts into dedicated posts state
      // console.log(action);
    case GET_USER_PROFILE:
      return {
        ...state,
        selected_profile: action.payload.data
      }
    case GET_USER_REVIEW_HISTORY:
      return {
        ...state,
        selected_review_history: action.payload.data
      }
    case GET_USER_COSPACE_LIST:
      return {
        ...state,
        selected_cospace_list: action.payload.data
      }
    default:
      return state
  }
}
