import {Col} from "reactstrap"
import React from "react"
import ThumbnailCospace from "./ThumbnailCospace"

const ThumbnailCospaceList = ({name, city, photo}) => (<Col sm={3}>
  <ThumbnailCospace name={name} city={city} photo={photo}/>
</Col>)

export default ThumbnailCospaceList
