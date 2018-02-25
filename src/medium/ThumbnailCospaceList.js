import {Col} from "reactstrap"
import React from "react"
import ThumbnailCospace from "./ThumbnailCospace"

const ThumbnailCospaceList = ({name, city, photo, id}) => (<Col sm={3}>
  <ThumbnailCospace name={name} city={city} photo={photo} id={id}/>
</Col>)

export default ThumbnailCospaceList
