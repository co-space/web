import React from "react"
import { Link } from "react-router-dom"

const Logo = props => (
  <Link to="/">
  <img src={`${process.env.REACT_APP_API_URL}/images/logo/cospace_logo.png`} alt="Cospace logo"/>
  </Link>
)

export default Logo
