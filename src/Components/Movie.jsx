// Components/Movie.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import MovieDetail from './MovieDetail'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }

        Movie.propTypes = {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string
        };
    }

    HandleCardClick = () => {
        console.log('toto');
        
        this.setState({ isOpen: true });
      };
    
      handleModalClose = () => {
        this.setState({ isOpen: false });
      };


    render() {
console.log(this.props)
        return (
            <div className="movie">
                <Card>
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} alt=""/>
                    <CardBody>
                        <CardTitle className="movie__title">{this.props.title}</CardTitle>
                        <CardSubtitle>Synopsis</CardSubtitle>
                        <CardText>{this.props.overview}</CardText>
                        <input type="button" onClick={this.HandleCardClick} value="Show More" />
                    </CardBody>
                </Card>
                <MovieDetail isOpen={this.state.isOpen} onClosed={this.handleModalClose} {...this.props} />
            </div>
        )
    }
}


export default Movie;