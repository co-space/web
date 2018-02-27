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
    {/* <Label className="ml-4"check="check">
      <Input type="checkbox"/>
      Swimming Pool &nbsp;&nbsp;
    </Label>
    <Label className="ml-4 mb-3"check="check">
      <Input type="checkbox"/>
      Billiard Table &nbsp;&nbsp;
    </Label>
    <Label className="ml-4"check="check">
      <Input type="checkbox"/>
      Gym &nbsp;&nbsp;
    </Label> */}
    {/* <Input type="text" name="cospaceImage" id="cospaceImage" placeholder="Insert JPG/PNG formatted image URL ..."/>
    <FormText className="mb-3" color="muted">
      Example: https://google.co.id/images/branding/logo/googlelogo_color.png
    </FormText> */}
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
