import React from "react"
import { Link } from "react-router-dom"

const NavLink = ({ to, children }) => (
  <span className="nav-link">
    <Link to={to}>{children}</Link>
  </span>
)

export default NavLink
