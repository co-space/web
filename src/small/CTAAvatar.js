import React from "react"
import { Link } from "react-router-dom"

const CTAAvatar = ({ to, photo }) => {
  return (
    <span className="cta avatar">
      <Link to={to}>
        <img src={photo} alt="avatar-image" />
      </Link>
    </span>
  )
}

export default CTAAvatar
