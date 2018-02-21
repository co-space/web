import React from "react"
// import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"

import SettingsForm from "../medium/SettingsForm"

const SegmentSettings = props => (
  <Row id="SegmentSettings" className="center text-center" xs={12} md={8}>
    <div>
      <Col xs={12}>
        <PageTitle>Settings</PageTitle>
      </Col>
      <Col xs={12}>
        <SettingsForm />
      </Col>
    </div>
  </Row>
)

export default SegmentSettings
