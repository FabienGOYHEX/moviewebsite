/** 'src/CardsComponents/MovieCardVideo.js'
 * Child of MovieCard.js - Card which contains movie details (video, storyline, casting..)
 */ 

import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//import ReactPlayer dependancies in order to read video
import ReactPlayer from 'react-player'
import {
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle
} from "reactstrap";


class MovieCardVideo extends Component {
    // @constructor
        constructor(props){  
            super(props);
        }
    render() {
        return (
            <div>
            <Card>

                <CardBody>
                    <CardTitle>{this.props.movieTitle}</CardTitle>
                </CardBody>
                <ReactPlayer url={this.props.video} controls width='100%' />
                <CardBody>
                <CardSubtitle style={{backgroundColor:'black'}} movieSubtitle={this.props.movieSubtitle} />
                    <CardText>{this.props.movieDirector}</CardText>
                    <CardText>{this.props.movieWriters}</CardText>
                    <CardText>{this.props.movieStars}</CardText>
                    <CardText>{this.props.movieStoryLine}</CardText>
                    <CardText>{this.props.movieRelease}</CardText>
                </CardBody>
            </Card>
            </div>
        ); 
    }
}

export default MovieCardVideo;