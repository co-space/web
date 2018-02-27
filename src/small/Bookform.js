import React from 'react';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CalendarInput from './CalendarInput';


export default class Bookform extends React.Component {
  render() {
    return (<Form>
      <FormGroup>
        <Input type="name" name="name" id="name-book" placeholder="name"/>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="email" id="email-book" placeholder="email"/>
      </FormGroup>

      <FormGroup>

        <CalendarInput/>
      </FormGroup>

        <FormGroup>
          <Input type="people" name="people" id="peopleCount" placeholder="Total Person"/>
        </FormGroup>&nbsp;&nbsp; {' '}










    </Form>);
  }
}
