import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

import ConnectedTopicTags from "../redux/containers/ConnectedTopicTags"

const LayoutDefault = ({ children }) => (
  <Layout>
    <SegmentCTAHeader />
    <ConnectedTopicTags />
    <div className="default layout">{children}</div>
  </Layout>
)

export default LayoutDefault
