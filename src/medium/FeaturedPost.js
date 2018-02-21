import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import MetaText from "../small/MetaText"

const FeaturedPost = ({ post }) => (
  <Row xs={12} className="featured post">
    <Col xs={12} md={6} className="featured text p-0 pr-0">
      <Link to={`/p/${post.id}`}>
        <h3 className="large title">{post.title}</h3>
      </Link>
      <Link to={`/p/${post.id}`}>
        <h4 className="large snippet">{post.snippet}</h4>
      </Link>
      <MetaText size="large">
        <Link className="meta" to={`/profile/${post.author.username}`}>
          by {post.author.name}
        </Link>
      </MetaText>
    </Col>

    <Col xs={12} md={6}>
      <Link to={`/p/${post.id}`}>
        <img
          className="featured image"
          src={post.image.url}
          alt={post.image.title}
        />
      </Link>
    </Col>
  </Row>
)

export default FeaturedPost
