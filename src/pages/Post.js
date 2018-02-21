import React, {Component} from "react"
import {default as Layout} from "../templates/LayoutSingle"

import SegmentPostContent from "../large/SegmentPostContent"

// const Post = ({ match }) => {
//   const post = {
//     id: match.params.id,
//     title: "Placeholder Title",
//     content:
//       "What makes a team a great team to my experience is complementarity and competency. Each member should bring several years of expertise in a field of competence that is relevant for the startup’s business model. Considering a hardware startup (like medtech) we hence need to see a mechanical and/or electrical engineer as the one who delivers the product(-development). In case of a software company the deliverer comes from the computer science corner. She/he’s the CTO."
//   }
//
//   return (
//     <Layout>
//       <SegmentPostContent post={post} />
//     </Layout>
//   )
// }
//
// export default Post

class Post extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    const title = this.props.posts.selected.title
    const content = this.props.posts.selected.content
    const post = {
      id: this.props.match.params.id,
      title: title,
      content: content
    }
    // console.log(`this is state from redux ${posts.selected}`);
    // console.log(`this is fetchPost ${fetchPost}`);
    // console.log(title);

    return (<Layout>
      <SegmentPostContent post={post}/>
    </Layout>)
  }
}
export default Post
