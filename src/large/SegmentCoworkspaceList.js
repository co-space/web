import React, {Component} from "react"
// import PropTypes from "prop-types"
import HomeThumbnail from "../medium/HomeThumbnail"

import {Row} from "reactstrap"

// const SegmentCoworkspaceList = ({onClick, fetchAllSpaces}) => {
//   console.log(fetchAllSpaces);
//   return (<div>
//     <Row >
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//       <HomeThumbnail/>
//     </Row>
//     <Pagination/>
//   </div>)
// }
//
// export default SegmentCoworkspaceList

class SegmentCoworkspaceList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // console.log(this.props.fetchAllSpaces);
    this.props.fetchAllSpaces();
  }

  render() {
    var lists = this.props.space_lists || []
    // if(lists.length > 1){
    // }
    return (<div>
      <Row >
        {lists.map((list, index) => {
          return (
            <HomeThumbnail key={index} name={list.name} photo={list.photos[0].split(',')[0]} id={list.id} total_reviews={list.total_review}/>
          )
        })}
      </Row>

    </div>)
  }
}


export default SegmentCoworkspaceList
