import React from "react"
import {Link} from "react-router-dom"
import Ionicon from 'react-ionicons'

// const LINKS = [
//   {
//     to: "/posts",
//     title: "All Posts"
//   }, {
//     to: "/topics",
//     title: "All Topics"
//   }
// ]

const SegmentFooter = props => {
  return (<div className="mb-4 text-center tracking-in-expand-fwd"><hr/>
    <a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Search Spaces</a>|
    <Link to="/tech">
    <a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Tech Stack</a>|
    </Link>
    <Link to="/new"><a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Add Your Spaces</a></Link>
    {/* <a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Tech Stack</a> */}
    <div className="mt-3">
      {/* <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/fb-icon.png`} alt="facebook-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/twit-icon.png`} alt="twitter-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/in-icon.png`} alt="linkedin-icon"/> */}
      <p>Hand-crafted with
        <Ionicon icon="md-heart" fontSize="19px" color="red" beat={true} />
        by Funtastic team
      </p>
    </div>
  </div>)
}

export default SegmentFooter
