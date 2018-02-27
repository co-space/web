import React from "react"
// import PropTypes from "prop-types"
import BookModal from "./BookModal"
import '../medium/medium.css'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap"

const Thumbnail = () => (
    <Card className="card-book">
      <CardImg top="top" width="100%" src={`${process.env.REACT_APP_API_URL}/images/posts/branding-bike.png`} alt="Card image cap"/>
      <CardBody>
        <CardTitle>Impact Hub</CardTitle>
        <div className="d-flex justify-content-between">
        <CardText className="my-auto"><img className="rating-star" src={`${process.env.REACT_APP_API_URL}/images/icons/star.png`} alt="rate-star"/><span className="rating-point">&nbsp;4.5</span></CardText>
        <BookModal/>
        </div>
      </CardBody>
    </Card>
)

export default Thumbnail
