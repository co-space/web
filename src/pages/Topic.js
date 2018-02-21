import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

const Topic = ({ match }) => {
  const topic = {
    id: match.params.id
  }

  return (
    <Layout>
      <h2>Topic about {topic.id}</h2>
    </Layout>
  )
}

export default Topic
