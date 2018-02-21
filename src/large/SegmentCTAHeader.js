import React from "react"
// import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import Logo from "../small/Logo"
import SearchBox from "../small/SearchBox"
import CTAButtons from "../medium/CTAButtons"
import CTAAvatar from "../small/CTAAvatar"

const auth = {
  account: {
    name: "M Haidar Hanif",
    username: "mhaidarh",
    image_url: `${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`
  }
}

const SegmentCTAHeader = ({ className }) => (
  <Row id="SegmentCTAHeader" className={`center ${className}`}>
    <Col xs={8} md={5}>
      <Logo />
    </Col>
    <Col xs={4} md={3} className="column right">
      <SearchBox />
    </Col>
    <Col xs={12} md={4} className="column right">
      <CTAButtons />
      <CTAAvatar
        to={`/profile/${auth.account.username}`}
        account={auth.account}
      />
    </Col>
  </Row>
)

export default SegmentCTAHeader
