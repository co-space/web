import React from "react"
import { Container } from "reactstrap"

import SegmentDebug from "../large/SegmentDebug"
import SegmentMain from "../large/SegmentMain"
import SegmentFooter from "../large/SegmentFooter"

const Layout = ({ children }) => (
  <Container id="Layout">
    <SegmentDebug active={false} />
    <SegmentMain>{children}</SegmentMain>
    <SegmentFooter />
  </Container>
)

export default Layout
