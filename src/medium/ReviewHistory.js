import {Row, Col, Card, CardBody} from "reactstrap"

import Review from "./Review"
import React from "react"
import ThumbnailCospace from "./ThumbnailCospace"

const ReviewHistoryu = () => (<Row>
  <Col sm={3} className="text-center pr-0">
  <ThumbnailCospace/>
  </Col>
  <Col sm={9}>
    <Review/>
  </Col>
</Row>)

export default ReviewHistoryu
