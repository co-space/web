import React, {Component} from 'react'
import axios from 'axios'
import {ListGroup, ListGroupItem, } from 'reactstrap'


export default class Test  extends Component {
  render(){
    return (
      <div>
        <h1>{/*name*/}</h1>
        <h2>amenities</h2>
        <ListGroup>
          <ListGroupItem>{/*amenities*/}</ListGroupItem>
        </ListGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </div>
    )
  }
}
