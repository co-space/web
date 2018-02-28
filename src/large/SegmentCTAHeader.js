import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Row, Col} from "reactstrap"

import Logo from "../small/Logo"
import SearchBox from "../small/SearchBox"
import CTAButtons from "../medium/CTAButtons"
import CTAAvatar from "../small/CTAAvatar"
import NavButtons from "../medium/NavButtons"
import {isEmpty} from "lodash"

const auth = {
  account: {
    name: "M Haidar Hanif",
    username: "mhaidarh",
    image_url: `${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`
  }
}


class SegmentCTAHeader extends Component {
  constructor(props){
    super(props)
  }

  // componentWillMount(){
  //   console.log(this.props.token);
  //   if(this.props.token){
  //
  //   }
  // }

  render(){
    var active_user = this.props.active_user || {}
    var id = ""
    var photo = ""
    if(!isEmpty(active_user)){
      var id = active_user.id
      var photo = active_user.profile_picture
    }
    return(
      <Row id="SegmentCTAHeader" className="">
         <Col sm={2}>
           <Logo />
         </Col>
         <Col sm={7}>
           <SearchBox />
         </Col>
         <Col sm={3} className="column right">
         {(this.props.token) ? (<CTAAvatar
           to={`/profile/${id}`}
           photo={photo}
         />) : (<NavButtons />)}

           {/*<CTAAvatar
             to={`/profile/${auth.account.username}`}
             account={auth.account}
           />*/}
         </Col>
          {/*<Col xs={12} md={4} className="column right">
           <CTAButtons />
           <CTAAvatar
             to={`/profile/${auth.account.username}`}
             account={auth.account}
           />
         </Col>*/}
       </Row>

    )
  }
}

export default SegmentCTAHeader
