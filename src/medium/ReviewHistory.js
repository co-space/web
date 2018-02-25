import {Row, Col} from "reactstrap"

import Review from "./Review"
import React, {Component} from "react"
import ThumbnailCospace from "./ThumbnailCospace"

// const ReviewHistoryu = ({selected_review_history}) => (<Row>
//   <Col sm={3} className="text-center pr-0">
//   <ThumbnailCospace/>
//   </Col>
//   <Col sm={9}>
//     <Review/>
//   </Col>
// </Row>)
//
// export default ReviewHistoryu

class ReviewHistory extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  render() {
    var name = this.props.name || ""
    var city = this.props.city || ""
    var photo = this.props.photo || ""
    var reviews = this.props.reviews || []
    return (<Row>
      <Col sm={3} className="text-center pr-0">
        <ThumbnailCospace name={name} city={city} photo={photo}/>
      </Col>
      <Col sm={9}>
        {
          reviews.map((review, index) => {
            var date = new Date(review.post_date)
            var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
            var strDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`

            return (<Review
              name={review._account.name}
              photo={review._account.profile_picture}
              review={review.review}
              date={strDate}/>)
          })
        }
      </Col>
    </Row>)
  }
}

export default ReviewHistory
