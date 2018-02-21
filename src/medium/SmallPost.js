import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import tinydate from "tinydate"

import MetaText from "../small/MetaText"

const dateStamp = tinydate("{DD}-{MM}-{YYYY}")
const postDate = dateStamp(new Date())

const SmallPost = ({ post }) => (
  <Row className="small post">
    <Col xs={12} md={6} className="small text p-0 pr-0">
      <Link to={`/p/${post.id}`}>
        <h3 className="small title">{post.title}</h3>
      </Link>
      <MetaText size="medium">
        <Link className="meta" to={`/profile/${post.creator.username}`}>
          by {post.creator.name}
        </Link>
      </MetaText>
      <MetaText size="small">{postDate}</MetaText>
    </Col>

    <Col xs={4} md={4}>
      <Link to={`/p/${post.id}`}>
        <img
          className="small image"
          src={`${process.env.REACT_APP_API_URL}/images/posts/abstract.jpg`}
          alt={post.title}
        />
      </Link>
    </Col>
  </Row>
)

export default SmallPost
