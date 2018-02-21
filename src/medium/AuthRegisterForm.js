import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

import ActionButton from "../small/ActionButton"

const AuthRegisterForm = ({ submitRegisterData }) => (
  <Form
    className="auth form"
    onSubmit={e => {
      e.preventDefault()
      submitRegisterData()
    }}
  >
    <FormGroup row>
      <Label for="registerName">Name</Label>
      <Input
        id="registerName"
        name="registerName"
        placeholder="Your Full Name"
        type="text"
      />
    </FormGroup>
    <FormGroup row>
      <Label for="registerEmail">Email</Label>
      <Input
        id="registerEmail"
        name="registerEmail"
        placeholder="yourname@mail.com"
        type="email"
      />
    </FormGroup>
    <FormGroup row>
      <Label for="registerPassword">Password</Label>
      <Input
        id="registerPassword"
        name="registerPassword"
        placeholder="your_secret_password"
        type="password"
      />
    </FormGroup>
    <FormGroup row>
      <ActionButton>Register for new account</ActionButton>
    </FormGroup>
  </Form>
)

export default AuthRegisterForm
