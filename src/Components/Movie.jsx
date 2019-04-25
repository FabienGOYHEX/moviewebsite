// Components/Movie.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Button, CardBody,
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
  
        this.setState({ isOpen: true });
      };
    
      handleModalClose = () => {
        this.setState({ isOpen: false });
      };
      
      hasPosterImage = () => {
      if(this.props.poster_path === null || this.props.poster_path === '') {
        return <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'} alt=''/>
      } else {
        return <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} alt=''/>
      }
    }


    render() {
console.log(this.props)
        return (
            <div style={{width:'300px', height:'650px'}}className="movie">
                <Card>
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