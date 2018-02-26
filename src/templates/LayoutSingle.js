import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"
import ConnectedCTAHeader from "../redux/containers/ConnectedCTAHeader"

const LayoutDefault = ({ children }) => (
  <Layout>
    <ConnectedCTAHeader className="single header" />
    <div className="single layout">{children}</div>
  </Layout>
)

export default LayoutDefault
