import React, {Component} from 'react'
import { Link } from "react-router-dom"
import { Button } from 'reactstrap'

const ButtonReviews = (props) => (
  <div className="btn-review">
    <Link to="/co">
      <Button outline  color="info">Most Reviewed</Button>
    </Link>
  </div>
)

export default ButtonReviews

// class ButtonReviews extends Component {
//   constructor(props){
//     super(props)
//   }
//
//
//
// }
