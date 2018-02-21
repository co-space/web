import React from "react"

import FooterText from "../small/FooterText"

const FooterTexts = ({ links }) => {
  return (
    <footer className="footer">
      {links.map((link, index) => {
        return (
          <FooterText key={index} to={link.to}>
            {link.title}
          </FooterText>
        )
      })}
    </footer>
  )
}

export default FooterTexts
