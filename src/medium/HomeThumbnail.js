import React from "react"
// import PropTypes from "prop-types"
import ThumbnailDetail from "./ThumbnailDetail"
import {
  Col,
} from "reactstrap"

const HomeThumbnail = ({name, photo, id, total_reviews}) => (
  <Col sm={3} className="mb-3">
    <ThumbnailDetail name={name} photo={photo} id={id} total_reviews={total_reviews}/>
  </Col>
)

export default HomeThumbnail
