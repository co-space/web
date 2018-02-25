import {Row, Col} from "reactstrap"
import React from "react"

const SegmentProfileInfo = (props) => {
  return (<div>
    <h4>
      <b>Profile</b>
    </h4>
    <Row className="mb-3">
      <Col sm={4}>
        Name
      </Col>
      <Col sm={8}>
        {props.name}
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
        {props.bio}
      </Col>
    </Row>
  </div>)
}

export default SegmentProfileInfo
