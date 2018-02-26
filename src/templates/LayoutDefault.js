import React from "react"
import Layout from "./Layout"
import ConnectedCTAHeader from "../redux/containers/ConnectedCTAHeader"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

import ConnectedTopicTags from "../redux/containers/ConnectedTopicTags"

const LayoutDefault = ({ children }) => (
  <Layout>
    <ConnectedCTAHeader />
    {/* <ConnectedTopicTags /> */}
    {/* <div className="default layout">{children}</div> */}
    <div>{children}</div>
  </Layout>
)

export default LayoutDefault
