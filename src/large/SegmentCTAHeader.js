import React, {Component} from "react"
// import PropTypes from "prop-types"
import {Row, Col} from "reactstrap"

import Logo from "../small/Logo"
import SearchBox from "../small/SearchBox"
import CTAButtons from "../medium/CTAButtons"
import CTAAvatar from "../small/CTAAvatar"
import NavButtons from "../medium/NavButtons"

//
const auth = {
  account: {
    name: "M Haidar Hanif",
    username: "mhaidarh",
    image_url: `${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`
  }
}

// const SegmentCTAHeader = ({ className }) => (
//   <Row id="SegmentCTAHeader" className={`center ${className}`}>
//     <Col sm={2}>
//       <Logo />
//     </Col>
//     <Col sm={7}>
//       <SearchBox />
//     </Col>
//     <Col sm={3} className="column right">
//     {/*<NavButtons />*/}
//       <CTAAvatar
//         to={`/profile/${auth.account.username}`}
//         account={auth.account}
//       />
//     </Col>
//      {/*<Col xs={12} md={4} className="column right">
//       <CTAButtons />
//       <CTAAvatar
//         to={`/profile/${auth.account.username}`}
//         account={auth.account}
//       />
//     </Col>*/}
//   </Row>
// )
//
// export default SegmentCTAHeader

class SegmentCTAHeader extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    console.log(this.props.token);
  }

  render(){
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
           to={`/profile/${auth.account.username}`}
           account={auth.account}
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
