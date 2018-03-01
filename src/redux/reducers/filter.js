/*
  Create a new spaces' state
*/

// import {posts} from "../stores"

import {
  SET_FILTER_CITY, SET_FILTER_MOST_REVIEW
  // HANDLE_ERROR
} from "../actions/types"

// -----------------------------------------------------------------------------

// get all posts for view component's props
// export const getAllPosts = state => {
//   console.log("getAllPosts", state)
//
//   return state.getStore()
// }

export default(state = {most_review: false}, action) => {
  switch (action.type) {
      // save all posts into dedicated posts state
    case SET_FILTER_CITY:
      return {
        ...state,
        city: action.payload.city
      }
    case SET_FILTER_MOST_REVIEW:
      return {
        ...state,
        most_review: action.payload.most_review
      }
    default:
      return state
  }
}
