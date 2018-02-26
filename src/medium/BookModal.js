/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import Bookform from "../small/Bookform"
import PageSubtitle from "./PageSubtitle"

export default class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button outline color="success" size="sm" onClick={this.toggle}>Book now !</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <PageSubtitle>Make reservation for your favourite space now !</PageSubtitle>
          <ModalBody>
            <Bookform/>
          </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={this.toggle}>Book</Button>{' '}
            <Button outline color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}
