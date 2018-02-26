import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"
import ConnectedCTAHeader from "../redux/containers/ConnectedCTAHeader"

const LayoutAuth = ({ children }) => (
  <Layout>
    <ConnectedCTAHeader />
    <div className="auth layout">{children}</div>
  </Layout>
)

export default LayoutAuth
