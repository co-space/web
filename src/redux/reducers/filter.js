/*
  Create a new spaces' state
*/

// import {posts} from "../stores"

import {
  SET_FILTER_CITY
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
    case SET_FILTER_CITY:
      return {
        ...state,
        city: action.payload.city
      }
    default:
      return state
  }
}
