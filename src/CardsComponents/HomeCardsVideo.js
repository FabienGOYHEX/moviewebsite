/** src/CardsComponents/HomeCardsVideo.js/
 Child component of HomeCards.js, which contains the card video 
 */

import React, { Component } from "react";

//import ReactPlayer dependancies in order to read video
import ReactPlayer from 'react-player'

/** Components list of reactstrap library */
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class HomeCardsVideo extends Component {
  //@constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle movieTitle={this.props.movieTitle}/>
            <CardSubtitle movieSubtitle={this.props.movieSubtitle}/>
          </CardBody>
          <ReactPlayer url={this.props.video} controls width='100%'/>
          <CardBody>
            <CardText>{this.props.movieSynopsis}blablabla</CardText>
            <CardText>{this.props.movieSynopsis}blablabla</CardText>
         
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HomeCardsVideo;
