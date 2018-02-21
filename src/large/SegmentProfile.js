import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({ profile }) => {
  return (
    <Row id="SegmentProfile" className="center " xs={12} md={8}>
      <div>
        <Col>
          <Link to={`/profile/${profile.username}`}>
            <PageTitle>@{profile.username}</PageTitle>
          </Link>
        </Col>

        <Col>
          <PageSubtitle>"name"</PageSubtitle>
          <PageSubtitle>"bio"</PageSubtitle>
        </Col>

        <Col>
          <Link to="/settings">
            <ActionButton>Edit My Profile</ActionButton>
          </Link>
        </Col>

        <Col>
          <div className="m-3">
            <h3>"list of posts"</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </Col>
      </div>
    </Row>
  )
}

export default SegmentProfile
