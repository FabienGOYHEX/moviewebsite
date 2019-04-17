/** 'src/CardsComponents/ItemCardVideo.js'
 * Child of ItemCard.js - Card which contains Item details (video, storyline, casting..).
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


class ItemCardVideo extends Component {
    // @constructor
        constructor(props){  
            super(props);
        }
    render() {
        return (
            <Card>

                <CardBody>
                    <CardTitle>{this.props.ItemTitle}</CardTitle>
                </CardBody>
                <ReactPlayer url={this.props.video} controls width='100%' />
                <CardBody>
                <CardSubtitle style={{backgroundColor:'black'}} ItemSubtitle={this.props.ItemSubtitle} />
                    <CardText>{this.props.ItemDirector}</CardText>
                    <CardText>{this.props.ItemWriters}</CardText>
                    <CardText>{this.props.ItemStars}</CardText>
                    <CardText>{this.props.ItemStoryLine}</CardText>
                    <CardText>{this.props.ItemRelease}</CardText>
                </CardBody>
            </Card>
        ); 
    }
}

export default ItemCardVideo;