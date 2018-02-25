import React from "react"

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
  return (<div className="mb-4 text-center"><hr/>
    <a href="" className="mx-4 footer-menu">Search Spaces</a>|
    <a href="" className="mx-4 footer-menu">Most Reviewed Spaces</a>|
    <a href="" className="mx-4 footer-menu">Add Your Spaces</a>|
    <a href="" className="mx-4 footer-menu">Events</a>
    <div className="mt-3">
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/fb-icon.png`} alt="facebook-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/twit-icon.png`} alt="twitter-icon"/>
      <img className="mx-3" src={`${process.env.REACT_APP_API_URL}/images/icons/in-icon.png`} alt="linkedin-icon"/>
    </div>
  </div>)
}

export default SegmentFooter
