import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import SegmentCoworkspaceList from "../large/SegmentCoworkspaceList"
import ConnectedCoworkspaceList from "../redux/containers/ConnectedCoworkspaceList"
import CarouselImg from "../medium/CarouselImg"
// import DropdownGroup from '../large/DropdownGroup'

import DropdownGrup from '../large/DropdownGrup'

const Home = props => (
  <Layout>
    <CarouselImg />
    <DropdownGrup />

  <ConnectedCoworkspaceList/>
  {/* <DropdownGroup /> */}
    {/*}<ConnectedFeaturedPosts />
    <ConnectedLatestPosts />*/}
  </Layout>
)

export default Home
