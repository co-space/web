import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'reactstrap'

const ButtonReviews = (props) => (
  <div className="btn-review">
    <Link to="/co">
      <Button outline  color="info">Top Rated</Button>
    </Link>
  </div>
)

export default ButtonReviews
