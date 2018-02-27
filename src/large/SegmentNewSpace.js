import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Row, Col, Input, Button, Label} from "reactstrap"
import ReactFilestack, {client} from 'filestack-react';
import axios from "axios"
import {Redirect} from "react-router-dom"

//API_KEY filestack
const API_KEY = "Avsgm8lbeTA2U9LnX68j5z"

// const SegmentNewPost = props => (<Row id="SegmentNewPost" className="center">
//   <Col xs={12} md={8}>
//     <h3>
//       <b>Tell Coworkers About Your Space</b>
//     </h3>
//   </Col>
//   <Col xs={12} md={8}>
//     <Input className="mb-3" type="text" name="name" id="name" placeholder="Co-Space Name"/>
//     <Input className="mb-3" type="text" name="address" id="address" placeholder="Address ..."/>
//     <Input className="mb-3" type="textarea" name="overview" id="overview" placeholder="Overview ..." rows={6}/>
//     <p><b>Amenities</b></p>
//     <Label className="ml-4"check="check">
//       <Input type="checkbox"/>
//       Swimming Pool &nbsp;&nbsp;
//     </Label>
//     <Label className="ml-4 mb-3"check="check">
//       <Input type="checkbox"/>
//       Billiard Table &nbsp;&nbsp;
//     </Label>
//     <Label className="ml-4"check="check">
//       <Input type="checkbox"/>
//       Gym &nbsp;&nbsp;
//     </Label>
//     {/* <Input type="text" name="cospaceImage" id="cospaceImage" placeholder="Insert JPG/PNG formatted image URL ..."/>
//     <FormText className="mb-3" color="muted">
//       Example: https://google.co.id/images/branding/logo/googlelogo_color.png
//     </FormText> */}
//     <ReactFilestack
//        apikey={API_KEY}
//        onSuccess={(response) => console.log(response)}
//        render={({ onPick }) => (
//     <div className="mb-3">
//       <strong>Upload Image</strong>&nbsp;&nbsp;&nbsp;&nbsp;
//       <Button outline color="info"  size="sm" onClick={onPick}>Upload</Button>
//     </div>
//   )}
// />
//     <Button color="primary" size="sm" block="block">Submit</Button>
//   </Col>
// </Row>)
//
// export default SegmentNewPost



class SegmentNewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      overview: '',
      city: "",
      province: "",
      photos: [],
      daily_price: "",
      weekly_price: "",
      monthly_price: "",
      file_uploaded: 0,
      redirect: false,
      cospace_id: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    var param = event.target.name
    var value = event.target.value

    this.setState({[param]: value})
  }

  handleUpload(response) {
    if (response.filesUploaded[0].url) {
      this.setState({
        photos: this.state.photos.concat(response.filesUploaded[0].url),
        file_uploaded: this.state.file_uploaded + 1
      })
    }
  }

  handleSubmit(){
    var name = this.state.name
    var address =this.state.address
    var overview = this.state.overview
    var photo = this.state.photos
    var token = this.props.token
    var state= this.state
    var self = this
    if(token){
      axios.post(`${process.env.REACT_APP_API_URL}/coworking_spaces`, {
        name: name,
        address: address,
        overview: overview,
        token: token,
        photo: photo
      }).then(function(response) {
        if(response.data){
          // console.log(response.data.data.id);
            self.setState({
              cospace_id: response.data.data.id,
              redirect: true
            })

        }
      }).catch(error => {
        console.log(error.response)
      });
      // this.setState({name: '', email: '', password: ''})
    }

  }

  render() {

    if (this.state.redirect) {
     return <Redirect to={`/co/${this.state.cospace_id}`}/>;
    }

    return (<Row id="SegmentNewPost" className="center">
      <Col xs={12} md={8}>
        <h3>
          <b>Tell Coworkers About Your Space</b>
        </h3>
      </Col>
      <Col xs={12} md={8}>
        <Input value={this.state.name} onChange={this.handleChange} className="mb-3" type="text" name="name" id="name" placeholder="Co-Space Name"/>
        <Input value={this.state.address} onChange={this.handleChange} className="mb-3" type="text" name="address" id="address" placeholder="Address ..."/>
        <Input value={this.state.overview} onChange={this.handleChange} className="mb-3" type="textarea" name="overview" id="overview" placeholder="Overview ..." rows={6}/>
        <p>
          <b>Amenities</b>
        </p>
        <Label className="ml-4" check="check">
          <Input type="checkbox"/>
          Swimming Pool &nbsp;&nbsp;
        </Label>
        <Label className="ml-4 mb-3" check="check">
          <Input type="checkbox"/>
          Billiard Table &nbsp;&nbsp;
        </Label>
        <Label className="ml-4" check="check">
          <Input type="checkbox"/>
          Gym &nbsp;&nbsp;
        </Label>
        {/* <Input type="text" name="cospaceImage" id="cospaceImage" placeholder="Insert JPG/PNG formatted image URL ..."/>
          <FormText className="mb-3" color="muted">
            Example: https://google.co.id/images/branding/logo/googlelogo_color.png
          </FormText> */}
        <ReactFilestack apikey={API_KEY} onSuccess={(response) => this.handleUpload(response)} render={({onPick}) => (<div className="mb-3">
            <strong>Upload Image</strong>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button outline="outline" color="info" size="sm" onClick={onPick}>Upload</Button>&nbsp;<span>&nbsp;{this.state.file_uploaded}</span>
          </div>)}/>
          <Row>
            <Col sm={4}><Input  value={this.state.daily_pripce} onChange={this.handleChange}  className="mb-3" type="text" name="daily_price" id="daily_price" placeholder="Daily ..." rows={6}/></Col>
            <Col sm={4}><Input  value={this.state.weekly_price} onChange={this.handleChange}  className="mb-3" type="text" name="weekly_price" id="weekly_price" placeholder="Weekly ..." rows={6}/></Col>
            <Col sm={4}><Input  value={this.state.monthly_price} onChange={this.handleChange}  className="mb-3" type="text" name="monthly_price" id="monthly_price" placeholder="Monthly ..." rows={6}/></Col>
          </Row>
          <Input  value={this.state.city} onChange={this.handleChange}  className="mb-3" type="text" name="city" id="city" placeholder="City ..." rows={6}/>
          <Input  value={this.state.province} onChange={this.handleChange}  className="mb-3" type="text" name="province" id="province" placeholder="Province ..." rows={6}/>

        <Button color="primary" size="sm" block="block" onClick={this.handleSubmit}>Submit</Button>
      </Col>
    </Row>)
  }
}

export default SegmentNewPost
