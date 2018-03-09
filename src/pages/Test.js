import React, {Component} from 'react'
import axios from 'axios'
import {ListGroup, ListGroupItem, Label, Input, FormGroup, Button} from 'reactstrap'


export default class Test  extends Component {
  render(){
    return (
      <div>
        <h1>Impact Hub</h1>
        <br/>
        <h2>amenities</h2>
        <ListGroup>
          <ListGroupItem>swimming pool</ListGroupItem>
          <ListGroupItem>swimming pool</ListGroupItem>
          <ListGroupItem>swimming pool</ListGroupItem>
        </ListGroup>
        <br/>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
          <Button>Submit</Button>
        </FormGroup>
        <p>review bla bla bla</p>
      </div>
    )
  }
}
