import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

import ActionButton from "../small/ActionButton"

const AuthLoginForm = ({ submitLoginData }) => (
  <Form
    className="auth form"
    onSubmit={e => {
      e.preventDefault()
      submitLoginData()
    }}
  >
    <FormGroup row>
      <Label for="loginEmail">Email</Label>
      <Input
        id="loginEmail"
        name="loginEmail"
        placeholder="yourname@mail.com"
        type="email"
      />
    </FormGroup>
    <FormGroup row>
      <Label for="loginPassword">Password</Label>
      <Input
        id="loginPassword"
        name="loginPassword"
        placeholder="your_secret_password"
        type="password"
      />
    </FormGroup>
    <FormGroup row>
      <ActionButton>Login to my account</ActionButton>
    </FormGroup>
  </Form>
)

export default AuthLoginForm
