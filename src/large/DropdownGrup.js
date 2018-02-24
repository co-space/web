import React from 'react'
import { Row, Col } from "reactstrap"


import DropdownCity from '../medium/DropdownCity'
import DropdownMember from '../medium/DropdownMember'
import DropdownSpaceType from '../medium/DropdownSpaceType'
import ButtonReviews from '../medium/ButtonReviews'



const DropdownGroup = ({ className }) => (
  <Row  className="cta">
    <Col sm={12}  className="d-flex justify-content-between">
      <h6>Filter Space</h6>
      <DropdownCity />
      <DropdownMember />
      <DropdownSpaceType />
      <ButtonReviews />
    </Col>
    {/* <Col sm={3} className="column right" >
      <NavButtons />
    </Col> */}
  </Row>
)

export default DropdownGroup
