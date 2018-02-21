import React from "react"
// import PropTypes from "prop-types"
import { Nav } from "reactstrap"

import NavLink from "../small/NavLink"
import TopicText from "../small/TopicText"

const TopicTags = ({ topics }) => {
  return (
    <Nav className="center nav-topics trimmer">
      {topics.all.map((topic, index) => {
        return (
          <NavLink key={index} to={topic.path}>
            <TopicText>{topic.title}</TopicText>
          </NavLink>
        )
      })}
    </Nav>
  )
}

export default TopicTags
