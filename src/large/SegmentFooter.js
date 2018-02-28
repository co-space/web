import React from "react"
import {Link} from "react-router-dom"
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
    <a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Most Reviewed Spaces</a>|
    <Link to="/new"><a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Add Your Spaces</a></Link>|
    <a href="" className="mx-4 footer-menu tracking-in-expand-fwd">Events</a>
    <div className="mt-3">
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/fb-icon.png`} alt="facebook-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/twit-icon.png`} alt="twitter-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/in-icon.png`} alt="linkedin-icon"/>
    </div>
  </div>)
}

export default SegmentFooter
