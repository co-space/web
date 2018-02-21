import React from "react"
import { Link } from "react-router-dom"

const FooterText = ({ to, children }) => (
  <Link to={to} className="footer text">
    {children}
  </Link>
)

export default FooterText
