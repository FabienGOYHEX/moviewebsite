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
        this.toggle = this.toggle.bind(this);
        Movie.propTypes = {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string
        };
    }

    // It is the function that allows us to open and close the "modal".
    toggle() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

    // It is the function responsible for inserting a still image in the movie card when the API does not have an image for show.
    hasPosterImage = () => {
      if(this.props.poster_path === null || this.props.poster_path === '') {
        return <img src={'https://mhaia.org/wp-content/uploads/2016/06/MHAIA-no-image-available-bg.png'} alt=''/>
    } else {
        return <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} alt=''/>
      }
    }

    render() {
        return (
            <div style={{width:'300px', height:'650px', margin:20 }}className="movie">
               <Card onClick={this.toggle} style={{cursor:'pointer', fontFamily: 'Dosis, sans-serif'}}>
                   {this.hasPosterImage()}
                   <CardBody>
                       <CardTitle className="movie__title" style={{fontWeight:'bold'}}>{this.props.title}</CardTitle>
                       <CardSubtitle>Release date: {this.props.release_date}</CardSubtitle>
                       <Button color="primary" toggle={this.toggle}  >Show More
                       </Button>
                   </CardBody>
               </Card>
               <MovieDetail isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />
           </div>
        )
    }
}


export default Movie;