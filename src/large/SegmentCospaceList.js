import {Row} from "reactstrap"
import React,{Component} from "react"
import ThumbnailCospaceList from "../medium/ThumbnailCospaceList"

// const SegmentCospaceList = ({profile}) => {
//   return (<div>
//     <h4>
//       <b>My Cospace</b>
//     </h4>
//     <Row>
//       <ThumbnailCospaceList/>
//     </Row>
//   </div>)
// }
//
// export default SegmentCospaceList

class SegmentCospaceList extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchCospaceList(this.props.id)
  }

  render(){
    var selected_cospace_list = this.props.selected_cospace_list || []
    if(selected_cospace_list.length > 1){

    }
    return(
      <div>
          <h4>
            <b>My Cospace</b>
          </h4>
          <Row>
          {selected_cospace_list.map((selected_cospace, index) => {
            var photo = selected_cospace.photos[0].split(',')[0]
            return (
              <ThumbnailCospaceList
              key={index}
              name={selected_cospace.name}
              city={selected_cospace.location.city}
              photo={photo}
              id={selected_cospace.id}
              />
            )
          })}
          </Row>
        </div>
    )
  }
}

export default SegmentCospaceList
