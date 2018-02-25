import React from "react"

import { default as Layout } from "../templates/LayoutSingle"

import SegmentProfile from "../large/SegmentProfile"
import ConnectedProfile from "../redux/containers/ConnectedProfile"


const Profile = ({ match, location }) => {
  const profile = {
    username: match.params.username,
    full_url: location.pathname,
    match: match
  }

  return (
    <Layout>
      <ConnectedProfile profile={profile} />
    </Layout>
  )
}

export default Profile
