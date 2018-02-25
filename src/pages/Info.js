import React, {Component} from "react"
import {default as Layout} from "../templates/LayoutDefault"
import {Row, Col, Input, Button} from "reactstrap"
import ThumbnailBook from "../medium/ThumbnailBook"
import AmenitiesDetail from "../small/AmenitiesDetail"
import Carousel from "../medium/Carousel"
import Review from "../medium/Review"
import InfoMenu from "../medium/InfoMenu"
import {isEmpty} from "lodash"

class Info extends Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.fetchOneSpace = this.props.fetchOneSpace
  }

  componentWillMount() {
    this.fetchOneSpace(this.id)
  }



  render() {
    var selected = this.props.selected || {}
    var amenities = []
    var photos = []
    var reviews = []
    if(!isEmpty(selected)){
      var date = new Date(selected.createdAt)
      var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      var joinDate = `Joined ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
      var amenities = selected.amenities
      var photos = selected.photos
      var reviews = selected.reviews
      console.log(reviews);
    }"/test"

    return (<Layout>
      <Row >
        <Col sm={8}>
          <h2>
            <b>{selected.name}</b>
          </h2>
          <b className="text-secondary">{joinDate}</b><br/>
          <span className="text-muted">{selected.address}</span>
          <h4 className="mt-3">
            <b>Overview</b>
          </h4>
          <p className="text-justify">{selected.overview}</p>
          <h4>
            <b>Amenities</b>
          </h4>
          <Row className="mb-2">
            {amenities.map((amenity, index) => {
              return (
                <AmenitiesDetail key={index} amenity={amenity} />
              )
            })}
          </Row>
          <h4>
            <b>Price List</b>
          </h4>
          <InfoMenu/>
          <h4>
            <b>Photos</b>
          </h4>
          {(photos.length > 0) ? (<Carousel photos={photos}/>) : (<div></div>)}
          <Input className="mb-1" type="textarea" name="review" id="review" placeholder="Share your experiences..."/>
          <Button className="mb-3" color="primary" size="sm" block="block">Submit</Button>
          <h4>
            <b>32 Reviews</b>
          </h4>
          {
            reviews.map((review, index) => {
              var date = new Date(review.post_date)
              var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
              var strDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`

              return (<Review
                name={review._account.name}
                photo={review._account.profile_picture}
                review={review.review}
                date={strDate}
                id={review._account.id}/>)
            })
          }
        </Col>
        <Col sm={4}>
          <ThumbnailBook/>
        </Col>

      </Row>

    </Layout>)
  }
}

export default Info
