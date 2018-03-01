import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Row, Col, ListGroup, ListGroupItem} from "reactstrap"

import SegmentProfileInfo from "../large/SegmentProfileInfo"
import SegmentReviewHistory from "../large/SegmentReviewHistory"
import ConnectedReviewHistory from "../redux/containers/ConnectedReviewHistory"
import ConnectedCospaceList from "../redux/containers/ConnectedCospaceList"

import SegmentCospaceList from "../large/SegmentCospaceList"

import {Route} from "react-router-dom"
import {isEmpty} from "lodash"

import ActionButton from "../small/ActionButton"

class SegmentProfile extends Component {
  constructor(props) {
    super(props)
    this.fetchUserProfile = this.props.fetchUserProfile
    this.profile = this.props.profile
    this.id = this.profile.match.params.id
  }

  componentWillMount() {
    this.fetchUserProfile(this.id)
  }

  render() {
    var match_url = this.props.profile.match.url
    var selected_profile = this.props.selected_profile || {}
    var bio = ""
    var name = ""
    var profile_picture = ""
    if (!isEmpty(selected_profile)) {
      bio = selected_profile.bio
      name = selected_profile.name
      profile_picture = selected_profile.profile_picture
    }

    return (<Row>
      <Col sm={3} className="p-auto">
        <img className="ava-profile-page mb-3" src={profile_picture} alt=""/>
        <ListGroup>
          <Link to={`${match_url}`}>
            <ListGroupItem>Profile</ListGroupItem>
          </Link>
          <Link to={`${match_url}/review`}>
            <ListGroupItem>Review</ListGroupItem>
          </Link>
          <Link to={`${match_url}/cospace`}>
            <ListGroupItem>Cospace</ListGroupItem>
          </Link>
        </ListGroup>
        <ListGroup>
            <ListGroupItem>Test</ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={9}>
        <h1>Welcome, {name}</h1>
        <hr/> {/* Profile --------------------------------------------------------- */}
        {/* <Route exact="exact" path={`${match_url}`} component={SegmentProfileInfo}/> */}
        <Route exact="exact" path={`${match_url}`} render={(props) => (<SegmentProfileInfo {...props} bio={bio} name={name}/>)}/>
        <Route path={`${match_url}/review`} render={(props) => (<ConnectedReviewHistory {...props} id={this.id}/>)}/>
        {/*<Route path={`${match_url}/cospace`} component={SegmentCospaceList}/>*/}
        <Route path={`${match_url}/cospace`} render={(props) => (<ConnectedCospaceList {...props} id={this.id}/>)}/>
      </Col>
    </Row>)
  }

}

export default SegmentProfile
