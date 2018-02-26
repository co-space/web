import React from 'react';
import { Table } from 'reactstrap';
import './small.css'

export default class TableMenus extends React.Component {
  render() {
    return (
      <Table bordered hover className="table-menu">
        <thead>
          <tr>
            <th>People</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Access Hours</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1 hour</td>
            <td>{/* this.state for price */}</td>
            <td>Reception Hours</td>
            <td>enquire</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>1 day</td>
            <td>{/* this.state for price */}</td>
            <td>Receptionist Hours</td>
            <td>available</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>1 month</td>
            <td>{/* this.state for price */}</td>
            <td>Receptionist Hours</td>
            <td>Available</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
