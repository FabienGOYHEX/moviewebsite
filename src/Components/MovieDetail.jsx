/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MovieDetail extends Component {

  hasBackDropImage = () => {
    if(this.props.backdrop_path === null || this.props.backdrop_path === '') {
      return <img src={'https://mhaia.org/wp-content/uploads/2016/06/MHAIA-no-image-available-bg.png'} alt=''/>
    } else {
      return <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.backdrop_path}`} alt=''/>
    }
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} onClosed={this.props.onClosed} className={this.props.className}>
          <ModalHeader>{this.props.title}</ModalHeader>
          <p>Release date: {this.props.release_date}</p>
          <ModalBody>
          {this.hasBackDropImage()}
          <h3>ID:{this.props.id}</h3>
          <h3>Overview:</h3>
          <p>{this.props.overview}</p>
          <p>Average score: {this.props.vote_average}</p>
          <p>Votes: {this.props.vote_count}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onClosed}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MovieDetail;