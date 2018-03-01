import React from 'react';
import { Table } from 'reactstrap';


export default class TableMenus extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Table bordered hover className="scale-up-center">
        <thead>
          <tr>
            <th>People</th>
            <th>Membership Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Daily</td>
            <td>{this.props.price.daily}</td>

          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Weekly</td>
            <td>{this.props.price.weekly}</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Monthly</td>
            <td>{this.props.price.monthly}</td>

          </tr>
        </tbody>
      </Table>
    );
  }
}
