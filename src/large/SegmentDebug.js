import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SegmentDebug = ({ active }) => {
  return active ? (
    <div id="SegmentDebug" className="debug">
      <ul>
        <li>
          <Link to="/posts">All Posts</Link>
        </li>
        <li>
          <Link to="/topics">All Topics</Link>
        </li>
        <li>
          <Link to="/p/1">Post with id: 1</Link>
        </li>
        <li>
          <Link to="/t/1">Topic with id: 1</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div />
  )
}

export default SegmentDebug
