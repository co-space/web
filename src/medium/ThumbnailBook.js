import React from "react"
// import PropTypes from "prop-types"
import BookModal from "./BookModal"
import './medium.css'
import FbShare from '../small/FbShare'
import TwitterShare from '../small/TwitterShare'
import Sticky from 'react-sticky-el'
import {Row, Col} from 'reactstrap'
import {isEmpty} from "lodash"
import axios from "axios"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap"


const Thumbnail = ({photos, name}) => (


    <Card>
      <CardImg top="top" width="100%" src={photos[0]} alt="Card image cap"/>

      <CardBody>
        <CardTitle>Impact Hub</CardTitle>
        <div className="d-flex justify-content-between">
        <CardText className="my-auto"><img className="rating-star" src={`${process.env.REACT_APP_API_URL}/images/icons/star.png`} alt="rate-star"/><span className="rating-point">&nbsp;4.5</span></CardText>
        <BookModal/>

        </div><hr/>
        <p>Or share it to your friends !</p>
        <Row>
          <Col sm={6}>
            <FbShare/>
          </Col>
          <Col sm={6}>
            <TwitterShare/>
          </Col>
        </Row>
      </CardBody>
    </Card>
)

export default Thumbnail
