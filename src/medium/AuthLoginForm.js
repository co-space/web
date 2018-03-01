import React, {Component} from "react"
import {Form, FormGroup, Label, Input} from "reactstrap"
import axios from "axios"
import ActionButton from "../small/ActionButton"
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';



// const AuthLoginForm = ({ submitLoginData }) => (
//   <Form
//     className="auth form"
//     onSubmit={e => {
//       e.preventDefault()
//       submitLoginData()
//     }}
//   >
//     <FormGroup row>
//       <Label for="loginEmail">Email</Label>
//       <Input
//         id="loginEmail"
//         name="loginEmail"
//         placeholder="yourname@mail.com"
//         type="email"
//       />
//     </FormGroup>
//     <FormGroup row>
//       <Label for="loginPassword">Password</Label>
//       <Input
//         id="loginPassword"
//         name="loginPassword"
//         placeholder="your_secret_password"
//         type="password"
//       />
//     </FormGroup>
//     <FormGroup row>
//       <ActionButton>Login to my account</ActionButton>
//     </FormGroup>
//   </Form>
// )
//
// export default AuthLoginForm

class AuthLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var param = event.target.name
    var value = event.target.value

    this.setState({[param]: value})
  }

  logIn() {
    var email = this.state.email
    var password = this.state.password
    var setToken = this.props.setToken
    var getActiveUser = this.props.getActiveUser

    axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, {
      email: email,
      password: password
    }).then(function(response) {
      if (response.data.token) {
        setToken(response.data.token)
        getActiveUser(response.data)

        return (<Redirect to="/dashboard"/>)
      } else {
        console.log("username / password wrong");
        swal({
          title: "Try Again!",
          text: "Wrong username / password",
          icon: "error",
          button: "Try"
        })
      }
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentWillMount(){
    // console.log(this.props.fetchActiveUser);
    // this.props.fetchActiveUser()
    // this.props.setToken({email: "dzaky@dzaky.com", password: "dzaky"})
  }

  render() {

    if (this.props.token) {
      return (<Redirect to="/"/>)
    }

    return (<Form className="auth form" onSubmit={e => {
        e.preventDefault()
        this.logIn()
      }}>
      <FormGroup row="row">
        <Label for="loginEmail">Email</Label>
        <Input value={this.state.email} onChange={this.handleChange} id="email" name="email" placeholder="yourname@mail.com" type="email"/>
      </FormGroup>
      <FormGroup row="row">
        <Label for="loginPassword">Password</Label>
        <Input value={this.state.password} onChange={this.handleChange} id="password" name="password" placeholder="your_secret_password" type="password"/>
      </FormGroup>
      <FormGroup row="row">
        <ActionButton>Login to my account</ActionButton>
      </FormGroup>
    </Form>)
  }
}

export default AuthLoginForm
