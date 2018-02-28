import React from 'react'
import { Row, Col } from "reactstrap"


import DropdownCity from '../medium/DropdownCity'
import ButtonReviews from '../medium/ButtonReviews'
import ButtonTopRated from '../medium/ButtonTopRated'



const DropdownGroup = ({ className }) => (
  <Row  className="cta">
    <Col sm={11}  className="d-flex justify-content-between">
      <h6>Filter Space</h6>
      <DropdownCity />
      <ButtonReviews />
      <ButtonTopRated />
    </Col>
    {/* <Col sm={3} className="column right" >
      <NavButtons />
    </Col> */}
  </Row>
)

export default DropdownGroup
