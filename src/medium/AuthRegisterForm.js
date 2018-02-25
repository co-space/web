import React, {Component} from "react"
import {Form, FormGroup, Label, Input} from "reactstrap"

import ActionButton from "../small/ActionButton"
import axios from 'axios';

// const AuthRegisterForm = ({ submitRegisterData }) => (
//   <Form
//     className="auth form"
//     onSubmit={e => {
//       e.preventDefault()
//       submitRegisterData()
//     }}
//   >
//     <FormGroup row>
//       <Label for="registerName">Name</Label>
//       <Input
//         id="registerName"
//         name="registerName"
//         placeholder="Your Full Name"
//         type="text"
//       />
//     </FormGroup>
//     <FormGroup row>
//       <Label for="registerEmail">Email</Label>
//       <Input
//         id="registerEmail"
//         name="registerEmail"
//         placeholder="yourname@mail.com"
//         type="email"
//       />
//     </FormGroup>
//     <FormGroup row>
//       <Label for="registerPassword">Password</Label>
//       <Input
//         id="registerPassword"
//         name="registerPassword"
//         placeholder="your_secret_password"
//         type="password"
//       />
//     </FormGroup>
//     <FormGroup row>
//       <ActionButton>Register for new account</ActionButton>
//     </FormGroup>
//   </Form>
// )
//
// export default AuthRegisterForm

class AuthRegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this)
  }

  handleChange(event) {
    var param = event.target.name
    var value = event.target.value

    this.setState({
      [param]: value
    })

    // if (param === "email") {
    //   this.isExist(param, value)
    // }
  }

  signUp(){
    var name = this.state.name
    var email = this.state.email
    var password = this.state.password

    axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, {
      username: name,
      email: email,
      password: password
    }).then(function(response) {
      console.log('saved successfully')
    }).catch(error => {
      console.log(error.response)
    });
    this.setState({name: '', email: '', password: ''})

  }

  render() {
    return (<Form className="auth form" onSubmit={e => {
        e.preventDefault()
        this.signUp()
      }}>
      <FormGroup row="row">
        <Label for="registerName">Name</Label>
        <Input value={this.state.name} onChange={this.handleChange} id="name" name="name" placeholder="Your Full Name" type="text"/>
      </FormGroup>
      <FormGroup row="row">
        <Label for="registerEmail">Email</Label>
        <Input value={this.state.email} onChange={this.handleChange} id="email" name="email" placeholder="yourname@mail.com" type="email"/>
      </FormGroup>
      <FormGroup row="row">
        <Label for="registerPassword">Password</Label>
        <Input  value={this.state.password} onChange={this.handleChange}  id="password" name="password" placeholder="your_secret_password" type="password"/>
      </FormGroup>
      <FormGroup row="row">
        <ActionButton>Register for new account</ActionButton>
      </FormGroup>
    </Form>)
  }
}

export default AuthRegisterForm
