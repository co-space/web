import React from "react"

import CTAButton from "../small/CTAButton"

const CTAButtons = props => (
  <span className="cta buttons">
    <CTAButton to="/new">Write</CTAButton>
    <CTAButton to="/register">Register</CTAButton>
    <CTAButton to="/login">Login</CTAButton>
  </span>
)

export default CTAButtons
