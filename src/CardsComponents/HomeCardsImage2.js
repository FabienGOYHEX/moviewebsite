/** src/CardsComponents/HomeCardsimage2.js/
 Child component of HomeCards.js, which contains the card double image 
 */

 import React, { Component } from "react";
import { Row, Col } from "reactstrap";

/** Components list of reactstrap library */
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class HomeCardsImage2 extends Component {
  // @constructor
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
          <Row>
          <Col >
          <img width="100%" src={this.props.image} alt={this.props.movieTitle} />
          </Col>
          <Col>
          <img width="100%" src={this.props.image2} alt={this.props.movieTitle}/>
          </Col>
          </Row>
          <CardBody>
            <CardText movieSynopsis={this.props.movieSynopsis}/>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HomeCardsImage2;
