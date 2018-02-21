import React from "react"

import { default as Layout } from "../templates/LayoutSingle"

import SegmentProfile from "../large/SegmentProfile"

const Profile = ({ match }) => {
  const profile = {
    username: match.params.username
  }

  return (
    <Layout>
      <SegmentProfile profile={profile} />
    </Layout>
  )
}

export default Profile
