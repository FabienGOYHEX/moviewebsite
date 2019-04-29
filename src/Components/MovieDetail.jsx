/* Components/MovieDetail.jsx
This component corresponds to the "modal" of each movie.
*/

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import OutsideClickHandler from "react-outside-click-handler";

class MovieDetail extends Component {
  // It is the function responsible for inserting a still image in the "modal" when the API does not have an image for a particular  movie.*/
  hasBackDropImage = () => {
    if (this.props.backdrop_path === null || this.props.backdrop_path === "") {
      return (
        <img
          src={
            "https://mhaia.org/wp-content/uploads/2016/06/MHAIA-no-image-available-bg.png"
          }
          alt=""
        />
      );
    } else {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
            this.props.backdrop_path
          }`}
          alt=""
        />
      );
    }
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} className={this.props.className}>
          <OutsideClickHandler
            onOutsideClick={() => {
              alert("You clicked outside of this component!!!");
            }}
          >
            <ModalHeader>
              {this.props.title}
              <img
                style={{ width: 38, height: 38, cursor: "pointer" }}
                onClick={this.props.onClosed}
                src="https://image.flaticon.com/icons/png/128/0/39.png"
                alt="close modal window"
              />
            </ModalHeader>
            <p>Release date: {this.props.release_date}</p>
            <ModalBody>
              {this.hasBackDropImage()}
              <h3>Movie ID:{this.props.id}</h3>
              <h3>Overview:</h3>
              <p>{this.props.overview}</p>
              <p>Average score: {this.props.vote_average}</p>
              <p>Votes: {this.props.vote_count}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.onClosed}>
                Close
              </Button>
            </ModalFooter>
          </OutsideClickHandler>
        </Modal>
      </div>
    );
  }
}

export default MovieDetail;
