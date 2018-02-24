/*
  Create a new spaces' state
*/

// import {posts} from "../stores"

import {
  GET_ALL_SPACES
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
    case GET_ALL_SPACES:
      return {
        ...state,
        space_lists : action.payload.data
      }
    default:
      return state
  }
}
