import React from "react"
import {Link} from "react-router-dom"
// import PropTypes from "prop-types"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

const Thumbnail = ({name, photo, id, total_reviews}) => (<Card className="fade-in-top">
  <CardImg className="home-thumbnail-img" top={true} width="100%" src={photo} alt="Card image cap "/>
  <CardBody>
    <CardTitle>{name}
    </CardTitle>
    <div className="d-flex justify-content-between">
      <CardText className="my-auto"><img className="rating-star" src={`${process.env.REACT_APP_API_URL}/images/icons/star.png`} alt="rate-star"/>
        <span className="rating-point">&nbsp;{total_reviews}&nbsp;Reviews</span>
      </CardText>
      <Link to={`/co/${id}`}>
        <Button color="primary" size="sm">Detail</Button>
      </Link>
    </div>
  </CardBody>
</Card>)

export default Thumbnail
//old src
//src={`${process.env.REACT_APP_API_URL}/images/icons/star.png`}
