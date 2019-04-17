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
        <Card>
          <CardBody>
            <CardTitle ItemTitle={this.props.ItemTitle}/>
            <CardSubtitle ItemSubtitle={this.props.ItemSubtitle}/>
          </CardBody>
          <ReactPlayer url={this.props.video} controls width='100%'/>
          <CardBody>
            <CardText>{this.props.ItemSynopsis}blablabla</CardText>
            <CardText>{this.props.ItemSynopsis}blablabla</CardText>
         
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
    );
  }
}

export default HomeCardsVideo;
