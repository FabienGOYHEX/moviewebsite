/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class MovieDetail extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isModalOpen} onClose={this.props.onModalClose} className={this.props.className}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onModalClose}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.onModalClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MovieDetail;