import {Card, CardBody} from "reactstrap"
import React from "react"

const ThumbnailCospace = () => (<Card className="mb-3">
  <CardBody>
    <img className="prfile-review-thumb mb-3" src={`${process.env.REACT_APP_API_URL}/images/posts/branding-bike.png`} alt=""/>
    <h4>
      <b>Impact Hub</b>
    </h4>
    <h6>
      <b>Jakarta</b>
    </h6>
  </CardBody>
</Card>)

export default ThumbnailCospace
