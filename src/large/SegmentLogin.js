import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import PageText from "../medium/PageText"

import AuthLoginForm from "../medium/AuthLoginForm"

const SegmentLogin = props => (
  <Row id="SegmentLogin" className="center text-center" xs={12} md={8}>
    <div>
      <Col xs={12}>
        <PageTitle>Welcome Back</PageTitle>
      </Col>
      <Col xs={12}>
        <PageSubtitle>Login to access your settings</PageSubtitle>
      </Col>
      <Col xs={12}>
        <AuthLoginForm />
      </Col>
      <Col xs={12}>
        <PageText>
          No account?{" "}
          <Link to="/register" className="bold">
            Create an account
          </Link>
        </PageText>
      </Col>
    </div>
  </Row>
)

export default SegmentLogin
