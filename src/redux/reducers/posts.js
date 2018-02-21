/*
  Create a new posts' state
*/

import {posts} from "../stores"

import {
  SAVE_ALL_POSTS, SELECT_POST, LOADING_TRUE, LOADING_FALSE
  // HANDLE_ERROR
} from "../actions/types"

// -----------------------------------------------------------------------------

// get all posts for view component's props
export const getAllPosts = state => {
  console.log("getAllPosts", state)

  return state.getStore()
}

export default(state = posts, action) => {
  switch (action.type) {
      // save all posts into dedicated posts state
    case SAVE_ALL_POSTS:
      return {
        ...state,
        all: action.payload.data
      }
    case SELECT_POST:
      return {
        ...state,
        selected: action.payload.data
      }
    case LOADING_TRUE:
      return true
    case LOADING_FALSE:
      return false
    default:
      return state
  }
}
