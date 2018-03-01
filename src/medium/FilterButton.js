import React, {Component} from 'react'
import {Button} from 'reactstrap'
import {connect} from "react-redux"

import {
  // get various actions creator to dispatch the actions
  setFilterCity,
  setFilterMostReview,
  fetchFilteredList
} from "../redux/actions"

// const ButtonReviews = (props) => (
//   <div className="btn-review">
//     <Link to="/co">
//       <Button outline  color="info">Most Reviewed</Button>
//     </Link>
//   </div>
// )
//
// export default ButtonReviews

class ButtonReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter_most_reviewed: true,
      toggle: true,
      className: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var city = this.props.city
    var most_review = this.props.most_review

    this.props.fetchFilteredList({city: city, most_reviewed: most_review})
  }

  render() {
    return (<div className="btn-review">
      <Button className={this.state.className}outline="outline" onClick={this.handleClick} color="info">Filter ✅</Button>
    </div>)
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {selected: state.spaces.selected_space, most_review: state.spaces.most_review, city: state.spaces.city}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilterCity: (param) => dispatch(setFilterCity(param)),
  setFilterMostReview: (param) => dispatch(setFilterMostReview(param)),
  fetchFilteredList: (param) => dispatch(fetchFilteredList(param))
})

const ConnectedButtonReviews = connect(
// Given Redux state, return props
mapStateToProps,
// Given Redux dispatch, return callback props
mapDispatchToProps)(ButtonReviews)

export default ConnectedButtonReviews
