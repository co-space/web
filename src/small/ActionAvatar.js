import React from "react"
import { Link } from "react-router-dom"

const ActionAvatar = ({ to, account }) => {
  return (
    <span className="action avatar">
      <Link to={to}>
        <img src={account.image_url} alt={account.name} />
      </Link>
    </span>
  )
}

export default ActionAvatar
