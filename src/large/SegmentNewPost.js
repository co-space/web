import React from "react"
// import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import NewPostForm from "../medium/NewPostForm"

import SectionTitle from "../small/SectionTitle"

const SegmentNewPost = props => (
  <Row id="SegmentNewPost" className="center">
    <Col xs={12} md={8}>
      <SectionTitle>Write New Post</SectionTitle>
    </Col>
    <Col xs={12} md={8}>
      <NewPostForm />
    </Col>
  </Row>
)

export default SegmentNewPost
