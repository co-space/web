import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/Home"
import Posts from "./pages/Posts"
import ConnectedPosts from "./redux/containers/ConnectedPost"
import Post from "./pages/Post"
import Topics from "./pages/Topics"
import Topic from "./pages/Topic"

import Register from "./pages/Register"
import Login from "./pages/Login"
import New from "./pages/New"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Details from "./pages/Details"

import Info from "./pages/Info"


const App = props => {
  return (
    <div id="App" className="routes">
      <Route exact path={`/`} component={Home} />
      <Route path={`/posts`} component={Posts} />
      <Route path={`/topics`} component={Topics} />
      <Route path={`/co`} component={Info} />

      <Route path={`/p/:id`} component={ConnectedPosts} />
      <Route path={`/t/:id`} component={Topic} />

      <Route path={`/register`} component={Register} />
      <Route path={`/login`} component={Login} />
      <Route path={`/new`} component={New} />
      <Route exact path={`/profile`} component={Profile} />
      <Route path={`/profile/:username`} component={Profile} />
      <Route path={`/settings`} component={Settings} />
      <Route path={`/details`} component={Details} />
    </div>
  )
}

export default App
