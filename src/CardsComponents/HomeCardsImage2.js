/** src/CardsComponents/HomeCardsimage2.js/
 Child component of HomeCards.js, which contains the card double image 
 */

 import React, { Component } from "react";
import { Row, Col } from "reactstrap";

/** Components list of reactstrap library */
import {
  Card,
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
        <Card>
          <CardBody>
            <CardTitle ItemTitle={this.props.ItemTitle}/>
            <CardSubtitle ItemSubtitle={this.props.ItemSubtitle}/>
          </CardBody>
          <Row>
          <Col >
          <img width="100%" src={this.props.image} alt={this.props.ItemTitle} />
          </Col>
          <Col>
          <img width="100%" src={this.props.image2} alt={this.props.ItemTitle}/>
          </Col>
          </Row>
          <CardBody>
            <CardText ItemSynopsis={this.props.ItemSynopsis}/>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
    );
  }
}

export default HomeCardsImage2;
