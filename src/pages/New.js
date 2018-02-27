import React from "react"

import { default as Layout } from "../templates/LayoutSingle"

import SegmentNewSpace from "../large/SegmentNewSpace"
import ConnectedNewSpace from "../redux/containers/ConnectedNewSpace"


const New = props => (
  <Layout>
    <ConnectedNewSpace />
  </Layout>
)

export default New
