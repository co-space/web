import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import SegmentCoworkspaceList from "../large/SegmentCoworkspaceList"

import CarouselImg from "../medium/CarouselImg"
// import DropdownGroup from '../large/DropdownGroup'

import DropdownGrup from '../large/DropdownGrup'

const Home = props => (
  <Layout>
    <CarouselImg />
    <DropdownGrup />

  <SegmentCoworkspaceList/>
  {/* <DropdownGroup /> */}
    {/*}<ConnectedFeaturedPosts />
    <ConnectedLatestPosts />*/}
  </Layout>
)

export default Home
