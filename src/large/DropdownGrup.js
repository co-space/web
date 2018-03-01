import React from 'react'
import { Row, Col } from "reactstrap"


import DropdownCity from '../medium/DropdownCity'
import ButtonReviews from '../medium/ButtonReviews'
import ButtonTopRated from '../medium/ButtonTopRated'
import ConnectedDropdownCity from '../redux/containers/ConnectedDropdownCity'
import FilterButton from '../medium/FilterButton'




const DropdownGroup = ({ className }) => (
  <Row  className="cta">
    <Col sm={11}  className="d-flex justify-content-between">
      <h6>Filter Space</h6>
      <ConnectedDropdownCity />
      <ButtonReviews />
      <FilterButton />
    </Col>
    {/* <Col sm={3} className="column right" >
      <NavButtons />
    </Col> */}
  </Row>
)

export default DropdownGroup
