import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

import ActionButton from "../small/ActionButton"

const SettingsForm = ({ submitSettingsData }) => {
  const accountNamePlaceholder = "M Haidar Hanif"
  const accountEmailPlaceholder = "me@mhaidarhanif.com"
  const accountPasswordPlaceholder = ""

  return (
    <Form
      className="settings form"
      onSubmit={e => {
        e.preventDefault()
        submitSettingsData()
      }}
    >
      <FormGroup row>
        <Label for="accountName">Account Name</Label>
        <Input
          id="accountName"
          name="accountName"
          placeholder={accountNamePlaceholder}
          defaultValue={accountNamePlaceholder}
          type="text"
        />
      </FormGroup>
      <FormGroup row>
        <Label for="accountEmail">Account Email</Label>
        <Input
          id="accountEmail"
          name="accountEmail"
          placeholder={accountEmailPlaceholder}
          defaultValue={accountEmailPlaceholder}
          type="email"
        />
      </FormGroup>
      <FormGroup row>
        <Label for="accountPassword">Account Password</Label>
        <Input
          id="accountPassword"
          name="accountPassword"
          placeholder={accountPasswordPlaceholder}
          type="password"
        />
      </FormGroup>
      <FormGroup row>
        <ActionButton>Save settings</ActionButton>
      </FormGroup>
    </Form>
  )
}

export default SettingsForm
