import React from "react"

import { default as Layout } from "../templates/LayoutSingle"

import SegmentProfile from "../large/SegmentProfile"

const Profile = ({ match, location }) => {
  const profile = {
    username: match.params.username,
    full_url: location.pathname,
    match_url: match.url
  }

  // console.log(`from profile ${profile.match_url}`);

  return (
    <Layout>
      <SegmentProfile profile={profile} />
    </Layout>
  )
}

export default Profile
