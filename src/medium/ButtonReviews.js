import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'reactstrap'

const ButtonReviews = (props) => (
  <div className="btn-review">
    <Link to="/login">
      <Button outline  color="primary" className="cta">Top Rated</Button>
    </Link>
  </div>
)

export default ButtonReviews
