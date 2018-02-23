import React from "react"
import {Col} from "reactstrap"

const AmenitiesDetail = props => (
  <Col sm={3} className="mb-1">
    <img src={`${process.env.REACT_APP_API_URL}/images/icons/checks-icon.png`} alt="check-icon"/> Swimming Pool
  </Col>
)

export default AmenitiesDetail
