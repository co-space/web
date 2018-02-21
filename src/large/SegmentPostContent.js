import React from "react"
// import PropTypes from "prop-types"
import {Row, Col} from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageText from "../medium/PageText"

const SegmentPostContent = ({post, match}) => {
  // console.log(`from segment post content ${match}`);
  return (
  // console.log(`from segment post content ${match}`);
  <Row id="SegmentPostContent" className="center" xs={12} md={8}>
    <Col xs={12} md={8}>
      <PageTitle>
        [{post.id}] {post.title}
      </PageTitle>
    </Col>
    <Col xs={12} md={8}>
      <PageText>{post.content}</PageText>
    </Col>
  </Row>)
}

export default SegmentPostContent
