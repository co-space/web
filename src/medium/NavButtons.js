import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'reactstrap'

const NavButtons = (props) => (
  <span>
    <Link to="/login">
      <Button outline  color="primary" className="cta">Sign in</Button>
    </Link>
    <Link to="/register">
      <Button outline color="primary" className="cta">Sign Up</Button>
    </Link>
  </span>
)

export default NavButtons