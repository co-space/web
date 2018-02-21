// -----------------------------------------------------------------------------
// React dependencies

import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter as Router } from "react-router-dom"

// -----------------------------------------------------------------------------
// Redux dependencies

import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

// -----------------------------------------------------------------------------
// Local initial store's state

import initialState from "./redux/stores"

// -----------------------------------------------------------------------------
// Local reducers and actions

// for updating the store
import reducers from "./redux/reducers"

import {
  // get various actions creator to dispatch the actions
  fetchAllPosts,
  fetchAllTopics
} from "./redux/actions"

// -----------------------------------------------------------------------------
// Local components

import App from "./App"
// import registerServiceWorker from "./registerServiceWorker"

// -----------------------------------------------------------------------------
// Local styles

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
// import "./styles/debug.css"

// -----------------------------------------------------------------------------
// Configure redux middlewares

const middleware = [thunk]

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

// -----------------------------------------------------------------------------
// Dispatch initial actions

// store.dispatch(fetchAllPosts())
store.dispatch(fetchAllTopics())


// -----------------------------------------------------------------------------
// Wrap the rendering in a function

const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

// -----------------------------------------------------------------------------

// Register service worker
// registerServiceWorker()

// Render once
render(App)
store.subscribe(render)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
    store.subscribe(render)
  })
}
