import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import ConnectedFeaturedPosts from "../redux/containers/ConnectedFeaturedPosts"
import ConnectedLatestPosts from "../redux/containers/ConnectedLatestPosts"
import SegmentCoworkspaceList from "../large/SegmentCoworkspaceList"

import CarouselImg from "../medium/CarouselImg"
// import DropdownGroup from '../large/DropdownGroup'

const Home = props => (
  <Layout>
    <CarouselImg />

  <SegmentCoworkspaceList/>
  {/* <DropdownGroup /> */}
    {/*}<ConnectedFeaturedPosts />
    <ConnectedLatestPosts />*/}
  </Layout>
)

export default Home
