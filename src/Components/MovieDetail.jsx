/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class MovieDetail extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} onClosed={this.props.onClosed} className={this.props.className}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
          <p>{this.props.overview}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onClosed}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.onClosed}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MovieDetail;