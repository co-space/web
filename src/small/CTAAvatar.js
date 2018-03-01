import React from "react"
import { Link } from "react-router-dom"
import {Button} from "reactstrap"


const CTAAvatar = ({ to, photo }) => {
  return (
    <div className="cta">
      <Link to="/new">
        <Button outline color="primary">Add Space</Button>
      </Link>
      <span className="cta avatar">
        <Link to={to}>
          <img src={photo} alt="avatar-image" />
        </Link>
      </span>
    </div>

  )
}

export default CTAAvatar
