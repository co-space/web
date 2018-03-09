import React, {Component} from "react"
import ReviewHistory from "../medium/ReviewHistory"


class SegmentProfileInfo extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    // console.log(this.props.id);
    console.log(this.props.fetchUserReviews);
    this.props.fetchUserReviews(this.props.id)
  }

  render() {
    var selected_review_history = this.props.selected_review_history || []

    return (<div>
      <h4 >
        <b>Review History</b>
      </h4>
      {selected_review_history.map((review, index) => {
        var photo = selected_review_history[index].photos[0].split(',')[0]
        return (
          <ReviewHistory key={index}
          name={selected_review_history[index].name}
          city={selected_review_history[index].location.city}
          photo={photo}

          reviews={selected_review_history[index].reviews}
          />
        )
      })}

    </div>)
  }
}

export default SegmentProfileInfo
