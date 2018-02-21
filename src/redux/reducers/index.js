/*
  Reducers are used to create a new store's state
*/

import { combineReducers } from "redux"

import posts from "./posts"
import topics from "./topics"

const rootReducer = combineReducers({
  posts,
  topics
})

export default rootReducer
