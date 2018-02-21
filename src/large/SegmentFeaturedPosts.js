import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import FeaturedPost from "../medium/FeaturedPost"

import SectionTitle from "../small/SectionTitle"

const POSTS = [
  {
    id: 0,
    title: "Hello Branding World",
    content:
      "The world of branding is changing very much faster than we predicted",
    snippet:
      "The world of branding is changing very much faster than we predicted...",
    image: {
      title: "Branding Bike",
      url: `${process.env.REACT_APP_API_URL}/images/posts/branding-bike.png`
    },
    author: {
      name: "M Haidar Hanif",
      username: "mhaidarh",
      avatar_url: `${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`
    }
  },
  {
    id: 1,
    title: "Super Human",
    content: "Human is revolutionizing very much faster than we predicted",
    snippet: "Human is revolutionizing very much faster than we predicted...",
    image: {
      title: "Leadership",
      url: `${process.env.REACT_APP_API_URL}/images/posts/leadership-stage.jpg`
    },
    author: {
      name: "Superman",
      username: "superman",
      avatar_url: `${process.env.REACT_APP_API_URL}/images/avatars/mhaidarh.jpg`
    }
  }
]

const SegmentFeaturedPosts = ({ posts }) => (
  <Row id="SegmentFeaturedPosts">
    <Col>
      <Link to="/posts">
        <SectionTitle>FEATURED</SectionTitle>
      </Link>
    </Col>
    {POSTS.map((post, index) => {
      return (
        <Col key={index} xs={12}>
          <FeaturedPost post={post} />
        </Col>
      )
    })}
  </Row>
)

export default SegmentFeaturedPosts
