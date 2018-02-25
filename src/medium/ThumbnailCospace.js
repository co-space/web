import {Card, CardBody} from "reactstrap"
import React from "react"
import {Link} from "react-router-dom"

const ThumbnailCospace = ({name, city, photo, id}) => (<Link to={`/co/${id}`}>
  <Card className="mb-3">
  <CardBody>
    <img className="prfile-review-thumb mb-3" src={photo} alt=""/>
    <h4>
      <b>{name}</b>
    </h4>
    <h6>
      <b>{city}</b>
    </h6>
  </CardBody>
  </Card>
  </Link>
  )

export default ThumbnailCospace
