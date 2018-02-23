import React from "react"
// import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import FooterTexts from "../medium/FooterTexts"

const LINKS = [
  {
    to: "/posts",
    title: "All Posts"
  },
  {
    to: "/topics",
    title: "All Topics"
  }
]

const SegmentFooter = props => {
  return (
    <Row id="SegmentFooter">
      <Col xs={12}>
        <FooterTexts links={LINKS} />
      </Col>
    </Row>
  )
}

export default SegmentFooter
