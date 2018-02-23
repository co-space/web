import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import ConnectedFeaturedPosts from "../redux/containers/ConnectedFeaturedPosts"
import ConnectedLatestPosts from "../redux/containers/ConnectedLatestPosts"
import SegmentCoworkspaceList from "../large/SegmentCoworkspaceList"

const Home = props => (
  <Layout>
  <SegmentCoworkspaceList/>
    {/*}<ConnectedFeaturedPosts />
    <ConnectedLatestPosts />*/}
  </Layout>
)

export default Home
