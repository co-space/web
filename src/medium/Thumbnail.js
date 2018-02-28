import React from "react"
import {Link} from "react-router-dom"
// import PropTypes from "prop-types"
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

const Thumbnail = () => (
    <Card>
      <CardImg className="max-height-200" top="top" width="100%" src={`${process.env.REACT_APP_API_URL}/images/posts/branding-bike.png`} alt="Card image cap"/>
      <CardBody>
        <CardTitle>Impact Hub</CardTitle>
        <div className="d-flex justify-content-between">
        <CardText className="my-auto"><img className="rating-star" src={`${process.env.REACT_APP_API_URL}/images/icons/star.png`} alt="rate-star"/><span className="rating-point">&nbsp;4.5</span></CardText>
        <Link to="/co"><Button color="primary"  size="sm">Detail</Button></Link>
        </div>
      </CardBody>
    </Card>
)

export default Thumbnail
