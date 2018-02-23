import React from "react"
// import PropTypes from "prop-types"
import HomeThumbnail from "../medium/HomeThumbnail"
import Pagination from "../medium/Pagination"

import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

const SegmentCoworkspaceList = () => (<div>
  <Row >
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
    <HomeThumbnail/>
  </Row>
  <Pagination/>
</div>)

export default SegmentCoworkspaceList
