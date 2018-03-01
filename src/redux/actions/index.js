import axios from "axios"

import {
  // GET_FEATURED_POSTS,
  SAVE_ALL_POSTS,
  GET_ALL_POSTS,
  SAVE_ALL_TOPICS,
  GET_ALL_TOPICS,
  SELECT_POST,
  SELECT_TOPIC,
  SELECT_PROFILE,
  ACCOUNT_REGISTER,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  SET_LOGIN_TOKEN,
  SET_DECODED_ACCOUNT,
  SUBMIT_NEW_POST,
  GET_ALL_SPACES,
  GET_ONE_SPACE,
  GET_USER_PROFILE,
  GET_USER_REVIEW_HISTORY,
  GET_USER_COSPACE_LIST,
  SET_TOKEN,
  SET_ACTIVE_USER,
  SET_FILTER_KEY,
  SET_FILTER_CITY,
  SET_FILTER_MOST_REVIEW,
  GET_FILTERED_LIST
  // LOADING_TRUE,
  // LOADING_FALSE,
  // HANDLE_ERROR
} from "./types"

// dummy data from initialState
import {topics} from "../stores"

// -----------------------------------------------------------------------------

// emit action to save posts data into store's state
export const saveAllPosts = (payload, response) => ({
  type: SAVE_ALL_POSTS,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

export const requestAllPosts = payload => ({type: `REQUEST_ALL_POSTS`, payload})

// fetch posts data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllPosts = payload => dispatch => {
  dispatch(requestAllPosts(payload))
  // console.log(dispatch(requestAllPosts(payload)));
  return axios.get(`${process.env.REACT_APP_API_URL}/posts`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    // console.log(dispatch(saveAllPosts(payload, response)));
    return dispatch(saveAllPosts(payload, response))
  })
}
GET_ONE_SPACE
export const getAllPosts = () => ({type: GET_ALL_POSTS})

// -----------------------------------------------------------------------------
// fetch = request => save

// emit action to save topics data into store's state
export const saveAllTopics = (payload, response) => ({
  type: SAVE_ALL_TOPICS,
  payload: {
    data: response, // no need for .data as we get this from local
    received_at: Date.now()
  }
})

export const requestAllTopics = payload => ({type: `REQUEST_ALL_TOPICS`, payload})
SUBMIT_NEW_POST
// fetch topics data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllTopics = payload => dispatch => {
  dispatch(requestAllTopics(payload))
  const response = topics.all // initialState.topics.all
  return dispatch(saveAllTopics(payload, response))
}

export const getAllTopics = () => ({type: GET_ALL_TOPICS})

// -----------------------------------------------------------------------------

export const selectPost = (payload, response) => ({
  // type: SELECT_POST,
  // payload
  type: SELECT_POST,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

// fetch posts data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchPost = payload => dispatch => {
  // dispatch(requestAllPosts(payload))
  // console.log(dispatch(requestAllPosts(payload)));
  // console.log(payload);
  return axios.get(`${process.env.REACT_APP_API_URL}/posts/${payload}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    // console.log(dispatch(saveAllPosts(payload, response)));
    return dispatch(selectPost(payload, response))
  })
}

export const selectTopic = payload => ({type: SELECT_TOPIC, payload})

export const selectProfile = payload => ({type: SELECT_PROFILE, payload})

// -----------------------------------------------------------------------------

export const submitRegisterData = payload => ({type: ACCOUNT_REGISTER, payload})

export const submitLoginData = payload => ({type: ACCOUNT_LOGIN, payload})

export const logout = payload => ({type: ACCOUNT_LOGOUT, payload})

// -----------------------------------------------------------------------------

// export const setToken = payload => ({type: SET_LOGIN_TOKEN, payload})

export const setDecodedAccount = payload => ({type: SET_DECODED_ACCOUNT, payload})

// -----------------------------------------------------------------------------

export const submitNewPostData = payload => ({type: SUBMIT_NEW_POST, payload})

// GET ALL COWORKING SPACE LIST-----------------------------------------------------------------------------

export const getAllSpaces = (payload, response) => ({
  type: GET_ALL_SPACES,
  payload: {
    data: response
  }
})

export const fetchAllSpaces = payload => dispatch => {

  return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getAllSpaces(payload, response.data))
  })
}
// DETAIL COWORKING SPACE INFO-----------------------------------------------------------------------------

export const getOneSpace = (response) => ({
  type: GET_ONE_SPACE,
  payload: {
    data: response
  }
})

export const fetchOneSpace = payload => dispatch => {
  return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces/${payload}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getOneSpace(response.data))
  })
}
// GET ONE USER PROFILE -----------------------------------------------------------------------------

export const getOneProfile = (response) => ({
  type: GET_USER_PROFILE,
  payload: {
    data: response
  }
})

export const fetchUserProfile = payload => dispatch => {
  console.log(payload);
  return axios.get(`${process.env.REACT_APP_API_URL}/accounts/${payload}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getOneProfile(response.data))
  })
}

// GET USER REVIEW HISTORY  -----------------------------------------------------------------------------

export const getReviewHistory = (response) => ({
  type: GET_USER_REVIEW_HISTORY,
  payload: {
    data: response
  }
})

export const fetchUserReviews = payload => dispatch => {
  // console.log(payload);
  return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces/review_history/${payload}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getReviewHistory(response.data))
  })
}

// GET USER REVIEW HISTORY  -----------------------------------------------------------------------------

export const getCospaceList = (response) => ({
  type: GET_USER_COSPACE_LIST,
  payload: {
    data: response
  }
})

export const fetchCospaceList = payload => dispatch => {
  // console.log(payload);
  return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces/get_cospaces_by_user/${payload}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getCospaceList(response.data))
  })
  // console.log(getCospaceList("selected_cospace_list"));
  // return dispatch(getCospaceList("selected_cospace_list"))
}

// SET AUTH TOKEN  -----------------------------------------------------------------------------

export const setLoginToken = (response) => ({
  type: SET_TOKEN,
  payload: {
    data: response
  }
})

export const setToken = payload => dispatch => {
  return dispatch(setLoginToken(payload))
}

// SET ACTIVE USER  -----------------------------------------------------------------------------

export const setActiveUser = (payload) => ({
  type: SET_ACTIVE_USER,
  payload: {
    name: payload.name,
    bio: payload.bio,
    profile_picture: payload.profile_picture,
    id: payload.id
  }
})

export const getActiveUser = payload => dispatch => {
  return dispatch(setActiveUser(payload))
}

// SET FILTER CITY -----------------------------------------------------------------------------

export const filterCity = (city) => ({
  type: SET_FILTER_CITY,
  payload: {
    city: city
  }
})

export const setFilterCity = (city) => dispatch => {
  return dispatch(filterCity(city))
}

// SET FILTER MOST REVIEW -----------------------------------------------------------------------------

export const mostReview = (most_review) => ({
  type: SET_FILTER_MOST_REVIEW,
  payload: {
    most_review: most_review
  }
})

export const setFilterMostReview = (most_review) => dispatch => {
  return dispatch(mostReview(most_review))
}

// GET FILTERED LIST -----------------------------------------------------------------------------

export const filterList = () => ({
  type: GET_FILTERED_LIST,
  payload: {
  }
})

export const fetchFilteredList = payload => dispatch => {
  console.log(payload.most_reviewed);
  if(payload.most_reviewed === true){
    payload.most_reviewed = "true"
  }else{
    payload.most_reviewed = "false"
  }

  if(payload.city === undefined || payload.city === null){
    payload.city = ""
  }

  // return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces?city=${payload.city}&most_reviewed=${payload.most_reviewed}`).then(function(response) {
  //   // console.log(response);
  //   // console.log(`${process.env.REACT_APP_API_URL}/coworking_spaces?city=${payload.city}&most_reviewed=${payload.most_reviewed}`);
  //   // if (response.data) {
  //   //   // self.setState({cospace_id: response.data.data.id, redirect: true})
  //   // }
  //   return dispatch(getAllSpaces(payload, response.data))
  //
  // }).catch(error => {
  //   console.log(error.response)
  // });

  return axios.get(`${process.env.REACT_APP_API_URL}/coworking_spaces?city=${payload.city}&most_reviewed=${payload.most_reviewed}`).then(rawResponse => {
    return rawResponse.data
  }).then(response => {
    return dispatch(getAllSpaces(payload, response.data))
  })
  // return dispatch(filterList())
}
