// import React from "react"
import React, { Component } from 'react';
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import SmallPost from "../medium/SmallPost"
import SectionTitle from "../small/SectionTitle"

// const SegmentLatestPosts = ({ posts, onClick, fetchAllPosts }) => {
//   // console.log("SegmentLatestPosts.props", props)
//   console.log(fetchAllPosts)
//   // () => fetchAllPosts()
//   // fetchAllPosts()
//   // var test = () => fetchAllPosts()
//   return (
//     <Row id="SegmentLatestPosts" xs={8}>
//     <span onClick={() => fetchAllPosts("test!!!")}>TEST CLICK</span>
//       <Col xs={12}>
//         <Link to="/posts">
//           <SectionTitle>Latest posts for you</SectionTitle>
//         </Link>
//       </Col>
//       {posts.all.map((post, index) => {
//         return (
//           <Col key={index} xs={12} md={8} lg={6}>
//             <SmallPost post={post} />
//           </Col>
//         )
//       })}
//     </Row>
//   )
// }
//
// export default SegmentLatestPosts

class SegmentLatestPosts extends Component {
  constructor(props){
    super(props)
    this.loadFetch = this.loadFetch.bind(this);

  }
  // console.log("SegmentLatestPosts.props", props)
  // console.log(fetchAllPosts)
  // () => fetchAllPosts()
  // fetchAllPosts()
  loadFetch(){
    var fetchAllPosts = () => this.props.fetchAllPosts()
    fetchAllPosts()
  }

  componentWillMount(){
    // this.loadFetch()
    var fetchAllPosts = () => this.props.fetchAllPosts()
    fetchAllPosts()
  }
  // var test = () => fetchAllPosts()
  render(){
    // console.log(this.props.fetchAllPosts);
    var onClick = this.props.onClick
    // var fetchAllPosts = () => this.props.fetchAllPosts()
    var posts = this.props.posts
    var fetchPost = this.props.fetchPost
    // this.loadFetch()
    // console.log(fetchAllPosts);
    // var test = () => fetchAllPosts()
    // test()
    // fetchAllPosts()

    return (

      <Row id="SegmentLatestPosts" xs={8}>
      {/*<span onClick={this.loadFetch}>TEST CLICK</span>*/}
      {/*<span onClick={() => fetchPost("1")}>TEST CLICK</span>*/}
        <Col xs={12}>
          <Link to="/posts">
            <SectionTitle>Latest posts for you</SectionTitle>
          </Link>
        </Col>
              {posts.all.map((post, index) => {
                return (
                  <Col key={index} xs={12} md={8} lg={6}>
                    <SmallPost post={post} />
                  </Col>
                )
              })}
      </Row>
    )
  }

}

export default SegmentLatestPosts
