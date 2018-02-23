import React from 'react';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Bookform extends React.Component {
  render() {
    return (
      <Form>

        <FormGroup>

          <Input type="name" name="name" id="name-book" placeholder="name" />
        </FormGroup>

        <FormGroup>

          <Input type="email" name="email" id="email-book" placeholder="email" />
        </FormGroup>

        <FormGroup>
          <Label for="select-book">Select Room Type</Label>
          <Input type="select" name="select-book" id="select-book">
            <option>Hot Desk</option>
            <option>Dedicated Desk</option>
            <option>Private Office</option>
          </Input>
        </FormGroup><br/>


        <Form inline>
        <FormGroup>

          <Input type="people" name="people" id="peopleCount" placeholder="Total Person" />
        </FormGroup>&nbsp;&nbsp;
        {' '}
        <FormGroup>

          <Input type="password" name="password" id="examplePassword" placeholder="Pick a date" />
        </FormGroup>
        {'  '}

      </Form>




      </Form>
    );
  }
}
