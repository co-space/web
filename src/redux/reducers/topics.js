/*
  Create a new topics' state
*/

import { topics } from "../stores"

import {
  SAVE_ALL_TOPICS,
  GET_ALL_TOPICS,
  SELECT_TOPIC,
  LOADING_TRUE,
  LOADING_FALSE
  // HANDLE_ERROR
} from "../actions/types"

// -----------------------------------------------------------------------------

export default (state = topics, action) => {
  switch (action.type) {
    // save all topics into dedicated topics state
    case SAVE_ALL_TOPICS:
      return {
        ...state,
        all: action.payload.data
      }
    case GET_ALL_TOPICS:
      return {
        ...state,
        topics: state.topics
      }
    case SELECT_TOPIC:
      return action.payload.data
    case LOADING_TRUE:
      return true
    case LOADING_FALSE:
      return false
    default:
      return state
  }
}
