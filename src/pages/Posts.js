import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import ConnectedLatestPosts from "../redux/containers/ConnectedLatestPosts"

const Posts = props => (
  <Layout>
    <ConnectedLatestPosts />
  </Layout>
)

export default Posts
