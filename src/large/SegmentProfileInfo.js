import {Row, Col} from "reactstrap"
import React from "react"

const SegmentProfileInfo = ({profile}) => {
  return (<div>
    <h4>
      <b>Profile</b>
    </h4>
    <Row className="mb-3">
      <Col sm={4}>
        Name
      </Col>
      <Col sm={8}>
        Muhammad Haekal
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm={4}>
        Date Of Birth
      </Col>
      <Col sm={8}>
        12 January 1993
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm={4}>
        About Me
      </Col>
      <Col sm={8}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi asperiores quisquam soluta amet nemo omnis nihil, quam, velit atque nesciunt voluptatem obcaecati quas natus. Necessitatibus officiis non, magnam qui?
      </Col>
    </Row>
  </div>)
}

export default SegmentProfileInfo
