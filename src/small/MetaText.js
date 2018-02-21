import React from "react"

const MetaText = ({ size, children }) => {
  return size === "small" ? (
    <span className="small meta">{children}</span>
  ) : size === "medium" ? (
    <span className="medium meta">{children}</span>
  ) : size === "large" ? (
    <span className="large meta">{children}</span>
  ) : (
    <span className="meta">{children}</span>
  )
}

export default MetaText
