/*
  Reducers are used to create a new store's state
*/

import { combineReducers } from "redux"

import posts from "./posts"
import topics from "./topics"
import spaces from "./spaces"
import accounts from "./accounts"
import auth from "./auth"




const rootReducer = combineReducers({
  posts,
  topics,
  spaces,
  accounts,
  auth
})

export default rootReducer
