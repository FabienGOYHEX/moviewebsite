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
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle movieTitle={this.props.movieTitle} />
                </CardBody>
                <ReactPlayer url={this.props.video} controls width='100%' />
                <CardBody>
                <CardSubtitle movieSubtitle={this.props.movieSubtitle} />
                    <CardText movieDirector={this.props.movieDirector} />
                    <CardText movieWriters={this.props.movieWriters} />
                    <CardText movieStars={this.props.movieStars} />
                    <CardText movieStoryline={this.props.movieStoryline} />
                    <CardText movieRelease={this.props.movieRelease} />
                </CardBody>
            </Card>
        );
    }
}

export default MovieCardVideo;