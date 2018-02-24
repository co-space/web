import {Row} from "reactstrap"
import React from "react"
import ThumbnailCospaceList from "../medium/ThumbnailCospaceList"

const SegmentCospaceLists = ({profile}) => {
  return (<div>
    <h4>
      <b>My Cospace</b>
    </h4>
    <Row>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
      <ThumbnailCospaceList/>
    </Row>
  </div>)
}

export default SegmentCospaceLists
