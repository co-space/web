import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Row, Col, Input, Button, Label} from "reactstrap"
import ReactFilestack, {client} from 'filestack-react';
import axios from "axios"
import {Redirect} from "react-router-dom"
import Multiselect from '../large/Multiselect'
import 'react-select/dist/react-select.css';
import Select from 'react-select';

//API_KEY filestack
const API_KEY = "Avsgm8lbeTA2U9LnX68j5z"
const AMENITIES = [
  {
    label: 'High Speed Wifi',
    value: 'highspeedwifi'
  }, {
    label: 'Lounge ',
    value: 'Lounge'
  }, {
    label: 'Free Coffee/Tea ',
    value: 'freecoffetea'
  }, {
    label: 'Kitchen',
    value: 'kitchen'
  }, {
    label: 'Standing Desk',
    value: 'standingdesk'
  }, {
    label: 'Pool Table',
    value: 'pooltable'
  }, {
    label: 'Skype Room',
    value: 'skyperoom'
  }, {
    label: 'Projector',
    value: 'projector'
  }, {
    label: 'Screen',
    value: 'screen'
  }, {
    label: 'Large Monitor',
    value: 'largemonitor'
  }, {
    label: 'Speakers',
    value: 'speakers'
  }, {
    label: 'Personal Table',
    value: 'personaltable'
  }, {
    label: 'Computers (PCs)',
    value: 'pcs'
  }, {
    label: 'Computers (Macs)',
    value: 'macs'
  }, {
    label: 'On-site Cafe/Restaurant',
    value: 'restaurant'
  }, {
    label: 'Comfortable Chair',
    value: 'chair'
  }, {
    label: 'Childcare ',
    value: 'childcare'
  }, {
    label: 'Beanbags',
    value: 'beanbags'
  }, {
    label: 'Outdoor Teracce',
    value: 'outdoorteracce'
  }, {
    label: 'Ping Pong Table ',
    value: 'pingpong'
  }, {
    label: 'Printer',
    value: 'printer'
  }, {
    label: 'Scanner',
    value: 'scanner'
  }, {
    label: '24hr member access',
    value: '24hr'
  }, {
    label: 'Dual/Single Monitor',
    value: 'dualsinglemonitor'
  }, {
    label: 'Free parking',
    value: 'freeparking'
  }, {
    label: 'Events and / or workshops',
    value: 'eventsandworkshops'
  }, {
    label: 'Whiteboard and Fresh Markers',
    value: 'whiteboardmarkers'
  }
];

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
      cospace_id: 1,
      value: [],
      disabled: false,
      selectedOption: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);

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

  handleDropdown = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Selected: `, selectedOption);
  }

  handleSubmit() {
    var name = this.state.name
    var address = this.state.address
    var overview = this.state.overview
    var photo = this.state.photos
    var token = this.props.token
    var value = this.state.value.split(',')
    var state = this.state
    var city = this.state.selectedOption.value
    var daily_price = this.state.daily_price
    var weekly_price = this.state.weekly_price
    var monthly_price = this.state.monthly_price

    var self = this
    // console.log(value);
    if (token) {
      axios.post(`${process.env.REACT_APP_API_URL}/coworking_spaces`, {
        name: name,
        address: address,
        overview: overview,
        token: token,
        photo: photo,
        amenities: value,
        city: city,
        price: {
          daily: daily_price,
          weekly: weekly_price,
          monthly: monthly_price
        }
      }).then(function(response) {
        console.log(response);
        if (response.data) {
          self.setState({cospace_id: response.data.data.id, redirect: true})
        }
      }).catch(error => {
        console.log(error.response)
      });
    }
  }

  handleMultiselect = (value) => {
    this.setState({value});
    // console.log(` You Selected: `, value);
  }

  render() {
    const {crazy, disabled, stayOpen, value,selectedOption} = this.state;
    const options = AMENITIES
    const dropdownValue = selectedOption && selectedOption.value;

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
        <Select multi="multi" Creatable="Creatable" simpleValue="simpleValue" rtl={this.state.rtl} removeSelected={true} className="multiselect" value={value} onChange={this.handleMultiselect} isLoading={false} placeholder="Select Your Amenities" options={options}/> {/* <Input type="text" name="cospaceImage" id="cospaceImage" placeholder="Insert JPG/PNG formatted image URL ..."/>
          <FormText className="mb-3" color="muted">
            Example: https://google.co.id/images/branding/logo/googlelogo_color.png
          </FormText> */
        }
        <ReactFilestack apikey={API_KEY} onSuccess={(response) => this.handleUpload(response)} render={({onPick}) => (<div className="mb-3">
            <strong>Upload Image</strong>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button outline="outline" color="info" size="sm" onClick={onPick}>Upload</Button>&nbsp;<span>&nbsp;{this.state.file_uploaded}</span>
          </div>)}/>
          <strong>Membership Price</strong>
        <Row className="mt-2">
          <Col sm={4}><Input value={this.state.daily_pripce} onChange={this.handleChange} className="mb-3" type="text" name="daily_price" id="daily_price" placeholder="Daily ..." rows={6}/></Col>
          <Col sm={4}><Input value={this.state.weekly_price} onChange={this.handleChange} className="mb-3" type="text" name="weekly_price" id="weekly_price" placeholder="Weekly ..." rows={6}/></Col>
          <Col sm={4}><Input value={this.state.monthly_price} onChange={this.handleChange} className="mb-3" type="text" name="monthly_price" id="monthly_price" placeholder="Monthly ..." rows={6}/></Col>
        </Row>
        <Select
          className="Dropdown_City mb-3"
          name="form-field-name"
          value={dropdownValue}
          removeSelected={true}
          onChange={this.handleDropdown}
          placeholder="Select your city"
          options={[
            { value: 'Jakarta', label: 'Jakarta' },
            { value: 'Jakarta Selatan', label: 'Jakarta Selatan' },
            { value: 'Jakarta Barat', label: 'Jakarta Barat' },
            { value: 'Jakarta Utara', label: 'Jakarta Utara' },
            { value: 'Jakarta Timur', label: 'Jakarta Timur' },
            { value: 'Jakarta Pusat', label: 'Jakarta Pusat' },
            { value: 'Bandung', label: 'Bandung' },
            { value: 'Semarang', label: 'Semarang' },
            { value: 'Bogor', label: 'Bogor' },
            { value: 'Surabaya', label: 'Surabaya' },
            { value: 'Tangerang', label: 'Tangerang' },
            { value: 'Medan', label: 'Medan' },
            { value: 'Makassar', label: 'Makassar' },
            { value: 'Solo', label: 'Solo' },
            { value: 'Banjarmasin', label: 'Banjarmasin' },
            { value: 'Batam', label: 'Batam' },
            { value: 'Lampung', label: 'Lampung' },
            { value: 'Malang', label: 'Malang' },
          ]}
        />
        <Button color="primary" size="sm" block="block" onClick={this.handleSubmit}>Submit</Button>
      </Col>
    </Row>)
  }
}

export default SegmentNewPost
