// Components/Movie.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import MovieDetail from './MovieDetail'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }

        Movie.propTypes = {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string
        };
    }

    handleCardClick = () => {
        this.setState({ isModalOpen: true });
      };
    
      handleModalClose = () => {
        this.setState({ isModalOpen: false });
      };


    render() {

        return (
            <div className="movie">
                <Card>
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`}/>
                    <CardBody>
                        <CardTitle className="movie__title">{this.props.title}</CardTitle>
                        <CardSubtitle>Synopsis</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button onClick={this.HandleCardClick}>Show More</Button>
                    </CardBody>
                </Card>
                <MovieDetail isModalOpen={this.state.isModalOpen} onModalClose={this.handleModalClose}/>
            </div>
        )
    }
}


export default Movie;