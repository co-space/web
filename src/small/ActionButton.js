import React from "react"
import {Button} from "reactstrap"


const ActionButton = ({ children }) => (
  <Button outline color="primary" className="action button">{children}</Button>
)

export default ActionButton
