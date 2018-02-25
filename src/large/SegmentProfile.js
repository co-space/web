import React from "react"
// import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Row, Col, ListGroup, ListGroupItem} from "reactstrap"

import SegmentProfileInfo from "../large/SegmentProfileInfo"
import SegmentReviewHistory from "../large/SegmentReviewHistory"
import SegmentCospaceLists from "../large/SegmentCospaceLists"


import {Route} from "react-router-dom"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({profile}) => {
  return (<Row>
    <Col sm={3} className="p-auto">
      <img className="ava-profile-page mb-3" src={`${process.env.REACT_APP_API_URL}/images/avatars/mhaekal.jpg`} alt=""/>
      <ListGroup>
        <Link to={`${profile.match_url}`}>
          <ListGroupItem>My Profile</ListGroupItem>
        </Link>
        <Link to={`${profile.match_url}/review`}>
          <ListGroupItem>My Review</ListGroupItem>
        </Link>
        <Link to={`${profile.match_url}/cospace`}>
          <ListGroupItem>My Cospace</ListGroupItem>
        </Link>
      </ListGroup>
    </Col>
    <Col sm={9}>
      <h1>Welcome, Haekal</h1>
      <hr/> {/* Profile --------------------------------------------------------- */}
      <Route exact path={`${profile.match_url}`} component={SegmentProfileInfo}/>
      <Route path={`${profile.match_url}/review`} component={SegmentReviewHistory}/>
      <Route path={`${profile.match_url}/cospace`} component={SegmentCospaceLists}/>
    </Col>
  </Row>)
}

export default SegmentProfile
