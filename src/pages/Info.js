import React, {Component} from "react"
import {default as Layout} from "../templates/LayoutDefault"
import {Row, Col, Input, Button} from "reactstrap"
import ThumbnailBook from "../medium/ThumbnailBook"
import AmenitiesDetail from "../small/AmenitiesDetail"
import Carousel from "../medium/Carousel"
import Review from "../medium/Review"
import '../medium/medium.css'
import Tablemenus from "../small/TableMenus"
import {isEmpty} from "lodash"
import axios from "axios"
import Sticky from 'react-sticky-el'

class Info extends Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.fetchOneSpace = this.props.fetchOneSpace
    this.state = {
      review: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addReview = this.addReview.bind(this);
    this.fetchOne = this.fetchOne.bind(this);

  }

  handleChange(event) {
    var param = event.target.name
    var value = event.target.value

    this.setState({[param]: value})
    // console.log(this.state.review);
  }

  componentWillMount() {
    this.fetchOne()
  }

  fetchOne() {
    this.fetchOneSpace(this.id)
  }

  addReview() {
    // console.log(this.state.review);
    var review = this.state.review
    // console.log();
    var token = this.props.token
    var fetchOne = this.fetchOne

    if (review.length > 20) {
      axios.post(`${process.env.REACT_APP_API_URL}/coworking_spaces/add_review/${this.id}`, {
        review: review,
        token: token
      }).then(function(response) {
        console.log('saved successfully')
        fetchOne()
      }).catch(error => {
        console.log(error.response)
      });
      this.setState({review: ''})
    }

  }

  // handleKeyPress = (event) => {
  //   if (event.key == 'Enter') {
  //     this.addReview()
  //   }
  // }

  render() {
    var selected = this.props.selected || {}
    var amenities = []
    var photos = []
    var reviews = []
    var totalReview = 0
    var price = {}

    if (!isEmpty(selected)) {
      var date = new Date(selected.createdAt)
      var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
      var joinDate = `Joined ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
      var amenities = selected.amenities[0].split(',')
      var photos = selected.photos[0].split(',')
      var reviews = selected.reviews
      var totalReview = reviews.length
      var price = {
        daily: selected.price.daily,
        weekly: selected.price.weekly,
        monthly: selected.price.monthly
      }
      console.log(price);
    }
    // console.log(this.props.active_user);

    return (<Layout>
      <Row >
        <Col sm={8}>
          <h2>
            <b>{selected.name}</b>
          </h2>
          <b className="text-secondary">{joinDate}</b><br/>
          <span className="text-muted">{selected.address}</span><hr/>
          <h4 className="mt-3">
            <b>Overview</b>
          </h4>
          <p className="text-justify">{selected.overview}</p><hr/>
          <h4>
            <b>Amenities</b>
          </h4>
          <Row className="mb-2">
            {
              amenities.map((amenity, index) => {
                return (<AmenitiesDetail key={index} amenity={amenity}/>)
              })
            }
          </Row><hr/>
          <h4>
            <b>Price List</b>
          </h4>
          <Tablemenus price={price}/>
          <h4><hr/>
            <b>Photos</b>
          </h4>
          {
            (photos.length > 0)
              ? (<Carousel photos={photos}/>)
              : (<div></div>)

          }
          <Input value={this.state.review} onChange={this.handleChange} className="mb-1" type="textarea" name="review" id="review" placeholder="Share your experiences... (min. 20 char)"/>

          <Button onClick={this.addReview} className="mb-3" color="primary" size="sm" block="block">Submit</Button>
          <h4>
            <b>{totalReview}&nbsp;
              Reviews</b>
          </h4>
          {
            reviews.map((review, index) => {
              var date = new Date(review.post_date)
              var month = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]
              var strDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`

              return (<Review name={review._account.name} photo={review._account.profile_picture} review={review.review} date={strDate} id={review._account.id}/>)
            })
          }
        </Col>

        <Col sm={4}>
          <Sticky>
            <ThumbnailBook name={selected.name} photos={photos} />
          </Sticky>
        </Col>

      </Row>

    </Layout>)
  }
}

export default Info
