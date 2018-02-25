import React from "react"
// import PropTypes from "prop-types"
import ThumbnailDetail from "./ThumbnailDetail"
import {
  Col,
} from "reactstrap"

const HomeThumbnail = ({name, photo, id}) => (
  <Col sm={3} className="mb-3">
    <ThumbnailDetail name={name} photo={photo} id={id}/>
  </Col>
)

export default HomeThumbnail
