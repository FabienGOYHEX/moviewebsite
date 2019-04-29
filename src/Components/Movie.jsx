/* Components/Movie.jsx
This component corresponds to each movie card that appears in the search results.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import MovieDetail from './MovieDetail'

class Movie extends Component {
    //@constructor
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

    // It is the function that allows us to open the "modal" when we click on the "Sow More" button.
    HandleCardClick = () => {
        this.setState({ isOpen: true });
    };

    // It is the function that allows us to close the "modal" when we click on the "Close" button of MovieDetal.
    handleModalClose = () => {
        this.setState({ isOpen: false });
    };

    // It is the function responsible for inserting a still image in the movie card when the API does not have an image for show.
    hasPosterImage = () => {
      if(this.props.poster_path === null || this.props.poster_path === '') {
        return <img src={'https://mhaia.org/wp-content/uploads/2016/06/MHAIA-no-image-available-bg.png'} alt=''/>
    } else {
        return <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} alt=''/>
      }
    }

    render() {
console.log(this.props)
        return (
            <div style={{width:'300px', height:'650px'}}className="movie">
                <Card onClick={this.HandleCardClick} style={{cursor:'pointer'}}>
                    {this.hasPosterImage()}
                    <CardBody>
                        <CardTitle className="movie__title" style={{fontWeight:'bold'}}>{this.props.title}</CardTitle>
                        <CardSubtitle>Release date: {this.props.release_date}</CardSubtitle>
                        <Button color="primary" onClick={this.HandleCardClick}>Show More</Button>
                    </CardBody>
                </Card>
                <MovieDetail isOpen={this.state.isOpen} onClosed={this.handleModalClose} {...this.props} />
            </div>
        )
    }
}


export default Movie;