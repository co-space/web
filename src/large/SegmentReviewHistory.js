
import React from "react"
import ReviewHistory from "../medium/ReviewHistory"

const SegmentProfileInfo = ({profile}) => {
  return (<div>
    <h4>
      <b>Review History</b>
    </h4>
    <ReviewHistory/>
    <ReviewHistory/>
    <ReviewHistory/>
  </div>)
}

export default SegmentProfileInfo
