import React from "react"
// import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Row, Col, ListGroup, ListGroupItem} from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import Review from "../medium/Review"
import ReviewHistory from "../medium/ReviewHistory"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({profile}) => {
  // console.log(profile);
  return (<Row>
    <Col sm={3} className="p-auto">
      <img className="ava-profile-page mb-3" src={`${process.env.REACT_APP_API_URL}/images/avatars/mhaekal.jpg`} alt=""/>
      <ListGroup>
        <Link to="/test">
          <ListGroupItem>My Profile</ListGroupItem>
        </Link>
        <Link to="/test">
          <ListGroupItem>My Review</ListGroupItem>
        </Link>
        <Link to="/test">
          <ListGroupItem>My Cospace</ListGroupItem>
        </Link>
      </ListGroup>
    </Col>
    <Col sm={9}>
      <h1>Welcome, Haekal</h1>
      <hr/> {/* Profile --------------------------------------------------------- */}
      <h4>
        <b>Profile</b>
      </h4>
      <Row className="mb-3">
        <Col sm={4}>
          Name
        </Col>
        <Col sm={8}>
          Muhammad Haekal
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={4}>
          Date Of Birth
        </Col>
        <Col sm={8}>
          12 January 1993
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={4}>
          About Me
        </Col>
        <Col sm={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi asperiores quisquam soluta amet nemo omnis nihil, quam, velit atque nesciunt voluptatem obcaecati quas natus. Necessitatibus officiis non, magnam qui?
        </Col>
      </Row>
      <hr/>
      {/* Review --------------------------------------------------------- */}
      <h4>
        <b>Review History</b>
      </h4>
      <ReviewHistory/>
      <ReviewHistory/>
      <ReviewHistory/>
      <hr/>
      {/* My Cospace ------------------------------------------------------ */}
        
    </Col>
  </Row>)
}

export default SegmentProfile
