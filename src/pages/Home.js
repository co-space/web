import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import ConnectedFeaturedPosts from "../redux/containers/ConnectedFeaturedPosts"
import ConnectedLatestPosts from "../redux/containers/ConnectedLatestPosts"

const Home = props => (
  <Layout>
    <ConnectedFeaturedPosts />
    <ConnectedLatestPosts />
  </Layout>
)

export default Home
