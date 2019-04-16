/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactPlayer from 'react-player';


class MovieDetail extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} onClosed={this.props.onClosed} className={this.props.className}>
          <ModalHeader><h1>{this.props.original_title}</h1></ModalHeader>
          <p>Release date: {this.props.release_date}</p>
          <ModalBody>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.backdrop_path}`} alt=''/>
          <h3>Overview:</h3>
          <p>{this.props.overview}</p>
          <p>Popularity: {this.props.popularity}</p>
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