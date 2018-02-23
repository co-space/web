import {Row, Col, Card, CardBody} from "reactstrap"

import Review from "./Review"
import React from "react"

const ReviewHistoryu = () => (<Row>
  <Col sm={3} className="text-center">
  <Card className="mb-3">
    <CardBody>
    <img className="prfile-review-thumb mb-3" src={`${process.env.REACT_APP_API_URL}/images/posts/branding-bike.png`} alt=""/>
        <h4>
          <b>Impact Hub</b>
        </h4>
        <h6>
          <b>Jakarta</b>
        </h6>
      </CardBody>
    </Card>

  </Col>
  <Col sm={9}>
    <Review/>
  </Col>
</Row>)

export default ReviewHistoryu
