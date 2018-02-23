import React from "react"
// import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Row, Col, ListGroup, ListGroupItem} from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import Review from "../medium/Review"
import ReviewHistory from "../medium/ReviewHistory"
import ThumbnailCospaceList from "../medium/ThumbnailCospaceList"
import SegmentProfileInfo from "../large/SegmentProfileInfo"
import SegmentReviewHistory from "../large/SegmentReviewHistory"


import {Route} from "react-router-dom"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({profile, props}) => {
  console.log(`full url${profile.full_url}`);
  // console.log(props.match.url);
  return (<Row>
    <Col sm={3} className="p-auto">
      <img className="ava-profile-page mb-3" src={`${process.env.REACT_APP_API_URL}/images/avatars/mhaekal.jpg`} alt=""/>
      <ListGroup>
        <Link to={`${profile.full_url}/pro`}>
          <ListGroupItem>My Profile</ListGroupItem>
        </Link>
        <Link to={`${profile.full_url}/review`}>
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
      <Route exact path={`/profile/:id`} component={SegmentProfileInfo}/>
      <Route exact path={`/profile/:id/review`} component={SegmentReviewHistory}/>
      <hr/>
      {/* My Cospace ------------------------------------------------------ */}
      <h4>
        <b>My Cospace</b>
      </h4>
      <Row>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      </Row>
    </Col>
  </Row>)
}

export default SegmentProfile
