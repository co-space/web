import React from "react"
// import PropTypes from "prop-types"
import {
  Row,
  Col,
  Input,
  Button,
  Label
} from "reactstrap"
import ReactFilestack, { client } from 'filestack-react';
import Multiselect from '../large/Multiselect'

//API_KEY filestack
const API_KEY="Avsgm8lbeTA2U9LnX68j5z"

const SegmentNewPost = props => (<Row id="SegmentNewPost" className="center">
  <Col xs={12} md={8}>
    <h3>
      <b>Tell Coworkers About Your Space</b>
    </h3>
  </Col>
  <Col xs={12} md={8}>
    <Input className="mb-3" type="text" name="postTitle" id="postTitle" placeholder="Your Cospace Name ..."/>
    <Input className="mb-3" type="textarea" name="overview" id="overview" placeholder="Write your cospace overview here ..." rows={6}/>
    {/* Multiselect Amenities */}
    <Multiselect />
    <ReactFilestack
       apikey={API_KEY}
       onSuccess={(response) => console.log(response)}
       render={({ onPick }) => (
    <div className="mb-3">
      <strong>Upload Image</strong>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button outline color="info"  size="sm" onClick={onPick}>Upload</Button>
    </div>
  )}
/>
    <Button color="primary" size="sm" block="block">Submit</Button>
  </Col>
</Row>)

export default SegmentNewPost
